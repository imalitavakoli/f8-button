---
layout: example
title: Utilities
description: Immutable classes designed to reduce duplication. Single-purpose, and some more utility classes.
permalink: /utilities/utils.html
root_dir: ../
---




# Color

`.u8-border-color-{neutral,whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}`

`.u8-border-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-2`

`.u8-border-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-alpha`

`.u8-border-color-fitful-agree`, `.u8-border-color-fitful-agree-{2,alpha}`: These color modifiers are fitful! They let the block to be whitish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.u8-border-color-fitful-against`, `.u8-border-color-fitful-against-{2,alpha}`: These color modifiers are the opposite of agree fitful color modifiers.

{% example u8-curved %}
<div class="u8-border-color-neutral" style="border: 1px solid;">...</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-border-color-neutral" style="border: 1px solid;">...</div>
{% endprettify %}


`.u8-bg-color-{neutral,whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}`

`.u8-bg-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-2`

`.u8-bg-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-alpha`

`.u8-bg-color-fitful-agree`, `.u8-bg-color-fitful-agree-{2,alpha}`: These color modifiers are fitful! They let the block to be whitish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.u8-bg-color-fitful-against`, `.u8-bg-color-fitful-against-{2,alpha}`: These color modifiers are the opposite of agree fitful color modifiers.

{% alert info %}
**Heads up!** The following modifiers apply the background color ONLY on hover or active state of the element, and also when the element has `.active` or `.current` CSS classes.

`.u8-bg-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish,fitful-agree,fitful-against}-2-hover`

`.u8-bg-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish,fitful-agree,fitful-against}-alpha-hover`
{% endalert %}

{% example u8-curved %}
<div class="u8-bg-color-primary">...</div>
<br>
<div class="u8-bg-color-primary-2">...</div>
<br>
<div class="u8-bg-color-primary-alpha">...</div>
<br>
<div class="u8-bg-color-primary-2-hover">...</div>
<br>
<div class="u8-bg-color-primary-alpha-hover">...</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-bg-color-primary">...</div>
<div class="u8-bg-color-primary-2">...</div> <!-- It's a little bit darker -->
<div class="u8-bg-color-primary-alpha">...</div>
<div class="u8-bg-color-primary-2-hover">...</div>
<div class="u8-bg-color-primary-alpha-hover">...</div>
{% endprettify %}


`.u8-text-color-{inherit,neutral,whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}`

`.u8-text-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-2`

`.u8-text-color-fitful-agree`, `.u8-text-color-fitful-agree-2`: These color modifiers are fitful! They let the block to be whitish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.u8-text-color-fitful-against`, `.u8-text-color-fitful-against-2`: These color modifiers are the opposite of agree fitful color modifiers.

{% alert info %}
**Heads up!** The following modifiers apply the text color ONLY on hover or active state of the element, and also when the element has `.active` or `.current` CSS classes.

`.u8-text-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish,fitful-agree,fitful-against}-hover`
{% endalert %}

{% example u8-curved %}
<div class="u8-text-color-primary">...</div>
<div class="u8-text-color-primary-2">...</div>
<div class="u8-text-color-primary-hover">...</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-text-color-primary">...</div>
<div class="u8-text-color-primary-2">...</div> <!-- It's a little bit darker -->
<div class="u8-text-color-primary-hover">...</div>
{% endprettify %}


`.u8-svg-color-{neutral,whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}`

`.u8-svg-color-{whitish,blackish,primary,accent,greenish,reddish,yellowish,bluish}-2`

`.u8-svg-color-fitful-agree`, `.u8-svg-color-fitful-agree-2`: These color modifiers are fitful! They let the block to be whitish by default, and be blackish when it is a descendant element of an element with a class attribute value that contains "dark". `.u8-svg-color-fitful-against`, `.u8-svg-color-fitful-against-2`: These color modifiers are the opposite of agree fitful color modifiers.

{% alert info %}
**Heads up!** The SVG color modifiers give stroke to your SVGs... So if you don't like them to have a stroke, just remember to add `stroke="none"` to your SVG's inner elements, just like what we did in our example below.
{% endalert %}

{% example u8-curved %}
<svg class="u8-svg-color-bluish" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
  <path fill-opacity="0.3" stroke="none" d="M 28 0 L 4 0 Q 0 0 0 4 L 0 28 Q 0 32 4 32 L 28 32 Q 32 32 32 28 L 32 4 Q 32 0 28 0 M 11.65 11.7 Q 11.65 10.15 12.8 9.05 14 7.95 16 7.95 17.9 7.95 19.1 8.95 20.25 10 20.25 11.35 20.25 12.25 19.65 13.15 19 14.1 17 15.35 19.05 16.95 19.75 17.85 20.6 19.05 20.6 20.4 20.6 22.05 19.35 23.25 18.05 24.45 16 24.45 13.75 24.45 12.45 23 11.45 21.9 11.45 20.55 11.45 19.45 12.15 18.45 12.85 17.4 14.6 16.15 12.7 14.6 12.2 13.65 11.65 12.7 11.65 11.7 M 15.15 16.6 Q 14.2 17.4 13.7 18.4 13.25 19.35 13.25 20.45 13.25 22 14.1 22.9 14.9 23.8 16.2 23.8 17.45 23.8 18.2 23.1 18.95 22.35 18.95 21.35 18.95 20.5 18.5 19.85 17.7 18.6 15.15 16.6 M 18.6 11.25 Q 18.6 10 17.9 9.3 17.2 8.6 16 8.6 14.85 8.6 14.1 9.3 13.35 10 13.35 10.9 13.35 11.55 13.65 12.15 13.95 12.75 14.5 13.3 L 16.45 14.9 Q 17.85 13.65 18.25 12.9 18.6 12.15 18.6 11.25 Z"/>
</svg>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<svg class="u8-svg-color-bluish" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
  <path fill-opacity="0.3" stroke="none" d="M 28 0 L 4 0 Q 0 0 0 4 L 0 28 Q 0 32 4 32 L 28 32 Q 32 32 32 28 L 32 4 Q 32 0 28 0 M 11.65 11.7 Q 11.65 10.15 12.8 9.05 14 7.95 16 7.95 17.9 7.95 19.1 8.95 20.25 10 20.25 11.35 20.25 12.25 19.65 13.15 19 14.1 17 15.35 19.05 16.95 19.75 17.85 20.6 19.05 20.6 20.4 20.6 22.05 19.35 23.25 18.05 24.45 16 24.45 13.75 24.45 12.45 23 11.45 21.9 11.45 20.55 11.45 19.45 12.15 18.45 12.85 17.4 14.6 16.15 12.7 14.6 12.2 13.65 11.65 12.7 11.65 11.7 M 15.15 16.6 Q 14.2 17.4 13.7 18.4 13.25 19.35 13.25 20.45 13.25 22 14.1 22.9 14.9 23.8 16.2 23.8 17.45 23.8 18.2 23.1 18.95 22.35 18.95 21.35 18.95 20.5 18.5 19.85 17.7 18.6 15.15 16.6 M 18.6 11.25 Q 18.6 10 17.9 9.3 17.2 8.6 16 8.6 14.85 8.6 14.1 9.3 13.35 10 13.35 10.9 13.35 11.55 13.65 12.15 13.95 12.75 14.5 13.3 L 16.45 14.9 Q 17.85 13.65 18.25 12.9 18.6 12.15 18.6 11.25 Z"/>
</svg>
{% endprettify %}

--------------------------------------------------------------------------------








# Positioning

`.u8-pos-{r,a,f}`

Set an element's `position` to `relative`, `absolute`, or `fixed` values.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pos-f">...</div>
{% endprettify %}


`.u8-{t,b,s,e}-{0,50,100} `

Easily arrange `absolute` positioned elements with the edge positioning utilities.

{% alert info %}
**Heads up!** `.u8-{s,e}-{0,50,100}` modifiers refer to 'Start' and 'End'. 'Start' means left in LTR and right in RTL documents. 'End' means right in LTR and left in RTL documents.
{% endalert %}

{% example u8-curved %}
<div class="u8-pos-r" style="width:100%; height: 200px; background-color: #eee;">
  <div class="u8-pos-a u8-t-0 u8-e-0" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-b-0 u8-s-0" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-b-50 u8-e-50" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-50 u8-s-50" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pos-r" style="width:100%; height: 200px; background-color: #eee;">
  <div class="u8-pos-a u8-t-0 u8-e-0" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-b-0 u8-s-0" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-b-50 u8-e-50" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-50 u8-s-50" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
</div>
{% endprettify %}


Easily center `absolute` positioned elements with the transform utilities.

{% example u8-curved %}
<div class="u8-pos-r" style="width:100%; height: 200px; background-color: #eee;">
  <div class="u8-pos-a u8-t-0 u8-s-100 u8-trans-middle" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-50 u8-e-0 u8-trans-middle-y" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-0 u8-s-50 u8-trans-middle-x" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
</div>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pos-r" style="width:100%; height: 200px; background-color: #eee;">
  <div class="u8-pos-a u8-t-0 u8-s-100 u8-trans-middle" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-50 u8-e-0 u8-trans-middle-y" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
  <div class="u8-pos-a u8-t-0 u8-s-50 u8-trans-middle-x" style="width: 2rem; height: 2rem; background-color: #333333;"></div>
</div>
{% endprettify %}


{% example u8-curved %}
<button type="button" class="u8-pos-r u8-bg-color-blackish u8-text-color-whitish u8-u8-curved">
  Marker <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" class="u8-pos-a u8-t-100 u8-s-50 u8-trans-middle u8-svg-color-blackish" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<button type="button" class="u8-pos-r u8-bg-color-blackish u8-text-color-whitish u8-u8-curved">
  Marker <svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" class="u8-pos-a u8-t-100 u8-s-50 u8-trans-middle u8-svg-color-blackish" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>
</button>
{% endprettify %}

--------------------------------------------------------------------------------








# Dimensions

`.u8-w-{25,50,75,100,auto,100v}`  
`.u8-w-{sm,md,lg,xl}-{25,50,75,100,auto,100v}`


Set an element's `width` to `25%`, `50%`, `75%`, `100%`, `auto`, or `100vw` values.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-w-100" style="background-color: #eee;">...</div>
{% endprettify %}


`.u8-h-{25,50,75,100,auto,100v}`  
`.u8-h-{sm,md,lg,xl}-{25,50,75,100,auto,100v}`

Set an element's `height` to `25%`, `50%`, `75%`, `100%`, `auto`, or `100vh` values.

{% alert info %}
**Heads up!** These height modifiers are mostly useful for items of a `flex-box` displayed element.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-h-100" style="background-color: #eee;">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Margin

Center an element

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-mx-auto">...</div>
{% endprettify %}


`.u8-m`, `.u8-m-{0,xs,sm,lg,xl}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-m-0">...</div> <!-- Set the margin of all sides to 0 or more. -->
{% endprettify %}


`.u8-m{t,e,b,s,x,y}`, `.u8-m{t,e,b,s,x,y}-{0,sm,lg,xl}`

{% alert info %}
**Heads up!** 's' (start) means left in LTR and right in RTL documents. 'e' (end) means vice versa.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-mt-0">...</div>  <!-- Set the margin of ONLY one side to 0 or more. -->
<div class="u8-mt u8-mb-xl">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Padding

`.u8-p`, `.u8-p-{0,xs,sm,lg,xl}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-p-0">...</div> <!-- Set the margin of all sides to 0 or more. -->
{% endprettify %}


`.u8-p{t,e,b,s,x,y}`, `.u8-p{t,e,b,s,x,y}-{0,sm,lg,xl}`

{% alert info %}
**Heads up!** 's' (start) means left in LTR and right in RTL documents. 'e' (end) means vice versa.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pt-0">...</div>  <!-- Set the margin of ONLY one side to 0 or more. -->
<div class="u8-pt u8-pb-xl">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Bg & Border

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-bg-none">...</div>

<div class="u8-border-none">...</div>
<div class="u8-border-outline">...</div>
<div class="u8-border-light">...</div>

<div class="u8-border-radius-0">...</div>
<div class="u8-u8-curved">...</div>
<div class="u8-rounded">...</div>
{% endprettify %}


`.u8-{u8-curved,rounded}-{t,b,s,e}`

{% alert info %}
**Heads up!** `.u8-{u8-curved,rounded}-{s,e}` modifiers refer to 'Start' and 'End'. 'Start' means left in LTR and right in RTL documents. 'End' means right in LTR and left in RTL documents.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-u8-curved-t">...</div>
{% endprettify %}


`.u8-bg-filter-{blur,grayscale,sepia,blur-grayscale,blur-sepia}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-bg-filter-blur">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Text

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-font-weight-light">...</div>
<div class="u8-font-weight-normal">...</div>
<div class="u8-font-weight-bold">...</div>
<div class="u8-font-italic">...</div>

<div class="u8-text-decoration-none">...</div>

<div class="u8-text-shadow-none">...</div>
<div class="u8-text-shadow">...</div>
{% endprettify %}


Set white-space to nowrap.

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div style="display: table;">
  <div class="u8-text-nowrap" style="display: table-cell; width: 1%;">Hello World!</div>
  <div>...</div>
</div>
{% endprettify %}


{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-text-truncate">...</div>

<div class="u8-text-lowercase">...</div>
<div class="u8-text-uppercase">...</div>
<div class="u8-text-capitalize">...</div>

<div class="u8-text-hide">...</div> <!-- Replace an element's text content with a background image. -->
{% endprettify %}


`.u8-font-size-base`: Sets `font-size` and `line-height`based on the blocks' bases.  
`.u8-font-size-{sm,lg}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-font-size-lg">...</div>
{% endprettify %}


{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-text-justify">...</div>
{% endprettify %}


`.u8-text-{left,right,center}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-text-start">...</div>
{% endprettify %}


`.u8-text-{sm,md,lg,xl}-{left,right,center}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-text-sm-start">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Box utilities

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-opacity-base">...</div>

<div class="u8-opacity-100">...</div>
<div class="u8-opacity-90">...</div>
<div class="u8-opacity-80">...</div>
<div class="u8-opacity-60">...</div>
<div class="u8-opacity-40">...</div>
<div class="u8-opacity-20">...</div>

<div class="u8-box-shadow-none">...</div>
<div class="u8-box-shadow">...</div>
<div class="u8-box-shadow-2">...</div>
<div class="u8-box-shadow-inset">...</div>
<div class="u8-box-shadow-inset-2">...</div>

<div class="u8-overflow-auto">...</div>
<div class="u8-overflow-hidden">...</div>
<div class="u8-overflow-visible">...</div>
<div class="u8-overflow-scroll">...</div>
<div class="u8-overflow-y-scroll">...</div>
<div class="u8-overflow-x-scroll">...</div>
<div class="u8-overflow-y-auto">...</div>
<div class="u8-overflow-x-auto">...</div>

<div class="u8-hidden">...</div>
<div class="u8-show">...</div>
<div class="u8-invisible">...</div>

<img class="u8-img-responsive" src="" alt="" />
{% endprettify %}


`.u8-img-{contain,cover}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-img-contain">...</div>
{% endprettify %}


`.u8-img-{sm,md,lg,xl}-{contain,cover}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-img-sm-cover">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# State & Animated Utilities

{% example u8-curved %}
<i class="fa fa-angle-down u8-p u8-hover-box-shadow"></i>
<i class="fa fa-angle-down u8-p u8-hover-box-shadow-2"></i>
<i class="fa fa-angle-down u8-p u8-hover-scaleup-1"></i>
<i class="fa fa-angle-down u8-p u8-hover-scaledown-1"></i>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="fa fa-angle-down u8-p u8-hover-box-shadow"></i>
<i class="fa fa-angle-down u8-p u8-hover-box-shadow-2"></i>
<i class="fa fa-angle-down u8-p u8-hover-scaleup-1"></i>
<i class="fa fa-angle-down u8-p u8-hover-scaledown-1"></i>
{% endprettify %}


{% alert info %}
**Heads up!** `.u8-state-*` utilities are better to be used with `.u8-transition` modifier. Because when they are removed by JavaScript, `.u8-transition` modifier keeps it smooth with animation when the element is returning to its initial state.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<i class="fa fa-angle-down u8-p u8-transition u8-state-rotated-90"></i>
<i class="fa fa-angle-down u8-p u8-transition u8-state-rotated-180"></i>
<i class="fa fa-angle-down u8-p u8-transition u8-state-flipped-y"></i>
<i class="fa fa-angle-down u8-p u8-transition u8-state-flipped-x"></i>
{% endprettify %}

--------------------------------------------------------------------------------








# Utilities

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pointer-events-none">...</div>
<div class="u8-line-height-normal">...</div>
<div class="u8-line-height-0">...</div>
<div class="u8-z-index-1">...</div>

<div class="u8-v-align-middle">...</div>
<div class="u8-v-align-baseline">...</div>
{% endprettify %}


`.u8-transition` adds transitions to all of the block's properties with .3s duration.

{% example u8-curved %}
<a class="u8-transition u8-text-decoration-none u8-text-color-whitish  u8-bg-color-primary u8-bg-color-primary-2-hover u8-p" href="#" role="button" style="display: inline-block;">Link</a>
{% endexample %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="u8-transition u8-text-decoration-none u8-text-color-whitish  u8-bg-color-primary u8-bg-color-primary-2-hover u8-p" href="#" role="button" style="display: inline-block;">Link</a>
{% endprettify %}


`.u8-transition-none` removes all transitions from a block

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<a class="u8-transition-none f8-button" href="#" role="button">Link</a> <!-- Used Button Block -->
{% endprettify %}


{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-pull-left">...</div>
<div class="u8-pull-right">...</div>

<div class="u8-center-block">...</div>

<!-- Makes the element's scrollbars pretty in Google Chrome browser -->
<div class="u8-chrome-pretty-scroll">...</div>

<!-- Hide an element to all devices except screen readers -->
<div class="u8-sr-only">...</div>
<div class="u8-sr-only u8-sr-only-focusable">...</div>

<div class="u8-clearfix">...</div>
{% endprettify %}

--------------------------------------------------------------------------------








# Responsive utilities

`.u8-d-{none,inline,inline-block,block,table,table-cell,flex,inline-flex}`


Responsive variations also exist for every single display utility class.  
`.u8-d-{sm,md,lg-xl}-{none,inline,inline-block,block,table,table-cell,flex,inline-flex}`


{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-d-none">...</div> <!-- The element is display none in all devices. -->
<div class="u8-d-md-none">...</div> <!-- The element is display none in medium devices and above. -->
{% endprettify %}


`.u8-d-print-{block,inline,inline-block,none}`

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<div class="u8-d-print-block">...</div>
{% endprettify %}
