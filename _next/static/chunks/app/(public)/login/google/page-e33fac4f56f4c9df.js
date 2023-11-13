(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{34482:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},i=e.split(";"),n=(t||{}).decode||r,s=0;s<i.length;s++){var a=i[s],u=a.indexOf("=");if(!(u<0)){var c=a.substring(0,u).trim();if(void 0==o[c]){var f=a.substring(u+1,a.length).trim();'"'===f[0]&&(f=f.slice(1,-1)),o[c]=function(e,t){try{return t(e)}catch(t){return e}}(f,n)}}}return o},t.serialize=function(e,t,r){var n=r||{},s=n.encode||o;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!i.test(a))throw TypeError("argument val is invalid");var u=e+"="+a;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(n.domain){if(!i.test(n.domain))throw TypeError("option domain is invalid");u+="; Domain="+n.domain}if(n.path){if(!i.test(n.path))throw TypeError("option path is invalid");u+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(u+="; HttpOnly"),n.secure&&(u+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var r=decodeURIComponent,o=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},47713:function(e,t,r){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var n=r(34482),isClientSide=function(){return"undefined"!=typeof window},isCookiesFromAppRouterMiddleware=function(e){return!!e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},isContextFromAppRouterMiddleware=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&isCookiesFromAppRouterMiddleware(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&isCookiesFromAppRouterMiddleware(null==e?void 0:e.res.cookies)},transformAppRouterMiddlewareCookies=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,o=e.value;t[r]=o}),t},stringify=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.getCookies=function(e){if(isContextFromAppRouterMiddleware(e)&&(null==e?void 0:e.req))return transformAppRouterMiddlewareCookies(e.req.cookies);if(e&&(t=e.req),!isClientSide())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,n.parse)(t.headers.cookie):{};for(var t,r={},o=document.cookie?document.cookie.split("; "):[],i=0,s=o.length;i<s;i++){var a=o[i].split("="),u=a.slice(1).join("=");r[a[0]]=u}return r},t.getCookie=function(e,r){var o=(0,t.getCookies)(r)[e];if(void 0!==o)return o?o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):o},t.setCookie=function(e,t,r){if(isContextFromAppRouterMiddleware(r)){var s,a,u,c=r.req,f=r.res,l=i(r,["req","res"]),p=o({name:e,value:t},l);c&&c.cookies.set(p),f&&f.cookies.set(p);return}if(r){var c=r.req,f=r.res,d=i(r,["req","res"]);a=c,u=f,s=d}var h=(0,n.serialize)(e,stringify(t),o({path:"/"},s));if(isClientSide())document.cookie=h;else if(u&&a){var m=u.getHeader("Set-Cookie");if(Array.isArray(m)||(m=m?[String(m)]:[]),u.setHeader("Set-Cookie",m.concat(h)),a&&a.cookies){var v=a.cookies;""===t?delete v[e]:v[e]=stringify(t)}if(a&&a.headers&&a.headers.cookie){var v=(0,n.parse)(a.headers.cookie);""===t?delete v[e]:v[e]=stringify(t),a.headers.cookie=Object.entries(v).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",o(o({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},62601:function(e,t,r){"use strict";var o,i;e.exports=(null==(o=r.g.process)?void 0:o.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(58960)},61154:function(e,t,r){Promise.resolve().then(r.bind(r,22991))},22991:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return page}});var o=r(57437),i=r(47713),n=r(24033),s=r(2265),loading=()=>(0,o.jsx)("div",{children:"Carregando..."}),a=r(62601);let u=a.env.NEXT_PUBLIC_API_URL;var page=()=>{let[e,t]=(0,s.useState)(""),r=(0,n.useRouter)(),a=(0,n.useSearchParams)(),c=a.get("code");if((0,s.useEffect)(()=>{let tokenFetch=async()=>{try{let e=await fetch("".concat(u,"/auth/google"),{method:"POST",body:JSON.stringify({code:c,origin:window.location.href.split("?").shift()}),headers:{"Content-Type":"application/json"}}),r=await e.json(),o=r.accessToken;t(o)}catch(e){console.log(e)}};tokenFetch()},[c]),!e)return(0,o.jsx)(loading,{});(0,i.setCookie)("token",e),r.push("/")}},58960:function(e){!function(){var t={229:function(e){var t,r,o,i=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var n=[],s=!1,a=-1;function cleanUpNextTick(){s&&o&&(s=!1,o.length?n=o.concat(n):a=-1,n.length&&drainQueue())}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick);s=!0;for(var t=n.length;t;){for(o=n,n=[];++a<t;)o&&o[a].run();a=-1,t=n.length}o=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];n.push(new Item(e,t)),1!==n.length||s||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function __nccwpck_require__(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},n=!0;try{t[e](i,i.exports,__nccwpck_require__),n=!1}finally{n&&delete r[e]}return i.exports}__nccwpck_require__.ab="//";var o=__nccwpck_require__(229);e.exports=o}()},30622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var o,n={},c=null,f=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,o)&&!u.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:i,type:e,key:c,ref:f,props:n,_owner:a.current}}t.Fragment=n,t.jsx=q,t.jsxs=q},57437:function(e,t,r){"use strict";e.exports=r(30622)},24033:function(e,t,r){e.exports=r(20290)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=61154)}),_N_E=e.O()}]);