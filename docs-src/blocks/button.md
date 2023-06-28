---
layout: example
title: Button
description: Cool button styles.
permalink: /blocks/button.html
root_dir: ../
---




# CSS Custom Properties

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<style>
  .f8-button {
    --f8-button-text-color: inherit;
    --f8-button-bg-color: var(--f8-blocks-def-bg-color);
    --f8-button-bg-hover-color: var(--f8-blocks-def-hr-color);

    --f8-button-font-size: var(--f8-blocks-font-size);
    --f8-button-padding-x: var(--f8-blocks-spacer);
    --f8-button-padding-y: var(--f8-blocks-spacer);
  }
</style>
{% endprettify %}

--------------------------------------------------------------------------------








# Simple Buttons

{% example u8-curved %}
<a class="f8-button" href="#" role="button">Link</a>
<a class="f8-button" href="#" role="button" disabled>Link disabled</a>
<button class="f8-button" type="submit">Button</button>
<input class="f8-button" type="button" value="Input">
<input class="f8-button" type="submit" value="Submit">
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button" href="#" role="button">Link</a>
<a class="f8-button" href="#" role="button" disabled>Link disabled</a>
<button class="f8-button" type="submit">Button</button>
<input class="f8-button" type="button" value="Input">
<input class="f8-button" type="submit" value="Submit">
{% endprettify %}




## Call-to-Action Button

{% example u8-curved %}
<a class="f8-button" href="#" role="button">
  <div>
    <span class="f8-button__head">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
  </div>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button" href="#" role="button">
  <div>
    <span class="f8-button__head">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
  </div>
</a>
{% endprettify %}




## Button with an Icon

{% example u8-curved %}
<a class="f8-button" href="#" role="button">
  <i class="fa fa-info-circle u8-me-sm"></i>
  <span class="f8-button__label">Info</span>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button" href="#" role="button">
  <i class="fa fa-info-circle u8-me-sm"></i>
  <span class="f8-button__label">Info</span>
</a>
{% endprettify %}




## Icon button

{% example u8-curved %}
<a style="--f8-button-padding-x: 4px; --f8-button-padding-y: 4px;" class="f8-button u8-rounded" href="#" role="button">
  <i class="fa fa-info-circle"></i>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a style="--f8-button-padding-x: 4px; --f8-button-padding-y: 4px;" class="f8-button u8-rounded" href="#" role="button">
  <i class="fa fa-info-circle"></i>
</a>
{% endprettify %}

--------------------------------------------------------------------------------








# Modifiers

There are different types of modifiers:
- Color
- Size
- Visual
- Effect
- State




## Color Modifiers

`.f8-button--color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}`

{% example u8-curved %}
<a class="f8-button f8-button--color-primary" href="#" role="button">Link</a>
<a class="f8-button f8-button--color-accent" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--color-primary" href="#" role="button">Link</a>
<a class="f8-button f8-button--color-accent" href="#" role="button">Link</a>
{% endprettify %}


`.f8-button--color-fitful-agree`: This color modifier is fitful! It lets the block to be whtish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.f8-button--color-fitful-against`: This color modifier is the opposite of agree fitful color modifier.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--color-fitful-against" href="#" role="button">Link</a>
{% endprettify %}


{% alert info %}
**Heads up!** You can also completely forget about the color modifiers, and just simply edit the color CSS custom properties of the block.
{% endalert %}

{% example u8-curved %}
<a style="--f8-button-text-color: #fff; --f8-button-bg-color: black; --f8-button-bg-hover-color: pink;" class="f8-button" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a style="--f8-button-text-color: #fff; --f8-button-bg-color: black; --f8-button-bg-hover-color: pink;" class="f8-button" href="#" role="button">Link</a>
{% endprettify %}




## Size Modifiers

`.f8-button--size-{xs,sm,lg}`

{% example u8-curved %}
<a class="f8-button f8-button--size-xs" href="#" role="button">Link</a>
<a class="f8-button f8-button--size-sm" href="#" role="button">Link</a>
<a class="f8-button f8-button--size-lg" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--size-xs" href="#" role="button">Link</a>
<a class="f8-button f8-button--size-sm" href="#" role="button">Link</a>
<a class="f8-button f8-button--size-lg" href="#" role="button">Link</a>
{% endprettify %}




## Visual Modifiers

`.f8-button--visual-block` modifier sets width of the button to 100%

{% example u8-curved %}
<a class="f8-button f8-button--visual-block" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--visual-block" href="#" role="button">Link</a>
{% endprettify %}




## Effect Modifiers

`.f8-button--effect-{light,outline,3d,rotator,fader}`


### Simple Effect Modifiers

{% example u8-curved %}
<a class="f8-button f8-button--effect-light" href="#" role="button">Link</a>
<a class="f8-button f8-button--effect-outline" href="#" role="button">Link</a>
<a class="f8-button f8-button--effect-3d" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--effect-light" href="#" role="button">Link</a>
<a class="f8-button f8-button--effect-outline" href="#" role="button">Link</a>
<a class="f8-button f8-button--effect-3d" href="#" role="button">Link</a>
{% endprettify %}


### Rotator Effect

{% example u8-curved %}
<a class="f8-button f8-button--effect-rotator" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
<a class="f8-button f8-button--effect-rotator" href="#" role="button">
  <span class="f8-button__icon w-full">20% Off</span>
  <span class="f8-button__label">Purchase</span>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--effect-rotator" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
<a class="f8-button f8-button--effect-rotator" href="#" role="button">
  <span class="f8-button__icon w-full">20% Off</span>
  <span class="f8-button__label">Purchase</span>
</a>
{% endprettify %}


### Fader Effect

{% example u8-curved %}
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <span class="f8-button__icon">20% Off</span>
  <span class="f8-button__label">Purchase</span>
</a>
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <i class="f8-button__label fa fa-info-circle"></i>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <span class="f8-button__icon">20% Off</span>
  <span class="f8-button__label">Purchase</span>
</a>
<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <i class="f8-button__label fa fa-info-circle"></i>
</a>
{% endprettify %}




## State Modifiers

`.f8-button--state-{active,disable,loading}`

{% example u8-curved %}
<a class="f8-button f8-button--state-active" href="#" role="button">Link</a>
<a class="f8-button f8-button--state-disable" href="#" role="button">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--state-active" href="#" role="button">Link</a>
<a class="f8-button f8-button--state-disable" href="#" role="button">Link</a>
{% endprettify %}




### Loading State

{% example u8-curved %}
<a class="f8-button f8-button--state-loading" href="#" role="button">
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <div class="f8-button__loader"><i class="fas fa-spinner fa-spin"></i></div>
</a>

<a class="f8-button f8-button--state-loading" href="#" role="button">
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <div class="f8-button__loader">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
      <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</a>

<a class="f8-button f8-button--state-loading" href="#" role="button">
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <div class="f8-button__loader">
    <div style="width: 20px; height: 20px;" class="u8-line-height-0">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
        <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  </div>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--state-loading" href="#" role="button">
  <!-- The loading state modifier needs you to have at least
  f8-button__holder and f8-button__loader elements for your button -->
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <!-- Of course in loader you can have your own custom images, icons, or sprites -->
  <div class="f8-button__loader"><i class="fas fa-spinner fa-spin"></i></div>
</a>

<a class="f8-button f8-button--state-loading" href="#" role="button">
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <div class="f8-button__loader">
    <!-- SVG animations are also supported :) -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
      <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
      </path>
    </svg>
  </div>
</a>

<a class="f8-button f8-button--state-loading" href="#" role="button">
  <div class="f8-button__holder"><span class="f8-button__label">Link</span></div>
  <div class="f8-button__loader">
    <!-- Yep! Simply wrap your SVG inside a div tag and give it your own custom dimensions. -->
    <div style="width: 20px; height: 20px;" class="u8-line-height-0">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 50 50">
        <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/>
        </path>
      </svg>
    </div>
  </div>
</a>
{% endprettify %}

--------------------------------------------------------------------------------








# Holder, Loader

Use Holder & Loader elements whenever you're going to use the loading state.

{% example u8-curved %}
<a class="f8-button" href="#" role="button">
  <div class="f8-button__holder">
    <div>
      <span class="f8-button__head">Sign up today</span>
      <span class="f8-button__body">30 days free trial</span>
    </div>
  </div>
  <div class="f8-button__loader">
    <i class="fas fa-spinner fa-spin"></i>
  </div>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button" href="#" role="button">
  <div class="f8-button__holder">
    <div>
      <span class="f8-button__head">Sign up today</span>
      <span class="f8-button__body">30 days free trial</span>
    </div>
  </div>
  <!-- NOTE: Loader will be only visible in loading state. And yes, just like
  the holder element, loader can also accept any content as well as our own
  head, body, label, and icon elements. -->
  <div class="f8-button__loader">
    <i class="fas fa-spinner fa-spin"></i>
  </div>
</a>
{% endprettify %}

--------------------------------------------------------------------------------








# Head, Body, Label, Icon

Head & Body elements are block displayed elements.  
Label & Icon elements are mostly used when using the fader or rotator effects.

{% example u8-curved %}
<a style="flex-direction: column;" class="f8-button" href="#" role="button">
    <span class="f8-button__head">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
</a>

<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a style="flex-direction: column;" class="f8-button" href="#" role="button">
    <span class="f8-button__head">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
</a>

<a class="f8-button f8-button--effect-fader" href="#" role="button">
  <i class="f8-button__icon fa fa-info-circle"></i>
  <span class="f8-button__label">Info</span>
</a>
{% endprettify %}

--------------------------------------------------------------------------------








# Group

Group element is a flex-box wrapper that groups some buttons together.

{% alert info %}
**Heads up!** The group element also supports `.u8-curved` and `.u8-rounded` modifiers of the Utils block.
{% endalert %}

{% example u8-curved %}
<div class="f8-button__group u8-curved">
  <a class="f8-button" href="#" role="button">1</a>
  <a class="f8-button" href="#" role="button">2</a>
  <a class="f8-button" href="#" role="button">3</a>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="f8-button__group u8-curved">
  <a class="f8-button" href="#" role="button">1</a>
  <a class="f8-button" href="#" role="button">2</a>
  <a class="f8-button" href="#" role="button">3</a>
</div>
{% endprettify %}

--------------------------------------------------------------------------------








# All Modifiers Together

Now let's combine all modifiers together to build unique and beautiful styles.

{% example u8-curved %}
<a style="--f8-button-bg-color: #1da1f2; --f8-button-bg-hover-color: #333; --f8-button-text-color: #fff;" class="f8-button f8-button--size-lg f8-button--effect-rotator" href="#" role="button">
  <i class="f8-button__icon fab fa-twitter"></i>
  <i class="f8-button__label fab fa-twitter"></i>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a style="--f8-button-bg-color: #1da1f2; --f8-button-bg-hover-color: #333; --f8-button-text-color: #fff;" class="f8-button f8-button--size-lg f8-button--effect-rotator" href="#" role="button">
  <i class="f8-button__icon fab fa-twitter"></i>
  <i class="f8-button__label fab fa-twitter"></i>
</a>
{% endprettify %}

--------------------------------------------------------------------------------








# Combine with Other Blocks

Now let's combine the block with others to get even more awesome styles.

{% example u8-curved %}
<a class="f8-button f8-button--color-bluish f8-button--size-lg u8-curved" href="#" role="button">
  <i class="f8-button__icon f8-icon f8-icon--ic-framework8 f8-icon--color-inherit"></i>
</a>

<a class="f8-button f8-button--size-lg u8-curved" href="#" role="button">
  <i class="f8-button__icon f8-icon"><img alt="Framework8" src="{{ "/assets/images/f8.png" | replace_first:'/', page.root_dir}}"></i>
</a>

<a class="f8-button f8-button--color-primary f8-button--effect-fader u8-rounded" href="#" role="button">
  <i class="f8-button__icon fab fa-facebook"></i>
  <i class="f8-button__label fab fa-facebook"></i>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<!-- .f8-button__icon element can be used in combination with the Icon block -->
<a class="f8-button f8-button--color-bluish f8-button--size-lg u8-curved" href="#" role="button">
  <i class="f8-button__icon f8-icon f8-icon--ic-framework8 f8-icon--color-inherit"></i>
</a>

<a class="f8-button f8-button--size-lg u8-curved" href="#" role="button">
  <i class="f8-button__icon f8-icon"><img alt="Framework8" src="images/f8.png"></i>
</a>

<a class="f8-button f8-button--color-primary f8-button--effect-fader u8-rounded" href="#" role="button">
  <i class="f8-button__icon fab fa-facebook"></i>
  <i class="f8-button__label fab fa-facebook"></i>
</a>
{% endprettify %}


{% example u8-curved %}
<a class="f8-button f8-button--color-greenish f8-button--size-lg f8-button--effect-rotator u8-text-uppercase" href="#" role="button">
  <i class="f8-button__icon f8-icon f8-icon--ic-package f8-icon--color-inherit"></i>
  <span class="f8-button__label">Download the Package!</span>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--color-greenish f8-button--size-lg f8-button--effect-rotator u8-text-uppercase" href="#" role="button">
  <i class="f8-button__icon f8-icon f8-icon--ic-package f8-icon--color-inherit"></i>
  <span class="f8-button__label">Download the Package!</span>
</a>
{% endprettify %}


{% example u8-curved %}
<a class="f8-button f8-button--color-yellowish f8-button--effect-3d u8-curved u8-text-shadow u8-text-start" href="#" role="button">
  <div>
    <span class="f8-button__head u8-text-uppercase">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
  </div>
</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="f8-button f8-button--color-yellowish f8-button--effect-3d u8-curved u8-text-shadow u8-text-start" href="#" role="button">
  <div>
    <span class="f8-button__head u8-text-uppercase">Sign up today</span>
    <span class="f8-button__body">30 days free trial</span>
  </div>
</a>
{% endprettify %}


{% example u8-curved %}
<div class="u8-d-flex">
  <div class="f8-button__group u8-curved">
    <span class="u8-text-color-whitish u8-bg-color-primary u8-p">1</span>
    <a class="f8-button" href="#" role="button">2</a>
    <a class="f8-button" href="#" role="button">3</a>
  </div>
  <a class="f8-button u8-curved u8-ms" href="#" role="button">Last</a>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-d-flex">
  <div class="f8-button__group u8-curved">
    <span class="u8-text-color-whitish u8-bg-color-primary u8-p">1</span>
    <a class="f8-button" href="#" role="button">2</a>
    <a class="f8-button" href="#" role="button">3</a>
  </div>
  <a class="f8-button u8-curved u8-ms" href="#" role="button">Last</a>
</div>
{% endprettify %}
