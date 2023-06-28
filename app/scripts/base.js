// Base - Check jquery availability.
// @copyright 2022 MyThemeIsReady. All Rights Reserved.




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/// Check jquery availability

 if (typeof jQuery === 'undefined') {
   throw new Error('Framework8\'s JavaScript requires jQuery')
 }

 +function ($) {
   'use strict';
   var version = $.fn.jquery.split(' ')[0].split('.')
   if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
     throw new Error('Framework8\'s JavaScript requires jQuery version 1.9.1 or higher')
   }
 }(jQuery);
