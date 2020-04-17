!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=8)}({5:function(e,t,o){var n,i;/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */void 0===(i="function"==typeof(n=function(){"use strict";var e={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},t=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),o=document.head||document.getElementsByTagName("head")[0];function n(t){return new RegExp("^(https?:)?//(?:"+e.players.join("|")+").*$","i").test(t)}function i(e){if((n(e.src)||n(e.data))&&!e.getAttribute("data-fluidvids")){var t,o,i=document.createElement("div");e.parentNode.insertBefore(i,e),e.className+=(e.className?" ":"")+"fluidvids-item",e.setAttribute("data-fluidvids","loaded"),i.className+="fluidvids",i.style.paddingTop=(t=e.height,o=e.width,parseInt(t,10)/parseInt(o,10)*100+"%"),i.appendChild(e)}}return e.render=function(){for(var t=document.querySelectorAll(e.selector.join()),o=t.length;o--;)i(t[o])},e.init=function(n){for(var i in n)e[i]=n[i];var r;e.render(),(r=document.createElement("div")).innerHTML="<p>x</p><style>"+t+"</style>",o.appendChild(r.childNodes[1])},e})?n.call(t,o,t,e):n)||(e.exports=i)},8:function(e,t,o){"use strict";o.r(t);
/*! medium-zoom 1.0.5 | MIT License | https://github.com/francoischalifour/medium-zoom */
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=function(e){return"IMG"===e.tagName},r=function(e){return e&&1===e.nodeType},d=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},a=function(e){try{return Array.isArray(e)?e.filter(i):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(i):r(e)?[e].filter(i):"string"==typeof e?[].slice.call(document.querySelectorAll(e)).filter(i):[]}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},l=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},c=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,l=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+l+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},m=function(e,t){var o=n({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"==typeof window.CustomEvent)return new CustomEvent(e,o);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,o.bubbles,o.cancelable,o.detail),i};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");var u=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=window.Promise||function(e){function t(){}e(t,t)},u=function(e){var t=e.target;t!==k?-1!==S.indexOf(t)&&E({target:t}):w()},s=function(){if(!O&&T.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(A-e)>j.scrollOffset&&setTimeout(w,150)}},f=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||w()},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(k.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=n({},j.container,e.container)),e.template){var o=r(e.template)?e.template:document.querySelector(e.template);t.template=o}return j=n({},j,t),S.forEach((function(e){e.dispatchEvent(m("medium-zoom:update",{detail:{zoom:q}}))})),q},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(n({},j,t))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,a(t))}),[]);return n.filter((function(e){return-1===S.indexOf(e)})).forEach((function(e){S.push(e),e.classList.add("medium-zoom-image")})),x.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),q},y=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];T.zoomed&&w();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,a(t))}),[]):S;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(m("medium-zoom:detach",{detail:{zoom:q}}))})),S=S.filter((function(e){return-1===n.indexOf(e)})),q},h=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),x.push({type:"medium-zoom:"+e,listener:t,options:o}),q},z=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return S.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),x=x.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),q},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,o=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,o=void 0;if(j.container)if(j.container instanceof Object)t=(e=n({},e,j.container)).width-e.left-e.right-2*j.margin,o=e.height-e.top-e.bottom-2*j.margin;else{var i=(r(j.container)?j.container:document.querySelector(j.container)).getBoundingClientRect(),a=i.width,l=i.height,c=i.left,m=i.top;e=n({},e,{width:a,height:l,left:c,top:m})}t=t||e.width-2*j.margin,o=o||e.height-2*j.margin;var u=T.zoomedHd||T.original,s=d(u)?t:u.naturalWidth||t,f=d(u)?o:u.naturalHeight||o,p=u.getBoundingClientRect(),g=p.top,v=p.left,y=p.width,h=p.height,z=Math.min(s,t)/y,b=Math.min(f,o)/h,w=Math.min(z,b),E="scale("+w+") translate3d("+((t-y)/2-v+j.margin+e.left)/w+"px, "+((o-h)/2-g+j.margin+e.top)/w+"px, 0)";T.zoomed.style.transform=E,T.zoomedHd&&(T.zoomedHd.style.transform=E)};return new i((function(e){if(t&&-1===S.indexOf(t))e(q);else{if(T.zoomed)e(q);else{if(t)T.original=t;else{if(!(S.length>0))return void e(q);var n=S;T.original=n[0]}if(T.original.dispatchEvent(m("medium-zoom:open",{detail:{zoom:q}})),A=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,O=!0,T.zoomed=c(T.original),document.body.appendChild(k),j.template){var i=r(j.template)?j.template:document.querySelector(j.template);T.template=document.createElement("div"),T.template.appendChild(i.content.cloneNode(!0)),document.body.appendChild(T.template)}if(document.body.appendChild(T.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),T.original.classList.add("medium-zoom-image--hidden"),T.zoomed.classList.add("medium-zoom-image--opened"),T.zoomed.addEventListener("click",w),T.zoomed.addEventListener("transitionend",(function t(){O=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:opened",{detail:{zoom:q}})),e(q)})),T.original.getAttribute("data-zoom-src")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("srcset"),T.zoomedHd.removeAttribute("sizes"),T.zoomedHd.src=T.zoomed.getAttribute("data-zoom-src"),T.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+T.zoomedHd.src),T.zoomedHd=null,o()};var d=setInterval((function(){T.zoomedHd.complete&&(clearInterval(d),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",w),document.body.appendChild(T.zoomedHd),o())}),10)}else if(T.original.hasAttribute("srcset")){T.zoomedHd=T.zoomed.cloneNode(),T.zoomedHd.removeAttribute("sizes");var a=T.zoomedHd.addEventListener("load",(function(){T.zoomedHd.removeEventListener("load",a),T.zoomedHd.classList.add("medium-zoom-image--opened"),T.zoomedHd.addEventListener("click",w),document.body.appendChild(T.zoomedHd),o()}))}else o()}}}))},w=function(){return new i((function(e){if(!O&&T.original){O=!0,document.body.classList.remove("medium-zoom--opened"),T.zoomed.style.transform="",T.zoomedHd&&(T.zoomedHd.style.transform=""),T.template&&(T.template.style.transition="opacity 150ms",T.template.style.opacity=0),T.original.dispatchEvent(m("medium-zoom:close",{detail:{zoom:q}})),T.zoomed.addEventListener("transitionend",(function t(){T.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(T.zoomed),T.zoomedHd&&document.body.removeChild(T.zoomedHd),document.body.removeChild(k),T.zoomed.classList.remove("medium-zoom-image--opened"),T.template&&document.body.removeChild(T.template),O=!1,T.zoomed.removeEventListener("transitionend",t),T.original.dispatchEvent(m("medium-zoom:closed",{detail:{zoom:q}})),T.original=null,T.zoomed=null,T.zoomedHd=null,T.template=null,e(q)}))}else e(q)}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return T.original?w():b({target:t})},L=function(){return j},C=function(){return S},H=function(){return T.original},S=[],x=[],O=!1,A=0,j=o,T={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?j=t:(t||"string"==typeof t)&&v(t),j=n({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},j);var k=l(j.background);document.addEventListener("click",u),document.addEventListener("keyup",f),document.addEventListener("scroll",s),window.addEventListener("resize",w);var q={open:b,close:w,toggle:E,update:p,clone:g,attach:v,detach:y,on:h,off:z,getOptions:L,getImages:C,getZoomedImage:H};return q};function s(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o(5).init({selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]});var f=document.querySelectorAll(".kg-image"),p=document.querySelectorAll(".kg-gallery-image img");u([].concat(s(f),s(p)),{background:"rgba(0,0,0,0.75)"});var g=0,v=!1,y=document.querySelector(".post-reading-progress"),h=document.querySelector(".post-share-bar"),z=document.querySelector(".footer--outer-container"),b=null!==document.querySelector(".post__img")?document.querySelector(".post__img"):document.querySelector(".post__no-img"),w=document.querySelector(".post__content");null!==h&&window.addEventListener("scroll",(function(){g=window.scrollY,v||(window.requestAnimationFrame((function(){var e,t;b.getBoundingClientRect().bottom+50<h.getBoundingClientRect().top&&h.getBoundingClientRect().bottom<z.getBoundingClientRect().top-50?window.innerWidth>1024?(h.style.marginLeft="0",h.style.opacity="1"):(h.style.marginBottom="0",h.style.opacity="1"):window.innerWidth>1024?(h.style.marginLeft="-200px",h.style.opacity="0"):(h.style.marginBottom="-100px",h.style.opacity="0"),null!==y&&(e=g,t=Math.ceil(e/w.clientHeight*100),y.style.width="".concat(t,"%")),v=!1})),v=!0)}));var E=document.getElementById("copy-button");E&&E.addEventListener("click",(function(){var e=window.location.href,t=document.createElement("input");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)})),document.querySelectorAll(".post__content > table").forEach((function(e){return function(e){var t=document.createElement("div");t.setAttribute("style","width: 100%; overflow-x: auto; margin: 1em 0;"),e.parentNode.insertBefore(t,e),t.appendChild(e)}(e)}))}});