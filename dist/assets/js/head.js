!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}({6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}sessionStorage.fontsLoadedFoutWithClass?document.documentElement.className+=" fonts-loaded":"fonts"in document&&Promise.all([document.fonts.load("1em 'Lato'"),document.fonts.load("700 1em 'Lato'"),document.fonts.load("italic 1em 'Lato'"),document.fonts.load("italic 700 1em 'Lato'")]).then((function(){document.documentElement.className+=" fonts-loaded",sessionStorage.fontsLoadedFoutWithClass=!0})),new(function(){function e(t,n,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.minVW=t,this.maxVW=n,this.minFontSize=o,this.maxFontSize=i,this.maxRem=this.computeRem().maxRem,this.minRem=this.computeRem().minRem}var t,o,i;return t=e,(o=[{key:"computeRem",value:function(){var e=document.documentElement,t=window.getComputedStyle(e).fontSize.replace(/px/,""),n=Math.max(this.minFontSize,t);return{maxRem:this.maxFontSize*n/this.minFontSize/t,minRem:n/t}}},{key:"fontSize",value:function(){var e=window.innerWidth,t=window.outerHeight,n=this.minRem;e>this.minVW&&e<this.maxVW&&t>599&&(n=this.minRem+(this.maxRem-this.minRem)*(e-this.minVW)/(this.maxVW-this.minVW)),e>this.maxVW&&t>599&&(n=this.maxRem),document.documentElement.style="font-size: ".concat(n,"rem")}},{key:"resizeHandler",value:function(){this.fontSize(),window.addEventListener("resize",this.fontSize.bind(this))}}])&&n(t.prototype,o),i&&n(t,i),e}())(640,1280,17,21).resizeHandler(),("light"===localStorage.getItem("pref")||window.matchMedia("(prefers-color-scheme: light)").matches&&!localStorage.getItem("pref"))&&document.documentElement.setAttribute("color-mode","light")}});