!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=336)}([function(e,t,n){"use strict";e.exports=n(52)},function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return $})),n.d(t,"h",(function(){return U})),n.d(t,"i",(function(){return Y})),n.d(t,"j",(function(){return ee})),n.d(t,"k",(function(){return te})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return re})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return A})),n.d(t,"p",(function(){return R})),n.d(t,"q",(function(){return V})),n.d(t,"r",(function(){return D})),n.d(t,"s",(function(){return ie})),n.d(t,"t",(function(){return X})),n.d(t,"u",(function(){return G})),n.d(t,"v",(function(){return z})),n.d(t,"w",(function(){return ne})),n.d(t,"x",(function(){return B})),n.d(t,"y",(function(){return c})),n.d(t,"z",(function(){return q})),n.d(t,"A",(function(){return I})),n.d(t,"B",(function(){return W})),n.d(t,"C",(function(){return K})),n.d(t,"D",(function(){return H})),n.d(t,"E",(function(){return b})),n.d(t,"F",(function(){return S})),n.d(t,"G",(function(){return u})),n.d(t,"H",(function(){return k})),n.d(t,"I",(function(){return w})),n.d(t,"J",(function(){return P})),n.d(t,"K",(function(){return h})),n.d(t,"L",(function(){return f})),n.d(t,"M",(function(){return m})),n.d(t,"N",(function(){return d})),n.d(t,"O",(function(){return O})),n.d(t,"P",(function(){return l})),n.d(t,"Q",(function(){return p})),n.d(t,"R",(function(){return C})),n.d(t,"S",(function(){return x})),n.d(t,"T",(function(){return E}));var r=n(4),i=n(10),o=n(3),a=n(37),u=function(e){return function(){return e}}(!0),l=function(){};var s=function(e){return e};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;function c(e,t,n){if(!t(e))throw new Error(n)}var f=function(e,t){Object(i.a)(e,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(n){e[n]=t[n]}))},p=function(e,t){var n;return(n=[]).concat.apply(n,t.map(e))};function d(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function h(e){var t=!1;return function(){t||(t=!0,e())}}var v=function(e){throw e},y=function(e){return{value:e,done:!0}};function m(e,t,n){void 0===t&&(t=v),void 0===n&&(n="iterator");var r={meta:{name:n},next:e,throw:t,return:y,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function g(e,t){var n=t.sagaStack;console.error(e),console.error(n)}var b=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")},w=function(e){return Array.apply(null,new Array(e))},_=function(e){return function(t){return e(Object.defineProperty(t,r.f,{value:!0}))}},E=function(e){return e===r.k},x=function(e){return e===r.j},O=function(e){return E(e)||x(e)};function k(e,t){var n=Object.keys(e),r=n.length;var i,a=0,u=Object(o.a)(e)?w(r):{},s={};return n.forEach((function(e){var n=function(n,o){i||(o||O(n)?(t.cancel(),t(n,o)):(u[e]=n,++a===r&&(i=!0,t(u))))};n.cancel=l,s[e]=n})),t.cancel=function(){i||(i=!0,n.forEach((function(e){return s[e].cancel()})))},s}function S(e){return{name:e.name||"anonymous",location:C(e)}}function C(e){return e[r.g]}var T={isEmpty:u,put:l,take:l};function j(e,t){void 0===e&&(e=10);var n=new Array(e),r=0,i=0,o=0,a=function(t){n[i]=t,i=(i+1)%e,r++},u=function(){if(0!=r){var t=n[o];return n[o]=null,r--,o=(o+1)%e,t}},l=function(){for(var e=[];r;)e.push(u());return e};return{isEmpty:function(){return 0==r},put:function(u){var s;if(r<e)a(u);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:n[i]=u,o=i=(i+1)%e;break;case 4:s=2*e,n=l(),r=n.length,i=n.length,o=0,n.length=s,e=s,a(u)}},take:u,flush:l}}var P=function(){return T},A=function(e){return j(e,3)},I=function(e){return j(e,4)},D="TAKE",M="PUT",F="ALL",R="RACE",N="CALL",z="CPS",L="FORK",U="JOIN",B="CANCEL",V="SELECT",q="ACTION_CHANNEL",W="CANCELLED",K="FLUSH",$="GET_CONTEXT",H="SET_CONTEXT",Q=function(e,t){var n;return(n={})[r.c]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function Y(e,t){return void 0===e&&(e="*"),Object(o.i)(e)?(Object(o.g)(t)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),Q(D,{pattern:e})):Object(o.f)(e)&&Object(o.g)(t)&&Object(o.i)(t)?Q(D,{channel:e,pattern:t}):Object(o.b)(e)?(Object(o.g)(t)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),Q(D,{channel:e})):void 0}function G(e,t){return Object(o.n)(t)&&(t=e,e=void 0),Q(M,{channel:e,action:t})}function X(e){var t=Q(R,e);return t.combinator=!0,t}function J(e,t){var n,r=null;return Object(o.d)(e)?n=e:(Object(o.a)(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&Object(o.k)(n)&&Object(o.d)(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Q(N,J(e,n))}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Q(L,J(e,n))}function te(e){return void 0===e&&(e=r.h),Q(B,e)}function ne(e){void 0===e&&(e=s);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Q(V,{selector:e,args:n})}function re(e,t){return Q(q,{pattern:e,buffer:t})}var ie=Z.bind(null,a.a)},function(e,t,n){e.exports=n(57)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return h})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return i}));var r=n(4),i=function(e){return null==e},o=function(e){return null!=e},a=function(e){return"function"==typeof e},u=function(e){return"string"==typeof e},l=Array.isArray,s=function(e){return e&&!l(e)&&"object"==typeof e},c=function(e){return e&&a(e.then)},f=function(e){return e&&a(e.next)&&a(e.throw)},p=function e(t){return t&&(u(t)||v(t)||a(t)||l(t)&&t.every(e))},d=function(e){return e&&a(e.take)&&a(e.close)},h=function(e){return a(e)&&e.hasOwnProperty("toString")},v=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},y=function(e){return d(e)&&e[r.e]},m=function(e){return e&&e[r.c]}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return d}));var r=function(e){return"@@redux-saga/"+e},i=r("CANCEL_PROMISE"),o=r("CHANNEL_END"),a=r("IO"),u=r("MATCH"),l=r("MULTICAST"),s=r("SAGA_ACTION"),c=r("SELF_CANCELLATION"),f=r("TASK"),p=r("TASK_CANCEL"),d=r("TERMINATE"),h=r("LOCATION")},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i.l})),n.d(t,"b",(function(){return i.s})),n.d(t,"c",(function(){return i.j})),n.d(t,"d",(function(){return i.u})),n.d(t,"e",(function(){return i.t})),n.d(t,"f",(function(){return i.w})),n.d(t,"g",(function(){return i.i})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return p}));n(4),n(10);var r=n(3),i=n(1),o=(n(37),function(e){return{done:!0,value:e}}),a={};function u(e){return Object(r.b)(e)?"channel":Object(r.l)(e)?String(e):Object(r.d)(e)?e.name:String(e)}function l(e,t,n){var r,u,l,s=t;function c(t,n){if(s===a)return o(t);if(n&&!u)throw s=a,n;r&&r(t);var i=n?e[u](n):e[s]();return s=i.nextState,l=i.effect,r=i.stateUpdater,u=i.errorState,s===a?o(t):l}return Object(i.M)(c,(function(e){return c(null,e)}),n)}function s(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a,s={done:!1,value:Object(i.i)(e)},c=function(e){return{done:!1,value:i.j.apply(void 0,[t].concat(r,[e]))}},f=function(e){return a=e};return l({q1:function(){return{nextState:"q2",effect:s,stateUpdater:f}},q2:function(){return{nextState:"q1",effect:c(a)}}},"q1","takeEvery("+u(e)+", "+t.name+")")}function c(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var a,s,c={done:!1,value:Object(i.i)(e)},f=function(e){return{done:!1,value:i.j.apply(void 0,[t].concat(r,[e]))}},p=function(e){return{done:!1,value:Object(i.k)(e)}},d=function(e){return a=e},h=function(e){return s=e};return l({q1:function(){return{nextState:"q2",effect:c,stateUpdater:h}},q2:function(){return a?{nextState:"q3",effect:p(a)}:{nextState:"q1",effect:f(s),stateUpdater:d}},q3:function(){return{nextState:"q1",effect:f(s),stateUpdater:d}}},"q1","takeLatest("+u(e)+", "+t.name+")")}function f(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return i.j.apply(void 0,[s,e,t].concat(r))}function p(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return i.j.apply(void 0,[c,e,t].concat(r))}},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"createGlobalStyle",(function(){return nt})),n.d(t,"css",(function(){return be})),n.d(t,"isStyledComponent",(function(){return S})),n.d(t,"keyframes",(function(){return it})),n.d(t,"ServerStyleSheet",(function(){return He})),n.d(t,"StyleSheetConsumer",(function(){return Ye})),n.d(t,"StyleSheetContext",(function(){return Qe})),n.d(t,"StyleSheetManager",(function(){return Ge})),n.d(t,"ThemeConsumer",(function(){return Ke})),n.d(t,"ThemeContext",(function(){return We})),n.d(t,"ThemeProvider",(function(){return $e})),n.d(t,"withTheme",(function(){return ot})),n.d(t,"__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS",(function(){return at}));var r=n(74),i=n.n(r),o=n(87),a=n.n(o),u=n(0),l=n.n(u),s=n(88),c=n(25),f=n(75),p=n(89),d=n(91),h=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},w=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){return"object"===(void 0===e?"undefined":v(e))&&e.constructor===Object},E=Object.freeze([]),x=Object.freeze({});function O(e){return"function"==typeof e}function k(e){return e.displayName||e.name||"Component"}function S(e){return e&&"string"==typeof e.styledComponentId}var C=void 0!==e&&(e.env.REACT_APP_SC_ATTR||e.env.SC_ATTR)||"data-styled",T="undefined"!=typeof window&&"HTMLElement"in window,j="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||void 0!==e&&(e.env.REACT_APP_SC_DISABLE_SPEEDY||e.env.SC_DISABLE_SPEEDY)||!1,P={};var A=function(e){function t(n){y(this,t);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a=w(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return w(a)}return b(t,e),t}(Error),I=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,D=function(e){var t=""+(e||""),n=[];return t.replace(I,(function(e,t,r){return n.push({componentId:t,matchIndex:r}),e})),n.map((function(e,r){var i=e.componentId,o=e.matchIndex,a=n[r+1];return{componentId:i,cssFromDOM:a?t.slice(o,a.matchIndex):t.slice(o)}}))},M=/^\s*\/\/.*$/gm,F=new i.a({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),R=new i.a({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),N=[],z=function(e){if(-2===e){var t=N;return N=[],t}},L=a()((function(e){N.push(e)})),U=void 0,B=void 0,V=void 0,q=function(e,t,n){return t>0&&-1!==n.slice(0,t).indexOf(B)&&n.slice(t-B.length,t)!==B?"."+U:e};R.use([function(e,t,n){2===e&&n.length&&n[0].lastIndexOf(B)>0&&(n[0]=n[0].replace(V,q))},L,z]),F.use([L,z]);var W=function(e){return F("",e)};function K(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",i=e.join("").replace(M,""),o=t&&n?n+" "+t+" { "+i+" }":i;return U=r,B=t,V=new RegExp("\\"+B+"\\b","g"),R(n||!t?"":t,o)}var $=function(){return n.nc},H=function(e,t,n){n&&((e[t]||(e[t]=Object.create(null)))[n]=!0)},Q=function(e,t){e[t]=Object.create(null)},Y=function(e){return function(t,n){return void 0!==e[t]&&e[t][n]}},G=function(e){var t="";for(var n in e)t+=Object.keys(e[n]).join(" ")+" ";return t.trim()},X=function(e){if(e.sheet)return e.sheet;for(var t=e.ownerDocument.styleSheets.length,n=0;n<t;n+=1){var r=e.ownerDocument.styleSheets[n];if(r.ownerNode===e)return r}throw new A(10)},J=function(e,t,n){if(!t)return!1;var r=e.cssRules.length;try{e.insertRule(t,n<=r?n:r)}catch(e){return!1}return!0},Z=function(e){return"\n/* sc-component-id: "+e+" */\n"},ee=function(e,t){for(var n=0,r=0;r<=t;r+=1)n+=e[r];return n},te=function(e,t){return function(n){var r=$();return"<style "+[r&&'nonce="'+r+'"',C+'="'+G(t)+'"','data-styled-version="4.4.1"',n].filter(Boolean).join(" ")+">"+e()+"</style>"}},ne=function(e,t){return function(){var n,r=((n={})[C]=G(t),n["data-styled-version"]="4.4.1",n),i=$();return i&&(r.nonce=i),l.a.createElement("style",g({},r,{dangerouslySetInnerHTML:{__html:e()}}))}},re=function(e){return function(){return Object.keys(e)}},ie=function(e,t){return e.createTextNode(Z(t))},oe=function e(t,n){var r=void 0===t?Object.create(null):t,i=void 0===n?Object.create(null):n,o=function(e){var t=i[e];return void 0!==t?t:i[e]=[""]},a=function(){var e="";for(var t in i){var n=i[t][0];n&&(e+=Z(t)+n)}return e};return{clone:function(){var t=function(e){var t=Object.create(null);for(var n in e)t[n]=g({},e[n]);return t}(r),n=Object.create(null);for(var o in i)n[o]=[i[o][0]];return e(t,n)},css:a,getIds:re(i),hasNameForId:Y(r),insertMarker:o,insertRules:function(e,t,n){o(e)[0]+=t.join(" "),H(r,e,n)},removeRules:function(e){var t=i[e];void 0!==t&&(t[0]="",Q(r,e))},sealed:!1,styleTag:null,toElement:ne(a,r),toHTML:te(a,r)}},ae=function(e,t,n,r,i){if(T&&!n){var o=function(e,t,n){var r=document;e?r=e.ownerDocument:t&&(r=t.ownerDocument);var i=r.createElement("style");i.setAttribute(C,""),i.setAttribute("data-styled-version","4.4.1");var o=$();if(o&&i.setAttribute("nonce",o),i.appendChild(r.createTextNode("")),e&&!t)e.appendChild(i);else{if(!t||!e||!t.parentNode)throw new A(6);t.parentNode.insertBefore(i,n?t:t.nextSibling)}return i}(e,t,r);return j?function(e,t){var n=Object.create(null),r=Object.create(null),i=void 0!==t,o=!1,a=function(t){var i=r[t];return void 0!==i?i:(r[t]=ie(e.ownerDocument,t),e.appendChild(r[t]),n[t]=Object.create(null),r[t])},u=function(){var e="";for(var t in r)e+=r[t].data;return e};return{clone:function(){throw new A(5)},css:u,getIds:re(r),hasNameForId:Y(n),insertMarker:a,insertRules:function(e,r,u){for(var l=a(e),s=[],c=r.length,f=0;f<c;f+=1){var p=r[f],d=i;if(d&&-1!==p.indexOf("@import"))s.push(p);else{d=!1;var h=f===c-1?"":" ";l.appendData(""+p+h)}}H(n,e,u),i&&s.length>0&&(o=!0,t().insertRules(e+"-import",s))},removeRules:function(a){var u=r[a];if(void 0!==u){var l=ie(e.ownerDocument,a);e.replaceChild(l,u),r[a]=l,Q(n,a),i&&o&&t().removeRules(a+"-import")}},sealed:!1,styleTag:e,toElement:ne(u,n),toHTML:te(u,n)}}(o,i):function(e,t){var n=Object.create(null),r=Object.create(null),i=[],o=void 0!==t,a=!1,u=function(e){var t=r[e];return void 0!==t?t:(r[e]=i.length,i.push(0),Q(n,e),r[e])},l=function(){var t=X(e).cssRules,n="";for(var o in r){n+=Z(o);for(var a=r[o],u=ee(i,a),l=u-i[a];l<u;l+=1){var s=t[l];void 0!==s&&(n+=s.cssText)}}return n};return{clone:function(){throw new A(5)},css:l,getIds:re(r),hasNameForId:Y(n),insertMarker:u,insertRules:function(r,l,s){for(var c=u(r),f=X(e),p=ee(i,c),d=0,h=[],v=l.length,y=0;y<v;y+=1){var m=l[y],g=o;g&&-1!==m.indexOf("@import")?h.push(m):J(f,m,p+d)&&(g=!1,d+=1)}o&&h.length>0&&(a=!0,t().insertRules(r+"-import",h)),i[c]+=d,H(n,r,s)},removeRules:function(u){var l=r[u];if(void 0!==l&&!1!==e.isConnected){var s=i[l];!function(e,t,n){for(var r=t-n,i=t;i>r;i-=1)e.deleteRule(i)}(X(e),ee(i,l)-1,s),i[l]=0,Q(n,u),o&&a&&t().removeRules(u+"-import")}},sealed:!1,styleTag:e,toElement:ne(l,n),toHTML:te(l,n)}}(o,i)}return oe()},ue=/\s+/,le=void 0;le=T?j?40:1e3:-1;var se=0,ce=void 0,fe=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T?document.head:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];y(this,e),this.getImportRuleTag=function(){var e=t.importRuleTag;if(void 0!==e)return e;var n=t.tags[0];return t.importRuleTag=ae(t.target,n?n.styleTag:null,t.forceServer,!0)},se+=1,this.id=se,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!T||this.forceServer)return this;var e=[],t=[],n=!1,r=document.querySelectorAll("style["+C+'][data-styled-version="4.4.1"]'),i=r.length;if(!i)return this;for(var o=0;o<i;o+=1){var a=r[o];n||(n=!!a.getAttribute("data-styled-streamed"));for(var u,l=(a.getAttribute(C)||"").trim().split(ue),s=l.length,c=0;c<s;c+=1)u=l[c],this.rehydratedNames[u]=!0;t.push.apply(t,D(a.textContent)),e.push(a)}var f=t.length;if(!f)return this;var p=this.makeTag(null);!function(e,t,n){for(var r=0,i=n.length;r<i;r+=1){var o=n[r],a=o.componentId,u=o.cssFromDOM,l=W(u);e.insertRules(a,l)}for(var s=0,c=t.length;s<c;s+=1){var f=t[s];f.parentNode&&f.parentNode.removeChild(f)}}(p,e,t),this.capacity=Math.max(1,le-f),this.tags.push(p);for(var d=0;d<f;d+=1)this.tagMap[t[d].componentId]=p;return this},e.reset=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ce=new e(void 0,t).rehydrate()},e.prototype.clone=function(){var t=new e(this.target,this.forceServer);return this.clones.push(t),t.tags=this.tags.map((function(e){for(var n=e.getIds(),r=e.clone(),i=0;i<n.length;i+=1)t.tagMap[n[i]]=r;return r})),t.rehydratedNames=g({},this.rehydratedNames),t.deferred=g({},this.deferred),t},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach((function(e){e.sealed=!0}))},e.prototype.makeTag=function(e){var t=e?e.styleTag:null;return ae(this.target,t,this.forceServer,!1,this.getImportRuleTag)},e.prototype.getTagForId=function(e){var t=this.tagMap[e];if(void 0!==t&&!t.sealed)return t;var n=this.tags[this.tags.length-1];return this.capacity-=1,0===this.capacity&&(this.capacity=le,n=this.makeTag(n),this.tags.push(n)),this.tagMap[e]=n},e.prototype.hasId=function(e){return void 0!==this.tagMap[e]},e.prototype.hasNameForId=function(e,t){if(void 0===this.ignoreRehydratedNames[e]&&this.rehydratedNames[t])return!0;var n=this.tagMap[e];return void 0!==n&&n.hasNameForId(e,t)},e.prototype.deferredInject=function(e,t){if(void 0===this.tagMap[e]){for(var n=this.clones,r=0;r<n.length;r+=1)n[r].deferredInject(e,t);this.getTagForId(e).insertMarker(e),this.deferred[e]=t}},e.prototype.inject=function(e,t,n){for(var r=this.clones,i=0;i<r.length;i+=1)r[i].inject(e,t,n);var o=this.getTagForId(e);if(void 0!==this.deferred[e]){var a=this.deferred[e].concat(t);o.insertRules(e,a,n),this.deferred[e]=void 0}else o.insertRules(e,t,n)},e.prototype.remove=function(e){var t=this.tagMap[e];if(void 0!==t){for(var n=this.clones,r=0;r<n.length;r+=1)n[r].remove(e);t.removeRules(e),this.ignoreRehydratedNames[e]=!0,this.deferred[e]=void 0}},e.prototype.toHTML=function(){return this.tags.map((function(e){return e.toHTML()})).join("")},e.prototype.toReactElements=function(){var e=this.id;return this.tags.map((function(t,n){var r="sc-"+e+"-"+n;return Object(u.cloneElement)(t.toElement(),{key:r})}))},m(e,null,[{key:"master",get:function(){return ce||(ce=(new e).rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),pe=function(){function e(t,n){var r=this;y(this,e),this.inject=function(e){e.hasNameForId(r.id,r.name)||e.inject(r.id,r.rules,r.name)},this.toString=function(){throw new A(12,String(r.name))},this.name=t,this.rules=n,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),de=/([A-Z])/g,he=/^ms-/;function ve(e){return e.replace(de,"-$1").toLowerCase().replace(he,"-ms-")}var ye=function(e){return null==e||!1===e||""===e},me=function e(t,n){var r=[];return Object.keys(t).forEach((function(n){if(!ye(t[n])){if(_(t[n]))return r.push.apply(r,e(t[n],n)),r;if(O(t[n]))return r.push(ve(n)+":",t[n],";"),r;r.push(ve(n)+": "+(i=n,(null==(o=t[n])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||i in s.a?String(o).trim():o+"px")+";"))}var i,o;return r})),n?[n+" {"].concat(r,["}"]):r};function ge(e,t,n){if(Array.isArray(e)){for(var r,i=[],o=0,a=e.length;o<a;o+=1)null!==(r=ge(e[o],t,n))&&(Array.isArray(r)?i.push.apply(i,r):i.push(r));return i}return ye(e)?null:S(e)?"."+e.styledComponentId:O(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:ge(e(t),t,n):e instanceof pe?n?(e.inject(n),e.getName()):e:_(e)?me(e):e.toString();var u}function be(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return O(e)||_(e)?ge(h(E,[e].concat(n))):ge(h(e,n))}function we(e){for(var t,n=0|e.length,r=0|n,i=0;n>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24))+((1540483477*(t>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),n-=4,++i;switch(n){case 3:r^=(255&e.charCodeAt(i+2))<<16;case 2:r^=(255&e.charCodeAt(i+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(i)))+((1540483477*(r>>>16)&65535)<<16)}return((r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16))^r>>>15)>>>0}var _e=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ee(e){var t="",n=void 0;for(n=e;n>52;n=Math.floor(n/52))t=_e(n%52)+t;return _e(n%52)+t}function xe(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(Array.isArray(r)&&!xe(r,t))return!1;if(O(r)&&!S(r))return!1}return!t.some((function(e){return O(e)||function(e){for(var t in e)if(O(e[t]))return!0;return!1}(e)}))}var Oe,ke=function(e){return Ee(we(e))},Se=function(){function e(t,n,r){y(this,e),this.rules=t,this.isStatic=xe(t,n),this.componentId=r,fe.master.hasId(r)||fe.master.deferredInject(r,[])}return e.prototype.generateAndInjectStyles=function(e,t){var n=this.isStatic,r=this.componentId,i=this.lastClassName;if(T&&n&&"string"==typeof i&&t.hasNameForId(r,i))return i;var o=ge(this.rules,e,t),a=ke(this.componentId+o.join(""));return t.hasNameForId(r,a)||t.inject(this.componentId,K(o,"."+a,void 0,r),a),this.lastClassName=a,a},e.generateName=function(e){return ke(e)},e}(),Ce=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x,r=!!n&&e.theme===n.theme,i=e.theme&&!r?e.theme:t||n.theme;return i},Te=/[[\].#*$><+~=|^:(),"'`-]+/g,je=/(^-|-$)/g;function Pe(e){return e.replace(Te,"-").replace(je,"")}function Ae(e){return"string"==typeof e&&!0}var Ie={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},De={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me=((Oe={})[c.ForwardRef]={$$typeof:!0,render:!0},Oe),Fe=Object.defineProperty,Re=Object.getOwnPropertyNames,Ne=Object.getOwnPropertySymbols,ze=void 0===Ne?function(){return[]}:Ne,Le=Object.getOwnPropertyDescriptor,Ue=Object.getPrototypeOf,Be=Object.prototype,Ve=Array.prototype;function qe(e,t,n){if("string"!=typeof t){var r=Ue(t);r&&r!==Be&&qe(e,r,n);for(var i=Ve.concat(Re(t),ze(t)),o=Me[e.$$typeof]||Ie,a=Me[t.$$typeof]||Ie,u=i.length,l=void 0,s=void 0;u--;)if(s=i[u],!(De[s]||n&&n[s]||a&&a[s]||o&&o[s])&&(l=Le(t,s)))try{Fe(e,s,l)}catch(e){}return e}return e}var We=Object(u.createContext)(),Ke=We.Consumer,$e=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n));return r.getContext=Object(f.a)(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return b(t,e),t.prototype.render=function(){return this.props.children?l.a.createElement(We.Consumer,null,this.renderInner):null},t.prototype.renderInner=function(e){var t=this.getContext(this.props.theme,e);return l.a.createElement(We.Provider,{value:t},this.props.children)},t.prototype.getTheme=function(e,t){if(O(e))return e(t);if(null===e||Array.isArray(e)||"object"!==(void 0===e?"undefined":v(e)))throw new A(8);return g({},t,e)},t.prototype.getContext=function(e,t){return this.getTheme(e,t)},t}(u.Component),He=function(){function e(){y(this,e),this.masterSheet=fe.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return e.prototype.seal=function(){if(!this.sealed){var e=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(e,1),this.sealed=!0}},e.prototype.collectStyles=function(e){if(this.sealed)throw new A(2);return l.a.createElement(Ge,{sheet:this.instance},e)},e.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},e.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},e.prototype.interleaveWithNodeStream=function(e){throw new A(3)},e}(),Qe=Object(u.createContext)(),Ye=Qe.Consumer,Ge=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n));return r.getContext=Object(f.a)(r.getContext),r}return b(t,e),t.prototype.getContext=function(e,t){if(e)return e;if(t)return new fe(t);throw new A(4)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.sheet,r=e.target;return l.a.createElement(Qe.Provider,{value:this.getContext(n,r)},t)},t}(u.Component),Xe={};var Je=function(e){function t(){y(this,t);var n=w(this,e.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return b(t,e),t.prototype.render=function(){return l.a.createElement(Ye,null,this.renderOuter)},t.prototype.renderOuter=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.master;return this.styleSheet=e,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():l.a.createElement(Ke,null,this.renderInner)},t.prototype.renderInner=function(e){var t=this.props.forwardedComponent,n=t.componentStyle,r=t.defaultProps,i=(t.displayName,t.foldedComponentIds),o=t.styledComponentId,a=t.target,l=void 0;l=n.isStatic?this.generateAndInjectStyles(x,this.props):this.generateAndInjectStyles(Ce(this.props,e,r)||x,this.props);var s=this.props.as||this.attrs.as||a,c=Ae(s),f={},d=g({},this.props,this.attrs),h=void 0;for(h in d)"forwardedComponent"!==h&&"as"!==h&&("forwardedRef"===h?f.ref=d[h]:"forwardedAs"===h?f.as=d[h]:c&&!Object(p.a)(h)||(f[h]=d[h]));return this.props.style&&this.attrs.style&&(f.style=g({},this.attrs.style,this.props.style)),f.className=Array.prototype.concat(i,o,l!==o?l:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),Object(u.createElement)(s,f)},t.prototype.buildExecutionContext=function(e,t,n){var r=this,i=g({},t,{theme:e});return n.length?(this.attrs={},n.forEach((function(e){var t,n=e,o=!1,a=void 0,u=void 0;for(u in O(n)&&(n=n(i),o=!0),n)a=n[u],o||!O(a)||(t=a)&&t.prototype&&t.prototype.isReactComponent||S(a)||(a=a(i)),r.attrs[u]=a,i[u]=a})),i):i},t.prototype.generateAndInjectStyles=function(e,t){var n=t.forwardedComponent,r=n.attrs,i=n.componentStyle;n.warnTooManyClasses;return i.isStatic&&!r.length?i.generateAndInjectStyles(x,this.styleSheet):i.generateAndInjectStyles(this.buildExecutionContext(e,t,r),this.styleSheet)},t}(u.Component);function Ze(e,t,n){var r=S(e),i=!Ae(e),o=t.displayName,a=void 0===o?function(e){return Ae(e)?"styled."+e:"Styled("+k(e)+")"}(e):o,u=t.componentId,s=void 0===u?function(e,t,n){var r="string"!=typeof t?"sc":Pe(t),i=(Xe[r]||0)+1;Xe[r]=i;var o=r+"-"+e.generateName(r+i);return n?n+"-"+o:o}(Se,t.displayName,t.parentComponentId):u,c=t.ParentComponent,f=void 0===c?Je:c,p=t.attrs,h=void 0===p?E:p,v=t.displayName&&t.componentId?Pe(t.displayName)+"-"+t.componentId:t.componentId||s,y=r&&e.attrs?Array.prototype.concat(e.attrs,h).filter(Boolean):h,m=new Se(r?e.componentStyle.rules.concat(n):n,y,v),b=void 0,w=function(e,t){return l.a.createElement(f,g({},e,{forwardedComponent:b,forwardedRef:t}))};return w.displayName=a,(b=l.a.forwardRef(w)).displayName=a,b.attrs=y,b.componentStyle=m,b.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):E,b.styledComponentId=v,b.target=r?e.target:e,b.withComponent=function(e){var r=t.componentId,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["componentId"]),o=r&&r+"-"+(Ae(e)?e:Pe(k(e)));return Ze(e,g({},i,{attrs:y,componentId:o,ParentComponent:f}),n)},Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?Object(d.a)(e.defaultProps,t):t}}),b.toString=function(){return"."+b.styledComponentId},i&&qe(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),b}var et=function(e){return function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x;if(!Object(c.isValidElementType)(n))throw new A(1,String(n));var i=function(){return t(n,r,be.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,g({},r,i))},i.attrs=function(i){return e(t,n,g({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(Ze,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){et[e]=et(e)}));var tt=function(){function e(t,n){y(this,e),this.rules=t,this.componentId=n,this.isStatic=xe(t,E),fe.master.hasId(n)||fe.master.deferredInject(n,[])}return e.prototype.createStyles=function(e,t){var n=K(ge(this.rules,e,t),"");t.inject(this.componentId,n)},e.prototype.removeStyles=function(e){var t=this.componentId;e.hasId(t)&&e.remove(t)},e.prototype.renderStyles=function(e,t){this.removeStyles(t),this.createStyles(e,t)},e}();function nt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=be.apply(void 0,[e].concat(n)),o="sc-global-"+we(JSON.stringify(i)),a=new tt(i,o),u=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n)),i=r.constructor,o=i.globalStyle,a=i.styledComponentId;return T&&(window.scCGSHMRCache[a]=(window.scCGSHMRCache[a]||0)+1),r.state={globalStyle:o,styledComponentId:a},r}return b(t,e),t.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),0===window.scCGSHMRCache[this.state.styledComponentId]&&this.state.globalStyle.removeStyles(this.styleSheet)},t.prototype.render=function(){var e=this;return l.a.createElement(Ye,null,(function(t){e.styleSheet=t||fe.master;var n=e.state.globalStyle;return n.isStatic?(n.renderStyles(P,e.styleSheet),null):l.a.createElement(Ke,null,(function(t){var r=e.constructor.defaultProps,i=g({},e.props);return void 0!==t&&(i.theme=Ce(e.props,t,r)),n.renderStyles(i,e.styleSheet),null}))}))},t}(l.a.Component);return u.globalStyle=a,u.styledComponentId=o,u}T&&(window.scCGSHMRCache={});var rt=function(e){return e.replace(/\s|\\n/g,"")};function it(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=be.apply(void 0,[e].concat(n)),o=Ee(we(rt(JSON.stringify(i))));return new pe(o,K(i,o,"@keyframes"))}var ot=function(e){var t=l.a.forwardRef((function(t,n){return l.a.createElement(Ke,null,(function(r){var i=e.defaultProps,o=Ce(t,r,i);return l.a.createElement(e,g({},t,{theme:o,ref:n}))}))}));return qe(t,e),t.displayName="WithTheme("+k(e)+")",t},at={StyleSheet:fe};t.default=et}.call(this,n(68))},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return ee}));var r=n(30),i=n(0),o=n.n(i),a=n(2),u=n.n(a),l=u.a.shape({trySubscribe:u.a.func.isRequired,tryUnsubscribe:u.a.func.isRequired,notifyNestedSubs:u.a.func.isRequired,isSubscribed:u.a.func.isRequired}),s=u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired});o.a.forwardRef;var c=function(e){var t;void 0===e&&(e="store");var n=e+"Subscription",o=function(t){Object(r.a)(a,t);var o=a.prototype;function a(n,r){var i;return(i=t.call(this,n,r)||this)[e]=n.store,i}return o.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},o.render=function(){return i.Children.only(this.props.children)},a}(i.Component);return o.propTypes={store:s.isRequired,children:u.a.element.isRequired},o.childContextTypes=((t={})[e]=s.isRequired,t[n]=l,t),o}(),f=n(23),p=n(10),d=n(15),h=n(50),v=n.n(h),y=n(18),m=n.n(y),g=n(25),b={notify:function(){}};var w=function(){function e(e,t,n){this.store=e,this.parentSub=t,this.onStateChange=n,this.unsubscribe=null,this.listeners=b}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],t=[],{clear:function(){t=null,e=null},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&null!==e&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=b)},e}(),_=void 0!==o.a.forwardRef,E=0,x={};function O(){}function k(e,t){var n,o;void 0===t&&(t={});var a=t,u=a.getDisplayName,c=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,h=a.methodName,y=void 0===h?"connectAdvanced":h,b=a.renderCountProp,k=void 0===b?void 0:b,S=a.shouldHandleStateChanges,C=void 0===S||S,T=a.storeKey,j=void 0===T?"store":T,P=a.withRef,A=void 0!==P&&P,I=Object(d.a)(a,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),D=j+"Subscription",M=E++,F=((n={})[j]=s,n[D]=l,n),R=((o={})[D]=l,o);return function(t){m()(Object(g.isValidElementType)(t),"You must pass a component to the function returned by "+y+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",o=c(n),a=Object(p.a)({},I,{getDisplayName:c,methodName:y,renderCountProp:k,shouldHandleStateChanges:C,storeKey:j,withRef:A,displayName:o,wrappedComponentName:n,WrappedComponent:t}),u=function(n){function u(e,t){var r;return(r=n.call(this,e,t)||this).version=M,r.state={},r.renderCount=0,r.store=e[j]||t[j],r.propsMode=Boolean(e[j]),r.setWrappedInstance=r.setWrappedInstance.bind(Object(f.a)(Object(f.a)(r))),m()(r.store,'Could not find "'+j+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+j+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}Object(r.a)(u,n);var l=u.prototype;return l.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[D]=t||this.context[D],e},l.componentDidMount=function(){C&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},l.componentWillReceiveProps=function(e){this.selector.run(e)},l.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},l.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=O,this.store=null,this.selector.run=O,this.selector.shouldComponentUpdate=!1},l.getWrappedInstance=function(){return m()(A,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+y+"() call."),this.wrappedInstance},l.setWrappedInstance=function(e){this.wrappedInstance=e},l.initSelector=function(){var t=e(this.store.dispatch,a);this.selector=function(e,t){var n={run:function(r){try{var i=e(t.getState(),r);(i!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=i,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},l.initSubscription=function(){if(C){var e=(this.propsMode?this.props:this.context)[D];this.subscription=new w(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},l.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(x)):this.notifyNestedSubs()},l.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},l.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},l.addExtraProps=function(e){if(!(A||k||this.propsMode&&this.subscription))return e;var t=Object(p.a)({},e);return A&&(t.ref=this.setWrappedInstance),k&&(t[k]=this.renderCount++),this.propsMode&&this.subscription&&(t[D]=this.subscription),t},l.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(i.createElement)(t,this.addExtraProps(e.props))},u}(i.Component);return _&&(u.prototype.UNSAFE_componentWillReceiveProps=u.prototype.componentWillReceiveProps,delete u.prototype.componentWillReceiveProps),u.WrappedComponent=t,u.displayName=o,u.childContextTypes=R,u.contextTypes=F,u.propTypes=F,v()(u,t)}}var S=Object.prototype.hasOwnProperty;function C(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function T(e,t){if(C(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!S.call(t,n[i])||!C(e[n[i]],t[n[i]]))return!1;return!0}var j=n(9);function P(e){return function(t,n){var r=e(t,n);function i(){return r}return i.dependsOnOwnProps=!1,i}}function A(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function I(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=A(e);var i=r(t,n);return"function"==typeof i&&(r.mapToProps=i,r.dependsOnOwnProps=A(i),i=r(t,n)),i},r}}var D=[function(e){return"function"==typeof e?I(e):void 0},function(e){return e?void 0:P((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?P((function(t){return Object(j.b)(e,t)})):void 0}];var M=[function(e){return"function"==typeof e?I(e):void 0},function(e){return e?void 0:P((function(){return{}}))}];function F(e,t,n){return Object(p.a)({},n,e,t)}var R=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,i=n.pure,o=n.areMergedPropsEqual,a=!1;return function(t,n,u){var l=e(t,n,u);return a?i&&o(l,r)||(r=l):(a=!0,r=l),r}}}(e):void 0},function(e){return e?void 0:function(){return F}}];function N(e,t,n,r){return function(i,o){return n(e(i,o),t(r,o),o)}}function z(e,t,n,r,i){var o,a,u,l,s,c=i.areStatesEqual,f=i.areOwnPropsEqual,p=i.areStatePropsEqual,d=!1;function h(i,d){var h,v,y=!f(d,a),m=!c(i,o);return o=i,a=d,y&&m?(u=e(o,a),t.dependsOnOwnProps&&(l=t(r,a)),s=n(u,l,a)):y?(e.dependsOnOwnProps&&(u=e(o,a)),t.dependsOnOwnProps&&(l=t(r,a)),s=n(u,l,a)):m?(h=e(o,a),v=!p(h,u),u=h,v&&(s=n(u,l,a)),s):s}return function(i,c){return d?h(i,c):(u=e(o=i,a=c),l=t(r,a),s=n(u,l,a),d=!0,s)}}function L(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,i=t.initMergeProps,o=Object(d.a)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,o),u=r(e,o),l=i(e,o);return(o.pure?z:N)(a,u,l,e,o)}function U(e,t,n){for(var r=t.length-1;r>=0;r--){var i=t[r](e);if(i)return i}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function B(e,t){return e===t}var V,q,W,K,$,H,Q,Y,G,X,J,Z,ee=(W=(q=void 0===V?{}:V).connectHOC,K=void 0===W?k:W,$=q.mapStateToPropsFactories,H=void 0===$?M:$,Q=q.mapDispatchToPropsFactories,Y=void 0===Q?D:Q,G=q.mergePropsFactories,X=void 0===G?R:G,J=q.selectorFactory,Z=void 0===J?L:J,function(e,t,n,r){void 0===r&&(r={});var i=r,o=i.pure,a=void 0===o||o,u=i.areStatesEqual,l=void 0===u?B:u,s=i.areOwnPropsEqual,c=void 0===s?T:s,f=i.areStatePropsEqual,h=void 0===f?T:f,v=i.areMergedPropsEqual,y=void 0===v?T:v,m=Object(d.a)(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=U(e,H,"mapStateToProps"),b=U(t,Y,"mapDispatchToProps"),w=U(n,X,"mergeProps");return K(Z,Object(p.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:b,initMergeProps:w,pure:a,areStatesEqual:l,areOwnPropsEqual:c,areStatePropsEqual:h,areMergedPropsEqual:y},m))})},function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return f}));var r=n(13);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var u="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function c(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(a(1));return n(f)(e,t)}if("function"!=typeof e)throw new Error(a(2));var i=e,o=t,l=[],p=l,d=!1;function h(){p===l&&(p=l.slice())}function v(){if(d)throw new Error(a(3));return o}function y(e){if("function"!=typeof e)throw new Error(a(4));if(d)throw new Error(a(5));var t=!0;return h(),p.push(e),function(){if(t){if(d)throw new Error(a(6));t=!1,h();var n=p.indexOf(e);p.splice(n,1),l=null}}}function m(e){if(!c(e))throw new Error(a(7));if(void 0===e.type)throw new Error(a(8));if(d)throw new Error(a(9));try{d=!0,o=i(o,e)}finally{d=!1}for(var t=l=p,n=0;n<t.length;n++){(0,t[n])()}return e}function g(e){if("function"!=typeof e)throw new Error(a(10));i=e,m({type:s.REPLACE})}function b(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(a(11));function n(){e.next&&e.next(v())}return n(),{unsubscribe:t(n)}}})[u]=function(){return this},e}return m({type:s.INIT}),(r={dispatch:m,subscribe:y,getState:v,replaceReducer:g})[u]=b,r}function p(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var o,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:s.INIT}))throw new Error(a(12));if(void 0===n(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var r=!1,i={},l=0;l<u.length;l++){var s=u[l],c=n[s],f=e[s],p=c(f,t);if(void 0===p){t&&t.type;throw new Error(a(14))}i[s]=p,r=r||p!==f}return(r=r||u.length!==Object.keys(e).length)?i:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function h(e,t){if("function"==typeof e)return d(e,t);if("object"!=typeof e||null===e)throw new Error(a(16));var n={};for(var r in e){var i=e[r];"function"==typeof i&&(n[r]=d(i,t))}return n}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(a(15))},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},u=t.map((function(e){return e(i)}));return r=v.apply(void 0,u)(n.dispatch),o(o({},n),{},{dispatch:r})}}}},function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},,,function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(18),i=n.n(r),o=n(32),a=n(28),u=function(e){return null===e};function l(e,t,n){void 0===t&&(t=a.a),i()(Object(o.a)(t)||u(t),"Expected payloadCreator to be a function, undefined or null");var r=u(t)||t===a.a?a.a:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e instanceof Error?e:t.apply(void 0,[e].concat(r))},l=Object(o.a)(n),s=e.toString(),c=function(){var t=r.apply(void 0,arguments),i={type:e};return t instanceof Error&&(i.error=!0),void 0!==t&&(i.payload=t),l&&(i.meta=n.apply(void 0,arguments)),i};return c.toString=function(){return s},c}},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return r}))},,,function(e,t,n){"use strict";e.exports=function(e,t,n,r,i,o,a,u){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,o,a,u],c=0;(l=new Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return i})),n.d(t,"j",(function(){return o})),n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return p}));const r="ANNOTATION",i="TOGGLE_ENTITY",o="UPDATE_OCCURRENCES_FOR_ENTITY",a="TOGGLE_LINK",u="RECEIVE_ANALYSIS_RESULTS",l="SET_CURRENT_ENTITY",s="SET_ENTITY_FILTER",c="EDITOR_SELECTION_CHANGED",f="TOGGLE_LINK_SUCCESS",p="ADD_ENTITY"},function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return y}));var r=n(132),i=n(142);const{loadItemsRequest:o,loadItemsSuccess:a,loadItemsError:u,createEntityRequest:l,createEntitySuccess:s,addEntityRequest:c,addEntitySuccess:f,close:p,open:d,setValue:h,createEntityForm:v}=Object(r.a)("LOAD_ITEMS_REQUEST","LOAD_ITEMS_SUCCESS","LOAD_ITEMS_ERROR","CREATE_ENTITY_REQUEST","CREATE_ENTITY_SUCCESS","ADD_ENTITY_REQUEST","ADD_ENTITY_SUCCESS","CLOSE","OPEN","SET_VALUE","CREATE_ENTITY_FORM"),y=Object(i.a)({[a]:(e,t)=>({...e,items:t.payload}),[p]:e=>({...e,open:!1}),[d]:e=>({...e,open:e.enabled}),[h]:(e,t)=>({...e,value:t.payload,enabled:void 0!==t.payload&&""!==t.payload})},{open:!1,items:[],value:"",enabled:!1})},,function(e,t,n){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=n(61)},function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},,function(e,t,n){"use strict";e.exports=n(59)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(65);var i=n(95),o=n(77);function a(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(i.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},function(e,t,n){"use strict";t.a=function(e){return e}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(47);function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Object(r.a)(e,t)}},,function(e,t,n){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,n){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},,function(e,t,n){"use strict";n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"c",(function(){return w}));var r=n(51);var i=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var a=function(e,t){return function(n,r,a){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,l=e[t];if(o(n)&&i(r))if("function"==typeof a)if("number"==typeof u){var s={callback:a,priority:u,namespace:r};if(l[n]){var c,f=l[n].handlers;for(c=f.length;c>0&&!(u>=f[c-1].priority);c--);c===f.length?f[c]=s:f.splice(c,0,s),l.__current.forEach((function(e){e.name===n&&e.currentIndex>=c&&e.currentIndex++}))}else l[n]={handlers:[s],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,r,a,u)}else console.error("If specified, the hook priority must be a number.");else console.error("The hook callback must be a function.")}};var u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r,a){var u=e[t];if(o(r)&&(n||i(a))){if(!u[r])return 0;var l=0;if(n)l=u[r].handlers.length,u[r]={runs:u[r].runs,handlers:[]};else for(var s=u[r].handlers,c=function(e){s[e].namespace===a&&(s.splice(e,1),l++,u.__current.forEach((function(t){t.name===r&&t.currentIndex>=e&&t.currentIndex--})))},f=s.length-1;f>=0;f--)c(f);return"hookRemoved"!==r&&e.doAction("hookRemoved",r,a),l}}};var l=function(e,t){return function(n,r){var i=e[t];return void 0!==r?n in i&&i[n].handlers.some((function(e){return e.namespace===r})):n in i}};n(27);var s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){var i=e[t];i[r]||(i[r]={handlers:[],runs:0}),i[r].runs++;var o=i[r].handlers;for(var a=arguments.length,u=new Array(a>1?a-1:0),l=1;l<a;l++)u[l-1]=arguments[l];if(!o||!o.length)return n?u[0]:void 0;var s={name:r,currentIndex:0};for(i.__current.push(s);s.currentIndex<o.length;){var c=o[s.currentIndex],f=c.callback.apply(null,u);n&&(u[0]=f),s.currentIndex++}return i.__current.pop(),n?u[0]:void 0}};var c=function(e,t){return function(){var n,r,i=e[t];return null!==(n=null===(r=i.__current[i.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}};var f=function(e,t){return function(n){var r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}};var p=function(e,t){return function(n){var r=e[t];if(o(n))return r[n]&&r[n].runs?r[n].runs:0}},d=function e(){Object(r.a)(this,e),this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=a(this,"actions"),this.addFilter=a(this,"filters"),this.removeAction=u(this,"actions"),this.removeFilter=u(this,"filters"),this.hasAction=l(this,"actions"),this.hasFilter=l(this,"filters"),this.removeAllActions=u(this,"actions",!0),this.removeAllFilters=u(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=c(this,"actions"),this.currentFilter=c(this,"filters"),this.doingAction=f(this,"actions"),this.doingFilter=f(this,"filters"),this.didAction=p(this,"actions"),this.didFilter=p(this,"filters")};var h=function(){return new d},v=h(),y=v.addAction,m=v.addFilter,g=(v.removeAction,v.removeFilter,v.hasAction,v.hasFilter),b=(v.removeAllActions,v.removeAllFilters,v.doAction),w=v.applyFilters;v.currentAction,v.currentFilter,v.doingAction,v.doingFilter,v.didAction,v.didFilter,v.actions,v.filters},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(4);t.a=function(e,t){var n;void 0===t&&(t=!0);var i=new Promise((function(r){n=setTimeout(r,Math.min(2147483647,e),t)}));return i[r.a]=function(){clearTimeout(n)},i}},,function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=a(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))i.call(n,c)&&(l[c]=n[c]);if(r){u=r(n);for(var f=0;f<u.length;f++)o.call(n,u[f])&&(l[u[f]]=n[u[f]])}}return l}},function(e,t){e.exports=Backbone},,function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,r,e):t(i)}}}}var i=r();i.withExtraArgument=r,t.a=i},,,,,function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return T}));var r=n(4),i=n(10),o=n(15),a=n(3),u=n(1),l=n(9);function s(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}var c=s,f=(n(37),[]),p=0;function d(e){try{y(),e()}finally{m()}}function h(e){f.push(e),p||(y(),g())}function v(e){try{return y(),e()}finally{g()}}function y(){p++}function m(){p--}function g(){var e;for(m();!p&&void 0!==(e=f.shift());)d(e)}var b=function(e){return function(t){return e.some((function(e){return O(e)(t)}))}},w=function(e){return function(t){return e(t)}},_=function(e){return function(t){return t.type===String(e)}},E=function(e){return function(t){return t.type===e}},x=function(){return u.G};function O(e){var t="*"===e?x:Object(a.k)(e)?_:Object(a.a)(e)?b:Object(a.l)(e)?_:Object(a.d)(e)?w:Object(a.m)(e)?E:null;if(null===t)throw new Error("invalid pattern: "+e);return t(e)}var k={type:r.b},S=function(e){return e&&e.type===r.b};function C(e){void 0===e&&(e=Object(u.A)());var t=!1,n=[];return{take:function(r){t&&e.isEmpty()?r(k):e.isEmpty()?(n.push(r),r.cancel=function(){Object(u.N)(n,r)}):r(e.take())},put:function(r){if(!t){if(0===n.length)return e.put(r);n.shift()(r)}},flush:function(n){t&&e.isEmpty()?n(k):n(e.flush())},close:function(){if(!t){t=!0;var e=n;n=[];for(var r=0,i=e.length;r<i;r++){(0,e[r])(k)}}}}}function T(e,t){void 0===t&&(t=Object(u.J)());var n,r=!1,i=C(t),o=function(){r||(r=!0,Object(a.d)(n)&&n(),i.close())};return n=e((function(e){S(e)?o():i.put(e)})),n=Object(u.K)(n),r&&n(),{take:i.take,flush:i.flush,close:o}}function j(){var e,t,n,i,o,a,l=(t=!1,i=n=[],o=function(){i===n&&(i=n.slice())},a=function(){t=!0;var e=n=i;i=[],e.forEach((function(e){e(k)}))},(e={})[r.e]=!0,e.put=function(e){if(!t)if(S(e))a();else for(var o=n=i,u=0,l=o.length;u<l;u++){var s=o[u];s[r.d](e)&&(s.cancel(),s(e))}},e.take=function(e,n){void 0===n&&(n=x),t?e(k):(e[r.d]=n,o(),i.push(e),e.cancel=Object(u.K)((function(){o(),Object(u.N)(i,e)})))},e.close=a,e),s=l.put;return l.put=function(e){e[r.f]?s(e):h((function(){s(e)}))},l}function P(e,t){var n=e[r.a];Object(a.d)(n)&&(t.cancel=n),e.then(t,(function(e){t(e,!0)}))}var A,I=0,D=function(){return++I};function M(e){e.isRunning()&&e.cancel()}var F=((A={})[u.r]=function(e,t,n){var i=t.channel,o=void 0===i?e.channel:i,u=t.pattern,l=t.maybe,s=function(e){e instanceof Error?n(e,!0):!S(e)||l?n(e):n(r.k)};try{o.take(s,Object(a.g)(u)?O(u):null)}catch(e){return void n(e,!0)}n.cancel=s.cancel},A[u.n]=function(e,t,n){var r=t.channel,i=t.action,o=t.resolve;h((function(){var t;try{t=(r?r.put:e.dispatch)(i)}catch(e){return void n(e,!0)}o&&Object(a.j)(t)?P(t,n):n(t)}))},A[u.a]=function(e,t,n,r){var i=r.digestEffect,o=I,l=Object.keys(t);if(0!==l.length){var s=Object(u.H)(t,n);l.forEach((function(e){i(t[e],o,s[e],e)}))}else n(Object(a.a)(t)?[]:{})},A[u.p]=function(e,t,n,r){var i=r.digestEffect,o=I,l=Object.keys(t),s=Object(a.a)(t)?Object(u.I)(l.length):{},c={},f=!1;l.forEach((function(e){var t=function(t,r){f||(r||Object(u.O)(t)?(n.cancel(),n(t,r)):(n.cancel(),f=!0,s[e]=t,n(s)))};t.cancel=u.P,c[e]=t})),n.cancel=function(){f||(f=!0,l.forEach((function(e){return c[e].cancel()})))},l.forEach((function(e){f||i(t[e],o,c[e],e)}))},A[u.c]=function(e,t,n,r){var i=t.context,o=t.fn,l=t.args,s=r.task;try{var c=o.apply(i,l);if(Object(a.j)(c))return void P(c,n);if(Object(a.e)(c))return void q(e,c,s.context,I,Object(u.F)(o),!1,n);n(c)}catch(e){n(e,!0)}},A[u.v]=function(e,t,n){var r=t.context,i=t.fn,o=t.args;try{var u=function(e,t){Object(a.n)(e)?n(t):n(e,!0)};i.apply(r,o.concat(u)),u.cancel&&(n.cancel=u.cancel)}catch(e){n(e,!0)}},A[u.f]=function(e,t,n,r){var i=t.context,o=t.fn,l=t.args,s=t.detached,c=r.task,f=function(e){var t=e.context,n=e.fn,r=e.args;try{var i=n.apply(t,r);if(Object(a.e)(i))return i;var o=!1;return Object(u.M)((function(e){return o?{value:e,done:!0}:(o=!0,{value:i,done:!Object(a.j)(i)})}))}catch(e){return Object(u.M)((function(){throw e}))}}({context:i,fn:o,args:l}),p=function(e,t){return e.isSagaIterator?{name:e.meta.name}:Object(u.F)(t)}(f,o);v((function(){var t=q(e,f,c.context,I,p,s,void 0);s?n(t):t.isRunning()?(c.queue.addTask(t),n(t)):t.isAborted()?c.queue.abort(t.error()):n(t)}))},A[u.h]=function(e,t,n,r){var i=r.task,o=function(e,t){if(e.isRunning()){var n={task:i,cb:t};t.cancel=function(){e.isRunning()&&Object(u.N)(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())};if(Object(a.a)(t)){if(0===t.length)return void n([]);var l=Object(u.H)(t,n);t.forEach((function(e,t){o(e,l[t])}))}else o(t,n)},A[u.x]=function(e,t,n,i){var o=i.task;t===r.h?M(o):Object(a.a)(t)?t.forEach(M):M(t),n()},A[u.q]=function(e,t,n){var r=t.selector,i=t.args;try{n(r.apply(void 0,[e.getState()].concat(i)))}catch(e){n(e,!0)}},A[u.z]=function(e,t,n){var r=t.pattern,i=C(t.buffer),o=O(r),a=function t(n){S(n)||e.channel.take(t,o),i.put(n)},u=i.close;i.close=function(){a.cancel(),u()},e.channel.take(a,o),n(i)},A[u.B]=function(e,t,n,r){n(r.task.isCancelled())},A[u.C]=function(e,t,n){t.flush(n)},A[u.g]=function(e,t,n,r){n(r.task.context[t])},A[u.D]=function(e,t,n,r){var i=r.task;Object(u.L)(i.context,t),n()},A);function R(e,t){return e+"?"+t}function N(e){var t=e.name,n=e.location;return n?t+"  "+R(n.fileName,n.lineNumber):t}var z=null,L=[],U=function(){z=null,L.length=0},B=function(){var e,t,n,r,i=L[0],o=L.slice(1),a=i.crashedEffect?(e=i.crashedEffect,(t=Object(u.R)(e))?t.code+"  "+R(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+N(i.meta)+(a?" \n when executing effect "+a:"")].concat(o.map((function(e){return"    created by "+N(e.meta)})),[(n=L,r=Object(u.Q)((function(e){return e.cancelledTasks}),n),r.length?["Tasks cancelled due to error:"].concat(r).join("\n"):"")]).join("\n")};function V(e,t,n,i,o,a,l){var s;void 0===l&&(l=u.P);var f,p,d=0,h=null,v=[],y=Object.create(n),m=function(e,t,n){var r,i=[],o=!1;function a(e){t(),s(),n(e,!0)}function l(t){i.push(t),t.cont=function(l,s){o||(Object(u.N)(i,t),t.cont=u.P,s?a(l):(t===e&&(r=l),i.length||(o=!0,n(r))))}}function s(){o||(o=!0,i.forEach((function(e){e.cont=u.P,e.cancel()})),i=[])}return l(e),{addTask:l,cancelAll:s,abort:a,getTasks:function(){return i}}}(t,(function(){v.push.apply(v,m.getTasks().map((function(e){return e.meta.name})))}),g);function g(t,n){if(n){if(d=2,(a={meta:o,cancelledTasks:v}).crashedEffect=z,L.push(a),b.isRoot){var i=B();U(),e.onError(t,{sagaStack:i})}p=t,h&&h.reject(t)}else t===r.j?d=1:1!==d&&(d=3),f=t,h&&h.resolve(t);var a;b.cont(t,n),b.joiners.forEach((function(e){e.cb(t,n)})),b.joiners=null}var b=((s={})[r.i]=!0,s.id=i,s.meta=o,s.isRoot=a,s.context=y,s.joiners=[],s.queue=m,s.cancel=function(){0===d&&(d=1,m.cancelAll(),g(r.j,!1))},s.cont=l,s.end=g,s.setContext=function(e){Object(u.L)(y,e)},s.toPromise=function(){return h||(h=c(),2===d?h.reject(p):0!==d&&h.resolve(f)),h.promise},s.isRunning=function(){return 0===d},s.isCancelled=function(){return 1===d||0===d&&1===t.status},s.isAborted=function(){return 2===d},s.result=function(){return f},s.error=function(){return p},s);return b}function q(e,t,n,i,o,l,s){var c=e.finalizeRunEffect((function(t,n,i){if(Object(a.j)(t))P(t,i);else if(Object(a.e)(t))q(e,t,p.context,n,o,!1,i);else if(t&&t[r.c]){(0,F[t.type])(e,t.payload,i,d)}else i(t)}));h.cancel=u.P;var f={meta:o,cancel:function(){0===f.status&&(f.status=1,h(r.j))},status:0},p=V(e,f,n,i,o,l,s),d={task:p,digestEffect:v};return s&&(s.cancel=p.cancel),h(),p;function h(e,n){try{var o;n?(o=t.throw(e),U()):Object(u.S)(e)?(f.status=1,h.cancel(),o=Object(a.d)(t.return)?t.return(r.j):{done:!0,value:r.j}):o=Object(u.T)(e)?Object(a.d)(t.return)?t.return():{done:!0}:t.next(e),o.done?(1!==f.status&&(f.status=3),f.cont(o.value)):v(o.value,i,h)}catch(e){if(1===f.status)throw e;f.status=2,f.cont(e,!0)}}function v(t,n,r,i){void 0===i&&(i="");var o,a=D();function l(n,i){o||(o=!0,r.cancel=u.P,e.sagaMonitor&&(i?e.sagaMonitor.effectRejected(a,n):e.sagaMonitor.effectResolved(a,n)),i&&function(e){z=e}(t),r(n,i))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:a,parentEffectId:n,label:i,effect:t}),l.cancel=u.P,r.cancel=function(){o||(o=!0,l.cancel(),l.cancel=u.P,e.sagaMonitor&&e.sagaMonitor.effectCancelled(a))},c(t,a,l)}}function W(e,t){var n=e.channel,r=void 0===n?j():n,i=e.dispatch,o=e.getState,a=e.context,s=void 0===a?{}:a,c=e.sagaMonitor,f=e.effectMiddlewares,p=e.onError,d=void 0===p?u.b:p;for(var h=arguments.length,y=new Array(h>2?h-2:0),m=2;m<h;m++)y[m-2]=arguments[m];var g=t.apply(void 0,y);var b,w=D();if(c&&(c.rootSagaStarted=c.rootSagaStarted||u.P,c.effectTriggered=c.effectTriggered||u.P,c.effectResolved=c.effectResolved||u.P,c.effectRejected=c.effectRejected||u.P,c.effectCancelled=c.effectCancelled||u.P,c.actionDispatched=c.actionDispatched||u.P,c.rootSagaStarted({effectId:w,saga:t,args:y})),f){var _=l.d.apply(void 0,f);b=function(e){return function(t,n,r){return _((function(t){return e(t,n,r)}))(t)}}}else b=u.e;var E={channel:r,dispatch:Object(u.d)(i),getState:o,sagaMonitor:c,onError:d,finalizeRunEffect:b};return v((function(){var e=q(E,g,s,w,Object(u.F)(t),!0,void 0);return c&&c.effectResolved(w,e),e}))}var K=function(e){var t,n=void 0===e?{}:e,r=n.context,a=void 0===r?{}:r,l=n.channel,s=void 0===l?j():l,c=n.sagaMonitor,f=Object(o.a)(n,["context","channel","sagaMonitor"]);function p(e){var n=e.getState,r=e.dispatch;return t=W.bind(null,Object(i.a)({},f,{context:a,channel:s,dispatch:r,getState:n,sagaMonitor:c})),function(e){return function(t){c&&c.actionDispatched&&c.actionDispatched(t);var n=e(t);return s.put(t),n}}}return p.run=function(){return t.apply(void 0,arguments)},p.setContext=function(e){Object(u.L)(a,e)},p};t.a=K},function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return d}));var r=n(19),i=n(14);const o=e=>({type:r.b,annotation:e}),a=e=>({type:r.d,results:e}),u=e=>({type:r.e,entity:e}),l=e=>({type:r.f,filter:e}),s=e=>({type:r.g,entity:e}),c=e=>({type:r.h,entity:e}),f=(e,t)=>({type:r.j,entityId:e,occurrences:t}),p=e=>({type:r.c,payload:e}),d=Object(i.a)(r.i)},function(e,t,n){"use strict";var r=n(25),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function l(e){return r.isMemo(e)?a:u[e.$$typeof]||i}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=a;var s=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var i=d(n);i&&i!==h&&e(t,i,r)}var a=c(n);f&&(a=a.concat(f(n)));for(var u=l(t),v=l(n),y=0;y<a.length;++y){var m=a[y];if(!(o[m]||r&&r[m]||v&&v[m]||u&&u[m])){var g=p(n,m);try{s(t,m,g)}catch(e){}}}}return t}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(39),i="function"==typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,a=i?Symbol.for("react.portal"):60106,u=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,p=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,h=i?Symbol.for("react.memo"):60115,v=i?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||g}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=w.prototype;var x=E.prototype=new _;x.constructor=E,r(x,w.prototype),x.isPureReactComponent=!0;var O={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,i={},a=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:u,props:i,_owner:O.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var j=/\/+/g,P=[];function A(e,t,n,r){if(P.length){var i=P.pop();return i.result=e,i.keyPrefix=t,i.func=n,i.context=r,i.count=0,i}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,i){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case a:l=!0}}if(l)return r(i,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var s=0;s<t.length;s++){var c=n+M(u=t[s],s);l+=e(u,c,r,i)}else if(null===t||"object"!=typeof t?c=null:c="function"==typeof(c=y&&t[y]||t["@@iterator"])?c:null,"function"==typeof c)for(t=c.call(t),s=0;!(u=t.next()).done;)l+=e(u=u.value,c=n+M(u,s++),r,i);else if("object"===u)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function R(e,t,n){var r=e.result,i=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?N(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,i+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(j,"$&/")+"/")+n)),r.push(e))}function N(e,t,n,r,i){var o="";null!=n&&(o=(""+n).replace(j,"$&/")+"/"),D(e,R,t=A(t,o,r,i)),I(t)}var z={current:null};function L(){var e=z.current;if(null===e)throw Error(m(321));return e}var U={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:O,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return N(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,F,t=A(null,null,t,n)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return N(e,t,null,(function(e){return e})),t},only:function(e){if(!T(e))throw Error(m(143));return e}},t.Component=w,t.Fragment=u,t.Profiler=s,t.PureComponent=E,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var i=r({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=O.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)k.call(t,c)&&!S.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==s?s[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){s=Array(c);for(var f=0;f<c;f++)s[f]=arguments[f+2];i.children=s}return{$$typeof:o,type:e.type,key:a,ref:u,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:v,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.14.0"},function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return a}));const r="wordlift.selectionChanged",i="wordlift.annotationChanged",o="core/editor",a="wordlift/editor"},,,,function(e,t,n){"use strict";var r=n(58);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,l=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function E(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case i:switch(e=e.type){case f:case p:case a:case l:case u:case h:return e;default:switch(e=e&&e.$$typeof){case c:case d:case m:case y:case s:return e;default:return t}}case o:return t}}}function x(e){return E(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=s,t.Element=i,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=l,t.StrictMode=u,t.Suspense=h,t.isAsyncMode=function(e){return x(e)||E(e)===f},t.isConcurrentMode=x,t.isContextConsumer=function(e){return E(e)===c},t.isContextProvider=function(e){return E(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===i},t.isForwardRef=function(e){return E(e)===d},t.isFragment=function(e){return E(e)===a},t.isLazy=function(e){return E(e)===m},t.isMemo=function(e){return E(e)===y},t.isPortal=function(e){return E(e)===o},t.isProfiler=function(e){return E(e)===l},t.isStrictMode=function(e){return E(e)===u},t.isSuspense=function(e){return E(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===l||e===u||e===h||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===b||e.$$typeof===w||e.$$typeof===_||e.$$typeof===g)},t.typeOf=E},,function(e,t,n){"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(0),i=n(39),o=n(62);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!r)throw Error(a(227));function u(e,t,n,r,i,o,a,u,l){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}var l=!1,s=null,c=!1,f=null,p={onError:function(e){l=!0,s=e}};function d(e,t,n,r,i,o,a,c,f){l=!1,s=null,u.apply(p,arguments)}var h=null,v=null,y=null;function m(e,t,n){var r=e.type||"unknown-event";e.currentTarget=y(n),function(e,t,n,r,i,o,u,p,h){if(d.apply(this,arguments),l){if(!l)throw Error(a(198));var v=s;l=!1,s=null,c||(c=!0,f=v)}}(r,t,void 0,e),e.currentTarget=null}var g=null,b={};function w(){if(g)for(var e in b){var t=b[e],n=g.indexOf(e);if(!(-1<n))throw Error(a(96,e));if(!E[n]){if(!t.extractEvents)throw Error(a(97,e));for(var r in E[n]=t,n=t.eventTypes){var i=void 0,o=n[r],u=t,l=r;if(x.hasOwnProperty(l))throw Error(a(99,l));x[l]=o;var s=o.phasedRegistrationNames;if(s){for(i in s)s.hasOwnProperty(i)&&_(s[i],u,l);i=!0}else o.registrationName?(_(o.registrationName,u,l),i=!0):i=!1;if(!i)throw Error(a(98,r,e))}}}}function _(e,t,n){if(O[e])throw Error(a(100,e));O[e]=t,k[e]=t.eventTypes[n].dependencies}var E=[],x={},O={},k={};function S(e){var t,n=!1;for(t in e)if(e.hasOwnProperty(t)){var r=e[t];if(!b.hasOwnProperty(t)||b[t]!==r){if(b[t])throw Error(a(102,t));b[t]=r,n=!0}}n&&w()}var C=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),T=null,j=null,P=null;function A(e){if(e=v(e)){if("function"!=typeof T)throw Error(a(280));var t=e.stateNode;t&&(t=h(t),T(e.stateNode,e.type,t))}}function I(e){j?P?P.push(e):P=[e]:j=e}function D(){if(j){var e=j,t=P;if(P=j=null,A(e),t)for(e=0;e<t.length;e++)A(t[e])}}function M(e,t){return e(t)}function F(e,t,n,r,i){return e(t,n,r,i)}function R(){}var N=M,z=!1,L=!1;function U(){null===j&&null===P||(R(),D())}function B(e,t,n){if(L)return e(t,n);L=!0;try{return N(e,t,n)}finally{L=!1,U()}}var V=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q=Object.prototype.hasOwnProperty,W={},K={};function $(e,t,n,r,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){H[e]=new $(e,0,!1,e,null,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];H[t]=new $(t,1,!1,e[1],null,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){H[e]=new $(e,2,!1,e.toLowerCase(),null,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){H[e]=new $(e,2,!1,e,null,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){H[e]=new $(e,3,!1,e.toLowerCase(),null,!1)})),["checked","multiple","muted","selected"].forEach((function(e){H[e]=new $(e,3,!0,e,null,!1)})),["capture","download"].forEach((function(e){H[e]=new $(e,4,!1,e,null,!1)})),["cols","rows","size","span"].forEach((function(e){H[e]=new $(e,6,!1,e,null,!1)})),["rowSpan","start"].forEach((function(e){H[e]=new $(e,5,!1,e.toLowerCase(),null,!1)}));var Q=/[\-:]([a-z])/g;function Y(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(Q,Y);H[t]=new $(t,1,!1,e,null,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(Q,Y);H[t]=new $(t,1,!1,e,"http://www.w3.org/1999/xlink",!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(Q,Y);H[t]=new $(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1)})),["tabIndex","crossOrigin"].forEach((function(e){H[e]=new $(e,1,!1,e.toLowerCase(),null,!1)})),H.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0),["src","href","action","formAction"].forEach((function(e){H[e]=new $(e,1,!1,e.toLowerCase(),null,!0)}));var G=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function X(e,t,n,r){var i=H.hasOwnProperty(t)?H[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!q.call(K,e)||!q.call(W,e)&&(V.test(e)?K[e]=!0:(W[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}G.hasOwnProperty("ReactCurrentDispatcher")||(G.ReactCurrentDispatcher={current:null}),G.hasOwnProperty("ReactCurrentBatchConfig")||(G.ReactCurrentBatchConfig={suspense:null});var J=/^(.*)[\\\/]/,Z="function"==typeof Symbol&&Symbol.for,ee=Z?Symbol.for("react.element"):60103,te=Z?Symbol.for("react.portal"):60106,ne=Z?Symbol.for("react.fragment"):60107,re=Z?Symbol.for("react.strict_mode"):60108,ie=Z?Symbol.for("react.profiler"):60114,oe=Z?Symbol.for("react.provider"):60109,ae=Z?Symbol.for("react.context"):60110,ue=Z?Symbol.for("react.concurrent_mode"):60111,le=Z?Symbol.for("react.forward_ref"):60112,se=Z?Symbol.for("react.suspense"):60113,ce=Z?Symbol.for("react.suspense_list"):60120,fe=Z?Symbol.for("react.memo"):60115,pe=Z?Symbol.for("react.lazy"):60116,de=Z?Symbol.for("react.block"):60121,he="function"==typeof Symbol&&Symbol.iterator;function ve(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=he&&e[he]||e["@@iterator"])?e:null}function ye(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ne:return"Fragment";case te:return"Portal";case ie:return"Profiler";case re:return"StrictMode";case se:return"Suspense";case ce:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case ae:return"Context.Consumer";case oe:return"Context.Provider";case le:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case fe:return ye(e.type);case de:return ye(e.render);case pe:if(e=1===e._status?e._result:null)return ye(e)}return null}function me(e){var t="";do{e:switch(e.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=e._debugOwner,i=e._debugSource,o=ye(e.type);n=null,r&&(n=ye(r.type)),r=o,o="",i?o=" (at "+i.fileName.replace(J,"")+":"+i.lineNumber+")":n&&(o=" (created by "+n+")"),n="\n    in "+(r||"Unknown")+o}t+=n,e=e.return}while(e);return t}function ge(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function we(e){e._valueTracker||(e._valueTracker=function(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function _e(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ee(e,t){var n=t.checked;return i({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function xe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ge(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Oe(e,t){null!=(t=t.checked)&&X(e,"checked",t,!1)}function ke(e,t){Oe(e,t);var n=ge(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ce(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ce(e,t.type,ge(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Se(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ce(e,t,n){"number"===t&&e.ownerDocument.activeElement===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Te(e,t){return e=i({children:void 0},t),(t=function(e){var t="";return r.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function je(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Pe(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return i({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ge(n)}}function Ie(e,t){var n=ge(t.value),r=ge(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function De(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Me="http://www.w3.org/1999/xhtml",Fe="http://www.w3.org/2000/svg";function Re(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Re(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ze,Le=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction((function(){return e(t,n)}))}:e}((function(e,t){if(e.namespaceURI!==Fe||"innerHTML"in e)e.innerHTML=t;else{for((ze=ze||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ze.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}}));function Ue(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}function Be(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ve={animationend:Be("Animation","AnimationEnd"),animationiteration:Be("Animation","AnimationIteration"),animationstart:Be("Animation","AnimationStart"),transitionend:Be("Transition","TransitionEnd")},qe={},We={};function Ke(e){if(qe[e])return qe[e];if(!Ve[e])return e;var t,n=Ve[e];for(t in n)if(n.hasOwnProperty(t)&&t in We)return qe[e]=n[t];return e}C&&(We=document.createElement("div").style,"AnimationEvent"in window||(delete Ve.animationend.animation,delete Ve.animationiteration.animation,delete Ve.animationstart.animation),"TransitionEvent"in window||delete Ve.transitionend.transition);var $e=Ke("animationend"),He=Ke("animationiteration"),Qe=Ke("animationstart"),Ye=Ke("transitionend"),Ge="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xe=new("function"==typeof WeakMap?WeakMap:Map);function Je(e){var t=Xe.get(e);return void 0===t&&(t=new Map,Xe.set(e,t)),t}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).effectTag)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function et(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function tt(e){if(Ze(e)!==e)throw Error(a(188))}function nt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tt(i),e;if(o===r)return tt(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var u=!1,l=i.child;l;){if(l===n){u=!0,n=i,r=o;break}if(l===r){u=!0,r=i,n=o;break}l=l.sibling}if(!u){for(l=o.child;l;){if(l===n){u=!0,n=o,r=i;break}if(l===r){u=!0,r=o,n=i;break}l=l.sibling}if(!u)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function rt(e,t){if(null==t)throw Error(a(30));return null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}function it(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}var ot=null;function at(e){if(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t))for(var r=0;r<t.length&&!e.isPropagationStopped();r++)m(e,t[r],n[r]);else t&&m(e,t,n);e._dispatchListeners=null,e._dispatchInstances=null,e.isPersistent()||e.constructor.release(e)}}function ut(e){if(null!==e&&(ot=rt(ot,e)),e=ot,ot=null,e){if(it(e,at),ot)throw Error(a(95));if(c)throw e=f,c=!1,f=null,e}}function lt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}function st(e){if(!C)return!1;var t=(e="on"+e)in document;return t||((t=document.createElement("div")).setAttribute(e,"return;"),t="function"==typeof t[e]),t}var ct=[];function ft(e){e.topLevelType=null,e.nativeEvent=null,e.targetInst=null,e.ancestors.length=0,10>ct.length&&ct.push(e)}function pt(e,t,n,r){if(ct.length){var i=ct.pop();return i.topLevelType=e,i.eventSystemFlags=r,i.nativeEvent=t,i.targetInst=n,i}return{topLevelType:e,eventSystemFlags:r,nativeEvent:t,targetInst:n,ancestors:[]}}function dt(e){var t=e.targetInst,n=t;do{if(!n){e.ancestors.push(n);break}var r=n;if(3===r.tag)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=3!==r.tag?null:r.stateNode.containerInfo}if(!r)break;5!==(t=n.tag)&&6!==t||e.ancestors.push(n),n=Cn(r)}while(n);for(n=0;n<e.ancestors.length;n++){t=e.ancestors[n];var i=lt(e.nativeEvent);r=e.topLevelType;var o=e.nativeEvent,a=e.eventSystemFlags;0===n&&(a|=64);for(var u=null,l=0;l<E.length;l++){var s=E[l];s&&(s=s.extractEvents(r,t,o,i,a))&&(u=rt(u,s))}ut(u)}}function ht(e,t,n){if(!n.has(e)){switch(e){case"scroll":Qt(t,"scroll",!0);break;case"focus":case"blur":Qt(t,"focus",!0),Qt(t,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":st(e)&&Qt(t,e,!0);break;case"invalid":case"submit":case"reset":break;default:-1===Ge.indexOf(e)&&Ht(e,t)}n.set(e,null)}}var vt,yt,mt,gt=!1,bt=[],wt=null,_t=null,Et=null,xt=new Map,Ot=new Map,kt=[],St="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ct="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function Tt(e,t,n,r,i){return{blockedOn:e,topLevelType:t,eventSystemFlags:32|n,nativeEvent:i,container:r}}function jt(e,t){switch(e){case"focus":case"blur":wt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Et=null;break;case"pointerover":case"pointerout":xt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function Pt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=Tt(t,n,r,i,o),null!==t&&(null!==(t=Tn(t))&&yt(t)),e):(e.eventSystemFlags|=r,e)}function At(e){var t=Cn(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=et(n)))return e.blockedOn=t,void o.unstable_runWithPriority(e.priority,(function(){mt(n)}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);if(null!==t){var n=Tn(t);return null!==n&&yt(n),e.blockedOn=t,!1}return!0}function Dt(e,t,n){It(e)&&n.delete(t)}function Mt(){for(gt=!1;0<bt.length;){var e=bt[0];if(null!==e.blockedOn){null!==(e=Tn(e.blockedOn))&&vt(e);break}var t=Jt(e.topLevelType,e.eventSystemFlags,e.container,e.nativeEvent);null!==t?e.blockedOn=t:bt.shift()}null!==wt&&It(wt)&&(wt=null),null!==_t&&It(_t)&&(_t=null),null!==Et&&It(Et)&&(Et=null),xt.forEach(Dt),Ot.forEach(Dt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,gt||(gt=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mt)))}function Rt(e){function t(t){return Ft(t,e)}if(0<bt.length){Ft(bt[0],e);for(var n=1;n<bt.length;n++){var r=bt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==wt&&Ft(wt,e),null!==_t&&Ft(_t,e),null!==Et&&Ft(Et,e),xt.forEach(t),Ot.forEach(t),n=0;n<kt.length;n++)(r=kt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&null===(n=kt[0]).blockedOn;)At(n),null===n.blockedOn&&kt.shift()}var Nt={},zt=new Map,Lt=new Map,Ut=["abort","abort",$e,"animationEnd",He,"animationIteration",Qe,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ye,"transitionEnd","waiting","waiting"];function Bt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1],o="on"+(i[0].toUpperCase()+i.slice(1));o={phasedRegistrationNames:{bubbled:o,captured:o+"Capture"},dependencies:[r],eventPriority:t},Lt.set(r,t),zt.set(r,o),Nt[i]=o}}Bt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Bt(Ut,2);for(var Vt="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),qt=0;qt<Vt.length;qt++)Lt.set(Vt[qt],0);var Wt=o.unstable_UserBlockingPriority,Kt=o.unstable_runWithPriority,$t=!0;function Ht(e,t){Qt(t,e,!1)}function Qt(e,t,n){var r=Lt.get(t);switch(void 0===r?2:r){case 0:r=Yt.bind(null,t,1,e);break;case 1:r=Gt.bind(null,t,1,e);break;default:r=Xt.bind(null,t,1,e)}n?e.addEventListener(t,r,!0):e.addEventListener(t,r,!1)}function Yt(e,t,n,r){z||R();var i=Xt,o=z;z=!0;try{F(i,e,t,n,r)}finally{(z=o)||U()}}function Gt(e,t,n,r){Kt(Wt,Xt.bind(null,e,t,n,r))}function Xt(e,t,n,r){if($t)if(0<bt.length&&-1<St.indexOf(e))e=Tt(null,e,t,n,r),bt.push(e);else{var i=Jt(e,t,n,r);if(null===i)jt(e,r);else if(-1<St.indexOf(e))e=Tt(i,e,t,n,r),bt.push(e);else if(!function(e,t,n,r,i){switch(t){case"focus":return wt=Pt(wt,e,t,n,r,i),!0;case"dragenter":return _t=Pt(_t,e,t,n,r,i),!0;case"mouseover":return Et=Pt(Et,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return xt.set(o,Pt(xt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ot.set(o,Pt(Ot.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r)){jt(e,r),e=pt(e,r,null,t);try{B(dt,e)}finally{ft(e)}}}}function Jt(e,t,n,r){if(null!==(n=Cn(n=lt(r)))){var i=Ze(n);if(null===i)n=null;else{var o=i.tag;if(13===o){if(null!==(n=et(i)))return n;n=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}e=pt(e,r,n,t);try{B(dt,e)}finally{ft(e)}return null}var Zt={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},en=["Webkit","ms","Moz","O"];function tn(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||Zt.hasOwnProperty(e)&&Zt[e]?(""+t).trim():t+"px"}function nn(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=tn(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(Zt).forEach((function(e){en.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zt[t]=Zt[e]}))}));var rn=i({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function on(e,t){if(t){if(rn[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e,""));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(a(62,""))}}function an(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var un=Me;function ln(e,t){var n=Je(e=9===e.nodeType||11===e.nodeType?e:e.ownerDocument);t=k[t];for(var r=0;r<t.length;r++)ht(t[r],e,n)}function sn(){}function cn(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function fn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pn(e,t){var n,r=fn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fn(r)}}function dn(){for(var e=window,t=cn();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(!n)break;t=cn((e=t.contentWindow).document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var vn=null,yn=null;function mn(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function gn(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var bn="function"==typeof setTimeout?setTimeout:void 0,wn="function"==typeof clearTimeout?clearTimeout:void 0;function _n(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function En(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),On="__reactInternalInstance$"+xn,kn="__reactEventHandlers$"+xn,Sn="__reactContainere$"+xn;function Cn(e){var t=e[On];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Sn]||n[On]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=En(e);null!==e;){if(n=e[On])return n;e=En(e)}return t}n=(e=n).parentNode}return null}function Tn(e){return!(e=e[On]||e[Sn])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function jn(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function Pn(e){return e[kn]||null}function An(e){do{e=e.return}while(e&&5!==e.tag);return e||null}function In(e,t){var n=e.stateNode;if(!n)return null;var r=h(n);if(!r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(a(231,t,typeof n));return n}function Dn(e,t,n){(t=In(e,n.dispatchConfig.phasedRegistrationNames[t]))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Mn(e){if(e&&e.dispatchConfig.phasedRegistrationNames){for(var t=e._targetInst,n=[];t;)n.push(t),t=An(t);for(t=n.length;0<t--;)Dn(n[t],"captured",e);for(t=0;t<n.length;t++)Dn(n[t],"bubbled",e)}}function Fn(e,t,n){e&&n&&n.dispatchConfig.registrationName&&(t=In(e,n.dispatchConfig.registrationName))&&(n._dispatchListeners=rt(n._dispatchListeners,t),n._dispatchInstances=rt(n._dispatchInstances,e))}function Rn(e){e&&e.dispatchConfig.registrationName&&Fn(e._targetInst,null,e)}function Nn(e){it(e,Mn)}var zn=null,Ln=null,Un=null;function Bn(){if(Un)return Un;var e,t,n=Ln,r=n.length,i="value"in zn?zn.value:zn.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Un=i.slice(e,1<t?1-t:void 0)}function Vn(){return!0}function qn(){return!1}function Wn(e,t,n,r){for(var i in this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n,e=this.constructor.Interface)e.hasOwnProperty(i)&&((t=e[i])?this[i]=t(n):"target"===i?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(null!=n.defaultPrevented?n.defaultPrevented:!1===n.returnValue)?Vn:qn,this.isPropagationStopped=qn,this}function Kn(e,t,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,e,t,n,r),i}return new this(e,t,n,r)}function $n(e){if(!(e instanceof this))throw Error(a(279));e.destructor(),10>this.eventPool.length&&this.eventPool.push(e)}function Hn(e){e.eventPool=[],e.getPooled=Kn,e.release=$n}i(Wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){this.isPersistent=Vn},isPersistent:qn,destructor:function(){var e,t=this.constructor.Interface;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=qn,this._dispatchInstances=this._dispatchListeners=null}}),Wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Wn.extend=function(e){function t(){}function n(){return r.apply(this,arguments)}var r=this;t.prototype=r.prototype;var o=new t;return i(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=i({},r.Interface,e),n.extend=r.extend,Hn(n),n},Hn(Wn);var Qn=Wn.extend({data:null}),Yn=Wn.extend({data:null}),Gn=[9,13,27,32],Xn=C&&"CompositionEvent"in window,Jn=null;C&&"documentMode"in document&&(Jn=document.documentMode);var Zn=C&&"TextEvent"in window&&!Jn,er=C&&(!Xn||Jn&&8<Jn&&11>=Jn),tr=String.fromCharCode(32),nr={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},rr=!1;function ir(e,t){switch(e){case"keyup":return-1!==Gn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function or(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var ar=!1;var ur={eventTypes:nr,extractEvents:function(e,t,n,r){var i;if(Xn)e:{switch(e){case"compositionstart":var o=nr.compositionStart;break e;case"compositionend":o=nr.compositionEnd;break e;case"compositionupdate":o=nr.compositionUpdate;break e}o=void 0}else ar?ir(e,n)&&(o=nr.compositionEnd):"keydown"===e&&229===n.keyCode&&(o=nr.compositionStart);return o?(er&&"ko"!==n.locale&&(ar||o!==nr.compositionStart?o===nr.compositionEnd&&ar&&(i=Bn()):(Ln="value"in(zn=r)?zn.value:zn.textContent,ar=!0)),o=Qn.getPooled(o,t,n,r),i?o.data=i:null!==(i=or(n))&&(o.data=i),Nn(o),i=o):i=null,(e=Zn?function(e,t){switch(e){case"compositionend":return or(t);case"keypress":return 32!==t.which?null:(rr=!0,tr);case"textInput":return(e=t.data)===tr&&rr?null:e;default:return null}}(e,n):function(e,t){if(ar)return"compositionend"===e||!Xn&&ir(e,t)?(e=Bn(),Un=Ln=zn=null,ar=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))?((t=Yn.getPooled(nr.beforeInput,t,n,r)).data=e,Nn(t)):t=null,null===i?t:null===t?i:[i,t]}},lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!lr[e.type]:"textarea"===t}var cr={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function fr(e,t,n){return(e=Wn.getPooled(cr.change,e,t,n)).type="change",I(n),Nn(e),e}var pr=null,dr=null;function hr(e){ut(e)}function vr(e){if(_e(jn(e)))return e}function yr(e,t){if("change"===e)return t}var mr=!1;function gr(){pr&&(pr.detachEvent("onpropertychange",br),dr=pr=null)}function br(e){if("value"===e.propertyName&&vr(dr))if(e=fr(dr,e,lt(e)),z)ut(e);else{z=!0;try{M(hr,e)}finally{z=!1,U()}}}function wr(e,t,n){"focus"===e?(gr(),dr=n,(pr=t).attachEvent("onpropertychange",br)):"blur"===e&&gr()}function _r(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return vr(dr)}function Er(e,t){if("click"===e)return vr(t)}function xr(e,t){if("input"===e||"change"===e)return vr(t)}C&&(mr=st("input")&&(!document.documentMode||9<document.documentMode));var Or={eventTypes:cr,_isInputEventSupported:mr,extractEvents:function(e,t,n,r){var i=t?jn(t):window,o=i.nodeName&&i.nodeName.toLowerCase();if("select"===o||"input"===o&&"file"===i.type)var a=yr;else if(sr(i))if(mr)a=xr;else{a=_r;var u=wr}else(o=i.nodeName)&&"input"===o.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(a=Er);if(a&&(a=a(e,t)))return fr(a,n,r);u&&u(e,i,t),"blur"===e&&(e=i._wrapperState)&&e.controlled&&"number"===i.type&&Ce(i,"number",i.value)}},kr=Wn.extend({view:null,detail:null}),Sr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sr[e])&&!!t[e]}function Tr(){return Cr}var jr=0,Pr=0,Ar=!1,Ir=!1,Dr=kr.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tr,button:null,buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},movementX:function(e){if("movementX"in e)return e.movementX;var t=jr;return jr=e.screenX,Ar?"mousemove"===e.type?e.screenX-t:0:(Ar=!0,0)},movementY:function(e){if("movementY"in e)return e.movementY;var t=Pr;return Pr=e.screenY,Ir?"mousemove"===e.type?e.screenY-t:0:(Ir=!0,0)}}),Mr=Dr.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Fr={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},Rr={eventTypes:Fr,extractEvents:function(e,t,n,r,i){var o="mouseover"===e||"pointerover"===e,a="mouseout"===e||"pointerout"===e;if(o&&0==(32&i)&&(n.relatedTarget||n.fromElement)||!a&&!o)return null;(o=r.window===r?r:(o=r.ownerDocument)?o.defaultView||o.parentWindow:window,a)?(a=t,null!==(t=(t=n.relatedTarget||n.toElement)?Cn(t):null)&&(t!==Ze(t)||5!==t.tag&&6!==t.tag)&&(t=null)):a=null;if(a===t)return null;if("mouseout"===e||"mouseover"===e)var u=Dr,l=Fr.mouseLeave,s=Fr.mouseEnter,c="mouse";else"pointerout"!==e&&"pointerover"!==e||(u=Mr,l=Fr.pointerLeave,s=Fr.pointerEnter,c="pointer");if(e=null==a?o:jn(a),o=null==t?o:jn(t),(l=u.getPooled(l,a,n,r)).type=c+"leave",l.target=e,l.relatedTarget=o,(n=u.getPooled(s,t,n,r)).type=c+"enter",n.target=o,n.relatedTarget=e,c=t,(r=a)&&c)e:{for(s=c,a=0,e=u=r;e;e=An(e))a++;for(e=0,t=s;t;t=An(t))e++;for(;0<a-e;)u=An(u),a--;for(;0<e-a;)s=An(s),e--;for(;a--;){if(u===s||u===s.alternate)break e;u=An(u),s=An(s)}u=null}else u=null;for(s=u,u=[];r&&r!==s&&(null===(a=r.alternate)||a!==s);)u.push(r),r=An(r);for(r=[];c&&c!==s&&(null===(a=c.alternate)||a!==s);)r.push(c),c=An(c);for(c=0;c<u.length;c++)Fn(u[c],"bubbled",l);for(c=r.length;0<c--;)Fn(r[c],"captured",n);return 0==(64&i)?[l]:[l,n]}};var Nr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},zr=Object.prototype.hasOwnProperty;function Lr(e,t){if(Nr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!zr.call(t,n[r])||!Nr(e[n[r]],t[n[r]]))return!1;return!0}var Ur=C&&"documentMode"in document&&11>=document.documentMode,Br={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Vr=null,qr=null,Wr=null,Kr=!1;function $r(e,t){var n=t.window===t?t.document:9===t.nodeType?t:t.ownerDocument;return Kr||null==Vr||Vr!==cn(n)?null:("selectionStart"in(n=Vr)&&hn(n)?n={start:n.selectionStart,end:n.selectionEnd}:n={anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},Wr&&Lr(Wr,n)?null:(Wr=n,(e=Wn.getPooled(Br.select,qr,e,t)).type="select",e.target=Vr,Nn(e),e))}var Hr={eventTypes:Br,extractEvents:function(e,t,n,r,i,o){if(!(o=!(i=o||(r.window===r?r.document:9===r.nodeType?r:r.ownerDocument)))){e:{i=Je(i),o=k.onSelect;for(var a=0;a<o.length;a++)if(!i.has(o[a])){i=!1;break e}i=!0}o=!i}if(o)return null;switch(i=t?jn(t):window,e){case"focus":(sr(i)||"true"===i.contentEditable)&&(Vr=i,qr=t,Wr=null);break;case"blur":Wr=qr=Vr=null;break;case"mousedown":Kr=!0;break;case"contextmenu":case"mouseup":case"dragend":return Kr=!1,$r(n,r);case"selectionchange":if(Ur)break;case"keydown":case"keyup":return $r(n,r)}return null}},Qr=Wn.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Yr=Wn.extend({clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gr=kr.extend({relatedTarget:null});function Xr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}var Jr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ei=kr.extend({key:function(e){if(e.key){var t=Jr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Xr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Zr[e.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tr,charCode:function(e){return"keypress"===e.type?Xr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Xr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),ti=Dr.extend({dataTransfer:null}),ni=kr.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tr}),ri=Wn.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),ii=Dr.extend({deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null}),oi={eventTypes:Nt,extractEvents:function(e,t,n,r){var i=zt.get(e);if(!i)return null;switch(e){case"keypress":if(0===Xr(n))return null;case"keydown":case"keyup":e=ei;break;case"blur":case"focus":e=Gr;break;case"click":if(2===n.button)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":e=Dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":e=ti;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":e=ni;break;case $e:case He:case Qe:e=Qr;break;case Ye:e=ri;break;case"scroll":e=kr;break;case"wheel":e=ii;break;case"copy":case"cut":case"paste":e=Yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":e=Mr;break;default:e=Wn}return Nn(t=e.getPooled(i,t,n,r)),t}};if(g)throw Error(a(101));g=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")),w(),h=Pn,v=Tn,y=jn,S({SimpleEventPlugin:oi,EnterLeaveEventPlugin:Rr,ChangeEventPlugin:Or,SelectEventPlugin:Hr,BeforeInputEventPlugin:ur});var ai=[],ui=-1;function li(e){0>ui||(e.current=ai[ui],ai[ui]=null,ui--)}function si(e,t){ui++,ai[ui]=e.current,e.current=t}var ci={},fi={current:ci},pi={current:!1},di=ci;function hi(e,t){var n=e.type.contextTypes;if(!n)return ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function vi(e){return null!=(e=e.childContextTypes)}function yi(){li(pi),li(fi)}function mi(e,t,n){if(fi.current!==ci)throw Error(a(168));si(fi,t),si(pi,n)}function gi(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var o in r=r.getChildContext())if(!(o in e))throw Error(a(108,ye(t)||"Unknown",o));return i({},n,{},r)}function bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ci,di=fi.current,si(fi,e),si(pi,pi.current),!0}function wi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=gi(e,t,di),r.__reactInternalMemoizedMergedChildContext=e,li(pi),li(fi),si(fi,e)):li(pi),si(pi,n)}var _i=o.unstable_runWithPriority,Ei=o.unstable_scheduleCallback,xi=o.unstable_cancelCallback,Oi=o.unstable_requestPaint,ki=o.unstable_now,Si=o.unstable_getCurrentPriorityLevel,Ci=o.unstable_ImmediatePriority,Ti=o.unstable_UserBlockingPriority,ji=o.unstable_NormalPriority,Pi=o.unstable_LowPriority,Ai=o.unstable_IdlePriority,Ii={},Di=o.unstable_shouldYield,Mi=void 0!==Oi?Oi:function(){},Fi=null,Ri=null,Ni=!1,zi=ki(),Li=1e4>zi?ki:function(){return ki()-zi};function Ui(){switch(Si()){case Ci:return 99;case Ti:return 98;case ji:return 97;case Pi:return 96;case Ai:return 95;default:throw Error(a(332))}}function Bi(e){switch(e){case 99:return Ci;case 98:return Ti;case 97:return ji;case 96:return Pi;case 95:return Ai;default:throw Error(a(332))}}function Vi(e,t){return e=Bi(e),_i(e,t)}function qi(e,t,n){return e=Bi(e),Ei(e,t,n)}function Wi(e){return null===Fi?(Fi=[e],Ri=Ei(Ci,$i)):Fi.push(e),Ii}function Ki(){if(null!==Ri){var e=Ri;Ri=null,xi(e)}$i()}function $i(){if(!Ni&&null!==Fi){Ni=!0;var e=0;try{var t=Fi;Vi(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Fi=null}catch(t){throw null!==Fi&&(Fi=Fi.slice(e+1)),Ei(Ci,Ki),t}finally{Ni=!1}}}function Hi(e,t,n){return 1073741821-(1+((1073741821-e+t/10)/(n/=10)|0))*n}function Qi(e,t){if(e&&e.defaultProps)for(var n in t=i({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}var Yi={current:null},Gi=null,Xi=null,Ji=null;function Zi(){Ji=Xi=Gi=null}function eo(e){var t=Yi.current;li(Yi),e.type._context._currentValue=t}function to(e,t){for(;null!==e;){var n=e.alternate;if(e.childExpirationTime<t)e.childExpirationTime=t,null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t);else{if(!(null!==n&&n.childExpirationTime<t))break;n.childExpirationTime=t}e=e.return}}function no(e,t){Gi=e,Ji=Xi=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(e.expirationTime>=t&&(Pa=!0),e.firstContext=null)}function ro(e,t){if(Ji!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Ji=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Xi){if(null===Gi)throw Error(a(308));Xi=t,Gi.dependencies={expirationTime:0,firstContext:t,responders:null}}else Xi=Xi.next=t;return e._currentValue}var io=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,baseQueue:e.baseQueue,shared:e.shared,effects:e.effects})}function uo(e,t){return(e={expirationTime:e,suspenseConfig:t,tag:0,payload:null,callback:null,next:null}).next=e}function lo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function so(e,t){var n=e.alternate;null!==n&&ao(n,e),null===(n=(e=e.updateQueue).baseQueue)?(e.baseQueue=t.next=t,t.next=t):(t.next=n.next,n.next=t)}function co(e,t,n,r){var o=e.updateQueue;io=!1;var a=o.baseQueue,u=o.shared.pending;if(null!==u){if(null!==a){var l=a.next;a.next=u.next,u.next=l}a=u,o.shared.pending=null,null!==(l=e.alternate)&&(null!==(l=l.updateQueue)&&(l.baseQueue=u))}if(null!==a){l=a.next;var s=o.baseState,c=0,f=null,p=null,d=null;if(null!==l)for(var h=l;;){if((u=h.expirationTime)<r){var v={expirationTime:h.expirationTime,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null};null===d?(p=d=v,f=s):d=d.next=v,u>c&&(c=u)}else{null!==d&&(d=d.next={expirationTime:1073741823,suspenseConfig:h.suspenseConfig,tag:h.tag,payload:h.payload,callback:h.callback,next:null}),ol(u,h.suspenseConfig);e:{var y=e,m=h;switch(u=t,v=n,m.tag){case 1:if("function"==typeof(y=m.payload)){s=y.call(v,s,u);break e}s=y;break e;case 3:y.effectTag=-4097&y.effectTag|64;case 0:if(null==(u="function"==typeof(y=m.payload)?y.call(v,s,u):y))break e;s=i({},s,u);break e;case 2:io=!0}}null!==h.callback&&(e.effectTag|=32,null===(u=o.effects)?o.effects=[h]:u.push(h))}if(null===(h=h.next)||h===l){if(null===(u=o.shared.pending))break;h=a.next=u.next,u.next=l,o.baseQueue=a=u,o.shared.pending=null}}null===d?f=s:d.next=p,o.baseState=f,o.baseQueue=d,al(c),e.expirationTime=c,e.memoizedState=s}}function fo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=i,i=n,"function"!=typeof r)throw Error(a(191,r));r.call(i)}}}var po=G.ReactCurrentBatchConfig,ho=(new r.Component).refs;function vo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:i({},t,n),e.memoizedState=n,0===e.expirationTime&&(e.updateQueue.baseState=n)}var yo={isMounted:function(e){return!!(e=e._reactInternalFiber)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternalFiber;var r=$u(),i=po.suspense;(i=uo(r=Hu(r,e,i),i)).payload=t,null!=n&&(i.callback=n),lo(e,i),Qu(e,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternalFiber;var r=$u(),i=po.suspense;(i=uo(r=Hu(r,e,i),i)).tag=1,i.payload=t,null!=n&&(i.callback=n),lo(e,i),Qu(e,r)},enqueueForceUpdate:function(e,t){e=e._reactInternalFiber;var n=$u(),r=po.suspense;(r=uo(n=Hu(n,e,r),r)).tag=2,null!=t&&(r.callback=t),lo(e,r),Qu(e,n)}};function mo(e,t,n,r,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!Lr(n,r)||!Lr(i,o))}function go(e,t,n){var r=!1,i=ci,o=t.contextType;return"object"==typeof o&&null!==o?o=ro(o):(i=vi(t)?di:fi.current,o=(r=null!=(r=t.contextTypes))?hi(e,i):ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=yo,e.stateNode=t,t._reactInternalFiber=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bo(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yo.enqueueReplaceState(t,t.state,null)}function wo(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ho,oo(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=ro(o):(o=vi(t)?di:fi.current,i.context=hi(e,o)),co(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(vo(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&yo.enqueueReplaceState(i,i.state,null),co(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.effectTag|=4)}var _o=Array.isArray;function Eo(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===ho&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function xo(e,t){if("textarea"!==e.type)throw Error(a(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t,""))}function Oo(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.effectTag=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Sl(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.effectTag=2,n):r:(t.effectTag=2,n):n}function u(t){return e&&null===t.alternate&&(t.effectTag=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=jl(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function s(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=Eo(e,t,n),r.return=e,r):((r=Cl(n.type,n.key,n.props,null,e.mode,r)).ref=Eo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Pl(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function f(e,t,n,r,o){return null===t||7!==t.tag?((t=Tl(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=jl(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ee:return(n=Cl(t.type,t.key,t.props,null,e.mode,n)).ref=Eo(e,null,t),n.return=e,n;case te:return(t=Pl(t,e.mode,n)).return=e,t}if(_o(t)||ve(t))return(t=Tl(t,e.mode,n,null)).return=e,t;xo(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ee:return n.key===i?n.type===ne?f(e,t,n.props.children,r,i):s(e,t,n,r):null;case te:return n.key===i?c(e,t,n,r):null}if(_o(n)||ve(n))return null!==i?null:f(e,t,n,r,null);xo(e,n)}return null}function h(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ee:return e=e.get(null===r.key?n:r.key)||null,r.type===ne?f(t,e,r.props.children,i,r.key):s(t,e,r,i);case te:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(_o(r)||ve(r))return f(t,e=e.get(n)||null,r,i,null);xo(t,r)}return null}function v(i,a,u,l){for(var s=null,c=null,f=a,v=a=0,y=null;null!==f&&v<u.length;v++){f.index>v?(y=f,f=null):y=f.sibling;var m=d(i,f,u[v],l);if(null===m){null===f&&(f=y);break}e&&f&&null===m.alternate&&t(i,f),a=o(m,a,v),null===c?s=m:c.sibling=m,c=m,f=y}if(v===u.length)return n(i,f),s;if(null===f){for(;v<u.length;v++)null!==(f=p(i,u[v],l))&&(a=o(f,a,v),null===c?s=f:c.sibling=f,c=f);return s}for(f=r(i,f);v<u.length;v++)null!==(y=h(f,i,v,u[v],l))&&(e&&null!==y.alternate&&f.delete(null===y.key?v:y.key),a=o(y,a,v),null===c?s=y:c.sibling=y,c=y);return e&&f.forEach((function(e){return t(i,e)})),s}function y(i,u,l,s){var c=ve(l);if("function"!=typeof c)throw Error(a(150));if(null==(l=c.call(l)))throw Error(a(151));for(var f=c=null,v=u,y=u=0,m=null,g=l.next();null!==v&&!g.done;y++,g=l.next()){v.index>y?(m=v,v=null):m=v.sibling;var b=d(i,v,g.value,s);if(null===b){null===v&&(v=m);break}e&&v&&null===b.alternate&&t(i,v),u=o(b,u,y),null===f?c=b:f.sibling=b,f=b,v=m}if(g.done)return n(i,v),c;if(null===v){for(;!g.done;y++,g=l.next())null!==(g=p(i,g.value,s))&&(u=o(g,u,y),null===f?c=g:f.sibling=g,f=g);return c}for(v=r(i,v);!g.done;y++,g=l.next())null!==(g=h(v,i,y,g.value,s))&&(e&&null!==g.alternate&&v.delete(null===g.key?y:g.key),u=o(g,u,y),null===f?c=g:f.sibling=g,f=g);return e&&v.forEach((function(e){return t(i,e)})),c}return function(e,r,o,l){var s="object"==typeof o&&null!==o&&o.type===ne&&null===o.key;s&&(o=o.props.children);var c="object"==typeof o&&null!==o;if(c)switch(o.$$typeof){case ee:e:{for(c=o.key,s=r;null!==s;){if(s.key===c){switch(s.tag){case 7:if(o.type===ne){n(e,s.sibling),(r=i(s,o.props.children)).return=e,e=r;break e}break;default:if(s.elementType===o.type){n(e,s.sibling),(r=i(s,o.props)).ref=Eo(e,s,o),r.return=e,e=r;break e}}n(e,s);break}t(e,s),s=s.sibling}o.type===ne?((r=Tl(o.props.children,e.mode,l,o.key)).return=e,e=r):((l=Cl(o.type,o.key,o.props,null,e.mode,l)).ref=Eo(e,r,o),l.return=e,e=l)}return u(e);case te:e:{for(s=o.key;null!==r;){if(r.key===s){if(4===r.tag&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),(r=i(r,o.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=Pl(o,e.mode,l)).return=e,e=r}return u(e)}if("string"==typeof o||"number"==typeof o)return o=""+o,null!==r&&6===r.tag?(n(e,r.sibling),(r=i(r,o)).return=e,e=r):(n(e,r),(r=jl(o,e.mode,l)).return=e,e=r),u(e);if(_o(o))return v(e,r,o,l);if(ve(o))return y(e,r,o,l);if(c&&xo(e,o),void 0===o&&!s)switch(e.tag){case 1:case 0:throw e=e.type,Error(a(152,e.displayName||e.name||"Component"))}return n(e,r)}}var ko=Oo(!0),So=Oo(!1),Co={},To={current:Co},jo={current:Co},Po={current:Co};function Ao(e){if(e===Co)throw Error(a(174));return e}function Io(e,t){switch(si(Po,t),si(jo,e),si(To,Co),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ne(null,"");break;default:t=Ne(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}li(To),si(To,t)}function Do(){li(To),li(jo),li(Po)}function Mo(e){Ao(Po.current);var t=Ao(To.current),n=Ne(t,e.type);t!==n&&(si(jo,e),si(To,n))}function Fo(e){jo.current===e&&(li(To),li(jo))}var Ro={current:0};function No(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.effectTag))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zo(e,t){return{responder:e,props:t}}var Lo=G.ReactCurrentDispatcher,Uo=G.ReactCurrentBatchConfig,Bo=0,Vo=null,qo=null,Wo=null,Ko=!1;function $o(){throw Error(a(321))}function Ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,o){if(Bo=o,Vo=t,t.memoizedState=null,t.updateQueue=null,t.expirationTime=0,Lo.current=null===e||null===e.memoizedState?ma:ga,e=n(r,i),t.expirationTime===Bo){o=0;do{if(t.expirationTime=0,!(25>o))throw Error(a(301));o+=1,Wo=qo=null,t.updateQueue=null,Lo.current=ba,e=n(r,i)}while(t.expirationTime===Bo)}if(Lo.current=ya,t=null!==qo&&null!==qo.next,Bo=0,Wo=qo=Vo=null,Ko=!1,t)throw Error(a(300));return e}function Yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Wo?Vo.memoizedState=Wo=e:Wo=Wo.next=e,Wo}function Go(){if(null===qo){var e=Vo.alternate;e=null!==e?e.memoizedState:null}else e=qo.next;var t=null===Wo?Vo.memoizedState:Wo.next;if(null!==t)Wo=t,qo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(qo=e).memoizedState,baseState:qo.baseState,baseQueue:qo.baseQueue,queue:qo.queue,next:null},null===Wo?Vo.memoizedState=Wo=e:Wo=Wo.next=e}return Wo}function Xo(e,t){return"function"==typeof t?t(e):t}function Jo(e){var t=Go(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=qo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var u=i.next;i.next=o.next,o.next=u}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var l=u=o=null,s=i;do{var c=s.expirationTime;if(c<Bo){var f={expirationTime:s.expirationTime,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null};null===l?(u=l=f,o=r):l=l.next=f,c>Vo.expirationTime&&(Vo.expirationTime=c,al(c))}else null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:s.suspenseConfig,action:s.action,eagerReducer:s.eagerReducer,eagerState:s.eagerState,next:null}),ol(c,s.suspenseConfig),r=s.eagerReducer===e?s.eagerState:e(r,s.action);s=s.next}while(null!==s&&s!==i);null===l?o=r:l.next=u,Nr(r,t.memoizedState)||(Pa=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Zo(e){var t=Go(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var u=i=i.next;do{o=e(o,u.action),u=u.next}while(u!==i);Nr(o,t.memoizedState)||(Pa=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ea(e){var t=Yo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e}).dispatch=va.bind(null,Vo,e),[t.memoizedState,e]}function ta(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Vo.updateQueue)?(t={lastEffect:null},Vo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function na(){return Go().memoizedState}function ra(e,t,n,r){var i=Yo();Vo.effectTag|=e,i.memoizedState=ta(1|t,n,void 0,void 0===r?null:r)}function ia(e,t,n,r){var i=Go();r=void 0===r?null:r;var o=void 0;if(null!==qo){var a=qo.memoizedState;if(o=a.destroy,null!==r&&Ho(r,a.deps))return void ta(t,n,o,r)}Vo.effectTag|=e,i.memoizedState=ta(1|t,n,o,r)}function oa(e,t){return ra(516,4,e,t)}function aa(e,t){return ia(516,4,e,t)}function ua(e,t){return ia(4,2,e,t)}function la(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function sa(e,t,n){return n=null!=n?n.concat([e]):null,ia(4,2,la.bind(null,t,e),n)}function ca(){}function fa(e,t){return Yo().memoizedState=[e,void 0===t?null:t],e}function pa(e,t){var n=Go();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function da(e,t){var n=Go();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t,n){var r=Ui();Vi(98>r?98:r,(function(){e(!0)})),Vi(97<r?97:r,(function(){var r=Uo.suspense;Uo.suspense=void 0===t?null:t;try{e(!1),n()}finally{Uo.suspense=r}}))}function va(e,t,n){var r=$u(),i=po.suspense;i={expirationTime:r=Hu(r,e,i),suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var o=t.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===Vo||null!==o&&o===Vo)Ko=!0,i.expirationTime=Bo,Vo.expirationTime=Bo;else{if(0===e.expirationTime&&(null===o||0===o.expirationTime)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,u=o(a,n);if(i.eagerReducer=o,i.eagerState=u,Nr(u,a))return}catch(e){}Qu(e,r)}}var ya={readContext:ro,useCallback:$o,useContext:$o,useEffect:$o,useImperativeHandle:$o,useLayoutEffect:$o,useMemo:$o,useReducer:$o,useRef:$o,useState:$o,useDebugValue:$o,useResponder:$o,useDeferredValue:$o,useTransition:$o},ma={readContext:ro,useCallback:fa,useContext:ro,useEffect:oa,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,la.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ra(4,2,e,t)},useMemo:function(e,t){var n=Yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=va.bind(null,Vo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Yo().memoizedState=e},useState:ea,useDebugValue:ca,useResponder:zo,useDeferredValue:function(e,t){var n=ea(e),r=n[0],i=n[1];return oa((function(){var n=Uo.suspense;Uo.suspense=void 0===t?null:t;try{i(e)}finally{Uo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=ea(!1),n=t[0];return t=t[1],[fa(ha.bind(null,t,e),[t,e]),n]}},ga={readContext:ro,useCallback:pa,useContext:ro,useEffect:aa,useImperativeHandle:sa,useLayoutEffect:ua,useMemo:da,useReducer:Jo,useRef:na,useState:function(){return Jo(Xo)},useDebugValue:ca,useResponder:zo,useDeferredValue:function(e,t){var n=Jo(Xo),r=n[0],i=n[1];return aa((function(){var n=Uo.suspense;Uo.suspense=void 0===t?null:t;try{i(e)}finally{Uo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Jo(Xo),n=t[0];return t=t[1],[pa(ha.bind(null,t,e),[t,e]),n]}},ba={readContext:ro,useCallback:pa,useContext:ro,useEffect:aa,useImperativeHandle:sa,useLayoutEffect:ua,useMemo:da,useReducer:Zo,useRef:na,useState:function(){return Zo(Xo)},useDebugValue:ca,useResponder:zo,useDeferredValue:function(e,t){var n=Zo(Xo),r=n[0],i=n[1];return aa((function(){var n=Uo.suspense;Uo.suspense=void 0===t?null:t;try{i(e)}finally{Uo.suspense=n}}),[e,t]),r},useTransition:function(e){var t=Zo(Xo),n=t[0];return t=t[1],[pa(ha.bind(null,t,e),[t,e]),n]}},wa=null,_a=null,Ea=!1;function xa(e,t){var n=Ol(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.effectTag=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function ka(e){if(Ea){var t=_a;if(t){var n=t;if(!Oa(e,t)){if(!(t=_n(n.nextSibling))||!Oa(e,t))return e.effectTag=-1025&e.effectTag|2,Ea=!1,void(wa=e);xa(wa,n)}wa=e,_a=_n(t.firstChild)}else e.effectTag=-1025&e.effectTag|2,Ea=!1,wa=e}}function Sa(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;wa=e}function Ca(e){if(e!==wa)return!1;if(!Ea)return Sa(e),Ea=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!gn(t,e.memoizedProps))for(t=_a;t;)xa(e,t),t=_n(t.nextSibling);if(Sa(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){_a=_n(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}_a=null}}else _a=wa?_n(e.stateNode.nextSibling):null;return!0}function Ta(){_a=wa=null,Ea=!1}var ja=G.ReactCurrentOwner,Pa=!1;function Aa(e,t,n,r){t.child=null===e?So(t,null,n,r):ko(t,e.child,n,r)}function Ia(e,t,n,r,i){n=n.render;var o=t.ref;return no(t,i),r=Qo(e,t,n,r,o,i),null===e||Pa?(t.effectTag|=1,Aa(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Qa(e,t,i))}function Da(e,t,n,r,i,o){if(null===e){var a=n.type;return"function"!=typeof a||kl(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Cl(n.type,null,r,null,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ma(e,t,a,r,i,o))}return a=e.child,i<o&&(i=a.memoizedProps,(n=null!==(n=n.compare)?n:Lr)(i,r)&&e.ref===t.ref)?Qa(e,t,o):(t.effectTag|=1,(e=Sl(a,r)).ref=t.ref,e.return=t,t.child=e)}function Ma(e,t,n,r,i,o){return null!==e&&Lr(e.memoizedProps,r)&&e.ref===t.ref&&(Pa=!1,i<o)?(t.expirationTime=e.expirationTime,Qa(e,t,o)):Ra(e,t,n,r,o)}function Fa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.effectTag|=128)}function Ra(e,t,n,r,i){var o=vi(n)?di:fi.current;return o=hi(t,o),no(t,i),n=Qo(e,t,n,r,o,i),null===e||Pa?(t.effectTag|=1,Aa(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.effectTag&=-517,e.expirationTime<=i&&(e.expirationTime=0),Qa(e,t,i))}function Na(e,t,n,r,i){if(vi(n)){var o=!0;bi(t)}else o=!1;if(no(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),go(t,n,r),wo(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,u=t.memoizedProps;a.props=u;var l=a.context,s=n.contextType;"object"==typeof s&&null!==s?s=ro(s):s=hi(t,s=vi(n)?di:fi.current);var c=n.getDerivedStateFromProps,f="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;f||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(u!==r||l!==s)&&bo(t,a,r,s),io=!1;var p=t.memoizedState;a.state=p,co(t,r,a,i),l=t.memoizedState,u!==r||p!==l||pi.current||io?("function"==typeof c&&(vo(t,n,c,r),l=t.memoizedState),(u=io||mo(t,n,u,r,p,l,s))?(f||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.effectTag|=4)):("function"==typeof a.componentDidMount&&(t.effectTag|=4),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=s,r=u):("function"==typeof a.componentDidMount&&(t.effectTag|=4),r=!1)}else a=t.stateNode,ao(e,t),u=t.memoizedProps,a.props=t.type===t.elementType?u:Qi(t.type,u),l=a.context,"object"==typeof(s=n.contextType)&&null!==s?s=ro(s):s=hi(t,s=vi(n)?di:fi.current),(f="function"==typeof(c=n.getDerivedStateFromProps)||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(u!==r||l!==s)&&bo(t,a,r,s),io=!1,l=t.memoizedState,a.state=l,co(t,r,a,i),p=t.memoizedState,u!==r||l!==p||pi.current||io?("function"==typeof c&&(vo(t,n,c,r),p=t.memoizedState),(c=io||mo(t,n,u,r,l,p,s))?(f||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,s),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,s)),"function"==typeof a.componentDidUpdate&&(t.effectTag|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.effectTag|=256)):("function"!=typeof a.componentDidUpdate||u===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||u===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=s,r=c):("function"!=typeof a.componentDidUpdate||u===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=4),"function"!=typeof a.getSnapshotBeforeUpdate||u===e.memoizedProps&&l===e.memoizedState||(t.effectTag|=256),r=!1);return za(e,t,n,r,o,i)}function za(e,t,n,r,i,o){Fa(e,t);var a=0!=(64&t.effectTag);if(!r&&!a)return i&&wi(t,n,!1),Qa(e,t,o);r=t.stateNode,ja.current=t;var u=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.effectTag|=1,null!==e&&a?(t.child=ko(t,e.child,null,o),t.child=ko(t,null,u,o)):Aa(e,t,u,o),t.memoizedState=r.state,i&&wi(t,n,!0),t.child}function La(e){var t=e.stateNode;t.pendingContext?mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&mi(0,t.context,!1),Io(e,t.containerInfo)}var Ua,Ba,Va,qa={dehydrated:null,retryTime:0};function Wa(e,t,n){var r,i=t.mode,o=t.pendingProps,a=Ro.current,u=!1;if((r=0!=(64&t.effectTag))||(r=0!=(2&a)&&(null===e||null!==e.memoizedState)),r?(u=!0,t.effectTag&=-65):null!==e&&null===e.memoizedState||void 0===o.fallback||!0===o.unstable_avoidThisFallback||(a|=1),si(Ro,1&a),null===e){if(void 0!==o.fallback&&ka(t),u){if(u=o.fallback,(o=Tl(null,i,0,null)).return=t,0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Tl(u,i,n,null)).return=t,o.sibling=n,t.memoizedState=qa,t.child=o,n}return i=o.children,t.memoizedState=null,t.child=So(t,null,i,n)}if(null!==e.memoizedState){if(i=(e=e.child).sibling,u){if(o=o.fallback,(n=Sl(e,e.pendingProps)).return=t,0==(2&t.mode)&&(u=null!==t.memoizedState?t.child.child:t.child)!==e.child)for(n.child=u;null!==u;)u.return=n,u=u.sibling;return(i=Sl(i,o)).return=t,n.sibling=i,n.childExpirationTime=0,t.memoizedState=qa,t.child=n,i}return n=ko(t,e.child,o.children,n),t.memoizedState=null,t.child=n}if(e=e.child,u){if(u=o.fallback,(o=Tl(null,i,0,null)).return=t,o.child=e,null!==e&&(e.return=o),0==(2&t.mode))for(e=null!==t.memoizedState?t.child.child:t.child,o.child=e;null!==e;)e.return=o,e=e.sibling;return(n=Tl(u,i,n,null)).return=t,o.sibling=n,n.effectTag|=2,o.childExpirationTime=0,t.memoizedState=qa,t.child=o,n}return t.memoizedState=null,t.child=ko(t,e,o.children,n)}function Ka(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t),to(e.return,t)}function $a(e,t,n,r,i,o){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailExpiration=0,a.tailMode=i,a.lastEffect=o)}function Ha(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Aa(e,t,r.children,n),0!=(2&(r=Ro.current)))r=1&r|2,t.effectTag|=64;else{if(null!==e&&0!=(64&e.effectTag))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ka(e,n);else if(19===e.tag)Ka(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(si(Ro,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===No(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$a(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===No(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$a(t,!0,n,null,o,t.lastEffect);break;case"together":$a(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function Qa(e,t,n){null!==e&&(t.dependencies=e.dependencies);var r=t.expirationTime;if(0!==r&&al(r),t.childExpirationTime<n)return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Sl(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Sl(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ya(e,t){switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ga(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return vi(t.type)&&yi(),null;case 3:return Do(),li(pi),li(fi),(n=t.stateNode).pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||!Ca(t)||(t.effectTag|=4),null;case 5:Fo(t),n=Ao(Po.current);var o=t.type;if(null!==e&&null!=t.stateNode)Ba(e,t,o,r,n),e.ref!==t.ref&&(t.effectTag|=128);else{if(!r){if(null===t.stateNode)throw Error(a(166));return null}if(e=Ao(To.current),Ca(t)){r=t.stateNode,o=t.type;var u=t.memoizedProps;switch(r[On]=t,r[kn]=u,o){case"iframe":case"object":case"embed":Ht("load",r);break;case"video":case"audio":for(e=0;e<Ge.length;e++)Ht(Ge[e],r);break;case"source":Ht("error",r);break;case"img":case"image":case"link":Ht("error",r),Ht("load",r);break;case"form":Ht("reset",r),Ht("submit",r);break;case"details":Ht("toggle",r);break;case"input":xe(r,u),Ht("invalid",r),ln(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!u.multiple},Ht("invalid",r),ln(n,"onChange");break;case"textarea":Ae(r,u),Ht("invalid",r),ln(n,"onChange")}for(var l in on(o,u),e=null,u)if(u.hasOwnProperty(l)){var s=u[l];"children"===l?"string"==typeof s?r.textContent!==s&&(e=["children",s]):"number"==typeof s&&r.textContent!==""+s&&(e=["children",""+s]):O.hasOwnProperty(l)&&null!=s&&ln(n,l)}switch(o){case"input":we(r),Se(r,u,!0);break;case"textarea":we(r),De(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=sn)}n=e,t.updateQueue=n,null!==n&&(t.effectTag|=4)}else{switch(l=9===n.nodeType?n:n.ownerDocument,e===un&&(e=Re(o)),e===un?"script"===o?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=l.createElement(o,{is:r.is}):(e=l.createElement(o),"select"===o&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,o),e[On]=t,e[kn]=r,Ua(e,t),t.stateNode=e,l=an(o,r),o){case"iframe":case"object":case"embed":Ht("load",e),s=r;break;case"video":case"audio":for(s=0;s<Ge.length;s++)Ht(Ge[s],e);s=r;break;case"source":Ht("error",e),s=r;break;case"img":case"image":case"link":Ht("error",e),Ht("load",e),s=r;break;case"form":Ht("reset",e),Ht("submit",e),s=r;break;case"details":Ht("toggle",e),s=r;break;case"input":xe(e,r),s=Ee(e,r),Ht("invalid",e),ln(n,"onChange");break;case"option":s=Te(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=i({},r,{value:void 0}),Ht("invalid",e),ln(n,"onChange");break;case"textarea":Ae(e,r),s=Pe(e,r),Ht("invalid",e),ln(n,"onChange");break;default:s=r}on(o,s);var c=s;for(u in c)if(c.hasOwnProperty(u)){var f=c[u];"style"===u?nn(e,f):"dangerouslySetInnerHTML"===u?null!=(f=f?f.__html:void 0)&&Le(e,f):"children"===u?"string"==typeof f?("textarea"!==o||""!==f)&&Ue(e,f):"number"==typeof f&&Ue(e,""+f):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(O.hasOwnProperty(u)?null!=f&&ln(n,u):null!=f&&X(e,u,f,l))}switch(o){case"input":we(e),Se(e,r,!1);break;case"textarea":we(e),De(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ge(r.value));break;case"select":e.multiple=!!r.multiple,null!=(n=r.value)?je(e,!!r.multiple,n,!1):null!=r.defaultValue&&je(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof s.onClick&&(e.onclick=sn)}mn(o,r)&&(t.effectTag|=4)}null!==t.ref&&(t.effectTag|=128)}return null;case 6:if(e&&null!=t.stateNode)Va(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(a(166));n=Ao(Po.current),Ao(To.current),Ca(t)?(n=t.stateNode,r=t.memoizedProps,n[On]=t,n.nodeValue!==r&&(t.effectTag|=4)):((n=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[On]=t,t.stateNode=n)}return null;case 13:return li(Ro),r=t.memoizedState,0!=(64&t.effectTag)?(t.expirationTime=n,t):(n=null!==r,r=!1,null===e?void 0!==t.memoizedProps.fallback&&Ca(t):(r=null!==(o=e.memoizedState),n||null===o||null!==(o=e.child.sibling)&&(null!==(u=t.firstEffect)?(t.firstEffect=o,o.nextEffect=u):(t.firstEffect=t.lastEffect=o,o.nextEffect=null),o.effectTag=8)),n&&!r&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&Ro.current)?Cu===wu&&(Cu=_u):(Cu!==wu&&Cu!==_u||(Cu=Eu),0!==Iu&&null!==Ou&&(Dl(Ou,Su),Ml(Ou,Iu)))),(n||r)&&(t.effectTag|=4),null);case 4:return Do(),null;case 10:return eo(t),null;case 17:return vi(t.type)&&yi(),null;case 19:if(li(Ro),null===(r=t.memoizedState))return null;if(o=0!=(64&t.effectTag),null===(u=r.rendering)){if(o)Ya(r,!1);else if(Cu!==wu||null!==e&&0!=(64&e.effectTag))for(u=t.child;null!==u;){if(null!==(e=No(u))){for(t.effectTag|=64,Ya(r,!1),null!==(o=e.updateQueue)&&(t.updateQueue=o,t.effectTag|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=t.child;null!==r;)u=n,(o=r).effectTag&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(e=o.alternate)?(o.childExpirationTime=0,o.expirationTime=u,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null):(o.childExpirationTime=e.childExpirationTime,o.expirationTime=e.expirationTime,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,u=e.dependencies,o.dependencies=null===u?null:{expirationTime:u.expirationTime,firstContext:u.firstContext,responders:u.responders}),r=r.sibling;return si(Ro,1&Ro.current|2),t.child}u=u.sibling}}else{if(!o)if(null!==(e=No(u))){if(t.effectTag|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.effectTag|=4),Ya(r,!0),null===r.tail&&"hidden"===r.tailMode&&!u.alternate)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Li()-r.renderingStartTime>r.tailExpiration&&1<n&&(t.effectTag|=64,o=!0,Ya(r,!1),t.expirationTime=t.childExpirationTime=n-1);r.isBackwards?(u.sibling=t.child,t.child=u):(null!==(n=r.last)?n.sibling=u:t.child=u,r.last=u)}return null!==r.tail?(0===r.tailExpiration&&(r.tailExpiration=Li()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Li(),n.sibling=null,t=Ro.current,si(Ro,o?1&t|2:1&t),n):null}throw Error(a(156,t.tag))}function Xa(e){switch(e.tag){case 1:vi(e.type)&&yi();var t=e.effectTag;return 4096&t?(e.effectTag=-4097&t|64,e):null;case 3:if(Do(),li(pi),li(fi),0!=(64&(t=e.effectTag)))throw Error(a(285));return e.effectTag=-4097&t|64,e;case 5:return Fo(e),null;case 13:return li(Ro),4096&(t=e.effectTag)?(e.effectTag=-4097&t|64,e):null;case 19:return li(Ro),null;case 4:return Do(),null;case 10:return eo(e),null;default:return null}}function Ja(e,t){return{value:e,source:t,stack:me(t)}}Ua=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ba=function(e,t,n,r,o){var a=e.memoizedProps;if(a!==r){var u,l,s=t.stateNode;switch(Ao(To.current),e=null,n){case"input":a=Ee(s,a),r=Ee(s,r),e=[];break;case"option":a=Te(s,a),r=Te(s,r),e=[];break;case"select":a=i({},a,{value:void 0}),r=i({},r,{value:void 0}),e=[];break;case"textarea":a=Pe(s,a),r=Pe(s,r),e=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(s.onclick=sn)}for(u in on(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u])if("style"===u)for(l in s=a[u])s.hasOwnProperty(l)&&(n||(n={}),n[l]="");else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(O.hasOwnProperty(u)?e||(e=[]):(e=e||[]).push(u,null));for(u in r){var c=r[u];if(s=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(null!=c||null!=s))if("style"===u)if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(e||(e=[]),e.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,s=s?s.__html:void 0,null!=c&&s!==c&&(e=e||[]).push(u,c)):"children"===u?s===c||"string"!=typeof c&&"number"!=typeof c||(e=e||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(O.hasOwnProperty(u)?(null!=c&&ln(o,u),e||s===c||(e=[])):(e=e||[]).push(u,c))}n&&(e=e||[]).push("style",n),o=e,(t.updateQueue=o)&&(t.effectTag|=4)}},Va=function(e,t,n,r){n!==r&&(t.effectTag|=4)};var Za="function"==typeof WeakSet?WeakSet:Set;function eu(e,t){var n=t.source,r=t.stack;null===r&&null!==n&&(r=me(n)),null!==n&&ye(n.type),t=t.value,null!==e&&1===e.tag&&ye(e.type);try{console.error(t)}catch(e){setTimeout((function(){throw e}))}}function tu(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(t){gl(e,t)}else t.current=null}function nu(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.effectTag&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Qi(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(a(163))}function ru(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.destroy;n.destroy=void 0,void 0!==r&&r()}n=n.next}while(n!==t)}}function iu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ou(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:return void iu(3,n);case 1:if(e=n.stateNode,4&n.effectTag)if(null===t)e.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Qi(n.type,t.memoizedProps);e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate)}return void(null!==(t=n.updateQueue)&&fo(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}fo(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.effectTag&&mn(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Rt(n)))));case 19:case 17:case 20:case 21:return}throw Error(a(163))}function au(e,t,n){switch("function"==typeof El&&El(t),t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var r=e.next;Vi(97<n?97:n,(function(){var e=r;do{var n=e.destroy;if(void 0!==n){var i=t;try{n()}catch(e){gl(i,e)}}e=e.next}while(e!==r)}))}break;case 1:tu(t),"function"==typeof(n=t.stateNode).componentWillUnmount&&function(e,t){try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(t){gl(e,t)}}(t,n);break;case 5:tu(t);break;case 4:cu(e,t,n)}}function uu(e){var t=e.alternate;e.return=null,e.child=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.alternate=null,e.firstEffect=null,e.lastEffect=null,e.pendingProps=null,e.memoizedProps=null,e.stateNode=null,null!==t&&uu(t)}function lu(e){return 5===e.tag||3===e.tag||4===e.tag}function su(e){e:{for(var t=e.return;null!==t;){if(lu(t)){var n=t;break e}t=t.return}throw Error(a(160))}switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(a(161))}16&n.effectTag&&(Ue(t,""),n.effectTag&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||lu(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.effectTag)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.effectTag)){n=n.stateNode;break e}}r?function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!==(r=r._reactRootContainer)&&void 0!==r||null!==n.onclick||(n.onclick=sn));else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t):function e(t,n,r){var i=t.tag,o=5===i||6===i;if(o)t=o?t.stateNode:t.stateNode.instance,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,n,t)}function cu(e,t,n){for(var r,i,o=t,u=!1;;){if(!u){u=o.return;e:for(;;){if(null===u)throw Error(a(160));switch(r=u.stateNode,u.tag){case 5:i=!1;break e;case 3:case 4:r=r.containerInfo,i=!0;break e}u=u.return}u=!0}if(5===o.tag||6===o.tag){e:for(var l=e,s=o,c=n,f=s;;)if(au(l,f,c),null!==f.child&&4!==f.tag)f.child.return=f,f=f.child;else{if(f===s)break e;for(;null===f.sibling;){if(null===f.return||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i?(l=r,s=o.stateNode,8===l.nodeType?l.parentNode.removeChild(s):l.removeChild(s)):r.removeChild(o.stateNode)}else if(4===o.tag){if(null!==o.child){r=o.stateNode.containerInfo,i=!0,o.child.return=o,o=o.child;continue}}else if(au(e,o,n),null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break;for(;null===o.sibling;){if(null===o.return||o.return===t)return;4===(o=o.return).tag&&(u=!1)}o.sibling.return=o.return,o=o.sibling}}function fu(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:return void ru(3,t);case 1:return;case 5:var n=t.stateNode;if(null!=n){var r=t.memoizedProps,i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[kn]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Oe(n,r),an(e,i),t=an(e,r),i=0;i<o.length;i+=2){var u=o[i],l=o[i+1];"style"===u?nn(n,l):"dangerouslySetInnerHTML"===u?Le(n,l):"children"===u?Ue(n,l):X(n,u,l,t)}switch(e){case"input":ke(n,r);break;case"textarea":Ie(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(e=r.value)?je(n,!!r.multiple,e,!1):t!==!!r.multiple&&(null!=r.defaultValue?je(n,!!r.multiple,r.defaultValue,!0):je(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(a(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((t=t.stateNode).hydrate&&(t.hydrate=!1,Rt(t.containerInfo)));case 12:return;case 13:if(n=t,null===t.memoizedState?r=!1:(r=!0,n=t.child,Mu=Li()),null!==n)e:for(e=n;;){if(5===e.tag)o=e.stateNode,r?"function"==typeof(o=o.style).setProperty?o.setProperty("display","none","important"):o.display="none":(o=e.stateNode,i=null!=(i=e.memoizedProps.style)&&i.hasOwnProperty("display")?i.display:null,o.style.display=tn("display",i));else if(6===e.tag)e.stateNode.nodeValue=r?"":e.memoizedProps;else{if(13===e.tag&&null!==e.memoizedState&&null===e.memoizedState.dehydrated){(o=e.child.sibling).return=e,e=o;continue}if(null!==e.child){e.child.return=e,e=e.child;continue}}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}return void pu(t);case 19:return void pu(t);case 17:return}throw Error(a(163))}function pu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Za),t.forEach((function(t){var r=wl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}var du="function"==typeof WeakMap?WeakMap:Map;function hu(e,t,n){(n=uo(n,null)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ru||(Ru=!0,Nu=r),eu(e,t)},n}function vu(e,t,n){(n=uo(n,null)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return eu(e,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===zu?zu=new Set([this]):zu.add(this),eu(e,t));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}var yu,mu=Math.ceil,gu=G.ReactCurrentDispatcher,bu=G.ReactCurrentOwner,wu=0,_u=3,Eu=4,xu=0,Ou=null,ku=null,Su=0,Cu=wu,Tu=null,ju=1073741823,Pu=1073741823,Au=null,Iu=0,Du=!1,Mu=0,Fu=null,Ru=!1,Nu=null,zu=null,Lu=!1,Uu=null,Bu=90,Vu=null,qu=0,Wu=null,Ku=0;function $u(){return 0!=(48&xu)?1073741821-(Li()/10|0):0!==Ku?Ku:Ku=1073741821-(Li()/10|0)}function Hu(e,t,n){if(0==(2&(t=t.mode)))return 1073741823;var r=Ui();if(0==(4&t))return 99===r?1073741823:1073741822;if(0!=(16&xu))return Su;if(null!==n)e=Hi(e,0|n.timeoutMs||5e3,250);else switch(r){case 99:e=1073741823;break;case 98:e=Hi(e,150,100);break;case 97:case 96:e=Hi(e,5e3,250);break;case 95:e=2;break;default:throw Error(a(326))}return null!==Ou&&e===Su&&--e,e}function Qu(e,t){if(50<qu)throw qu=0,Wu=null,Error(a(185));if(null!==(e=Yu(e,t))){var n=Ui();1073741823===t?0!=(8&xu)&&0==(48&xu)?Zu(e):(Xu(e),0===xu&&Ki()):Xu(e),0==(4&xu)||98!==n&&99!==n||(null===Vu?Vu=new Map([[e,t]]):(void 0===(n=Vu.get(e))||n>t)&&Vu.set(e,t))}}function Yu(e,t){e.expirationTime<t&&(e.expirationTime=t);var n=e.alternate;null!==n&&n.expirationTime<t&&(n.expirationTime=t);var r=e.return,i=null;if(null===r&&3===e.tag)i=e.stateNode;else for(;null!==r;){if(n=r.alternate,r.childExpirationTime<t&&(r.childExpirationTime=t),null!==n&&n.childExpirationTime<t&&(n.childExpirationTime=t),null===r.return&&3===r.tag){i=r.stateNode;break}r=r.return}return null!==i&&(Ou===i&&(al(t),Cu===Eu&&Dl(i,Su)),Ml(i,t)),i}function Gu(e){var t=e.lastExpiredTime;if(0!==t)return t;if(!Il(e,t=e.firstPendingTime))return t;var n=e.lastPingedTime;return 2>=(e=n>(e=e.nextKnownPendingLevel)?n:e)&&t!==e?0:e}function Xu(e){if(0!==e.lastExpiredTime)e.callbackExpirationTime=1073741823,e.callbackPriority=99,e.callbackNode=Wi(Zu.bind(null,e));else{var t=Gu(e),n=e.callbackNode;if(0===t)null!==n&&(e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90);else{var r=$u();if(1073741823===t?r=99:1===t||2===t?r=95:r=0>=(r=10*(1073741821-t)-10*(1073741821-r))?99:250>=r?98:5250>=r?97:95,null!==n){var i=e.callbackPriority;if(e.callbackExpirationTime===t&&i>=r)return;n!==Ii&&xi(n)}e.callbackExpirationTime=t,e.callbackPriority=r,t=1073741823===t?Wi(Zu.bind(null,e)):qi(r,Ju.bind(null,e),{timeout:10*(1073741821-t)-Li()}),e.callbackNode=t}}}function Ju(e,t){if(Ku=0,t)return Fl(e,t=$u()),Xu(e),null;var n=Gu(e);if(0!==n){if(t=e.callbackNode,0!=(48&xu))throw Error(a(327));if(vl(),e===Ou&&n===Su||nl(e,n),null!==ku){var r=xu;xu|=16;for(var i=il();;)try{ll();break}catch(t){rl(e,t)}if(Zi(),xu=r,gu.current=i,1===Cu)throw t=Tu,nl(e,n),Dl(e,n),Xu(e),t;if(null===ku)switch(i=e.finishedWork=e.current.alternate,e.finishedExpirationTime=n,r=Cu,Ou=null,r){case wu:case 1:throw Error(a(345));case 2:Fl(e,2<n?2:n);break;case _u:if(Dl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fl(i)),1073741823===ju&&10<(i=Mu+500-Li())){if(Du){var o=e.lastPingedTime;if(0===o||o>=n){e.lastPingedTime=n,nl(e,n);break}}if(0!==(o=Gu(e))&&o!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}e.timeoutHandle=bn(pl.bind(null,e),i);break}pl(e);break;case Eu:if(Dl(e,n),n===(r=e.lastSuspendedTime)&&(e.nextKnownPendingLevel=fl(i)),Du&&(0===(i=e.lastPingedTime)||i>=n)){e.lastPingedTime=n,nl(e,n);break}if(0!==(i=Gu(e))&&i!==n)break;if(0!==r&&r!==n){e.lastPingedTime=r;break}if(1073741823!==Pu?r=10*(1073741821-Pu)-Li():1073741823===ju?r=0:(r=10*(1073741821-ju)-5e3,0>(r=(i=Li())-r)&&(r=0),(n=10*(1073741821-n)-i)<(r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mu(r/1960))-r)&&(r=n)),10<r){e.timeoutHandle=bn(pl.bind(null,e),r);break}pl(e);break;case 5:if(1073741823!==ju&&null!==Au){o=ju;var u=Au;if(0>=(r=0|u.busyMinDurationMs)?r=0:(i=0|u.busyDelayMs,r=(o=Li()-(10*(1073741821-o)-(0|u.timeoutMs||5e3)))<=i?0:i+r-o),10<r){Dl(e,n),e.timeoutHandle=bn(pl.bind(null,e),r);break}}pl(e);break;default:throw Error(a(329))}if(Xu(e),e.callbackNode===t)return Ju.bind(null,e)}}return null}function Zu(e){var t=e.lastExpiredTime;if(t=0!==t?t:1073741823,0!=(48&xu))throw Error(a(327));if(vl(),e===Ou&&t===Su||nl(e,t),null!==ku){var n=xu;xu|=16;for(var r=il();;)try{ul();break}catch(t){rl(e,t)}if(Zi(),xu=n,gu.current=r,1===Cu)throw n=Tu,nl(e,t),Dl(e,t),Xu(e),n;if(null!==ku)throw Error(a(261));e.finishedWork=e.current.alternate,e.finishedExpirationTime=t,Ou=null,pl(e),Xu(e)}return null}function el(e,t){var n=xu;xu|=1;try{return e(t)}finally{0===(xu=n)&&Ki()}}function tl(e,t){var n=xu;xu&=-2,xu|=8;try{return e(t)}finally{0===(xu=n)&&Ki()}}function nl(e,t){e.finishedWork=null,e.finishedExpirationTime=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,wn(n)),null!==ku)for(n=ku.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&yi();break;case 3:Do(),li(pi),li(fi);break;case 5:Fo(r);break;case 4:Do();break;case 13:case 19:li(Ro);break;case 10:eo(r)}n=n.return}Ou=e,ku=Sl(e.current,null),Su=t,Cu=wu,Tu=null,Pu=ju=1073741823,Au=null,Iu=0,Du=!1}function rl(e,t){for(;;){try{if(Zi(),Lo.current=ya,Ko)for(var n=Vo.memoizedState;null!==n;){var r=n.queue;null!==r&&(r.pending=null),n=n.next}if(Bo=0,Wo=qo=Vo=null,Ko=!1,null===ku||null===ku.return)return Cu=1,Tu=t,ku=null;e:{var i=e,o=ku.return,a=ku,u=t;if(t=Su,a.effectTag|=2048,a.firstEffect=a.lastEffect=null,null!==u&&"object"==typeof u&&"function"==typeof u.then){var l=u;if(0==(2&a.mode)){var s=a.alternate;s?(a.updateQueue=s.updateQueue,a.memoizedState=s.memoizedState,a.expirationTime=s.expirationTime):(a.updateQueue=null,a.memoizedState=null)}var c=0!=(1&Ro.current),f=o;do{var p;if(p=13===f.tag){var d=f.memoizedState;if(null!==d)p=null!==d.dehydrated;else{var h=f.memoizedProps;p=void 0!==h.fallback&&(!0!==h.unstable_avoidThisFallback||!c)}}if(p){var v=f.updateQueue;if(null===v){var y=new Set;y.add(l),f.updateQueue=y}else v.add(l);if(0==(2&f.mode)){if(f.effectTag|=64,a.effectTag&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var m=uo(1073741823,null);m.tag=2,lo(a,m)}a.expirationTime=1073741823;break e}u=void 0,a=t;var g=i.pingCache;if(null===g?(g=i.pingCache=new du,u=new Set,g.set(l,u)):void 0===(u=g.get(l))&&(u=new Set,g.set(l,u)),!u.has(a)){u.add(a);var b=bl.bind(null,i,l,a);l.then(b,b)}f.effectTag|=4096,f.expirationTime=t;break e}f=f.return}while(null!==f);u=Error((ye(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+me(a))}5!==Cu&&(Cu=2),u=Ja(u,a),f=o;do{switch(f.tag){case 3:l=u,f.effectTag|=4096,f.expirationTime=t,so(f,hu(f,l,t));break e;case 1:l=u;var w=f.type,_=f.stateNode;if(0==(64&f.effectTag)&&("function"==typeof w.getDerivedStateFromError||null!==_&&"function"==typeof _.componentDidCatch&&(null===zu||!zu.has(_)))){f.effectTag|=4096,f.expirationTime=t,so(f,vu(f,l,t));break e}}f=f.return}while(null!==f)}ku=cl(ku)}catch(e){t=e;continue}break}}function il(){var e=gu.current;return gu.current=ya,null===e?ya:e}function ol(e,t){e<ju&&2<e&&(ju=e),null!==t&&e<Pu&&2<e&&(Pu=e,Au=t)}function al(e){e>Iu&&(Iu=e)}function ul(){for(;null!==ku;)ku=sl(ku)}function ll(){for(;null!==ku&&!Di();)ku=sl(ku)}function sl(e){var t=yu(e.alternate,e,Su);return e.memoizedProps=e.pendingProps,null===t&&(t=cl(e)),bu.current=null,t}function cl(e){ku=e;do{var t=ku.alternate;if(e=ku.return,0==(2048&ku.effectTag)){if(t=Ga(t,ku,Su),1===Su||1!==ku.childExpirationTime){for(var n=0,r=ku.child;null!==r;){var i=r.expirationTime,o=r.childExpirationTime;i>n&&(n=i),o>n&&(n=o),r=r.sibling}ku.childExpirationTime=n}if(null!==t)return t;null!==e&&0==(2048&e.effectTag)&&(null===e.firstEffect&&(e.firstEffect=ku.firstEffect),null!==ku.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=ku.firstEffect),e.lastEffect=ku.lastEffect),1<ku.effectTag&&(null!==e.lastEffect?e.lastEffect.nextEffect=ku:e.firstEffect=ku,e.lastEffect=ku))}else{if(null!==(t=Xa(ku)))return t.effectTag&=2047,t;null!==e&&(e.firstEffect=e.lastEffect=null,e.effectTag|=2048)}if(null!==(t=ku.sibling))return t;ku=e}while(null!==ku);return Cu===wu&&(Cu=5),null}function fl(e){var t=e.expirationTime;return t>(e=e.childExpirationTime)?t:e}function pl(e){var t=Ui();return Vi(99,dl.bind(null,e,t)),null}function dl(e,t){do{vl()}while(null!==Uu);if(0!=(48&xu))throw Error(a(327));var n=e.finishedWork,r=e.finishedExpirationTime;if(null===n)return null;if(e.finishedWork=null,e.finishedExpirationTime=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackExpirationTime=0,e.callbackPriority=90,e.nextKnownPendingLevel=0;var i=fl(n);if(e.firstPendingTime=i,r<=e.lastSuspendedTime?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:r<=e.firstSuspendedTime&&(e.firstSuspendedTime=r-1),r<=e.lastPingedTime&&(e.lastPingedTime=0),r<=e.lastExpiredTime&&(e.lastExpiredTime=0),e===Ou&&(ku=Ou=null,Su=0),1<n.effectTag?null!==n.lastEffect?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,null!==i){var o=xu;xu|=32,bu.current=null,vn=$t;var u=dn();if(hn(u)){if("selectionStart"in u)var l={start:u.selectionStart,end:u.selectionEnd};else e:{var s=(l=(l=u.ownerDocument)&&l.defaultView||window).getSelection&&l.getSelection();if(s&&0!==s.rangeCount){l=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{l.nodeType,f.nodeType}catch(e){l=null;break e}var p=0,d=-1,h=-1,v=0,y=0,m=u,g=null;t:for(;;){for(var b;m!==l||0!==c&&3!==m.nodeType||(d=p+c),m!==f||0!==s&&3!==m.nodeType||(h=p+s),3===m.nodeType&&(p+=m.nodeValue.length),null!==(b=m.firstChild);)g=m,m=b;for(;;){if(m===u)break t;if(g===l&&++v===c&&(d=p),g===f&&++y===s&&(h=p),null!==(b=m.nextSibling))break;g=(m=g).parentNode}m=b}l=-1===d||-1===h?null:{start:d,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;yn={activeElementDetached:null,focusedElem:u,selectionRange:l},$t=!1,Fu=i;do{try{hl()}catch(e){if(null===Fu)throw Error(a(330));gl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);Fu=i;do{try{for(u=e,l=t;null!==Fu;){var w=Fu.effectTag;if(16&w&&Ue(Fu.stateNode,""),128&w){var _=Fu.alternate;if(null!==_){var E=_.ref;null!==E&&("function"==typeof E?E(null):E.current=null)}}switch(1038&w){case 2:su(Fu),Fu.effectTag&=-3;break;case 6:su(Fu),Fu.effectTag&=-3,fu(Fu.alternate,Fu);break;case 1024:Fu.effectTag&=-1025;break;case 1028:Fu.effectTag&=-1025,fu(Fu.alternate,Fu);break;case 4:fu(Fu.alternate,Fu);break;case 8:cu(u,c=Fu,l),uu(c)}Fu=Fu.nextEffect}}catch(e){if(null===Fu)throw Error(a(330));gl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);if(E=yn,_=dn(),w=E.focusedElem,l=E.selectionRange,_!==w&&w&&w.ownerDocument&&function e(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(w.ownerDocument.documentElement,w)){null!==l&&hn(w)&&(_=l.start,void 0===(E=l.end)&&(E=_),"selectionStart"in w?(w.selectionStart=_,w.selectionEnd=Math.min(E,w.value.length)):(E=(_=w.ownerDocument||document)&&_.defaultView||window).getSelection&&(E=E.getSelection(),c=w.textContent.length,u=Math.min(l.start,c),l=void 0===l.end?u:Math.min(l.end,c),!E.extend&&u>l&&(c=l,l=u,u=c),c=pn(w,u),f=pn(w,l),c&&f&&(1!==E.rangeCount||E.anchorNode!==c.node||E.anchorOffset!==c.offset||E.focusNode!==f.node||E.focusOffset!==f.offset)&&((_=_.createRange()).setStart(c.node,c.offset),E.removeAllRanges(),u>l?(E.addRange(_),E.extend(f.node,f.offset)):(_.setEnd(f.node,f.offset),E.addRange(_))))),_=[];for(E=w;E=E.parentNode;)1===E.nodeType&&_.push({element:E,left:E.scrollLeft,top:E.scrollTop});for("function"==typeof w.focus&&w.focus(),w=0;w<_.length;w++)(E=_[w]).element.scrollLeft=E.left,E.element.scrollTop=E.top}$t=!!vn,yn=vn=null,e.current=n,Fu=i;do{try{for(w=e;null!==Fu;){var x=Fu.effectTag;if(36&x&&ou(w,Fu.alternate,Fu),128&x){_=void 0;var O=Fu.ref;if(null!==O){var k=Fu.stateNode;switch(Fu.tag){case 5:_=k;break;default:_=k}"function"==typeof O?O(_):O.current=_}}Fu=Fu.nextEffect}}catch(e){if(null===Fu)throw Error(a(330));gl(Fu,e),Fu=Fu.nextEffect}}while(null!==Fu);Fu=null,Mi(),xu=o}else e.current=n;if(Lu)Lu=!1,Uu=e,Bu=t;else for(Fu=i;null!==Fu;)t=Fu.nextEffect,Fu.nextEffect=null,Fu=t;if(0===(t=e.firstPendingTime)&&(zu=null),1073741823===t?e===Wu?qu++:(qu=0,Wu=e):qu=0,"function"==typeof _l&&_l(n.stateNode,r),Xu(e),Ru)throw Ru=!1,e=Nu,Nu=null,e;return 0!=(8&xu)||Ki(),null}function hl(){for(;null!==Fu;){var e=Fu.effectTag;0!=(256&e)&&nu(Fu.alternate,Fu),0==(512&e)||Lu||(Lu=!0,qi(97,(function(){return vl(),null}))),Fu=Fu.nextEffect}}function vl(){if(90!==Bu){var e=97<Bu?97:Bu;return Bu=90,Vi(e,yl)}}function yl(){if(null===Uu)return!1;var e=Uu;if(Uu=null,0!=(48&xu))throw Error(a(331));var t=xu;for(xu|=32,e=e.current.firstEffect;null!==e;){try{var n=e;if(0!=(512&n.effectTag))switch(n.tag){case 0:case 11:case 15:case 22:ru(5,n),iu(5,n)}}catch(t){if(null===e)throw Error(a(330));gl(e,t)}n=e.nextEffect,e.nextEffect=null,e=n}return xu=t,Ki(),!0}function ml(e,t,n){lo(e,t=hu(e,t=Ja(n,t),1073741823)),null!==(e=Yu(e,1073741823))&&Xu(e)}function gl(e,t){if(3===e.tag)ml(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){ml(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===zu||!zu.has(r))){lo(n,e=vu(n,e=Ja(t,e),1073741823)),null!==(n=Yu(n,1073741823))&&Xu(n);break}}n=n.return}}function bl(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),Ou===e&&Su===n?Cu===Eu||Cu===_u&&1073741823===ju&&Li()-Mu<500?nl(e,Su):Du=!0:Il(e,n)&&(0!==(t=e.lastPingedTime)&&t<n||(e.lastPingedTime=n,Xu(e)))}function wl(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(t=Hu(t=$u(),e,null)),null!==(e=Yu(e,t))&&Xu(e)}yu=function(e,t,n){var r=t.expirationTime;if(null!==e){var i=t.pendingProps;if(e.memoizedProps!==i||pi.current)Pa=!0;else{if(r<n){switch(Pa=!1,t.tag){case 3:La(t),Ta();break;case 5:if(Mo(t),4&t.mode&&1!==n&&i.hidden)return t.expirationTime=t.childExpirationTime=1,null;break;case 1:vi(t.type)&&bi(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value,i=t.type._context,si(Yi,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(r=t.child.childExpirationTime)&&r>=n?Wa(e,t,n):(si(Ro,1&Ro.current),null!==(t=Qa(e,t,n))?t.sibling:null);si(Ro,1&Ro.current);break;case 19:if(r=t.childExpirationTime>=n,0!=(64&e.effectTag)){if(r)return Ha(e,t,n);t.effectTag|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null),si(Ro,Ro.current),!r)return null}return Qa(e,t,n)}Pa=!1}}else Pa=!1;switch(t.expirationTime=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,i=hi(t,fi.current),no(t,n),i=Qo(null,t,r,e,i,n),t.effectTag|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,vi(r)){var o=!0;bi(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,oo(t);var u=r.getDerivedStateFromProps;"function"==typeof u&&vo(t,r,u,e),i.updater=yo,t.stateNode=i,i._reactInternalFiber=t,wo(t,r,e,n),t=za(null,t,r,!0,o,n)}else t.tag=0,Aa(null,t,i,n),t=t.child;return t;case 16:e:{if(i=t.elementType,null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),e=t.pendingProps,function(e){if(-1===e._status){e._status=0;var t=e._ctor;t=t(),e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}}(i),1!==i._status)throw i._result;switch(i=i._result,t.type=i,o=t.tag=function(e){if("function"==typeof e)return kl(e)?1:0;if(null!=e){if((e=e.$$typeof)===le)return 11;if(e===fe)return 14}return 2}(i),e=Qi(i,e),o){case 0:t=Ra(null,t,i,e,n);break e;case 1:t=Na(null,t,i,e,n);break e;case 11:t=Ia(null,t,i,e,n);break e;case 14:t=Da(null,t,i,Qi(i.type,e),r,n);break e}throw Error(a(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ra(e,t,r,i=t.elementType===r?i:Qi(r,i),n);case 1:return r=t.type,i=t.pendingProps,Na(e,t,r,i=t.elementType===r?i:Qi(r,i),n);case 3:if(La(t),r=t.updateQueue,null===e||null===r)throw Error(a(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,ao(e,t),co(t,r,null,n),(r=t.memoizedState.element)===i)Ta(),t=Qa(e,t,n);else{if((i=t.stateNode.hydrate)&&(_a=_n(t.stateNode.containerInfo.firstChild),wa=t,i=Ea=!0),i)for(n=So(t,null,r,n),t.child=n;n;)n.effectTag=-3&n.effectTag|1024,n=n.sibling;else Aa(e,t,r,n),Ta();t=t.child}return t;case 5:return Mo(t),null===e&&ka(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,u=i.children,gn(r,i)?u=null:null!==o&&gn(r,o)&&(t.effectTag|=16),Fa(e,t),4&t.mode&&1!==n&&i.hidden?(t.expirationTime=t.childExpirationTime=1,t=null):(Aa(e,t,u,n),t=t.child),t;case 6:return null===e&&ka(t),null;case 13:return Wa(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ko(t,null,r,n):Aa(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,Ia(e,t,r,i=t.elementType===r?i:Qi(r,i),n);case 7:return Aa(e,t,t.pendingProps,n),t.child;case 8:case 12:return Aa(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,u=t.memoizedProps,o=i.value;var l=t.type._context;if(si(Yi,l._currentValue),l._currentValue=o,null!==u)if(l=u.value,0===(o=Nr(l,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(l,o):1073741823))){if(u.children===i.children&&!pi.current){t=Qa(e,t,n);break e}}else for(null!==(l=t.child)&&(l.return=t);null!==l;){var s=l.dependencies;if(null!==s){u=l.child;for(var c=s.firstContext;null!==c;){if(c.context===r&&0!=(c.observedBits&o)){1===l.tag&&((c=uo(n,null)).tag=2,lo(l,c)),l.expirationTime<n&&(l.expirationTime=n),null!==(c=l.alternate)&&c.expirationTime<n&&(c.expirationTime=n),to(l.return,n),s.expirationTime<n&&(s.expirationTime=n);break}c=c.next}}else u=10===l.tag&&l.type===t.type?null:l.child;if(null!==u)u.return=l;else for(u=l;null!==u;){if(u===t){u=null;break}if(null!==(l=u.sibling)){l.return=u.return,u=l;break}u=u.return}l=u}Aa(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,no(t,n),r=r(i=ro(i,o.unstable_observedBits)),t.effectTag|=1,Aa(e,t,r,n),t.child;case 14:return o=Qi(i=t.type,t.pendingProps),Da(e,t,i,o=Qi(i.type,o),r,n);case 15:return Ma(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qi(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.effectTag|=2),t.tag=1,vi(r)?(e=!0,bi(t)):e=!1,no(t,n),go(t,r,i),wo(t,r,i,n),za(null,t,r,!0,e,n);case 19:return Ha(e,t,n)}throw Error(a(156,t.tag))};var _l=null,El=null;function xl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function Ol(e,t,n,r){return new xl(e,t,n,r)}function kl(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Sl(e,t){var n=e.alternate;return null===n?((n=Ol(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=e.childExpirationTime,n.expirationTime=e.expirationTime,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{expirationTime:t.expirationTime,firstContext:t.firstContext,responders:t.responders},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cl(e,t,n,r,i,o){var u=2;if(r=e,"function"==typeof e)kl(e)&&(u=1);else if("string"==typeof e)u=5;else e:switch(e){case ne:return Tl(n.children,i,o,t);case ue:u=8,i|=7;break;case re:u=8,i|=1;break;case ie:return(e=Ol(12,n,t,8|i)).elementType=ie,e.type=ie,e.expirationTime=o,e;case se:return(e=Ol(13,n,t,i)).type=se,e.elementType=se,e.expirationTime=o,e;case ce:return(e=Ol(19,n,t,i)).elementType=ce,e.expirationTime=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case oe:u=10;break e;case ae:u=9;break e;case le:u=11;break e;case fe:u=14;break e;case pe:u=16,r=null;break e;case de:u=22;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Ol(u,n,t,i)).elementType=e,t.type=r,t.expirationTime=o,t}function Tl(e,t,n,r){return(e=Ol(7,e,r,t)).expirationTime=n,e}function jl(e,t,n){return(e=Ol(6,e,null,t)).expirationTime=n,e}function Pl(e,t,n){return(t=Ol(4,null!==e.children?e.children:[],e.key,t)).expirationTime=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Al(e,t,n){this.tag=t,this.current=null,this.containerInfo=e,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Il(e,t){var n=e.firstSuspendedTime;return e=e.lastSuspendedTime,0!==n&&n>=t&&e<=t}function Dl(e,t){var n=e.firstSuspendedTime,r=e.lastSuspendedTime;n<t&&(e.firstSuspendedTime=t),(r>t||0===n)&&(e.lastSuspendedTime=t),t<=e.lastPingedTime&&(e.lastPingedTime=0),t<=e.lastExpiredTime&&(e.lastExpiredTime=0)}function Ml(e,t){t>e.firstPendingTime&&(e.firstPendingTime=t);var n=e.firstSuspendedTime;0!==n&&(t>=n?e.firstSuspendedTime=e.lastSuspendedTime=e.nextKnownPendingLevel=0:t>=e.lastSuspendedTime&&(e.lastSuspendedTime=t+1),t>e.nextKnownPendingLevel&&(e.nextKnownPendingLevel=t))}function Fl(e,t){var n=e.lastExpiredTime;(0===n||n>t)&&(e.lastExpiredTime=t)}function Rl(e,t,n,r){var i=t.current,o=$u(),u=po.suspense;o=Hu(o,i,u);e:if(n){t:{if(Ze(n=n._reactInternalFiber)!==n||1!==n.tag)throw Error(a(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(vi(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(null!==l);throw Error(a(171))}if(1===n.tag){var s=n.type;if(vi(s)){n=gi(n,s,l);break e}}n=l}else n=ci;return null===t.context?t.context=n:t.pendingContext=n,(t=uo(o,u)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),lo(i,t),Qu(i,o),o}function Nl(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function zl(e,t){null!==(e=e.memoizedState)&&null!==e.dehydrated&&e.retryTime<t&&(e.retryTime=t)}function Ll(e,t){zl(e,t),(e=e.alternate)&&zl(e,t)}function Ul(e,t,n){var r=new Al(e,t,n=null!=n&&!0===n.hydrate),i=Ol(3,null,null,2===t?7:1===t?3:0);r.current=i,i.stateNode=r,oo(i),e[Sn]=r.current,n&&0!==t&&function(e,t){var n=Je(t);St.forEach((function(e){ht(e,t,n)})),Ct.forEach((function(e){ht(e,t,n)}))}(0,9===e.nodeType?e:e.ownerDocument),this._internalRoot=r}function Bl(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Vl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o._internalRoot;if("function"==typeof i){var u=i;i=function(){var e=Nl(a);u.call(e)}}Rl(t,a,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Ul(e,0,t?{hydrate:!0}:void 0)}(n,r),a=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=Nl(a);l.call(e)}}tl((function(){Rl(t,a,e,i)}))}return Nl(a)}function ql(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:te,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Wl(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Bl(t))throw Error(a(200));return ql(e,t,null,n)}Ul.prototype.render=function(e){Rl(e,this._internalRoot,null,null)},Ul.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Rl(null,e,null,(function(){t[Sn]=null}))},vt=function(e){if(13===e.tag){var t=Hi($u(),150,100);Qu(e,t),Ll(e,t)}},yt=function(e){13===e.tag&&(Qu(e,3),Ll(e,3))},mt=function(e){if(13===e.tag){var t=$u();Qu(e,t=Hu(t,e,null)),Ll(e,t)}},T=function(e,t,n){switch(t){case"input":if(ke(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pn(r);if(!i)throw Error(a(90));_e(r),ke(r,i)}}}break;case"textarea":Ie(e,n);break;case"select":null!=(t=n.value)&&je(e,!!n.multiple,t,!1)}},M=el,F=function(e,t,n,r,i){var o=xu;xu|=4;try{return Vi(98,e.bind(null,t,n,r,i))}finally{0===(xu=o)&&Ki()}},R=function(){0==(49&xu)&&(function(){if(null!==Vu){var e=Vu;Vu=null,e.forEach((function(e,t){Fl(t,e),Xu(t)})),Ki()}}(),vl())},N=function(e,t){var n=xu;xu|=2;try{return e(t)}finally{0===(xu=n)&&Ki()}};var Kl,$l,Hl={Events:[Tn,jn,Pn,S,x,Nn,function(e){it(e,Rn)},I,D,Xt,ut,vl,{current:!1}]};$l=(Kl={findFiberByHostInstance:Cn,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"}).findFiberByHostInstance,function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled||!t.supportsFiber)return!0;try{var n=t.inject(e);_l=function(e){try{t.onCommitFiberRoot(n,e,void 0,64==(64&e.current.effectTag))}catch(e){}},El=function(e){try{t.onCommitFiberUnmount(n,e)}catch(e){}}}catch(e){}}(i({},Kl,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=nt(e))?null:e.stateNode},findFiberByHostInstance:function(e){return $l?$l(e):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null})),t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hl,t.createPortal=Wl,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternalFiber;if(void 0===t){if("function"==typeof e.render)throw Error(a(188));throw Error(a(268,Object.keys(e)))}return e=null===(e=nt(t))?null:e.stateNode},t.flushSync=function(e,t){if(0!=(48&xu))throw Error(a(187));var n=xu;xu|=1;try{return Vi(99,e.bind(null,t))}finally{xu=n,Ki()}},t.hydrate=function(e,t,n){if(!Bl(t))throw Error(a(200));return Vl(null,e,t,!0,n)},t.render=function(e,t,n){if(!Bl(t))throw Error(a(200));return Vl(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Bl(e))throw Error(a(40));return!!e._reactRootContainer&&(tl((function(){Vl(null,null,e,!1,(function(){e._reactRootContainer=null,e[Sn]=null}))})),!0)},t.unstable_batchedUpdates=el,t.unstable_createPortal=function(e,t){return Wl(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bl(n))throw Error(a(200));if(null==e||void 0===e._reactInternalFiber)throw Error(a(38));return Vl(e,t,n,!1,r)},t.version="16.14.0"},function(e,t,n){"use strict";e.exports=n(63)},function(e,t,n){"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r,i,o,a,u;if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,s=null,c=function(){if(null!==l)try{var e=t.unstable_now();l(!0,e),l=null}catch(e){throw setTimeout(c,0),e}},f=Date.now();t.unstable_now=function(){return Date.now()-f},r=function(e){null!==l?setTimeout(r,0,e):(l=e,setTimeout(c,0))},i=function(e,t){s=setTimeout(e,t)},o=function(){clearTimeout(s)},a=function(){return!1},u=t.unstable_forceFrameRate=function(){}}else{var p=window.performance,d=window.Date,h=window.setTimeout,v=window.clearTimeout;if("undefined"!=typeof console){var y=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof p&&"function"==typeof p.now)t.unstable_now=function(){return p.now()};else{var m=d.now();t.unstable_now=function(){return d.now()-m}}var g=!1,b=null,w=-1,_=5,E=0;a=function(){return t.unstable_now()>=E},u=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):_=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,O=x.port2;x.port1.onmessage=function(){if(null!==b){var e=t.unstable_now();E=e+_;try{b(!0,e)?O.postMessage(null):(g=!1,b=null)}catch(e){throw O.postMessage(null),e}}else g=!1},r=function(e){b=e,g||(g=!0,O.postMessage(null))},i=function(e,n){w=h((function(){e(t.unstable_now())}),n)},o=function(){v(w),w=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<T(i,t)))break e;e[r]=t,e[n]=i,n=r}}function S(e){return void 0===(e=e[0])?null:e}function C(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,a=e[o],u=o+1,l=e[u];if(void 0!==a&&0>T(a,n))void 0!==l&&0>T(l,a)?(e[r]=l,e[u]=n,r=u):(e[r]=a,e[o]=n,r=o);else{if(!(void 0!==l&&0>T(l,n)))break e;e[r]=l,e[u]=n,r=u}}}return t}return null}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var j=[],P=[],A=1,I=null,D=3,M=!1,F=!1,R=!1;function N(e){for(var t=S(P);null!==t;){if(null===t.callback)C(P);else{if(!(t.startTime<=e))break;C(P),t.sortIndex=t.expirationTime,k(j,t)}t=S(P)}}function z(e){if(R=!1,N(e),!F)if(null!==S(j))F=!0,r(L);else{var t=S(P);null!==t&&i(z,t.startTime-e)}}function L(e,n){F=!1,R&&(R=!1,o()),M=!0;var r=D;try{for(N(n),I=S(j);null!==I&&(!(I.expirationTime>n)||e&&!a());){var u=I.callback;if(null!==u){I.callback=null,D=I.priorityLevel;var l=u(I.expirationTime<=n);n=t.unstable_now(),"function"==typeof l?I.callback=l:I===S(j)&&C(j),N(n)}else C(j);I=S(j)}if(null!==I)var s=!0;else{var c=S(P);null!==c&&i(z,c.startTime-n),s=!1}return s}finally{I=null,D=r,M=!1}}function U(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var B=u;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){F||M||(F=!0,r(L))},t.unstable_getCurrentPriorityLevel=function(){return D},t.unstable_getFirstCallbackNode=function(){return S(j)},t.unstable_next=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=B,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},t.unstable_scheduleCallback=function(e,n,a){var u=t.unstable_now();if("object"==typeof a&&null!==a){var l=a.delay;l="number"==typeof l&&0<l?u+l:u,a="number"==typeof a.timeout?a.timeout:U(e)}else a=U(e),l=u;return e={id:A++,callback:n,priorityLevel:e,startTime:l,expirationTime:a=l+a,sortIndex:-1},l>u?(e.sortIndex=l,k(P,e),null===S(j)&&e===S(P)&&(R?o():R=!0,i(z,l-u))):(e.sortIndex=a,k(j,e),F||M||(F=!0,r(L))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();N(e);var n=S(j);return n!==I&&null!==I&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<I.expirationTime||a()},t.unstable_wrapCallback=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}},function(e,t,n){"use strict";t.a=function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}},function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var r="/",i="||"},,function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var l,s=[],c=!1,f=-1;function p(){c&&l&&(c=!1,l.length?s=l.concat(s):f=-1,s.length&&d())}function d(){if(!c){var e=u(p);c=!0;for(var t=s.length;t;){for(l=s,s=[];++f<t;)l&&l[f].run();f=-1,t=s.length}l=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},,,function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function i(e,t,n){i.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function l(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function s(e){var t=void 0===e?"undefined":x(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function c(e,t,n,r,f,p,d){d=d||[];var h=(f=f||[]).slice(0);if(void 0!==p){if(r){if("function"==typeof r&&r(h,p))return;if("object"===(void 0===r?"undefined":x(r))){if(r.prefilter&&r.prefilter(h,p))return;if(r.normalize){var v=r.normalize(h,p,e,t);v&&(e=v[0],t=v[1])}}}h.push(p)}"regexp"===s(e)&&"regexp"===s(t)&&(e=e.toString(),t=t.toString());var y=void 0===e?"undefined":x(e),m=void 0===t?"undefined":x(t),g="undefined"!==y||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),b="undefined"!==m||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!g&&b)n(new o(h,t));else if(!b&&g)n(new a(h,e));else if(s(e)!==s(t))n(new i(h,e,t));else if("date"===s(e)&&e-t!=0)n(new i(h,e,t));else if("object"===y&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&n(new i(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?n(new u(h,w,new a(void 0,e[w]))):c(e[w],t[w],n,r,h,w,d);for(;w<t.length;)n(new u(h,w,new o(void 0,t[w++])))}else{var _=Object.keys(e),E=Object.keys(t);_.forEach((function(i,o){var a=E.indexOf(i);a>=0?(c(e[i],t[i],n,r,h,i,d),E=l(E,a)):c(e[i],void 0,n,r,h,i,d)})),E.forEach((function(e){c(void 0,t[e],n,r,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||n(new i(h,e,t)))}function f(e,t,n,r){return r=r||[],c(e,t,(function(e){e&&r.push(e)}),n),r.length?r:void 0}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,i=-1,o=n.path?n.path.length-1:0;++i<o;)void 0===r[n.path[i]]&&(r[n.path[i]]="number"==typeof n.path[i]?[]:{}),r=r[n.path[i]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var i,o=t[n],a=r.path.length-1;for(i=0;i<a;i++)o=o[r.path[i]];switch(r.kind){case"A":e(o[r.path[i]],r.index,r.item);break;case"D":delete o[r.path[i]];break;case"E":case"N":o[r.path[i]]=r.rhs}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":t=l(t,n);break;case"E":case"N":t[n]=r.rhs}return t}(n.path?r[n.path[i]]:r,n.index,n.item);break;case"D":delete r[n.path[i]];break;case"E":case"N":r[n.path[i]]=n.rhs}}}function d(e){return"color: "+S[e].color+"; font-weight: bold"}function h(e,t,n,r){var i=f(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}i?i.forEach((function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,i=e.rhs,o=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",i];case"N":return[n.join("."),i];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+o+"]",a];default:return[]}}(e);n.log.apply(n,["%c "+S[t].text,d(t)].concat(O(r)))})):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function v(e,t,n,r){switch(void 0===e?"undefined":x(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,O(n)):e[r];case"function":return e(t);default:return e}}function y(e,t){var n=t.logger,r=t.actionTransformer,i=t.titleFormatter,o=void 0===i?function(e){var t=e.timestamp,n=e.duration;return function(e,r,i){var o=["action"];return o.push("%c"+String(e.type)),t&&o.push("%c@ "+r),n&&o.push("%c(in "+i.toFixed(2)+" ms)"),o.join(" ")}}(t):i,a=t.collapsed,u=t.colors,l=t.level,s=t.diff,c=void 0===t.titleFormatter;e.forEach((function(i,f){var p=i.started,d=i.startedTime,y=i.action,m=i.prevState,g=i.error,b=i.took,w=i.nextState,E=e[f+1];E&&(w=E.prevState,b=E.started-p);var x=r(y),O="function"==typeof a?a((function(){return w}),y,i):a,k=_(d),S=u.title?"color: "+u.title(x)+";":"",C=["color: gray; font-weight: lighter;"];C.push(S),t.timestamp&&C.push("color: gray; font-weight: lighter;"),t.duration&&C.push("color: gray; font-weight: lighter;");var T=o(x,k,b);try{O?u.title&&c?n.groupCollapsed.apply(n,["%c "+T].concat(C)):n.groupCollapsed(T):u.title&&c?n.group.apply(n,["%c "+T].concat(C)):n.group(T)}catch(e){n.log(T)}var j=v(l,x,[m],"prevState"),P=v(l,x,[x],"action"),A=v(l,x,[g,m],"error"),I=v(l,x,[w],"nextState");if(j)if(u.prevState){var D="color: "+u.prevState(m)+"; font-weight: bold";n[j]("%c prev state",D,m)}else n[j]("prev state",m);if(P)if(u.action){var M="color: "+u.action(x)+"; font-weight: bold";n[P]("%c action    ",M,x)}else n[P]("action    ",x);if(g&&A)if(u.error){var F="color: "+u.error(g,m)+"; font-weight: bold;";n[A]("%c error     ",F,g)}else n[A]("error     ",g);if(I)if(u.nextState){var R="color: "+u.nextState(w)+"; font-weight: bold";n[I]("%c next state",R,w)}else n[I]("next state",w);s&&h(m,w,n,O);try{n.groupEnd()}catch(e){n.log("—— log end ——")}}))}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},C,e),n=t.logger,r=t.stateTransformer,i=t.errorTransformer,o=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var n=e.getState;return function(e){return function(s){if("function"==typeof o&&!o(n,s))return e(s);var c={};l.push(c),c.started=E.now(),c.startedTime=new Date,c.prevState=r(n()),c.action=s;var f=void 0;if(a)try{f=e(s)}catch(e){c.error=i(e)}else f=e(s);c.took=E.now()-c.started,c.nextState=r(n());var p=t.diff&&"function"==typeof u?u(n,s):t.diff;if(y(l,Object.assign({},t,{diff:p})),l.length=0,c.error)throw c.error;return f}}}}var g,b,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},_=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},E="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},k=[];g="object"===(void 0===e?"undefined":x(e))&&e?e:"undefined"!=typeof window?window:{},(b=g.DeepDiff)&&k.push((function(){void 0!==b&&g.DeepDiff===f&&(g.DeepDiff=b,b=void 0)})),n(i,r),n(o,r),n(a,r),n(u,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&c(e,t,(function(r){n&&!n(e,t,r)||p(e,t,r)}))},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,i,o=e;for(i=n.path.length-1,r=0;r<i;r++)void 0===o[n.path[r]]&&(o[n.path[r]]={}),o=o[n.path[r]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var i,o=t[n],a=r.path.length-1;for(i=0;i<a;i++)o=o[r.path[i]];switch(r.kind){case"A":e(o[r.path[i]],r.index,r.item);break;case"D":case"E":o[r.path[i]]=r.lhs;break;case"N":delete o[r.path[i]]}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":case"E":t[n]=r.lhs;break;case"N":t=l(t,n)}return t}(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==b},enumerable:!0},noConflict:{value:function(){return k&&(k.forEach((function(e){e()})),k=null),f},enumerable:!0}});var S={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},C={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?m()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=C,t.createLogger=m,t.logger=T,t.default=T,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n(36))},,,function(e,t,n){e.exports=function e(t){"use strict";var n=/^\0+/g,r=/[\0\r\f]/g,i=/: */g,o=/zoo|gra/,a=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,l=/ +\s*(?![^(]*[)])/g,s=/ *[\0] */g,c=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,h=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,m=/\s+(?=[{\];=:>])/g,g=/([[}=:>])\s+/g,b=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,_=/([^\(])(:+) */g,E=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,k=/-self|flex-/g,S=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,T=/([^-])(image-set\()/,j="-webkit-",P="-moz-",A="-ms-",I=59,D=125,M=123,F=40,R=41,N=10,z=13,L=32,U=45,B=42,V=44,q=58,W=47,K=1,$=1,H=0,Q=1,Y=1,G=1,X=0,J=0,Z=0,ee=[],te=[],ne=0,re=null,ie=0,oe=1,ae="",ue="",le="";function se(e,t,i,o,a){for(var u,l,c=0,f=0,p=0,d=0,m=0,g=0,b=0,w=0,E=0,O=0,k=0,S=0,C=0,T=0,P=0,A=0,X=0,te=0,re=0,fe=i.length,me=fe-1,ge="",be="",we="",_e="",Ee="",xe="";P<fe;){if(b=i.charCodeAt(P),P===me&&f+d+p+c!==0&&(0!==f&&(b=f===W?N:W),d=p=c=0,fe++,me++),f+d+p+c===0){if(P===me&&(A>0&&(be=be.replace(r,"")),be.trim().length>0)){switch(b){case L:case 9:case I:case z:case N:break;default:be+=i.charAt(P)}b=I}if(1===X)switch(b){case M:case D:case I:case 34:case 39:case F:case R:case V:X=0;case 9:case z:case N:case L:break;default:for(X=0,re=P,m=b,P--,b=I;re<fe;)switch(i.charCodeAt(re++)){case N:case z:case I:++P,b=m,re=fe;break;case q:A>0&&(++P,b=m);case M:re=fe}}switch(b){case M:for(m=(be=be.trim()).charCodeAt(0),k=1,re=++P;P<fe;){switch(b=i.charCodeAt(P)){case M:k++;break;case D:k--;break;case W:switch(g=i.charCodeAt(P+1)){case B:case W:P=ye(g,P,me,i)}break;case 91:b++;case F:b++;case 34:case 39:for(;P++<me&&i.charCodeAt(P)!==b;);}if(0===k)break;P++}switch(we=i.substring(re,P),0===m&&(m=(be=be.replace(n,"").trim()).charCodeAt(0)),m){case 64:switch(A>0&&(be=be.replace(r,"")),g=be.charCodeAt(1)){case 100:case 109:case 115:case U:u=t;break;default:u=ee}if(re=(we=se(t,u,we,g,a+1)).length,Z>0&&0===re&&(re=be.length),ne>0&&(l=ve(3,we,u=ce(ee,be,te),t,$,K,re,g,a,o),be=u.join(""),void 0!==l&&0===(re=(we=l.trim()).length)&&(g=0,we="")),re>0)switch(g){case 115:be=be.replace(x,he);case 100:case 109:case U:we=be+"{"+we+"}";break;case 107:we=(be=be.replace(h,"$1 $2"+(oe>0?ae:"")))+"{"+we+"}",we=1===Y||2===Y&&de("@"+we,3)?"@"+j+we+"@"+we:"@"+we;break;default:we=be+we,112===o&&(_e+=we,we="")}else we="";break;default:we=se(t,ce(t,be,te),we,o,a+1)}Ee+=we,S=0,X=0,T=0,A=0,te=0,C=0,be="",we="",b=i.charCodeAt(++P);break;case D:case I:if((re=(be=(A>0?be.replace(r,""):be).trim()).length)>1)switch(0===T&&((m=be.charCodeAt(0))===U||m>96&&m<123)&&(re=(be=be.replace(" ",":")).length),ne>0&&void 0!==(l=ve(1,be,t,e,$,K,_e.length,o,a,o))&&0===(re=(be=l.trim()).length)&&(be="\0\0"),m=be.charCodeAt(0),g=be.charCodeAt(1),m){case 0:break;case 64:if(105===g||99===g){xe+=be+i.charAt(P);break}default:if(be.charCodeAt(re-1)===q)break;_e+=pe(be,m,g,be.charCodeAt(2))}S=0,X=0,T=0,A=0,te=0,be="",b=i.charCodeAt(++P)}}switch(b){case z:case N:if(f+d+p+c+J===0)switch(O){case R:case 39:case 34:case 64:case 126:case 62:case B:case 43:case W:case U:case q:case V:case I:case M:case D:break;default:T>0&&(X=1)}f===W?f=0:Q+S===0&&107!==o&&be.length>0&&(A=1,be+="\0"),ne*ie>0&&ve(0,be,t,e,$,K,_e.length,o,a,o),K=1,$++;break;case I:case D:if(f+d+p+c===0){K++;break}default:switch(K++,ge=i.charAt(P),b){case 9:case L:if(d+c+f===0)switch(w){case V:case q:case 9:case L:ge="";break;default:b!==L&&(ge=" ")}break;case 0:ge="\\0";break;case 12:ge="\\f";break;case 11:ge="\\v";break;case 38:d+f+c===0&&Q>0&&(te=1,A=1,ge="\f"+ge);break;case 108:if(d+f+c+H===0&&T>0)switch(P-T){case 2:112===w&&i.charCodeAt(P-3)===q&&(H=w);case 8:111===E&&(H=E)}break;case q:d+f+c===0&&(T=P);break;case V:f+p+d+c===0&&(A=1,ge+="\r");break;case 34:case 39:0===f&&(d=d===b?0:0===d?b:d);break;case 91:d+f+p===0&&c++;break;case 93:d+f+p===0&&c--;break;case R:d+f+c===0&&p--;break;case F:if(d+f+c===0){if(0===S)switch(2*w+3*E){case 533:break;default:k=0,S=1}p++}break;case 64:f+p+d+c+T+C===0&&(C=1);break;case B:case W:if(d+c+p>0)break;switch(f){case 0:switch(2*b+3*i.charCodeAt(P+1)){case 235:f=W;break;case 220:re=P,f=B}break;case B:b===W&&w===B&&re+2!==P&&(33===i.charCodeAt(re+2)&&(_e+=i.substring(re,P+1)),ge="",f=0)}}if(0===f){if(Q+d+c+C===0&&107!==o&&b!==I)switch(b){case V:case 126:case 62:case 43:case R:case F:if(0===S){switch(w){case 9:case L:case N:case z:ge+="\0";break;default:ge="\0"+ge+(b===V?"":"\0")}A=1}else switch(b){case F:T+7===P&&108===w&&(T=0),S=++k;break;case R:0==(S=--k)&&(A=1,ge+="\0")}break;case 9:case L:switch(w){case 0:case M:case D:case I:case V:case 12:case 9:case L:case N:case z:break;default:0===S&&(A=1,ge+="\0")}}be+=ge,b!==L&&9!==b&&(O=b)}}E=w,w=b,P++}if(re=_e.length,Z>0&&0===re&&0===Ee.length&&0===t[0].length==0&&(109!==o||1===t.length&&(Q>0?ue:le)===t[0])&&(re=t.join(",").length+2),re>0){if(u=0===Q&&107!==o?function(e){for(var t,n,i=0,o=e.length,a=Array(o);i<o;++i){for(var u=e[i].split(s),l="",c=0,f=0,p=0,d=0,h=u.length;c<h;++c)if(!(0===(f=(n=u[c]).length)&&h>1)){if(p=l.charCodeAt(l.length-1),d=n.charCodeAt(0),t="",0!==c)switch(p){case B:case 126:case 62:case 43:case L:case F:break;default:t=" "}switch(d){case 38:n=t+ue;case 126:case 62:case 43:case L:case R:case F:break;case 91:n=t+n+ue;break;case q:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(G>0){n=t+n.substring(8,f-1);break}default:(c<1||u[c-1].length<1)&&(n=t+ue+n)}break;case V:t="";default:n=f>1&&n.indexOf(":")>0?t+n.replace(_,"$1"+ue+"$2"):t+n+ue}l+=n}a[i]=l.replace(r,"").trim()}return a}(t):t,ne>0&&void 0!==(l=ve(2,_e,u,e,$,K,re,o,a,o))&&0===(_e=l).length)return xe+_e+Ee;if(_e=u.join(",")+"{"+_e+"}",Y*H!=0){switch(2!==Y||de(_e,2)||(H=0),H){case 111:_e=_e.replace(y,":-moz-$1")+_e;break;case 112:_e=_e.replace(v,"::"+j+"input-$1")+_e.replace(v,"::-moz-$1")+_e.replace(v,":-ms-input-$1")+_e}H=0}}return xe+_e+Ee}function ce(e,t,n){var r=t.trim().split(c),i=r,o=r.length,a=e.length;switch(a){case 0:case 1:for(var u=0,l=0===a?"":e[0]+" ";u<o;++u)i[u]=fe(l,i[u],n,a).trim();break;default:u=0;var s=0;for(i=[];u<o;++u)for(var f=0;f<a;++f)i[s++]=fe(e[f]+" ",r[u],n,a).trim()}return i}function fe(e,t,n,r){var i=t,o=i.charCodeAt(0);switch(o<33&&(o=(i=i.trim()).charCodeAt(0)),o){case 38:switch(Q+r){case 0:case 1:if(0===e.trim().length)break;default:return i.replace(f,"$1"+e.trim())}break;case q:switch(i.charCodeAt(1)){case 103:if(G>0&&Q>0)return i.replace(p,"$1").replace(f,"$1"+le);break;default:return e.trim()+i.replace(f,"$1"+e.trim())}default:if(n*Q>0&&i.indexOf("\f")>0)return i.replace(f,(e.charCodeAt(0)===q?"":"$1")+e.trim())}return e+i}function pe(e,t,n,r){var s,c=0,f=e+";",p=2*t+3*n+4*r;if(944===p)return function(e){var t=e.length,n=e.indexOf(":",9)+1,r=e.substring(0,n).trim(),i=e.substring(n,t-1).trim();switch(e.charCodeAt(9)*oe){case 0:break;case U:if(110!==e.charCodeAt(10))break;default:var o=i.split((i="",u)),a=0;for(n=0,t=o.length;a<t;n=0,++a){for(var s=o[a],c=s.split(l);s=c[n];){var f=s.charCodeAt(0);if(1===oe&&(f>64&&f<90||f>96&&f<123||95===f||f===U&&s.charCodeAt(1)!==U))switch(isNaN(parseFloat(s))+(-1!==s.indexOf("("))){case 1:switch(s){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:s+=ae}}c[n++]=s}i+=(0===a?"":",")+c.join(" ")}}return i=r+i+";",1===Y||2===Y&&de(i,1)?j+i+i:i}(f);if(0===Y||2===Y&&!de(f,1))return f;switch(p){case 1015:return 97===f.charCodeAt(10)?j+f+f:f;case 951:return 116===f.charCodeAt(3)?j+f+f:f;case 963:return 110===f.charCodeAt(5)?j+f+f:f;case 1009:if(100!==f.charCodeAt(4))break;case 969:case 942:return j+f+f;case 978:return j+f+P+f+f;case 1019:case 983:return j+f+P+f+A+f+f;case 883:return f.charCodeAt(8)===U?j+f+f:f.indexOf("image-set(",11)>0?f.replace(T,"$1"+j+"$2")+f:f;case 932:if(f.charCodeAt(4)===U)switch(f.charCodeAt(5)){case 103:return j+"box-"+f.replace("-grow","")+j+f+A+f.replace("grow","positive")+f;case 115:return j+f+A+f.replace("shrink","negative")+f;case 98:return j+f+A+f.replace("basis","preferred-size")+f}return j+f+A+f+f;case 964:return j+f+A+"flex-"+f+f;case 1023:if(99!==f.charCodeAt(8))break;return s=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),j+"box-pack"+s+j+f+A+"flex-pack"+s+f;case 1005:return o.test(f)?f.replace(i,":"+j)+f.replace(i,":"+P)+f:f;case 1e3:switch(c=(s=f.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(c)){case 226:s=f.replace(E,"tb");break;case 232:s=f.replace(E,"tb-rl");break;case 220:s=f.replace(E,"lr");break;default:return f}return j+f+A+s+f;case 1017:if(-1===f.indexOf("sticky",9))return f;case 975:switch(c=(f=e).length-10,p=(s=(33===f.charCodeAt(c)?f.substring(0,c):f).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(s.charCodeAt(8)<111)break;case 115:f=f.replace(s,j+s)+";"+f;break;case 207:case 102:f=f.replace(s,j+(p>102?"inline-":"")+"box")+";"+f.replace(s,j+s)+";"+f.replace(s,A+s+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===U)switch(f.charCodeAt(6)){case 105:return s=f.replace("-items",""),j+f+j+"box-"+s+A+"flex-"+s+f;case 115:return j+f+A+"flex-item-"+f.replace(k,"")+f;default:return j+f+A+"flex-line-pack"+f.replace("align-content","").replace(k,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==U||122===f.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?pe(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):f.replace(s,j+s)+f.replace(s,P+s.replace("fill-",""))+f;break;case 962:if(f=j+f+(102===f.charCodeAt(5)?A+f:"")+f,n+r===211&&105===f.charCodeAt(13)&&f.indexOf("transform",10)>0)return f.substring(0,f.indexOf(";",27)+1).replace(a,"$1"+j+"$2")+f}return f}function de(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10),i=e.substring(n+1,e.length-1);return re(2!==t?r:r.replace(S,"$1"),i,t)}function he(e,t){var n=pe(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(O," or ($1)").substring(4):"("+t+")"}function ve(e,t,n,r,i,o,a,u,l,s){for(var c,f=0,p=t;f<ne;++f)switch(c=te[f].call(ge,e,p,n,r,i,o,a,u,l,s)){case void 0:case!1:case!0:case null:break;default:p=c}if(p!==t)return p}function ye(e,t,n,r){for(var i=t+1;i<n;++i)switch(r.charCodeAt(i)){case W:if(e===B&&r.charCodeAt(i-1)===B&&t+2!==i)return i+1;break;case N:if(e===W)return i+1}return i}function me(e){for(var t in e){var n=e[t];switch(t){case"keyframe":oe=0|n;break;case"global":G=0|n;break;case"cascade":Q=0|n;break;case"compress":X=0|n;break;case"semicolon":J=0|n;break;case"preserve":Z=0|n;break;case"prefix":re=null,n?"function"!=typeof n?Y=1:(Y=2,re=n):Y=0}}return me}function ge(t,n){if(void 0!==this&&this.constructor===ge)return e(t);var i=t,o=i.charCodeAt(0);o<33&&(o=(i=i.trim()).charCodeAt(0)),oe>0&&(ae=i.replace(d,91===o?"":"-")),o=1,1===Q?le=i:ue=i;var a,u=[le];ne>0&&void 0!==(a=ve(-1,n,u,u,$,K,0,0,0,0))&&"string"==typeof a&&(n=a);var l=se(ee,u,n,0,0);return ne>0&&void 0!==(a=ve(-2,l,u,u,$,K,l.length,0,0,0))&&"string"!=typeof(l=a)&&(o=0),ae="",le="",ue="",H=0,$=1,K=1,X*o==0?l:l.replace(r,"").replace(m,"").replace(g,"$1").replace(b,"$1").replace(w," ")}return ge.use=function e(t){switch(t){case void 0:case null:ne=te.length=0;break;default:if("function"==typeof t)te[ne++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else ie=0|!!t}return e},ge.set=me,void 0!==t&&me(t),ge}(null)},function(e,t,n){"use strict";var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function i(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(i=e[n],o=t[n],!(i===o||r(i)&&r(o)))return!1;var i,o;return!0}t.a=function(e,t){var n;void 0===t&&(t=i);var r,o=[],a=!1;return function(){for(var i=[],u=0;u<arguments.length;u++)i[u]=arguments[u];return a&&n===this&&t(i,o)||(r=e.apply(this,i),a=!0,n=this,o=i),r}}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(65);function i(e,t){if(e){if("string"==typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},function(e,t,n){"use strict";t.a=function(e){return"undefined"!=typeof Map&&e instanceof Map}},,,function(e,t,n){"use strict";let r;t.a=function(){return r||(r=angular.element(jQuery('[ng-controller="EditPostWidgetController"]')).scope())}},function(e,t,n){"use strict";var r=n(104),i=n.n(r),o=n(33),a=n.n(o),u=n(2),l=n.n(u),s=n(0),c=n.n(s),f=n(22),p=function(e){var t=e.onMouseDown;return c.a.createElement("span",{className:"Select-arrow",onMouseDown:t})};p.propTypes={onMouseDown:l.a.func};var d=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}],h=function(e){for(var t=0;t<d.length;t++)e=e.replace(d[t].letters,d[t].base);return e},v=function(e){return null!=e&&""!==e},y=function(e,t,n,r){return r.ignoreAccents&&(t=h(t)),r.ignoreCase&&(t=t.toLowerCase()),r.trimFilter&&(t=t.replace(/^\s+|\s+$/g,"")),n&&(n=n.map((function(e){return e[r.valueKey]}))),e.filter((function(e){if(n&&n.indexOf(e[r.valueKey])>-1)return!1;if(r.filterOption)return r.filterOption.call(void 0,e,t);if(!t)return!0;var i=e[r.valueKey],o=e[r.labelKey],a=v(i),u=v(o);if(!a&&!u)return!1;var l=a?String(i):null,s=u?String(o):null;return r.ignoreAccents&&(l&&"label"!==r.matchProp&&(l=h(l)),s&&"value"!==r.matchProp&&(s=h(s))),r.ignoreCase&&(l&&"label"!==r.matchProp&&(l=l.toLowerCase()),s&&"value"!==r.matchProp&&(s=s.toLowerCase())),"start"===r.matchPos?l&&"label"!==r.matchProp&&l.substr(0,t.length)===t||s&&"value"!==r.matchProp&&s.substr(0,t.length)===t:l&&"label"!==r.matchProp&&l.indexOf(t)>=0||s&&"value"!==r.matchProp&&s.indexOf(t)>=0}))},m=function(e){var t=e.focusedOption,n=e.focusOption,r=e.inputValue,i=e.instancePrefix,o=e.onFocus,u=e.onOptionRef,l=e.onSelect,s=e.optionClassName,f=e.optionComponent,p=e.optionRenderer,d=e.options,h=e.removeValue,v=e.selectValue,y=e.valueArray,m=e.valueKey,g=f;return d.map((function(e,f){var d=y&&y.some((function(t){return t[m]===e[m]})),b=e===t,w=a()(s,{"Select-option":!0,"is-selected":d,"is-focused":b,"is-disabled":e.disabled});return c.a.createElement(g,{className:w,focusOption:n,inputValue:r,instancePrefix:i,isDisabled:e.disabled,isFocused:b,isSelected:d,key:"option-"+f+"-"+e[m],onFocus:o,onSelect:l,option:e,optionIndex:f,ref:function(e){u(e,b)},removeValue:h,selectValue:v},p(e,f,r))}))};m.propTypes={focusOption:l.a.func,focusedOption:l.a.object,inputValue:l.a.string,instancePrefix:l.a.string,onFocus:l.a.func,onOptionRef:l.a.func,onSelect:l.a.func,optionClassName:l.a.string,optionComponent:l.a.func,optionRenderer:l.a.func,options:l.a.array,removeValue:l.a.func,selectValue:l.a.func,valueArray:l.a.array,valueKey:l.a.string};var g=function(e){e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName&&"href"in e.target&&(e.target.target?window.open(e.target.href,e.target.target):window.location.href=e.target.href)},b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=(function(){function e(e){this.value=e}function t(t){var n,r;function i(n,r){try{var a=t[n](r),u=a.value;u instanceof e?Promise.resolve(u.value).then((function(e){i("next",e)}),(function(e){i("throw",e)})):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?i(n.key,n.arg):r=null}this._invoke=function(e,t){return new Promise((function(o,a){var u={key:e,arg:t,resolve:o,reject:a,next:null};r?r=r.next=u:(n=r=u,i(e,t))}))},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},k=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},S=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},C=function(e){function t(e){w(this,t);var n=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMouseDown=n.handleMouseDown.bind(n),n.handleMouseEnter=n.handleMouseEnter.bind(n),n.handleMouseMove=n.handleMouseMove.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.onFocus=n.onFocus.bind(n),n}return O(t,e),_(t,[{key:"handleMouseDown",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onSelect(this.props.option,e)}},{key:"handleMouseEnter",value:function(e){this.onFocus(e)}},{key:"handleMouseMove",value:function(e){this.onFocus(e)}},{key:"handleTouchEnd",value:function(e){this.dragging||this.handleMouseDown(e)}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"onFocus",value:function(e){this.props.isFocused||this.props.onFocus(this.props.option,e)}},{key:"render",value:function(){var e=this.props,t=e.option,n=e.instancePrefix,r=e.optionIndex,i=a()(this.props.className,t.className);return t.disabled?c.a.createElement("div",{className:i,onMouseDown:g,onClick:g},this.props.children):c.a.createElement("div",{className:i,style:t.style,role:"option","aria-label":t.label,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,id:n+"-option-"+r,title:t.title},this.props.children)}}]),t}(c.a.Component);C.propTypes={children:l.a.node,className:l.a.string,instancePrefix:l.a.string.isRequired,isDisabled:l.a.bool,isFocused:l.a.bool,isSelected:l.a.bool,onFocus:l.a.func,onSelect:l.a.func,onUnfocus:l.a.func,option:l.a.object.isRequired,optionIndex:l.a.number};var T=function(e){function t(e){w(this,t);var n=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMouseDown=n.handleMouseDown.bind(n),n.onRemove=n.onRemove.bind(n),n.handleTouchEndRemove=n.handleTouchEndRemove.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n}return O(t,e),_(t,[{key:"handleMouseDown",value:function(e){if("mousedown"!==e.type||0===e.button)return this.props.onClick?(e.stopPropagation(),void this.props.onClick(this.props.value,e)):void(this.props.value.href&&e.stopPropagation())}},{key:"onRemove",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onRemove(this.props.value)}},{key:"handleTouchEndRemove",value:function(e){this.dragging||this.onRemove(e)}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"renderRemoveIcon",value:function(){if(!this.props.disabled&&this.props.onRemove)return c.a.createElement("span",{className:"Select-value-icon","aria-hidden":"true",onMouseDown:this.onRemove,onTouchEnd:this.handleTouchEndRemove,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove},"×")}},{key:"renderLabel",value:function(){return this.props.onClick||this.props.value.href?c.a.createElement("a",{className:"Select-value-label",href:this.props.value.href,target:this.props.value.target,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleMouseDown},this.props.children):c.a.createElement("span",{className:"Select-value-label",role:"option","aria-selected":"true",id:this.props.id},this.props.children)}},{key:"render",value:function(){return c.a.createElement("div",{className:a()("Select-value",this.props.value.disabled?"Select-value-disabled":"",this.props.value.className),style:this.props.value.style,title:this.props.value.title},this.renderRemoveIcon(),this.renderLabel())}}]),t}(c.a.Component);T.propTypes={children:l.a.node,disabled:l.a.bool,id:l.a.string,onClick:l.a.func,onRemove:l.a.func,value:l.a.object.isRequired};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var j=function(e){return"string"==typeof e?e:null!==e&&JSON.stringify(e)||""},P=l.a.oneOfType([l.a.string,l.a.node]),A=l.a.oneOfType([l.a.string,l.a.number]),I=1,D=function(e,t){var n=void 0===e?"undefined":b(e);if("string"!==n&&"number"!==n&&"boolean"!==n)return e;var r=t.options,i=t.valueKey;if(r)for(var o=0;o<r.length;o++)if(String(r[o][i])===String(e))return r[o]},M=function(e,t){return!e||(t?0===e.length:0===Object.keys(e).length)},F=function(e){function t(e){w(this,t);var n=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return["clearValue","focusOption","getOptionLabel","handleInputBlur","handleInputChange","handleInputFocus","handleInputValueChange","handleKeyDown","handleMenuScroll","handleMouseDown","handleMouseDownOnArrow","handleMouseDownOnMenu","handleTouchEnd","handleTouchEndClearValue","handleTouchMove","handleTouchOutside","handleTouchStart","handleValueClick","onOptionRef","removeValue","selectValue"].forEach((function(e){return n[e]=n[e].bind(n)})),n.state={inputValue:"",isFocused:!1,isOpen:!1,isPseudoFocused:!1,required:!1},n}return O(t,e),_(t,[{key:"componentWillMount",value:function(){this._instancePrefix="react-select-"+(this.props.instanceId||++I)+"-";var e=this.getValueArray(this.props.value);this.props.required&&this.setState({required:M(e[0],this.props.multi)})}},{key:"componentDidMount",value:function(){void 0!==this.props.autofocus&&"undefined"!=typeof console&&console.warn("Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0"),(this.props.autoFocus||this.props.autofocus)&&this.focus()}},{key:"componentWillReceiveProps",value:function(e){var t=this.getValueArray(e.value,e);e.required?this.setState({required:M(t[0],e.multi)}):this.props.required&&this.setState({required:!1}),this.state.inputValue&&this.props.value!==e.value&&e.onSelectResetsInput&&this.setState({inputValue:this.handleInputValueChange("")})}},{key:"componentDidUpdate",value:function(e,t){if(this.menu&&this.focused&&this.state.isOpen&&!this.hasScrolledToOption){var n=Object(f.findDOMNode)(this.focused),r=Object(f.findDOMNode)(this.menu),i=r.scrollTop,o=i+r.offsetHeight,a=n.offsetTop,u=a+n.offsetHeight;(i>a||o<u)&&(r.scrollTop=n.offsetTop),this.hasScrolledToOption=!0}else this.state.isOpen||(this.hasScrolledToOption=!1);if(this._scrollToFocusedOptionOnUpdate&&this.focused&&this.menu){this._scrollToFocusedOptionOnUpdate=!1;var l=Object(f.findDOMNode)(this.focused),s=Object(f.findDOMNode)(this.menu),c=l.getBoundingClientRect(),p=s.getBoundingClientRect();c.bottom>p.bottom?s.scrollTop=l.offsetTop+l.clientHeight-s.offsetHeight:c.top<p.top&&(s.scrollTop=l.offsetTop)}if(this.props.scrollMenuIntoView&&this.menuContainer){var d=this.menuContainer.getBoundingClientRect();window.innerHeight<d.bottom+this.props.menuBuffer&&window.scrollBy(0,d.bottom+this.props.menuBuffer-window.innerHeight)}if(e.disabled!==this.props.disabled&&(this.setState({isFocused:!1}),this.closeMenu()),t.isOpen!==this.state.isOpen){this.toggleTouchOutsideEvent(this.state.isOpen);var h=this.state.isOpen?this.props.onOpen:this.props.onClose;h&&h()}}},{key:"componentWillUnmount",value:function(){this.toggleTouchOutsideEvent(!1)}},{key:"toggleTouchOutsideEvent",value:function(e){var t=e?document.addEventListener?"addEventListener":"attachEvent":document.removeEventListener?"removeEventListener":"detachEvent",n=document.addEventListener?"":"on";document[t](n+"touchstart",this.handleTouchOutside),document[t](n+"mousedown",this.handleTouchOutside)}},{key:"handleTouchOutside",value:function(e){this.wrapper&&!this.wrapper.contains(e.target)&&this.closeMenu()}},{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"blurInput",value:function(){this.input&&this.input.blur()}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"handleTouchEnd",value:function(e){this.dragging||this.handleMouseDown(e)}},{key:"handleTouchEndClearValue",value:function(e){this.dragging||this.clearValue(e)}},{key:"handleMouseDown",value:function(e){if(!(this.props.disabled||"mousedown"===e.type&&0!==e.button))if("INPUT"!==e.target.tagName){if(e.preventDefault(),!this.props.searchable)return this.focus(),this.setState({isOpen:!this.state.isOpen,focusedOption:null});if(this.state.isFocused){this.focus();var t=this.input,n=!0;"function"==typeof t.getInput&&(t=t.getInput()),t.value="",this._focusAfterClear&&(n=!1,this._focusAfterClear=!1),this.setState({isOpen:n,isPseudoFocused:!1,focusedOption:null})}else this._openAfterFocus=this.props.openOnClick,this.focus(),this.setState({focusedOption:null})}else this.state.isFocused?this.state.isOpen||this.setState({isOpen:!0,isPseudoFocused:!1,focusedOption:null}):(this._openAfterFocus=this.props.openOnClick,this.focus())}},{key:"handleMouseDownOnArrow",value:function(e){this.props.disabled||"mousedown"===e.type&&0!==e.button||(this.state.isOpen?(e.stopPropagation(),e.preventDefault(),this.closeMenu()):this.setState({isOpen:!0}))}},{key:"handleMouseDownOnMenu",value:function(e){this.props.disabled||"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this._openAfterFocus=!0,this.focus())}},{key:"closeMenu",value:function(){this.props.onCloseResetsInput?this.setState({inputValue:this.handleInputValueChange(""),isOpen:!1,isPseudoFocused:this.state.isFocused&&!this.props.multi}):this.setState({isOpen:!1,isPseudoFocused:this.state.isFocused&&!this.props.multi}),this.hasScrolledToOption=!1}},{key:"handleInputFocus",value:function(e){if(!this.props.disabled){var t=this.state.isOpen||this._openAfterFocus||this.props.openOnFocus;t=!this._focusAfterClear&&t,this.props.onFocus&&this.props.onFocus(e),this.setState({isFocused:!0,isOpen:!!t}),this._focusAfterClear=!1,this._openAfterFocus=!1}}},{key:"handleInputBlur",value:function(e){if(!this.menu||this.menu!==document.activeElement&&!this.menu.contains(document.activeElement)){this.props.onBlur&&this.props.onBlur(e);var t={isFocused:!1,isOpen:!1,isPseudoFocused:!1};this.props.onBlurResetsInput&&(t.inputValue=this.handleInputValueChange("")),this.setState(t)}else this.focus()}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.state.inputValue!==e.target.value&&(t=this.handleInputValueChange(t)),this.setState({inputValue:t,isOpen:!0,isPseudoFocused:!1})}},{key:"setInputValue",value:function(e){if(this.props.onInputChange){var t=this.props.onInputChange(e);null!=t&&"object"!==(void 0===t?"undefined":b(t))&&(e=""+t)}this.setState({inputValue:e})}},{key:"handleInputValueChange",value:function(e){if(this.props.onInputChange){var t=this.props.onInputChange(e);null!=t&&"object"!==(void 0===t?"undefined":b(t))&&(e=""+t)}return e}},{key:"handleKeyDown",value:function(e){if(!(this.props.disabled||"function"==typeof this.props.onInputKeyDown&&(this.props.onInputKeyDown(e),e.defaultPrevented)))switch(e.keyCode){case 8:!this.state.inputValue&&this.props.backspaceRemoves&&(e.preventDefault(),this.popValue());break;case 9:if(e.shiftKey||!this.state.isOpen||!this.props.tabSelectsValue)break;e.preventDefault(),this.selectFocusedOption();break;case 13:e.preventDefault(),e.stopPropagation(),this.state.isOpen?this.selectFocusedOption():this.focusNextOption();break;case 27:e.preventDefault(),this.state.isOpen?(this.closeMenu(),e.stopPropagation()):this.props.clearable&&this.props.escapeClearsValue&&(this.clearValue(e),e.stopPropagation());break;case 32:if(this.props.searchable)break;if(e.preventDefault(),!this.state.isOpen){this.focusNextOption();break}e.stopPropagation(),this.selectFocusedOption();break;case 38:e.preventDefault(),this.focusPreviousOption();break;case 40:e.preventDefault(),this.focusNextOption();break;case 33:e.preventDefault(),this.focusPageUpOption();break;case 34:e.preventDefault(),this.focusPageDownOption();break;case 35:if(e.shiftKey)break;e.preventDefault(),this.focusEndOption();break;case 36:if(e.shiftKey)break;e.preventDefault(),this.focusStartOption();break;case 46:!this.state.inputValue&&this.props.deleteRemoves&&(e.preventDefault(),this.popValue())}}},{key:"handleValueClick",value:function(e,t){this.props.onValueClick&&this.props.onValueClick(e,t)}},{key:"handleMenuScroll",value:function(e){if(this.props.onMenuScrollToBottom){var t=e.target;t.scrollHeight>t.offsetHeight&&t.scrollHeight-t.offsetHeight-t.scrollTop<=0&&this.props.onMenuScrollToBottom()}}},{key:"getOptionLabel",value:function(e){return e[this.props.labelKey]}},{key:"getValueArray",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n="object"===(void 0===t?"undefined":b(t))?t:this.props;if(n.multi){if("string"==typeof e&&(e=e.split(n.delimiter)),!Array.isArray(e)){if(null==e)return[];e=[e]}return e.map((function(e){return D(e,n)})).filter((function(e){return e}))}var r=D(e,n);return r?[r]:[]}},{key:"setValue",value:function(e){var t=this;if(this.props.autoBlur&&this.blurInput(),this.props.required){var n=M(e,this.props.multi);this.setState({required:n})}this.props.simpleValue&&e&&(e=this.props.multi?e.map((function(e){return e[t.props.valueKey]})).join(this.props.delimiter):e[this.props.valueKey]),this.props.onChange&&this.props.onChange(e)}},{key:"selectValue",value:function(e){var t=this;this.props.closeOnSelect&&(this.hasScrolledToOption=!1);var n=this.props.onSelectResetsInput?"":this.state.inputValue;this.props.multi?this.setState({focusedIndex:null,inputValue:this.handleInputValueChange(n),isOpen:!this.props.closeOnSelect},(function(){t.getValueArray(t.props.value).some((function(n){return n[t.props.valueKey]===e[t.props.valueKey]}))?t.removeValue(e):t.addValue(e)})):this.setState({inputValue:this.handleInputValueChange(n),isOpen:!this.props.closeOnSelect,isPseudoFocused:this.state.isFocused},(function(){t.setValue(e)}))}},{key:"addValue",value:function(e){var t=this.getValueArray(this.props.value),n=this._visibleOptions.filter((function(e){return!e.disabled})),r=n.indexOf(e);this.setValue(t.concat(e)),this.props.closeOnSelect&&(n.length-1===r?this.focusOption(n[r-1]):n.length>r&&this.focusOption(n[r+1]))}},{key:"popValue",value:function(){var e=this.getValueArray(this.props.value);e.length&&!1!==e[e.length-1].clearableValue&&this.setValue(this.props.multi?e.slice(0,e.length-1):null)}},{key:"removeValue",value:function(e){var t=this,n=this.getValueArray(this.props.value);this.setValue(n.filter((function(n){return n[t.props.valueKey]!==e[t.props.valueKey]}))),this.focus()}},{key:"clearValue",value:function(e){e&&"mousedown"===e.type&&0!==e.button||(e.preventDefault(),this.setValue(this.getResetValue()),this.setState({inputValue:this.handleInputValueChange(""),isOpen:!1},this.focus),this._focusAfterClear=!0)}},{key:"getResetValue",value:function(){return void 0!==this.props.resetValue?this.props.resetValue:this.props.multi?[]:null}},{key:"focusOption",value:function(e){this.setState({focusedOption:e})}},{key:"focusNextOption",value:function(){this.focusAdjacentOption("next")}},{key:"focusPreviousOption",value:function(){this.focusAdjacentOption("previous")}},{key:"focusPageUpOption",value:function(){this.focusAdjacentOption("page_up")}},{key:"focusPageDownOption",value:function(){this.focusAdjacentOption("page_down")}},{key:"focusStartOption",value:function(){this.focusAdjacentOption("start")}},{key:"focusEndOption",value:function(){this.focusAdjacentOption("end")}},{key:"focusAdjacentOption",value:function(e){var t=this._visibleOptions.map((function(e,t){return{option:e,index:t}})).filter((function(e){return!e.option.disabled}));if(this._scrollToFocusedOptionOnUpdate=!0,!this.state.isOpen){var n={focusedOption:this._focusedOption||(t.length?t["next"===e?0:t.length-1].option:null),isOpen:!0};return this.props.onSelectResetsInput&&(n.inputValue=""),void this.setState(n)}if(t.length){for(var r=-1,i=0;i<t.length;i++)if(this._focusedOption===t[i].option){r=i;break}if("next"===e&&-1!==r)r=(r+1)%t.length;else if("previous"===e)r>0?r-=1:r=t.length-1;else if("start"===e)r=0;else if("end"===e)r=t.length-1;else if("page_up"===e){var o=r-this.props.pageSize;r=o<0?0:o}else if("page_down"===e){var a=r+this.props.pageSize;r=a>t.length-1?t.length-1:a}-1===r&&(r=0),this.setState({focusedIndex:t[r].index,focusedOption:t[r].option})}}},{key:"getFocusedOption",value:function(){return this._focusedOption}},{key:"selectFocusedOption",value:function(){if(this._focusedOption)return this.selectValue(this._focusedOption)}},{key:"renderLoading",value:function(){if(this.props.isLoading)return c.a.createElement("span",{className:"Select-loading-zone","aria-hidden":"true"},c.a.createElement("span",{className:"Select-loading"}))}},{key:"renderValue",value:function(e,t){var n=this,r=this.props.valueRenderer||this.getOptionLabel,i=this.props.valueComponent;if(!e.length)return function(e,t,n){var r=e.inputValue,i=e.isPseudoFocused,o=e.isFocused,a=t.onSelectResetsInput;return!r||!a&&!n&&!i&&!o}(this.state,this.props,t)?c.a.createElement("div",{className:"Select-placeholder"},this.props.placeholder):null;var o,a,u,l,s,f,p=this.props.onValueClick?this.handleValueClick:null;return this.props.multi?e.map((function(t,o){return c.a.createElement(i,{disabled:n.props.disabled||!1===t.clearableValue,id:n._instancePrefix+"-value-"+o,instancePrefix:n._instancePrefix,key:"value-"+o+"-"+t[n.props.valueKey],onClick:p,onRemove:n.removeValue,placeholder:n.props.placeholder,value:t,values:e},r(t,o),c.a.createElement("span",{className:"Select-aria-only"}," "))})):(o=this.state,a=this.props,u=o.inputValue,l=o.isPseudoFocused,s=o.isFocused,f=a.onSelectResetsInput,u&&(f||!s&&l||s&&!l)?void 0:(t&&(p=null),c.a.createElement(i,{disabled:this.props.disabled,id:this._instancePrefix+"-value-item",instancePrefix:this._instancePrefix,onClick:p,placeholder:this.props.placeholder,value:e[0]},r(e[0]))))}},{key:"renderInput",value:function(e,t){var n,r=this,o=a()("Select-input",this.props.inputProps.className),u=this.state.isOpen,l=a()((E(n={},this._instancePrefix+"-list",u),E(n,this._instancePrefix+"-backspace-remove-message",this.props.multi&&!this.props.disabled&&this.state.isFocused&&!this.state.inputValue),n)),s=this.state.inputValue;!s||this.props.onSelectResetsInput||this.state.isFocused||(s="");var f=x({},this.props.inputProps,{"aria-activedescendant":u?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-describedby":this.props["aria-describedby"],"aria-expanded":""+u,"aria-haspopup":""+u,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-owns":l,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus,ref:function(e){return r.input=e},role:"combobox",required:this.state.required,tabIndex:this.props.tabIndex,value:s});if(this.props.inputRenderer)return this.props.inputRenderer(f);if(this.props.disabled||!this.props.searchable){var p=k(this.props.inputProps,[]),d=a()(E({},this._instancePrefix+"-list",u));return c.a.createElement("div",x({},p,{"aria-expanded":u,"aria-owns":d,"aria-activedescendant":u?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-disabled":""+this.props.disabled,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],className:o,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,ref:function(e){return r.input=e},role:"combobox",style:{border:0,width:1,display:"inline-block"},tabIndex:this.props.tabIndex||0}))}return this.props.autosize?c.a.createElement(i.a,x({id:this.props.id},f,{className:o,minWidth:"5"})):c.a.createElement("div",{className:o,key:"input-wrap",style:{display:"inline-block"}},c.a.createElement("input",x({id:this.props.id},f)))}},{key:"renderClear",value:function(){var e=this.getValueArray(this.props.value);if(this.props.clearable&&e.length&&!this.props.disabled&&!this.props.isLoading){var t=this.props.multi?this.props.clearAllText:this.props.clearValueText,n=this.props.clearRenderer();return c.a.createElement("span",{"aria-label":t,className:"Select-clear-zone",onMouseDown:this.clearValue,onTouchEnd:this.handleTouchEndClearValue,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,title:t},n)}}},{key:"renderArrow",value:function(){if(this.props.arrowRenderer){var e=this.handleMouseDownOnArrow,t=this.state.isOpen,n=this.props.arrowRenderer({onMouseDown:e,isOpen:t});return n?c.a.createElement("span",{className:"Select-arrow-zone",onMouseDown:e},n):null}}},{key:"filterOptions",value:function(e){var t=this.state.inputValue,n=this.props.options||[];if(this.props.filterOptions){var r="function"==typeof this.props.filterOptions?this.props.filterOptions:y;return r(n,t,e,{filterOption:this.props.filterOption,ignoreAccents:this.props.ignoreAccents,ignoreCase:this.props.ignoreCase,labelKey:this.props.labelKey,matchPos:this.props.matchPos,matchProp:this.props.matchProp,trimFilter:this.props.trimFilter,valueKey:this.props.valueKey})}return n}},{key:"onOptionRef",value:function(e,t){t&&(this.focused=e)}},{key:"renderMenu",value:function(e,t,n){return e&&e.length?this.props.menuRenderer({focusedOption:n,focusOption:this.focusOption,inputValue:this.state.inputValue,instancePrefix:this._instancePrefix,labelKey:this.props.labelKey,onFocus:this.focusOption,onOptionRef:this.onOptionRef,onSelect:this.selectValue,optionClassName:this.props.optionClassName,optionComponent:this.props.optionComponent,optionRenderer:this.props.optionRenderer||this.getOptionLabel,options:e,removeValue:this.removeValue,selectValue:this.selectValue,valueArray:t,valueKey:this.props.valueKey}):this.props.noResultsText?c.a.createElement("div",{className:"Select-noresults"},this.props.noResultsText):null}},{key:"renderHiddenField",value:function(e){var t=this;if(this.props.name){if(this.props.joinValues){var n=e.map((function(e){return j(e[t.props.valueKey])})).join(this.props.delimiter);return c.a.createElement("input",{disabled:this.props.disabled,name:this.props.name,ref:function(e){return t.value=e},type:"hidden",value:n})}return e.map((function(e,n){return c.a.createElement("input",{disabled:t.props.disabled,key:"hidden."+n,name:t.props.name,ref:"value"+n,type:"hidden",value:j(e[t.props.valueKey])})}))}}},{key:"getFocusableOptionIndex",value:function(e){var t=this._visibleOptions;if(!t.length)return null;var n=this.props.valueKey,r=this.state.focusedOption||e;if(r&&!r.disabled){var i=-1;if(t.some((function(e,t){var o=e[n]===r[n];return o&&(i=t),o})),-1!==i)return i}for(var o=0;o<t.length;o++)if(!t[o].disabled)return o;return null}},{key:"renderOuter",value:function(e,t,n){var r=this,i=this.renderMenu(e,t,n);return i?c.a.createElement("div",{ref:function(e){return r.menuContainer=e},className:"Select-menu-outer",style:this.props.menuContainerStyle},c.a.createElement("div",{className:"Select-menu",id:this._instancePrefix+"-list",onMouseDown:this.handleMouseDownOnMenu,onScroll:this.handleMenuScroll,ref:function(e){return r.menu=e},role:"listbox",style:this.props.menuStyle,tabIndex:-1},i)):null}},{key:"render",value:function(){var e=this,t=this.getValueArray(this.props.value),n=this._visibleOptions=this.filterOptions(this.props.multi&&this.props.removeSelected?t:null),r=this.state.isOpen;this.props.multi&&!n.length&&t.length&&!this.state.inputValue&&(r=!1);var i=this.getFocusableOptionIndex(t[0]),o=null;o=this._focusedOption=null!==i?n[i]:null;var u=a()("Select",this.props.className,{"has-value":t.length,"is-clearable":this.props.clearable,"is-disabled":this.props.disabled,"is-focused":this.state.isFocused,"is-loading":this.props.isLoading,"is-open":r,"is-pseudo-focused":this.state.isPseudoFocused,"is-searchable":this.props.searchable,"Select--multi":this.props.multi,"Select--rtl":this.props.rtl,"Select--single":!this.props.multi}),l=null;return this.props.multi&&!this.props.disabled&&t.length&&!this.state.inputValue&&this.state.isFocused&&this.props.backspaceRemoves&&(l=c.a.createElement("span",{id:this._instancePrefix+"-backspace-remove-message",className:"Select-aria-only","aria-live":"assertive"},this.props.backspaceToRemoveMessage.replace("{label}",t[t.length-1][this.props.labelKey]))),c.a.createElement("div",{ref:function(t){return e.wrapper=t},className:u,style:this.props.wrapperStyle},this.renderHiddenField(t),c.a.createElement("div",{ref:function(t){return e.control=t},className:"Select-control",onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleTouchEnd,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,style:this.props.style},c.a.createElement("div",{className:"Select-multi-value-wrapper",id:this._instancePrefix+"-value"},this.renderValue(t,r),this.renderInput(t,i)),l,this.renderLoading(),this.renderClear(),this.renderArrow()),r?this.renderOuter(n,t,o):null)}}]),t}(c.a.Component);F.propTypes={"aria-describedby":l.a.string,"aria-label":l.a.string,"aria-labelledby":l.a.string,arrowRenderer:l.a.func,autoBlur:l.a.bool,autoFocus:l.a.bool,autofocus:l.a.bool,autosize:l.a.bool,backspaceRemoves:l.a.bool,backspaceToRemoveMessage:l.a.string,className:l.a.string,clearAllText:P,clearRenderer:l.a.func,clearValueText:P,clearable:l.a.bool,closeOnSelect:l.a.bool,deleteRemoves:l.a.bool,delimiter:l.a.string,disabled:l.a.bool,escapeClearsValue:l.a.bool,filterOption:l.a.func,filterOptions:l.a.any,id:l.a.string,ignoreAccents:l.a.bool,ignoreCase:l.a.bool,inputProps:l.a.object,inputRenderer:l.a.func,instanceId:l.a.string,isLoading:l.a.bool,joinValues:l.a.bool,labelKey:l.a.string,matchPos:l.a.string,matchProp:l.a.string,menuBuffer:l.a.number,menuContainerStyle:l.a.object,menuRenderer:l.a.func,menuStyle:l.a.object,multi:l.a.bool,name:l.a.string,noResultsText:P,onBlur:l.a.func,onBlurResetsInput:l.a.bool,onChange:l.a.func,onClose:l.a.func,onCloseResetsInput:l.a.bool,onFocus:l.a.func,onInputChange:l.a.func,onInputKeyDown:l.a.func,onMenuScrollToBottom:l.a.func,onOpen:l.a.func,onSelectResetsInput:l.a.bool,onValueClick:l.a.func,openOnClick:l.a.bool,openOnFocus:l.a.bool,optionClassName:l.a.string,optionComponent:l.a.func,optionRenderer:l.a.func,options:l.a.array,pageSize:l.a.number,placeholder:P,removeSelected:l.a.bool,required:l.a.bool,resetValue:l.a.any,rtl:l.a.bool,scrollMenuIntoView:l.a.bool,searchable:l.a.bool,simpleValue:l.a.bool,style:l.a.object,tabIndex:A,tabSelectsValue:l.a.bool,trimFilter:l.a.bool,value:l.a.any,valueComponent:l.a.func,valueKey:l.a.string,valueRenderer:l.a.func,wrapperStyle:l.a.object},F.defaultProps={arrowRenderer:p,autosize:!0,backspaceRemoves:!0,backspaceToRemoveMessage:"Press backspace to remove {label}",clearable:!0,clearAllText:"Clear all",clearRenderer:function(){return c.a.createElement("span",{className:"Select-clear",dangerouslySetInnerHTML:{__html:"&times;"}})},clearValueText:"Clear value",closeOnSelect:!0,deleteRemoves:!0,delimiter:",",disabled:!1,escapeClearsValue:!0,filterOptions:y,ignoreAccents:!0,ignoreCase:!0,inputProps:{},isLoading:!1,joinValues:!1,labelKey:"label",matchPos:"any",matchProp:"any",menuBuffer:0,menuRenderer:m,multi:!1,noResultsText:"No results found",onBlurResetsInput:!0,onCloseResetsInput:!0,onSelectResetsInput:!0,openOnClick:!0,optionComponent:C,pageSize:5,placeholder:"Select...",removeSelected:!0,required:!1,rtl:!1,scrollMenuIntoView:!0,searchable:!0,simpleValue:!1,tabSelectsValue:!0,trimFilter:!0,valueComponent:T,valueKey:"value"};var R={autoload:l.a.bool.isRequired,cache:l.a.any,children:l.a.func.isRequired,ignoreAccents:l.a.bool,ignoreCase:l.a.bool,loadOptions:l.a.func.isRequired,loadingPlaceholder:l.a.oneOfType([l.a.string,l.a.node]),multi:l.a.bool,noResultsText:l.a.oneOfType([l.a.string,l.a.node]),onChange:l.a.func,onInputChange:l.a.func,options:l.a.array.isRequired,placeholder:l.a.oneOfType([l.a.string,l.a.node]),searchPromptText:l.a.oneOfType([l.a.string,l.a.node]),value:l.a.any},N={},z={autoload:!0,cache:N,children:function(e){return c.a.createElement(F,e)},ignoreAccents:!0,ignoreCase:!0,loadingPlaceholder:"Loading...",options:[],searchPromptText:"Type to search"},L=function(e){function t(e,n){w(this,t);var r=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r._cache=e.cache===N?{}:e.cache,r.state={inputValue:"",isLoading:!1,options:e.options},r.onInputChange=r.onInputChange.bind(r),r}return O(t,e),_(t,[{key:"componentDidMount",value:function(){this.props.autoload&&this.loadOptions("")}},{key:"componentWillReceiveProps",value:function(e){e.options!==this.props.options&&this.setState({options:e.options})}},{key:"componentWillUnmount",value:function(){this._callback=null}},{key:"loadOptions",value:function(e){var t=this,n=this.props.loadOptions,r=this._cache;if(r&&Object.prototype.hasOwnProperty.call(r,e))return this._callback=null,void this.setState({isLoading:!1,options:r[e]});var i=function n(i,o){var a=o&&o.options||[];r&&(r[e]=a),n===t._callback&&(t._callback=null,t.setState({isLoading:!1,options:a}))};this._callback=i;var o=n(e,i);o&&o.then((function(e){return i(0,e)}),(function(e){return i()})),this._callback&&!this.state.isLoading&&this.setState({isLoading:!0})}},{key:"onInputChange",value:function(e){var t=this.props,n=t.ignoreAccents,r=t.ignoreCase,i=t.onInputChange,o=e;if(i){var a=i(o);null!=a&&"object"!==(void 0===a?"undefined":b(a))&&(o=""+a)}var u=o;return n&&(u=h(u)),r&&(u=u.toLowerCase()),this.setState({inputValue:o}),this.loadOptions(u),o}},{key:"noResultsText",value:function(){var e=this.props,t=e.loadingPlaceholder,n=e.noResultsText,r=e.searchPromptText,i=this.state,o=i.inputValue;return i.isLoading?t:o&&n?n:r}},{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.loadingPlaceholder,i=t.placeholder,o=this.state,a=o.isLoading,u=o.options,l={noResultsText:this.noResultsText(),placeholder:a?r:i,options:a&&r?[]:u,ref:function(t){return e.select=t}};return n(x({},this.props,l,{isLoading:a,onInputChange:this.onInputChange}))}}]),t}(s.Component);L.propTypes=R,L.defaultProps=z;var U=function(e){function t(e,n){w(this,t);var r=S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.filterOptions=r.filterOptions.bind(r),r.menuRenderer=r.menuRenderer.bind(r),r.onInputKeyDown=r.onInputKeyDown.bind(r),r.onInputChange=r.onInputChange.bind(r),r.onOptionSelect=r.onOptionSelect.bind(r),r}return O(t,e),_(t,[{key:"createNewOption",value:function(){var e=this.props,t=e.isValidNewOption,n=e.newOptionCreator,r=e.onNewOptionClick,i=e.options,o=void 0===i?[]:i;if(t({label:this.inputValue})){var a=n({label:this.inputValue,labelKey:this.labelKey,valueKey:this.valueKey});this.isOptionUnique({option:a,options:o})&&(r?r(a):(o.unshift(a),this.select.selectValue(a)))}}},{key:"filterOptions",value:function(){var e=this.props,t=e.filterOptions,n=e.isValidNewOption,r=e.promptTextCreator,i=e.showNewOptionAtTop,o=(arguments.length<=2?void 0:arguments[2])||[],a=t.apply(void 0,arguments)||[];if(n({label:this.inputValue})){var u=this.props.newOptionCreator,l=u({label:this.inputValue,labelKey:this.labelKey,valueKey:this.valueKey}),s=this.isOptionUnique({option:l,options:o.concat(a)});if(s){var c=r(this.inputValue);this._createPlaceholderOption=u({label:c,labelKey:this.labelKey,valueKey:this.valueKey}),i?a.unshift(this._createPlaceholderOption):a.push(this._createPlaceholderOption)}}return a}},{key:"isOptionUnique",value:function(e){var t=e.option,n=e.options,r=this.props.isOptionUnique;return n=n||this.props.options,r({labelKey:this.labelKey,option:t,options:n,valueKey:this.valueKey})}},{key:"menuRenderer",value:function(e){var t=this.props.menuRenderer;return t(x({},e,{onSelect:this.onOptionSelect,selectValue:this.onOptionSelect}))}},{key:"onInputChange",value:function(e){var t=this.props.onInputChange;return this.inputValue=e,t&&(this.inputValue=t(e)),this.inputValue}},{key:"onInputKeyDown",value:function(e){var t=this.props,n=t.shouldKeyDownEventCreateNewOption,r=t.onInputKeyDown,i=this.select.getFocusedOption();i&&i===this._createPlaceholderOption&&n(e)?(this.createNewOption(),e.preventDefault()):r&&r(e)}},{key:"onOptionSelect",value:function(e){e===this._createPlaceholderOption?this.createNewOption():this.select.selectValue(e)}},{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.ref,r=k(t,["ref"]),i=this.props.children;return i||(i=B),i(x({},r,{allowCreate:!0,filterOptions:this.filterOptions,menuRenderer:this.menuRenderer,onInputChange:this.onInputChange,onInputKeyDown:this.onInputKeyDown,ref:function(t){e.select=t,t&&(e.labelKey=t.props.labelKey,e.valueKey=t.props.valueKey),n&&n(t)}}))}}]),t}(c.a.Component),B=function(e){return c.a.createElement(F,e)},V=function(e){var t=e.option,n=e.options,r=e.labelKey,i=e.valueKey;return!n||!n.length||0===n.filter((function(e){return e[r]===t[r]||e[i]===t[i]})).length},q=function(e){return!!e.label},W=function(e){var t=e.label,n=e.labelKey,r={};return r[e.valueKey]=t,r[n]=t,r.className="Select-create-option-placeholder",r},K=function(e){return'Create option "'+e+'"'},$=function(e){switch(e.keyCode){case 9:case 13:case 188:return!0;default:return!1}};U.isOptionUnique=V,U.isValidNewOption=q,U.newOptionCreator=W,U.promptTextCreator=K,U.shouldKeyDownEventCreateNewOption=$,U.defaultProps={filterOptions:y,isOptionUnique:V,isValidNewOption:q,menuRenderer:m,newOptionCreator:W,promptTextCreator:K,shouldKeyDownEventCreateNewOption:$,showNewOptionAtTop:!0},U.propTypes={children:l.a.func,filterOptions:l.a.any,isOptionUnique:l.a.func,isValidNewOption:l.a.func,menuRenderer:l.a.any,newOptionCreator:l.a.func,onInputChange:l.a.func,onInputKeyDown:l.a.func,onNewOptionClick:l.a.func,options:l.a.array,promptTextCreator:l.a.func,ref:l.a.func,shouldKeyDownEventCreateNewOption:l.a.func,showNewOptionAtTop:l.a.bool};var H=function(e){function t(){return w(this,t),S(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return O(t,e),_(t,[{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this;return c.a.createElement(L,this.props,(function(t){var n=t.ref,r=k(t,["ref"]),i=n;return c.a.createElement(U,r,(function(t){var n=t.ref,r=k(t,["ref"]),o=n;return e.props.children(x({},r,{ref:function(t){o(t),i(t),e.select=t}}))}))}))}}]),t}(c.a.Component);H.propTypes={children:l.a.func.isRequired},H.defaultProps={children:function(e){return c.a.createElement(F,e)}},F.Async=L,F.AsyncCreatable=H,F.Creatable=U,F.Value=T,F.Option=C,t.a=F},,,,,function(e,t,n){e.exports=function(){"use strict";return function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,o,a,u,l,s,c,f){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===s)return r+"/*|*/";break;case 3:switch(s){case 102:case 112:return e(i[0]+r),"";default:return r+(0===f?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}}()},function(e,t,n){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(e,t,n){"use strict";var r=n(90),i=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=Object(r.a)((function(e){return i.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.a=o},function(e,t,n){"use strict";t.a=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},function(e,t,n){"use strict";function r(e){return Object.prototype.toString.call(e).slice(8,-1)}function i(e){return"Undefined"===r(e)}function o(e){return"Null"===r(e)}function a(e){return"Object"===r(e)&&(e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype)}function u(e){return"Array"===r(e)}function l(e){return"Symbol"===r(e)}var s,c,f,p,d;s=o,c=i;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r}function v(e,t,n,r){var i=r.propertyIsEnumerable(t)?"enumerable":"nonenumerable";"enumerable"===i&&(e[t]=n),"nonenumerable"===i&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function y(e,t,n){if(!a(t))return n&&u(n)&&n.forEach((function(n){t=n(e,t)})),t;var r={};a(e)&&(r=h(Object.getOwnPropertyNames(e),Object.getOwnPropertySymbols(e)).reduce((function(n,r){var i=e[r];return(!l(r)&&!Object.getOwnPropertyNames(t).includes(r)||l(r)&&!Object.getOwnPropertySymbols(t).includes(r))&&v(n,r,i,e),n}),{}));return h(Object.getOwnPropertyNames(t),Object.getOwnPropertySymbols(t)).reduce((function(r,i){var o=t[i],l=a(e)?e[i]:void 0;return n&&u(n)&&n.forEach((function(e){o=e(l,o)})),void 0!==l&&a(o)&&(o=y(l,o,n)),v(r,i,o,t),r}),r)}t.a=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=null,i=e;return a(e)&&e.extensions&&1===Object.keys(e).length&&(i={},r=e.extensions),t.reduce((function(e,t){return y(e,t,r)}),i)}},,,,function(e,t,n){"use strict";function r(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(78);function i(e){if(Object(r.a)(e))return Array.from(e.keys());if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(e);var t=Object.getOwnPropertyNames(e);return"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t}},,,,,,function(e,t,n){e.exports=function(){"use strict";var e=Array.prototype.slice;function t(e,t){t&&(e.prototype=Object.create(t.prototype)),e.prototype.constructor=e}function n(e){return a(e)?e:V(e)}function r(e){return u(e)?e:q(e)}function i(e){return l(e)?e:W(e)}function o(e){return a(e)&&!s(e)?e:K(e)}function a(e){return!(!e||!e[f])}function u(e){return!(!e||!e[p])}function l(e){return!(!e||!e[d])}function s(e){return u(e)||l(e)}function c(e){return!(!e||!e[h])}t(r,n),t(i,n),t(o,n),n.isIterable=a,n.isKeyed=u,n.isIndexed=l,n.isAssociative=s,n.isOrdered=c,n.Keyed=r,n.Indexed=i,n.Set=o;var f="@@__IMMUTABLE_ITERABLE__@@",p="@@__IMMUTABLE_KEYED__@@",d="@@__IMMUTABLE_INDEXED__@@",h="@@__IMMUTABLE_ORDERED__@@",v={},y={value:!1},m={value:!1};function g(e){return e.value=!1,e}function b(e){e&&(e.value=!0)}function w(){}function _(e,t){t=t||0;for(var n=Math.max(0,e.length-t),r=new Array(n),i=0;i<n;i++)r[i]=e[i+t];return r}function E(e){return void 0===e.size&&(e.size=e.__iterate(O)),e.size}function x(e,t){if("number"!=typeof t){var n=t>>>0;if(""+n!==t||4294967295===n)return NaN;t=n}return t<0?E(e)+t:t}function O(){return!0}function k(e,t,n){return(0===e||void 0!==n&&e<=-n)&&(void 0===t||void 0!==n&&t>=n)}function S(e,t){return T(e,t,0)}function C(e,t){return T(e,t,t)}function T(e,t,n){return void 0===e?n:e<0?Math.max(0,t+e):void 0===t?e:Math.min(t,e)}var j,P,A,I="function"==typeof Symbol&&Symbol.iterator,D=I||"@@iterator";function M(e){this.next=e}function F(e,t,n,r){var i=0===e?t:1===e?n:[t,n];return r?r.value=i:r={value:i,done:!1},r}function R(){return{value:void 0,done:!0}}function N(e){return!!U(e)}function z(e){return e&&"function"==typeof e.next}function L(e){var t=U(e);return t&&t.call(e)}function U(e){var t=e&&(I&&e[I]||e["@@iterator"]);if("function"==typeof t)return t}function B(e){return e&&"number"==typeof e.length}function V(e){return null==e?X():a(e)?e.toSeq():function(e){var t=ee(e)||"object"==typeof e&&new H(e);if(!t)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+e);return t}(e)}function q(e){return null==e?X().toKeyedSeq():a(e)?u(e)?e.toSeq():e.fromEntrySeq():J(e)}function W(e){return null==e?X():a(e)?u(e)?e.entrySeq():e.toIndexedSeq():Z(e)}function K(e){return(null==e?X():a(e)?u(e)?e.entrySeq():e:Z(e)).toSetSeq()}function $(e){this._array=e,this.size=e.length}function H(e){var t=Object.keys(e);this._object=e,this._keys=t,this.size=t.length}function Q(e){this._iterable=e,this.size=e.length||e.size}function Y(e){this._iterator=e,this._iteratorCache=[]}function G(e){return!(!e||!e["@@__IMMUTABLE_SEQ__@@"])}function X(){return j||(j=new $([]))}function J(e){var t=Array.isArray(e)?new $(e).fromEntrySeq():z(e)?new Y(e).fromEntrySeq():N(e)?new Q(e).fromEntrySeq():"object"==typeof e?new H(e):void 0;if(!t)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+e);return t}function Z(e){var t=ee(e);if(!t)throw new TypeError("Expected Array or iterable object of values: "+e);return t}function ee(e){return B(e)?new $(e):z(e)?new Y(e):N(e)?new Q(e):void 0}function te(e,t,n,r){var i=e._cache;if(i){for(var o=i.length-1,a=0;a<=o;a++){var u=i[n?o-a:a];if(!1===t(u[1],r?u[0]:a,e))return a+1}return a}return e.__iterateUncached(t,n)}function ne(e,t,n,r){var i=e._cache;if(i){var o=i.length-1,a=0;return new M((function(){var e=i[n?o-a:a];return a++>o?{value:void 0,done:!0}:F(t,r?e[0]:a-1,e[1])}))}return e.__iteratorUncached(t,n)}function re(e,t){return t?function e(t,n,r,i){return Array.isArray(n)?t.call(i,r,W(n).map((function(r,i){return e(t,r,i,n)}))):oe(n)?t.call(i,r,q(n).map((function(r,i){return e(t,r,i,n)}))):n}(t,e,"",{"":e}):ie(e)}function ie(e){return Array.isArray(e)?W(e).map(ie).toList():oe(e)?q(e).map(ie).toMap():e}function oe(e){return e&&(e.constructor===Object||void 0===e.constructor)}function ae(e,t){if(e===t||e!=e&&t!=t)return!0;if(!e||!t)return!1;if("function"==typeof e.valueOf&&"function"==typeof t.valueOf){if((e=e.valueOf())===(t=t.valueOf())||e!=e&&t!=t)return!0;if(!e||!t)return!1}return!("function"!=typeof e.equals||"function"!=typeof t.equals||!e.equals(t))}function ue(e,t){if(e===t)return!0;if(!a(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||u(e)!==u(t)||l(e)!==l(t)||c(e)!==c(t))return!1;if(0===e.size&&0===t.size)return!0;var n=!s(e);if(c(e)){var r=e.entries();return t.every((function(e,t){var i=r.next().value;return i&&ae(i[1],e)&&(n||ae(i[0],t))}))&&r.next().done}var i=!1;if(void 0===e.size)if(void 0===t.size)"function"==typeof e.cacheResult&&e.cacheResult();else{i=!0;var o=e;e=t,t=o}var f=!0,p=t.__iterate((function(t,r){if(n?!e.has(t):i?!ae(t,e.get(r,v)):!ae(e.get(r,v),t))return f=!1,!1}));return f&&e.size===p}function le(e,t){if(!(this instanceof le))return new le(e,t);if(this._value=e,this.size=void 0===t?1/0:Math.max(0,t),0===this.size){if(P)return P;P=this}}function se(e,t){if(!e)throw new Error(t)}function ce(e,t,n){if(!(this instanceof ce))return new ce(e,t,n);if(se(0!==n,"Cannot step a Range by 0"),e=e||0,void 0===t&&(t=1/0),n=void 0===n?1:Math.abs(n),t<e&&(n=-n),this._start=e,this._end=t,this._step=n,this.size=Math.max(0,Math.ceil((t-e)/n-1)+1),0===this.size){if(A)return A;A=this}}function fe(){throw TypeError("Abstract")}function pe(){}function de(){}function he(){}M.prototype.toString=function(){return"[Iterator]"},M.KEYS=0,M.VALUES=1,M.ENTRIES=2,M.prototype.inspect=M.prototype.toSource=function(){return this.toString()},M.prototype[D]=function(){return this},t(V,n),V.of=function(){return V(arguments)},V.prototype.toSeq=function(){return this},V.prototype.toString=function(){return this.__toString("Seq {","}")},V.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},V.prototype.__iterate=function(e,t){return te(this,e,t,!0)},V.prototype.__iterator=function(e,t){return ne(this,e,t,!0)},t(q,V),q.prototype.toKeyedSeq=function(){return this},t(W,V),W.of=function(){return W(arguments)},W.prototype.toIndexedSeq=function(){return this},W.prototype.toString=function(){return this.__toString("Seq [","]")},W.prototype.__iterate=function(e,t){return te(this,e,t,!1)},W.prototype.__iterator=function(e,t){return ne(this,e,t,!1)},t(K,V),K.of=function(){return K(arguments)},K.prototype.toSetSeq=function(){return this},V.isSeq=G,V.Keyed=q,V.Set=K,V.Indexed=W,V.prototype["@@__IMMUTABLE_SEQ__@@"]=!0,t($,W),$.prototype.get=function(e,t){return this.has(e)?this._array[x(this,e)]:t},$.prototype.__iterate=function(e,t){for(var n=this._array,r=n.length-1,i=0;i<=r;i++)if(!1===e(n[t?r-i:i],i,this))return i+1;return i},$.prototype.__iterator=function(e,t){var n=this._array,r=n.length-1,i=0;return new M((function(){return i>r?{value:void 0,done:!0}:F(e,i,n[t?r-i++:i++])}))},t(H,q),H.prototype.get=function(e,t){return void 0===t||this.has(e)?this._object[e]:t},H.prototype.has=function(e){return this._object.hasOwnProperty(e)},H.prototype.__iterate=function(e,t){for(var n=this._object,r=this._keys,i=r.length-1,o=0;o<=i;o++){var a=r[t?i-o:o];if(!1===e(n[a],a,this))return o+1}return o},H.prototype.__iterator=function(e,t){var n=this._object,r=this._keys,i=r.length-1,o=0;return new M((function(){var a=r[t?i-o:o];return o++>i?{value:void 0,done:!0}:F(e,a,n[a])}))},H.prototype[h]=!0,t(Q,W),Q.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);var n=L(this._iterable),r=0;if(z(n))for(var i;!(i=n.next()).done&&!1!==e(i.value,r++,this););return r},Q.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var n=L(this._iterable);if(!z(n))return new M(R);var r=0;return new M((function(){var t=n.next();return t.done?t:F(e,r++,t.value)}))},t(Y,W),Y.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);for(var n,r=this._iterator,i=this._iteratorCache,o=0;o<i.length;)if(!1===e(i[o],o++,this))return o;for(;!(n=r.next()).done;){var a=n.value;if(i[o]=a,!1===e(a,o++,this))break}return o},Y.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var n=this._iterator,r=this._iteratorCache,i=0;return new M((function(){if(i>=r.length){var t=n.next();if(t.done)return t;r[i]=t.value}return F(e,i,r[i++])}))},t(le,W),le.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},le.prototype.get=function(e,t){return this.has(e)?this._value:t},le.prototype.includes=function(e){return ae(this._value,e)},le.prototype.slice=function(e,t){var n=this.size;return k(e,t,n)?this:new le(this._value,C(t,n)-S(e,n))},le.prototype.reverse=function(){return this},le.prototype.indexOf=function(e){return ae(this._value,e)?0:-1},le.prototype.lastIndexOf=function(e){return ae(this._value,e)?this.size:-1},le.prototype.__iterate=function(e,t){for(var n=0;n<this.size;n++)if(!1===e(this._value,n,this))return n+1;return n},le.prototype.__iterator=function(e,t){var n=this,r=0;return new M((function(){return r<n.size?F(e,r++,n._value):{value:void 0,done:!0}}))},le.prototype.equals=function(e){return e instanceof le?ae(this._value,e._value):ue(e)},t(ce,W),ce.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},ce.prototype.get=function(e,t){return this.has(e)?this._start+x(this,e)*this._step:t},ce.prototype.includes=function(e){var t=(e-this._start)/this._step;return t>=0&&t<this.size&&t===Math.floor(t)},ce.prototype.slice=function(e,t){return k(e,t,this.size)?this:(e=S(e,this.size),(t=C(t,this.size))<=e?new ce(0,0):new ce(this.get(e,this._end),this.get(t,this._end),this._step))},ce.prototype.indexOf=function(e){var t=e-this._start;if(t%this._step==0){var n=t/this._step;if(n>=0&&n<this.size)return n}return-1},ce.prototype.lastIndexOf=function(e){return this.indexOf(e)},ce.prototype.__iterate=function(e,t){for(var n=this.size-1,r=this._step,i=t?this._start+n*r:this._start,o=0;o<=n;o++){if(!1===e(i,o,this))return o+1;i+=t?-r:r}return o},ce.prototype.__iterator=function(e,t){var n=this.size-1,r=this._step,i=t?this._start+n*r:this._start,o=0;return new M((function(){var a=i;return i+=t?-r:r,o>n?{value:void 0,done:!0}:F(e,o++,a)}))},ce.prototype.equals=function(e){return e instanceof ce?this._start===e._start&&this._end===e._end&&this._step===e._step:ue(this,e)},t(fe,n),t(pe,fe),t(de,fe),t(he,fe),fe.Keyed=pe,fe.Indexed=de,fe.Set=he;var ve="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(e,t){var n=65535&(e|=0),r=65535&(t|=0);return n*r+((e>>>16)*r+n*(t>>>16)<<16>>>0)|0};function ye(e){return e>>>1&1073741824|3221225471&e}function me(e){if(!1===e||null==e)return 0;if("function"==typeof e.valueOf&&(!1===(e=e.valueOf())||null==e))return 0;if(!0===e)return 1;var t=typeof e;if("number"===t){if(e!=e||e===1/0)return 0;var n=0|e;for(n!==e&&(n^=4294967295*e);e>4294967295;)n^=e/=4294967295;return ye(n)}if("string"===t)return e.length>ke?function(e){var t=Te[e];return void 0===t&&(t=ge(e),Ce===Se&&(Ce=0,Te={}),Ce++,Te[e]=t),t}(e):ge(e);if("function"==typeof e.hashCode)return e.hashCode();if("object"===t)return function(e){var t;if(Ee&&void 0!==(t=be.get(e)))return t;if(void 0!==(t=e[Oe]))return t;if(!_e){if(void 0!==(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[Oe]))return t;if(void 0!==(t=function(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}(e)))return t}if(t=++xe,1073741824&xe&&(xe=0),Ee)be.set(e,t);else{if(void 0!==we&&!1===we(e))throw new Error("Non-extensible objects are not allowed as keys.");if(_e)Object.defineProperty(e,Oe,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[Oe]=t;else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.");e[Oe]=t}}return t}(e);if("function"==typeof e.toString)return ge(e.toString());throw new Error("Value type "+t+" cannot be hashed.")}function ge(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return ye(t)}var be,we=Object.isExtensible,_e=function(){try{return Object.defineProperty({},"@",{}),!0}catch(e){return!1}}(),Ee="function"==typeof WeakMap;Ee&&(be=new WeakMap);var xe=0,Oe="__immutablehash__";"function"==typeof Symbol&&(Oe=Symbol(Oe));var ke=16,Se=255,Ce=0,Te={};function je(e){se(e!==1/0,"Cannot perform this action with an infinite size.")}function Pe(e){return null==e?We():Ae(e)&&!c(e)?e:We().withMutations((function(t){var n=r(e);je(n.size),n.forEach((function(e,n){return t.set(n,e)}))}))}function Ae(e){return!(!e||!e[De])}t(Pe,pe),Pe.of=function(){var t=e.call(arguments,0);return We().withMutations((function(e){for(var n=0;n<t.length;n+=2){if(n+1>=t.length)throw new Error("Missing value for key: "+t[n]);e.set(t[n],t[n+1])}}))},Pe.prototype.toString=function(){return this.__toString("Map {","}")},Pe.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t},Pe.prototype.set=function(e,t){return Ke(this,e,t)},Pe.prototype.setIn=function(e,t){return this.updateIn(e,v,(function(){return t}))},Pe.prototype.remove=function(e){return Ke(this,e,v)},Pe.prototype.deleteIn=function(e){return this.updateIn(e,(function(){return v}))},Pe.prototype.update=function(e,t,n){return 1===arguments.length?e(this):this.updateIn([e],t,n)},Pe.prototype.updateIn=function(e,t,n){n||(n=t,t=void 0);var r=function e(t,n,r,i){var o=t===v,a=n.next();if(a.done){var u=o?r:t,l=i(u);return l===u?t:l}se(o||t&&t.set,"invalid keyPath");var s=a.value,c=o?v:t.get(s,v),f=e(c,n,r,i);return f===c?t:f===v?t.remove(s):(o?We():t).set(s,f)}(this,Yt(e),t,n);return r===v?void 0:r},Pe.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):We()},Pe.prototype.merge=function(){return Ye(this,void 0,arguments)},Pe.prototype.mergeWith=function(t){var n=e.call(arguments,1);return Ye(this,t,n)},Pe.prototype.mergeIn=function(t){var n=e.call(arguments,1);return this.updateIn(t,We(),(function(e){return"function"==typeof e.merge?e.merge.apply(e,n):n[n.length-1]}))},Pe.prototype.mergeDeep=function(){return Ye(this,Ge,arguments)},Pe.prototype.mergeDeepWith=function(t){var n=e.call(arguments,1);return Ye(this,Xe(t),n)},Pe.prototype.mergeDeepIn=function(t){var n=e.call(arguments,1);return this.updateIn(t,We(),(function(e){return"function"==typeof e.mergeDeep?e.mergeDeep.apply(e,n):n[n.length-1]}))},Pe.prototype.sort=function(e){return _t(zt(this,e))},Pe.prototype.sortBy=function(e,t){return _t(zt(this,t,e))},Pe.prototype.withMutations=function(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this},Pe.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new w)},Pe.prototype.asImmutable=function(){return this.__ensureOwner()},Pe.prototype.wasAltered=function(){return this.__altered},Pe.prototype.__iterator=function(e,t){return new Ue(this,e,t)},Pe.prototype.__iterate=function(e,t){var n=this,r=0;return this._root&&this._root.iterate((function(t){return r++,e(t[1],t[0],n)}),t),r},Pe.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?qe(this.size,this._root,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},Pe.isMap=Ae;var Ie,De="@@__IMMUTABLE_MAP__@@",Me=Pe.prototype;function Fe(e,t){this.ownerID=e,this.entries=t}function Re(e,t,n){this.ownerID=e,this.bitmap=t,this.nodes=n}function Ne(e,t,n){this.ownerID=e,this.count=t,this.nodes=n}function ze(e,t,n){this.ownerID=e,this.keyHash=t,this.entries=n}function Le(e,t,n){this.ownerID=e,this.keyHash=t,this.entry=n}function Ue(e,t,n){this._type=t,this._reverse=n,this._stack=e._root&&Ve(e._root)}function Be(e,t){return F(e,t[0],t[1])}function Ve(e,t){return{node:e,index:0,__prev:t}}function qe(e,t,n,r){var i=Object.create(Me);return i.size=e,i._root=t,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function We(){return Ie||(Ie=qe(0))}function Ke(e,t,n){var r,i;if(e._root){var o=g(y),a=g(m);if(r=$e(e._root,e.__ownerID,0,void 0,t,n,o,a),!a.value)return e;i=e.size+(o.value?n===v?-1:1:0)}else{if(n===v)return e;i=1,r=new Fe(e.__ownerID,[[t,n]])}return e.__ownerID?(e.size=i,e._root=r,e.__hash=void 0,e.__altered=!0,e):r?qe(i,r):We()}function $e(e,t,n,r,i,o,a,u){return e?e.update(t,n,r,i,o,a,u):o===v?e:(b(u),b(a),new Le(t,r,[i,o]))}function He(e){return e.constructor===Le||e.constructor===ze}function Qe(e,t,n,r,i){if(e.keyHash===r)return new ze(t,r,[e.entry,i]);var o,a=31&(0===n?e.keyHash:e.keyHash>>>n),u=31&(0===n?r:r>>>n);return new Re(t,1<<a|1<<u,a===u?[Qe(e,t,n+5,r,i)]:(o=new Le(t,r,i),a<u?[e,o]:[o,e]))}function Ye(e,t,n){for(var i=[],o=0;o<n.length;o++){var u=n[o],l=r(u);a(u)||(l=l.map((function(e){return re(e)}))),i.push(l)}return Je(e,t,i)}function Ge(e,t,n){return e&&e.mergeDeep&&a(t)?e.mergeDeep(t):ae(e,t)?e:t}function Xe(e){return function(t,n,r){if(t&&t.mergeDeepWith&&a(n))return t.mergeDeepWith(e,n);var i=e(t,n,r);return ae(t,i)?t:i}}function Je(e,t,n){return 0===(n=n.filter((function(e){return 0!==e.size}))).length?e:0!==e.size||e.__ownerID||1!==n.length?e.withMutations((function(e){for(var r=t?function(n,r){e.update(r,v,(function(e){return e===v?n:t(e,n,r)}))}:function(t,n){e.set(n,t)},i=0;i<n.length;i++)n[i].forEach(r)})):e.constructor(n[0])}function Ze(e){return e=(e=(858993459&(e-=e>>1&1431655765))+(e>>2&858993459))+(e>>4)&252645135,e+=e>>8,127&(e+=e>>16)}function et(e,t,n,r){var i=r?e:_(e);return i[t]=n,i}Me[De]=!0,Me.delete=Me.remove,Me.removeIn=Me.deleteIn,Fe.prototype.get=function(e,t,n,r){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(ae(n,i[o][0]))return i[o][1];return r},Fe.prototype.update=function(e,t,n,r,i,o,a){for(var u=i===v,l=this.entries,s=0,c=l.length;s<c&&!ae(r,l[s][0]);s++);var f=s<c;if(f?l[s][1]===i:u)return this;if(b(a),(u||!f)&&b(o),!u||1!==l.length){if(!f&&!u&&l.length>=tt)return function(e,t,n,r){e||(e=new w);for(var i=new Le(e,me(n),[n,r]),o=0;o<t.length;o++){var a=t[o];i=i.update(e,0,void 0,a[0],a[1])}return i}(e,l,r,i);var p=e&&e===this.ownerID,d=p?l:_(l);return f?u?s===c-1?d.pop():d[s]=d.pop():d[s]=[r,i]:d.push([r,i]),p?(this.entries=d,this):new Fe(e,d)}},Re.prototype.get=function(e,t,n,r){void 0===t&&(t=me(n));var i=1<<(31&(0===e?t:t>>>e)),o=this.bitmap;return 0==(o&i)?r:this.nodes[Ze(o&i-1)].get(e+5,t,n,r)},Re.prototype.update=function(e,t,n,r,i,o,a){void 0===n&&(n=me(r));var u=31&(0===t?n:n>>>t),l=1<<u,s=this.bitmap,c=0!=(s&l);if(!c&&i===v)return this;var f=Ze(s&l-1),p=this.nodes,d=c?p[f]:void 0,h=$e(d,e,t+5,n,r,i,o,a);if(h===d)return this;if(!c&&h&&p.length>=nt)return function(e,t,n,r,i){for(var o=0,a=new Array(32),u=0;0!==n;u++,n>>>=1)a[u]=1&n?t[o++]:void 0;return a[r]=i,new Ne(e,o+1,a)}(e,p,s,u,h);if(c&&!h&&2===p.length&&He(p[1^f]))return p[1^f];if(c&&h&&1===p.length&&He(h))return h;var y=e&&e===this.ownerID,m=c?h?s:s^l:s|l,g=c?h?et(p,f,h,y):function(e,t,n){var r=e.length-1;if(n&&t===r)return e.pop(),e;for(var i=new Array(r),o=0,a=0;a<r;a++)a===t&&(o=1),i[a]=e[a+o];return i}(p,f,y):function(e,t,n,r){var i=e.length+1;if(r&&t+1===i)return e[t]=n,e;for(var o=new Array(i),a=0,u=0;u<i;u++)u===t?(o[u]=n,a=-1):o[u]=e[u+a];return o}(p,f,h,y);return y?(this.bitmap=m,this.nodes=g,this):new Re(e,m,g)},Ne.prototype.get=function(e,t,n,r){void 0===t&&(t=me(n));var i=31&(0===e?t:t>>>e),o=this.nodes[i];return o?o.get(e+5,t,n,r):r},Ne.prototype.update=function(e,t,n,r,i,o,a){void 0===n&&(n=me(r));var u=31&(0===t?n:n>>>t),l=i===v,s=this.nodes,c=s[u];if(l&&!c)return this;var f=$e(c,e,t+5,n,r,i,o,a);if(f===c)return this;var p=this.count;if(c){if(!f&&--p<rt)return function(e,t,n,r){for(var i=0,o=0,a=new Array(n),u=0,l=1,s=t.length;u<s;u++,l<<=1){var c=t[u];void 0!==c&&u!==r&&(i|=l,a[o++]=c)}return new Re(e,i,a)}(e,s,p,u)}else p++;var d=e&&e===this.ownerID,h=et(s,u,f,d);return d?(this.count=p,this.nodes=h,this):new Ne(e,p,h)},ze.prototype.get=function(e,t,n,r){for(var i=this.entries,o=0,a=i.length;o<a;o++)if(ae(n,i[o][0]))return i[o][1];return r},ze.prototype.update=function(e,t,n,r,i,o,a){void 0===n&&(n=me(r));var u=i===v;if(n!==this.keyHash)return u?this:(b(a),b(o),Qe(this,e,t,n,[r,i]));for(var l=this.entries,s=0,c=l.length;s<c&&!ae(r,l[s][0]);s++);var f=s<c;if(f?l[s][1]===i:u)return this;if(b(a),(u||!f)&&b(o),u&&2===c)return new Le(e,this.keyHash,l[1^s]);var p=e&&e===this.ownerID,d=p?l:_(l);return f?u?s===c-1?d.pop():d[s]=d.pop():d[s]=[r,i]:d.push([r,i]),p?(this.entries=d,this):new ze(e,this.keyHash,d)},Le.prototype.get=function(e,t,n,r){return ae(n,this.entry[0])?this.entry[1]:r},Le.prototype.update=function(e,t,n,r,i,o,a){var u=i===v,l=ae(r,this.entry[0]);return(l?i===this.entry[1]:u)?this:(b(a),u?void b(o):l?e&&e===this.ownerID?(this.entry[1]=i,this):new Le(e,this.keyHash,[r,i]):(b(o),Qe(this,e,t,me(r),[r,i])))},Fe.prototype.iterate=ze.prototype.iterate=function(e,t){for(var n=this.entries,r=0,i=n.length-1;r<=i;r++)if(!1===e(n[t?i-r:r]))return!1},Re.prototype.iterate=Ne.prototype.iterate=function(e,t){for(var n=this.nodes,r=0,i=n.length-1;r<=i;r++){var o=n[t?i-r:r];if(o&&!1===o.iterate(e,t))return!1}},Le.prototype.iterate=function(e,t){return e(this.entry)},t(Ue,M),Ue.prototype.next=function(){for(var e=this._type,t=this._stack;t;){var n,r=t.node,i=t.index++;if(r.entry){if(0===i)return Be(e,r.entry)}else if(r.entries){if(i<=(n=r.entries.length-1))return Be(e,r.entries[this._reverse?n-i:i])}else if(i<=(n=r.nodes.length-1)){var o=r.nodes[this._reverse?n-i:i];if(o){if(o.entry)return Be(e,o.entry);t=this._stack=Ve(o,t)}continue}t=this._stack=this._stack.__prev}return{value:void 0,done:!0}};var tt=8,nt=16,rt=8;function it(e){var t=ht();if(null==e)return t;if(ot(e))return e;var n=i(e),r=n.size;return 0===r?t:(je(r),r>0&&r<32?dt(0,r,5,null,new lt(n.toArray())):t.withMutations((function(e){e.setSize(r),n.forEach((function(t,n){return e.set(n,t)}))})))}function ot(e){return!(!e||!e[at])}t(it,de),it.of=function(){return this(arguments)},it.prototype.toString=function(){return this.__toString("List [","]")},it.prototype.get=function(e,t){if((e=x(this,e))>=0&&e<this.size){var n=mt(this,e+=this._origin);return n&&n.array[31&e]}return t},it.prototype.set=function(e,t){return function(e,t,n){if((t=x(e,t))!=t)return e;if(t>=e.size||t<0)return e.withMutations((function(e){t<0?gt(e,t).set(0,n):gt(e,0,t+1).set(t,n)}));t+=e._origin;var r=e._tail,i=e._root,o=g(m);return t>=wt(e._capacity)?r=vt(r,e.__ownerID,0,t,n,o):i=vt(i,e.__ownerID,e._level,t,n,o),o.value?e.__ownerID?(e._root=i,e._tail=r,e.__hash=void 0,e.__altered=!0,e):dt(e._origin,e._capacity,e._level,i,r):e}(this,e,t)},it.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this},it.prototype.insert=function(e,t){return this.splice(e,0,t)},it.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=5,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):ht()},it.prototype.push=function(){var e=arguments,t=this.size;return this.withMutations((function(n){gt(n,0,t+e.length);for(var r=0;r<e.length;r++)n.set(t+r,e[r])}))},it.prototype.pop=function(){return gt(this,0,-1)},it.prototype.unshift=function(){var e=arguments;return this.withMutations((function(t){gt(t,-e.length);for(var n=0;n<e.length;n++)t.set(n,e[n])}))},it.prototype.shift=function(){return gt(this,1)},it.prototype.merge=function(){return bt(this,void 0,arguments)},it.prototype.mergeWith=function(t){var n=e.call(arguments,1);return bt(this,t,n)},it.prototype.mergeDeep=function(){return bt(this,Ge,arguments)},it.prototype.mergeDeepWith=function(t){var n=e.call(arguments,1);return bt(this,Xe(t),n)},it.prototype.setSize=function(e){return gt(this,0,e)},it.prototype.slice=function(e,t){var n=this.size;return k(e,t,n)?this:gt(this,S(e,n),C(t,n))},it.prototype.__iterator=function(e,t){var n=0,r=pt(this,t);return new M((function(){var t=r();return t===ft?{value:void 0,done:!0}:F(e,n++,t)}))},it.prototype.__iterate=function(e,t){for(var n,r=0,i=pt(this,t);(n=i())!==ft&&!1!==e(n,r++,this););return r},it.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?dt(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash):(this.__ownerID=e,this)},it.isList=ot;var at="@@__IMMUTABLE_LIST__@@",ut=it.prototype;function lt(e,t){this.array=e,this.ownerID=t}ut[at]=!0,ut.delete=ut.remove,ut.setIn=Me.setIn,ut.deleteIn=ut.removeIn=Me.removeIn,ut.update=Me.update,ut.updateIn=Me.updateIn,ut.mergeIn=Me.mergeIn,ut.mergeDeepIn=Me.mergeDeepIn,ut.withMutations=Me.withMutations,ut.asMutable=Me.asMutable,ut.asImmutable=Me.asImmutable,ut.wasAltered=Me.wasAltered,lt.prototype.removeBefore=function(e,t,n){if(n===t?1<<t:0===this.array.length)return this;var r=n>>>t&31;if(r>=this.array.length)return new lt([],e);var i,o=0===r;if(t>0){var a=this.array[r];if((i=a&&a.removeBefore(e,t-5,n))===a&&o)return this}if(o&&!i)return this;var u=yt(this,e);if(!o)for(var l=0;l<r;l++)u.array[l]=void 0;return i&&(u.array[r]=i),u},lt.prototype.removeAfter=function(e,t,n){if(n===(t?1<<t:0)||0===this.array.length)return this;var r,i=n-1>>>t&31;if(i>=this.array.length)return this;if(t>0){var o=this.array[i];if((r=o&&o.removeAfter(e,t-5,n))===o&&i===this.array.length-1)return this}var a=yt(this,e);return a.array.splice(i+1),r&&(a.array[i]=r),a};var st,ct,ft={};function pt(e,t){var n=e._origin,r=e._capacity,i=wt(r),o=e._tail;return a(e._root,e._level,0);function a(e,u,l){return 0===u?function(e,a){var u=a===i?o&&o.array:e&&e.array,l=a>n?0:n-a,s=r-a;return s>32&&(s=32),function(){if(l===s)return ft;var e=t?--s:l++;return u&&u[e]}}(e,l):function(e,i,o){var u,l=e&&e.array,s=o>n?0:n-o>>i,c=1+(r-o>>i);return c>32&&(c=32),function(){for(;;){if(u){var e=u();if(e!==ft)return e;u=null}if(s===c)return ft;var n=t?--c:s++;u=a(l&&l[n],i-5,o+(n<<i))}}}(e,u,l)}}function dt(e,t,n,r,i,o,a){var u=Object.create(ut);return u.size=t-e,u._origin=e,u._capacity=t,u._level=n,u._root=r,u._tail=i,u.__ownerID=o,u.__hash=a,u.__altered=!1,u}function ht(){return st||(st=dt(0,0,5))}function vt(e,t,n,r,i,o){var a,u=r>>>n&31,l=e&&u<e.array.length;if(!l&&void 0===i)return e;if(n>0){var s=e&&e.array[u],c=vt(s,t,n-5,r,i,o);return c===s?e:((a=yt(e,t)).array[u]=c,a)}return l&&e.array[u]===i?e:(b(o),a=yt(e,t),void 0===i&&u===a.array.length-1?a.array.pop():a.array[u]=i,a)}function yt(e,t){return t&&e&&t===e.ownerID?e:new lt(e?e.array.slice():[],t)}function mt(e,t){if(t>=wt(e._capacity))return e._tail;if(t<1<<e._level+5){for(var n=e._root,r=e._level;n&&r>0;)n=n.array[t>>>r&31],r-=5;return n}}function gt(e,t,n){void 0!==t&&(t|=0),void 0!==n&&(n|=0);var r=e.__ownerID||new w,i=e._origin,o=e._capacity,a=i+t,u=void 0===n?o:n<0?o+n:i+n;if(a===i&&u===o)return e;if(a>=u)return e.clear();for(var l=e._level,s=e._root,c=0;a+c<0;)s=new lt(s&&s.array.length?[void 0,s]:[],r),c+=1<<(l+=5);c&&(a+=c,i+=c,u+=c,o+=c);for(var f=wt(o),p=wt(u);p>=1<<l+5;)s=new lt(s&&s.array.length?[s]:[],r),l+=5;var d=e._tail,h=p<f?mt(e,u-1):p>f?new lt([],r):d;if(d&&p>f&&a<o&&d.array.length){for(var v=s=yt(s,r),y=l;y>5;y-=5){var m=f>>>y&31;v=v.array[m]=yt(v.array[m],r)}v.array[f>>>5&31]=d}if(u<o&&(h=h&&h.removeAfter(r,0,u)),a>=p)a-=p,u-=p,l=5,s=null,h=h&&h.removeBefore(r,0,a);else if(a>i||p<f){for(c=0;s;){var g=a>>>l&31;if(g!==p>>>l&31)break;g&&(c+=(1<<l)*g),l-=5,s=s.array[g]}s&&a>i&&(s=s.removeBefore(r,l,a-c)),s&&p<f&&(s=s.removeAfter(r,l,p-c)),c&&(a-=c,u-=c)}return e.__ownerID?(e.size=u-a,e._origin=a,e._capacity=u,e._level=l,e._root=s,e._tail=h,e.__hash=void 0,e.__altered=!0,e):dt(a,u,l,s,h)}function bt(e,t,n){for(var r=[],o=0,u=0;u<n.length;u++){var l=n[u],s=i(l);s.size>o&&(o=s.size),a(l)||(s=s.map((function(e){return re(e)}))),r.push(s)}return o>e.size&&(e=e.setSize(o)),Je(e,t,r)}function wt(e){return e<32?0:e-1>>>5<<5}function _t(e){return null==e?Ot():Et(e)?e:Ot().withMutations((function(t){var n=r(e);je(n.size),n.forEach((function(e,n){return t.set(n,e)}))}))}function Et(e){return Ae(e)&&c(e)}function xt(e,t,n,r){var i=Object.create(_t.prototype);return i.size=e?e.size:0,i._map=e,i._list=t,i.__ownerID=n,i.__hash=r,i}function Ot(){return ct||(ct=xt(We(),ht()))}function kt(e,t,n){var r,i,o=e._map,a=e._list,u=o.get(t),l=void 0!==u;if(n===v){if(!l)return e;a.size>=32&&a.size>=2*o.size?(r=(i=a.filter((function(e,t){return void 0!==e&&u!==t}))).toKeyedSeq().map((function(e){return e[0]})).flip().toMap(),e.__ownerID&&(r.__ownerID=i.__ownerID=e.__ownerID)):(r=o.remove(t),i=u===a.size-1?a.pop():a.set(u,void 0))}else if(l){if(n===a.get(u)[1])return e;r=o,i=a.set(u,[t,n])}else r=o.set(t,a.size),i=a.set(a.size,[t,n]);return e.__ownerID?(e.size=r.size,e._map=r,e._list=i,e.__hash=void 0,e):xt(r,i)}function St(e,t){this._iter=e,this._useKeys=t,this.size=e.size}function Ct(e){this._iter=e,this.size=e.size}function Tt(e){this._iter=e,this.size=e.size}function jt(e){this._iter=e,this.size=e.size}function Pt(e){var t=$t(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var t=e.reverse.apply(this);return t.flip=function(){return e.reverse()},t},t.has=function(t){return e.includes(t)},t.includes=function(t){return e.has(t)},t.cacheResult=Ht,t.__iterateUncached=function(t,n){var r=this;return e.__iterate((function(e,n){return!1!==t(n,e,r)}),n)},t.__iteratorUncached=function(t,n){if(2===t){var r=e.__iterator(t,n);return new M((function(){var e=r.next();if(!e.done){var t=e.value[0];e.value[0]=e.value[1],e.value[1]=t}return e}))}return e.__iterator(1===t?0:1,n)},t}function At(e,t,n){var r=$t(e);return r.size=e.size,r.has=function(t){return e.has(t)},r.get=function(r,i){var o=e.get(r,v);return o===v?i:t.call(n,o,r,e)},r.__iterateUncached=function(r,i){var o=this;return e.__iterate((function(e,i,a){return!1!==r(t.call(n,e,i,a),i,o)}),i)},r.__iteratorUncached=function(r,i){var o=e.__iterator(2,i);return new M((function(){var i=o.next();if(i.done)return i;var a=i.value,u=a[0];return F(r,u,t.call(n,a[1],u,e),i)}))},r}function It(e,t){var n=$t(e);return n._iter=e,n.size=e.size,n.reverse=function(){return e},e.flip&&(n.flip=function(){var t=Pt(e);return t.reverse=function(){return e.flip()},t}),n.get=function(n,r){return e.get(t?n:-1-n,r)},n.has=function(n){return e.has(t?n:-1-n)},n.includes=function(t){return e.includes(t)},n.cacheResult=Ht,n.__iterate=function(t,n){var r=this;return e.__iterate((function(e,n){return t(e,n,r)}),!n)},n.__iterator=function(t,n){return e.__iterator(t,!n)},n}function Dt(e,t,n,r){var i=$t(e);return r&&(i.has=function(r){var i=e.get(r,v);return i!==v&&!!t.call(n,i,r,e)},i.get=function(r,i){var o=e.get(r,v);return o!==v&&t.call(n,o,r,e)?o:i}),i.__iterateUncached=function(i,o){var a=this,u=0;return e.__iterate((function(e,o,l){if(t.call(n,e,o,l))return u++,i(e,r?o:u-1,a)}),o),u},i.__iteratorUncached=function(i,o){var a=e.__iterator(2,o),u=0;return new M((function(){for(;;){var o=a.next();if(o.done)return o;var l=o.value,s=l[0],c=l[1];if(t.call(n,c,s,e))return F(i,r?s:u++,c,o)}}))},i}function Mt(e,t,n,r){var i=e.size;if(void 0!==t&&(t|=0),void 0!==n&&(n===1/0?n=i:n|=0),k(t,n,i))return e;var o=S(t,i),a=C(n,i);if(o!=o||a!=a)return Mt(e.toSeq().cacheResult(),t,n,r);var u,l=a-o;l==l&&(u=l<0?0:l);var s=$t(e);return s.size=0===u?u:e.size&&u||void 0,!r&&G(e)&&u>=0&&(s.get=function(t,n){return(t=x(this,t))>=0&&t<u?e.get(t+o,n):n}),s.__iterateUncached=function(t,n){var i=this;if(0===u)return 0;if(n)return this.cacheResult().__iterate(t,n);var a=0,l=!0,s=0;return e.__iterate((function(e,n){if(!l||!(l=a++<o))return s++,!1!==t(e,r?n:s-1,i)&&s!==u})),s},s.__iteratorUncached=function(t,n){if(0!==u&&n)return this.cacheResult().__iterator(t,n);var i=0!==u&&e.__iterator(t,n),a=0,l=0;return new M((function(){for(;a++<o;)i.next();if(++l>u)return{value:void 0,done:!0};var e=i.next();return r||1===t?e:F(t,l-1,0===t?void 0:e.value[1],e)}))},s}function Ft(e,t,n,r){var i=$t(e);return i.__iterateUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterate(i,o);var u=!0,l=0;return e.__iterate((function(e,o,s){if(!u||!(u=t.call(n,e,o,s)))return l++,i(e,r?o:l-1,a)})),l},i.__iteratorUncached=function(i,o){var a=this;if(o)return this.cacheResult().__iterator(i,o);var u=e.__iterator(2,o),l=!0,s=0;return new M((function(){var e,o,c;do{if((e=u.next()).done)return r||1===i?e:F(i,s++,0===i?void 0:e.value[1],e);var f=e.value;o=f[0],c=f[1],l&&(l=t.call(n,c,o,a))}while(l);return 2===i?e:F(i,o,c,e)}))},i}function Rt(e,t){var n=u(e),i=[e].concat(t).map((function(e){return a(e)?n&&(e=r(e)):e=n?J(e):Z(Array.isArray(e)?e:[e]),e})).filter((function(e){return 0!==e.size}));if(0===i.length)return e;if(1===i.length){var o=i[0];if(o===e||n&&u(o)||l(e)&&l(o))return o}var s=new $(i);return n?s=s.toKeyedSeq():l(e)||(s=s.toSetSeq()),(s=s.flatten(!0)).size=i.reduce((function(e,t){if(void 0!==e){var n=t.size;if(void 0!==n)return e+n}}),0),s}function Nt(e,t,n){var r=$t(e);return r.__iterateUncached=function(r,i){var o=0,u=!1;return function e(l,s){var c=this;l.__iterate((function(i,l){return(!t||s<t)&&a(i)?e(i,s+1):!1===r(i,n?l:o++,c)&&(u=!0),!u}),i)}(e,0),o},r.__iteratorUncached=function(r,i){var o=e.__iterator(r,i),u=[],l=0;return new M((function(){for(;o;){var e=o.next();if(!1===e.done){var s=e.value;if(2===r&&(s=s[1]),t&&!(u.length<t)||!a(s))return n?e:F(r,l++,s,e);u.push(o),o=s.__iterator(r,i)}else o=u.pop()}return{value:void 0,done:!0}}))},r}function zt(e,t,n){t||(t=Qt);var r=u(e),i=0,o=e.toSeq().map((function(t,r){return[r,t,i++,n?n(t,r,e):t]})).toArray();return o.sort((function(e,n){return t(e[3],n[3])||e[2]-n[2]})).forEach(r?function(e,t){o[t].length=2}:function(e,t){o[t]=e[1]}),r?q(o):l(e)?W(o):K(o)}function Lt(e,t,n){if(t||(t=Qt),n){var r=e.toSeq().map((function(t,r){return[t,n(t,r,e)]})).reduce((function(e,n){return Ut(t,e[1],n[1])?n:e}));return r&&r[0]}return e.reduce((function(e,n){return Ut(t,e,n)?n:e}))}function Ut(e,t,n){var r=e(n,t);return 0===r&&n!==t&&(null==n||n!=n)||r>0}function Bt(e,t,r){var i=$t(e);return i.size=new $(r).map((function(e){return e.size})).min(),i.__iterate=function(e,t){for(var n,r=this.__iterator(1,t),i=0;!(n=r.next()).done&&!1!==e(n.value,i++,this););return i},i.__iteratorUncached=function(e,i){var o=r.map((function(e){return e=n(e),L(i?e.reverse():e)})),a=0,u=!1;return new M((function(){var n;return u||(n=o.map((function(e){return e.next()})),u=n.some((function(e){return e.done}))),u?{value:void 0,done:!0}:F(e,a++,t.apply(null,n.map((function(e){return e.value}))))}))},i}function Vt(e,t){return G(e)?t:e.constructor(t)}function qt(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function Wt(e){return je(e.size),E(e)}function Kt(e){return u(e)?r:l(e)?i:o}function $t(e){return Object.create((u(e)?q:l(e)?W:K).prototype)}function Ht(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):V.prototype.cacheResult.call(this)}function Qt(e,t){return e>t?1:e<t?-1:0}function Yt(e){var t=L(e);if(!t){if(!B(e))throw new TypeError("Expected iterable or array-like: "+e);t=L(n(e))}return t}function Gt(e,t){var n,r=function(o){if(o instanceof r)return o;if(!(this instanceof r))return new r(o);if(!n){n=!0;var a=Object.keys(e);!function(e,t){try{t.forEach(en.bind(void 0,e))}catch(e){}}(i,a),i.size=a.length,i._name=t,i._keys=a,i._defaultValues=e}this._map=Pe(o)},i=r.prototype=Object.create(Xt);return i.constructor=r,r}t(_t,Pe),_t.of=function(){return this(arguments)},_t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},_t.prototype.get=function(e,t){var n=this._map.get(e);return void 0!==n?this._list.get(n)[1]:t},_t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):Ot()},_t.prototype.set=function(e,t){return kt(this,e,t)},_t.prototype.remove=function(e){return kt(this,e,v)},_t.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},_t.prototype.__iterate=function(e,t){var n=this;return this._list.__iterate((function(t){return t&&e(t[1],t[0],n)}),t)},_t.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)},_t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e),n=this._list.__ensureOwner(e);return e?xt(t,n,e,this.__hash):(this.__ownerID=e,this._map=t,this._list=n,this)},_t.isOrderedMap=Et,_t.prototype[h]=!0,_t.prototype.delete=_t.prototype.remove,t(St,q),St.prototype.get=function(e,t){return this._iter.get(e,t)},St.prototype.has=function(e){return this._iter.has(e)},St.prototype.valueSeq=function(){return this._iter.valueSeq()},St.prototype.reverse=function(){var e=this,t=It(this,!0);return this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()}),t},St.prototype.map=function(e,t){var n=this,r=At(this,e,t);return this._useKeys||(r.valueSeq=function(){return n._iter.toSeq().map(e,t)}),r},St.prototype.__iterate=function(e,t){var n,r=this;return this._iter.__iterate(this._useKeys?function(t,n){return e(t,n,r)}:(n=t?Wt(this):0,function(i){return e(i,t?--n:n++,r)}),t)},St.prototype.__iterator=function(e,t){if(this._useKeys)return this._iter.__iterator(e,t);var n=this._iter.__iterator(1,t),r=t?Wt(this):0;return new M((function(){var i=n.next();return i.done?i:F(e,t?--r:r++,i.value,i)}))},St.prototype[h]=!0,t(Ct,W),Ct.prototype.includes=function(e){return this._iter.includes(e)},Ct.prototype.__iterate=function(e,t){var n=this,r=0;return this._iter.__iterate((function(t){return e(t,r++,n)}),t)},Ct.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t),r=0;return new M((function(){var t=n.next();return t.done?t:F(e,r++,t.value,t)}))},t(Tt,K),Tt.prototype.has=function(e){return this._iter.includes(e)},Tt.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate((function(t){return e(t,t,n)}),t)},Tt.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t);return new M((function(){var t=n.next();return t.done?t:F(e,t.value,t.value,t)}))},t(jt,q),jt.prototype.entrySeq=function(){return this._iter.toSeq()},jt.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate((function(t){if(t){qt(t);var r=a(t);return e(r?t.get(1):t[1],r?t.get(0):t[0],n)}}),t)},jt.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t);return new M((function(){for(;;){var t=n.next();if(t.done)return t;var r=t.value;if(r){qt(r);var i=a(r);return F(e,i?r.get(0):r[0],i?r.get(1):r[1],t)}}}))},Ct.prototype.cacheResult=St.prototype.cacheResult=Tt.prototype.cacheResult=jt.prototype.cacheResult=Ht,t(Gt,pe),Gt.prototype.toString=function(){return this.__toString(Zt(this)+" {","}")},Gt.prototype.has=function(e){return this._defaultValues.hasOwnProperty(e)},Gt.prototype.get=function(e,t){if(!this.has(e))return t;var n=this._defaultValues[e];return this._map?this._map.get(e,n):n},Gt.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var e=this.constructor;return e._empty||(e._empty=Jt(this,We()))},Gt.prototype.set=function(e,t){if(!this.has(e))throw new Error('Cannot set unknown key "'+e+'" on '+Zt(this));if(this._map&&!this._map.has(e)&&t===this._defaultValues[e])return this;var n=this._map&&this._map.set(e,t);return this.__ownerID||n===this._map?this:Jt(this,n)},Gt.prototype.remove=function(e){if(!this.has(e))return this;var t=this._map&&this._map.remove(e);return this.__ownerID||t===this._map?this:Jt(this,t)},Gt.prototype.wasAltered=function(){return this._map.wasAltered()},Gt.prototype.__iterator=function(e,t){var n=this;return r(this._defaultValues).map((function(e,t){return n.get(t)})).__iterator(e,t)},Gt.prototype.__iterate=function(e,t){var n=this;return r(this._defaultValues).map((function(e,t){return n.get(t)})).__iterate(e,t)},Gt.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map&&this._map.__ensureOwner(e);return e?Jt(this,t,e):(this.__ownerID=e,this._map=t,this)};var Xt=Gt.prototype;function Jt(e,t,n){var r=Object.create(Object.getPrototypeOf(e));return r._map=t,r.__ownerID=n,r}function Zt(e){return e._name||e.constructor.name||"Record"}function en(e,t){Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){se(this.__ownerID,"Cannot set on an immutable record."),this.set(t,e)}})}function tn(e){return null==e?sn():nn(e)&&!c(e)?e:sn().withMutations((function(t){var n=o(e);je(n.size),n.forEach((function(e){return t.add(e)}))}))}function nn(e){return!(!e||!e[on])}Xt.delete=Xt.remove,Xt.deleteIn=Xt.removeIn=Me.removeIn,Xt.merge=Me.merge,Xt.mergeWith=Me.mergeWith,Xt.mergeIn=Me.mergeIn,Xt.mergeDeep=Me.mergeDeep,Xt.mergeDeepWith=Me.mergeDeepWith,Xt.mergeDeepIn=Me.mergeDeepIn,Xt.setIn=Me.setIn,Xt.update=Me.update,Xt.updateIn=Me.updateIn,Xt.withMutations=Me.withMutations,Xt.asMutable=Me.asMutable,Xt.asImmutable=Me.asImmutable,t(tn,he),tn.of=function(){return this(arguments)},tn.fromKeys=function(e){return this(r(e).keySeq())},tn.prototype.toString=function(){return this.__toString("Set {","}")},tn.prototype.has=function(e){return this._map.has(e)},tn.prototype.add=function(e){return un(this,this._map.set(e,!0))},tn.prototype.remove=function(e){return un(this,this._map.remove(e))},tn.prototype.clear=function(){return un(this,this._map.clear())},tn.prototype.union=function(){var t=e.call(arguments,0);return 0===(t=t.filter((function(e){return 0!==e.size}))).length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations((function(e){for(var n=0;n<t.length;n++)o(t[n]).forEach((function(t){return e.add(t)}))})):this.constructor(t[0])},tn.prototype.intersect=function(){var t=e.call(arguments,0);if(0===t.length)return this;t=t.map((function(e){return o(e)}));var n=this;return this.withMutations((function(e){n.forEach((function(n){t.every((function(e){return e.includes(n)}))||e.remove(n)}))}))},tn.prototype.subtract=function(){var t=e.call(arguments,0);if(0===t.length)return this;t=t.map((function(e){return o(e)}));var n=this;return this.withMutations((function(e){n.forEach((function(n){t.some((function(e){return e.includes(n)}))&&e.remove(n)}))}))},tn.prototype.merge=function(){return this.union.apply(this,arguments)},tn.prototype.mergeWith=function(t){var n=e.call(arguments,1);return this.union.apply(this,n)},tn.prototype.sort=function(e){return cn(zt(this,e))},tn.prototype.sortBy=function(e,t){return cn(zt(this,t,e))},tn.prototype.wasAltered=function(){return this._map.wasAltered()},tn.prototype.__iterate=function(e,t){var n=this;return this._map.__iterate((function(t,r){return e(r,r,n)}),t)},tn.prototype.__iterator=function(e,t){return this._map.map((function(e,t){return t})).__iterator(e,t)},tn.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e);return e?this.__make(t,e):(this.__ownerID=e,this._map=t,this)},tn.isSet=nn;var rn,on="@@__IMMUTABLE_SET__@@",an=tn.prototype;function un(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:0===t.size?e.__empty():e.__make(t)}function ln(e,t){var n=Object.create(an);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function sn(){return rn||(rn=ln(We()))}function cn(e){return null==e?vn():fn(e)?e:vn().withMutations((function(t){var n=o(e);je(n.size),n.forEach((function(e){return t.add(e)}))}))}function fn(e){return nn(e)&&c(e)}an[on]=!0,an.delete=an.remove,an.mergeDeep=an.merge,an.mergeDeepWith=an.mergeWith,an.withMutations=Me.withMutations,an.asMutable=Me.asMutable,an.asImmutable=Me.asImmutable,an.__empty=sn,an.__make=ln,t(cn,tn),cn.of=function(){return this(arguments)},cn.fromKeys=function(e){return this(r(e).keySeq())},cn.prototype.toString=function(){return this.__toString("OrderedSet {","}")},cn.isOrderedSet=fn;var pn,dn=cn.prototype;function hn(e,t){var n=Object.create(dn);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function vn(){return pn||(pn=hn(Ot()))}function yn(e){return null==e?En():mn(e)?e:En().unshiftAll(e)}function mn(e){return!(!e||!e[bn])}dn[h]=!0,dn.__empty=vn,dn.__make=hn,t(yn,de),yn.of=function(){return this(arguments)},yn.prototype.toString=function(){return this.__toString("Stack [","]")},yn.prototype.get=function(e,t){var n=this._head;for(e=x(this,e);n&&e--;)n=n.next;return n?n.value:t},yn.prototype.peek=function(){return this._head&&this._head.value},yn.prototype.push=function(){if(0===arguments.length)return this;for(var e=this.size+arguments.length,t=this._head,n=arguments.length-1;n>=0;n--)t={value:arguments[n],next:t};return this.__ownerID?(this.size=e,this._head=t,this.__hash=void 0,this.__altered=!0,this):_n(e,t)},yn.prototype.pushAll=function(e){if(0===(e=i(e)).size)return this;je(e.size);var t=this.size,n=this._head;return e.reverse().forEach((function(e){t++,n={value:e,next:n}})),this.__ownerID?(this.size=t,this._head=n,this.__hash=void 0,this.__altered=!0,this):_n(t,n)},yn.prototype.pop=function(){return this.slice(1)},yn.prototype.unshift=function(){return this.push.apply(this,arguments)},yn.prototype.unshiftAll=function(e){return this.pushAll(e)},yn.prototype.shift=function(){return this.pop.apply(this,arguments)},yn.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):En()},yn.prototype.slice=function(e,t){if(k(e,t,this.size))return this;var n=S(e,this.size);if(C(t,this.size)!==this.size)return de.prototype.slice.call(this,e,t);for(var r=this.size-n,i=this._head;n--;)i=i.next;return this.__ownerID?(this.size=r,this._head=i,this.__hash=void 0,this.__altered=!0,this):_n(r,i)},yn.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?_n(this.size,this._head,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},yn.prototype.__iterate=function(e,t){if(t)return this.reverse().__iterate(e);for(var n=0,r=this._head;r&&!1!==e(r.value,n++,this);)r=r.next;return n},yn.prototype.__iterator=function(e,t){if(t)return this.reverse().__iterator(e);var n=0,r=this._head;return new M((function(){if(r){var t=r.value;return r=r.next,F(e,n++,t)}return{value:void 0,done:!0}}))},yn.isStack=mn;var gn,bn="@@__IMMUTABLE_STACK__@@",wn=yn.prototype;function _n(e,t,n,r){var i=Object.create(wn);return i.size=e,i._head=t,i.__ownerID=n,i.__hash=r,i.__altered=!1,i}function En(){return gn||(gn=_n(0))}function xn(e,t){var n=function(n){e.prototype[n]=t[n]};return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}wn[bn]=!0,wn.withMutations=Me.withMutations,wn.asMutable=Me.asMutable,wn.asImmutable=Me.asImmutable,wn.wasAltered=Me.wasAltered,n.Iterator=M,xn(n,{toArray:function(){je(this.size);var e=new Array(this.size||0);return this.valueSeq().__iterate((function(t,n){e[n]=t})),e},toIndexedSeq:function(){return new Ct(this)},toJS:function(){return this.toSeq().map((function(e){return e&&"function"==typeof e.toJS?e.toJS():e})).__toJS()},toJSON:function(){return this.toSeq().map((function(e){return e&&"function"==typeof e.toJSON?e.toJSON():e})).__toJS()},toKeyedSeq:function(){return new St(this,!0)},toMap:function(){return Pe(this.toKeyedSeq())},toObject:function(){je(this.size);var e={};return this.__iterate((function(t,n){e[n]=t})),e},toOrderedMap:function(){return _t(this.toKeyedSeq())},toOrderedSet:function(){return cn(u(this)?this.valueSeq():this)},toSet:function(){return tn(u(this)?this.valueSeq():this)},toSetSeq:function(){return new Tt(this)},toSeq:function(){return l(this)?this.toIndexedSeq():u(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return yn(u(this)?this.valueSeq():this)},toList:function(){return it(u(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(e,t){return 0===this.size?e+t:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){var t=e.call(arguments,0);return Vt(this,Rt(this,t))},includes:function(e){return this.some((function(t){return ae(t,e)}))},entries:function(){return this.__iterator(2)},every:function(e,t){je(this.size);var n=!0;return this.__iterate((function(r,i,o){if(!e.call(t,r,i,o))return n=!1,!1})),n},filter:function(e,t){return Vt(this,Dt(this,e,t,!0))},find:function(e,t,n){var r=this.findEntry(e,t);return r?r[1]:n},forEach:function(e,t){return je(this.size),this.__iterate(t?e.bind(t):e)},join:function(e){je(this.size),e=void 0!==e?""+e:",";var t="",n=!0;return this.__iterate((function(r){n?n=!1:t+=e,t+=null!=r?r.toString():""})),t},keys:function(){return this.__iterator(0)},map:function(e,t){return Vt(this,At(this,e,t))},reduce:function(e,t,n){var r,i;return je(this.size),arguments.length<2?i=!0:r=t,this.__iterate((function(t,o,a){i?(i=!1,r=t):r=e.call(n,r,t,o,a)})),r},reduceRight:function(e,t,n){var r=this.toKeyedSeq().reverse();return r.reduce.apply(r,arguments)},reverse:function(){return Vt(this,It(this,!0))},slice:function(e,t){return Vt(this,Mt(this,e,t,!0))},some:function(e,t){return!this.every(Tn(e),t)},sort:function(e){return Vt(this,zt(this,e))},values:function(){return this.__iterator(1)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some((function(){return!0}))},count:function(e,t){return E(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return function(e,t,n){var r=Pe().asMutable();return e.__iterate((function(i,o){r.update(t.call(n,i,o,e),0,(function(e){return e+1}))})),r.asImmutable()}(this,e,t)},equals:function(e){return ue(this,e)},entrySeq:function(){var e=this;if(e._cache)return new $(e._cache);var t=e.toSeq().map(Cn).toIndexedSeq();return t.fromEntrySeq=function(){return e.toSeq()},t},filterNot:function(e,t){return this.filter(Tn(e),t)},findEntry:function(e,t,n){var r=n;return this.__iterate((function(n,i,o){if(e.call(t,n,i,o))return r=[i,n],!1})),r},findKey:function(e,t){var n=this.findEntry(e,t);return n&&n[0]},findLast:function(e,t,n){return this.toKeyedSeq().reverse().find(e,t,n)},findLastEntry:function(e,t,n){return this.toKeyedSeq().reverse().findEntry(e,t,n)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(){return this.find(O)},flatMap:function(e,t){return Vt(this,function(e,t,n){var r=Kt(e);return e.toSeq().map((function(i,o){return r(t.call(n,i,o,e))})).flatten(!0)}(this,e,t))},flatten:function(e){return Vt(this,Nt(this,e,!0))},fromEntrySeq:function(){return new jt(this)},get:function(e,t){return this.find((function(t,n){return ae(n,e)}),void 0,t)},getIn:function(e,t){for(var n,r=this,i=Yt(e);!(n=i.next()).done;){var o=n.value;if((r=r&&r.get?r.get(o,v):v)===v)return t}return r},groupBy:function(e,t){return function(e,t,n){var r=u(e),i=(c(e)?_t():Pe()).asMutable();e.__iterate((function(o,a){i.update(t.call(n,o,a,e),(function(e){return(e=e||[]).push(r?[a,o]:o),e}))}));var o=Kt(e);return i.map((function(t){return Vt(e,o(t))}))}(this,e,t)},has:function(e){return this.get(e,v)!==v},hasIn:function(e){return this.getIn(e,v)!==v},isSubset:function(e){return e="function"==typeof e.includes?e:n(e),this.every((function(t){return e.includes(t)}))},isSuperset:function(e){return(e="function"==typeof e.isSubset?e:n(e)).isSubset(this)},keyOf:function(e){return this.findKey((function(t){return ae(t,e)}))},keySeq:function(){return this.toSeq().map(Sn).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return Lt(this,e)},maxBy:function(e,t){return Lt(this,t,e)},min:function(e){return Lt(this,e?jn(e):In)},minBy:function(e,t){return Lt(this,t?jn(t):In,e)},rest:function(){return this.slice(1)},skip:function(e){return this.slice(Math.max(0,e))},skipLast:function(e){return Vt(this,this.toSeq().reverse().skip(e).reverse())},skipWhile:function(e,t){return Vt(this,Ft(this,e,t,!0))},skipUntil:function(e,t){return this.skipWhile(Tn(e),t)},sortBy:function(e,t){return Vt(this,zt(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return Vt(this,this.toSeq().reverse().take(e).reverse())},takeWhile:function(e,t){return Vt(this,function(e,t,n){var r=$t(e);return r.__iterateUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterate(r,i);var a=0;return e.__iterate((function(e,i,u){return t.call(n,e,i,u)&&++a&&r(e,i,o)})),a},r.__iteratorUncached=function(r,i){var o=this;if(i)return this.cacheResult().__iterator(r,i);var a=e.__iterator(2,i),u=!0;return new M((function(){if(!u)return{value:void 0,done:!0};var e=a.next();if(e.done)return e;var i=e.value,l=i[0],s=i[1];return t.call(n,s,l,o)?2===r?e:F(r,l,s,e):(u=!1,{value:void 0,done:!0})}))},r}(this,e,t))},takeUntil:function(e,t){return this.takeWhile(Tn(e),t)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=function(e){if(e.size===1/0)return 0;var t=c(e),n=u(e),r=t?1:0;return function(e,t){return t=ve(t,3432918353),t=ve(t<<15|t>>>-15,461845907),t=ve(t<<13|t>>>-13,5),t=ve((t=(t+3864292196|0)^e)^t>>>16,2246822507),t=ye((t=ve(t^t>>>13,3266489909))^t>>>16)}(e.__iterate(n?t?function(e,t){r=31*r+Dn(me(e),me(t))|0}:function(e,t){r=r+Dn(me(e),me(t))|0}:t?function(e){r=31*r+me(e)|0}:function(e){r=r+me(e)|0}),r)}(this))}});var On=n.prototype;On[f]=!0,On[D]=On.values,On.__toJS=On.toArray,On.__toStringMapper=Pn,On.inspect=On.toSource=function(){return this.toString()},On.chain=On.flatMap,On.contains=On.includes,xn(r,{flip:function(){return Vt(this,Pt(this))},mapEntries:function(e,t){var n=this,r=0;return Vt(this,this.toSeq().map((function(i,o){return e.call(t,[o,i],r++,n)})).fromEntrySeq())},mapKeys:function(e,t){var n=this;return Vt(this,this.toSeq().flip().map((function(r,i){return e.call(t,r,i,n)})).flip())}});var kn=r.prototype;function Sn(e,t){return t}function Cn(e,t){return[t,e]}function Tn(e){return function(){return!e.apply(this,arguments)}}function jn(e){return function(){return-e.apply(this,arguments)}}function Pn(e){return"string"==typeof e?JSON.stringify(e):String(e)}function An(){return _(arguments)}function In(e,t){return e<t?1:e>t?-1:0}function Dn(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}return kn[p]=!0,kn[D]=On.entries,kn.__toJS=On.toObject,kn.__toStringMapper=function(e,t){return JSON.stringify(t)+": "+Pn(e)},xn(i,{toKeyedSeq:function(){return new St(this,!1)},filter:function(e,t){return Vt(this,Dt(this,e,t,!1))},findIndex:function(e,t){var n=this.findEntry(e,t);return n?n[0]:-1},indexOf:function(e){var t=this.keyOf(e);return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e);return void 0===t?-1:t},reverse:function(){return Vt(this,It(this,!1))},slice:function(e,t){return Vt(this,Mt(this,e,t,!1))},splice:function(e,t){var n=arguments.length;if(t=Math.max(0|t,0),0===n||2===n&&!t)return this;e=S(e,e<0?this.count():this.size);var r=this.slice(0,e);return Vt(this,1===n?r:r.concat(_(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var n=this.findLastEntry(e,t);return n?n[0]:-1},first:function(){return this.get(0)},flatten:function(e){return Vt(this,Nt(this,e,!1))},get:function(e,t){return(e=x(this,e))<0||this.size===1/0||void 0!==this.size&&e>this.size?t:this.find((function(t,n){return n===e}),void 0,t)},has:function(e){return(e=x(this,e))>=0&&(void 0!==this.size?this.size===1/0||e<this.size:-1!==this.indexOf(e))},interpose:function(e){return Vt(this,function(e,t){var n=$t(e);return n.size=e.size&&2*e.size-1,n.__iterateUncached=function(n,r){var i=this,o=0;return e.__iterate((function(e,r){return(!o||!1!==n(t,o++,i))&&!1!==n(e,o++,i)}),r),o},n.__iteratorUncached=function(n,r){var i,o=e.__iterator(1,r),a=0;return new M((function(){return(!i||a%2)&&(i=o.next()).done?i:a%2?F(n,a++,t):F(n,a++,i.value,i)}))},n}(this,e))},interleave:function(){var e=[this].concat(_(arguments)),t=Bt(this.toSeq(),W.of,e),n=t.flatten(!0);return t.size&&(n.size=t.size*e.length),Vt(this,n)},keySeq:function(){return ce(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(e,t){return Vt(this,Ft(this,e,t,!1))},zip:function(){var e=[this].concat(_(arguments));return Vt(this,Bt(this,An,e))},zipWith:function(e){var t=_(arguments);return t[0]=this,Vt(this,Bt(this,e,t))}}),i.prototype[d]=!0,i.prototype[h]=!0,xn(o,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}}),o.prototype.has=On.includes,o.prototype.contains=o.prototype.includes,xn(q,r.prototype),xn(W,i.prototype),xn(K,o.prototype),xn(pe,r.prototype),xn(de,i.prototype),xn(he,o.prototype),{Iterable:n,Seq:V,Collection:fe,Map:Pe,OrderedMap:_t,List:it,Stack:yn,Set:tn,OrderedSet:cn,Record:Gt,Range:ce,Repeat:le,is:ae,fromJS:re}}()},function(e,t,n){"use strict";n(126);var r=n(0),i=n.n(r),o=n(2),a=n.n(o),u=n(82),l=n(7),s=l.default.div`
	position: relative;
	
  * {
    vertical-align: middle;
    line-height: 14px;
  }
`,c=l.default.div`
  background-image: url(${e=>e.src});
  width: 40px;
  height: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #efefef;
  display: inline-block;
  margin-right: 10px;
  vertical-align: top;
  ${e=>e.src?"":"border: 0;"}
`,f=l.default.div`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  text-transform: lowercase;
`,p=l.default.div`
  // Do not overlap with the scope icon.
  width: 100%;
  padding-right: 40px;
  font-size: 12px;
  margin-top: 2px;
  text-align: justify;
  
  &:first-letter {
    text-transform: capitalize;
  }
`,d=l.default.i.attrs({"aria-hidden":!0})`
  margin: 4px 8px;
  font-size: 14px;

  // ### ANY alignment.	
  ${e=>"right"!==e.align&&"\n    &:hover {\n      cursor: pointer;\n      color: #2e92ff;\n    }\n  "}
  
	// ### RIGHT alignment.
	${e=>"right"===e.align&&"\n    position: absolute;\n    right: 0;\n    top: 4px;\n    \n    // Elements on the right are indicators and aren't clickable.\n    color: #cbcbcb;\n  "}

`,h=l.default.div`
	font-size: 13px;
	font-weight: 600;
`,v=l.default.div`
	display: inline-block;
	max-width: calc( 100% - 50px );
`;var y=({images:e,scope:t,displayTypes:n,descriptions:r,label:o})=>i.a.createElement(s,null,i.a.createElement(c,{src:e&&e[0]}),i.a.createElement(v,null,i.a.createElement(h,null,o),i.a.createElement(f,null,n),i.a.createElement(p,null,r&&r[0])),"local"!==t&&i.a.createElement(d,{align:"right",className:"fa fa-cloud"})),m=l.default.div`
  // Allow elements to line up horizontally.
  display: inline-block;
  
  // Keep the elements aligned top since the height may vary according
  // to the size of the labels. 
  vertical-align: top;
  
  // Contain child element positioned using absolute.
  position: relative;

  box-sizing: border-box;
  
  width: 248px;
  min-height: 32px;
  margin: 4px;
  padding: 4px 0;

  overflow: hidden;
  border-radius: 2px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 4px -3px rgba(0,0,0,.25),0 8px 8px -6px rgba(0,0,0,.25);
  outline: 0;
  
  color: #666;

  * {
    display: inline-block;
    vertical-align: top;
  }
`,g=l.default.div`
	position: relative;
  box-sizing: border-box;
  max-width: 180px;
  margin-top: 4px;
  min-height: 16px;
  line-height: 16px;
  font-weight: 600;
  font-size: 12px;
  hyphens: auto;
`;class b extends r.Component{constructor(e){super(e),this.onRemove=this.onRemove.bind(this)}onRemove(e){e.preventDefault(),e.stopPropagation(),this.props.onRemove(this.props.value)}render(){const{scope:e,label:t}=this.props.value;return i.a.createElement(m,null,i.a.createElement(d,{className:"fa fa-minus-square",onMouseDown:this.onRemove}),i.a.createElement(g,null,t),"local"!==e&&i.a.createElement(d,{align:"right",className:"fa fa-cloud"}))}}var w=b;function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const E=({option:e,options:t,labelKey:n,valueKey:r})=>t&&-1===t.findIndex(t=>e[r]===t[r]),x=({label:e})=>e&&e.match(/^https?:\/\/.+/i),O=({label:e,labelKey:t,valueKey:n})=>({[t]:e,[n]:e});class k extends r.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this),this.state={value:""}}onChange(e){this.setState({value:e})}render(){const{autoload:e,loadOptions:t,optionRenderer:n,valueComponent:r,...o}=this.props,a=void 0===this.props.multi||this.props.multi;return i.a.createElement(u.a.AsyncCreatable,_({autoload:e,ignoreAccents:!0,ignoreCase:!0,loadOptions:t,optionRenderer:n,valueComponent:r,openOnFocus:!0,autoBlur:!0,multi:a,onChange:this.onChange,value:this.state.value,newOptionCreator:O,isValidNewOption:x,isOptionUnique:E,clearable:!1},o))}}k.propTypes={autoload:a.a.bool,loadOptions:a.a.func.isRequired,optionRenderer:a.a.func,valueComponent:a.a.func},k.defaultProps={autoload:!1,optionRenderer:y,valueComponent:w};t.a=k},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=l(o),u=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}var s={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},c=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],f=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},p=!("undefined"==typeof window||!window.navigator)&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),d=function(){return p?"_"+Math.random().toString(36).substr(2,12):void 0},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.inputRef=function(e){n.input=e,"function"==typeof n.props.inputRef&&n.props.inputRef(e)},n.placeHolderSizerRef=function(e){n.placeHolderSizer=e},n.sizerRef=function(e){n.sizer=e},n.state={inputWidth:e.minWidth,inputId:e.id||d()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.id;t!==this.props.id&&this.setState({inputId:t||d()})}},{key:"componentDidUpdate",value:function(e,t){t.inputWidth!==this.state.inputWidth&&"function"==typeof this.props.onAutosize&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(this.mounted&&window.getComputedStyle){var e=this.input&&window.getComputedStyle(this.input);e&&(f(e,this.sizer),this.placeHolderSizer&&f(e,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(this.mounted&&this.sizer&&void 0!==this.sizer.scrollWidth){var e=void 0;e=this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:this.sizer.scrollWidth+2,(e+="number"===this.props.type&&void 0===this.props.extraWidth?16:parseInt(this.props.extraWidth)||0)<this.props.minWidth&&(e=this.props.minWidth),e!==this.state.inputWidth&&this.setState({inputWidth:e})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var e=this.props.injectStyles;return p&&e?a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var e=[this.props.defaultValue,this.props.value,""].reduce((function(e,t){return null!=e?e:t})),t=r({},this.props.style);t.display||(t.display="inline-block");var n=r({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return function(e){c.forEach((function(t){return delete e[t]}))}(i),i.className=this.props.inputClassName,i.id=this.state.inputId,i.style=n,a.default.createElement("div",{className:this.props.className,style:t},this.renderStyles(),a.default.createElement("input",r({},i,{ref:this.inputRef})),a.default.createElement("div",{ref:this.sizerRef,style:s},e),this.props.placeholder?a.default.createElement("div",{ref:this.placeHolderSizerRef,style:s},this.props.placeholder):null)}}]),t}(o.Component);h.propTypes={className:u.default.string,defaultValue:u.default.any,extraWidth:u.default.oneOfType([u.default.number,u.default.string]),id:u.default.string,injectStyles:u.default.bool,inputClassName:u.default.string,inputRef:u.default.func,inputStyle:u.default.object,minWidth:u.default.oneOfType([u.default.number,u.default.string]),onAutosize:u.default.func,onChange:u.default.func,placeholder:u.default.string,placeholderIsMinWidth:u.default.bool,style:u.default.object,value:u.default.any},h.defaultProps={minWidth:1,injectStyles:!0},t.default=h},,,,,,,,,,,function(e,t,n){"use strict";var r=n(66),i=n(96),o=n(116);t.a=function(e){return function t(n,a,u,l){var s=void 0===a?{}:a,c=s.namespace,f=void 0===c?r.b:c,p=s.prefix;return void 0===u&&(u={}),void 0===l&&(l=""),Object(i.a)(n).forEach((function(i){var a=function(e){return l||!p||p&&new RegExp("^"+p+f).test(e)?e:""+p+f+e}(function(e){var t;if(!l)return e;var n=e.toString().split(r.a),i=l.split(r.a);return(t=[]).concat.apply(t,i.map((function(e){return n.map((function(t){return""+e+f+t}))}))).join(r.a)}(i)),s=Object(o.a)(i,n);e(s)?t(s,{namespace:f,prefix:p},u,a):u[a]=s})),u}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(78);function i(e,t){return Object(r.a)(t)?t.get(e):t[e]}},function(e,t,n){"use strict";t.a=function(e){return null==e}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));const r=[];var i=new class{get(e=window.wlSettings.default_editor_id){const t=void 0!==window.wp.hooks?window.wp.hooks.applyFilters("wl_default_editor_id",e):e;return r[t]?r[t]:r[t]=tinyMCE.get(t)}};class o{setLink(e,t){}setYesLink(e){}setNoLink(e){}getLink(e){}}class a extends o{constructor(){super(),this.linkByDefault="1"===wlSettings.link_by_default}setLink(e,t){t?e.forEach(e=>this.setYesLink(e)):e.forEach(e=>this.setNoLink(e))}setYesLink(e){const t=i.get().dom;t.removeClass(e,"wl-no-link"),t.addClass(e,"wl-link")}setNoLink(e){const t=i.get().dom;t.removeClass(e,"wl-link"),t.addClass(e,"wl-no-link")}getLink(e){const t=i.get();if(t)return e.reduce((e,n)=>{const r=t.dom;return e||(this.linkByDefault?!r.hasClass(n,"wl-no-link"):r.hasClass(n,"wl-link"))},!1);{const t=document.createElement("div");return t.innerHTML=wp.data.select("core/editor").getBlocks().map(e=>e.originalContent).join(),e.reduce((e,n)=>e||(this.linkByDefault?!(t.querySelector(`[id="${n}"]`)&&t.querySelector(`[id="${n}"]`).classList.contains("wl-no-link")):t.querySelector(`[id="${n}"]`)&&t.querySelector(`[id="${n}"]`).classList.contains("wl-link")),!1)}}}class u extends o{constructor(){super()}setLink(e,t){}setYesLink(e){}setNoLink(e){}getLink(e){}}class l{static getInstance(){return this.isNoEditorAnalysisActive()?new u:new a}static isNoEditorAnalysisActive(){return void 0!==wlSettings&&void 0!==wlSettings.analysis&&void 0!==wlSettings.analysis.isNoEditorAnalysisActive&&!0===wlSettings.analysis.isNoEditorAnalysisActive}}},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return Z}));var r=n(0),i=n.n(r),o=n(8),a=n(9),u=n(48),l=n(71),s=n.n(l),c=n(2),f=n.n(c),p=n(40),d=n(35),h=n(20),v=n(7);var y=v.default.div`
    white-space: initial;
    line-height: 16px;
    color: white;
    padding: 11px 8px 6px;
    min-height: 40px;
    margin-bottom: 10px;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        
    > div {
        display: inline-block;
        
        &:last-child {
            float: right;
        }
    }

    ${e=>e.enabled&&v.css`
        background-color: #007aff;
        cursor: pointer;

        &:hover {
          box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
          transform: scale(1.01);
          transition: all 200ms ease-out;
        }

        &:active {
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
          transform: scale(1);
        }
      `}
    
    ${e=>!e.enabled&&v.css`
        background-color: #cbcbcb;
        cursor: initial;
      `}
       
}
`;var m=({children:e,label:t,...n})=>i.a.createElement(y,n,i.a.createElement("div",{style:{width:"calc(100% - 16px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t),e);var g=Object(o.b)(({enabled:e,value:t})=>({enabled:e,label:"Add "+t}),e=>({onClick:()=>e(Object(h.g)())}))(m);var b=v.default.div`
  padding: 8px 0 6px;
  border-bottom: 2px solid #007aff;
  display: inline-block;
  width: 100%;

  > input {
    border: 0;
    outline: none;
    float: left;
    width: calc(100% - 36px) !important;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
      Cantarell, "Helvetica Neue", sans-serif;
    line-height: 20px;
    font-size: 14px;
    padding: 0 6px;
  }
`;var w=v.default.div`
  font-family: sans-serif;
  background-color: #007aff;
  color: white;
  width: 12px;
  height: 12px;
  display: inline-block;
  text-align: center;
  line-height: 12px;
  font-size: 12px;
  padding: 1px;
  cursor: pointer;
  border-radius: 100%;
  transform: rotate(45deg);

  &::after {
    content: "+";
    font-size: 12px;
    width: 100%;
    height: 100%;
  }
`;function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=({onCancel:e,onInputChange:t,...n})=>i.a.createElement(b,null,i.a.createElement("input",_({onChange:e=>t(e.target.value)},n)),i.a.createElement(w,{onClick:e}));var x=v.default.ul`
  background: white;
  // border-top: 0;
  // border-bottom: 1px solid #007aff;
  // border-left: 1px solid #007aff;
  // border-right: 1px solid #007aff;
  border: 1px solid #007aff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: scroll;
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", sans-serif;
  line-height: 20px;
  font-size: 14px;
  position: absolute;
  // width: calc(100% - 1px);
  // margin-left: 1px;
  width: 110%;
  margin-left: calc( -5% + 1px );
  overflow-x: hidden;
  z-index: 1001;

  display: ${e=>e.open?"block":"none"};

  > li {
    cursor: pointer;
    margin-bottom: 0;
    padding-bottom: 4px;

    &:hover {
      background-color: rgba(46, 146, 255, 0.2);
    }
  }
`;var O=({open:e,children:t})=>i.a.createElement(x,{open:e},0<t.length&&t.map((e,t)=>i.a.createElement("li",{key:t},e)),0===t.length&&i.a.createElement("li",{style:{padding:"8px",cursor:"initial"},key:0},"No results."));var k=({open:e,value:t,onCancel:n,onInputChange:r,children:o})=>i.a.createElement("div",null,i.a.createElement(E,{onCancel:n,onInputChange:r,value:t}),i.a.createElement(O,{open:e},o));var S=v.default.div`
  padding: 4px 8px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  min-height: 32px;
  color: rgb(102, 102, 102);
`;var C=v.default.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  max-width: 180px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 4px;
  min-height: 16px;
  line-height: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 12px;
  -moz-user-select: none;
  hyphens: auto;
`;var T=({label:e,onClick:t})=>i.a.createElement(S,{onClick:t},i.a.createElement(C,null,"Create ",e,"..."));var j=v.default.i`
  display: ${e=>e.local?"none":"inline-block !important"};
  position: absolute;
  right: 20px;
  top: 8px;
  font-size: 14px;
  line-height: 1;
  color: #cbcbcb;
  user-select: none;
  transition: opacity 150ms ease;
`;var P=v.default.div`
  // Same as the Cloud Icon.
  color: #cbcbcb;
  font-size: 10px;
  width: calc(100% - 10px);
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 12px;
`;var A=v.default.div`
  // Same as the Cloud Icon.
  color: #cbcbcb;
  font-size: 10px;
  width: calc(100% - 10px);
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 12px;
`;var I=({item:e,...t})=>i.a.createElement(S,t,i.a.createElement(C,{title:e.label},e.label),i.a.createElement(j,{className:"fa fa-cloud",local:"local"===e.scope?1:0}),0<e.descriptions.length&&i.a.createElement(P,{title:e.descriptions[0]},e.descriptions[0]),i.a.createElement(A,null,e.displayTypes));function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=({createEntity:e,selectEntity:t,items:n,value:r,showCreate:o,...a})=>{const u=(o?[i.a.createElement(T,{key:1e3,label:r,onClick:()=>e(r)})]:[]).concat(n.map((e,n)=>i.a.createElement(I,{key:n,item:e,onClick:()=>t(e)})));return i.a.createElement(k,D({value:r},a),u)};var F=Object(o.b)(({open:e,value:t,items:n},r)=>({open:e,value:t,items:n,...r}),e=>({onInputChange:t=>e(Object(h.i)(t)),onCancel:()=>e(Object(h.c)())}))(M);const R=v.default.div`
  position: relative;
  overflow-y: visible;
  width: calc(100% + 6px);
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: -3px;
`,N=v.default.div`
  white-space: nowrap;
  overflow-x: hidden;

  > * {
    display: inline-block;
    box-sizing: border-box;

    &:first-child {
      // Slightly smaller to accommodate the hover effect.
      width: calc(100% - 2px);
      margin: 0 1px;

      margin-left: ${e=>e.open?"-100%":"1px"};
      transition: all 200ms ease-out;
    }

    &:last-child {
      width: 100%;
    }
  }
`;var z=({children:e,...t})=>i.a.createElement(R,t,i.a.createElement(N,t,e));var L=Object(o.b)(e=>({open:e.open}))(z);var U=v.default.div`
  width: 0;
  height: 0;

  ${e=>v.css`
    border-top: ${e.height} solid transparent;
    border-bottom: ${e.height} solid transparent;
    border-left: ${e.height} solid ${e.color};
  `};
`,B=n(6);const V=window.wlSettings;function q(e,t,...n){if("undefined"!==wp.ajax)return wp.ajax.post("wl_autocomplete",{query:e,show_local_entities:!0,_wpnonce:V.wl_autocomplete_nonce,exclude:V.itemId,scope:V.autocomplete_scope});{const r=new URL("http://localhost:8080/wordlift-api/autocomplete");return r.searchParams.append("query",e),r.searchParams.append("language",t),0===n.length?r.searchParams.append("exclude",""):n.forEach(e=>r.searchParams.append("exclude",e)),fetch(r).then(e=>e.json())}}n(81);function*W({payload:e}){if(void 0===e||""===e)return;yield Object(B.b)(500),void 0!==wp.wordlift&&wp.wordlift.trigger("loading",!0);const t=void 0!==wlSettings.language?wlSettings.language:"en",n=yield Object(B.a)(q,e,t);yield Object(B.d)(Object(h.f)(n)),void 0!==wp.wordlift&&wp.wordlift.trigger("loading",!1)}function*K(){yield Object(B.d)(Object(h.c)())}function $(){return Object(u.b)(e=>{const t=t=>e(t);return wp.wordlift.on("editorSelectionChanged",t),()=>wp.wordlift.off("editorSelectionChanged",t)})}function*H(){const e=yield Object(B.a)($);for(;;){const{selection:t}=yield Object(B.g)(e);yield Object(B.d)(Object(h.i)(t)),""===t&&(yield Object(B.d)(Object(h.c)()))}}function*Q(){yield Object(B.i)(h.i,W)}var Y=function*(){for(yield Object(B.c)(H),yield Object(B.h)(h.e,K),yield Object(B.h)(h.b,K);;)yield Object(B.g)(h.g),yield Object(B.a)(W,yield Object(B.f)(e=>({payload:e.value}))),yield Object(B.e)({task:Object(B.a)(Q),cancel:Object(B.g)(h.c)})},G=n(53);const X=Object(u.a)(),J=Object(a.e)(h.h,Object(a.a)(X,s.a));function Z(){return J.getState().value}X.run(Y),Object(p.on)(G.c,({selection:e})=>J.dispatch(Object(h.i)(e))),Object(d.a)("wordlift.addEntitySuccess","wordlift",()=>J.dispatch(Object(h.b)())),Object(d.a)("unstable_wordlift.closeEntitySelect","wordlift",()=>J.dispatch(Object(h.c)()));const ee=({createEntity:e,selectEntity:t,showCreate:n})=>i.a.createElement(o.a,{store:J},i.a.createElement(r.Fragment,null,Object(d.c)("wordlift.AddEntity.beforeWrapperContainer",[]),i.a.createElement(L,null,i.a.createElement(g,null,i.a.createElement(U,{height:"8px",color:"white"})),i.a.createElement(F,{createEntity:e,selectEntity:t,showCreate:n})),Object(d.c)("wordlift.AddEntity.afterWrapperContainer",[])));ee.propTypes={selectEntity:f.a.func.isRequired,showCreate:f.a.bool.isRequired};t.a=ee},,,function(e,t,n){},,,function(e,t,n){var r=n(222);e.exports=function(e){return r(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var r=n(18),i=n.n(r),o=n(64),a=n(32),u=n(28),l=function(e){return Array.isArray(e)},s=function(e){return"string"==typeof e},c=n(117),f=function(e){return e[e.length-1]},p=n(129),d=n.n(p),h=function(e){return-1===e.indexOf("/")?d()(e):e.split("/").map(d.a).join("/")},v=function(e,t){return e.reduce((function(e,n){return t(e,n)}),{})},y=n(115),m=Object(y.a)(o.a),g=n(66);function b(e,t){var n=void 0===t?{}:t,r=n.namespace,i=void 0===r?g.b:r,o=n.prefix;var a={};return Object.getOwnPropertyNames(e).forEach((function(t){var n=o?t.replace(""+o+i,""):t;return function t(n,r,i){var o=h(i.shift());0===i.length?r[o]=e[n]:(r[o]||(r[o]={}),t(n,r[o],i))}(t,a,n.split(i))})),a}var w=n(14);function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Object(o.a)(f(n))?n.pop():{};return i()(n.every(s)&&(s(e)||Object(o.a)(e)),"Expected optional object followed by string action types"),s(e)?S([e].concat(n),a):_({},O(e,a),S(n,a))}function O(e,t){return b(k(m(e,t)),t)}function k(e,t){var n=void 0===t?{}:t,r=n.prefix,o=n.namespace,s=void 0===o?g.b:o;return v(Object.keys(e),(function(t,n){var o,f=e[n];i()(function(e){if(Object(a.a)(e)||Object(c.a)(e))return!0;if(l(e)){var t=e[0],n=void 0===t?u.a:t,r=e[1];return Object(a.a)(n)&&Object(a.a)(r)}return!1}(f),"Expected function, undefined, null, or array with payload and meta functions for "+n);var p=r?""+r+s+n:n,d=l(f)?w.a.apply(void 0,[p].concat(f)):Object(w.a)(p,f);return _({},t,((o={})[n]=d,o))}))}function S(e,t){var n=k(v(e,(function(e,t){var n;return _({},e,((n={})[t]=u.a,n))})),t);return v(Object.keys(n),(function(e,t){var r;return _({},e,((r={})[h(t)]=n[t],r))}))}},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="function"!=typeof t[t.length-1]&&t.pop(),i=t;if(void 0===r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");return function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];var u=void 0===e,l=void 0===t;return u&&l&&r?r:i.reduce((function(e,n){return n.apply(void 0,[e,t].concat(o))}),u&&!l&&r?r:e)}},i=n(18),o=n.n(i),a=n(64),u=n(78),l=n(96);var s=n(115),c=Object(s.a)((function(e){return(Object(a.a)(e)||Object(u.a)(e))&&(t=e,n=Object(l.a)(t),r=n.every((function(e){return"next"===e||"throw"===e})),!(n.length&&n.length<=2&&r));var t,n,r})),f=n(32),p=n(28),d=n(117),h=function(e){return e.toString()},v=n(66);var y=n(116);function m(e,t,n){void 0===n&&(n={}),o()(Object(a.a)(e)||Object(u.a)(e),"Expected handlers to be a plain object.");var i=c(e,n),s=Object(l.a)(i).map((function(e){return function(e,t,n){void 0===t&&(t=p.a);var r=h(e).split(v.a);o()(!(void 0===n),"defaultState for reducer handling "+r.join(", ")+" should be defined"),o()(Object(f.a)(t)||Object(a.a)(t),"Expected reducer to be a function or object with next and throw reducers");var i=Object(f.a)(t)?[t,t]:[t.next,t.throw].map((function(e){return Object(d.a)(e)?p.a:e})),u=i[0],l=i[1];return function(e,t){void 0===e&&(e=n);var i=t.type;return i&&-1!==r.indexOf(h(i))?(!0===t.error?l:u)(e,t):e}}(e,Object(y.a)(e,i),t)})),m=r.apply(void 0,s.concat([t]));return function(e,n){return void 0===e&&(e=t),m(e,n)}}},function(e,t,n){"use strict";var r=n(71),i=n.n(r),o=n(9),a=n(48),u=n(42),l=n(169),s=n(150),c=n(151),f=n(152);var p=Object(o.c)({entities:l.a,annotationFilter:s.a,visibilityFilter:c.a,editor:f.a}),d=n(170);const h=Object(a.a)(),v=Object(o.e)(p,Object(o.a)(h,u.a,i.a));h.run(d.a);t.a=v},,,,,,,function(e,t,n){"use strict";var r=n(19);t.a=function(e=null,t){switch(t.type){case r.b:return void 0===t.annotation?null:t.annotation;default:return e}}},function(e,t,n){"use strict";var r=n(19);t.a=function(e="SHOW_ALL",t){switch(t.type){case r.f:return t.filter;case r.b:return void 0===t.annotation?"SHOW_ALL":"SHOW_ANNOTATION";default:return e}}},function(e,t,n){"use strict";var r=n(19);t.a=function(e={selection:""},t){switch(t.type){case r.c:return Object.assign({},e,{selection:t.selection});default:return e}}},function(e,t,n){"use strict";(function(e){var r=n(0),i=n.n(r),o=n(8),a=n(154),u=n(167),l=n(166),s=n(171),c=n(123),f=n(20);const p=e.wlSettings,d="undefined"!==p.can_create_entities&&"yes"===p.can_create_entities;t.a=Object(o.b)(null,{addEntityRequest:f.a,createEntityRequest:f.d})(({addEntityRequest:e,createEntityRequest:t})=>i.a.createElement(a.a,null,i.a.createElement(c.a,{createEntity:t,showCreate:d,selectEntity:e}),i.a.createElement(s.a,{open:!0,label:"Content classification"},i.a.createElement(u.a,null),i.a.createElement(l.a,null))))}).call(this,n(36))},function(e,t,n){"use strict";const r=n(7).default.div`
	background-color: #fff;

	// Compensate accordion margin bottom.
	position: relative;

	// Size.
	max-width: 254px;

	// Fixing position in responsive.
	margin: auto;
	margin-bottom: 8px;
`;t.a=r},function(e,t,n){"use strict";const r=Array(256).fill().map((e,t)=>(t<16?"0":"")+t.toString(16)),i=window.crypto&&window.crypto.getRandomValues?()=>{const e=new Uint32Array(4);return window.crypto.getRandomValues(e),{d0:e[0],d1:e[1],d2:e[2],d3:e[3]}}:()=>({d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0});t.a=()=>(({d0:e,d1:t,d2:n,d3:i})=>r[255&e]+r[e>>8&255]+r[e>>16&255]+r[e>>24&255]+"-"+r[255&t]+r[t>>8&255]+"-"+r[t>>16&15|64]+r[t>>24&255]+"-"+r[63&n|128]+r[n>>8&255]+"-"+r[n>>16&255]+r[n>>24&255]+r[255&i]+r[i>>8&255]+r[i>>16&255]+r[i>>24&255])(i())},,,,,,,,,,,function(e,t,n){"use strict";var r=n(8),i=n(49),o=n(0),a=n.n(o),u=n(7);var l=u.default.ul`
	margin: 0 auto;
	padding-bottom: 8px;
`;var s=u.default.li`
	display: 'block';
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	border-radius: 2px;
	margin: 8px auto;
	width: 248px;
	min-height: 32px;
	padding: 4px 0;
	background-color: #f5f5f5;
	box-shadow: 0 4px 4px -3px rgba(0,0,0,.25), 0 8px 8px -6px rgba(0,0,0,.25);
	transition: all 100ms linear;
	// Prevent dotted outline in FF
	outline: 0;
	
	// Since we removed the box with the number of occurrences we need to pad left.
	//
	// See https://github.com/insideout10/wordlift-plugin/issues/735
	padding-left: 12px;

	&:hover {
		transform: scale( ${e=>0<e.entity.occurrences.length?1:1.01} ); 
		background-color: ${e=>0<e.entity.occurrences.length?"#f5f5f5":"#fafafa"}
		// Prevent dotted outline in FF
		outline: 0;
	};

	&:active {
		transform: scale(0.99)
		background-color: #f5f5f5;
		// Prevent dotted outline in FF
		outline: 0;
	};

	&:focus {
		// Prevent dotted outline in FF
		outline: 0;
	}

`;var c=u.default.div`
	cursor: pointer;
	display: block;
	position: relative;
	left: ${e=>e.open?"-248px":0};
	top: 0;
	box-sizing: border-box;
	width: 236px;
	min-height: 24px;
	transition: left 200ms ease;
`;var f=u.default.div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	max-width: 180px;
	margin-top: 4px;
	min-height: 16px;
	line-height: 16px;
	font-weight: 600;
	font-size: 12px;
	user-select: none;
	hyphens: auto;
	color: ${e=>0<e.entity.occurrences.length?"#2e92ff":"#666"};
`;var p=u.default.div`
  display: ${e=>e.entity.duplicateLabel?"inline-block":"none"};
	margin-left: 2px;
	position: relative;
	font-weight: 300;
	font-size: 10px;
`;var d=u.default.img`
  border: 0;
  position: absolute;
  right: 20px;
  top: calc(50% - 10px);
  max-width: 20px;
  max-height: 20px;
`;var h=u.default.div`
	display: block;
	position: absolute;
	left: 248px;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	width: 248px;
	min-height: 24px;
	padding: 8px;
	color: #626162;
	transition: left 200ms ease;
	left: ${e=>e.open?0:"248px"};
`;var v=u.default.div`
	display: inline-block;
	position: relative;
	height: 16px;
`;var y=u.default.div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	width: 24px;
	height: 16px;
	background: ${e=>e.selected?"#7ed321":"#c7c7c7"};
	transition: background 200ms ease;
	border-radius: 10px;
`;var m=u.default.div`
	cursor: pointer;
	display: inline-block;
	position: absolute;
	top: 2px;
	left: ${e=>e.selected?10:2}px;
	transition: left 150ms ease;
	width: 12px;
	height: 12px;
	background: #FFFFFF;
	border-radius: 50%;
`;var g=u.default.div`
	display: inline-block;
	position: relative;
	top: -4px;
	line-height: 16px;
	font-size: 12px;
	margin: 0 12px 0 4px;
	transition: opacity 150ms ease;
	opacity: ${e=>e.selected?1:.5};
	
	&:after {
		content: ' ';
		display: inline-block;
		position: absolute;
		right: -12px;
		top: 6px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #626162;
		margin-right: 4px;
	}
`;class b extends a.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(e)}render(){return a.a.createElement(v,{onClick:this.onClick},a.a.createElement(y,{selected:this.props.selected},a.a.createElement(m,{selected:this.props.selected})),a.a.createElement(g,{selected:this.props.selected},this.props.children))}}var w=b;var _=u.default.div`
	display: inline-block;
	position: relative;
	top: -4px;	
	line-height: 16px;
	font-size: 12px;
`;var E=u.default.i`
	cursor: pointer;
	display: ${e=>e.edit?"block":"none !important"};
	position: absolute;
	right: 20px;
	top: 9px;
	width: 16px;
	height: 16px;
	text-align: center;
	line-height: 1;
	background-color: #666;
	color: #fff;
	border-radius: 2px;
	
	&:before {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -7px;
		margin-left: -6px;
		font-size: 14px;
	}
	
	&:hover {
		background-color: #fccd34;
	}
`;var x=u.default.div`
	cursor: pointer;
	transition: opacity 150ms ease;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	box-sizing: border-box;
	width: 16px;
	min-height: 32px;
	padding: 8px 4px;
	background-color: #f1f1f1;
	
	// Control the visibility of the element according to the 'show' property.
	display: ${e=>e.show?"block":"none"};
	opacity: ${e=>e.show?1:0}
`;var O=u.default.div`
  box-sizing: border-box;
	display: block;
	position: absolute;
	top: 8px;
	width: 8px;
	height: 8px;
	border-top: 8px solid transparent;
	border-bottom: 8px solid transparent;
	border-left: 8px solid #7d7d7d;
	border-radius: 16px;
	transition: transform 150ms ease;
	transform: rotate( ${e=>e.open?180:0}deg );
	&:hover {
		border-left-color: #fccd34;
	} 
`;class k extends a.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(e)}render(){return a.a.createElement(x,{onClick:this.onClick,show:this.props.show},a.a.createElement(O,{open:this.props.open}))}}var S=k;const C=window.wp&&window.wp.hooks&&window.wp.hooks.applyFilters,T=window.wlSettings.wl_root+"images/svg/wl-cloud-icon.svg",j=window.wlSettings.wl_root+"images/svg/wl-network-icon.svg";class P extends a.a.Component{constructor(e){super(e),this.ref=a.a.createRef(),this.onEditClick=this.onEditClick.bind(this),this.onSwitchClick=this.onSwitchClick.bind(this),this.onMainClick=this.onMainClick.bind(this),this.onArrowToggleClick=this.onArrowToggleClick.bind(this),this.close=this.close.bind(this),this.state={open:!1},this.computeIconFilters()}onEditClick(e){e.preventDefault(),this.props.onEditClick(this.props.entity),this.setState({open:!1})}onMainClick(e){e.preventDefault(),this.props.onClick(this.props.entity)}onSwitchClick(e){e.preventDefault(),this.props.onLinkClick(this.props.entity)}onArrowToggleClick(e){e.preventDefault(),this.setState({open:!this.state.open})}close(e){e.preventDefault(),!e.currentTarget.contains(document.activeElement)&&this.state.open&&this.setState({open:!1})}componentDidUpdate(){this.state.open&&this.ref&&this.ref.current&&this.ref.current.focus&&this.ref.current.focus()}computeIconFilters(){this.cloudIconURL=C?C("wl_cloud_icon_url",T):T,this.networkIconURL=C?C("wl_network_icon_url",j):j;let e=this.props.entity.local||this.props.entity.id&&this.props.entity.id.startsWith(window.location.origin);this.iconURL=e?"":this.props.entity.id&&this.props.entity.id.match(/https?:\/\/(?:\w+\.)?(dbpedia|wikidata)\.org/)?this.cloudIconURL:this.networkIconURL,this.iconURL=C?C("wl_icon_url",this.iconURL,this.props.entity):this.iconURL}render(){return a.a.createElement(s,{entity:this.props.entity,onBlur:this.close,ref:this.ref,tabIndex:"0",key:this.props.entity.id},a.a.createElement(c,{onClick:this.onMainClick,open:this.state.open},a.a.createElement(f,{entity:this.props.entity},this.props.entity.label,a.a.createElement(p,{entity:this.props.entity},this.props.entity.mainType)),this.iconURL&&a.a.createElement(d,{src:this.iconURL})),a.a.createElement(h,{open:this.state.open},a.a.createElement(w,{onClick:this.onSwitchClick,selected:this.props.entity.link},"Link"," "),a.a.createElement(_,null,this.props.entity.mainType),a.a.createElement(E,{onClick:this.onEditClick,edit:this.props.entity.edit,className:"fa fa-pencil"})),a.a.createElement(S,{onClick:this.onArrowToggleClick,open:this.state.open,show:this.props.entity.occurrences&&0<this.props.entity.occurrences.length}))}}var A=P;var I=({entities:e,onClick:t,onLinkClick:n,onEditClick:r})=>a.a.createElement(l,null,e.toList().map(e=>a.a.createElement(A,{entity:e,tile:{open:!1},onClick:t,onEditClick:r,onLinkClick:n,key:e.id})));const D=(e,t,n)=>{switch(n){case"SHOW_ANNOTATION":return e.filter(e=>void 0!==e.annotations&&t in e.annotations);case"SHOW_WHO":return e.filter(e=>void 0!==e.w&&"who"===e.w);case"SHOW_WHERE":return e.filter(e=>void 0!==e.w&&"where"===e.w);case"SHOW_WHEN":return e.filter(e=>void 0!==e.w&&"when"===e.w);case"SHOW_WHAT":return e.filter(e=>void 0!==e.w&&"what"===e.w);default:return e.filter(e=>e.shortlist||0<e.occurrences.length)}},M=Object(r.b)(e=>({entities:D(e.entities,e.annotationFilter,e.visibilityFilter)}),e=>({onClick:t=>{e(Object(i.f)(t))},onLinkClick:t=>{e(Object(i.g)(t))},onEditClick:t=>{e(Object(i.d)(t))}}))(I);t.a=M},function(e,t,n){"use strict";var r=n(0),i=n.n(r);var o=n(7).default.div`
	position: relative;
	margin: auto;
	max-width: 248px;
	border-radius: 2px;
	border: 1px solid #666;
	overflow: hidden;

	* {
		box-sizing: border-box !important;
		display: inline-block;
		width: 20%;
		border-right: 1px solid #666;
		color: #666;
		text-align: center;
		text-decoration: none;
		
		&:hover {
			color: #a0a0a0;
		}

		&:focus {
			// Overrides WordPress' styles.
			box-shadow: none
		}
	}

	*:last-child {
		border-right: none;

		// Fix annoying pixel gap in responsive.
		&.wl-active {
			box-shadow: 3px 0 0 0 #666;
		}
	}
	
	*.wl-active {
		background: #666;
		color: #fff;
	}
<<<<<<< HEAD
`,a=n(8),u=n(49);class l extends i.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(this.props.filter)}render(){return i.a.createElement("a",{className:this.props.active?"wl-active":"",onClick:this.onClick},this.props.children)}}var s=l;var c=Object(a.b)((e,t)=>({active:t.filter===e.visibilityFilter}),e=>({onClick:t=>{e(Object(u.e)(t))}}))(s);t.a=()=>i.a.createElement(o,null,i.a.createElement(c,{filter:"SHOW_WHAT"},"what"),i.a.createElement(c,{filter:"SHOW_WHERE"},"where"),i.a.createElement(c,{filter:"SHOW_WHEN"},"when"),i.a.createElement(c,{filter:"SHOW_WHO"},"who"),i.a.createElement(c,{filter:"SHOW_ALL"},"all"))},,function(e,t,n){"use strict";var r=n(102),i=n(19);var o=new class{getW(e){return window._wlMetaBoxSettings.settings.classificationBoxes.reduce((t,n)=>-1===n.registeredTypes.indexOf(e.mainType)?t:n.id,"unknown")}},a=n(120);t.a=function(e=Object(r.Map)(),t){const n=a.a.getInstance();switch(t.type){case i.a:return e.merge(Object(r.Map)({[t.payload.id]:t.payload}));case i.d:const a=Object(r.Map)(t.results.entities).groupBy((e,t)=>e.label);return Object(r.Map)(t.results.entities).map(e=>Object.assign({},e,{link:n.getLink(e.occurrences),local:0===e.id.indexOf(wlSettings.datasetUri),w:o.getW(e),edit:"no"!==wlSettings.can_create_entities,duplicateLabel:1<a.get(e.label).count()})).sort((e,t)=>{if(e.local!==t.local)return t.local-e.local;const n=t.confidence-e.confidence;return 0!==n?n:t.annotations.length-e.annotations.length}).mapEntries(([e,t],n)=>(t.shortlist=n<20,[e,t]));case i.i:const{id:u,link:l}=t.payload;return e.set(u,Object.assign({},e.get(u),{link:l}));case i.j:return e.set(t.entityId,Object.assign({},e.get(t.entityId),{occurrences:t.occurrences,link:n.getLink(t.occurrences)}));default:return e}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return y}));var r=n(6),i=n(19),o=n(81);const a=(e,t)=>e.entities.get(t);var u=n(49),l=n(20),s=(n(0),n(120)),c=n(35);function*f(e){const t=yield Object(r.f)(a,e.entity.id);Object(o.a)().$apply(Object(o.a)().onSelectedEntityTile(t))}function*p({entity:e}){const t=s.a.getInstance();t.setLink(e.occurrences,!e.link),yield Object(r.d)(Object(u.h)({id:e.id,link:t.getLink(e.occurrences)}))}function*d({entity:e}){Object(o.a)().$apply(Object(o.a)().setCurrentEntity(e,"entity"))}function*h({payload:e}){const t=Object(o.a)();t.$apply(()=>{t.setCurrentEntity(),t.currentEntity.description=e.descriptions[0],t.currentEntity.id=e.id,t.currentEntity.images=e.images,t.currentEntity.label=e.label,t.currentEntity.mainType=y(e.types),t.currentEntity.types=e.types,t.currentEntity.sameAs=e.sameAss,t.storeCurrentEntity()}),Object(c.f)("unstable_wordlift.closeEntitySelect"),yield Object(r.d)(Object(l.b)())}function*v({payload:e}){const t=Object(o.a)();t.$apply(t.setCurrentEntity(void 0,void 0,e)),yield Object(r.d)(Object(l.e)())}const y=e=>{for(let t=0;t<window._wlEntityTypes.length;t++){const n=window._wlEntityTypes[t];if(-1<e.indexOf(n.uri))return n.slug}return"thing"};function*m({payload:e}){yield Object(r.b)(300),console.log("handleEditorSelectionChanged",e);const t=e.editor,n=t.selection;if(n.isCollapsed()||""===n.getContent({format:"text"}))return void 0;const i=n.getRng();if(null==i)return void 0;const o=i.getBoundingClientRect(),a=t.iframeElement.getBoundingClientRect();a.top,o.top,window.scrollY,a.left,o.right,window.scrollX,a.top,o.bottom,window.scrollY,a.left,o.left,window.scrollX}t.a=function*(){yield Object(r.h)(i.g,f),yield Object(r.h)(i.h,p),yield Object(r.h)(i.e,d),yield Object(r.h)(l.a,h),yield Object(r.h)(l.d,v),yield Object(r.i)(i.c,m)}},function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(7);var a=o.default.div`
    ${e=>e.open&&o.css`
        border-top : 0 !important;
        border-bottom: 5px solid #007aff;
    `}
`;class u extends i.a.Component{constructor(e){super(e),this.state={open:e.open},this.switch=this.switch.bind(this)}switch(){this.setState(e=>({open:!e.open}))}render(){return i.a.createElement("div",null,i.a.createElement("div",{className:"wl-tab-lead",onClick:this.switch},i.a.createElement("div",{className:"wl-tab-lead-wrap"},i.a.createElement("h1",{className:"wl-tab-lead-text"},this.props.label),i.a.createElement(a,{className:"wl-tab-lead-text wl-tab-lead-btn",open:this.state.open}))),i.a.createElement("div",{className:"wl-tab-wrap",style:{display:this.state.open?"block":"none"}},this.props.children))}}t.a=u},,,,,,,,,,function(e,t,n){var r,i,o,a;window,e.exports=(r=n(7),i=n(0),o=n(102),a=n(293),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o=(r=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n"],i=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),a=l(n(0)),u=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)(u.default)(o);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  vertical-align: middle;\n"],i=["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  vertical-align: middle;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o=(r=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n"],i=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),a=l(n(0)),u=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,a.default)(u.default)(o);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(1)),o=(n(2),l(n(20))),a=l(n(21)),u=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onData=n.onData.bind(n),e.loader&&(n.loader=e.loader),e.propertyDecorator&&(n.propertyDecorator=e.propertyDecorator),e.propertyInstanceDecorator&&(n.propertyInstanceDecorator=e.propertyInstanceDecorator),n.DecoratedProperty=n.propertyDecorator(a.default),n.state={properties:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loader(this.props.selected).then(this.onData)}},{key:"componentDidUpdate",value:function(e,t,n){e.selected!==this.props.selected&&this.loader(this.props.selected).then(this.onData)}},{key:"onData",value:function(e){this.setState({properties:e})}},{key:"propertyDecorator",value:function(e){return e}},{key:"render",value:function(){var e=this;return i.default.createElement(o.default,null,i.default.createElement(u.default.Provider,{value:{loader:this.loader,propertyDecorator:this.propertyDecorator,propertyInstanceDecorator:this.propertyInstanceDecorator}},this.state.properties.map((function(t,n){return i.default.createElement(e.DecoratedProperty,{key:n,property:t,propertyInstanceDecorator:e.propertyInstanceDecorator})}))))}}]),t}(i.default.Component);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=((r=n(1))&&r.__esModule?r:{default:r}).default.createContext({loader:function(){return Promise.resolve({})}});t.default=i},function(e,t,n){n(9),e.exports=n(10)},function(e,t){e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FetchLoader=t.Form=t.SchemaClassTree=void 0;var r=a(n(11)),i=a(n(6)),o=a(n(45));function a(e){return e&&e.__esModule?e:{default:e}}t.SchemaClassTree=r.default,t.Form=i.default,t.FetchLoader=o.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=a(n(1)),o=(n(2),a(n(12)));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.debug("SchemaClassTree c'tor",{props:e}),n.childrenSelector=n.childrenSelector.bind(n),n.leafDecorator=e.leafDecorator||function(e){return e},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"childrenSelector",value:function(e,t){return t.filter((function(t){return-1<e.children.map((function(e){return e.id})).indexOf(t.id)}))}},{key:"render",value:function(){return i.default.createElement(o.default,{roots:this.props.roots,childrenSelector:this.childrenSelector,leafDecorator:this.props.leafDecorator,items:this.props.items,isSelected:this.props.isSelected,isOpen:this.props.isOpen,toggleSelected:this.props.toggleSelected,toggleOpen:this.props.toggleOpen})}}]),t}(i.default.Component);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=u(n(1)),o=u(n(13)),a=u(n(14));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.items,n=e.leafDecorator,u=e.roots,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["items","leafDecorator","roots"]);return i.default.createElement(o.default,null,u.map((function(e,o){return i.default.createElement(a.default,r({},l,{leafDecorator:n,key:o,item:e,items:t,open:l.isOpen(e),selected:l.isSelected(e),childItems:l.childrenSelector(e,t)}))})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  list-style: none;\n  padding-left: 0;\n"],i=["\n  list-style: none;\n  padding-left: 0;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.ul(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(1)),a=f(n(15)),u=f(n(16)),l=f(n(3)),s=f(n(5)),c=f(n(17));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.leafDecorator=e.leafDecorator||function(e){return e},n.DecoratedCheckbox=n.leafDecorator(c.default),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.open||e.open||this.props.selected!==e.selected}},{key:"render",value:function(){var e=this.props,n=e.childItems,i=e.open,c=e.selected,f=i?l.default:s.default;return o.default.createElement(a.default,e,0<n.length&&o.default.createElement(f,{onClick:function(){return e.toggleOpen(e.item)}}),o.default.createElement(this.DecoratedCheckbox,r({},e,{type:"checkbox",onChange:function(){return e.toggleSelected(e.item)},checked:c}),e.item.name),0<n.length&&i&&o.default.createElement(u.default,null,n.map((function(n,i){return o.default.createElement(t,r({},e,{key:i,item:n,open:e.isOpen(n),selected:e.isSelected(n),childItems:e.childrenSelector(n,e.items)}))}))))}}]),t}(o.default.Component);t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i=u(["\n  // Avoid issues with WordPress own styling.\n  margin-bottom: 0;\n  \n  ",";\n"],["\n  // Avoid issues with WordPress own styling.\n  margin-bottom: 0;\n  \n  ",";\n"]),o=u(["\n      margin-left: 10px;\n    "],["\n      margin-left: 10px;\n    "]),a=n(0);function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=((r=a)&&r.__esModule?r:{default:r}).default.li(i,(function(e){return 0===e.childItems.length&&(0,a.css)(o)}));t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  list-style: none;\n  padding-left: 18px;\n"],i=["\n  list-style: none;\n  padding-left: 18px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.ul(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),i=a(n(18)),o=a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.onChange,n=e.children,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["onChange","children"]);return r.default.createElement(i.default,a,r.default.createElement(o.default,{type:"checkbox",checked:a.checked,onChange:t}),n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  margin: 2px 4px;\n  white-space: nowrap;\n\n  cursor: pointer;\n  display: inline-block;\n"],i=["\n  margin: 2px 4px;\n  white-space: nowrap;\n\n  cursor: pointer;\n  display: inline-block;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  cursor: pointer;\n"],i=["\n  cursor: pointer;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.input(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  color: initial;\n  font-size: initial;\n  font-family: initial;\n"],i=["\n  color: initial;\n  font-size: initial;\n  font-family: initial;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=c(n(1)),o=n(2),a=c(n(22)),u=c(n(27)),l=c(n(28)),s=c(n(29));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAdd=n.handleAdd.bind(n),n.handleRemove=n.handleRemove.bind(n),n.propertyInstanceDecorator=e.propertyInstanceDecorator||function(e){return e},n.PropertyInstance=n.propertyInstanceDecorator(s.default),n.state={values:(0,o.Map)((e.values||[]).map((function(e){return[(0,l.default)(),e]}))).toOrderedMap()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"handleAdd",value:function(e,t){this.setState((function(e){return{values:e.values.set((0,l.default)(),{type:t.name,value:""})}}))}},{key:"handleRemove",value:function(e){this.setState((function(t){return{values:t.values.delete(e)}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.property;return function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}(t,["property"]),i.default.createElement("div",null,i.default.createElement("strong",null,n.name),i.default.createElement(a.default,{property:n,onAdd:this.handleAdd}),this.state.values.map((function(t,r){return i.default.createElement("div",{key:r},i.default.createElement(u.default,{onClick:function(){return e.handleRemove(r)}}),i.default.createElement(e.PropertyInstance,{property:n,propertyValue:t}))})).valueSeq(),i.default.createElement("hr",{style:{color:"#007aff",width:"100%",height:"1px"}}))}}]),t}(i.default.Component);t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(1)),o=s(n(23)),a=s(n(24)),u=s(n(25)),l=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAdd=n.handleAdd.bind(n),n.handleClick=n.handleClick.bind(n),n.state={open:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"handleClick",value:function(e){if(e.preventDefault(),1===this.props.property.ranges.length)return this.handleAdd(this.props.property,this.props.property.ranges[0]);this.setState((function(e){return{open:!e.open}}))}},{key:"handleAdd",value:function(e,t){this.props.onAdd&&this.props.onAdd(e,t),this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.props.property;return i.default.createElement(o.default,null,i.default.createElement(a.default,{open:this.state.open,onClick:this.handleClick}),i.default.createElement(u.default,null,i.default.createElement(l.default,{open:this.state.open},t.ranges.map((function(n,r){return i.default.createElement("div",{key:r,onClick:function(){return e.handleAdd(t,n)}},n.label)})))))}}]),t}(i.default.Component);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n    display: inline-block;\n    margin: 0 4px;\n"],i=["\n    display: inline-block;\n    margin: 0 4px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  border-radius: 2px;\n\n  &:after {\n    content: ",";\n  }\n"],i=["\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  border-radius: 2px;\n\n  &:after {\n    content: ",";\n  }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a,(function(e){return e.open?"'-'":"'+'"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  overflow: hidden;\n  display: inline-block;\n  height: 20px;\n  vertical-align: top;\n  margin-left: -2px;\n"],i=["\n  overflow: hidden;\n  display: inline-block;\n  height: 20px;\n  vertical-align: top;\n  margin-left: -2px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-radius: 2px;\n  margin-left: ",";\n  transition: 500ms;\n  line-height: 20px;\n  padding-left: 2px;\n  height: 20px;\n  box-sizing: border-box;\n\n  > div {\n    display: inline-block;\n    cursor: pointer;\n    padding: 0 8px;\n    border-left: 1px solid #007aff;\n    color: #007aff;\n    font-weight: 600;\n    font-family: sans-serif;\n    font-size: 12px;\n\n    &:hover {\n      color: #fff;\n      background: #007aff;\n    }\n  }\n"],i=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-radius: 2px;\n  margin-left: ",";\n  transition: 500ms;\n  line-height: 20px;\n  padding-left: 2px;\n  height: 20px;\n  box-sizing: border-box;\n\n  > div {\n    display: inline-block;\n    cursor: pointer;\n    padding: 0 8px;\n    border-left: 1px solid #007aff;\n    color: #007aff;\n    font-weight: 600;\n    font-family: sans-serif;\n    font-size: 12px;\n\n    &:hover {\n      color: #fff;\n      background: #007aff;\n    }\n  }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a,(function(e){return e.open?"-4px":"-100%"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=['\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: top;\n  border-radius: 2px 0 0px 2px;\n  box-sizing: border-box;\n  margin-top: 1px;\n\n  &:after {\n    content: "-";\n  }\n'],i=['\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: top;\n  border-radius: 2px 0 0px 2px;\n  box-sizing: border-box;\n  margin-top: 1px;\n\n  &:after {\n    content: "-";\n  }\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Array(256).fill().map((function(e,t){return(t<16?"0":"")+t.toString(16)})),i=window.crypto&&window.crypto.getRandomValues?function(){var e=new Uint32Array(4);return window.crypto.getRandomValues(e),{d0:e[0],d1:e[1],d2:e[2],d3:e[3]}}:function(){return{d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0}};t.default=function(){return t=(e=i()).d0,n=e.d1,o=e.d2,a=e.d3,r[255&t]+r[t>>8&255]+r[t>>16&255]+r[t>>24&255]+"-"+r[255&n]+r[n>>8&255]+"-"+r[n>>16&15|64]+r[n>>24&255]+"-"+r[63&o|128]+r[o>>8&255]+"-"+r[o>>16&255]+r[o>>24&255]+r[255&a]+r[a>>8&255]+r[a>>16&255]+r[a>>24&255];var e,t,n,o,a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=b(n(1)),a=n(2),u=b(n(30)),l=b(n(31)),s=b(n(32)),c=b(n(33)),f=b(n(34)),p=b(n(35)),d=b(n(36)),h=b(n(37)),v=b(n(38)),y=b(n(39)),m=b(n(40)),g=b(n(41));function b(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function E(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var x=(0,a.Map)({Boolean:u.default,False:l.default,True:s.default,Date:c.default,DateTime:f.default,Number:p.default,Float:d.default,Integer:h.default,Time:v.default,Text:y.default,URL:m.default}),O=function(e){function t(e){w(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.Component=function(e){return function(t){function n(e){w(this,n);var t=_(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleChange=t.handleChange.bind(t),t.state={value:e.propertyValue.value},t}return E(n,t),i(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return o.default.createElement(e,r({},this.props,{value:this.state.value,onChange:this.handleChange}))}}]),n}(o.default.Component)}(x.get(e.propertyValue.type,g.default)),n}return E(t,e),i(t,[{key:"render",value:function(){return o.default.createElement(this.Component,this.props)}}]),t}(o.default.Component);t.default=O},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],i=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  line-height: 20px;\n  height: 20px;\n  width: 500px;\n  max-width: 100%;\n  box-sizing: border-box;\n"],i=["\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  line-height: 20px;\n  height: 20px;\n  width: 500px;\n  max-width: 100%;\n  box-sizing: border-box;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.input(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n(1)),a=f(n(42)),u=f(n(43)),l=n(44),s=f(n(6)),c=f(n(7));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggle=n.toggle.bind(n),n.state={open:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"toggle",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this.props,t=e.type,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type"]),i=this.state.open?l.ArrowUp:l.ArrowDown;return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.default,null,o.default.createElement("input",{type:"radio"}),"New or ",o.default.createElement("input",{type:"radio"}),"Select existing"," ",o.default.createElement("select",null)," ",o.default.createElement("a",{href:"#"},"edit"),o.default.createElement(i,{onClick:this.toggle})),o.default.createElement(u.default,{open:this.state.open},o.default.createElement(c.default.Consumer,null,(function(e){return o.default.createElement(s.default,r({},e,{selected:[t]},n))}))))}}]),t}(o.default.Component);t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  min-height: 20px;\n  // height: 20px;\n  line-height: 20px;\n  width: 504px;\n  max-width: calc(100% - 20px);\n  box-sizing: border-box;\n\n  color: #007aff;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 12px;\n"],i=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  min-height: 20px;\n  // height: 20px;\n  line-height: 20px;\n  width: 504px;\n  max-width: calc(100% - 20px);\n  box-sizing: border-box;\n\n  color: #007aff;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 12px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i,o,a=(r=["\n  display: ",";\n"],i=["\n  display: ",";\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(i)}}))),u=((o=n(0))&&o.__esModule?o:{default:o}).default.div(a,(function(e){return e.open?"block":"none"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowUp=t.ArrowDown=void 0;var r=o(n(3)),i=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}t.ArrowDown=i.default,t.ArrowUp=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){return fetch(e,{method:"POST",body:JSON.stringify({query:"query {\n\tschemaProperties(classes: "+JSON.stringify(t)+" ) {\n\t\tname\n\t\tlabel\n\t\tdescription\n\t\tweight\n        ranges {\n            name\n            label\n        }\n\t}\n}",variables:null}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return e.schemaProperties})).then((function(e){return e.sort((function(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0}))}))}}}]))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var r=n(223);e.exports=function(e){return r(e).replace(/[\W_]+(.|$)/g,(function(e,t){return t?" "+t:""})).trim()}},function(e,t){e.exports=function(e){return n.test(e)?e.toLowerCase():r.test(e)?(function(e){return e.replace(o,(function(e,t){return t?" "+t:""}))}(e)||e).toLowerCase():i.test(e)?function(e){return e.replace(a,(function(e,t,n){return t+" "+n.toLowerCase().split("").join(" ")}))}(e).toLowerCase():e.toLowerCase()};var n=/\s/,r=/(_|-|\.|:)/,i=/([a-z][A-Z]|[A-Z][a-z])/;var o=/[\W_]+(.|$)/g;var a=/(.)([A-Z]+)/g},function(e,t,n){"use strict";n.r(t);var r=n(22),i=n.n(r),o=(n(103),n(0)),a=n.n(o),u=n(82);window.addEventListener("load",()=>{const e=window._wlRecipeIngredientSettings||{};let t=null;const n=[{label:e.l10n["(don't change)"],value:"DONT_CHANGE"},{label:e.l10n["(unset)"],value:"UNSET"}],r=(r,i)=>{3>r.length?i(null,{options:n}):(null!==t&&clearTimeout(t),t=setTimeout(()=>wp.ajax.post("wl_ingredient_autocomplete",{query:r,_wpnonce:e.acNonce}).done(e=>i(null,{options:n.concat(e)})).fail(()=>{console.log("error"),i(null,{options:[]})}),1e3))};class o extends a.a.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this),this.state={value:n[0]}}onChange(e){this.setState({value:e})}render(){return a.a.createElement(u.a.Async,{multi:!1,value:this.state.value,onChange:this.onChange,loadOptions:r})}}document.querySelectorAll(".wl-select-main-ingredient").forEach(e=>{i.a.render(a.a.createElement(o,null),e)})})},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(49);t.a=function(){return function(e){wp.wordlift.on("annotation",(function(t){setTimeout((function(){e(Object(r.c)(t))}),0)}))}}},function(e,t,n){"use strict";var r=n(49);t.a=function(){return function(e){wp.wordlift.on("analysis.result",(function(t){setTimeout((function(){e(Object(r.b)(t))}),0)}))}}},function(e,t,n){"use strict";var r=n(49);t.a=function(){return function(e){wp.wordlift.on("updateOccurrencesForEntity",(function({entityId:t,occurrences:n}){setTimeout((function(){e(Object(r.i)(t,n))}),0)}))}}},function(e,t,n){"use strict";var r=n(49);t.a=function(){return function(e){wp.wordlift.on("editorSelectionChanged",(function(t){setTimeout((function(){e(Object(r.a)(t))}),0)}))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var t=n(0),r=n.n(t),i=n(22),o=n.n(i),a=n(8),u=n(143),l=n(153),s=n(249),c=n(250),f=n(251),p=n(252);e.wp.wordlift.on("wlEntityList.loaded",(function(){o.a.render(r.a.createElement(a.a,{store:u.a},r.a.createElement(l.a,null)),document.getElementById("wl-entity-list")),u.a.dispatch(Object(s.a)()),u.a.dispatch(Object(c.a)()),u.a.dispatch(Object(f.a)()),u.a.dispatch(Object(p.a)())}))}).call(this,n(36))},function(e,t){!function(e){"use strict";if(!e.fetch){var t="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,r="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,o="ArrayBuffer"in e;if(o)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=function(e){return e&&DataView.prototype.isPrototypeOf(e)},l=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};h.prototype.append=function(e,t){e=f(e),t=p(t);var n=this.map[e];this.map[e]=n?n+","+t:t},h.prototype.delete=function(e){delete this.map[f(e)]},h.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},h.prototype.set=function(e,t){this.map[f(e)]=p(t)},h.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},n&&(h.prototype[Symbol.iterator]=h.prototype.entries);var s=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},b.call(w.prototype),b.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var c=[301,302,303,307,308];E.redirect=function(e,t){if(-1===c.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})},e.Headers=h,e.Request=w,e.Response=E,e.fetch=function(e,t){return new Promise((function(n,i){var o=new w(e,t),a=new XMLHttpRequest;a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var i="response"in a?a.response:a.responseText;n(new E(i,r))},a.onerror=function(){i(new TypeError("Network request failed"))},a.ontimeout=function(){i(new TypeError("Network request failed"))},a.open(o.method,o.url,!0),"include"===o.credentials?a.withCredentials=!0:"omit"===o.credentials&&(a.withCredentials=!1),"responseType"in a&&r&&(a.responseType="blob"),o.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),a.send(void 0===o._bodyInit?null:o._bodyInit)}))},e.fetch.polyfill=!0}function f(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function v(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function y(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function m(e){var t=new FileReader,n=y(t);return t.readAsArrayBuffer(e),n}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(r&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(i&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(o&&r&&u(e))this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!o||!ArrayBuffer.prototype.isPrototypeOf(e)&&!l(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,n,r=v(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=y(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(e,t){var n,r,i=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),s.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(i)}function _(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function E(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(221),n(292);var r=n(22),i=n.n(r),o=n(103),a=n(0),u=n.n(a);const l=window.wlSettings||{};let s=null;const c=(e,t)=>{3>e.length?t(null,{options:[]}):(null!==s&&clearTimeout(s),s=setTimeout(()=>wp.ajax.post("wl_autocomplete",{query:e,_wpnonce:l.wl_autocomplete_nonce,exclude:l.itemId}).done(e=>t(null,{options:e})).fail(()=>{console.log("error"),t(null,{options:[]})}),1e3))};window.addEventListener("load",()=>{const e=document.getElementById("wl-metabox-field-sameas");null!==e&&i.a.render(u.a.createElement(o.a,{loadOptions:c,name:"wl_metaboxes[entity_same_as][]",placeholder:"",filterOption:(e,t)=>!0,searchPromptText:l.l10n["Type at least 3 characters to search..."],loadingPlaceholder:l.l10n["Please wait while we look for entities in the linked data cloud..."],noResultsText:l.l10n["No results found for your search."]}),e)});var f=n(181);var p=e=>e.sort((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0});function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const v=e=>t=>class extends u.a.Component{constructor(t){super(t),this.is=this.is.bind(this),this.toggle=this.toggle.bind(this),this.on=t["on"+this.capitalize(e)]||(()=>{}),this.state={[e]:t[e]}}componentDidUpdate(t){this.props[e]!==t[e]&&this.setState({[e]:this.props[e]})}is(t){return-1<this.state[e].indexOf(t.id)}toggle(t){this.setState(n=>({[e]:this.is(t)?n[e].filter(e=>t.id!==e):n[e].concat([t.id])})),this.on(t,!this.is(t))}capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}render(){const n={["is"+this.capitalize(e)]:this.is,["toggle"+this.capitalize(e)]:this.toggle};return u.a.createElement(t,h({},this.props,n))}};function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const m=(e=>class extends u.a.Component{constructor(e){super(e),this.onData=this.onData.bind(this),this.state={items:[],roots:[],open:[]}}componentDidMount(){wp.ajax.post("wl_schemaorg_class",{}).then(e=>e.schemaClasses).then(p).then(this.onData)}onData(e){const t=e.filter(e=>"thing"===e.dashname);this.setState({items:e,roots:t,open:t.map(e=>e.id)})}render(){const{items:t,roots:n,open:r}=this.state;return u.a.createElement(e,d({},this.props,{items:t,roots:n,open:r}))}})((g=((...e)=>t=>e.reduce((e,t)=>v(t)(e),t))("open","selected")(f.SchemaClassTree),class extends u.a.Component{constructor(e){super(e),this.getSelected=this.getSelected.bind(this),this.onData=this.onData.bind(this),this.handleSelected=this.handleSelected.bind(this),this.state={selected:document.getElementById("wl_entity_typechecklist")?this.getSelected(document.getElementById("wl_entity_typechecklist")):[]}}componentDidMount(){document.querySelectorAll("#wl_entity_typechecklist, #wl_entity_typechecklist-pop").forEach(e=>e.addEventListener("click",()=>this.onData(this.getSelected(e))))}getSelected(e){return Array.from(e.querySelectorAll("input[type='checkbox']:checked")).map(e=>parseInt(e.value))}onData(e){this.setState({selected:e})}handleSelected(e,t){document.querySelectorAll(`#in-wl_entity_type-${e.id}, #in-popular-wl_entity_type-${e.id}`).forEach(e=>e.checked=t),this.setState(n=>({selected:t?n.selected.concat([e.id]):n.selected.filter(t=>t!==e.id)}))}componentDidUpdate(){window.postMessage({type:"syncWithWordPressTaxonomyMetabox.selected",payload:{selected:this.state.selected}},document.location.href)}render(){const{selected:e,...t}=this.props;return u.a.createElement(g,y({},t,{selected:this.state.selected,onSelected:this.handleSelected}))}}));var g;window.addEventListener("load",()=>{const e=document.querySelector("#taxonomy-wl_entity_type #wl-schema-class-tree");null!==e&&i.a.render(u.a.createElement(m,null),e)});var b=n(155);function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}window.addEventListener("load",()=>{const e=document.getElementById("wl-schema-properties-form");if(null===e)return;const t=window.wlSettings||{},n=t.properties,r=(e=>class extends u.a.Component{constructor(e){super(e),this.state={selected:Array.from(document.querySelectorAll("#wl_entity_typechecklist input[type='checkbox']:checked")).map(e=>parseInt(e.value))}}componentDidMount(){window.addEventListener("message",({data:e,origin:t})=>{console.debug("message received",{data:e,origin:t}),0===document.location.href.indexOf(t)&&void 0!==e.type&&"syncWithWordPressTaxonomyMetabox.selected"===e.type&&this.setState({selected:e.payload.selected})},!1)}render(){const{selected:t,...n}=this.props;return u.a.createElement(e,w({},n,{selected:this.state.selected}))}})(f.Form);i.a.render(u.a.createElement(r,{loader:e=>window.wp.ajax.post("wl_schemaorg_property",{term_id:e,_wpnonce:t.wl_schemaorg_property_nonce}).then(e=>e.schemaProperties).then(e=>e.sort((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0})),propertyDecorator:e=>t=>{return u.a.createElement(e,w({values:(r=t.property,n[r.name])},t));var r},propertyInstanceDecorator:e=>t=>{const n=Object(b.a)(),{property:r,propertyValue:i,...o}=t;return u.a.createElement(u.a.Fragment,null,u.a.createElement("input",{type:"hidden",name:`_wl_prop[${r.name}][${n}][type]`,defaultValue:i.type}),u.a.createElement("input",{type:"hidden",name:`_wl_prop[${r.name}][${n}][language]`,defaultValue:i.language}),u.a.createElement(e,w({},o,{property:r,propertyValue:i,name:`_wl_prop[${r.name}][${n}][value]`,value:i.value})))}}),e)});n(224)}]);
=======
`; // Finally export the `Wrapper`.

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/Edit/components/Header/index.js":
/*!*********************************************!*\
  !*** ./src/Edit/components/Header/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ "./src/Edit/components/Header/Wrapper.js");
/* harmony import */ var _containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/EntityFilter */ "./src/Edit/containers/EntityFilter.js");
/**
 * Components: the classification box header.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Define the `Header` with the entity filters.
 *
 * @since 3.11.0
 * @return {Function} The `render` function.
 */

const Header = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
  filter: "SHOW_WHAT"
}, "what"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
  filter: "SHOW_WHERE"
}, "where"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
  filter: "SHOW_WHEN"
}, "when"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
  filter: "SHOW_WHO"
}, "who"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {
  filter: "SHOW_ALL"
}, "all")); // Finally export the `Header`.


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Edit/components/Input/Wrapper.js":
/*!**********************************************!*\
  !*** ./src/Edit/components/Input/Wrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  padding: 8px 0 6px;
  border-bottom: 2px solid #007aff;
  display: inline-block;
  width: 100%;

  > input {
    border: 0;
    outline: none;
    float: left;
    width: calc(100% - 36px) !important;
    font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
      Cantarell, "Helvetica Neue", sans-serif;
    line-height: 20px;
    font-size: 14px;
    padding: 0 6px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/Edit/components/Input/X.js":
/*!****************************************!*\
  !*** ./src/Edit/components/Input/X.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const X = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  font-family: sans-serif;
  background-color: #007aff;
  color: white;
  width: 12px;
  height: 12px;
  display: inline-block;
  text-align: center;
  line-height: 12px;
  font-size: 12px;
  padding: 1px;
  cursor: pointer;
  border-radius: 100%;
  transform: rotate(45deg);

  &::after {
    content: "+";
    font-size: 12px;
    width: 100%;
    height: 100%;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (X);

/***/ }),

/***/ "./src/Edit/components/Input/index.js":
/*!********************************************!*\
  !*** ./src/Edit/components/Input/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ "./src/Edit/components/Input/Wrapper.js");
/* harmony import */ var _X__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./X */ "./src/Edit/components/Input/X.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Input = ({
  onCancel,
  onInputChange,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
  onChange: e => onInputChange(e.target.value)
}, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_X__WEBPACK_IMPORTED_MODULE_2__["default"], {
  onClick: onCancel
}));

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/Edit/components/Link/index.js":
/*!*******************************************!*\
  !*** ./src/Edit/components/Link/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Components: Link.
 *
 * The `Link` component is a link which handles an `onClick` event.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Define the `Link` class.
 *
 * @since 3.11.0
 */

class Link extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  /**
   * @inheritDoc
   */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  /**
   * Reroute clicks to the container.
   *
   * @since 3.11.0
   *
   * @param {Event} e The source {@link Event}.
   */


  onClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.filter);
  }
  /**
   * @inheritDoc
   */


  render() {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: this.props.active ? 'wl-active' : '',
        onClick: this.onClick
      }, this.props.children)
    );
  }

} // Finally export the `Link`.


/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/Edit/components/List/Wrapper.js":
/*!*********************************************!*\
  !*** ./src/Edit/components/List/Wrapper.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul`
  background: white;
  // border-top: 0;
  // border-bottom: 1px solid #007aff;
  // border-left: 1px solid #007aff;
  // border-right: 1px solid #007aff;
  border: 1px solid #007aff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-height: 280px;
  overflow-y: scroll;
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, "Helvetica Neue", sans-serif;
  line-height: 20px;
  font-size: 14px;
  position: absolute;
  // width: calc(100% - 1px);
  // margin-left: 1px;
  width: 110%;
  margin-left: calc( -5% + 1px );
  overflow-x: hidden;
  z-index: 1001;

  display: ${props => props.open ? "block" : "none"};

  > li {
    cursor: pointer;
    margin-bottom: 0;
    padding-bottom: 4px;

    &:hover {
      background-color: rgba(46, 146, 255, 0.2);
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/Edit/components/List/index.js":
/*!*******************************************!*\
  !*** ./src/Edit/components/List/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ "./src/Edit/components/List/Wrapper.js");



const List = ({
  open,
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
  open: open
}, 0 < children.length && children.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  key: index
}, item)), 0 === children.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  style: {
    padding: "8px",
    cursor: "initial"
  },
  key: 0
}, "No results."));

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./src/Edit/components/Select/index.js":
/*!*********************************************!*\
  !*** ./src/Edit/components/Select/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Input */ "./src/Edit/components/Input/index.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../List */ "./src/Edit/components/List/index.js");




const Select = ({
  open,
  value,
  onCancel,
  onInputChange,
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
  onCancel: onCancel,
  onInputChange: onInputChange,
  value: value
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_List__WEBPACK_IMPORTED_MODULE_2__["default"], {
  open: open
}, children));

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ }),

/***/ "./src/Edit/components/Switch/Background.js":
/*!**************************************************!*\
  !*** ./src/Edit/components/Switch/Background.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/**
 * Components: Background.
 *
 * The {@link Switch} background.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * @inheritDoc
 */

const Background = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	width: 24px;
	height: 16px;
	background: ${props => props.selected ? '#7ed321' : '#c7c7c7'};
	transition: background 200ms ease;
	border-radius: 10px;
`; // Finally export the `Background`.

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/Edit/components/Switch/Bullet.js":
/*!**********************************************!*\
  !*** ./src/Edit/components/Switch/Bullet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/**
 * Components: Bullet.
 *
 * The {@link Switch} bullet.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * @inheritDoc
 */

const Bullet = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	cursor: pointer;
	display: inline-block;
	position: absolute;
	top: 2px;
	left: ${props => props.selected ? 10 : 2}px;
	transition: left 150ms ease;
	width: 12px;
	height: 12px;
	background: #FFFFFF;
	border-radius: 50%;
`; // Finally export the `Bullet`.

/* harmony default export */ __webpack_exports__["default"] = (Bullet);

/***/ }),

/***/ "./src/Edit/components/Switch/Label.js":
/*!*********************************************!*\
  !*** ./src/Edit/components/Switch/Label.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/**
 * Components: Label.
 *
 * The {@link Switch} label.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * @inheritDoc
 */

const Label = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: inline-block;
	position: relative;
	top: -4px;
	line-height: 16px;
	font-size: 12px;
	margin: 0 12px 0 4px;
	transition: opacity 150ms ease;
	opacity: ${props => props.selected ? 1 : 0.5};
	
	&:after {
		content: ' ';
		display: inline-block;
		position: absolute;
		right: -12px;
		top: 6px;
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background-color: #626162;
		margin-right: 4px;
	}
`; // Finally export the `Label`.

/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./src/Edit/components/Switch/Wrapper.js":
/*!***********************************************!*\
  !*** ./src/Edit/components/Switch/Wrapper.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/**
 * Components: Wrapper component.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * @inheritDoc
 */

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
	display: inline-block;
	position: relative;
	height: 16px;
`; // Finally export the `Wrapper`.

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./src/Edit/components/Switch/index.js":
/*!*********************************************!*\
  !*** ./src/Edit/components/Switch/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wrapper */ "./src/Edit/components/Switch/Wrapper.js");
/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Background */ "./src/Edit/components/Switch/Background.js");
/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Bullet */ "./src/Edit/components/Switch/Bullet.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./src/Edit/components/Switch/Label.js");
/**
 * Components: Switch component.
 *
 * Represents a switch, forwards clicks to the parent. State is handled by the
 * parent via the `on` property.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Define the `Switch`.
 *
 * @since 3.11.0
 */

class Switch extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  /**
   * @inheritDoc
   */
  constructor(props) {
    super(props); // Bind the event handler.

    this.onClick = this.onClick.bind(this);
  }
  /**
   * Handle clicks.
   *
   * @since 3.11.0
   * @param {Event} e The source {@link Event}.
   */


  onClick(e) {
    e.preventDefault(); // Forward the click event.

    this.props.onClick(e);
  }
  /**
   * @inheritDoc
   */


  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.onClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Background__WEBPACK_IMPORTED_MODULE_2__["default"], {
      selected: this.props.selected
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bullet__WEBPACK_IMPORTED_MODULE_3__["default"], {
      selected: this.props.selected
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
      selected: this.props.selected
    }, this.props.children));
  }

} // Finally export the `Switch`.


/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./src/Edit/constants/ActionTypes.js":
/*!*******************************************!*\
  !*** ./src/Edit/constants/ActionTypes.js ***!
  \*******************************************/
/*! exports provided: ANNOTATION, TOGGLE_ENTITY, UPDATE_OCCURRENCES_FOR_ENTITY, TOGGLE_LINK, RECEIVE_ANALYSIS_RESULTS, SET_CURRENT_ENTITY, SET_ENTITY_FILTER, EDITOR_SELECTION_CHANGED, TOGGLE_LINK_SUCCESS, ADD_ENTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOTATION", function() { return ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ENTITY", function() { return TOGGLE_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_OCCURRENCES_FOR_ENTITY", function() { return UPDATE_OCCURRENCES_FOR_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LINK", function() { return TOGGLE_LINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ANALYSIS_RESULTS", function() { return RECEIVE_ANALYSIS_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_ENTITY", function() { return SET_CURRENT_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENTITY_FILTER", function() { return SET_ENTITY_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_SELECTION_CHANGED", function() { return EDITOR_SELECTION_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_LINK_SUCCESS", function() { return TOGGLE_LINK_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ENTITY", function() { return ADD_ENTITY; });
/**
 * Define the `ANNOTATION` action name, used when an annotation is (de)selected
 * in TinyMCE.
 *
 * @since 3.11.0
 * @type {string}
 */
const ANNOTATION = "ANNOTATION";
/**
 * Define the `TOGGLE_ENTITY` action name, used when the selection state of an
 * an entity must be toggled on / off.
 *
 * @since 3.11.0
 * @type {string}
 */

const TOGGLE_ENTITY = "TOGGLE_ENTITY";
/**
 * Define the `UPDATE_OCCURRENCES_FOR_ENTITY` action name, used to catch
 * `updateOccur(r)encesForEntity` events from the legacy Angular application.
 *
 * @since 3.11.0
 * @type {string}
 */

const UPDATE_OCCURRENCES_FOR_ENTITY = "UPDATE_OCCURRENCES_FOR_ENTITY";
/**
 * Define the `TOGGLE_LINK` action name, used to enable/disable linking an
 * entity.
 *
 * @since 3.11.0
 * @type {string}
 */

const TOGGLE_LINK = "TOGGLE_LINK";
/**
 * Define the `RECEIVE_ANALYSIS_RESULTS` action name, fired when analysis
 * results are received.
 *
 * @since 3.11.0
 * @type {string}
 */

const RECEIVE_ANALYSIS_RESULTS = "RECEIVE_ANALYSIS_RESULTS";
/**
 * Define the `SET_CURRENT_ENTITY` action name, fired to edit an entity inline.
 *
 * @since 3.11.0
 * @type {string}
 */

const SET_CURRENT_ENTITY = "SET_CURRENT_ENTITY";
const SET_ENTITY_FILTER = "SET_ENTITY_FILTER";
/**
 * Define the `EDITOR_SELECTION_CHANGED` action name, fired when the selection has changed
 * in the main editor.
 *
 * @since 3.18.4
 * @type {string}
 */

const EDITOR_SELECTION_CHANGED = "EDITOR_SELECTION_CHANGED";
const TOGGLE_LINK_SUCCESS = "TOGGLE_LINK_SUCCESS";
const ADD_ENTITY = "ADD_ENTITY";

/***/ }),

/***/ "./src/Edit/containers/EntityFilter.js":
/*!*********************************************!*\
  !*** ./src/Edit/containers/EntityFilter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/Edit/actions/index.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Link */ "./src/Edit/components/Link/index.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * @inheritDoc
 */

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
/**
 * @inheritDoc
 */


const mapDispatchToProps = dispatch => {
  return {
    /**
     * Set the entity visibility filter when a link is clicked.
     *
     * @since 3.11.0
     *
     * @param {string} filter The filter (who, where, when, what, all).
     */
    onClick: filter => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["setEntityVisibility"])(filter));
    }
  };
};
/**
 * The `EntityListContainer` instance built by `react-redux` by connecting the
 * store with the state and dispatchers merged to properties passed to the React
 * components.
 *
 * @since 3.11.0
 */


const EntityFilter = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"]); // Finally export the `EntityFilter`.

/* harmony default export */ __webpack_exports__["default"] = (EntityFilter);

/***/ }),

/***/ "./src/Edit/containers/VisibleEntityList.js":
/*!**************************************************!*\
  !*** ./src/Edit/containers/VisibleEntityList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/Edit/actions/index.js");
/* harmony import */ var _components_EntityList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/EntityList */ "./src/Edit/components/EntityList/index.js");
/**
 * Containers: Entity List.
 *
 * The `EntityListContainer` follows the `react-redux` pattern to bind specific
 * parts of the application state and dispatchers to the contained components.
 *
 * The `EntityListContainer` contains the `EntityList` component.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/**
 * Filters the provided map of entities according to the specified filter.
 *
 * @since 3.11.0
 *
 * @param {Object} entities A keyed map of entities.
 * @param {string} annotation The annotation id.
 * @param {string} filter The filter.
 * @returns {Object} The filtered keyed-map of entities.
 */

const getVisibleEntities = (entities, annotation, filter) => {
  switch (filter) {
    // When showing an annotation, we check that the annotation id is
    // present as key in the annotations property.
    case "SHOW_ANNOTATION":
      return entities.filter(x => "undefined" !== typeof x.annotations && annotation in x.annotations);

    case "SHOW_WHO":
      return entities.filter(x => "undefined" !== typeof x.w && "who" === x.w);

    case "SHOW_WHERE":
      return entities.filter(x => "undefined" !== typeof x.w && "where" === x.w);

    case "SHOW_WHEN":
      return entities.filter(x => "undefined" !== typeof x.w && "when" === x.w);

    case "SHOW_WHAT":
      return entities.filter(x => "undefined" !== typeof x.w && "what" === x.w);

    default:
      // When showing all the entities, show only the shortlisted ones,
      // i.e. the most relevant. The `shortlist` flag is set in the
      // `entities` reducer and is assigned to the first 20 entities
      // ordered by descending confidence.
      //
      // We also show selected entities.
      return entities.filter(x => x.shortlist || 0 < x.occurrences.length);
  }
};
/**
 * Map the state to React components' properties.
 *
 * @since 3.11.0
 *
 * @param {object} state A state instance.
 * @returns {{entities}} An object with the list of entities.
 */


const mapStateToProps = state => {
  return {
    entities: getVisibleEntities(state.entities, state.annotationFilter, state.visibilityFilter)
  };
};
/**
 * Map dispatchers to React components' properties.
 *
 * @since 3.11.0
 * @param {function} dispatch Redux's dispatch function.
 * @returns {{onClick: (Function), onLinkClick: (Function)}} A list of
 *     dispatchers.
 */


const mapDispatchToProps = dispatch => {
  return {
    /**
     * The `onClick` dispatchers used by `EntityTile` component.
     *
     * @since 3.11.0
     * @param {Object} entity The entity instance being clicked.
     */
    onClick: entity => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toggleEntity"])(entity));
    },

    /**
     * The `onLinkClick` function is called when the Link switch is
     * clicked.
     * This function will toggle the link/no link on the entity's
     * occurrences.
     *
     * @since 3.11.0
     * @param {Object} entity The entity.
     */
    onLinkClick: entity => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["toggleLink"])(entity));
    },
    onEditClick: entity => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["setCurrentEntity"])(entity));
    }
  };
};
/**
 * The `EntityListContainer` instance built by `react-redux` by connecting the
 * store with the state and dispatchers merged to properties passed to the React
 * components.
 *
 * @since 3.11.0
 */


const VisibleEntityList = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_EntityList__WEBPACK_IMPORTED_MODULE_2__["default"]); // Finally export the `VisibleEntityList`.

/* harmony default export */ __webpack_exports__["default"] = (VisibleEntityList);

/***/ }),

/***/ "./src/Edit/index.autocomplete-select.js":
/*!***********************************************!*\
  !*** ./src/Edit/index.autocomplete-select.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Autocomplete_AutocompleteSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Autocomplete/AutocompleteSelect */ "./src/Edit/components/Autocomplete/AutocompleteSelect/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Load the Autocomplete Select.
 *
 * @since 3.20.0
 */


 // Set a reference to the WordLift's settings stored in the window instance.

const settings = window["wlSettings"] || {};
let autocompleteTimeout = null;

const autocomplete = (query, callback) => {
  // Minimum 3 characters.
  if (3 > query.length) {
    callback(null, {
      options: []
    });
    return;
  } // Clear any existing query.


  if (null !== autocompleteTimeout) clearTimeout(autocompleteTimeout); // Send our query.

  autocompleteTimeout = setTimeout(() => wp.ajax.post("wl_autocomplete", {
    query,
    _wpnonce: settings["wl_autocomplete_nonce"],
    exclude: settings["itemId"]
  }).done(json => callback(null, {
    options: json
  })).fail(() => {
    console.log("error");
    callback(null, {
      options: []
    });
  }), 1000);
}; // ### Render the sameAs metabox field autocomplete select.


window.addEventListener("load", () => {
  const element = document.getElementById("wl-metabox-field-sameas"); // Check that the document element is there.

  if (null === element) {
    return;
  }

  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Autocomplete_AutocompleteSelect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    loadOptions: autocomplete,
    name: "wl_metaboxes[entity_same_as][]",
    placeholder: "",
    filterOption: (option, filter) => true,
    searchPromptText: settings.l10n["Type at least 3 characters to search..."],
    loadingPlaceholder: settings.l10n["Please wait while we look for entities in the linked data cloud..."],
    noResultsText: settings.l10n["No results found for your search."]
  }), element);
});

/***/ }),

/***/ "./src/Edit/index.classification-box.js":
/*!**********************************************!*\
  !*** ./src/Edit/index.classification-box.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores */ "./src/Edit/stores/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./src/Edit/components/App/index.js");
/* harmony import */ var _angular_AnnotationEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular/AnnotationEvent */ "./src/Edit/angular/AnnotationEvent.js");
/* harmony import */ var _angular_ReceiveAnalysisResultsEvent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular/ReceiveAnalysisResultsEvent */ "./src/Edit/angular/ReceiveAnalysisResultsEvent.js");
/* harmony import */ var _angular_UpdateOccurrencesForEntityEvent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular/UpdateOccurrencesForEntityEvent */ "./src/Edit/angular/UpdateOccurrencesForEntityEvent.js");
/* harmony import */ var _angular_EditorSelectionChangedEvent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular/EditorSelectionChangedEvent */ "./src/Edit/angular/EditorSelectionChangedEvent.js");
/**
 * Load the Classification Box.
 *
 * @since 3.20.0
 */

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */






 // Start-up the application when the `wlEntityList` Angular directive is
// loaded.

const wp = global["wp"];
wp.wordlift.on("wlEntityList.loaded", function () {
  // Render the `React` tree at the `wl-entity-list` element.
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
  /*#__PURE__*/
  // Following is `react-redux` syntax for binding the `store` with the
  // container down to the components.
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _stores__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById("wl-entity-list")); // Listen for annotation selections in TinyMCE and dispatch the
  // `AnnotationEvent` action.

  _stores__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_angular_AnnotationEvent__WEBPACK_IMPORTED_MODULE_5__["default"])()); // Listen for analysis results and dispatch the `receiveAnalysisResults`
  // action when new results are received.

  _stores__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_angular_ReceiveAnalysisResultsEvent__WEBPACK_IMPORTED_MODULE_6__["default"])()); // Dispatch an redux-thunk action, which hooks to the legacy
  // `updateOccurrencesForEntity` event and dispatches the related action in
  // Redux.

  _stores__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_angular_UpdateOccurrencesForEntityEvent__WEBPACK_IMPORTED_MODULE_7__["default"])()); // Dispatch the `editorSelectionChanged` action with the new editor selection.

  _stores__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch(Object(_angular_EditorSelectionChangedEvent__WEBPACK_IMPORTED_MODULE_8__["default"])());
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Edit/index.js":
/*!***************************!*\
  !*** ./src/Edit/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/Edit/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_classification_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.classification-box */ "./src/Edit/index.classification-box.js");
/* harmony import */ var _index_autocomplete_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.autocomplete-select */ "./src/Edit/index.autocomplete-select.js");
/* harmony import */ var _index_schema_class_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.schema-class-tree */ "./src/Edit/index.schema-class-tree.js");
/* harmony import */ var _index_schema_property_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.schema-property-form */ "./src/Edit/index.schema-property-form.js");
/* harmony import */ var _index_main_ingredient_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.main-ingredient-select */ "./src/Edit/index.main-ingredient-select.js");
/*global wp jQuery */

/**
 * App: WordLift Admin.
 *
 * This is the main entry point for WordLift's admin client application,
 * currently handling the classification box in the post/page edit screen.
 *
 * The application is structured in a Redux provider which encloses:
 *  * an EntityListContainer container, based on `react-redux` binds state and
 *    dispatchers, which contains:
 *  * an EntityList component which, in turn, loads
 *  * an EntityTile component for each entity.
 *
 * The application is activated when an `analysis.result` is fired via WP's
 * Backbone subsystem in the `wordlift` namespace.
 *
 * @since 3.20.0 The single load functions are split in the index.*.js files.
 * @since 3.11.0
 */

/*
 * Internal dependencies
 */
 // Load the Classification Box.

 // Load the Autocomplete Select.

 // Load the Schema Class Tree.

 // Load the Schema Properties Form.

 // Load the Main Ingredient Select.



/***/ }),

/***/ "./src/Edit/index.main-ingredient-select.js":
/*!**************************************************!*\
  !*** ./src/Edit/index.main-ingredient-select.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Autocomplete_AutocompleteSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Autocomplete/AutocompleteSelect */ "./src/Edit/components/Autocomplete/AutocompleteSelect/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js");
/**
 * Load the Main Ingredient Select.
 *
 * @since 3.38.3
 */



 // ### Render the sameAs metabox field autocomplete select.

window.addEventListener("load", () => {
  // Set a reference to the WordLift's settings stored in the window instance.
  const settings = window["_wlRecipeIngredientSettings"] || {};
  let autocompleteTimeout = null;
  const DEFAULT_OPTIONS = [{
    label: settings.l10n["(don't change)"],
    value: "DONT_CHANGE"
  }, {
    label: settings.l10n["(unset)"],
    value: "UNSET"
  }];

  const autocomplete = (query, callback) => {
    // Minimum 3 characters.
    if (3 > query.length) {
      callback(null, {
        options: DEFAULT_OPTIONS
      });
      return;
    } // Clear any existing query.


    if (null !== autocompleteTimeout) clearTimeout(autocompleteTimeout); // Send our query.

    autocompleteTimeout = setTimeout(() => wp.ajax.post("wl_ingredient_autocomplete", {
      query,
      _wpnonce: settings.acNonce
    }).done(json => callback(null, {
      options: DEFAULT_OPTIONS.concat(json)
    })).fail(() => {
      console.log("error");
      callback(null, {
        options: []
      });
    }), 1000);
  };

  class MainIngredientSelect extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.state = {
        value: DEFAULT_OPTIONS[0]
      };
    }

    onChange(value) {
      this.setState({
        value
      });
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"].Async, {
        multi: false,
        name: "recipe_main_ingredient[]",
        value: this.state.value,
        onChange: this.onChange,
        loadOptions: autocomplete
      });
    }

  }

  document.querySelectorAll(".wl-select-main-ingredient").forEach(el => {
    react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MainIngredientSelect, null), el);
  });
});
/**
 *       <AutocompleteSelect
 *         value={DEFAULT_OPTIONS[0]}
 *         multi={false}
 *         loadOptions={autocomplete}
 *         name="main_ingredient[]"
 *         placeholder=""
 *         filterOption={(option, filter) => true}
 *         searchPromptText={settings.l10n["Type at least 3 characters to search..."]}
 *         loadingPlaceholder={settings.l10n["Looking for main ingredients..."]}
 *         noResultsText={settings.l10n["No results found for your search."]}
 *         optionRenderer={props => (
 *           <Option instancePrefix={"main-ingredient-"} option={props}>
 *             <div>{props.label}</div>
 *           </Option>
 *         )}
 *         valueComponent={Value}
 *       />,
 */

/***/ }),

/***/ "./src/Edit/index.schema-class-tree.js":
/*!*********************************************!*\
  !*** ./src/Edit/index.schema-class-tree.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordlift/wordlift-for-schemaorg */ "./node_modules/@wordlift/wordlift-for-schemaorg/build/wordlift-for-schemaorg.js");
/* harmony import */ var _wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SchemaClassTree_withLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SchemaClassTree/withLoader */ "./src/Edit/SchemaClassTree/withLoader.js");
/* harmony import */ var _SchemaClassTree_withProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SchemaClassTree/withProps */ "./src/Edit/SchemaClassTree/withProps.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Schema Class Tree start-up.
 *
 * Load the {@link SchemaClassTree} on window load if the target element is
 * present on page.
 *
 * @since 3.20.0
 */

/*
 * External dependencies.
 */






const syncWithWordPressTaxonomyMetabox = Component => class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.getSelected = this.getSelected.bind(this);
    this.onData = this.onData.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.state = {
      selected: document.getElementById("wl_entity_typechecklist") ? // Get the selection from WordPress' own checklist.
      this.getSelected(document.getElementById("wl_entity_typechecklist")) : []
    };
  }

  componentDidMount() {
    document.querySelectorAll("#wl_entity_typechecklist, #wl_entity_typechecklist-pop").forEach(element => element.addEventListener("click", () => this.onData(this.getSelected(element))));
  }
  /**
   * Return an {@link Array} of selected items.
   *
   * @since 3.20.0
   * @returns {number[]} The Array of selected items' ids.
   */


  getSelected(element) {
    return Array.from(element.querySelectorAll("input[type='checkbox']:checked")).map(item => parseInt(item.value));
  }

  onData(selected) {
    this.setState({
      selected
    });
  }

  handleSelected(item, selected) {
    document // Query WordPress' own checkboxes.
    .querySelectorAll(`#in-wl_entity_type-${item.id}, #in-popular-wl_entity_type-${item.id}`) // Set them un/checked accordingly.
    .forEach(element => element.checked = selected);
    this.setState(prevState => ({
      selected: selected ? prevState.selected.concat([item.id]) : prevState.selected.filter(value => value !== item.id)
    }));
  }

  componentDidUpdate() {
    window.postMessage({
      type: "syncWithWordPressTaxonomyMetabox.selected",
      payload: {
        selected: this.state.selected
      }
    }, document.location.href);
  }

  render() {
    // Take out `selected` from the props.
    const {
      selected,
      ...props
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      selected: this.state.selected,
      onSelected: this.handleSelected
    }));
  }

};
/*
 * `withLoader` provides us with the `open` property therefore goes after
 * `withProps`.
 */


const DecoratedTree = Object(_SchemaClassTree_withLoader__WEBPACK_IMPORTED_MODULE_3__["default"])(syncWithWordPressTaxonomyMetabox(Object(_SchemaClassTree_withProps__WEBPACK_IMPORTED_MODULE_4__["default"])("open", "selected")(_wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__["SchemaClassTree"])));
/**
 * Add the SchemaClassTree.
 *
 * @since 3.20.0
 */

window.addEventListener("load", () => {
  // Get the target element.
  const element = document.querySelector("#taxonomy-wl_entity_type #wl-schema-class-tree"); // Bail out if the target element isn't found.

  if (null === element) {
    return;
  } // // Set a reference to the WordLift's settings stored in the window instance.
  // const settings = window["wlSettings"] || {};
  // Render the Schema Class Tree.


  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedTree, null), element);
});

/***/ }),

/***/ "./src/Edit/index.schema-property-form.js":
/*!************************************************!*\
  !*** ./src/Edit/index.schema-property-form.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordlift/wordlift-for-schemaorg */ "./node_modules/@wordlift/wordlift-for-schemaorg/build/wordlift-for-schemaorg.js");
/* harmony import */ var _wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uuid */ "./src/Edit/uuid.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Load the Schema Properties Form.
 *
 * @since 3.20.0
 */




/**
 * Add the SchemaClassTree.
 *
 * @since 3.20.0
 */

window.addEventListener("load", () => {
  const element = document.getElementById("wl-schema-properties-form");

  if (null === element) {
    return;
  } // Set a reference to the WordLift's settings stored in the window instance.


  const settings = window["wlSettings"] || {};
  const data = settings["properties"];

  const Reader = property => data[property.name];

  const PropertyDecorator = Component => props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    values: Reader(props.property)
  }, props));

  const PropertyInstanceDecorator = Component => props => {
    const uniqueId = Object(_uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const {
      property,
      propertyValue,
      ...pass
    } = props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      name: `_wl_prop[${property.name}][${uniqueId}][type]`,
      defaultValue: propertyValue.type
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "hidden",
      name: `_wl_prop[${property.name}][${uniqueId}][language]`,
      defaultValue: propertyValue.language
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, pass, {
      property: property,
      propertyValue: propertyValue,
      name: `_wl_prop[${property.name}][${uniqueId}][value]`,
      value: propertyValue.value
    })));
  };

  const FetchLoader = selected => {
    return window["wp"].ajax.post("wl_schemaorg_property", {
      term_id: selected,
      _wpnonce: settings["wl_schemaorg_property_nonce"]
    }).then(json => json["schemaProperties"]).then(properties => // Sort alphabetically.
    properties.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }));
  };

  const syncWithSchemaClassTree = Component => class extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: Array.from(document.querySelectorAll("#wl_entity_typechecklist input[type='checkbox']:checked")).map(item => parseInt(item.value))
      };
    }

    componentDidMount() {
      // Listen for messages, specifically whether the Schema.org class selection has changed.
      window.addEventListener("message", ({
        data,
        origin
      }) => {
        console.debug("message received", {
          data,
          origin
        }); // Bail out if message isn't coming from our page.

        if (0 !== document.location.href.indexOf(origin)) return;
        if (undefined === data.type || "syncWithWordPressTaxonomyMetabox.selected" !== data.type) return;
        this.setState({
          selected: data.payload.selected
        });
      }, false);
    }

    render() {
      const {
        selected,
        ...props
      } = this.props;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
        selected: this.state.selected
      }));
    }

  };

  const DecoratedForm = syncWithSchemaClassTree(_wordlift_wordlift_for_schemaorg__WEBPACK_IMPORTED_MODULE_2__["Form"]);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoratedForm, {
    loader: FetchLoader,
    propertyDecorator: PropertyDecorator,
    propertyInstanceDecorator: PropertyInstanceDecorator
  }), element);
});

/***/ }),

/***/ "./src/Edit/index.scss":
/*!*****************************!*\
  !*** ./src/Edit/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Edit/reducers/annotationFilter.js":
/*!***********************************************!*\
  !*** ./src/Edit/reducers/annotationFilter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/Edit/constants/ActionTypes.js");
/**
 * Reducers: Annotation Filter.
 *
 * @since 3.11.0
 */

/**
 * Internal dependencies
 */
 // import log from '../../modules/log';

/**
 * Define the reducers.
 *
 * @since 3.11.0
 * @param {object} state The `state`.
 * @param {object} action The `action`.
 * @returns {object} The new state.
 */

const annotationFilter = function (state = null, action) {
  switch (action.type) {
    // Handle the `ANNOTATION` action, which sets the current selected
    // annotation or null if not set.
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ANNOTATION"]:
      // We might receive an undefined annotation (when no annotation is
      // selected. In that case we send `null`.
      //
      // Note that this action is handled also by the `visibilityFilter`
      // which sets itself to `SHOW_ANNOTATION` | `SHOW_ALL` according
      // to whether or not an annotation has been selected.
      return action.annotation === undefined ? null : action.annotation;

    default:
      return state;
  }
}; // Finally export the reducer.


/* harmony default export */ __webpack_exports__["default"] = (annotationFilter);

/***/ }),

/***/ "./src/Edit/reducers/editor.js":
/*!*************************************!*\
  !*** ./src/Edit/reducers/editor.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/Edit/constants/ActionTypes.js");
/**
 * Internal dependencies
 */


const editor = function (state = {
  selection: ''
}, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["EDITOR_SELECTION_CHANGED"]:
      // Update the selection.
      return Object.assign({}, state, {
        selection: action.selection
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (editor);

/***/ }),

/***/ "./src/Edit/reducers/entities.js":
/*!***************************************!*\
  !*** ./src/Edit/reducers/entities.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/Edit/constants/ActionTypes.js");
/* harmony import */ var _services_WsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/WsService */ "./src/Edit/services/WsService.js");
/* harmony import */ var _services_link_LinkServiceFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/link/LinkServiceFactory */ "./src/Edit/services/link/LinkServiceFactory.js");
/*global wlSettings*/

/**
 * Reducers: Entities.
 *
 * Define the reducers related to entities.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Define the reducers.
 *
 * @since 3.11.0
 * @param {object} state The `state`.
 * @param {object} action The `action`.
 * @returns {object} The new state.
 */

const entities = function (state = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(), action) {
  const linkService = _services_link_LinkServiceFactory__WEBPACK_IMPORTED_MODULE_3__["default"].getInstance();

  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_ENTITY"]:
      return state.merge(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])({
        [action.payload.id]: action.payload
      }));
    // Legacy: receive analysis' results.

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["RECEIVE_ANALYSIS_RESULTS"]:
      // Calculate the labels.
      const labels = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(action.results.entities).groupBy((v, k) => v.label); // Return a new map of the received entities. The legacy Angular
      // app doesn't set the `link` property on the entity, therefore we
      // preset it here according to the `occurrences` settings.

      return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(action.results.entities).map(x => Object.assign({}, x, {
        link: linkService.getLink(x.occurrences),
        local: 0 === x.id.indexOf(wlSettings["datasetUri"]),
        w: _services_WsService__WEBPACK_IMPORTED_MODULE_2__["default"].getW(x),
        edit: "no" !== wlSettings["can_create_entities"],
        duplicateLabel: 1 < labels.get(x.label).count()
      })) // Sort by (1) local/not local, (2) confidence, (3) number of annotations.
      .sort((x, y) => {
        // First the local entities.
        if (x.local !== y.local) return y.local - x.local; // Get the delta confidence.

        const delta = y.confidence - x.confidence; // If the confidence is equal, sort by number of annotations.

        return 0 !== delta ? delta : y.annotations.length - x.annotations.length;
      }) // Set the shortlist flag to true for the first 20.
      .mapEntries(([k, v], i) => {
        v.shortlist = i < 20;
        return [k, v];
      }) //          // Then resort them by label.
      //          .sortBy( x => x.label.toLowerCase() )
      ;

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_LINK_SUCCESS"]:
      const {
        id,
        link
      } = action.payload;
      return state.set(id, // A new object instance with the existing props and the new
      // occurrences.
      Object.assign({}, state.get(id), {
        link
      }));
    // Update the entity's occurrences. This action is dispatched following
    // a legacy Angular event. The event is configured in the admin/index.js
    // app.

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_OCCURRENCES_FOR_ENTITY"]:
      // Update the entity.
      return state.set(action.entityId, // A new object instance with the existing props and the new
      // occurrences.
      Object.assign({}, state.get(action.entityId), {
        occurrences: action.occurrences,
        link: linkService.getLink(action.occurrences)
      }));

    default:
      return state;
  }
}; // Finally export the reducer.


/* harmony default export */ __webpack_exports__["default"] = (entities);

/***/ }),

/***/ "./src/Edit/reducers/index.js":
/*!************************************!*\
  !*** ./src/Edit/reducers/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./src/Edit/reducers/entities.js");
/* harmony import */ var _annotationFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotationFilter */ "./src/Edit/reducers/annotationFilter.js");
/* harmony import */ var _visibilityFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visibilityFilter */ "./src/Edit/reducers/visibilityFilter.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor */ "./src/Edit/reducers/editor.js");
/**
 * Reducers: Root.
 *
 * The root reducers combining other reducers: entities, visibilityFilter.
 *
 * @since 3.11.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Define the root reducer.
 *
 * @since 3.11.0
 * @type {Reducer<S>}
 */

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  entities: _entities__WEBPACK_IMPORTED_MODULE_1__["default"],
  annotationFilter: _annotationFilter__WEBPACK_IMPORTED_MODULE_2__["default"],
  visibilityFilter: _visibilityFilter__WEBPACK_IMPORTED_MODULE_3__["default"],
  editor: _editor__WEBPACK_IMPORTED_MODULE_4__["default"]
}); // Finally export the root reducer.

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/Edit/reducers/visibilityFilter.js":
/*!***********************************************!*\
  !*** ./src/Edit/reducers/visibilityFilter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/Edit/constants/ActionTypes.js");
/**
 * Reducers: Visibility Filter.
 *
 * @since 3.11.0
 */

/**
 * Internal dependencies
 */

/**
 * Define the reducers.
 *
 * @since 3.11.0
 * @param {object} state The `state`.
 * @param {object} action The `action`.
 * @returns {object} The new state.
 */

const visibilityFilter = function (state = 'SHOW_ALL', action) {
  switch (action.type) {
    // Handle the `SET_ENTITY_FILTER` action, which changes the current
    // filter.
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SET_ENTITY_FILTER"]:
      return action.filter;
    // Handle the `ANNOTATION` action, which notifies us of a selected
    // annotation in TinyMCE. In that case we switch to a `SHOW_ANNOTATION`
    // filter.

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ANNOTATION"]:
      // We might receive an undefined annotation (when no annotation is
      // selected).
      //
      // Note that selected annotation is set by the `annotationFilter`
      // function.
      return action.annotation === undefined ? 'SHOW_ALL' : 'SHOW_ANNOTATION';

    default:
      return state;
  }
}; // Finally export the reducer.


/* harmony default export */ __webpack_exports__["default"] = (visibilityFilter);

/***/ }),

/***/ "./src/Edit/services/EditorService.js":
/*!********************************************!*\
  !*** ./src/Edit/services/EditorService.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*global tinyMCE*/

/**
 * Services: EditorService.
 *
 * Provide TinyMCE editor services.
 *
 * @since 3.11.0
 */

/**
 * Cached TinyMCE instances.
 *
 * @since 3.11.0
 */
const instances = [];
/**
 * The `EditorService` class provides access to the in-page TinyMCE editor.
 *
 * @since 3.11.0
 */

class EditorService {
  /**
   * Get the TinyMCE editor with the specified id.
   *
   * @since 3.11.0
   * @param {string} [id=content] The editor id, by default `content`.
   * @return {Object} A TinyMCE editor instance.
   */
  get(id = window["wlSettings"]["default_editor_id"]) {
    // Get the editor id from the `wlSettings` or use `content`.
    // Allow 3rd parties to change the editor id.
    //
    // @see https://github.com/insideout10/wordlift-plugin/issues/850.
    // @see https://github.com/insideout10/wordlift-plugin/issues/851.
    const editorId = "undefined" !== typeof window["wp"].hooks ? window["wp"].hooks.applyFilters("wl_default_editor_id", id) : id;
    return instances[editorId] ? instances[editorId] : instances[editorId] = tinyMCE.get(editorId);
  }

} // Finally export the `EditorService`.


/* harmony default export */ __webpack_exports__["default"] = (new EditorService());

/***/ }),

/***/ "./src/Edit/services/WsService.js":
/*!****************************************!*\
  !*** ./src/Edit/services/WsService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Services: Ws Service.
 *
 * A service which determines the `W` according to WordLift's configuration.
 *
 * @since 3.11.0
 */
class WsService {
  /**
   * Get the `W` (who, where, when, what) corresponding to the provided
   * entity.
   *
   * @since 3.11.0
   *
   * @param {Object} entity The entity.
   * @returns {string} The W, or 'unknown' if there's no match.
   */
  getW(entity) {
    return window['_wlMetaBoxSettings'].settings.classificationBoxes.reduce((acc, box) => -1 === box.registeredTypes.indexOf(entity.mainType) ? acc : box.id, "unknown");
  }

} // Finally export the `WsService`.


/* harmony default export */ __webpack_exports__["default"] = (new WsService());

/***/ }),

/***/ "./src/Edit/services/link/LinkService.js":
/*!***********************************************!*\
  !*** ./src/Edit/services/link/LinkService.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkService; });
/* harmony import */ var _EditorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EditorService */ "./src/Edit/services/EditorService.js");
/* harmony import */ var _LinkServiceInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinkServiceInterface */ "./src/Edit/services/link/LinkServiceInterface.js");
/**
 * Services: Link Service.
 *
 * A service which handles the link/no link attribute for entity's occurrences.
 *
 * @since 3.11.0
 */

/**
 * Internal dependencies
 */


/**
 * Define the `LinkService` class.
 *
 * @since 3.11.0
 */

class LinkService extends _LinkServiceInterface__WEBPACK_IMPORTED_MODULE_1__["LinkServiceInterface"] {
  /**
   * Create an `LinkService` instance.
   *
   * @since 3.13.0
   */
  constructor() {
    // Set the `link by default` setting.
    super();
    this.linkByDefault = "1" === wlSettings.link_by_default;
  }
  /**
   * Set the link flag on the provided `occurrences`.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences ids (which match dom
   *     elements).
   * @param {boolean} value True to enable linking or false to disable it.
   */


  setLink(occurrences, value) {
    // If the request is to enable links, remove the `wl-no-link` class on
    // all the occurrences.
    if (value) {
      occurrences.forEach(x => this.setYesLink(x));
    } else {
      // If the request is to disable links, add the `wl-no-link` class to
      // all occurrences.
      occurrences.forEach(x => this.setNoLink(x));
    }
  }
  /**
   * Switch the link on.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   */


  setYesLink(elem) {
    const dom = _EditorService__WEBPACK_IMPORTED_MODULE_0__["default"].get().dom;
    dom.removeClass(elem, "wl-no-link");
    dom.addClass(elem, "wl-link");
  }
  /**
   * Switch the link off.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   */


  setNoLink(elem) {
    const dom = _EditorService__WEBPACK_IMPORTED_MODULE_0__["default"].get().dom;
    dom.removeClass(elem, "wl-link");
    dom.addClass(elem, "wl-no-link");
  }
  /**
   * Get the link flag given the provided `occurrences`. A link flag is
   * considered true when at least one occurrences enables linking.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences dom ids.
   * @return {boolean} True if at least one occurrences enables linking,
   *     otherwise false.
   */


  getLink(occurrences) {
    const ed = _EditorService__WEBPACK_IMPORTED_MODULE_0__["default"].get();

    if (ed) {
      // Handle classic editor
      return occurrences.reduce((acc, id) => {
        const dom = ed.dom;
        return acc || (this.linkByDefault ? !dom.hasClass(id, "wl-no-link") : dom.hasClass(id, "wl-link"));
      }, false);
    } else {
      // Handle block editor
      const divElem = document.createElement("div");
      divElem.innerHTML = wp.data.select("core/editor").getBlocks().map(block => block.originalContent).join();
      return occurrences.reduce((acc, id) => {
        return acc || (this.linkByDefault ? !(divElem.querySelector(`[id="${id}"]`) && divElem.querySelector(`[id="${id}"]`).classList.contains("wl-no-link")) : divElem.querySelector(`[id="${id}"]`) && divElem.querySelector(`[id="${id}"]`).classList.contains("wl-link"));
      }, false);
    }
  }

}

/***/ }),

/***/ "./src/Edit/services/link/LinkServiceFactory.js":
/*!******************************************************!*\
  !*** ./src/Edit/services/link/LinkServiceFactory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkServiceFactory; });
/* harmony import */ var _LinkService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkService */ "./src/Edit/services/link/LinkService.js");
/* harmony import */ var _NoAnnotationLinkService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoAnnotationLinkService */ "./src/Edit/services/link/NoAnnotationLinkService.js");
/**
 * @since 3.32.6
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * This class provides link service based on the analysis enabled.
 */


class LinkServiceFactory {
  /**
   * @return LinkServiceInterface
   * @param linkByDefault
   */
  static getInstance() {
    if (this.isNoEditorAnalysisActive()) {
      return new _NoAnnotationLinkService__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }

    return new _LinkService__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  static isNoEditorAnalysisActive() {
    return wlSettings !== undefined && wlSettings.analysis !== undefined && wlSettings.analysis.isNoEditorAnalysisActive !== undefined && wlSettings.analysis.isNoEditorAnalysisActive === true;
  }

}

/***/ }),

/***/ "./src/Edit/services/link/LinkServiceInterface.js":
/*!********************************************************!*\
  !*** ./src/Edit/services/link/LinkServiceInterface.js ***!
  \********************************************************/
/*! exports provided: LinkServiceInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkServiceInterface", function() { return LinkServiceInterface; });
/**
 *  @author Naveen Muthusamy <naveen@wordlift.io>
 *  @since 3.32.6
 *  @abstract
 */
class LinkServiceInterface {
  /**
   * Set the link flag on the provided `occurrences`.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences ids (which match dom
   *     elements).
   * @param {boolean} value True to enable linking or false to disable it.
   * @abstract
   */
  setLink(occurrences, value) {// Child class should implement this.
  }
  /**
   * Switch the link on.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   * @abstract
   */


  setYesLink(elem) {// Child class should implement this.
  }
  /**
   * Switch the link off.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   * @abstract
   */


  setNoLink(elem) {// Child class should implement this.
  }
  /**
   * Get the link flag given the provided `occurrences`. A link flag is
   * considered true when at least one occurrences enables linking.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences dom ids.
   * @return {boolean} True if at least one occurrences enables linking,
   *     otherwise false.
   * @abstract
   */


  getLink(occurrences) {// Child class should implement this.
  }

}

/***/ }),

/***/ "./src/Edit/services/link/NoAnnotationLinkService.js":
/*!***********************************************************!*\
  !*** ./src/Edit/services/link/NoAnnotationLinkService.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoAnnotationLinkService; });
/* harmony import */ var _LinkServiceInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkServiceInterface */ "./src/Edit/services/link/LinkServiceInterface.js");
/**
 * Services: Link Service.
 *
 * A service which handles the link/no link attribute for entity's occurrences.
 *
 * @since 3.32.6
 */

/**
 * Internal dependencies
 */

/**
 * Define the `NoAnnotationLinkService` class, this shouldn't perform any functions.
 *
 * @since 3.32.6
 */

class NoAnnotationLinkService extends _LinkServiceInterface__WEBPACK_IMPORTED_MODULE_0__["LinkServiceInterface"] {
  /**
   * Create an `LinkService` instance.
   *
   * @since 3.13.0
   */
  constructor() {
    super();
  }
  /**
   * Set the link flag on the provided `occurrences`.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences ids (which match dom
   *     elements).
   * @param {boolean} value True to enable linking or false to disable it.
   */


  setLink(occurrences, value) {// Perform no link action
  }
  /**
   * Switch the link on.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   */


  setYesLink(elem) {// Perform no link action
  }
  /**
   * Switch the link off.
   *
   * @since 3.13.0
   * @param {object} elem A DOM element.
   */


  setNoLink(elem) {// Perform no link action
  }
  /**
   * Get the link flag given the provided `occurrences`. A link flag is
   * considered true when at least one occurrences enables linking.
   *
   * @since 3.11.0
   * @param {Array} occurrences An array of occurrences dom ids.
   * @return {boolean} True if at least one occurrences enables linking,
   *     otherwise false.
   */


  getLink(occurrences) {// Perform no link action
  }

}

/***/ }),

/***/ "./src/Edit/stores/index.js":
/*!**********************************!*\
  !*** ./src/Edit/stores/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/Edit/reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sagas */ "./src/Edit/stores/sagas.js");
/**
 * This file defines the store for the Edit Post screen.
 *
 * The store we create here is connected to 2 middlewares:
 *  - sagas, defined in ./sagas.js which handles the side effects.
 *  - thunk, connecting the store to events (mainly coming from the Angular legacy code) defined in ../index.classification-box.js
 *
 * @author David Riccitelli <david@wordlift.io>
 * @since 3.23.4
 */

/**
 * External dependencies.
 */




/**
 * Internal dependencies.
 */


 // Create the store.

const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(sagaMiddleware, redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], redux_logger__WEBPACK_IMPORTED_MODULE_0___default.a));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]); // Finally export the store.

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/Edit/stores/sagas.js":
/*!**********************************!*\
  !*** ./src/Edit/stores/sagas.js ***!
  \**********************************/
/*! exports provided: getMainType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainType", function() { return getMainType; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/Edit/constants/ActionTypes.js");
/* harmony import */ var _angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../angular/EditPostWidgetController */ "./src/Edit/angular/EditPostWidgetController.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/Edit/stores/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/Edit/actions/index.js");
/* harmony import */ var _components_AddEntity_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AddEntity/actions */ "./src/Edit/components/AddEntity/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_link_LinkServiceFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/link/LinkServiceFactory */ "./src/Edit/services/link/LinkServiceFactory.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "./node_modules/@wordpress/hooks/build-module/index.js");
/**
 * This file contains the side effects managed via redux-sagas.
 *
 * @author David Riccitelli <david@wordlift.io>
 * @since 3.23.0
 */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */









/**
 * Handle the {@link TOGGLE_ENTITY} action.
 *
 *  @param {{entity:{id}}} payload A payload containing an entity.
 */

function* toggleEntity(payload) {
  const entity = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["select"])(_selectors__WEBPACK_IMPORTED_MODULE_3__["getEntity"], payload.entity.id);
  Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])().$apply(Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])().onSelectedEntityTile(entity));
}

function* toggleLink({
  entity
}) {
  const linkService = _services_link_LinkServiceFactory__WEBPACK_IMPORTED_MODULE_7__["default"].getInstance(); // Toggle the link/no link on entity's occurrences.
  // Toggle the link on the occurrences.

  linkService.setLink(entity.occurrences, !entity.link);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["toggleLinkSuccess"])({
    id: entity.id,
    link: linkService.getLink(entity.occurrences)
  }));
}

function* setCurrentEntity({
  entity
}) {
  // Call the `EditPostWidgetController` to set the current entity.
  Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])().$apply(Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])().setCurrentEntity(entity, "entity"));
}

function* addEntity({
  payload
}) {
  const ctrl = Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])();
  ctrl.$apply(() => {
    // Create the text annotation.
    ctrl.setCurrentEntity(); // Update the entity data.

    ctrl.currentEntity.description = payload.descriptions[0];
    ctrl.currentEntity.id = payload.id;
    ctrl.currentEntity.images = payload.images;
    ctrl.currentEntity.label = payload.label;
    ctrl.currentEntity.mainType = getMainType(payload.types);
    ctrl.currentEntity.types = payload.types;
    ctrl.currentEntity.sameAs = payload.sameAss; // Save the entity.

    ctrl.storeCurrentEntity();
  });
  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__["doAction"])("unstable_wordlift.closeEntitySelect");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_components_AddEntity_actions__WEBPACK_IMPORTED_MODULE_5__["addEntitySuccess"])());
}

function* createEntity({
  payload
}) {
  const ctrl = Object(_angular_EditPostWidgetController__WEBPACK_IMPORTED_MODULE_2__["default"])();
  ctrl.$apply(ctrl.setCurrentEntity(undefined, undefined, payload));
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_components_AddEntity_actions__WEBPACK_IMPORTED_MODULE_5__["createEntitySuccess"])());
}

const getMainType = types => {
  for (let i = 0; i < window._wlEntityTypes.length; i++) {
    const type = window._wlEntityTypes[i];
    if (-1 < types.indexOf(type.uri)) return type.slug;
  }

  return "thing";
};
let popover;

function* handleEditorSelectionChanged({
  payload
}) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(300);
  console.log("handleEditorSelectionChanged", payload);
  const editor = payload.editor; // Get the selection. Bail out is the selection is collapsed (is just a caret).

  const selection = editor.selection;

  if (selection.isCollapsed() || "" === selection.getContent({
    format: "text"
  })) {
    if (popover) popover.unmount();
    return;
  } // Get the selection range and bail out if it's null.


  const range = selection.getRng();

  if (null == range) {
    if (popover) popover.unmount();
    return;
  } // Get the editor's selection bounding rect. The rect's coordinates are relative to TinyMCE's editor's iframe.


  const editorRect = range.getBoundingClientRect(); // Get TinyMCE's iframe element's bounding rect.

  const iframe = editor.iframeElement;
  const iframeRect = iframe.getBoundingClientRect(); // Calculate our target rect by summing the iframe and the editor rects along with the window's scroll positions.

  const rect = {
    top: iframeRect.top + editorRect.top + window.scrollY,
    right: iframeRect.left + editorRect.right + window.scrollX,
    bottom: iframeRect.top + editorRect.bottom + window.scrollY,
    left: iframeRect.left + editorRect.left + window.scrollX
  };
}
/**
 * Connect the side effects.
 */


function* sagas() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_ENTITY"], toggleEntity);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_LINK"], toggleLink);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_CURRENT_ENTITY"], setCurrentEntity);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_components_AddEntity_actions__WEBPACK_IMPORTED_MODULE_5__["addEntityRequest"], addEntity);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_components_AddEntity_actions__WEBPACK_IMPORTED_MODULE_5__["createEntityRequest"], createEntity);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["EDITOR_SELECTION_CHANGED"], handleEditorSelectionChanged);
}

/* harmony default export */ __webpack_exports__["default"] = (sagas);

/***/ }),

/***/ "./src/Edit/stores/selectors.js":
/*!**************************************!*\
  !*** ./src/Edit/stores/selectors.js ***!
  \**************************************/
/*! exports provided: getEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/**
 * This file defines the selectors.
 *
 * @author David Riccitelli <david@wordlift.io>
 * @since 3.23.4
 */

/**
 * Get an entity given its item id.
 */
const getEntity = (state, id) => state.entities.get(id);

/***/ }),

/***/ "./src/Edit/uuid.js":
/*!**************************!*\
  !*** ./src/Edit/uuid.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lut = Array(256).fill().map((_, i) => (i < 16 ? "0" : "") + i.toString(16));

const formatUuid = ({
  d0,
  d1,
  d2,
  d3
}) => lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + "-" + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + "-" + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + "-" + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + "-" + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];

const getRandomValuesFunc = window.crypto && window.crypto.getRandomValues ? () => {
  const dvals = new Uint32Array(4);
  window.crypto.getRandomValues(dvals);
  return {
    d0: dvals[0],
    d1: dvals[1],
    d2: dvals[2],
    d3: dvals[3]
  };
} : () => ({
  d0: Math.random() * 0x100000000 >>> 0,
  d1: Math.random() * 0x100000000 >>> 0,
  d2: Math.random() * 0x100000000 >>> 0,
  d3: Math.random() * 0x100000000 >>> 0
});

const uuid = () => formatUuid(getRandomValuesFunc());

/* harmony default export */ __webpack_exports__["default"] = (uuid);

/***/ }),

/***/ "./src/common/constants.js":
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
/*! exports provided: SELECTION_CHANGED, ANNOTATION_CHANGED, PLUGIN_NAMESPACE, EDITOR_STORE, EDITOR_ELEMENT_ID, WORDLIFT_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGED", function() { return SELECTION_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANNOTATION_CHANGED", function() { return ANNOTATION_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_NAMESPACE", function() { return PLUGIN_NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_STORE", function() { return EDITOR_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_ELEMENT_ID", function() { return EDITOR_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORDLIFT_STORE", function() { return WORDLIFT_STORE; });
/**
 * This file defines constants used across different files and components.
 *
 * @author David Riccitelli <david@wordlift.io>
 * @since 3.23.0
 */

/**
 * WordPress' action hook to signal that a selection has changed.
 *
 * @since 3.23.0
 * @type {string}
 */
const SELECTION_CHANGED = "wordlift.selectionChanged";
/**
 * WordPress' action hook to signal that an annotation has changed. The action
 * provides the annotation id as `{ annotationId }`. The annotation id usually
 * matches the element id that caused the action to be fired.
 *
 * @since 3.23.0
 * @type {string}
 */

const ANNOTATION_CHANGED = "wordlift.annotationChanged";
/**
 * The plugin namespace.
 *
 * @type {string}
 */

const PLUGIN_NAMESPACE = "wordlift";
/**
 * Define the G'berg editor store name.
 *
 * @since 3.23.0
 * @type {string}
 */

const EDITOR_STORE = "core/editor";
/**
 * Define the editor element id.
 *
 * @since 3.23.0
 * @type {string}
 */

const EDITOR_ELEMENT_ID = "editor";
/**
 * Define the WordLift Store name used for {@link select} and {@link dispatch}
 * functions.
 *
 * @type {string}
 */

const WORDLIFT_STORE = "wordlift/editor";

/***/ }),

/***/ "backbone":
/*!***************************!*\
  !*** external "Backbone" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Backbone;

/***/ })

/******/ });
//# sourceMappingURL=edit.full.js.map
>>>>>>> 565192e80e2a8462c14291e70e6d4d42180787e7
