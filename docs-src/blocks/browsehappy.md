---
layout: example
title: Browsehappy
description: If user's browser is older than IE10, this block appears in the page as a notification to notify her. You usually consider to put it after opening `<body>` tag.
permalink: /blocks/browsehappy.html
root_dir: ../
---




# Usage

If user's browser is older than IE10, *f8-browsehappy* appears in the page as
a notification to notify her. You usually consider to put it after opening
`<body>` tag.

{% example u8-curved %}
<div class="f8-browsehappy">
  <div class="f8-browsehappy__modal">
    <h1>Oh, crap!</h1>
    <p>You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/" rel="external" target="_blank">upgrade
    your browser</a> to improve your experience.</p>
  </div>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<!--[if lt IE 10]>
<div class="f8-browsehappy">
  <div class="f8-browsehappy__modal">
    <h1>Oh, crap!</h1>
    <p>You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/" rel="external" target="_blank">upgrade
    your browser</a> to improve your experience.</p>
  </div>
</div>
<![endif]-->
{% endprettify %}
