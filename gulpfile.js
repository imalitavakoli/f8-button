const distDir = 'preview'; // distribution directory
const liquifyIncludesDir = 'app/_includes';
const coreDir = 'app/_core';
const browserifyEntry = 'app/scripts/main.js';
const rtlcssSrc = 'main.css';
const browserifyBundle = 'main.js';
const mainFileNames = 'main'; // main CSS/JS files that are feeded in our HTML (because such files get updated frequently, we add a time parameter to the URL of the files in order to prevent browser cache)

const liquid = require('@tuanpham-dev/gulp-liquidjs');
const browserify = require('browserify');
const babelify = require('babelify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');




const { src, dest, watch, series, parallel, lastRun } = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const fs = require('fs');
const mkdirp = require('mkdirp');
const Modernizr = require('modernizr');
const browserSync = require('browser-sync');
const del = require('del');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { argv } = require('yargs');

const $ = gulpLoadPlugins();
const server = browserSync.create();

const port = argv.port || 9000;

const isProd = process.env.NODE_ENV === 'production';

function styles() {
  const f = $.filter([`.tmp/styles/${rtlcssSrc}`], {restore: true});

  return src('app/styles/*.scss', {
    sourcemaps: !isProd,
  })
    .pipe($.plumber())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe(dest('.tmp/styles', {sourcemaps: !isProd,}))
    .pipe(server.reload({stream: true}))
    .pipe(f)
    .pipe($.rtlcss()) // Convert to RTL
    .pipe($.rename({ suffix: '.rtl' })) // Append ".rtl" to the filename
    .pipe(dest('.tmp/styles', {sourcemaps: !isProd,})); // Output RTL stylesheets
};

function scripts() {
  const b = browserify({
    entries: browserifyEntry,
    transform: babelify,
    debug: true
  });
  return b.bundle()
          .pipe(source(browserifyBundle))
          .pipe($.plumber())
          .pipe(buffer())
          .pipe(dest('.tmp/scripts', {
            sourcemaps: !isProd ? '.' : false,
          }))
          .pipe(server.reload({stream: true}));
};

async function modernizr() {
  const readConfig = () => new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/modernizr.json`, 'utf8', (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    })
  })
  const createDir = () => new Promise((resolve, reject) => {
    mkdirp(`${__dirname}/.tmp/scripts`, err => {
      if (err) reject(err);
      resolve();
    })
  });
  const generateScript = config => new Promise((resolve, reject) => {
    Modernizr.build(config, content => {
      fs.writeFile(`${__dirname}/.tmp/scripts/modernizr.js`, content, err => {
        if (err) reject(err);
        resolve(content);
      });
    })
  });

  const [config] = await Promise.all([
    readConfig(),
    createDir()
  ]);
  await generateScript(config);
}

const lintBase = (files, options) => {
  return src(files)
    .pipe($.eslint(options))
    .pipe(server.reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!server.active, $.eslint.failAfterError()));
}
function lint() {
  return lintBase('app/scripts/**/*.js', { fix: true })
    .pipe(dest('app/scripts'));
};

function liquify() {
  return src('app/*.{html,liquid}')
    .pipe( liquid({engine: {root: [liquifyIncludesDir], dynamicPartials:false}, filters:{now: () => new Date().getTime()}}) )
    .pipe(dest('.tmp'));
}

function html() {
  return src('.tmp/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
    .pipe($.if(/\.css$/, $.postcss([cssnano({safe: true, autoprefixer: false})])))
    .pipe($.replace(`${mainFileNames}.js`, `${mainFileNames}.js?${new Date().getTime()}`))
    .pipe($.replace(`${mainFileNames}.css`, `${mainFileNames}.css?${new Date().getTime()}`))
    .pipe($.replace(`${mainFileNames}-rtl.css`, `${mainFileNames}-rtl.css?${new Date().getTime()}`))
    .pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: {compress: {drop_console: true}},
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(dest(distDir));
}

function images() {
  return src('app/images/**/*', { since: lastRun(images) })
    .pipe($.imagemin())
    .pipe(dest(`${distDir}/images`));
};

function fonts() {
  return src('app/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe($.if(!isProd, dest('.tmp/fonts'), dest(`${distDir}/fonts`)));
};

function extras() {
  src(['app/*', '!app/*.html', '!app/_core', '!app/_includes'], {
    dot: true
  }).pipe(dest(distDir));

  return src(['app/extras/**/*'], {
    dot: true
  }).pipe(dest(`${distDir}/extras`));
};

function clean() {
  return del(['.tmp', distDir], {force: true})
}

function measureSize() {
  return src(`${distDir}/**/*`)
    .pipe($.size({title: 'build', gzip: true}));
}

const build = series(
  clean,
  parallel(
    lint,
    series(parallel(styles, scripts, modernizr), liquify, html),
    images,
    fonts,
    extras
  ),
  measureSize
);

function startAppServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });

  watch([
    '.tmp/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', server.reload);

  watch(['app/*.{html,liquid}', `${liquifyIncludesDir}/*.{html,liquid}`], liquify);
  watch(['app/styles/**/*.scss', `${coreDir}/**/*.scss`], styles);
  watch(['app/scripts/**/*.js', `${coreDir}/**/*.js`], scripts);
  watch('modernizr.json', modernizr);
  watch('app/fonts/**/*', fonts);
}

function startDistServer() {
  server.init({
    notify: false,
    port,
    server: {
      baseDir: distDir,
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  });
}

let serve;
if (!isProd) {
  serve = series(clean, parallel(styles, scripts, modernizr, fonts), liquify, startAppServer);
} else {
  serve = series(build, startDistServer);
}

exports.serve = serve;
exports.build = build;
exports.default = build;
