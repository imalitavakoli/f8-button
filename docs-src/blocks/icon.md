---
layout: example
title: Icon
description: Some SVG icons which are embedded into the DOM automatically, so that they can be customized by CSS. It includes some useful icons which you cannot find in other places. It can also accept your own images or icons, and apply its effects on your custom SVG, GIF, or JPG images.
permalink: /blocks/icon.html
root_dir: ../
---




# Requirements

{% alert info %}
**jQuery required!** Please note that the block requires [jQuery version 1.9.1+](https://code.jquery.com/) to be included.
{% endalert %}

Part of the *Icon* block is in JavaScript, and all of the **Framework8** JavaScript blocks, including this block, require jQuery.

--------------------------------------------------------------------------------








# CSS Custom Properties

{% prettify dark, u8-text-nowrap, u8-u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<style>
  .f8-icon {
    --f8-icon-color: var(--f8-blocks-def-text-color);
    --f8-icon-size: 32px;
  }
</style>
{% endprettify %}

--------------------------------------------------------------------------------








# Simple Icons

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-framework8"></i>
<i class="f8-icon fa fa-check-circle"></i>
<i class="f8-icon u8-rounded u8-overflow-hidden"><img alt="Framework8" src="{{ "/assets/images/f8.png" | replace_first:'/', page.root_dir}}"></i>

<i class="f8-icon">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
    <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
    </path>
  </svg>
</i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8"></i>
<i class="f8-icon fa fa-check-circle"></i>
<i class="f8-icon u8-rounded u8-overflow-hidden"><img alt="Framework8" src="images/f8.png"></i>

<i class="f8-icon">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
    <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
    </path>
  </svg>
</i>
{% endprettify %}

--------------------------------------------------------------------------------








# Modifiers

There are different types of modifiers:
- Color
- Size
- Effect
- Ic




## Color Modifiers

`.f8-icon--color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish,inherit}`

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-inherit"></i>
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-primary"></i>
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-accent"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-inherit"></i>
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-primary"></i>
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-accent"></i>
{% endprettify %}


`.f8-icon--color-fitful-agree`: This color modifier is fitful! It lets the block to be whtish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.f8-icon--color-fitful-against`: This color modifier is the opposite of agree fitful color modifier.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--color-fitful-against"></i>
{% endprettify %}


{% alert info %}
**Heads up!** You can also completely forget about the color modifiers, and just simply edit the color CSS custom properties of the block.
{% endalert %}

{% example u8-curved %}
<i style="--f8-icon-color: pink;" class="f8-icon f8-icon--ic-framework8"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i style="--f8-icon-color: pink;" class="f8-icon f8-icon--ic-framework8"></i>
{% endprettify %}




## Size Modifiers

`.f8-icon--size-{xs,sm,lg,100,inherit}`

{% example u8-curved %}
<i class="f8-icon fa fa-check-circle f8-icon--size-xs"></i>
<i class="f8-icon fa fa-check-circle f8-icon--size-sm"></i>
<i class="f8-icon fa fa-check-circle f8-icon--size-lg"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon fa fa-check-circle f8-icon--size-xs"></i>
<i class="f8-icon fa fa-check-circle f8-icon--size-sm"></i>
<i class="f8-icon fa fa-check-circle f8-icon--size-lg"></i>
{% endprettify %}


`.f8-icon--size-100`: Sets the icon's width/height/font-size to 100%, so that the block can cover its container.

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
{% endprettify %}


{% alert info %}
**Heads up!** You can also give your custom width/height to the Icon block itself while using the 100% size modifier to limit the icon size.
{% endalert %}

{% example u8-curved %}
<i style="width: 80px;" class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i style="width: 80px;" class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
{% endprettify %}


`.f8-icon--size-inherit`: Sets the icon's width/height/font-size to 1em, so that the block can inherit its size from its container's font-size.

{% example u8-curved %}
<i class="f8-icon fa fa-check-circle f8-icon--size-inherit"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon fa fa-check-circle f8-icon--size-inherit"></i>
{% endprettify %}


{% alert info %}
**Heads up!** You can also completely forget about the size modifiers, and just simply edit the size CSS custom property of the block.
{% endalert %}

{% example u8-curved %}
<i style="--f8-icon-size: 100px;" class="f8-icon f8-icon--ic-framework8"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i style="--f8-icon-size: 100px;" class="f8-icon f8-icon--ic-framework8"></i>
{% endprettify %}




## State Modifiers

These states disappear the icon.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8 f8-icon--state-faded-out"></i>
<i class="f8-icon f8-icon--ic-framework8 f8-icon--state-zoomed-out"></i>
{% endprettify %}


`.f8-icon--state-inner`: This modifier is useful when you like to put another icon inside another one! It's more useful when we're using the battery icon and its indicators should sit inside of it. This modifier only sets the icon's position to absolute so that it can gently sit at the center of its parent icon.

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-battery f8-icon--color-inherit f8-icon--size-xs">
  <i style="--f8-icon-color: #00c5a2;" class="f8-icon f8-icon--ic-battery-life-100 f8-icon--size-xs f8-icon--state-inner"></i>
  <i class="f8-icon f8-icon--ic-battery-charger f8-icon--color-inherit f8-icon--size-xs f8-icon--state-inner"></i>
</i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-battery f8-icon--color-inherit f8-icon--size-xs">
  <i style="--f8-icon-color: #00c5a2;" class="f8-icon f8-icon--ic-battery-life-100 f8-icon--size-xs f8-icon--state-inner"></i>
  <i class="f8-icon f8-icon--ic-battery-charger f8-icon--color-inherit f8-icon--size-xs f8-icon--state-inner"></i>
</i>
{% endprettify %}


`.f8-icon--state-inline`: This modifier is useful when you're using the icon among a text. It sets `vertical-align: middle; bottom: .1em;` CSS rules for the icon to sit gently among paragraphs.

{% example u8-curved %}
<p>Lorem ipsum <i class="f8-icon f8-icon--size-inherit f8-icon--state-inline f8-icon--ic-framework8"></i> dolor sit amet</p>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<p>Lorem ipsum <i class="f8-icon f8-icon--size-inherit f8-icon--state-inline f8-icon--ic-framework8"></i> dolor sit amet</p>
{% endprettify %}




## Ic Modifiers

`.f8-icon--ic-{framework8,counter,loader-text}`

{% alert info %}
`.f8-icon--ic-link`: Uses base64 embedded SVG icon by 'Viktor Vorobyev' from [thenounproject.com](https://thenounproject.com/search/?q=link&i=534671)  
`.f8-icon--ic-skull`: Uses base64 embedded SVG icon by 'Mega Agustina' from [thenounproject.com](https://thenounproject.com/search/?q=skull&i=3690407)  
`.f8-icon--ic-heart`: Uses base64 embedded SVG icon by 'creative outlet' from [thenounproject.com](https://thenounproject.com/search/?q=heart&i=585522)  
`.f8-icon--ic-brain`: Uses base64 embedded SVG icon by 'Cassandra Cappello' from [thenounproject.com](https://thenounproject.com/search/?q=brain&i=300950)  
`.f8-icon--ic-package`: Uses base64 embedded SVG icon by 'creative outlet' from [thenounproject.com](https://thenounproject.com/search/?q=box&i=585486)  
`.f8-icon--ic-hourglass`: Uses base64 embedded SVG icon by 'Panda Icons' from [thenounproject.com](https://thenounproject.com/search/?q=time&i=1835240)  
`.f8-icon--ic-star-empty`: Uses base64 embedded SVG icon by 'hunotika' from [thenounproject.com](https://thenounproject.com/search/?q=star&i=42520)  
`.f8-icon--ic-fire`: Uses base64 embedded SVG icon by 'BomSymbols' from [thenounproject.com](https://thenounproject.com/search/?q=fire&i=938835)  
`.f8-icon--ic-snow`: Uses base64 embedded SVG icon by 'Adrien Coquet' from [thenounproject.com](https://thenounproject.com/search/?q=snow&i=4374316)  
`.f8-icon--ic-power`: Uses base64 embedded SVG icon by 'Mas Dhimas' from [thenounproject.com](https://thenounproject.com/search/?q=power&i=2818950)  
`.f8-icon--ic-om`: Uses base64 embedded SVG icon by 'Cédric Villain' from [thenounproject.com](https://thenounproject.com/search/?q=om&i=58853)  
`.f8-icon--ic-face-satisfied`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=happy&i=274470)  
`.f8-icon--ic-face-happy`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=happy&i=274478)  
`.f8-icon--ic-face-sad`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=sad&i=274479)  
`.f8-icon--ic-face-impassive`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=impassive&i=274471)  
`.f8-icon--ic-face-angry`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=smashicons&i=274467)  
`.f8-icon--ic-face-wink`: Uses base64 embedded SVG icon by 'Ben Davis' from [thenounproject.com](https://thenounproject.com/search/?q=wink&i=274437)  
`.f8-icon--ic-calendar`: Uses base64 embedded SVG icon by 'iconsphere' from [thenounproject.com](https://thenounproject.com/search/?q=calendar&i=697504)  

`.f8-icon--ic-loader-{spinner,wave,bars}`: Use base64 embedded SVG icons by ['Aurer'](https://codepen.io/aurer/pen/jEGbA)  
`.f8-icon--ic-loader-{dots,puff,rings}`: Use base64 embedded SVG icons by ['SamHerbert'](https://github.com/SamHerbert/SVG-Loaders)
{% endalert %}

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-framework8"></i>

<i class="f8-icon f8-icon--ic-link"></i>

<i class="f8-icon f8-icon--ic-skull"></i>
<i class="f8-icon f8-icon--ic-heart"></i>
<i class="f8-icon f8-icon--ic-brain"></i>

<i class="f8-icon f8-icon--ic-package"></i>

<i class="f8-icon f8-icon--ic-hourglass"></i>

<i class="f8-icon f8-icon--ic-star-empty"></i>
<i class="f8-icon f8-icon--ic-star-full"></i>

<i class="f8-icon f8-icon--ic-fire"></i>
<i class="f8-icon f8-icon--ic-snow"></i>

<i class="f8-icon f8-icon--ic-power"></i>
<i class="f8-icon f8-icon--ic-sleep"></i>
<i class="f8-icon f8-icon--ic-awake"></i>

<i class="f8-icon f8-icon--ic-om"></i>

<i class="f8-icon f8-icon--ic-sound-on"></i>
<i class="f8-icon f8-icon--ic-sound-off"></i>

<i class="f8-icon f8-icon--ic-print-on"></i>
<i class="f8-icon f8-icon--ic-print-off"></i>

<i class="f8-icon f8-icon--ic-face-satisfied"></i>
<i class="f8-icon f8-icon--ic-face-happy"></i>
<i class="f8-icon f8-icon--ic-face-sad"></i>
<i class="f8-icon f8-icon--ic-face-impassive"></i>
<i class="f8-icon f8-icon--ic-face-angry"></i>
<i class="f8-icon f8-icon--ic-face-wink"></i>

<i class="f8-icon f8-icon--ic-calendar"></i>

<i class="f8-icon f8-icon--ic-battery"></i>
<i class="f8-icon f8-icon--ic-battery-charger"></i>
<i class="f8-icon f8-icon--ic-battery-life-100"></i>
<i class="f8-icon f8-icon--ic-battery-life-50"></i>
<i class="f8-icon f8-icon--ic-battery-life-10"></i>

<i class="f8-icon f8-icon--ic-loader-text"></i>
<i class="f8-icon f8-icon--ic-loader-spinner"></i>
<i class="f8-icon f8-icon--ic-loader-wave"></i>
<i class="f8-icon f8-icon--ic-loader-bars"></i>
<i class="f8-icon f8-icon--ic-loader-dots"></i>
<i class="f8-icon f8-icon--ic-loader-puff"></i>
<i class="f8-icon f8-icon--ic-loader-rings"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-framework8"></i>

<i class="f8-icon f8-icon--ic-link"></i>

<i class="f8-icon f8-icon--ic-skull"></i>
<i class="f8-icon f8-icon--ic-heart"></i>
<i class="f8-icon f8-icon--ic-brain"></i>

<i class="f8-icon f8-icon--ic-package"></i>

<i class="f8-icon f8-icon--ic-hourglass"></i>

<i class="f8-icon f8-icon--ic-star-empty"></i>
<i class="f8-icon f8-icon--ic-star-full"></i>

<i class="f8-icon f8-icon--ic-fire"></i>
<i class="f8-icon f8-icon--ic-snow"></i>

<i class="f8-icon f8-icon--ic-power"></i>
<i class="f8-icon f8-icon--ic-sleep"></i>
<i class="f8-icon f8-icon--ic-awake"></i>

<i class="f8-icon f8-icon--ic-om"></i>

<i class="f8-icon f8-icon--ic-sound-on"></i>
<i class="f8-icon f8-icon--ic-sound-off"></i>

<i class="f8-icon f8-icon--ic-print-on"></i>
<i class="f8-icon f8-icon--ic-print-off"></i>

<i class="f8-icon f8-icon--ic-face-satisfied"></i>
<i class="f8-icon f8-icon--ic-face-happy"></i>
<i class="f8-icon f8-icon--ic-face-sad"></i>
<i class="f8-icon f8-icon--ic-face-impassive"></i>
<i class="f8-icon f8-icon--ic-face-angry"></i>
<i class="f8-icon f8-icon--ic-face-wink"></i>

<i class="f8-icon f8-icon--ic-calendar"></i>

<i class="f8-icon f8-icon--ic-battery"></i>
<i class="f8-icon f8-icon--ic-battery-charger"></i>
<i class="f8-icon f8-icon--ic-battery-life-100"></i> <!-- Only useful when used inside of the battery icon as an inner icon -->
<i class="f8-icon f8-icon--ic-battery-life-50"></i> <!-- Only useful when used inside of the battery icon as an inner icon -->
<i class="f8-icon f8-icon--ic-battery-life-10"></i> <!-- Only useful when used inside of the battery icon as an inner icon -->

<i class="f8-icon f8-icon--ic-loader-text"></i>
<i class="f8-icon f8-icon--ic-loader-spinner"></i>
<i class="f8-icon f8-icon--ic-loader-wave"></i>
<i class="f8-icon f8-icon--ic-loader-bars"></i>
<i class="f8-icon f8-icon--ic-loader-dots"></i>
<i class="f8-icon f8-icon--ic-loader-puff"></i>
<i class="f8-icon f8-icon--ic-loader-rings"></i>
{% endprettify %}


{% alert info %}
**Heads up!** If you're also using [modernizr](https://modernizr.com/) inside your pages, for a better user experience, `.f8-icon--ic-hourglass` will be shown by default when you're using one of the loader SVG animation icons in browsers that do not support SVG animations such as IE and old Edge.
{% endalert %}


The calendar icon also supports dynamic date text.

{% example u8-curved %}
<i class="f8-icon f8-icon--ic-calendar" data-f8-date="29" title="December 29, 2016"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--ic-calendar" data-f8-date="29" title="December 29, 2016"></i>
{% endprettify %}


The counter icon can also count any element that has its counter-increment style
value to `f8-icon-counter`.

{% example u8-curved %}
<ol style="list-style-type: none;">
  <li style="counter-increment: f8-icon-counter;"><i class="f8-icon f8-icon--ic-counter"></i> Item One</li>
  <li style="counter-increment: f8-icon-counter;"><i class="f8-icon f8-icon--ic-counter"></i> Item Two</li>
</ol>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<ol style="list-style-type: none;">
  <li style="counter-increment: f8-icon-counter;"><i class="f8-icon f8-icon--ic-counter"></i> Item One</li>
  <li style="counter-increment: f8-icon-counter;"><i class="f8-icon f8-icon--ic-counter"></i> Item Two</li>
</ol>
{% endprettify %}

--------------------------------------------------------------------------------








# All Modifiers Together

Now let's combine all modifiers together to build unique and beautiful styles.

{% example u8-curved %}
<i style="width: 60px;" class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
<i style="width: 60px;" class="f8-icon f8-icon--ic-loader-text f8-icon--size-100"></i>
I <i style="--f8-icon-color: pink;" class="f8-icon f8-icon--size-inherit f8-icon--state-inline f8-icon--ic-heart"></i> YOU
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i style="width: 60px;" class="f8-icon f8-icon--ic-framework8 f8-icon--size-100"></i>
<i style="width: 60px;" class="f8-icon f8-icon--ic-loader-text f8-icon--size-100"></i>
I <i style="--f8-icon-color: pink;" class="f8-icon f8-icon--size-inherit f8-icon--state-inline f8-icon--ic-heart"></i> YOU
{% endprettify %}

--------------------------------------------------------------------------------








# Combine with Other Blocks

Now let's combine the block with others to get even more awesome styles.


You can use padding for the icon to force the inner SVG or IMG have some more space from the edges. In our example here we've used the `.u8-p` utility class.

{% example u8-curved %}
<i style="width: 100px;" class="f8-icon f8-icon--size-100 f8-icon--ic-framework8 u8-p"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i style="width: 100px;" class="f8-icon f8-icon--size-100 f8-icon--ic-framework8 u8-p"></i>
{% endprettify %}


You can also use other utility classes to style even font icons in different ways.

{% example u8-curved %}
<div style="--my-size: 100px; width: var(--my-size); height: var(--my-size);" class="u8-d-flex-inline u8-bg-color-fitful-against-alpha-hover u8-transition u8-p">
  <i style="font-size: calc(var(--my-size) / 2)" class="f8-icon f8-icon--size-100 fa fa-user"></i>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div style="--my-size: 100px; width: var(--my-size); height: var(--my-size);" class="u8-d-flex-inline u8-bg-color-fitful-against-alpha-hover u8-transition u8-p">
  <i style="font-size: calc(var(--my-size) / 2)" class="f8-icon f8-icon--size-100 fa fa-user"></i>
</div>
{% endprettify %}


{% example u8-curved %}
<i class="f8-icon f8-icon--size-xs f8-icon--color-reddish f8-icon--state-inline f8-icon--ic-star-full"></i> 5.0 (72)
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="f8-icon f8-icon--size-xs f8-icon--color-reddish f8-icon--state-inline f8-icon--ic-star-full"></i> 5.0 (72)
{% endprettify %}
