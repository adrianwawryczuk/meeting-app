!function(t){var o={};function e(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=o,e.d=function(t,o,l){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:l})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(l,r,function(o){return t[o]}.bind(null,r));return l},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=129)}({125:function(t,o,e){!function(){"use strict";t.exports={polyfill:function(){var t=window,o=document;if(!("scrollBehavior"in o.documentElement.style&&!0!==t.__forceSmoothScrollPolyfill__)){var e=t.HTMLElement||t.Element,l=468,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:e.prototype.scroll||c,scrollIntoView:e.prototype.scrollIntoView},n=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=function(t){return new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(t)}(t.navigator.userAgent)?1:0;t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var t=arguments[0].left,o=arguments[0].top;d.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===o?this.scrollTop:~~o)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var e=function(t){var e;do{e=(t=t.parentNode)===o.body}while(!1===e&&!1===u(t));return e=null,t}(this),l=e.getBoundingClientRect(),n=this.getBoundingClientRect();e!==o.body?(d.call(this,e,e.scrollLeft+n.left-l.left,e.scrollTop+n.top-l.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:n.left,top:n.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,o){this.scrollLeft=t,this.scrollTop=o}function s(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function f(t,o){return"Y"===o?t.clientHeight+i<t.scrollHeight:"X"===o?t.clientWidth+i<t.scrollWidth:void 0}function a(o,e){var l=t.getComputedStyle(o,null)["overflow"+e];return"auto"===l||"scroll"===l}function u(t){var o=f(t,"Y")&&a(t,"Y"),e=f(t,"X")&&a(t,"X");return o||e}function p(o){var e,r,i,c=(n()-o.startTime)/l;e=function(t){return.5*(1-Math.cos(Math.PI*t))}(c=c>1?1:c),r=o.startX+(o.x-o.startX)*e,i=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,r,i),r===o.x&&i===o.y||t.requestAnimationFrame(p.bind(t,o))}function d(e,l,i){var s,f,a,u,d=n();e===o.body?(s=t,f=t.scrollX||t.pageXOffset,a=t.scrollY||t.pageYOffset,u=r.scroll):(s=e,f=e.scrollLeft,a=e.scrollTop,u=c),p({scrollable:s,method:u,startTime:d,startX:f,startY:a,x:l,y:i})}}}}()},128:function(t,o,e){},129:function(t,o,e){"use strict";e.r(o);e(128);var l=e(125),r=e.n(l);function n(t){document.querySelector(t).scrollIntoView({behavior:"smooth"})}document.addEventListener("DOMContentLoaded",function(){r.a.polyfill(),function(){var t=0;function o(){var o=document.querySelectorAll(".change-icon-interval"),r=!0,n=!1,i=void 0;try{for(var c,s=o[Symbol.iterator]();!(r=(c=s.next()).done);r=!0)for(var f=c.value,a=f.querySelectorAll("img"),u=0;u<a.length;u++)u!==t?l(a[u]):e(a[u])}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}5===t?t=0:t++}function e(t){t.classList.remove("transparent")}function l(t){t.classList.contains("transparent")||t.classList.add("transparent")}o(),setInterval(o,2e3)}()},!1),window.gotoAppTypes=function(t){n(".app-types"),setTimeout(function(){return setAppTypeActive(t)},1e3)},window.gotoDifference=function(){n(".difference")},window.setAppTypeActive=function(t){document.querySelectorAll("[data-type]").forEach(function(t){t.classList.remove("active")}),t&&document.querySelector('[data-type="'+t+'"]').classList.add("active")}}});