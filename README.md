The "**f8-button**" is an awesome collection of CSS3 Buttons for those who love good design. All-in-One solution for any webpage. Variety of colors, effects, states, and sizes.

[Preview the buttons here](https://imalitavakoli.github.io/f8-button/preview/).  
[Read the documentations here](https://imalitavakoli.github.io/f8-button/docs/).

*f8-button* is part of my personal custom Front-end Framework (FRAMEWORK 8) which has infinity (8) abilities! Because buttons are needed everywhere and some of my friends suggested why not to share such full-featured library with the world, so here we are! I decided to share not only the buttons, but also some other helpful blocks of my framework (f8-button block + some other useful blocks).




# Features

- **All-in-One solution** for buttons everywhere.
- Compatible with all modern browsers, frameworks, and web environments.
- Supported on `<a>`, `<button>`, and `<input>` tags.
- Designed based on **BEM Methodology**.
- **Used CSS variables** for colors, sizes, and spaces.
- **Call-to-action buttons** to draw users attention.
- Variety of effects to make unique & beautiful buttons.
- Active / Disable / Loading States.
- Variety of predefined loaders (spinners) by the help of *Icon* block.
- Unlimited designs when used with other font icon libraries (such as font-awesome) or utility CSS classes.




# Where are the 'f8-button' block codes?

The `app/_core/blocks/button` directory holds all of the codes related to the *Button* block. Everything else (such as other blocks, samples, or codes) are just here to sugarize your experience.




# What other blocks are also included?

Here I also included some more helpful blocks along side of the '*f8-button*' block itself! Because buttons get crazier with help of icons and some utility CSS classes, right? So here are the other blocks:

- `app/_core/blocks/browsehappy`: If user's browser is older than IE10, this appears in the page as a notification to notify her.
- `app/_core/blocks/icon`: Some SVG icons which are embedded into the DOM automatically.
- `app/_core/blocks/utils`: Immutable classes designed to reduce duplication. Single-purpose, and some more utility classes.

**Tip!** All of the blocks are RTL compatible! You can use the [RTLCSS](https://rtlcss.com/) framework to compile the RTL version of your *.css* files.



# How to use (for beginner users)

If you don't like modular SASS and ES6+ files and like the old-school of the things ready to be used in simple projects as well, then you can find the ready-to-use *.css* & *.js* files here:

- `dist/scripts/f8component-utils.min.js`
- `dist/styles/f8-button.css`
- `dist/styles/f8-button.min.css`
- `dist/styles/f8component-utils.css`
- `dist/styles/f8component-utils.min.css`
- `dist/styles/f8component-utils.rtl.css`
- `dist/styles/f8component-utils.rtl.min.css`




# How to use (for advanced users)

Well, you can simply copy and paste the codes that you need inside your own workflows and projects... I mean you don't actually need to compile the SASS and ES6+ files by using the workflow that I have used for my project here! But if you like to do so, here I explain how you can setup my environment on your own machine in order to run the Gulp tasks to preview your modification for development, and build your final touches for production.  
In my project structure, the block and components are imported in `app/scripts/main.js` and `app/styles/main.scss` files, and will be processed by the Gulp tasks to be concatenated and minified.


## Install Required Dependencies

You must first [download and install node.js](https://nodejs.org/download/) (which includes npm) on your machine. npm stands for [node packaged modules](https://www.npmjs.com/) and is a way to manage development dependencies through node.js.

Then, open your Terminal / Command Prompt and run the following commands.  
**TIP!** If you're not so familiar with command line tools yet, [here is a great start](http://webdesign.tutsplus.com/series/the-command-line-for-web-design--cms-777)!


- Install global dependencies: `npm install --global gulp-cli@2.3.0`
- Change directory to this folder on your machine: `cd my/path/to/here`
- Run `npm install` to install local dependencies

- *Optional!* Run `npm install --save <package>` to install new frontend dependencies
- *Optional!* Run `npm install --save-dev <package>` to install new build dependencies


## Run/Build the Project

- Run `npm start` to preview and watch for changes
- Run `npm run build` to build your webapp for production

- *Optional!* Run `npm start -- --port=8080` to preview and watch for changes in port `8080`
- *Optional!* Run `npm run serve:dist` to preview the production build
- *Optional!* Run `npm run serve:dist -- --port=5000` to preview the production build in port `5000`




# How to compile documentations

**Well, you don't need to compile the documentation files ever!** Most of the times you just need to simply use the blocks in your projects and that's it! But if you liked to change the codes, or add features to the *Button* block itself or other blocks, and then update the documentations as well, then here's how to compile the updated documentation files.

**Note!** If you liked this repository and added some cool features to the blocks or something, feel free to let me know as well! I'd be more than happy to see what you guys come up with :smile:


## Install Required Dependencies

You must first [download and install Ruby](https://www.ruby-lang.org/en/downloads/) on your machine. The documentations have been built by Jekyll V4, so they require Ruby V2.5.0 or higher. So after installing Ruby, run `ruby -v` and `gem -v` on your Terminal / Command Prompt to make sure your machine has the required libraries installed.

Then, open your Terminal / Command Prompt and run the following commands.

- Install global dependencies: `gem install jekyll:4.3.2 bundler:2.4.14`


## Run/Build the Docs

- Change directory to `docs-src` folder on your machine: `cd my/path/to/here/docs-src`
- Run `bundle exec jekyll build` to build your documentations

- *Optional!* Run `bundle exec jekyll serve` to preview and watch for changes


## 3rd libraries that Docs files are using

Well, if you're going to compile the documentation files, it may be useful to know the 3rd library CSS, JS, font files that the documentation is using.

**Tip!** `docs-src/assets/scripts/vendor/f8*` and `docs-src/assets/styles/vendor/f8*` files are actually our target CSS and JS files of our own project! Documentation needs to use them in order to show their coded examples.

- `docs-src/assets/fonts/bootstrapicons`: Bootstrap-Icons-v1.10.5
- `docs-src/assets/fonts/fontawesome`: Font-Awesome-Free-v5.15.4

- `docs-src/assets/scripts/vendor/modernizr.min.js`: Modernizr-v3.12.0
- `docs-src/assets/scripts/bootstrap.min.js`: Bootstrap-v3.3.6
- `docs-src/assets/scripts/framework8.docs.min.js`: Framework8-v1.3.0-Docs-Component (part of my personal framework) = icon + smooth-scrolling
- `docs-src/assets/scripts/vendor.min.js`: jquery-v3.4.1 + jquery.easing-v1.4.1 + jquery-validation-v1.19.5 + jquery-form-v4.3.0 + code-prettify

- `docs-src/assets/styles/bootstrap.min.css`: Bootstrap-v3.3.6
- `docs-src/assets/styles/framework8.docs.min.css`: Framework8-v1.3.0-Docs-Component (part of my personal framework) = utils + browsehappy + code-prettify + icon
- `docs-src/assets/styles/vendor.min.css`: normalize.css-v8.0.1 + Font-Awesome-Free-v5.15.4-(customized) + Bootstrap-Icons-v1.10.5-(customized)