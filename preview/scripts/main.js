!function i(u,a,l){function f(t,e){if(!a[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(c)return c(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[t]={exports:{}};u[t][0].call(o.exports,function(e){return f(u[t][1][e]||e)},o,o.exports,i,u,a,l)}return a[t].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)f(l[e]);return f}({1:[function(e,t,r){"use strict";var n,o=(n=e("../pluginify"))&&n.__esModule?n:{default:n},i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(e("../utils/utils"));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,void 0,"symbol"===l(i=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);var n=r.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}(o,"string"))?i:String(i)),n)}var o,i}var f=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._properties(e,t);var r=this.$element.css("background-image");r=(r=(r=r.replace('url("data:image/svg+xml;charset=utf8,',"").replace('")',"")).replace("url('data:image/svg+xml;charset=utf8,","").replace("')","")).replace(/\\/g,""),"none"!==(r=decodeURIComponent(r))&&(this.$element.append(r),this.$element.css("background-image","none"))}var e,t,r;return e=n,(t=[{key:"_properties",value:function(e,t){this.$element=$(e),this.options=t}},{key:"destroy",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];e||this.$element.find("svg[data-f8-icon]").remove(),e||i.removeInlineStyles(this.$element,"background-image"),this.$element=void 0,this.options=void 0}}])&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),n}();(0,o.default)("f8icon",f),"boolean"==typeof window.initializeF8BlocksManually&&!1!==window.initializeF8BlocksManually||jQuery(document).ready(function(e){e(".f8-icon").f8icon()})},{"../pluginify":2,"../utils/utils":3}],2:[function(e,t,r){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t,i){var e=2<arguments.length&&void 0!==arguments[2]&&arguments[2],u="__".concat(t),r=$.fn[t];$.fn[t]=function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return this.each(function(){var e=$(this),t=e.data(u),r=$.extend({},i.DEFAULTS,e.data(),"object"===a(n)&&n);t||e.data(u,t=new i(this,r)),"string"==typeof n&&(t[n].apply(t,o),"destroy"===n&&(e.removeData(u),t=void 0))})},e&&($[t]=function(e){return $({})[t](e)});$.fn[t].noConflict=function(){return $.fn[t]=r}}},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.deleteItemFromLocalStorageAfterAWhile=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:864e5,n=localStorage.getItem(t),o=(new Date).getTime();if(!n)return void localStorage.setItem(t,o);r<o-n&&(localStorage.removeItem(e),localStorage.setItem(t,o))},r.inlineStyleValue=function(e,r){var n,t=e.attr("style");void 0!==t&&t.split(";").forEach(function(e){var t=e.split(":");$.trim(t[0])===r&&(n=(n=t[1]).replace(/\s/g,""))});return n},r.removeInlineStyles=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];void 0!==e.attr("style")&&e.attr("style",function(e,t){var r=new RegExp("("+n.join("|")+")s?:s?[^;]+;?","g");return t.replace(r,"")})},r.toBoolean=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],r=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if("boolean"==typeof e)return e;if("number"==typeof e&&0<e)return!0;if("string"==typeof e){if(!t)return!0;if("TRUE"===e.toUpperCase()||"ON"===e.toUpperCase()||"YES"===e.toUpperCase()||"1"===e)return!0}return!!r&&e}},{}],4:[function(e,t,r){"use strict";e("../blocks/icon/icon")},{"../blocks/icon/icon":1}],5:[function(e,t,r){"use strict";if("undefined"==typeof jQuery)throw new Error("Framework8's JavaScript requires jQuery");!function(e){var t=jQuery.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1)throw new Error("Framework8's JavaScript requires jQuery version 1.9.1 or higher")}()},{}],6:[function(e,t,r){"use strict";e("./base"),e("../_core/bundles/f8component-utils")},{"../_core/bundles/f8component-utils":4,"./base":5}]},{},[6]);