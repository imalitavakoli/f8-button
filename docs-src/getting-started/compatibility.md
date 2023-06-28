---
layout: example
title: Compatibility
description: Supported browsers and devices.
permalink: /getting-started/compatibility.html
root_dir: ../
---




# Supported browsers

**Framework8** blocks support a wide variety of modern browsers and devices; the latest, stable releases of all major browsers and platforms. On Windows, we support **Internet Explorer 10-11 / Microsoft Edge**.

Alternative browsers which use the latest version of WebKit, Blink, or Gecko, whether directly or via the platform’s web view API, are not explicitly supported. However, **Framework8** should (in most cases) display and function correctly in these browsers as well.




## Mobile devices

{:.table}
| Tables            | Chrome     | Firefox     | Safari     | Android Browser & WebView     | Microsoft Edge     |
|-------------------|:----------:|:-----------:|:----------:|:-----------------------------:|:------------------:|
| Android           | Supported  | Supported   | N/A        | Android v5.0+ supported       | N/A                |
| iOS               | Supported  | Supported   | Supported  | N/A                           | N/A                |
| Windows 10 Mobile | N/A        | N/A         | N/A        | N/A                           | Supported          |




## Desktop browsers

{:.table}
| Tables            | Chrome     | Firefox     | Internet Explorer     | Microsoft Edge     | Opera       | Safari          |
|-------------------|:----------:|:-----------:|:---------------------:|:------------------:|:-----------:|:---------------:|
| Mac               | Supported  | Supported   | N/A                   | N/A                | Supported   | Supported       |
| Windows           | Supported  | Supported   | Supported, IE10+      | Supported          | Supported   | Not supported   |

Unofficially, blocks should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux too.

--------------------------------------------------------------------------------








# Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software.

On the rare occasion you need to override it, use something like the following:

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
.selector-for-some-widget {
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
}
{% endprettify %}

--------------------------------------------------------------------------------








# Initializing JavaScript Blocks manually

**Framework8** JavaScript part of the blocks are opt-in by default, meaning they get initialized automatically when the page loads completely. But you can change that for performance reasons or any other reason according to your own project.

So if you like to initialize all the **Framework8** JavaScript blocks yourself manually, then you must set a variable called `initializeF8BlocksManually` to `true`. In this way none of them will be initialized automatically when the page loads and you're free to load any one of them whenever that you like according to your own coding logic.

{% alert info %}
**Heads up!** Just note that whenever you initialize a block, it **must** be after loading all of the required JavaScript files which that block requires.
{% endalert %}

{% prettify dark, u8-text-nowrap, u8-curved, u8-font-size-sm, u8-chrome-pretty-scroll %}
<script>
  // First set the variable.
  var initializeF8BlocksManually = true;
</script>

<!-- Load all of the required JavaScript files. -->

<script>
  // Now based on your app logic, initialize the block manually whenever you like.
  $('.f8-block-name').f8blockname({ option: 'value' });
</script>
{% endprettify %}
