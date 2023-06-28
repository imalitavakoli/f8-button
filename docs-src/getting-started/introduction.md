---
layout: example
title: Introduction
description: An overview of f8-button, and starter template.
permalink: /getting-started/introduction.html
root_dir: ../
---




# Introduction

*Button* block is a single `.css` file. Just feed your `.html` file with it and you're good to go.

We have provided you with the *Utils* component too. Cheers! This component itself contains the following blocks of the **Framework8**:
- *Browsehappy*
- *Icon*
- *Utils*




## Features

- Supported on `<a>`, `<button>`, and `<input>` tags
- Light; it's only *10KB*
- Easy to use; it's designed based on BEM Methodology
- Used CSS variables for colors, sizes, and spaces.
- Call-to-action button
- Button with icon
- Variety of colors
- Variety of sizes
- Block visual Modifier
- Variety of effects
- Active / Disable / Loading states
- Variety of predefined loaders (spinners)
- Combination with other font icon libraries (such as font-awesome)
- Combination with Framework8 utility CSS classes




## Precompiled Files

Regarding compiled and ready-to-use files, you'll see something like this:
```
dist/
├── scripts/
│   └── f8component-utils.min.js
└── styles/
    ├── f8-button.css
    ├── f8-button.min.css
    ├── f8component-utils.css
    ├── f8component-utils.min.css
    ├── f8component-utils.rtl.css
    └── f8component-utils.rtl.min.css
```
Basically these are the only files that you need to make the block work in any web project.




## Source Files

Actually you don't need to use the source files in your projects, however, they are available to you.  
All of the SASS and ES6+ source files are in `app/_core` directory. Unlike the compiled minified `.js` and `.css` files in `dist/scripts` and `dist/styles` directories, the source files are well formatted with comments everywhere. If you need to edit them for a particular project, you can simply modify them and read `README.md` to learn how to compile the results.

Source files are the following and more:
```
app/
├── _core/
    ├── blocks/
    └── bundles/
```

--------------------------------------------------------------------------------








# Quick Start

Feed your `.html` files with the following and you're good to go:
- `dist/styles/f8-button.min.css`


If you also like to use the *Utils* component beside the *Button* block, you need the following files as well:
- `dist/scripts/f8component-utils.min.js`
- `dist/styles/f8component-utils.min.css`

{% alert info %}
**Tip!** If you're page is in a RTL language, and you like to use the *Utils* component, then you need to use `dist/styles/f8component-utils.rtl.min.css`.
{% endalert %}

{% alert info %}
**jQuery required!** Please note that the component requires [jQuery version 1.9.1+](https://code.jquery.com/) to be included, as shown in the starter template.
{% endalert %}

{% alert warning %}
**Warning!** If you're using the *Utils* component too, remember to always put the `f8component-utils.min.css` stylesheet before the stylesheet of the *Button* block itself (as shown in the starter template) to get appropriate results in all situations. Because `f8component-utils.min.css` includes some major styles, and *Button* block may override them specifically.
{% endalert %}

Of course the block goes well with different front-end frameworks and libraries as well, such as [Bootstrap](http://getbootstrap.com/), [MDL](https://getmdl.io/), and etc. So it doesn't matter in what environment you're using the block, it styles your HTML elements and works as expected. Happy coding!

e.g. if you like to take advantage of the Fontawesome icons in your pages, as their documentation explains, you need to implement its `.css` and dependent fonts into your project too. [Click here](http://fontawesome.io/) to read their documentation, or just checkout our sample HTML file, `preview/index.html`.

--------------------------------------------------------------------------------








# Starter Template

Here is a boilerplate HTML that runs the block successfully.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="assets/styles/f8component-utils.min.css"> <!-- Optional -->
    <link rel="stylesheet" href="assets/styles/f8-button.min.css">
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script> <!-- Optional -->
    <script src="assets/scripts/f8component-utils.min.js"></script> <!-- Optional -->
  </body>
</html>
{% endprettify %}

--------------------------------------------------------------------------------








# BEM Methodology Mindset

All of the **Framework8** blocks are made based on the [BEM Methodology](https://en.bem.info/methodology/). So we thought to talk about this methodology here a little bit, if you're not already familiar with it. This introduction to BEM helps you grasp how to use the blocks faster and easier.




## Introduction

There are plenty of [methodologies](https://github.com/ikkou/awesome-css#architecture) out there aiming to reduce the CSS footprint, organize cooperation among programmers and maintain large CSS codebases. But we and many others, such as Google's [MDL](https://getmdl.io/) front-end framework, have chosen BEM.

BEM is an abbreviation of the key elements of the methodology — Block, Element and Modifier.
- **Block**: Standalone entity that is meaningful on its own. e.g. `header`, `container`, `menu`, `checkbox`, `input`.
- **Element**: A part of a block that has no standalone meaning and is semantically tied to its block. e.g. `menu item`, `list item`, `checkbox caption`, `header title`.
- **Modifier**: A flag on a block or element. Use them to change appearance or behavior. e.g. `disabled`, `highlighted`, `checked`, `fixed`, `size big`, `color yellow`.




## Naming Convention

Having a standard naming convention can significantly increase development speed, debugging, and the implementation of new features in legacy code. The BEM approach does that all while keeping simple things simple.

- **Block**: A block name follows the `block-name` scheme. e.g. `menu`, `lang-switcher`.
- **Element**: An element name must identify its belonging to the block. It is delimited by a double underscore (`__`). The full name of an element is created using this scheme: `block-name__elem-name`. e.g. `menu__item`, `lang-switcher__lang-icon`.
- **Modifier**: A modifier name must identify its belonging to the block or its element. It is delimited by double hyphens (`--`). The full name of a modifier is created using the following schemes:
  - Block modifier: `block-name--mod-name`. e.g. `menu--hidden`.
  - Element modifier: `block-name__elem-name--mod-name`. e.g. `menu__item--visible`.

This naming convention makes the name of CSS selectors as informative and clear as possible. This will help make code development and debugging easier for producers, and also make learning the project's style guide faster for codebase users.

--------------------------------------------------------------------------------








# Optimization Tips

When you like to upload your website or web app distribution files on server, there are several optimization techniques that you can take into consideration to deliver content to your users as fast as possible.




## Gzip Compression & Browser Caching

This is almost one of the most important techniques to speed up your contents load time on server.

**Gzip** is a method of compressing files which helps server to load files faster to your users. Enabling Gzip compression is a standard practice.

**Browser caching** stores webpage resource files on a local computer when a user visits a webpage. When user goes to another page on your website or web app, files such as HTML, CSS, images, and etc. do not need to be loaded again, and in result your webpages load faster.

So you can simply enable Gzip Compression & Browser Caching for your webpages by creating a `.htaccess` file on the root directory (where you're uploading your contents) on your server and adding [the codes here](https://github.com/h5bp/html5-boilerplate/blob/master/dist/.htaccess) to the file.




## Content Delivery Network

A content delivery network or content distribution network (CDN) is a globally distributed network of proxy servers deployed in multiple data centers. The goal of a CDN is to serve content to end-users with high availability and high performance.

You can use a CDN to deliver static files such as CSS, JS, images, and etc. to your users faster. We recommend [MaxCDN](https://www.maxcdn.com/) or [CloudFlare](http://www.cloudflare.com/). However, using a CDN may cost you some monthly fees. So using it is completely optional and according to your project's scale.




## Fast Web Hosting Servers

A fast and reliable Hosting Company/Server helps you a lot to deliver contents to your users in the best way. [Click here](http://themeforest.net/get_hosting) to checkout some recommended Hosting Services.
