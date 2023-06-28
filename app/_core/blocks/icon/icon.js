import pluginify      from '../pluginify';
import * as utils     from '../utils/utils';

/**
 * f8-icon - Framework8 icon block
 * @copyright 2022 MyThemeIsReady. All Rights Reserved.
 *
 * Some SVG icons which are embedded into the DOM automatically, so that they
 * can be customized by CSS. It includes some useful icons which you cannot find
 * in fontawsome or other places easily. It can also accept your own images or
 * icons, and apply its effects on your custom SVG, GIF, or JPG images.
 *
 *
 * Requirements:
 * - jQuery version 1.9.1 or higher
 * - Pluginify:               ../pluginify.js
 * - Utils:                   ../utils/utils.js
 *
 *
 *
 *
 * @example
 * // Well, there's no JavaScript options for this block! All this JavaScript
 * // code does is to put the Base64 SVG icon from css into the DOM so that the
 * // block's css color modifiers can work and change the color of the icon via
 * // css. That's it :)
 *
 *
 *
 *
 * // JS usage
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 * // //////////////////////////////////////////////////////////////////////////
 *
 * // If you've set 'initializeF8BlocksManually' variable in your HTML page to
 * // `true`, then you need to initialize the block manually yourself to enable
 * // its JavaScript functionalities.
 * $('.f8-icon').f8icon();
 *
 * // Destroy the initialized block
 * // NOTE: If the method's 'keepAddedSVG' argument is set to 'true' (it's
 * // 'false' by default), then the icon's SVG that has been added to the DOM
 * // won't be removed.
 * // $('.f8-icon').f8icon('destroy', false);
 */
class Icon {

  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Properties

  _properties(element, options) {
    this.$element                            = $(element);
    this.options                             = options;
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Constructor

  constructor(element, options) {
    this._properties(element, options);

    // Get the icon from the value of the 'background-image' css rule of the
    // block, decode the Base64 SVG and put it inside of the block! Now that the
    // SVG icon is not just an image and is actually part of the DOM, its color
    // can easily be modified by css. Yay :)
    let icon = this.$element.css('background-image');
    icon = icon.replace('url("data:image/svg+xml;charset=utf8,', '').replace('")', '');
    icon = icon.replace('url(\'data:image/svg+xml;charset=utf8,', '').replace('\')', '');
    icon = icon.replace(/\\/g, '');
    icon = decodeURIComponent(icon);

    // If user didn't define any special icon, then value of the
    // 'background-image' would be 'none'! So there's no reason to continue and
    // add the value of the 'background-image' css rule to the DOM, which is
    // 'none' at the moment!
    if (icon === 'none') return;

    this.$element.append(icon); // append the SVG image into the element
    this.$element.css('background-image', 'none'); // And remove the cssbackground-image, as we don't need it anymore
  }




  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////
  /// Methods

  destroy(keepAddedSVG = false) {
    // Reset element's html
    if (!keepAddedSVG) this.$element.find('svg[data-f8-icon]').remove();

    // Remove all probable added styles
    if (!keepAddedSVG) utils.removeInlineStyles(this.$element, 'background-image');

    // Null all saved variables
    this.$element                            = undefined;
    this.options                             = undefined;
  }

}




// Create our jQuery plugin
pluginify('f8icon', Icon);

// If there's no initializeF8BlocksManually variable which is true, then run the
// plugin for all the blocks in the page
if (typeof window.initializeF8BlocksManually !== 'boolean' || window.initializeF8BlocksManually === false) {
  jQuery(document).ready( $ => {
    $('.f8-icon').f8icon();
  });
}
