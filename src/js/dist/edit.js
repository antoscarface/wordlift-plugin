!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=260)}([function(e,t){e.exports=window.React},function(e,t,n){"use strict";n.d(t,"a",(function(){return F})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return z})),n.d(t,"d",(function(){return _})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return L})),n.d(t,"g",(function(){return H})),n.d(t,"h",(function(){return B})),n.d(t,"i",(function(){return Y})),n.d(t,"j",(function(){return ee})),n.d(t,"k",(function(){return te})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return re})),n.d(t,"n",(function(){return M})),n.d(t,"o",(function(){return I})),n.d(t,"p",(function(){return R})),n.d(t,"q",(function(){return U})),n.d(t,"r",(function(){return D})),n.d(t,"s",(function(){return oe})),n.d(t,"t",(function(){return X})),n.d(t,"u",(function(){return J})),n.d(t,"v",(function(){return N})),n.d(t,"w",(function(){return ne})),n.d(t,"x",(function(){return q})),n.d(t,"y",(function(){return l})),n.d(t,"z",(function(){return V})),n.d(t,"A",(function(){return T})),n.d(t,"B",(function(){return K})),n.d(t,"C",(function(){return W})),n.d(t,"D",(function(){return $})),n.d(t,"E",(function(){return m})),n.d(t,"F",(function(){return C})),n.d(t,"G",(function(){return u})),n.d(t,"H",(function(){return S})),n.d(t,"I",(function(){return w})),n.d(t,"J",(function(){return P})),n.d(t,"K",(function(){return d})),n.d(t,"L",(function(){return f})),n.d(t,"M",(function(){return b})),n.d(t,"N",(function(){return h})),n.d(t,"O",(function(){return x})),n.d(t,"P",(function(){return s})),n.d(t,"Q",(function(){return p})),n.d(t,"R",(function(){return j})),n.d(t,"S",(function(){return E})),n.d(t,"T",(function(){return O}));var r=n(4),o=n(9),i=n(3),a=n(31),u=function(e){return function(){return e}}(!0),s=function(){};var c=function(e){return e};"function"==typeof Symbol&&Symbol.asyncIterator&&Symbol.asyncIterator;function l(e,t,n){if(!t(e))throw new Error(n)}var f=function(e,t){Object(o.a)(e,t),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach((function(n){e[n]=t[n]}))},p=function(e,t){var n;return(n=[]).concat.apply(n,t.map(e))};function h(e,t){var n=e.indexOf(t);n>=0&&e.splice(n,1)}function d(e){var t=!1;return function(){t||(t=!0,e())}}var v=function(e){throw e},y=function(e){return{value:e,done:!0}};function b(e,t,n){void 0===t&&(t=v),void 0===n&&(n="iterator");var r={meta:{name:n},next:e,throw:t,return:y,isSagaIterator:!0};return"undefined"!=typeof Symbol&&(r[Symbol.iterator]=function(){return r}),r}function g(e,t){var n=t.sagaStack;console.error(e),console.error(n)}var m=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")},w=function(e){return Array.apply(null,new Array(e))},_=function(e){return function(t){return e(Object.defineProperty(t,r.f,{value:!0}))}},O=function(e){return e===r.k},E=function(e){return e===r.j},x=function(e){return O(e)||E(e)};function S(e,t){var n=Object.keys(e),r=n.length;var o,a=0,u=Object(i.a)(e)?w(r):{},c={};return n.forEach((function(e){var n=function(n,i){o||(i||x(n)?(t.cancel(),t(n,i)):(u[e]=n,++a===r&&(o=!0,t(u))))};n.cancel=s,c[e]=n})),t.cancel=function(){o||(o=!0,n.forEach((function(e){return c[e].cancel()})))},c}function C(e){return{name:e.name||"anonymous",location:j(e)}}function j(e){return e[r.g]}var k={isEmpty:u,put:s,take:s};function A(e,t){void 0===e&&(e=10);var n=new Array(e),r=0,o=0,i=0,a=function(t){n[o]=t,o=(o+1)%e,r++},u=function(){if(0!=r){var t=n[i];return n[i]=null,r--,i=(i+1)%e,t}},s=function(){for(var e=[];r;)e.push(u());return e};return{isEmpty:function(){return 0==r},put:function(u){var c;if(r<e)a(u);else switch(t){case 1:throw new Error("Channel's Buffer overflow!");case 3:n[o]=u,i=o=(o+1)%e;break;case 4:c=2*e,n=s(),r=n.length,o=n.length,i=0,n.length=c,e=c,a(u)}},take:u,flush:s}}var P=function(){return k},I=function(e){return A(e,3)},T=function(e){return A(e,4)},D="TAKE",M="PUT",F="ALL",R="RACE",z="CALL",N="CPS",L="FORK",B="JOIN",q="CANCEL",U="SELECT",V="ACTION_CHANNEL",K="CANCELLED",W="FLUSH",H="GET_CONTEXT",$="SET_CONTEXT",G=function(e,t){var n;return(n={})[r.c]=!0,n.combinator=!1,n.type=e,n.payload=t,n};function Y(e,t){return void 0===e&&(e="*"),Object(i.i)(e)?(Object(i.g)(t)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),G(D,{pattern:e})):Object(i.f)(e)&&Object(i.g)(t)&&Object(i.i)(t)?G(D,{channel:e,pattern:t}):Object(i.b)(e)?(Object(i.g)(t)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),G(D,{channel:e})):void 0}function J(e,t){return Object(i.n)(t)&&(t=e,e=void 0),G(M,{channel:e,action:t})}function X(e){var t=G(R,e);return t.combinator=!0,t}function Q(e,t){var n,r=null;return Object(i.d)(e)?n=e:(Object(i.a)(e)?(r=e[0],n=e[1]):(r=e.context,n=e.fn),r&&Object(i.k)(n)&&Object(i.d)(r[n])&&(n=r[n])),{context:r,fn:n,args:t}}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return G(z,Q(e,n))}function ee(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return G(L,Q(e,n))}function te(e){return void 0===e&&(e=r.h),G(q,e)}function ne(e){void 0===e&&(e=c);for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return G(U,{selector:e,args:n})}function re(e,t){return G(V,{pattern:e,buffer:t})}var oe=Z.bind(null,a.a)},function(e,t,n){e.exports=n(45)()},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return y})),n.d(t,"g",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return v})),n.d(t,"n",(function(){return o}));var r=n(4),o=function(e){return null==e},i=function(e){return null!=e},a=function(e){return"function"==typeof e},u=function(e){return"string"==typeof e},s=Array.isArray,c=function(e){return e&&!s(e)&&"object"==typeof e},l=function(e){return e&&a(e.then)},f=function(e){return e&&a(e.next)&&a(e.throw)},p=function e(t){return t&&(u(t)||v(t)||a(t)||s(t)&&t.every(e))},h=function(e){return e&&a(e.take)&&a(e.close)},d=function(e){return a(e)&&e.hasOwnProperty("toString")},v=function(e){return Boolean(e)&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype},y=function(e){return h(e)&&e[r.e]},b=function(e){return e&&e[r.c]}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"k",(function(){return h}));var r=function(e){return"@@redux-saga/"+e},o=r("CANCEL_PROMISE"),i=r("CHANNEL_END"),a=r("IO"),u=r("MATCH"),s=r("MULTICAST"),c=r("SAGA_ACTION"),l=r("SELF_CANCELLATION"),f=r("TASK"),p=r("TASK_CANCEL"),h=r("TERMINATE"),d=r("LOCATION")},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"createGlobalStyle",(function(){return nt})),n.d(t,"css",(function(){return me})),n.d(t,"isStyledComponent",(function(){return C})),n.d(t,"keyframes",(function(){return ot})),n.d(t,"ServerStyleSheet",(function(){return $e})),n.d(t,"StyleSheetConsumer",(function(){return Ye})),n.d(t,"StyleSheetContext",(function(){return Ge})),n.d(t,"StyleSheetManager",(function(){return Je})),n.d(t,"ThemeConsumer",(function(){return We})),n.d(t,"ThemeContext",(function(){return Ke})),n.d(t,"ThemeProvider",(function(){return He})),n.d(t,"withTheme",(function(){return it})),n.d(t,"__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS",(function(){return at}));var r=n(49),o=n.n(r),i=n(62),a=n.n(i),u=n(0),s=n.n(u),c=n(63),l=n(21),f=n(50),p=n(64),h=n(65),d=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},w=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){return"object"===(void 0===e?"undefined":v(e))&&e.constructor===Object},O=Object.freeze([]),E=Object.freeze({});function x(e){return"function"==typeof e}function S(e){return e.displayName||e.name||"Component"}function C(e){return e&&"string"==typeof e.styledComponentId}var j=void 0!==e&&(e.env.REACT_APP_SC_ATTR||e.env.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,A="boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY||void 0!==e&&(e.env.REACT_APP_SC_DISABLE_SPEEDY||e.env.SC_DISABLE_SPEEDY)||!1,P={};var I=function(e){function t(n){y(this,t);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=w(this,e.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(o.length>0?" Additional arguments: "+o.join(", "):"")));return w(a)}return m(t,e),t}(Error),T=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,D=function(e){var t=""+(e||""),n=[];return t.replace(T,(function(e,t,r){return n.push({componentId:t,matchIndex:r}),e})),n.map((function(e,r){var o=e.componentId,i=e.matchIndex,a=n[r+1];return{componentId:o,cssFromDOM:a?t.slice(i,a.matchIndex):t.slice(i)}}))},M=/^\s*\/\/.*$/gm,F=new o.a({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),R=new o.a({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),z=[],N=function(e){if(-2===e){var t=z;return z=[],t}},L=a()((function(e){z.push(e)})),B=void 0,q=void 0,U=void 0,V=function(e,t,n){return t>0&&-1!==n.slice(0,t).indexOf(q)&&n.slice(t-q.length,t)!==q?"."+B:e};R.use([function(e,t,n){2===e&&n.length&&n[0].lastIndexOf(q)>0&&(n[0]=n[0].replace(U,V))},L,N]),F.use([L,N]);var K=function(e){return F("",e)};function W(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",o=e.join("").replace(M,""),i=t&&n?n+" "+t+" { "+o+" }":o;return B=r,q=t,U=new RegExp("\\"+q+"\\b","g"),R(n||!t?"":t,i)}var H=function(){return n.nc},$=function(e,t,n){n&&((e[t]||(e[t]=Object.create(null)))[n]=!0)},G=function(e,t){e[t]=Object.create(null)},Y=function(e){return function(t,n){return void 0!==e[t]&&e[t][n]}},J=function(e){var t="";for(var n in e)t+=Object.keys(e[n]).join(" ")+" ";return t.trim()},X=function(e){if(e.sheet)return e.sheet;for(var t=e.ownerDocument.styleSheets.length,n=0;n<t;n+=1){var r=e.ownerDocument.styleSheets[n];if(r.ownerNode===e)return r}throw new I(10)},Q=function(e,t,n){if(!t)return!1;var r=e.cssRules.length;try{e.insertRule(t,n<=r?n:r)}catch(e){return!1}return!0},Z=function(e){return"\n/* sc-component-id: "+e+" */\n"},ee=function(e,t){for(var n=0,r=0;r<=t;r+=1)n+=e[r];return n},te=function(e,t){return function(n){var r=H();return"<style "+[r&&'nonce="'+r+'"',j+'="'+J(t)+'"','data-styled-version="4.4.1"',n].filter(Boolean).join(" ")+">"+e()+"</style>"}},ne=function(e,t){return function(){var n,r=((n={})[j]=J(t),n["data-styled-version"]="4.4.1",n),o=H();return o&&(r.nonce=o),s.a.createElement("style",g({},r,{dangerouslySetInnerHTML:{__html:e()}}))}},re=function(e){return function(){return Object.keys(e)}},oe=function(e,t){return e.createTextNode(Z(t))},ie=function e(t,n){var r=void 0===t?Object.create(null):t,o=void 0===n?Object.create(null):n,i=function(e){var t=o[e];return void 0!==t?t:o[e]=[""]},a=function(){var e="";for(var t in o){var n=o[t][0];n&&(e+=Z(t)+n)}return e};return{clone:function(){var t=function(e){var t=Object.create(null);for(var n in e)t[n]=g({},e[n]);return t}(r),n=Object.create(null);for(var i in o)n[i]=[o[i][0]];return e(t,n)},css:a,getIds:re(o),hasNameForId:Y(r),insertMarker:i,insertRules:function(e,t,n){i(e)[0]+=t.join(" "),$(r,e,n)},removeRules:function(e){var t=o[e];void 0!==t&&(t[0]="",G(r,e))},sealed:!1,styleTag:null,toElement:ne(a,r),toHTML:te(a,r)}},ae=function(e,t,n,r,o){if(k&&!n){var i=function(e,t,n){var r=document;e?r=e.ownerDocument:t&&(r=t.ownerDocument);var o=r.createElement("style");o.setAttribute(j,""),o.setAttribute("data-styled-version","4.4.1");var i=H();if(i&&o.setAttribute("nonce",i),o.appendChild(r.createTextNode("")),e&&!t)e.appendChild(o);else{if(!t||!e||!t.parentNode)throw new I(6);t.parentNode.insertBefore(o,n?t:t.nextSibling)}return o}(e,t,r);return A?function(e,t){var n=Object.create(null),r=Object.create(null),o=void 0!==t,i=!1,a=function(t){var o=r[t];return void 0!==o?o:(r[t]=oe(e.ownerDocument,t),e.appendChild(r[t]),n[t]=Object.create(null),r[t])},u=function(){var e="";for(var t in r)e+=r[t].data;return e};return{clone:function(){throw new I(5)},css:u,getIds:re(r),hasNameForId:Y(n),insertMarker:a,insertRules:function(e,r,u){for(var s=a(e),c=[],l=r.length,f=0;f<l;f+=1){var p=r[f],h=o;if(h&&-1!==p.indexOf("@import"))c.push(p);else{h=!1;var d=f===l-1?"":" ";s.appendData(""+p+d)}}$(n,e,u),o&&c.length>0&&(i=!0,t().insertRules(e+"-import",c))},removeRules:function(a){var u=r[a];if(void 0!==u){var s=oe(e.ownerDocument,a);e.replaceChild(s,u),r[a]=s,G(n,a),o&&i&&t().removeRules(a+"-import")}},sealed:!1,styleTag:e,toElement:ne(u,n),toHTML:te(u,n)}}(i,o):function(e,t){var n=Object.create(null),r=Object.create(null),o=[],i=void 0!==t,a=!1,u=function(e){var t=r[e];return void 0!==t?t:(r[e]=o.length,o.push(0),G(n,e),r[e])},s=function(){var t=X(e).cssRules,n="";for(var i in r){n+=Z(i);for(var a=r[i],u=ee(o,a),s=u-o[a];s<u;s+=1){var c=t[s];void 0!==c&&(n+=c.cssText)}}return n};return{clone:function(){throw new I(5)},css:s,getIds:re(r),hasNameForId:Y(n),insertMarker:u,insertRules:function(r,s,c){for(var l=u(r),f=X(e),p=ee(o,l),h=0,d=[],v=s.length,y=0;y<v;y+=1){var b=s[y],g=i;g&&-1!==b.indexOf("@import")?d.push(b):Q(f,b,p+h)&&(g=!1,h+=1)}i&&d.length>0&&(a=!0,t().insertRules(r+"-import",d)),o[l]+=h,$(n,r,c)},removeRules:function(u){var s=r[u];if(void 0!==s&&!1!==e.isConnected){var c=o[s];!function(e,t,n){for(var r=t-n,o=t;o>r;o-=1)e.deleteRule(o)}(X(e),ee(o,s)-1,c),o[s]=0,G(n,u),i&&a&&t().removeRules(u+"-import")}},sealed:!1,styleTag:e,toElement:ne(s,n),toHTML:te(s,n)}}(i,o)}return ie()},ue=/\s+/,se=void 0;se=k?A?40:1e3:-1;var ce=0,le=void 0,fe=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k?document.head:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];y(this,e),this.getImportRuleTag=function(){var e=t.importRuleTag;if(void 0!==e)return e;var n=t.tags[0];return t.importRuleTag=ae(t.target,n?n.styleTag:null,t.forceServer,!0)},ce+=1,this.id=ce,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return e.prototype.rehydrate=function(){if(!k||this.forceServer)return this;var e=[],t=[],n=!1,r=document.querySelectorAll("style["+j+'][data-styled-version="4.4.1"]'),o=r.length;if(!o)return this;for(var i=0;i<o;i+=1){var a=r[i];n||(n=!!a.getAttribute("data-styled-streamed"));for(var u,s=(a.getAttribute(j)||"").trim().split(ue),c=s.length,l=0;l<c;l+=1)u=s[l],this.rehydratedNames[u]=!0;t.push.apply(t,D(a.textContent)),e.push(a)}var f=t.length;if(!f)return this;var p=this.makeTag(null);!function(e,t,n){for(var r=0,o=n.length;r<o;r+=1){var i=n[r],a=i.componentId,u=i.cssFromDOM,s=K(u);e.insertRules(a,s)}for(var c=0,l=t.length;c<l;c+=1){var f=t[c];f.parentNode&&f.parentNode.removeChild(f)}}(p,e,t),this.capacity=Math.max(1,se-f),this.tags.push(p);for(var h=0;h<f;h+=1)this.tagMap[t[h].componentId]=p;return this},e.reset=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];le=new e(void 0,t).rehydrate()},e.prototype.clone=function(){var t=new e(this.target,this.forceServer);return this.clones.push(t),t.tags=this.tags.map((function(e){for(var n=e.getIds(),r=e.clone(),o=0;o<n.length;o+=1)t.tagMap[n[o]]=r;return r})),t.rehydratedNames=g({},this.rehydratedNames),t.deferred=g({},this.deferred),t},e.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach((function(e){e.sealed=!0}))},e.prototype.makeTag=function(e){var t=e?e.styleTag:null;return ae(this.target,t,this.forceServer,!1,this.getImportRuleTag)},e.prototype.getTagForId=function(e){var t=this.tagMap[e];if(void 0!==t&&!t.sealed)return t;var n=this.tags[this.tags.length-1];return this.capacity-=1,0===this.capacity&&(this.capacity=se,n=this.makeTag(n),this.tags.push(n)),this.tagMap[e]=n},e.prototype.hasId=function(e){return void 0!==this.tagMap[e]},e.prototype.hasNameForId=function(e,t){if(void 0===this.ignoreRehydratedNames[e]&&this.rehydratedNames[t])return!0;var n=this.tagMap[e];return void 0!==n&&n.hasNameForId(e,t)},e.prototype.deferredInject=function(e,t){if(void 0===this.tagMap[e]){for(var n=this.clones,r=0;r<n.length;r+=1)n[r].deferredInject(e,t);this.getTagForId(e).insertMarker(e),this.deferred[e]=t}},e.prototype.inject=function(e,t,n){for(var r=this.clones,o=0;o<r.length;o+=1)r[o].inject(e,t,n);var i=this.getTagForId(e);if(void 0!==this.deferred[e]){var a=this.deferred[e].concat(t);i.insertRules(e,a,n),this.deferred[e]=void 0}else i.insertRules(e,t,n)},e.prototype.remove=function(e){var t=this.tagMap[e];if(void 0!==t){for(var n=this.clones,r=0;r<n.length;r+=1)n[r].remove(e);t.removeRules(e),this.ignoreRehydratedNames[e]=!0,this.deferred[e]=void 0}},e.prototype.toHTML=function(){return this.tags.map((function(e){return e.toHTML()})).join("")},e.prototype.toReactElements=function(){var e=this.id;return this.tags.map((function(t,n){var r="sc-"+e+"-"+n;return Object(u.cloneElement)(t.toElement(),{key:r})}))},b(e,null,[{key:"master",get:function(){return le||(le=(new e).rehydrate())}},{key:"instance",get:function(){return e.master}}]),e}(),pe=function(){function e(t,n){var r=this;y(this,e),this.inject=function(e){e.hasNameForId(r.id,r.name)||e.inject(r.id,r.rules,r.name)},this.toString=function(){throw new I(12,String(r.name))},this.name=t,this.rules=n,this.id="sc-keyframes-"+t}return e.prototype.getName=function(){return this.name},e}(),he=/([A-Z])/g,de=/^ms-/;function ve(e){return e.replace(he,"-$1").toLowerCase().replace(de,"-ms-")}var ye=function(e){return null==e||!1===e||""===e},be=function e(t,n){var r=[];return Object.keys(t).forEach((function(n){if(!ye(t[n])){if(_(t[n]))return r.push.apply(r,e(t[n],n)),r;if(x(t[n]))return r.push(ve(n)+":",t[n],";"),r;r.push(ve(n)+": "+(o=n,(null==(i=t[n])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||o in c.a?String(i).trim():i+"px")+";"))}var o,i;return r})),n?[n+" {"].concat(r,["}"]):r};function ge(e,t,n){if(Array.isArray(e)){for(var r,o=[],i=0,a=e.length;i<a;i+=1)null!==(r=ge(e[i],t,n))&&(Array.isArray(r)?o.push.apply(o,r):o.push(r));return o}return ye(e)?null:C(e)?"."+e.styledComponentId:x(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:ge(e(t),t,n):e instanceof pe?n?(e.inject(n),e.getName()):e:_(e)?be(e):e.toString();var u}function me(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return x(e)||_(e)?ge(d(O,[e].concat(n))):ge(d(e,n))}function we(e){for(var t,n=0|e.length,r=0|n,o=0;n>=4;)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+((1540483477*(t>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(t=1540483477*(65535&(t^=t>>>24))+((1540483477*(t>>>16)&65535)<<16)),n-=4,++o;switch(n){case 3:r^=(255&e.charCodeAt(o+2))<<16;case 2:r^=(255&e.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return((r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16))^r>>>15)>>>0}var _e=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oe(e){var t="",n=void 0;for(n=e;n>52;n=Math.floor(n/52))t=_e(n%52)+t;return _e(n%52)+t}function Ee(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(Array.isArray(r)&&!Ee(r,t))return!1;if(x(r)&&!C(r))return!1}return!t.some((function(e){return x(e)||function(e){for(var t in e)if(x(e[t]))return!0;return!1}(e)}))}var xe,Se=function(e){return Oe(we(e))},Ce=function(){function e(t,n,r){y(this,e),this.rules=t,this.isStatic=Ee(t,n),this.componentId=r,fe.master.hasId(r)||fe.master.deferredInject(r,[])}return e.prototype.generateAndInjectStyles=function(e,t){var n=this.isStatic,r=this.componentId,o=this.lastClassName;if(k&&n&&"string"==typeof o&&t.hasNameForId(r,o))return o;var i=ge(this.rules,e,t),a=Se(this.componentId+i.join(""));return t.hasNameForId(r,a)||t.inject(this.componentId,W(i,"."+a,void 0,r),a),this.lastClassName=a,a},e.generateName=function(e){return Se(e)},e}(),je=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E,r=!!n&&e.theme===n.theme,o=e.theme&&!r?e.theme:t||n.theme;return o},ke=/[[\].#*$><+~=|^:(),"'`-]+/g,Ae=/(^-|-$)/g;function Pe(e){return e.replace(ke,"-").replace(Ae,"")}function Ie(e){return"string"==typeof e&&!0}var Te={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},De={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Me=((xe={})[l.ForwardRef]={$$typeof:!0,render:!0},xe),Fe=Object.defineProperty,Re=Object.getOwnPropertyNames,ze=Object.getOwnPropertySymbols,Ne=void 0===ze?function(){return[]}:ze,Le=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,qe=Object.prototype,Ue=Array.prototype;function Ve(e,t,n){if("string"!=typeof t){var r=Be(t);r&&r!==qe&&Ve(e,r,n);for(var o=Ue.concat(Re(t),Ne(t)),i=Me[e.$$typeof]||Te,a=Me[t.$$typeof]||Te,u=o.length,s=void 0,c=void 0;u--;)if(c=o[u],!(De[c]||n&&n[c]||a&&a[c]||i&&i[c])&&(s=Le(t,c)))try{Fe(e,c,s)}catch(e){}return e}return e}var Ke=Object(u.createContext)(),We=Ke.Consumer,He=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n));return r.getContext=Object(f.a)(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return m(t,e),t.prototype.render=function(){return this.props.children?s.a.createElement(Ke.Consumer,null,this.renderInner):null},t.prototype.renderInner=function(e){var t=this.getContext(this.props.theme,e);return s.a.createElement(Ke.Provider,{value:t},this.props.children)},t.prototype.getTheme=function(e,t){if(x(e))return e(t);if(null===e||Array.isArray(e)||"object"!==(void 0===e?"undefined":v(e)))throw new I(8);return g({},t,e)},t.prototype.getContext=function(e,t){return this.getTheme(e,t)},t}(u.Component),$e=function(){function e(){y(this,e),this.masterSheet=fe.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return e.prototype.seal=function(){if(!this.sealed){var e=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(e,1),this.sealed=!0}},e.prototype.collectStyles=function(e){if(this.sealed)throw new I(2);return s.a.createElement(Je,{sheet:this.instance},e)},e.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},e.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},e.prototype.interleaveWithNodeStream=function(e){throw new I(3)},e}(),Ge=Object(u.createContext)(),Ye=Ge.Consumer,Je=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n));return r.getContext=Object(f.a)(r.getContext),r}return m(t,e),t.prototype.getContext=function(e,t){if(e)return e;if(t)return new fe(t);throw new I(4)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.sheet,r=e.target;return s.a.createElement(Ge.Provider,{value:this.getContext(n,r)},t)},t}(u.Component),Xe={};var Qe=function(e){function t(){y(this,t);var n=w(this,e.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return m(t,e),t.prototype.render=function(){return s.a.createElement(Ye,null,this.renderOuter)},t.prototype.renderOuter=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.master;return this.styleSheet=e,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():s.a.createElement(We,null,this.renderInner)},t.prototype.renderInner=function(e){var t=this.props.forwardedComponent,n=t.componentStyle,r=t.defaultProps,o=(t.displayName,t.foldedComponentIds),i=t.styledComponentId,a=t.target,s=void 0;s=n.isStatic?this.generateAndInjectStyles(E,this.props):this.generateAndInjectStyles(je(this.props,e,r)||E,this.props);var c=this.props.as||this.attrs.as||a,l=Ie(c),f={},h=g({},this.props,this.attrs),d=void 0;for(d in h)"forwardedComponent"!==d&&"as"!==d&&("forwardedRef"===d?f.ref=h[d]:"forwardedAs"===d?f.as=h[d]:l&&!Object(p.a)(d)||(f[d]=h[d]));return this.props.style&&this.attrs.style&&(f.style=g({},this.attrs.style,this.props.style)),f.className=Array.prototype.concat(o,i,s!==i?s:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),Object(u.createElement)(c,f)},t.prototype.buildExecutionContext=function(e,t,n){var r=this,o=g({},t,{theme:e});return n.length?(this.attrs={},n.forEach((function(e){var t,n=e,i=!1,a=void 0,u=void 0;for(u in x(n)&&(n=n(o),i=!0),n)a=n[u],i||!x(a)||(t=a)&&t.prototype&&t.prototype.isReactComponent||C(a)||(a=a(o)),r.attrs[u]=a,o[u]=a})),o):o},t.prototype.generateAndInjectStyles=function(e,t){var n=t.forwardedComponent,r=n.attrs,o=n.componentStyle;n.warnTooManyClasses;return o.isStatic&&!r.length?o.generateAndInjectStyles(E,this.styleSheet):o.generateAndInjectStyles(this.buildExecutionContext(e,t,r),this.styleSheet)},t}(u.Component);function Ze(e,t,n){var r=C(e),o=!Ie(e),i=t.displayName,a=void 0===i?function(e){return Ie(e)?"styled."+e:"Styled("+S(e)+")"}(e):i,u=t.componentId,c=void 0===u?function(e,t,n){var r="string"!=typeof t?"sc":Pe(t),o=(Xe[r]||0)+1;Xe[r]=o;var i=r+"-"+e.generateName(r+o);return n?n+"-"+i:i}(Ce,t.displayName,t.parentComponentId):u,l=t.ParentComponent,f=void 0===l?Qe:l,p=t.attrs,d=void 0===p?O:p,v=t.displayName&&t.componentId?Pe(t.displayName)+"-"+t.componentId:t.componentId||c,y=r&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,b=new Ce(r?e.componentStyle.rules.concat(n):n,y,v),m=void 0,w=function(e,t){return s.a.createElement(f,g({},e,{forwardedComponent:m,forwardedRef:t}))};return w.displayName=a,(m=s.a.forwardRef(w)).displayName=a,m.attrs=y,m.componentStyle=b,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):O,m.styledComponentId=v,m.target=r?e.target:e,m.withComponent=function(e){var r=t.componentId,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["componentId"]),i=r&&r+"-"+(Ie(e)?e:Pe(S(e)));return Ze(e,g({},o,{attrs:y,componentId:i,ParentComponent:f}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?Object(h.a)(e.defaultProps,t):t}}),m.toString=function(){return"."+m.styledComponentId},o&&Ve(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var et=function(e){return function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;if(!Object(l.isValidElementType)(n))throw new I(1,String(n));var o=function(){return t(n,r,me.apply(void 0,arguments))};return o.withConfig=function(o){return e(t,n,g({},r,o))},o.attrs=function(o){return e(t,n,g({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o}(Ze,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){et[e]=et(e)}));var tt=function(){function e(t,n){y(this,e),this.rules=t,this.componentId=n,this.isStatic=Ee(t,O),fe.master.hasId(n)||fe.master.deferredInject(n,[])}return e.prototype.createStyles=function(e,t){var n=W(ge(this.rules,e,t),"");t.inject(this.componentId,n)},e.prototype.removeStyles=function(e){var t=this.componentId;e.hasId(t)&&e.remove(t)},e.prototype.renderStyles=function(e,t){this.removeStyles(t),this.createStyles(e,t)},e}();function nt(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=me.apply(void 0,[e].concat(n)),i="sc-global-"+we(JSON.stringify(o)),a=new tt(o,i),u=function(e){function t(n){y(this,t);var r=w(this,e.call(this,n)),o=r.constructor,i=o.globalStyle,a=o.styledComponentId;return k&&(window.scCGSHMRCache[a]=(window.scCGSHMRCache[a]||0)+1),r.state={globalStyle:i,styledComponentId:a},r}return m(t,e),t.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),0===window.scCGSHMRCache[this.state.styledComponentId]&&this.state.globalStyle.removeStyles(this.styleSheet)},t.prototype.render=function(){var e=this;return s.a.createElement(Ye,null,(function(t){e.styleSheet=t||fe.master;var n=e.state.globalStyle;return n.isStatic?(n.renderStyles(P,e.styleSheet),null):s.a.createElement(We,null,(function(t){var r=e.constructor.defaultProps,o=g({},e.props);return void 0!==t&&(o.theme=je(e.props,t,r)),n.renderStyles(o,e.styleSheet),null}))}))},t}(s.a.Component);return u.globalStyle=a,u.styledComponentId=i,u}k&&(window.scCGSHMRCache={});var rt=function(e){return e.replace(/\s|\\n/g,"")};function ot(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=me.apply(void 0,[e].concat(n)),i=Oe(we(rt(JSON.stringify(o))));return new pe(i,W(o,i,"@keyframes"))}var it=function(e){var t=s.a.forwardRef((function(t,n){return s.a.createElement(We,null,(function(r){var o=e.defaultProps,i=je(t,r,o);return s.a.createElement(e,g({},t,{theme:i,ref:n}))}))}));return Ve(t,e),t.displayName="WithTheme("+S(e)+")",t},at={StyleSheet:fe};t.default=et}.call(this,n(52))},function(e,t,n){"use strict";n.d(t,"a",(function(){return o.l})),n.d(t,"b",(function(){return o.s})),n.d(t,"c",(function(){return o.j})),n.d(t,"d",(function(){return o.u})),n.d(t,"e",(function(){return o.t})),n.d(t,"f",(function(){return o.w})),n.d(t,"g",(function(){return o.i})),n.d(t,"h",(function(){return f})),n.d(t,"i",(function(){return p}));n(4),n(9);var r=n(3),o=n(1),i=(n(31),function(e){return{done:!0,value:e}}),a={};function u(e){return Object(r.b)(e)?"channel":Object(r.l)(e)?String(e):Object(r.d)(e)?e.name:String(e)}function s(e,t,n){var r,u,s,c=t;function l(t,n){if(c===a)return i(t);if(n&&!u)throw c=a,n;r&&r(t);var o=n?e[u](n):e[c]();return c=o.nextState,s=o.effect,r=o.stateUpdater,u=o.errorState,c===a?i(t):s}return Object(o.M)(l,(function(e){return l(null,e)}),n)}function c(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a,c={done:!1,value:Object(o.i)(e)},l=function(e){return{done:!1,value:o.j.apply(void 0,[t].concat(r,[e]))}},f=function(e){return a=e};return s({q1:function(){return{nextState:"q2",effect:c,stateUpdater:f}},q2:function(){return{nextState:"q1",effect:l(a)}}},"q1","takeEvery("+u(e)+", "+t.name+")")}function l(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a,c,l={done:!1,value:Object(o.i)(e)},f=function(e){return{done:!1,value:o.j.apply(void 0,[t].concat(r,[e]))}},p=function(e){return{done:!1,value:Object(o.k)(e)}},h=function(e){return a=e},d=function(e){return c=e};return s({q1:function(){return{nextState:"q2",effect:l,stateUpdater:d}},q2:function(){return a?{nextState:"q3",effect:p(a)}:{nextState:"q1",effect:f(c),stateUpdater:h}},q3:function(){return{nextState:"q1",effect:f(c),stateUpdater:h}}},"q1","takeLatest("+u(e)+", "+t.name+")")}function f(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return o.j.apply(void 0,[c,e,t].concat(r))}function p(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return o.j.apply(void 0,[l,e,t].concat(r))}},function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return te}));var i=n(0),a=n.n(i),u=n(2),s=n.n(u),c=s.a.shape({trySubscribe:s.a.func.isRequired,tryUnsubscribe:s.a.func.isRequired,notifyNestedSubs:s.a.func.isRequired,isSubscribed:s.a.func.isRequired}),l=s.a.shape({subscribe:s.a.func.isRequired,dispatch:s.a.func.isRequired,getState:s.a.func.isRequired});a.a.forwardRef;var f=function(e){var t;void 0===e&&(e="store");var n=e+"Subscription",r=function(t){o(a,t);var r=a.prototype;function a(n,r){var o;return(o=t.call(this,n,r)||this)[e]=n.store,o}return r.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},r.render=function(){return i.Children.only(this.props.children)},a}(i.Component);return r.propTypes={store:l.isRequired,children:s.a.element.isRequired},r.childContextTypes=((t={})[e]=l.isRequired,t[n]=c,t),r}();function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=n(9),d=n(15),v=n(41),y=n.n(v),b=n(16),g=n.n(b),m=n(21),w={notify:function(){}};var _=function(){function e(e,t,n){this.store=e,this.parentSub=t,this.onStateChange=n,this.unsubscribe=null,this.listeners=w}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],t=[],{clear:function(){t=null,e=null},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0;return t===e&&(t=e.slice()),t.push(n),function(){r&&null!==e&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=w)},e}(),O=void 0!==a.a.forwardRef,E=0,x={};function S(){}function C(e,t){var n,r;void 0===t&&(t={});var a=t,u=a.getDisplayName,s=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,f=a.methodName,v=void 0===f?"connectAdvanced":f,b=a.renderCountProp,w=void 0===b?void 0:b,C=a.shouldHandleStateChanges,j=void 0===C||C,k=a.storeKey,A=void 0===k?"store":k,P=a.withRef,I=void 0!==P&&P,T=Object(d.a)(a,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),D=A+"Subscription",M=E++,F=((n={})[A]=l,n[D]=c,n),R=((r={})[D]=c,r);return function(t){g()(Object(m.isValidElementType)(t),"You must pass a component to the function returned by "+v+". Instead received "+JSON.stringify(t));var n=t.displayName||t.name||"Component",r=s(n),a=Object(h.a)({},T,{getDisplayName:s,methodName:v,renderCountProp:w,shouldHandleStateChanges:j,storeKey:A,withRef:I,displayName:r,wrappedComponentName:n,WrappedComponent:t}),u=function(n){function u(e,t){var o;return(o=n.call(this,e,t)||this).version=M,o.state={},o.renderCount=0,o.store=e[A]||t[A],o.propsMode=Boolean(e[A]),o.setWrappedInstance=o.setWrappedInstance.bind(p(p(o))),g()(o.store,'Could not find "'+A+'" in either the context or props of "'+r+'". Either wrap the root component in a <Provider>, or explicitly pass "'+A+'" as a prop to "'+r+'".'),o.initSelector(),o.initSubscription(),o}o(u,n);var s=u.prototype;return s.getChildContext=function(){var e,t=this.propsMode?null:this.subscription;return(e={})[D]=t||this.context[D],e},s.componentDidMount=function(){j&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},s.componentWillReceiveProps=function(e){this.selector.run(e)},s.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},s.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=S,this.store=null,this.selector.run=S,this.selector.shouldComponentUpdate=!1},s.getWrappedInstance=function(){return g()(I,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+v+"() call."),this.wrappedInstance},s.setWrappedInstance=function(e){this.wrappedInstance=e},s.initSelector=function(){var t=e(this.store.dispatch,a);this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}};return n}(t,this.store),this.selector.run(this.props)},s.initSubscription=function(){if(j){var e=(this.propsMode?this.props:this.context)[D];this.subscription=new _(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},s.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(x)):this.notifyNestedSubs()},s.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},s.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},s.addExtraProps=function(e){if(!(I||w||this.propsMode&&this.subscription))return e;var t=Object(h.a)({},e);return I&&(t.ref=this.setWrappedInstance),w&&(t[w]=this.renderCount++),this.propsMode&&this.subscription&&(t[D]=this.subscription),t},s.render=function(){var e=this.selector;if(e.shouldComponentUpdate=!1,e.error)throw e.error;return Object(i.createElement)(t,this.addExtraProps(e.props))},u}(i.Component);return O&&(u.prototype.UNSAFE_componentWillReceiveProps=u.prototype.componentWillReceiveProps,delete u.prototype.componentWillReceiveProps),u.WrappedComponent=t,u.displayName=r,u.childContextTypes=R,u.contextTypes=F,u.propTypes=F,y()(u,t)}}var j=Object.prototype.hasOwnProperty;function k(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function A(e,t){if(k(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!j.call(t,n[o])||!k(e[n[o]],t[n[o]]))return!1;return!0}var P=n(8);function I(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function T(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function D(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=T(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=T(o),o=r(t,n)),o},r}}var M=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:I((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?I((function(t){return Object(P.b)(e,t)})):void 0}];var F=[function(e){return"function"==typeof e?D(e):void 0},function(e){return e?void 0:I((function(){return{}}))}];function R(e,t,n){return Object(h.a)({},n,e,t)}var z=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(t,n,u){var s=e(t,n,u);return a?o&&i(s,r)||(r=s):(a=!0,r=s),r}}}(e):void 0},function(e){return e?void 0:function(){return R}}];function N(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function L(e,t,n,r,o){var i,a,u,s,c,l=o.areStatesEqual,f=o.areOwnPropsEqual,p=o.areStatePropsEqual,h=!1;function d(o,h){var d,v,y=!f(h,a),b=!l(o,i);return i=o,a=h,y&&b?(u=e(i,a),t.dependsOnOwnProps&&(s=t(r,a)),c=n(u,s,a)):y?(e.dependsOnOwnProps&&(u=e(i,a)),t.dependsOnOwnProps&&(s=t(r,a)),c=n(u,s,a)):b?(d=e(i,a),v=!p(d,u),u=d,v&&(c=n(u,s,a)),c):c}return function(o,l){return h?d(o,l):(u=e(i=o,a=l),s=t(r,a),c=n(u,s,a),h=!0,c)}}function B(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=Object(d.a)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),u=r(e,i),s=o(e,i);return(i.pure?L:N)(a,u,s,e,i)}function q(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function U(e,t){return e===t}var V,K,W,H,$,G,Y,J,X,Q,Z,ee,te=(W=(K=void 0===V?{}:V).connectHOC,H=void 0===W?C:W,$=K.mapStateToPropsFactories,G=void 0===$?F:$,Y=K.mapDispatchToPropsFactories,J=void 0===Y?M:Y,X=K.mergePropsFactories,Q=void 0===X?z:X,Z=K.selectorFactory,ee=void 0===Z?B:Z,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,u=o.areStatesEqual,s=void 0===u?U:u,c=o.areOwnPropsEqual,l=void 0===c?A:c,f=o.areStatePropsEqual,p=void 0===f?A:f,v=o.areMergedPropsEqual,y=void 0===v?A:v,b=Object(d.a)(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),g=q(e,G,"mapStateToProps"),m=q(t,J,"mapDispatchToProps"),w=q(n,Q,"mergeProps");return H(ee,Object(h.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:g,initMapDispatchToProps:m,initMergeProps:w,pure:a,areStatesEqual:s,areOwnPropsEqual:l,areStatePropsEqual:p,areMergedPropsEqual:y},b))})},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return f}));var u="function"==typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},c={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function l(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(a(1));return n(f)(e,t)}if("function"!=typeof e)throw new Error(a(2));var o=e,i=t,s=[],p=s,h=!1;function d(){p===s&&(p=s.slice())}function v(){if(h)throw new Error(a(3));return i}function y(e){if("function"!=typeof e)throw new Error(a(4));if(h)throw new Error(a(5));var t=!0;return d(),p.push(e),function(){if(t){if(h)throw new Error(a(6));t=!1,d();var n=p.indexOf(e);p.splice(n,1),s=null}}}function b(e){if(!l(e))throw new Error(a(7));if(void 0===e.type)throw new Error(a(8));if(h)throw new Error(a(9));try{h=!0,i=o(i,e)}finally{h=!1}for(var t=s=p,n=0;n<t.length;n++){(0,t[n])()}return e}function g(e){if("function"!=typeof e)throw new Error(a(10));o=e,b({type:c.REPLACE})}function m(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(a(11));function n(){e.next&&e.next(v())}return n(),{unsubscribe:t(n)}}})[u]=function(){return this},e}return b({type:c.INIT}),(r={dispatch:b,subscribe:y,getState:v,replaceReducer:g})[u]=m,r}function p(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var i,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:c.INIT}))throw new Error(a(12));if(void 0===n(void 0,{type:c.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},s=0;s<u.length;s++){var c=u[s],l=n[c],f=e[c],p=l(f,t);if(void 0===p){t&&t.type;throw new Error(a(14))}o[c]=p,r=r||p!==f}return(r=r||u.length!==Object.keys(e).length)?o:e}}function h(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return h(e,t);if("object"!=typeof e||null===e)throw new Error(a(16));var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=h(o,t))}return n}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(a(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},u=t.map((function(e){return e(o)}));return r=v.apply(void 0,u)(n.dispatch),i(i({},n),{},{dispatch:r})}}}},function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(16),o=n.n(r),i=n(27),a=n(23),u=function(e){return null===e};function s(e,t,n){void 0===t&&(t=a.a),o()(Object(i.a)(t)||u(t),"Expected payloadCreator to be a function, undefined or null");var r=u(t)||t===a.a?a.a:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e instanceof Error?e:t.apply(void 0,[e].concat(r))},s=Object(i.a)(n),c=e.toString(),l=function(){var t=r.apply(void 0,arguments),o={type:e};return t instanceof Error&&(o.error=!0),void 0!==t&&(o.payload=t),s&&(o.meta=n.apply(void 0,arguments)),o};return l.toString=function(){return c},l}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return p}));const r="ANNOTATION",o="TOGGLE_ENTITY",i="UPDATE_OCCURRENCES_FOR_ENTITY",a="TOGGLE_LINK",u="RECEIVE_ANALYSIS_RESULTS",s="SET_CURRENT_ENTITY",c="SET_ENTITY_FILTER",l="EDITOR_SELECTION_CHANGED",f="TOGGLE_LINK_SUCCESS",p="ADD_ENTITY"},function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return y}));var r=n(87),o=n(91);const{loadItemsRequest:i,loadItemsSuccess:a,loadItemsError:u,createEntityRequest:s,createEntitySuccess:c,addEntityRequest:l,addEntitySuccess:f,close:p,open:h,setValue:d,createEntityForm:v}=Object(r.a)("LOAD_ITEMS_REQUEST","LOAD_ITEMS_SUCCESS","LOAD_ITEMS_ERROR","CREATE_ENTITY_REQUEST","CREATE_ENTITY_SUCCESS","ADD_ENTITY_REQUEST","ADD_ENTITY_SUCCESS","CLOSE","OPEN","SET_VALUE","CREATE_ENTITY_FORM"),y=Object(o.a)({[a]:(e,t)=>({...e,items:t.payload}),[p]:e=>({...e,open:!1}),[h]:e=>({...e,open:e.enabled}),[d]:(e,t)=>({...e,value:t.payload,enabled:void 0!==t.payload&&""!==t.payload})},{open:!1,items:[],value:"",enabled:!1})},function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,a,u],l=0;(s=new Error(t.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},,,,function(e,t){e.exports=window.ReactDOM},function(e,t,n){"use strict";e.exports=n(47)},,function(e,t,n){"use strict";t.a=function(e){return e}},,,function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return u}));const r="wordlift.selectionChanged",o="wordlift.annotationChanged",i="wordlift",a="core/editor",u="wordlift/editor"},function(e,t,n){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return h}));var r=n(13),o=n(12);const i=e=>({type:r.b,annotation:e}),a=e=>({type:r.d,results:e}),u=e=>({type:r.e,entity:e}),s=e=>({type:r.f,filter:e}),c=e=>({type:r.g,entity:e}),l=e=>({type:r.h,entity:e}),f=(e,t)=>({type:r.j,entityId:e,occurrences:t}),p=e=>({type:r.c,payload:e}),h=Object(o.a)(r.i)},function(e,t,n){"use strict";var r=n(4);t.a=function(e,t){var n;void 0===t&&(t=!0);var o=new Promise((function(r){n=setTimeout(r,Math.min(2147483647,e),t)}));return o[r.a]=function(){clearTimeout(n)},o}},function(e,t){e.exports=Backbone},function(e,t){e.exports=window.wp.hooks},function(e,t,n){var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},,function(e,t,n){"use strict";n.d(t,"b",(function(){return k}));var r=n(4),o=n(9),i=n(15),a=n(3),u=n(1),s=n(8);function c(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}var l=c,f=(n(31),[]),p=0;function h(e){try{y(),e()}finally{b()}}function d(e){f.push(e),p||(y(),g())}function v(e){try{return y(),e()}finally{g()}}function y(){p++}function b(){p--}function g(){var e;for(b();!p&&void 0!==(e=f.shift());)h(e)}var m=function(e){return function(t){return e.some((function(e){return x(e)(t)}))}},w=function(e){return function(t){return e(t)}},_=function(e){return function(t){return t.type===String(e)}},O=function(e){return function(t){return t.type===e}},E=function(){return u.G};function x(e){var t="*"===e?E:Object(a.k)(e)?_:Object(a.a)(e)?m:Object(a.l)(e)?_:Object(a.d)(e)?w:Object(a.m)(e)?O:null;if(null===t)throw new Error("invalid pattern: "+e);return t(e)}var S={type:r.b},C=function(e){return e&&e.type===r.b};function j(e){void 0===e&&(e=Object(u.A)());var t=!1,n=[];return{take:function(r){t&&e.isEmpty()?r(S):e.isEmpty()?(n.push(r),r.cancel=function(){Object(u.N)(n,r)}):r(e.take())},put:function(r){if(!t){if(0===n.length)return e.put(r);n.shift()(r)}},flush:function(n){t&&e.isEmpty()?n(S):n(e.flush())},close:function(){if(!t){t=!0;var e=n;n=[];for(var r=0,o=e.length;r<o;r++){(0,e[r])(S)}}}}}function k(e,t){void 0===t&&(t=Object(u.J)());var n,r=!1,o=j(t),i=function(){r||(r=!0,Object(a.d)(n)&&n(),o.close())};return n=e((function(e){C(e)?i():o.put(e)})),n=Object(u.K)(n),r&&n(),{take:o.take,flush:o.flush,close:i}}function A(){var e,t,n,o,i,a,s=(t=!1,o=n=[],i=function(){o===n&&(o=n.slice())},a=function(){t=!0;var e=n=o;o=[],e.forEach((function(e){e(S)}))},(e={})[r.e]=!0,e.put=function(e){if(!t)if(C(e))a();else for(var i=n=o,u=0,s=i.length;u<s;u++){var c=i[u];c[r.d](e)&&(c.cancel(),c(e))}},e.take=function(e,n){void 0===n&&(n=E),t?e(S):(e[r.d]=n,i(),o.push(e),e.cancel=Object(u.K)((function(){i(),Object(u.N)(o,e)})))},e.close=a,e),c=s.put;return s.put=function(e){e[r.f]?c(e):d((function(){c(e)}))},s}function P(e,t){var n=e[r.a];Object(a.d)(n)&&(t.cancel=n),e.then(t,(function(e){t(e,!0)}))}var I,T=0,D=function(){return++T};function M(e){e.isRunning()&&e.cancel()}var F=((I={})[u.r]=function(e,t,n){var o=t.channel,i=void 0===o?e.channel:o,u=t.pattern,s=t.maybe,c=function(e){e instanceof Error?n(e,!0):!C(e)||s?n(e):n(r.k)};try{i.take(c,Object(a.g)(u)?x(u):null)}catch(e){return void n(e,!0)}n.cancel=c.cancel},I[u.n]=function(e,t,n){var r=t.channel,o=t.action,i=t.resolve;d((function(){var t;try{t=(r?r.put:e.dispatch)(o)}catch(e){return void n(e,!0)}i&&Object(a.j)(t)?P(t,n):n(t)}))},I[u.a]=function(e,t,n,r){var o=r.digestEffect,i=T,s=Object.keys(t);if(0!==s.length){var c=Object(u.H)(t,n);s.forEach((function(e){o(t[e],i,c[e],e)}))}else n(Object(a.a)(t)?[]:{})},I[u.p]=function(e,t,n,r){var o=r.digestEffect,i=T,s=Object.keys(t),c=Object(a.a)(t)?Object(u.I)(s.length):{},l={},f=!1;s.forEach((function(e){var t=function(t,r){f||(r||Object(u.O)(t)?(n.cancel(),n(t,r)):(n.cancel(),f=!0,c[e]=t,n(c)))};t.cancel=u.P,l[e]=t})),n.cancel=function(){f||(f=!0,s.forEach((function(e){return l[e].cancel()})))},s.forEach((function(e){f||o(t[e],i,l[e],e)}))},I[u.c]=function(e,t,n,r){var o=t.context,i=t.fn,s=t.args,c=r.task;try{var l=i.apply(o,s);if(Object(a.j)(l))return void P(l,n);if(Object(a.e)(l))return void V(e,l,c.context,T,Object(u.F)(i),!1,n);n(l)}catch(e){n(e,!0)}},I[u.v]=function(e,t,n){var r=t.context,o=t.fn,i=t.args;try{var u=function(e,t){Object(a.n)(e)?n(t):n(e,!0)};o.apply(r,i.concat(u)),u.cancel&&(n.cancel=u.cancel)}catch(e){n(e,!0)}},I[u.f]=function(e,t,n,r){var o=t.context,i=t.fn,s=t.args,c=t.detached,l=r.task,f=function(e){var t=e.context,n=e.fn,r=e.args;try{var o=n.apply(t,r);if(Object(a.e)(o))return o;var i=!1;return Object(u.M)((function(e){return i?{value:e,done:!0}:(i=!0,{value:o,done:!Object(a.j)(o)})}))}catch(e){return Object(u.M)((function(){throw e}))}}({context:o,fn:i,args:s}),p=function(e,t){return e.isSagaIterator?{name:e.meta.name}:Object(u.F)(t)}(f,i);v((function(){var t=V(e,f,l.context,T,p,c,void 0);c?n(t):t.isRunning()?(l.queue.addTask(t),n(t)):t.isAborted()?l.queue.abort(t.error()):n(t)}))},I[u.h]=function(e,t,n,r){var o=r.task,i=function(e,t){if(e.isRunning()){var n={task:o,cb:t};t.cancel=function(){e.isRunning()&&Object(u.N)(e.joiners,n)},e.joiners.push(n)}else e.isAborted()?t(e.error(),!0):t(e.result())};if(Object(a.a)(t)){if(0===t.length)return void n([]);var s=Object(u.H)(t,n);t.forEach((function(e,t){i(e,s[t])}))}else i(t,n)},I[u.x]=function(e,t,n,o){var i=o.task;t===r.h?M(i):Object(a.a)(t)?t.forEach(M):M(t),n()},I[u.q]=function(e,t,n){var r=t.selector,o=t.args;try{n(r.apply(void 0,[e.getState()].concat(o)))}catch(e){n(e,!0)}},I[u.z]=function(e,t,n){var r=t.pattern,o=j(t.buffer),i=x(r),a=function t(n){C(n)||e.channel.take(t,i),o.put(n)},u=o.close;o.close=function(){a.cancel(),u()},e.channel.take(a,i),n(o)},I[u.B]=function(e,t,n,r){n(r.task.isCancelled())},I[u.C]=function(e,t,n){t.flush(n)},I[u.g]=function(e,t,n,r){n(r.task.context[t])},I[u.D]=function(e,t,n,r){var o=r.task;Object(u.L)(o.context,t),n()},I);function R(e,t){return e+"?"+t}function z(e){var t=e.name,n=e.location;return n?t+"  "+R(n.fileName,n.lineNumber):t}var N=null,L=[],B=function(){N=null,L.length=0},q=function(){var e,t,n,r,o=L[0],i=L.slice(1),a=o.crashedEffect?(e=o.crashedEffect,(t=Object(u.R)(e))?t.code+"  "+R(t.fileName,t.lineNumber):""):null;return["The above error occurred in task "+z(o.meta)+(a?" \n when executing effect "+a:"")].concat(i.map((function(e){return"    created by "+z(e.meta)})),[(n=L,r=Object(u.Q)((function(e){return e.cancelledTasks}),n),r.length?["Tasks cancelled due to error:"].concat(r).join("\n"):"")]).join("\n")};function U(e,t,n,o,i,a,s){var c;void 0===s&&(s=u.P);var f,p,h=0,d=null,v=[],y=Object.create(n),b=function(e,t,n){var r,o=[],i=!1;function a(e){t(),c(),n(e,!0)}function s(t){o.push(t),t.cont=function(s,c){i||(Object(u.N)(o,t),t.cont=u.P,c?a(s):(t===e&&(r=s),o.length||(i=!0,n(r))))}}function c(){i||(i=!0,o.forEach((function(e){e.cont=u.P,e.cancel()})),o=[])}return s(e),{addTask:s,cancelAll:c,abort:a,getTasks:function(){return o}}}(t,(function(){v.push.apply(v,b.getTasks().map((function(e){return e.meta.name})))}),g);function g(t,n){if(n){if(h=2,(a={meta:i,cancelledTasks:v}).crashedEffect=N,L.push(a),m.isRoot){var o=q();B(),e.onError(t,{sagaStack:o})}p=t,d&&d.reject(t)}else t===r.j?h=1:1!==h&&(h=3),f=t,d&&d.resolve(t);var a;m.cont(t,n),m.joiners.forEach((function(e){e.cb(t,n)})),m.joiners=null}var m=((c={})[r.i]=!0,c.id=o,c.meta=i,c.isRoot=a,c.context=y,c.joiners=[],c.queue=b,c.cancel=function(){0===h&&(h=1,b.cancelAll(),g(r.j,!1))},c.cont=s,c.end=g,c.setContext=function(e){Object(u.L)(y,e)},c.toPromise=function(){return d||(d=l(),2===h?d.reject(p):0!==h&&d.resolve(f)),d.promise},c.isRunning=function(){return 0===h},c.isCancelled=function(){return 1===h||0===h&&1===t.status},c.isAborted=function(){return 2===h},c.result=function(){return f},c.error=function(){return p},c);return m}function V(e,t,n,o,i,s,c){var l=e.finalizeRunEffect((function(t,n,o){if(Object(a.j)(t))P(t,o);else if(Object(a.e)(t))V(e,t,p.context,n,i,!1,o);else if(t&&t[r.c]){(0,F[t.type])(e,t.payload,o,h)}else o(t)}));d.cancel=u.P;var f={meta:i,cancel:function(){0===f.status&&(f.status=1,d(r.j))},status:0},p=U(e,f,n,o,i,s,c),h={task:p,digestEffect:v};return c&&(c.cancel=p.cancel),d(),p;function d(e,n){try{var i;n?(i=t.throw(e),B()):Object(u.S)(e)?(f.status=1,d.cancel(),i=Object(a.d)(t.return)?t.return(r.j):{done:!0,value:r.j}):i=Object(u.T)(e)?Object(a.d)(t.return)?t.return():{done:!0}:t.next(e),i.done?(1!==f.status&&(f.status=3),f.cont(i.value)):v(i.value,o,d)}catch(e){if(1===f.status)throw e;f.status=2,f.cont(e,!0)}}function v(t,n,r,o){void 0===o&&(o="");var i,a=D();function s(n,o){i||(i=!0,r.cancel=u.P,e.sagaMonitor&&(o?e.sagaMonitor.effectRejected(a,n):e.sagaMonitor.effectResolved(a,n)),o&&function(e){N=e}(t),r(n,o))}e.sagaMonitor&&e.sagaMonitor.effectTriggered({effectId:a,parentEffectId:n,label:o,effect:t}),s.cancel=u.P,r.cancel=function(){i||(i=!0,s.cancel(),s.cancel=u.P,e.sagaMonitor&&e.sagaMonitor.effectCancelled(a))},l(t,a,s)}}function K(e,t){var n=e.channel,r=void 0===n?A():n,o=e.dispatch,i=e.getState,a=e.context,c=void 0===a?{}:a,l=e.sagaMonitor,f=e.effectMiddlewares,p=e.onError,h=void 0===p?u.b:p;for(var d=arguments.length,y=new Array(d>2?d-2:0),b=2;b<d;b++)y[b-2]=arguments[b];var g=t.apply(void 0,y);var m,w=D();if(l&&(l.rootSagaStarted=l.rootSagaStarted||u.P,l.effectTriggered=l.effectTriggered||u.P,l.effectResolved=l.effectResolved||u.P,l.effectRejected=l.effectRejected||u.P,l.effectCancelled=l.effectCancelled||u.P,l.actionDispatched=l.actionDispatched||u.P,l.rootSagaStarted({effectId:w,saga:t,args:y})),f){var _=s.d.apply(void 0,f);m=function(e){return function(t,n,r){return _((function(t){return e(t,n,r)}))(t)}}}else m=u.e;var O={channel:r,dispatch:Object(u.d)(o),getState:i,sagaMonitor:l,onError:h,finalizeRunEffect:m};return v((function(){var e=V(O,g,c,w,Object(u.F)(t),!0,void 0);return l&&l.effectResolved(w,e),e}))}var W=function(e){var t,n=void 0===e?{}:e,r=n.context,a=void 0===r?{}:r,s=n.channel,c=void 0===s?A():s,l=n.sagaMonitor,f=Object(i.a)(n,["context","channel","sagaMonitor"]);function p(e){var n=e.getState,r=e.dispatch;return t=K.bind(null,Object(o.a)({},f,{context:a,channel:c,dispatch:r,getState:n,sagaMonitor:l})),function(e){return function(t){l&&l.actionDispatched&&l.actionDispatched(t);var n=e(t);return c.put(t),n}}}return p.run=function(){return t.apply(void 0,arguments)},p.setContext=function(e){Object(u.L)(a,e)},p};t.a=W},,,function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}var o=r();o.withExtraArgument=r,t.a=o},,function(e,t,n){"use strict";var r=n(21),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function s(e){return r.isMemo(e)?a:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=a;var c=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var u=s(t),v=s(n),y=0;y<a.length;++y){var b=a[y];if(!(i[b]||r&&r[b]||v&&v[b]||u&&u[b])){var g=p(n,b);try{c(t,b,g)}catch(e){}}}}return t}},function(e,t,n){"use strict";t.a=function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r="/",o="||"},,function(e,t,n){"use strict";var r=n(46);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,h=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,_=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case a:case s:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case h:case b:case y:case c:return e;default:return t}}case i:return t}}}function E(e){return O(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=h,t.Fragment=a,t.Lazy=b,t.Memo=y,t.Portal=i,t.Profiler=s,t.StrictMode=u,t.Suspense=d,t.isAsyncMode=function(e){return E(e)||O(e)===f},t.isConcurrentMode=E,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===h},t.isFragment=function(e){return O(e)===a},t.isLazy=function(e){return O(e)===b},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===i},t.isProfiler=function(e){return O(e)===s},t.isStrictMode=function(e){return O(e)===u},t.isSuspense=function(e){return O(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===s||e===u||e===d||e===v||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===c||e.$$typeof===l||e.$$typeof===h||e.$$typeof===m||e.$$typeof===w||e.$$typeof===_||e.$$typeof===g)},t.typeOf=O},,function(e,t,n){e.exports=function e(t){"use strict";var n=/^\0+/g,r=/[\0\r\f]/g,o=/: */g,i=/zoo|gra/,a=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,s=/ +\s*(?![^(]*[)])/g,c=/ *[\0] */g,l=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,p=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,h=/\W+/g,d=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,b=/\s+(?=[{\];=:>])/g,g=/([[}=:>])\s+/g,m=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,_=/([^\(])(:+) */g,O=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,S=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,k=/([^-])(image-set\()/,A="-webkit-",P="-moz-",I="-ms-",T=59,D=125,M=123,F=40,R=41,z=10,N=13,L=32,B=45,q=42,U=44,V=58,K=47,W=1,H=1,$=0,G=1,Y=1,J=1,X=0,Q=0,Z=0,ee=[],te=[],ne=0,re=null,oe=0,ie=1,ae="",ue="",se="";function ce(e,t,o,i,a){for(var u,s,l=0,f=0,p=0,h=0,b=0,g=0,m=0,w=0,O=0,x=0,S=0,C=0,j=0,k=0,P=0,I=0,X=0,te=0,re=0,fe=o.length,be=fe-1,ge="",me="",we="",_e="",Oe="",Ee="";P<fe;){if(m=o.charCodeAt(P),P===be&&f+h+p+l!==0&&(0!==f&&(m=f===K?z:K),h=p=l=0,fe++,be++),f+h+p+l===0){if(P===be&&(I>0&&(me=me.replace(r,"")),me.trim().length>0)){switch(m){case L:case 9:case T:case N:case z:break;default:me+=o.charAt(P)}m=T}if(1===X)switch(m){case M:case D:case T:case 34:case 39:case F:case R:case U:X=0;case 9:case N:case z:case L:break;default:for(X=0,re=P,b=m,P--,m=T;re<fe;)switch(o.charCodeAt(re++)){case z:case N:case T:++P,m=b,re=fe;break;case V:I>0&&(++P,m=b);case M:re=fe}}switch(m){case M:for(b=(me=me.trim()).charCodeAt(0),S=1,re=++P;P<fe;){switch(m=o.charCodeAt(P)){case M:S++;break;case D:S--;break;case K:switch(g=o.charCodeAt(P+1)){case q:case K:P=ye(g,P,be,o)}break;case 91:m++;case F:m++;case 34:case 39:for(;P++<be&&o.charCodeAt(P)!==m;);}if(0===S)break;P++}switch(we=o.substring(re,P),0===b&&(b=(me=me.replace(n,"").trim()).charCodeAt(0)),b){case 64:switch(I>0&&(me=me.replace(r,"")),g=me.charCodeAt(1)){case 100:case 109:case 115:case B:u=t;break;default:u=ee}if(re=(we=ce(t,u,we,g,a+1)).length,Z>0&&0===re&&(re=me.length),ne>0&&(s=ve(3,we,u=le(ee,me,te),t,H,W,re,g,a,i),me=u.join(""),void 0!==s&&0===(re=(we=s.trim()).length)&&(g=0,we="")),re>0)switch(g){case 115:me=me.replace(E,de);case 100:case 109:case B:we=me+"{"+we+"}";break;case 107:we=(me=me.replace(d,"$1 $2"+(ie>0?ae:"")))+"{"+we+"}",we=1===Y||2===Y&&he("@"+we,3)?"@"+A+we+"@"+we:"@"+we;break;default:we=me+we,112===i&&(_e+=we,we="")}else we="";break;default:we=ce(t,le(t,me,te),we,i,a+1)}Oe+=we,C=0,X=0,k=0,I=0,te=0,j=0,me="",we="",m=o.charCodeAt(++P);break;case D:case T:if((re=(me=(I>0?me.replace(r,""):me).trim()).length)>1)switch(0===k&&((b=me.charCodeAt(0))===B||b>96&&b<123)&&(re=(me=me.replace(" ",":")).length),ne>0&&void 0!==(s=ve(1,me,t,e,H,W,_e.length,i,a,i))&&0===(re=(me=s.trim()).length)&&(me="\0\0"),b=me.charCodeAt(0),g=me.charCodeAt(1),b){case 0:break;case 64:if(105===g||99===g){Ee+=me+o.charAt(P);break}default:if(me.charCodeAt(re-1)===V)break;_e+=pe(me,b,g,me.charCodeAt(2))}C=0,X=0,k=0,I=0,te=0,me="",m=o.charCodeAt(++P)}}switch(m){case N:case z:if(f+h+p+l+Q===0)switch(x){case R:case 39:case 34:case 64:case 126:case 62:case q:case 43:case K:case B:case V:case U:case T:case M:case D:break;default:k>0&&(X=1)}f===K?f=0:G+C===0&&107!==i&&me.length>0&&(I=1,me+="\0"),ne*oe>0&&ve(0,me,t,e,H,W,_e.length,i,a,i),W=1,H++;break;case T:case D:if(f+h+p+l===0){W++;break}default:switch(W++,ge=o.charAt(P),m){case 9:case L:if(h+l+f===0)switch(w){case U:case V:case 9:case L:ge="";break;default:m!==L&&(ge=" ")}break;case 0:ge="\\0";break;case 12:ge="\\f";break;case 11:ge="\\v";break;case 38:h+f+l===0&&G>0&&(te=1,I=1,ge="\f"+ge);break;case 108:if(h+f+l+$===0&&k>0)switch(P-k){case 2:112===w&&o.charCodeAt(P-3)===V&&($=w);case 8:111===O&&($=O)}break;case V:h+f+l===0&&(k=P);break;case U:f+p+h+l===0&&(I=1,ge+="\r");break;case 34:case 39:0===f&&(h=h===m?0:0===h?m:h);break;case 91:h+f+p===0&&l++;break;case 93:h+f+p===0&&l--;break;case R:h+f+l===0&&p--;break;case F:if(h+f+l===0){if(0===C)switch(2*w+3*O){case 533:break;default:S=0,C=1}p++}break;case 64:f+p+h+l+k+j===0&&(j=1);break;case q:case K:if(h+l+p>0)break;switch(f){case 0:switch(2*m+3*o.charCodeAt(P+1)){case 235:f=K;break;case 220:re=P,f=q}break;case q:m===K&&w===q&&re+2!==P&&(33===o.charCodeAt(re+2)&&(_e+=o.substring(re,P+1)),ge="",f=0)}}if(0===f){if(G+h+l+j===0&&107!==i&&m!==T)switch(m){case U:case 126:case 62:case 43:case R:case F:if(0===C){switch(w){case 9:case L:case z:case N:ge+="\0";break;default:ge="\0"+ge+(m===U?"":"\0")}I=1}else switch(m){case F:k+7===P&&108===w&&(k=0),C=++S;break;case R:0==(C=--S)&&(I=1,ge+="\0")}break;case 9:case L:switch(w){case 0:case M:case D:case T:case U:case 12:case 9:case L:case z:case N:break;default:0===C&&(I=1,ge+="\0")}}me+=ge,m!==L&&9!==m&&(x=m)}}O=w,w=m,P++}if(re=_e.length,Z>0&&0===re&&0===Oe.length&&0===t[0].length==0&&(109!==i||1===t.length&&(G>0?ue:se)===t[0])&&(re=t.join(",").length+2),re>0){if(u=0===G&&107!==i?function(e){for(var t,n,o=0,i=e.length,a=Array(i);o<i;++o){for(var u=e[o].split(c),s="",l=0,f=0,p=0,h=0,d=u.length;l<d;++l)if(!(0===(f=(n=u[l]).length)&&d>1)){if(p=s.charCodeAt(s.length-1),h=n.charCodeAt(0),t="",0!==l)switch(p){case q:case 126:case 62:case 43:case L:case F:break;default:t=" "}switch(h){case 38:n=t+ue;case 126:case 62:case 43:case L:case R:case F:break;case 91:n=t+n+ue;break;case V:switch(2*n.charCodeAt(1)+3*n.charCodeAt(2)){case 530:if(J>0){n=t+n.substring(8,f-1);break}default:(l<1||u[l-1].length<1)&&(n=t+ue+n)}break;case U:t="";default:n=f>1&&n.indexOf(":")>0?t+n.replace(_,"$1"+ue+"$2"):t+n+ue}s+=n}a[o]=s.replace(r,"").trim()}return a}(t):t,ne>0&&void 0!==(s=ve(2,_e,u,e,H,W,re,i,a,i))&&0===(_e=s).length)return Ee+_e+Oe;if(_e=u.join(",")+"{"+_e+"}",Y*$!=0){switch(2!==Y||he(_e,2)||($=0),$){case 111:_e=_e.replace(y,":-moz-$1")+_e;break;case 112:_e=_e.replace(v,"::"+A+"input-$1")+_e.replace(v,"::-moz-$1")+_e.replace(v,":-ms-input-$1")+_e}$=0}}return Ee+_e+Oe}function le(e,t,n){var r=t.trim().split(l),o=r,i=r.length,a=e.length;switch(a){case 0:case 1:for(var u=0,s=0===a?"":e[0]+" ";u<i;++u)o[u]=fe(s,o[u],n,a).trim();break;default:u=0;var c=0;for(o=[];u<i;++u)for(var f=0;f<a;++f)o[c++]=fe(e[f]+" ",r[u],n,a).trim()}return o}function fe(e,t,n,r){var o=t,i=o.charCodeAt(0);switch(i<33&&(i=(o=o.trim()).charCodeAt(0)),i){case 38:switch(G+r){case 0:case 1:if(0===e.trim().length)break;default:return o.replace(f,"$1"+e.trim())}break;case V:switch(o.charCodeAt(1)){case 103:if(J>0&&G>0)return o.replace(p,"$1").replace(f,"$1"+se);break;default:return e.trim()+o.replace(f,"$1"+e.trim())}default:if(n*G>0&&o.indexOf("\f")>0)return o.replace(f,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+o}function pe(e,t,n,r){var c,l=0,f=e+";",p=2*t+3*n+4*r;if(944===p)return function(e){var t=e.length,n=e.indexOf(":",9)+1,r=e.substring(0,n).trim(),o=e.substring(n,t-1).trim();switch(e.charCodeAt(9)*ie){case 0:break;case B:if(110!==e.charCodeAt(10))break;default:var i=o.split((o="",u)),a=0;for(n=0,t=i.length;a<t;n=0,++a){for(var c=i[a],l=c.split(s);c=l[n];){var f=c.charCodeAt(0);if(1===ie&&(f>64&&f<90||f>96&&f<123||95===f||f===B&&c.charCodeAt(1)!==B))switch(isNaN(parseFloat(c))+(-1!==c.indexOf("("))){case 1:switch(c){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:c+=ae}}l[n++]=c}o+=(0===a?"":",")+l.join(" ")}}return o=r+o+";",1===Y||2===Y&&he(o,1)?A+o+o:o}(f);if(0===Y||2===Y&&!he(f,1))return f;switch(p){case 1015:return 97===f.charCodeAt(10)?A+f+f:f;case 951:return 116===f.charCodeAt(3)?A+f+f:f;case 963:return 110===f.charCodeAt(5)?A+f+f:f;case 1009:if(100!==f.charCodeAt(4))break;case 969:case 942:return A+f+f;case 978:return A+f+P+f+f;case 1019:case 983:return A+f+P+f+I+f+f;case 883:return f.charCodeAt(8)===B?A+f+f:f.indexOf("image-set(",11)>0?f.replace(k,"$1"+A+"$2")+f:f;case 932:if(f.charCodeAt(4)===B)switch(f.charCodeAt(5)){case 103:return A+"box-"+f.replace("-grow","")+A+f+I+f.replace("grow","positive")+f;case 115:return A+f+I+f.replace("shrink","negative")+f;case 98:return A+f+I+f.replace("basis","preferred-size")+f}return A+f+I+f+f;case 964:return A+f+I+"flex-"+f+f;case 1023:if(99!==f.charCodeAt(8))break;return c=f.substring(f.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),A+"box-pack"+c+A+f+I+"flex-pack"+c+f;case 1005:return i.test(f)?f.replace(o,":"+A)+f.replace(o,":"+P)+f:f;case 1e3:switch(l=(c=f.substring(13).trim()).indexOf("-")+1,c.charCodeAt(0)+c.charCodeAt(l)){case 226:c=f.replace(O,"tb");break;case 232:c=f.replace(O,"tb-rl");break;case 220:c=f.replace(O,"lr");break;default:return f}return A+f+I+c+f;case 1017:if(-1===f.indexOf("sticky",9))return f;case 975:switch(l=(f=e).length-10,p=(c=(33===f.charCodeAt(l)?f.substring(0,l):f).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|c.charCodeAt(7))){case 203:if(c.charCodeAt(8)<111)break;case 115:f=f.replace(c,A+c)+";"+f;break;case 207:case 102:f=f.replace(c,A+(p>102?"inline-":"")+"box")+";"+f.replace(c,A+c)+";"+f.replace(c,I+c+"box")+";"+f}return f+";";case 938:if(f.charCodeAt(5)===B)switch(f.charCodeAt(6)){case 105:return c=f.replace("-items",""),A+f+A+"box-"+c+I+"flex-"+c+f;case 115:return A+f+I+"flex-item-"+f.replace(S,"")+f;default:return A+f+I+"flex-line-pack"+f.replace("align-content","").replace(S,"")+f}break;case 973:case 989:if(f.charCodeAt(3)!==B||122===f.charCodeAt(4))break;case 931:case 953:if(!0===j.test(e))return 115===(c=e.substring(e.indexOf(":")+1)).charCodeAt(0)?pe(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):f.replace(c,A+c)+f.replace(c,P+c.replace("fill-",""))+f;break;case 962:if(f=A+f+(102===f.charCodeAt(5)?I+f:"")+f,n+r===211&&105===f.charCodeAt(13)&&f.indexOf("transform",10)>0)return f.substring(0,f.indexOf(";",27)+1).replace(a,"$1"+A+"$2")+f}return f}function he(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10),o=e.substring(n+1,e.length-1);return re(2!==t?r:r.replace(C,"$1"),o,t)}function de(e,t){var n=pe(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(x," or ($1)").substring(4):"("+t+")"}function ve(e,t,n,r,o,i,a,u,s,c){for(var l,f=0,p=t;f<ne;++f)switch(l=te[f].call(ge,e,p,n,r,o,i,a,u,s,c)){case void 0:case!1:case!0:case null:break;default:p=l}if(p!==t)return p}function ye(e,t,n,r){for(var o=t+1;o<n;++o)switch(r.charCodeAt(o)){case K:if(e===q&&r.charCodeAt(o-1)===q&&t+2!==o)return o+1;break;case z:if(e===K)return o+1}return o}function be(e){for(var t in e){var n=e[t];switch(t){case"keyframe":ie=0|n;break;case"global":J=0|n;break;case"cascade":G=0|n;break;case"compress":X=0|n;break;case"semicolon":Q=0|n;break;case"preserve":Z=0|n;break;case"prefix":re=null,n?"function"!=typeof n?Y=1:(Y=2,re=n):Y=0}}return be}function ge(t,n){if(void 0!==this&&this.constructor===ge)return e(t);var o=t,i=o.charCodeAt(0);i<33&&(i=(o=o.trim()).charCodeAt(0)),ie>0&&(ae=o.replace(h,91===i?"":"-")),i=1,1===G?se=o:ue=o;var a,u=[se];ne>0&&void 0!==(a=ve(-1,n,u,u,H,W,0,0,0,0))&&"string"==typeof a&&(n=a);var s=ce(ee,u,n,0,0);return ne>0&&void 0!==(a=ve(-2,s,u,u,H,W,s.length,0,0,0))&&"string"!=typeof(s=a)&&(i=0),ae="",se="",ue="",$=0,H=1,W=1,X*i==0?s:s.replace(r,"").replace(b,"").replace(g,"$1").replace(m,"$1").replace(w," ")}return ge.use=function e(t){switch(t){case void 0:case null:ne=te.length=0;break;default:if("function"==typeof t)te[ne++]=t;else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else oe=0|!!t}return e},ge.set=be,void 0!==t&&be(t),ge}(null)},function(e,t,n){"use strict";var r=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function o(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(o=e[n],i=t[n],!(o===i||r(o)&&r(i)))return!1;var o,i;return!0}t.a=function(e,t){var n;void 0===t&&(t=o);var r,i=[],a=!1;return function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];return a&&n===this&&t(o,i)||(r=e.apply(this,o),a=!0,n=this,i=o),r}}},,function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,c=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=u(p);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function s(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function c(e){var t=void 0===e?"undefined":E(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,n,r,f,p,h){h=h||[];var d=(f=f||[]).slice(0);if(void 0!==p){if(r){if("function"==typeof r&&r(d,p))return;if("object"===(void 0===r?"undefined":E(r))){if(r.prefilter&&r.prefilter(d,p))return;if(r.normalize){var v=r.normalize(d,p,e,t);v&&(e=v[0],t=v[1])}}}d.push(p)}"regexp"===c(e)&&"regexp"===c(t)&&(e=e.toString(),t=t.toString());var y=void 0===e?"undefined":E(e),b=void 0===t?"undefined":E(t),g="undefined"!==y||h&&h[h.length-1].lhs&&h[h.length-1].lhs.hasOwnProperty(p),m="undefined"!==b||h&&h[h.length-1].rhs&&h[h.length-1].rhs.hasOwnProperty(p);if(!g&&m)n(new i(d,t));else if(!m&&g)n(new a(d,e));else if(c(e)!==c(t))n(new o(d,e,t));else if("date"===c(e)&&e-t!=0)n(new o(d,e,t));else if("object"===y&&null!==e&&null!==t)if(h.filter((function(t){return t.lhs===e})).length)e!==t&&n(new o(d,e,t));else{if(h.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?n(new u(d,w,new a(void 0,e[w]))):l(e[w],t[w],n,r,d,w,h);for(;w<t.length;)n(new u(d,w,new i(void 0,t[w++])))}else{var _=Object.keys(e),O=Object.keys(t);_.forEach((function(o,i){var a=O.indexOf(o);a>=0?(l(e[o],t[o],n,r,d,o,h),O=s(O,a)):l(e[o],void 0,n,r,d,o,h)})),O.forEach((function(e){l(void 0,t[e],n,r,d,e,h)}))}h.length=h.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||n(new o(d,e,t)))}function f(e,t,n,r){return r=r||[],l(e,t,(function(e){e&&r.push(e)}),n),r.length?r:void 0}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)void 0===r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,i=t[n],a=r.path.length-1;for(o=0;o<a;o++)i=i[r.path[o]];switch(r.kind){case"A":e(i[r.path[o]],r.index,r.item);break;case"D":delete i[r.path[o]];break;case"E":case"N":i[r.path[o]]=r.rhs}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":t=s(t,n);break;case"E":case"N":t[n]=r.rhs}return t}(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function h(e){return"color: "+C[e].color+"; font-weight: bold"}function d(e,t,n,r){var o=f(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach((function(e){var t=e.kind,r=function(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"→",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}(e);n.log.apply(n,["%c "+C[t].text,h(t)].concat(x(r)))})):n.log("—— no diff ——");try{n.groupEnd()}catch(e){n.log("—— diff end —— ")}}function v(e,t,n,r){switch(void 0===e?"undefined":E(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,x(n)):e[r];case"function":return e(t);default:return e}}function y(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?function(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}(t):o,a=t.collapsed,u=t.colors,s=t.level,c=t.diff,l=void 0===t.titleFormatter;e.forEach((function(o,f){var p=o.started,h=o.startedTime,y=o.action,b=o.prevState,g=o.error,m=o.took,w=o.nextState,O=e[f+1];O&&(w=O.prevState,m=O.started-p);var E=r(y),x="function"==typeof a?a((function(){return w}),y,o):a,S=_(h),C=u.title?"color: "+u.title(E)+";":"",j=["color: gray; font-weight: lighter;"];j.push(C),t.timestamp&&j.push("color: gray; font-weight: lighter;"),t.duration&&j.push("color: gray; font-weight: lighter;");var k=i(E,S,m);try{x?u.title&&l?n.groupCollapsed.apply(n,["%c "+k].concat(j)):n.groupCollapsed(k):u.title&&l?n.group.apply(n,["%c "+k].concat(j)):n.group(k)}catch(e){n.log(k)}var A=v(s,E,[b],"prevState"),P=v(s,E,[E],"action"),I=v(s,E,[g,b],"error"),T=v(s,E,[w],"nextState");if(A)if(u.prevState){var D="color: "+u.prevState(b)+"; font-weight: bold";n[A]("%c prev state",D,b)}else n[A]("prev state",b);if(P)if(u.action){var M="color: "+u.action(E)+"; font-weight: bold";n[P]("%c action    ",M,E)}else n[P]("action    ",E);if(g&&I)if(u.error){var F="color: "+u.error(g,b)+"; font-weight: bold;";n[I]("%c error     ",F,g)}else n[I]("error     ",g);if(T)if(u.nextState){var R="color: "+u.nextState(w)+"; font-weight: bold";n[T]("%c next state",R,w)}else n[T]("next state",w);c&&d(b,w,n,x);try{n.groupEnd()}catch(e){n.log("—— log end ——")}}))}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},j,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if(void 0===n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var s=[];return function(e){var n=e.getState;return function(e){return function(c){if("function"==typeof i&&!i(n,c))return e(c);var l={};s.push(l),l.started=O.now(),l.startedTime=new Date,l.prevState=r(n()),l.action=c;var f=void 0;if(a)try{f=e(c)}catch(e){l.error=o(e)}else f=e(c);l.took=O.now()-l.started,l.nextState=r(n());var p=t.diff&&"function"==typeof u?u(n,c):t.diff;if(y(s,Object.assign({},t,{diff:p})),s.length=0,l.error)throw l.error;return f}}}}var g,m,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},_=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},S=[];g="object"===(void 0===e?"undefined":E(e))&&e?e:"undefined"!=typeof window?window:{},(m=g.DeepDiff)&&S.push((function(){void 0!==m&&g.DeepDiff===f&&(g.DeepDiff=m,m=void 0)})),n(o,r),n(i,r),n(a,r),n(u,r),Object.defineProperties(f,{diff:{value:f,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:function(e,t,n){e&&t&&l(e,t,(function(r){n&&!n(e,t,r)||p(e,t,r)}))},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)void 0===i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":!function e(t,n,r){if(r.path&&r.path.length){var o,i=t[n],a=r.path.length-1;for(o=0;o<a;o++)i=i[r.path[o]];switch(r.kind){case"A":e(i[r.path[o]],r.index,r.item);break;case"D":case"E":i[r.path[o]]=r.lhs;break;case"N":delete i[r.path[o]]}}else switch(r.kind){case"A":e(t[n],r.index,r.item);break;case"D":case"E":t[n]=r.lhs;break;case"N":t=s(t,n)}return t}(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}},enumerable:!0},isConflict:{value:function(){return void 0!==m},enumerable:!0},noConflict:{value:function(){return S&&(S.forEach((function(e){e()})),S=null),f},enumerable:!0}});var C={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},j={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?b()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=j,t.createLogger=b,t.logger=k,t.default=k,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n(28))},function(e,t,n){"use strict";t.a=function(e){return"undefined"!=typeof Map&&e instanceof Map}},function(e,t,n){"use strict";let r;t.a=function(){return r||(r=angular.element(jQuery('[ng-controller="EditPostWidgetController"]')).scope())}},,,,,,,function(e,t,n){e.exports=function(){"use strict";return function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,i,a,u,s,c,l,f){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(o[0]+r),"";default:return r+(0===f?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}}()},function(e,t,n){"use strict";t.a={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},function(e,t,n){"use strict";var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.a=o},function(e,t,n){"use strict";function r(e){return Object.prototype.toString.call(e).slice(8,-1)}function o(e){return"Undefined"===r(e)}function i(e){return"Null"===r(e)}function a(e){return"Object"===r(e)&&(e.constructor===Object&&Object.getPrototypeOf(e)===Object.prototype)}function u(e){return"Array"===r(e)}function s(e){return"Symbol"===r(e)}var c,l,f,p,h;c=i,l=o;
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
function d(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function v(e,t,n,r){var o=r.propertyIsEnumerable(t)?"enumerable":"nonenumerable";"enumerable"===o&&(e[t]=n),"nonenumerable"===o&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function y(e,t,n){if(!a(t))return n&&u(n)&&n.forEach((function(n){t=n(e,t)})),t;var r={};a(e)&&(r=d(Object.getOwnPropertyNames(e),Object.getOwnPropertySymbols(e)).reduce((function(n,r){var o=e[r];return(!s(r)&&!Object.getOwnPropertyNames(t).includes(r)||s(r)&&!Object.getOwnPropertySymbols(t).includes(r))&&v(n,r,o,e),n}),{}));return d(Object.getOwnPropertyNames(t),Object.getOwnPropertySymbols(t)).reduce((function(r,o){var i=t[o],s=a(e)?e[o]:void 0;return n&&u(n)&&n.forEach((function(e){i=e(s,i)})),void 0!==s&&a(i)&&(i=y(s,i,n)),v(r,o,i,t),r}),r)}t.a=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=null,o=e;return a(e)&&e.extensions&&1===Object.keys(e).length&&(o={},r=e.extensions),t.reduce((function(e,t){return y(e,t,r)}),o)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(54);function o(e){if(Object(r.a)(e))return Array.from(e.keys());if("undefined"!=typeof Reflect&&"function"==typeof Reflect.ownKeys)return Reflect.ownKeys(e);var t=Object.getOwnPropertyNames(e);return"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t}},function(e,t,n){e.exports=function(){"use strict";var e=Array.prototype.slice;function t(e,t){t&&(e.prototype=Object.create(t.prototype)),e.prototype.constructor=e}function n(e){return a(e)?e:U(e)}function r(e){return u(e)?e:V(e)}function o(e){return s(e)?e:K(e)}function i(e){return a(e)&&!c(e)?e:W(e)}function a(e){return!(!e||!e[f])}function u(e){return!(!e||!e[p])}function s(e){return!(!e||!e[h])}function c(e){return u(e)||s(e)}function l(e){return!(!e||!e[d])}t(r,n),t(o,n),t(i,n),n.isIterable=a,n.isKeyed=u,n.isIndexed=s,n.isAssociative=c,n.isOrdered=l,n.Keyed=r,n.Indexed=o,n.Set=i;var f="@@__IMMUTABLE_ITERABLE__@@",p="@@__IMMUTABLE_KEYED__@@",h="@@__IMMUTABLE_INDEXED__@@",d="@@__IMMUTABLE_ORDERED__@@",v={},y={value:!1},b={value:!1};function g(e){return e.value=!1,e}function m(e){e&&(e.value=!0)}function w(){}function _(e,t){t=t||0;for(var n=Math.max(0,e.length-t),r=new Array(n),o=0;o<n;o++)r[o]=e[o+t];return r}function O(e){return void 0===e.size&&(e.size=e.__iterate(x)),e.size}function E(e,t){if("number"!=typeof t){var n=t>>>0;if(""+n!==t||4294967295===n)return NaN;t=n}return t<0?O(e)+t:t}function x(){return!0}function S(e,t,n){return(0===e||void 0!==n&&e<=-n)&&(void 0===t||void 0!==n&&t>=n)}function C(e,t){return k(e,t,0)}function j(e,t){return k(e,t,t)}function k(e,t,n){return void 0===e?n:e<0?Math.max(0,t+e):void 0===t?e:Math.min(t,e)}var A,P,I,T="function"==typeof Symbol&&Symbol.iterator,D=T||"@@iterator";function M(e){this.next=e}function F(e,t,n,r){var o=0===e?t:1===e?n:[t,n];return r?r.value=o:r={value:o,done:!1},r}function R(){return{value:void 0,done:!0}}function z(e){return!!B(e)}function N(e){return e&&"function"==typeof e.next}function L(e){var t=B(e);return t&&t.call(e)}function B(e){var t=e&&(T&&e[T]||e["@@iterator"]);if("function"==typeof t)return t}function q(e){return e&&"number"==typeof e.length}function U(e){return null==e?X():a(e)?e.toSeq():function(e){var t=ee(e)||"object"==typeof e&&new $(e);if(!t)throw new TypeError("Expected Array or iterable object of values, or keyed object: "+e);return t}(e)}function V(e){return null==e?X().toKeyedSeq():a(e)?u(e)?e.toSeq():e.fromEntrySeq():Q(e)}function K(e){return null==e?X():a(e)?u(e)?e.entrySeq():e.toIndexedSeq():Z(e)}function W(e){return(null==e?X():a(e)?u(e)?e.entrySeq():e:Z(e)).toSetSeq()}function H(e){this._array=e,this.size=e.length}function $(e){var t=Object.keys(e);this._object=e,this._keys=t,this.size=t.length}function G(e){this._iterable=e,this.size=e.length||e.size}function Y(e){this._iterator=e,this._iteratorCache=[]}function J(e){return!(!e||!e["@@__IMMUTABLE_SEQ__@@"])}function X(){return A||(A=new H([]))}function Q(e){var t=Array.isArray(e)?new H(e).fromEntrySeq():N(e)?new Y(e).fromEntrySeq():z(e)?new G(e).fromEntrySeq():"object"==typeof e?new $(e):void 0;if(!t)throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: "+e);return t}function Z(e){var t=ee(e);if(!t)throw new TypeError("Expected Array or iterable object of values: "+e);return t}function ee(e){return q(e)?new H(e):N(e)?new Y(e):z(e)?new G(e):void 0}function te(e,t,n,r){var o=e._cache;if(o){for(var i=o.length-1,a=0;a<=i;a++){var u=o[n?i-a:a];if(!1===t(u[1],r?u[0]:a,e))return a+1}return a}return e.__iterateUncached(t,n)}function ne(e,t,n,r){var o=e._cache;if(o){var i=o.length-1,a=0;return new M((function(){var e=o[n?i-a:a];return a++>i?{value:void 0,done:!0}:F(t,r?e[0]:a-1,e[1])}))}return e.__iteratorUncached(t,n)}function re(e,t){return t?function e(t,n,r,o){return Array.isArray(n)?t.call(o,r,K(n).map((function(r,o){return e(t,r,o,n)}))):ie(n)?t.call(o,r,V(n).map((function(r,o){return e(t,r,o,n)}))):n}(t,e,"",{"":e}):oe(e)}function oe(e){return Array.isArray(e)?K(e).map(oe).toList():ie(e)?V(e).map(oe).toMap():e}function ie(e){return e&&(e.constructor===Object||void 0===e.constructor)}function ae(e,t){if(e===t||e!=e&&t!=t)return!0;if(!e||!t)return!1;if("function"==typeof e.valueOf&&"function"==typeof t.valueOf){if((e=e.valueOf())===(t=t.valueOf())||e!=e&&t!=t)return!0;if(!e||!t)return!1}return!("function"!=typeof e.equals||"function"!=typeof t.equals||!e.equals(t))}function ue(e,t){if(e===t)return!0;if(!a(t)||void 0!==e.size&&void 0!==t.size&&e.size!==t.size||void 0!==e.__hash&&void 0!==t.__hash&&e.__hash!==t.__hash||u(e)!==u(t)||s(e)!==s(t)||l(e)!==l(t))return!1;if(0===e.size&&0===t.size)return!0;var n=!c(e);if(l(e)){var r=e.entries();return t.every((function(e,t){var o=r.next().value;return o&&ae(o[1],e)&&(n||ae(o[0],t))}))&&r.next().done}var o=!1;if(void 0===e.size)if(void 0===t.size)"function"==typeof e.cacheResult&&e.cacheResult();else{o=!0;var i=e;e=t,t=i}var f=!0,p=t.__iterate((function(t,r){if(n?!e.has(t):o?!ae(t,e.get(r,v)):!ae(e.get(r,v),t))return f=!1,!1}));return f&&e.size===p}function se(e,t){if(!(this instanceof se))return new se(e,t);if(this._value=e,this.size=void 0===t?1/0:Math.max(0,t),0===this.size){if(P)return P;P=this}}function ce(e,t){if(!e)throw new Error(t)}function le(e,t,n){if(!(this instanceof le))return new le(e,t,n);if(ce(0!==n,"Cannot step a Range by 0"),e=e||0,void 0===t&&(t=1/0),n=void 0===n?1:Math.abs(n),t<e&&(n=-n),this._start=e,this._end=t,this._step=n,this.size=Math.max(0,Math.ceil((t-e)/n-1)+1),0===this.size){if(I)return I;I=this}}function fe(){throw TypeError("Abstract")}function pe(){}function he(){}function de(){}M.prototype.toString=function(){return"[Iterator]"},M.KEYS=0,M.VALUES=1,M.ENTRIES=2,M.prototype.inspect=M.prototype.toSource=function(){return this.toString()},M.prototype[D]=function(){return this},t(U,n),U.of=function(){return U(arguments)},U.prototype.toSeq=function(){return this},U.prototype.toString=function(){return this.__toString("Seq {","}")},U.prototype.cacheResult=function(){return!this._cache&&this.__iterateUncached&&(this._cache=this.entrySeq().toArray(),this.size=this._cache.length),this},U.prototype.__iterate=function(e,t){return te(this,e,t,!0)},U.prototype.__iterator=function(e,t){return ne(this,e,t,!0)},t(V,U),V.prototype.toKeyedSeq=function(){return this},t(K,U),K.of=function(){return K(arguments)},K.prototype.toIndexedSeq=function(){return this},K.prototype.toString=function(){return this.__toString("Seq [","]")},K.prototype.__iterate=function(e,t){return te(this,e,t,!1)},K.prototype.__iterator=function(e,t){return ne(this,e,t,!1)},t(W,U),W.of=function(){return W(arguments)},W.prototype.toSetSeq=function(){return this},U.isSeq=J,U.Keyed=V,U.Set=W,U.Indexed=K,U.prototype["@@__IMMUTABLE_SEQ__@@"]=!0,t(H,K),H.prototype.get=function(e,t){return this.has(e)?this._array[E(this,e)]:t},H.prototype.__iterate=function(e,t){for(var n=this._array,r=n.length-1,o=0;o<=r;o++)if(!1===e(n[t?r-o:o],o,this))return o+1;return o},H.prototype.__iterator=function(e,t){var n=this._array,r=n.length-1,o=0;return new M((function(){return o>r?{value:void 0,done:!0}:F(e,o,n[t?r-o++:o++])}))},t($,V),$.prototype.get=function(e,t){return void 0===t||this.has(e)?this._object[e]:t},$.prototype.has=function(e){return this._object.hasOwnProperty(e)},$.prototype.__iterate=function(e,t){for(var n=this._object,r=this._keys,o=r.length-1,i=0;i<=o;i++){var a=r[t?o-i:i];if(!1===e(n[a],a,this))return i+1}return i},$.prototype.__iterator=function(e,t){var n=this._object,r=this._keys,o=r.length-1,i=0;return new M((function(){var a=r[t?o-i:i];return i++>o?{value:void 0,done:!0}:F(e,a,n[a])}))},$.prototype[d]=!0,t(G,K),G.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);var n=L(this._iterable),r=0;if(N(n))for(var o;!(o=n.next()).done&&!1!==e(o.value,r++,this););return r},G.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var n=L(this._iterable);if(!N(n))return new M(R);var r=0;return new M((function(){var t=n.next();return t.done?t:F(e,r++,t.value)}))},t(Y,K),Y.prototype.__iterateUncached=function(e,t){if(t)return this.cacheResult().__iterate(e,t);for(var n,r=this._iterator,o=this._iteratorCache,i=0;i<o.length;)if(!1===e(o[i],i++,this))return i;for(;!(n=r.next()).done;){var a=n.value;if(o[i]=a,!1===e(a,i++,this))break}return i},Y.prototype.__iteratorUncached=function(e,t){if(t)return this.cacheResult().__iterator(e,t);var n=this._iterator,r=this._iteratorCache,o=0;return new M((function(){if(o>=r.length){var t=n.next();if(t.done)return t;r[o]=t.value}return F(e,o,r[o++])}))},t(se,K),se.prototype.toString=function(){return 0===this.size?"Repeat []":"Repeat [ "+this._value+" "+this.size+" times ]"},se.prototype.get=function(e,t){return this.has(e)?this._value:t},se.prototype.includes=function(e){return ae(this._value,e)},se.prototype.slice=function(e,t){var n=this.size;return S(e,t,n)?this:new se(this._value,j(t,n)-C(e,n))},se.prototype.reverse=function(){return this},se.prototype.indexOf=function(e){return ae(this._value,e)?0:-1},se.prototype.lastIndexOf=function(e){return ae(this._value,e)?this.size:-1},se.prototype.__iterate=function(e,t){for(var n=0;n<this.size;n++)if(!1===e(this._value,n,this))return n+1;return n},se.prototype.__iterator=function(e,t){var n=this,r=0;return new M((function(){return r<n.size?F(e,r++,n._value):{value:void 0,done:!0}}))},se.prototype.equals=function(e){return e instanceof se?ae(this._value,e._value):ue(e)},t(le,K),le.prototype.toString=function(){return 0===this.size?"Range []":"Range [ "+this._start+"..."+this._end+(1!==this._step?" by "+this._step:"")+" ]"},le.prototype.get=function(e,t){return this.has(e)?this._start+E(this,e)*this._step:t},le.prototype.includes=function(e){var t=(e-this._start)/this._step;return t>=0&&t<this.size&&t===Math.floor(t)},le.prototype.slice=function(e,t){return S(e,t,this.size)?this:(e=C(e,this.size),(t=j(t,this.size))<=e?new le(0,0):new le(this.get(e,this._end),this.get(t,this._end),this._step))},le.prototype.indexOf=function(e){var t=e-this._start;if(t%this._step==0){var n=t/this._step;if(n>=0&&n<this.size)return n}return-1},le.prototype.lastIndexOf=function(e){return this.indexOf(e)},le.prototype.__iterate=function(e,t){for(var n=this.size-1,r=this._step,o=t?this._start+n*r:this._start,i=0;i<=n;i++){if(!1===e(o,i,this))return i+1;o+=t?-r:r}return i},le.prototype.__iterator=function(e,t){var n=this.size-1,r=this._step,o=t?this._start+n*r:this._start,i=0;return new M((function(){var a=o;return o+=t?-r:r,i>n?{value:void 0,done:!0}:F(e,i++,a)}))},le.prototype.equals=function(e){return e instanceof le?this._start===e._start&&this._end===e._end&&this._step===e._step:ue(this,e)},t(fe,n),t(pe,fe),t(he,fe),t(de,fe),fe.Keyed=pe,fe.Indexed=he,fe.Set=de;var ve="function"==typeof Math.imul&&-2===Math.imul(4294967295,2)?Math.imul:function(e,t){var n=65535&(e|=0),r=65535&(t|=0);return n*r+((e>>>16)*r+n*(t>>>16)<<16>>>0)|0};function ye(e){return e>>>1&1073741824|3221225471&e}function be(e){if(!1===e||null==e)return 0;if("function"==typeof e.valueOf&&(!1===(e=e.valueOf())||null==e))return 0;if(!0===e)return 1;var t=typeof e;if("number"===t){if(e!=e||e===1/0)return 0;var n=0|e;for(n!==e&&(n^=4294967295*e);e>4294967295;)n^=e/=4294967295;return ye(n)}if("string"===t)return e.length>Se?function(e){var t=ke[e];return void 0===t&&(t=ge(e),je===Ce&&(je=0,ke={}),je++,ke[e]=t),t}(e):ge(e);if("function"==typeof e.hashCode)return e.hashCode();if("object"===t)return function(e){var t;if(Oe&&void 0!==(t=me.get(e)))return t;if(void 0!==(t=e[xe]))return t;if(!_e){if(void 0!==(t=e.propertyIsEnumerable&&e.propertyIsEnumerable[xe]))return t;if(void 0!==(t=function(e){if(e&&e.nodeType>0)switch(e.nodeType){case 1:return e.uniqueID;case 9:return e.documentElement&&e.documentElement.uniqueID}}(e)))return t}if(t=++Ee,1073741824&Ee&&(Ee=0),Oe)me.set(e,t);else{if(void 0!==we&&!1===we(e))throw new Error("Non-extensible objects are not allowed as keys.");if(_e)Object.defineProperty(e,xe,{enumerable:!1,configurable:!1,writable:!1,value:t});else if(void 0!==e.propertyIsEnumerable&&e.propertyIsEnumerable===e.constructor.prototype.propertyIsEnumerable)e.propertyIsEnumerable=function(){return this.constructor.prototype.propertyIsEnumerable.apply(this,arguments)},e.propertyIsEnumerable[xe]=t;else{if(void 0===e.nodeType)throw new Error("Unable to set a non-enumerable property on object.");e[xe]=t}}return t}(e);if("function"==typeof e.toString)return ge(e.toString());throw new Error("Value type "+t+" cannot be hashed.")}function ge(e){for(var t=0,n=0;n<e.length;n++)t=31*t+e.charCodeAt(n)|0;return ye(t)}var me,we=Object.isExtensible,_e=function(){try{return Object.defineProperty({},"@",{}),!0}catch(e){return!1}}(),Oe="function"==typeof WeakMap;Oe&&(me=new WeakMap);var Ee=0,xe="__immutablehash__";"function"==typeof Symbol&&(xe=Symbol(xe));var Se=16,Ce=255,je=0,ke={};function Ae(e){ce(e!==1/0,"Cannot perform this action with an infinite size.")}function Pe(e){return null==e?Ke():Ie(e)&&!l(e)?e:Ke().withMutations((function(t){var n=r(e);Ae(n.size),n.forEach((function(e,n){return t.set(n,e)}))}))}function Ie(e){return!(!e||!e[De])}t(Pe,pe),Pe.of=function(){var t=e.call(arguments,0);return Ke().withMutations((function(e){for(var n=0;n<t.length;n+=2){if(n+1>=t.length)throw new Error("Missing value for key: "+t[n]);e.set(t[n],t[n+1])}}))},Pe.prototype.toString=function(){return this.__toString("Map {","}")},Pe.prototype.get=function(e,t){return this._root?this._root.get(0,void 0,e,t):t},Pe.prototype.set=function(e,t){return We(this,e,t)},Pe.prototype.setIn=function(e,t){return this.updateIn(e,v,(function(){return t}))},Pe.prototype.remove=function(e){return We(this,e,v)},Pe.prototype.deleteIn=function(e){return this.updateIn(e,(function(){return v}))},Pe.prototype.update=function(e,t,n){return 1===arguments.length?e(this):this.updateIn([e],t,n)},Pe.prototype.updateIn=function(e,t,n){n||(n=t,t=void 0);var r=function e(t,n,r,o){var i=t===v,a=n.next();if(a.done){var u=i?r:t,s=o(u);return s===u?t:s}ce(i||t&&t.set,"invalid keyPath");var c=a.value,l=i?v:t.get(c,v),f=e(l,n,r,o);return f===l?t:f===v?t.remove(c):(i?Ke():t).set(c,f)}(this,Yt(e),t,n);return r===v?void 0:r},Pe.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._root=null,this.__hash=void 0,this.__altered=!0,this):Ke()},Pe.prototype.merge=function(){return Ye(this,void 0,arguments)},Pe.prototype.mergeWith=function(t){var n=e.call(arguments,1);return Ye(this,t,n)},Pe.prototype.mergeIn=function(t){var n=e.call(arguments,1);return this.updateIn(t,Ke(),(function(e){return"function"==typeof e.merge?e.merge.apply(e,n):n[n.length-1]}))},Pe.prototype.mergeDeep=function(){return Ye(this,Je,arguments)},Pe.prototype.mergeDeepWith=function(t){var n=e.call(arguments,1);return Ye(this,Xe(t),n)},Pe.prototype.mergeDeepIn=function(t){var n=e.call(arguments,1);return this.updateIn(t,Ke(),(function(e){return"function"==typeof e.mergeDeep?e.mergeDeep.apply(e,n):n[n.length-1]}))},Pe.prototype.sort=function(e){return _t(Nt(this,e))},Pe.prototype.sortBy=function(e,t){return _t(Nt(this,t,e))},Pe.prototype.withMutations=function(e){var t=this.asMutable();return e(t),t.wasAltered()?t.__ensureOwner(this.__ownerID):this},Pe.prototype.asMutable=function(){return this.__ownerID?this:this.__ensureOwner(new w)},Pe.prototype.asImmutable=function(){return this.__ensureOwner()},Pe.prototype.wasAltered=function(){return this.__altered},Pe.prototype.__iterator=function(e,t){return new Be(this,e,t)},Pe.prototype.__iterate=function(e,t){var n=this,r=0;return this._root&&this._root.iterate((function(t){return r++,e(t[1],t[0],n)}),t),r},Pe.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?Ve(this.size,this._root,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},Pe.isMap=Ie;var Te,De="@@__IMMUTABLE_MAP__@@",Me=Pe.prototype;function Fe(e,t){this.ownerID=e,this.entries=t}function Re(e,t,n){this.ownerID=e,this.bitmap=t,this.nodes=n}function ze(e,t,n){this.ownerID=e,this.count=t,this.nodes=n}function Ne(e,t,n){this.ownerID=e,this.keyHash=t,this.entries=n}function Le(e,t,n){this.ownerID=e,this.keyHash=t,this.entry=n}function Be(e,t,n){this._type=t,this._reverse=n,this._stack=e._root&&Ue(e._root)}function qe(e,t){return F(e,t[0],t[1])}function Ue(e,t){return{node:e,index:0,__prev:t}}function Ve(e,t,n,r){var o=Object.create(Me);return o.size=e,o._root=t,o.__ownerID=n,o.__hash=r,o.__altered=!1,o}function Ke(){return Te||(Te=Ve(0))}function We(e,t,n){var r,o;if(e._root){var i=g(y),a=g(b);if(r=He(e._root,e.__ownerID,0,void 0,t,n,i,a),!a.value)return e;o=e.size+(i.value?n===v?-1:1:0)}else{if(n===v)return e;o=1,r=new Fe(e.__ownerID,[[t,n]])}return e.__ownerID?(e.size=o,e._root=r,e.__hash=void 0,e.__altered=!0,e):r?Ve(o,r):Ke()}function He(e,t,n,r,o,i,a,u){return e?e.update(t,n,r,o,i,a,u):i===v?e:(m(u),m(a),new Le(t,r,[o,i]))}function $e(e){return e.constructor===Le||e.constructor===Ne}function Ge(e,t,n,r,o){if(e.keyHash===r)return new Ne(t,r,[e.entry,o]);var i,a=31&(0===n?e.keyHash:e.keyHash>>>n),u=31&(0===n?r:r>>>n);return new Re(t,1<<a|1<<u,a===u?[Ge(e,t,n+5,r,o)]:(i=new Le(t,r,o),a<u?[e,i]:[i,e]))}function Ye(e,t,n){for(var o=[],i=0;i<n.length;i++){var u=n[i],s=r(u);a(u)||(s=s.map((function(e){return re(e)}))),o.push(s)}return Qe(e,t,o)}function Je(e,t,n){return e&&e.mergeDeep&&a(t)?e.mergeDeep(t):ae(e,t)?e:t}function Xe(e){return function(t,n,r){if(t&&t.mergeDeepWith&&a(n))return t.mergeDeepWith(e,n);var o=e(t,n,r);return ae(t,o)?t:o}}function Qe(e,t,n){return 0===(n=n.filter((function(e){return 0!==e.size}))).length?e:0!==e.size||e.__ownerID||1!==n.length?e.withMutations((function(e){for(var r=t?function(n,r){e.update(r,v,(function(e){return e===v?n:t(e,n,r)}))}:function(t,n){e.set(n,t)},o=0;o<n.length;o++)n[o].forEach(r)})):e.constructor(n[0])}function Ze(e){return e=(e=(858993459&(e-=e>>1&1431655765))+(e>>2&858993459))+(e>>4)&252645135,e+=e>>8,127&(e+=e>>16)}function et(e,t,n,r){var o=r?e:_(e);return o[t]=n,o}Me[De]=!0,Me.delete=Me.remove,Me.removeIn=Me.deleteIn,Fe.prototype.get=function(e,t,n,r){for(var o=this.entries,i=0,a=o.length;i<a;i++)if(ae(n,o[i][0]))return o[i][1];return r},Fe.prototype.update=function(e,t,n,r,o,i,a){for(var u=o===v,s=this.entries,c=0,l=s.length;c<l&&!ae(r,s[c][0]);c++);var f=c<l;if(f?s[c][1]===o:u)return this;if(m(a),(u||!f)&&m(i),!u||1!==s.length){if(!f&&!u&&s.length>=tt)return function(e,t,n,r){e||(e=new w);for(var o=new Le(e,be(n),[n,r]),i=0;i<t.length;i++){var a=t[i];o=o.update(e,0,void 0,a[0],a[1])}return o}(e,s,r,o);var p=e&&e===this.ownerID,h=p?s:_(s);return f?u?c===l-1?h.pop():h[c]=h.pop():h[c]=[r,o]:h.push([r,o]),p?(this.entries=h,this):new Fe(e,h)}},Re.prototype.get=function(e,t,n,r){void 0===t&&(t=be(n));var o=1<<(31&(0===e?t:t>>>e)),i=this.bitmap;return 0==(i&o)?r:this.nodes[Ze(i&o-1)].get(e+5,t,n,r)},Re.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=be(r));var u=31&(0===t?n:n>>>t),s=1<<u,c=this.bitmap,l=0!=(c&s);if(!l&&o===v)return this;var f=Ze(c&s-1),p=this.nodes,h=l?p[f]:void 0,d=He(h,e,t+5,n,r,o,i,a);if(d===h)return this;if(!l&&d&&p.length>=nt)return function(e,t,n,r,o){for(var i=0,a=new Array(32),u=0;0!==n;u++,n>>>=1)a[u]=1&n?t[i++]:void 0;return a[r]=o,new ze(e,i+1,a)}(e,p,c,u,d);if(l&&!d&&2===p.length&&$e(p[1^f]))return p[1^f];if(l&&d&&1===p.length&&$e(d))return d;var y=e&&e===this.ownerID,b=l?d?c:c^s:c|s,g=l?d?et(p,f,d,y):function(e,t,n){var r=e.length-1;if(n&&t===r)return e.pop(),e;for(var o=new Array(r),i=0,a=0;a<r;a++)a===t&&(i=1),o[a]=e[a+i];return o}(p,f,y):function(e,t,n,r){var o=e.length+1;if(r&&t+1===o)return e[t]=n,e;for(var i=new Array(o),a=0,u=0;u<o;u++)u===t?(i[u]=n,a=-1):i[u]=e[u+a];return i}(p,f,d,y);return y?(this.bitmap=b,this.nodes=g,this):new Re(e,b,g)},ze.prototype.get=function(e,t,n,r){void 0===t&&(t=be(n));var o=31&(0===e?t:t>>>e),i=this.nodes[o];return i?i.get(e+5,t,n,r):r},ze.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=be(r));var u=31&(0===t?n:n>>>t),s=o===v,c=this.nodes,l=c[u];if(s&&!l)return this;var f=He(l,e,t+5,n,r,o,i,a);if(f===l)return this;var p=this.count;if(l){if(!f&&--p<rt)return function(e,t,n,r){for(var o=0,i=0,a=new Array(n),u=0,s=1,c=t.length;u<c;u++,s<<=1){var l=t[u];void 0!==l&&u!==r&&(o|=s,a[i++]=l)}return new Re(e,o,a)}(e,c,p,u)}else p++;var h=e&&e===this.ownerID,d=et(c,u,f,h);return h?(this.count=p,this.nodes=d,this):new ze(e,p,d)},Ne.prototype.get=function(e,t,n,r){for(var o=this.entries,i=0,a=o.length;i<a;i++)if(ae(n,o[i][0]))return o[i][1];return r},Ne.prototype.update=function(e,t,n,r,o,i,a){void 0===n&&(n=be(r));var u=o===v;if(n!==this.keyHash)return u?this:(m(a),m(i),Ge(this,e,t,n,[r,o]));for(var s=this.entries,c=0,l=s.length;c<l&&!ae(r,s[c][0]);c++);var f=c<l;if(f?s[c][1]===o:u)return this;if(m(a),(u||!f)&&m(i),u&&2===l)return new Le(e,this.keyHash,s[1^c]);var p=e&&e===this.ownerID,h=p?s:_(s);return f?u?c===l-1?h.pop():h[c]=h.pop():h[c]=[r,o]:h.push([r,o]),p?(this.entries=h,this):new Ne(e,this.keyHash,h)},Le.prototype.get=function(e,t,n,r){return ae(n,this.entry[0])?this.entry[1]:r},Le.prototype.update=function(e,t,n,r,o,i,a){var u=o===v,s=ae(r,this.entry[0]);return(s?o===this.entry[1]:u)?this:(m(a),u?void m(i):s?e&&e===this.ownerID?(this.entry[1]=o,this):new Le(e,this.keyHash,[r,o]):(m(i),Ge(this,e,t,be(r),[r,o])))},Fe.prototype.iterate=Ne.prototype.iterate=function(e,t){for(var n=this.entries,r=0,o=n.length-1;r<=o;r++)if(!1===e(n[t?o-r:r]))return!1},Re.prototype.iterate=ze.prototype.iterate=function(e,t){for(var n=this.nodes,r=0,o=n.length-1;r<=o;r++){var i=n[t?o-r:r];if(i&&!1===i.iterate(e,t))return!1}},Le.prototype.iterate=function(e,t){return e(this.entry)},t(Be,M),Be.prototype.next=function(){for(var e=this._type,t=this._stack;t;){var n,r=t.node,o=t.index++;if(r.entry){if(0===o)return qe(e,r.entry)}else if(r.entries){if(o<=(n=r.entries.length-1))return qe(e,r.entries[this._reverse?n-o:o])}else if(o<=(n=r.nodes.length-1)){var i=r.nodes[this._reverse?n-o:o];if(i){if(i.entry)return qe(e,i.entry);t=this._stack=Ue(i,t)}continue}t=this._stack=this._stack.__prev}return{value:void 0,done:!0}};var tt=8,nt=16,rt=8;function ot(e){var t=dt();if(null==e)return t;if(it(e))return e;var n=o(e),r=n.size;return 0===r?t:(Ae(r),r>0&&r<32?ht(0,r,5,null,new st(n.toArray())):t.withMutations((function(e){e.setSize(r),n.forEach((function(t,n){return e.set(n,t)}))})))}function it(e){return!(!e||!e[at])}t(ot,he),ot.of=function(){return this(arguments)},ot.prototype.toString=function(){return this.__toString("List [","]")},ot.prototype.get=function(e,t){if((e=E(this,e))>=0&&e<this.size){var n=bt(this,e+=this._origin);return n&&n.array[31&e]}return t},ot.prototype.set=function(e,t){return function(e,t,n){if((t=E(e,t))!=t)return e;if(t>=e.size||t<0)return e.withMutations((function(e){t<0?gt(e,t).set(0,n):gt(e,0,t+1).set(t,n)}));t+=e._origin;var r=e._tail,o=e._root,i=g(b);return t>=wt(e._capacity)?r=vt(r,e.__ownerID,0,t,n,i):o=vt(o,e.__ownerID,e._level,t,n,i),i.value?e.__ownerID?(e._root=o,e._tail=r,e.__hash=void 0,e.__altered=!0,e):ht(e._origin,e._capacity,e._level,o,r):e}(this,e,t)},ot.prototype.remove=function(e){return this.has(e)?0===e?this.shift():e===this.size-1?this.pop():this.splice(e,1):this},ot.prototype.insert=function(e,t){return this.splice(e,0,t)},ot.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=this._origin=this._capacity=0,this._level=5,this._root=this._tail=null,this.__hash=void 0,this.__altered=!0,this):dt()},ot.prototype.push=function(){var e=arguments,t=this.size;return this.withMutations((function(n){gt(n,0,t+e.length);for(var r=0;r<e.length;r++)n.set(t+r,e[r])}))},ot.prototype.pop=function(){return gt(this,0,-1)},ot.prototype.unshift=function(){var e=arguments;return this.withMutations((function(t){gt(t,-e.length);for(var n=0;n<e.length;n++)t.set(n,e[n])}))},ot.prototype.shift=function(){return gt(this,1)},ot.prototype.merge=function(){return mt(this,void 0,arguments)},ot.prototype.mergeWith=function(t){var n=e.call(arguments,1);return mt(this,t,n)},ot.prototype.mergeDeep=function(){return mt(this,Je,arguments)},ot.prototype.mergeDeepWith=function(t){var n=e.call(arguments,1);return mt(this,Xe(t),n)},ot.prototype.setSize=function(e){return gt(this,0,e)},ot.prototype.slice=function(e,t){var n=this.size;return S(e,t,n)?this:gt(this,C(e,n),j(t,n))},ot.prototype.__iterator=function(e,t){var n=0,r=pt(this,t);return new M((function(){var t=r();return t===ft?{value:void 0,done:!0}:F(e,n++,t)}))},ot.prototype.__iterate=function(e,t){for(var n,r=0,o=pt(this,t);(n=o())!==ft&&!1!==e(n,r++,this););return r},ot.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?ht(this._origin,this._capacity,this._level,this._root,this._tail,e,this.__hash):(this.__ownerID=e,this)},ot.isList=it;var at="@@__IMMUTABLE_LIST__@@",ut=ot.prototype;function st(e,t){this.array=e,this.ownerID=t}ut[at]=!0,ut.delete=ut.remove,ut.setIn=Me.setIn,ut.deleteIn=ut.removeIn=Me.removeIn,ut.update=Me.update,ut.updateIn=Me.updateIn,ut.mergeIn=Me.mergeIn,ut.mergeDeepIn=Me.mergeDeepIn,ut.withMutations=Me.withMutations,ut.asMutable=Me.asMutable,ut.asImmutable=Me.asImmutable,ut.wasAltered=Me.wasAltered,st.prototype.removeBefore=function(e,t,n){if(n===t?1<<t:0===this.array.length)return this;var r=n>>>t&31;if(r>=this.array.length)return new st([],e);var o,i=0===r;if(t>0){var a=this.array[r];if((o=a&&a.removeBefore(e,t-5,n))===a&&i)return this}if(i&&!o)return this;var u=yt(this,e);if(!i)for(var s=0;s<r;s++)u.array[s]=void 0;return o&&(u.array[r]=o),u},st.prototype.removeAfter=function(e,t,n){if(n===(t?1<<t:0)||0===this.array.length)return this;var r,o=n-1>>>t&31;if(o>=this.array.length)return this;if(t>0){var i=this.array[o];if((r=i&&i.removeAfter(e,t-5,n))===i&&o===this.array.length-1)return this}var a=yt(this,e);return a.array.splice(o+1),r&&(a.array[o]=r),a};var ct,lt,ft={};function pt(e,t){var n=e._origin,r=e._capacity,o=wt(r),i=e._tail;return a(e._root,e._level,0);function a(e,u,s){return 0===u?function(e,a){var u=a===o?i&&i.array:e&&e.array,s=a>n?0:n-a,c=r-a;return c>32&&(c=32),function(){if(s===c)return ft;var e=t?--c:s++;return u&&u[e]}}(e,s):function(e,o,i){var u,s=e&&e.array,c=i>n?0:n-i>>o,l=1+(r-i>>o);return l>32&&(l=32),function(){for(;;){if(u){var e=u();if(e!==ft)return e;u=null}if(c===l)return ft;var n=t?--l:c++;u=a(s&&s[n],o-5,i+(n<<o))}}}(e,u,s)}}function ht(e,t,n,r,o,i,a){var u=Object.create(ut);return u.size=t-e,u._origin=e,u._capacity=t,u._level=n,u._root=r,u._tail=o,u.__ownerID=i,u.__hash=a,u.__altered=!1,u}function dt(){return ct||(ct=ht(0,0,5))}function vt(e,t,n,r,o,i){var a,u=r>>>n&31,s=e&&u<e.array.length;if(!s&&void 0===o)return e;if(n>0){var c=e&&e.array[u],l=vt(c,t,n-5,r,o,i);return l===c?e:((a=yt(e,t)).array[u]=l,a)}return s&&e.array[u]===o?e:(m(i),a=yt(e,t),void 0===o&&u===a.array.length-1?a.array.pop():a.array[u]=o,a)}function yt(e,t){return t&&e&&t===e.ownerID?e:new st(e?e.array.slice():[],t)}function bt(e,t){if(t>=wt(e._capacity))return e._tail;if(t<1<<e._level+5){for(var n=e._root,r=e._level;n&&r>0;)n=n.array[t>>>r&31],r-=5;return n}}function gt(e,t,n){void 0!==t&&(t|=0),void 0!==n&&(n|=0);var r=e.__ownerID||new w,o=e._origin,i=e._capacity,a=o+t,u=void 0===n?i:n<0?i+n:o+n;if(a===o&&u===i)return e;if(a>=u)return e.clear();for(var s=e._level,c=e._root,l=0;a+l<0;)c=new st(c&&c.array.length?[void 0,c]:[],r),l+=1<<(s+=5);l&&(a+=l,o+=l,u+=l,i+=l);for(var f=wt(i),p=wt(u);p>=1<<s+5;)c=new st(c&&c.array.length?[c]:[],r),s+=5;var h=e._tail,d=p<f?bt(e,u-1):p>f?new st([],r):h;if(h&&p>f&&a<i&&h.array.length){for(var v=c=yt(c,r),y=s;y>5;y-=5){var b=f>>>y&31;v=v.array[b]=yt(v.array[b],r)}v.array[f>>>5&31]=h}if(u<i&&(d=d&&d.removeAfter(r,0,u)),a>=p)a-=p,u-=p,s=5,c=null,d=d&&d.removeBefore(r,0,a);else if(a>o||p<f){for(l=0;c;){var g=a>>>s&31;if(g!==p>>>s&31)break;g&&(l+=(1<<s)*g),s-=5,c=c.array[g]}c&&a>o&&(c=c.removeBefore(r,s,a-l)),c&&p<f&&(c=c.removeAfter(r,s,p-l)),l&&(a-=l,u-=l)}return e.__ownerID?(e.size=u-a,e._origin=a,e._capacity=u,e._level=s,e._root=c,e._tail=d,e.__hash=void 0,e.__altered=!0,e):ht(a,u,s,c,d)}function mt(e,t,n){for(var r=[],i=0,u=0;u<n.length;u++){var s=n[u],c=o(s);c.size>i&&(i=c.size),a(s)||(c=c.map((function(e){return re(e)}))),r.push(c)}return i>e.size&&(e=e.setSize(i)),Qe(e,t,r)}function wt(e){return e<32?0:e-1>>>5<<5}function _t(e){return null==e?xt():Ot(e)?e:xt().withMutations((function(t){var n=r(e);Ae(n.size),n.forEach((function(e,n){return t.set(n,e)}))}))}function Ot(e){return Ie(e)&&l(e)}function Et(e,t,n,r){var o=Object.create(_t.prototype);return o.size=e?e.size:0,o._map=e,o._list=t,o.__ownerID=n,o.__hash=r,o}function xt(){return lt||(lt=Et(Ke(),dt()))}function St(e,t,n){var r,o,i=e._map,a=e._list,u=i.get(t),s=void 0!==u;if(n===v){if(!s)return e;a.size>=32&&a.size>=2*i.size?(r=(o=a.filter((function(e,t){return void 0!==e&&u!==t}))).toKeyedSeq().map((function(e){return e[0]})).flip().toMap(),e.__ownerID&&(r.__ownerID=o.__ownerID=e.__ownerID)):(r=i.remove(t),o=u===a.size-1?a.pop():a.set(u,void 0))}else if(s){if(n===a.get(u)[1])return e;r=i,o=a.set(u,[t,n])}else r=i.set(t,a.size),o=a.set(a.size,[t,n]);return e.__ownerID?(e.size=r.size,e._map=r,e._list=o,e.__hash=void 0,e):Et(r,o)}function Ct(e,t){this._iter=e,this._useKeys=t,this.size=e.size}function jt(e){this._iter=e,this.size=e.size}function kt(e){this._iter=e,this.size=e.size}function At(e){this._iter=e,this.size=e.size}function Pt(e){var t=Ht(e);return t._iter=e,t.size=e.size,t.flip=function(){return e},t.reverse=function(){var t=e.reverse.apply(this);return t.flip=function(){return e.reverse()},t},t.has=function(t){return e.includes(t)},t.includes=function(t){return e.has(t)},t.cacheResult=$t,t.__iterateUncached=function(t,n){var r=this;return e.__iterate((function(e,n){return!1!==t(n,e,r)}),n)},t.__iteratorUncached=function(t,n){if(2===t){var r=e.__iterator(t,n);return new M((function(){var e=r.next();if(!e.done){var t=e.value[0];e.value[0]=e.value[1],e.value[1]=t}return e}))}return e.__iterator(1===t?0:1,n)},t}function It(e,t,n){var r=Ht(e);return r.size=e.size,r.has=function(t){return e.has(t)},r.get=function(r,o){var i=e.get(r,v);return i===v?o:t.call(n,i,r,e)},r.__iterateUncached=function(r,o){var i=this;return e.__iterate((function(e,o,a){return!1!==r(t.call(n,e,o,a),o,i)}),o)},r.__iteratorUncached=function(r,o){var i=e.__iterator(2,o);return new M((function(){var o=i.next();if(o.done)return o;var a=o.value,u=a[0];return F(r,u,t.call(n,a[1],u,e),o)}))},r}function Tt(e,t){var n=Ht(e);return n._iter=e,n.size=e.size,n.reverse=function(){return e},e.flip&&(n.flip=function(){var t=Pt(e);return t.reverse=function(){return e.flip()},t}),n.get=function(n,r){return e.get(t?n:-1-n,r)},n.has=function(n){return e.has(t?n:-1-n)},n.includes=function(t){return e.includes(t)},n.cacheResult=$t,n.__iterate=function(t,n){var r=this;return e.__iterate((function(e,n){return t(e,n,r)}),!n)},n.__iterator=function(t,n){return e.__iterator(t,!n)},n}function Dt(e,t,n,r){var o=Ht(e);return r&&(o.has=function(r){var o=e.get(r,v);return o!==v&&!!t.call(n,o,r,e)},o.get=function(r,o){var i=e.get(r,v);return i!==v&&t.call(n,i,r,e)?i:o}),o.__iterateUncached=function(o,i){var a=this,u=0;return e.__iterate((function(e,i,s){if(t.call(n,e,i,s))return u++,o(e,r?i:u-1,a)}),i),u},o.__iteratorUncached=function(o,i){var a=e.__iterator(2,i),u=0;return new M((function(){for(;;){var i=a.next();if(i.done)return i;var s=i.value,c=s[0],l=s[1];if(t.call(n,l,c,e))return F(o,r?c:u++,l,i)}}))},o}function Mt(e,t,n,r){var o=e.size;if(void 0!==t&&(t|=0),void 0!==n&&(n===1/0?n=o:n|=0),S(t,n,o))return e;var i=C(t,o),a=j(n,o);if(i!=i||a!=a)return Mt(e.toSeq().cacheResult(),t,n,r);var u,s=a-i;s==s&&(u=s<0?0:s);var c=Ht(e);return c.size=0===u?u:e.size&&u||void 0,!r&&J(e)&&u>=0&&(c.get=function(t,n){return(t=E(this,t))>=0&&t<u?e.get(t+i,n):n}),c.__iterateUncached=function(t,n){var o=this;if(0===u)return 0;if(n)return this.cacheResult().__iterate(t,n);var a=0,s=!0,c=0;return e.__iterate((function(e,n){if(!s||!(s=a++<i))return c++,!1!==t(e,r?n:c-1,o)&&c!==u})),c},c.__iteratorUncached=function(t,n){if(0!==u&&n)return this.cacheResult().__iterator(t,n);var o=0!==u&&e.__iterator(t,n),a=0,s=0;return new M((function(){for(;a++<i;)o.next();if(++s>u)return{value:void 0,done:!0};var e=o.next();return r||1===t?e:F(t,s-1,0===t?void 0:e.value[1],e)}))},c}function Ft(e,t,n,r){var o=Ht(e);return o.__iterateUncached=function(o,i){var a=this;if(i)return this.cacheResult().__iterate(o,i);var u=!0,s=0;return e.__iterate((function(e,i,c){if(!u||!(u=t.call(n,e,i,c)))return s++,o(e,r?i:s-1,a)})),s},o.__iteratorUncached=function(o,i){var a=this;if(i)return this.cacheResult().__iterator(o,i);var u=e.__iterator(2,i),s=!0,c=0;return new M((function(){var e,i,l;do{if((e=u.next()).done)return r||1===o?e:F(o,c++,0===o?void 0:e.value[1],e);var f=e.value;i=f[0],l=f[1],s&&(s=t.call(n,l,i,a))}while(s);return 2===o?e:F(o,i,l,e)}))},o}function Rt(e,t){var n=u(e),o=[e].concat(t).map((function(e){return a(e)?n&&(e=r(e)):e=n?Q(e):Z(Array.isArray(e)?e:[e]),e})).filter((function(e){return 0!==e.size}));if(0===o.length)return e;if(1===o.length){var i=o[0];if(i===e||n&&u(i)||s(e)&&s(i))return i}var c=new H(o);return n?c=c.toKeyedSeq():s(e)||(c=c.toSetSeq()),(c=c.flatten(!0)).size=o.reduce((function(e,t){if(void 0!==e){var n=t.size;if(void 0!==n)return e+n}}),0),c}function zt(e,t,n){var r=Ht(e);return r.__iterateUncached=function(r,o){var i=0,u=!1;return function e(s,c){var l=this;s.__iterate((function(o,s){return(!t||c<t)&&a(o)?e(o,c+1):!1===r(o,n?s:i++,l)&&(u=!0),!u}),o)}(e,0),i},r.__iteratorUncached=function(r,o){var i=e.__iterator(r,o),u=[],s=0;return new M((function(){for(;i;){var e=i.next();if(!1===e.done){var c=e.value;if(2===r&&(c=c[1]),t&&!(u.length<t)||!a(c))return n?e:F(r,s++,c,e);u.push(i),i=c.__iterator(r,o)}else i=u.pop()}return{value:void 0,done:!0}}))},r}function Nt(e,t,n){t||(t=Gt);var r=u(e),o=0,i=e.toSeq().map((function(t,r){return[r,t,o++,n?n(t,r,e):t]})).toArray();return i.sort((function(e,n){return t(e[3],n[3])||e[2]-n[2]})).forEach(r?function(e,t){i[t].length=2}:function(e,t){i[t]=e[1]}),r?V(i):s(e)?K(i):W(i)}function Lt(e,t,n){if(t||(t=Gt),n){var r=e.toSeq().map((function(t,r){return[t,n(t,r,e)]})).reduce((function(e,n){return Bt(t,e[1],n[1])?n:e}));return r&&r[0]}return e.reduce((function(e,n){return Bt(t,e,n)?n:e}))}function Bt(e,t,n){var r=e(n,t);return 0===r&&n!==t&&(null==n||n!=n)||r>0}function qt(e,t,r){var o=Ht(e);return o.size=new H(r).map((function(e){return e.size})).min(),o.__iterate=function(e,t){for(var n,r=this.__iterator(1,t),o=0;!(n=r.next()).done&&!1!==e(n.value,o++,this););return o},o.__iteratorUncached=function(e,o){var i=r.map((function(e){return e=n(e),L(o?e.reverse():e)})),a=0,u=!1;return new M((function(){var n;return u||(n=i.map((function(e){return e.next()})),u=n.some((function(e){return e.done}))),u?{value:void 0,done:!0}:F(e,a++,t.apply(null,n.map((function(e){return e.value}))))}))},o}function Ut(e,t){return J(e)?t:e.constructor(t)}function Vt(e){if(e!==Object(e))throw new TypeError("Expected [K, V] tuple: "+e)}function Kt(e){return Ae(e.size),O(e)}function Wt(e){return u(e)?r:s(e)?o:i}function Ht(e){return Object.create((u(e)?V:s(e)?K:W).prototype)}function $t(){return this._iter.cacheResult?(this._iter.cacheResult(),this.size=this._iter.size,this):U.prototype.cacheResult.call(this)}function Gt(e,t){return e>t?1:e<t?-1:0}function Yt(e){var t=L(e);if(!t){if(!q(e))throw new TypeError("Expected iterable or array-like: "+e);t=L(n(e))}return t}function Jt(e,t){var n,r=function(i){if(i instanceof r)return i;if(!(this instanceof r))return new r(i);if(!n){n=!0;var a=Object.keys(e);!function(e,t){try{t.forEach(en.bind(void 0,e))}catch(e){}}(o,a),o.size=a.length,o._name=t,o._keys=a,o._defaultValues=e}this._map=Pe(i)},o=r.prototype=Object.create(Xt);return o.constructor=r,r}t(_t,Pe),_t.of=function(){return this(arguments)},_t.prototype.toString=function(){return this.__toString("OrderedMap {","}")},_t.prototype.get=function(e,t){var n=this._map.get(e);return void 0!==n?this._list.get(n)[1]:t},_t.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._map.clear(),this._list.clear(),this):xt()},_t.prototype.set=function(e,t){return St(this,e,t)},_t.prototype.remove=function(e){return St(this,e,v)},_t.prototype.wasAltered=function(){return this._map.wasAltered()||this._list.wasAltered()},_t.prototype.__iterate=function(e,t){var n=this;return this._list.__iterate((function(t){return t&&e(t[1],t[0],n)}),t)},_t.prototype.__iterator=function(e,t){return this._list.fromEntrySeq().__iterator(e,t)},_t.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e),n=this._list.__ensureOwner(e);return e?Et(t,n,e,this.__hash):(this.__ownerID=e,this._map=t,this._list=n,this)},_t.isOrderedMap=Ot,_t.prototype[d]=!0,_t.prototype.delete=_t.prototype.remove,t(Ct,V),Ct.prototype.get=function(e,t){return this._iter.get(e,t)},Ct.prototype.has=function(e){return this._iter.has(e)},Ct.prototype.valueSeq=function(){return this._iter.valueSeq()},Ct.prototype.reverse=function(){var e=this,t=Tt(this,!0);return this._useKeys||(t.valueSeq=function(){return e._iter.toSeq().reverse()}),t},Ct.prototype.map=function(e,t){var n=this,r=It(this,e,t);return this._useKeys||(r.valueSeq=function(){return n._iter.toSeq().map(e,t)}),r},Ct.prototype.__iterate=function(e,t){var n,r=this;return this._iter.__iterate(this._useKeys?function(t,n){return e(t,n,r)}:(n=t?Kt(this):0,function(o){return e(o,t?--n:n++,r)}),t)},Ct.prototype.__iterator=function(e,t){if(this._useKeys)return this._iter.__iterator(e,t);var n=this._iter.__iterator(1,t),r=t?Kt(this):0;return new M((function(){var o=n.next();return o.done?o:F(e,t?--r:r++,o.value,o)}))},Ct.prototype[d]=!0,t(jt,K),jt.prototype.includes=function(e){return this._iter.includes(e)},jt.prototype.__iterate=function(e,t){var n=this,r=0;return this._iter.__iterate((function(t){return e(t,r++,n)}),t)},jt.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t),r=0;return new M((function(){var t=n.next();return t.done?t:F(e,r++,t.value,t)}))},t(kt,W),kt.prototype.has=function(e){return this._iter.includes(e)},kt.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate((function(t){return e(t,t,n)}),t)},kt.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t);return new M((function(){var t=n.next();return t.done?t:F(e,t.value,t.value,t)}))},t(At,V),At.prototype.entrySeq=function(){return this._iter.toSeq()},At.prototype.__iterate=function(e,t){var n=this;return this._iter.__iterate((function(t){if(t){Vt(t);var r=a(t);return e(r?t.get(1):t[1],r?t.get(0):t[0],n)}}),t)},At.prototype.__iterator=function(e,t){var n=this._iter.__iterator(1,t);return new M((function(){for(;;){var t=n.next();if(t.done)return t;var r=t.value;if(r){Vt(r);var o=a(r);return F(e,o?r.get(0):r[0],o?r.get(1):r[1],t)}}}))},jt.prototype.cacheResult=Ct.prototype.cacheResult=kt.prototype.cacheResult=At.prototype.cacheResult=$t,t(Jt,pe),Jt.prototype.toString=function(){return this.__toString(Zt(this)+" {","}")},Jt.prototype.has=function(e){return this._defaultValues.hasOwnProperty(e)},Jt.prototype.get=function(e,t){if(!this.has(e))return t;var n=this._defaultValues[e];return this._map?this._map.get(e,n):n},Jt.prototype.clear=function(){if(this.__ownerID)return this._map&&this._map.clear(),this;var e=this.constructor;return e._empty||(e._empty=Qt(this,Ke()))},Jt.prototype.set=function(e,t){if(!this.has(e))throw new Error('Cannot set unknown key "'+e+'" on '+Zt(this));if(this._map&&!this._map.has(e)&&t===this._defaultValues[e])return this;var n=this._map&&this._map.set(e,t);return this.__ownerID||n===this._map?this:Qt(this,n)},Jt.prototype.remove=function(e){if(!this.has(e))return this;var t=this._map&&this._map.remove(e);return this.__ownerID||t===this._map?this:Qt(this,t)},Jt.prototype.wasAltered=function(){return this._map.wasAltered()},Jt.prototype.__iterator=function(e,t){var n=this;return r(this._defaultValues).map((function(e,t){return n.get(t)})).__iterator(e,t)},Jt.prototype.__iterate=function(e,t){var n=this;return r(this._defaultValues).map((function(e,t){return n.get(t)})).__iterate(e,t)},Jt.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map&&this._map.__ensureOwner(e);return e?Qt(this,t,e):(this.__ownerID=e,this._map=t,this)};var Xt=Jt.prototype;function Qt(e,t,n){var r=Object.create(Object.getPrototypeOf(e));return r._map=t,r.__ownerID=n,r}function Zt(e){return e._name||e.constructor.name||"Record"}function en(e,t){Object.defineProperty(e,t,{get:function(){return this.get(t)},set:function(e){ce(this.__ownerID,"Cannot set on an immutable record."),this.set(t,e)}})}function tn(e){return null==e?cn():nn(e)&&!l(e)?e:cn().withMutations((function(t){var n=i(e);Ae(n.size),n.forEach((function(e){return t.add(e)}))}))}function nn(e){return!(!e||!e[on])}Xt.delete=Xt.remove,Xt.deleteIn=Xt.removeIn=Me.removeIn,Xt.merge=Me.merge,Xt.mergeWith=Me.mergeWith,Xt.mergeIn=Me.mergeIn,Xt.mergeDeep=Me.mergeDeep,Xt.mergeDeepWith=Me.mergeDeepWith,Xt.mergeDeepIn=Me.mergeDeepIn,Xt.setIn=Me.setIn,Xt.update=Me.update,Xt.updateIn=Me.updateIn,Xt.withMutations=Me.withMutations,Xt.asMutable=Me.asMutable,Xt.asImmutable=Me.asImmutable,t(tn,de),tn.of=function(){return this(arguments)},tn.fromKeys=function(e){return this(r(e).keySeq())},tn.prototype.toString=function(){return this.__toString("Set {","}")},tn.prototype.has=function(e){return this._map.has(e)},tn.prototype.add=function(e){return un(this,this._map.set(e,!0))},tn.prototype.remove=function(e){return un(this,this._map.remove(e))},tn.prototype.clear=function(){return un(this,this._map.clear())},tn.prototype.union=function(){var t=e.call(arguments,0);return 0===(t=t.filter((function(e){return 0!==e.size}))).length?this:0!==this.size||this.__ownerID||1!==t.length?this.withMutations((function(e){for(var n=0;n<t.length;n++)i(t[n]).forEach((function(t){return e.add(t)}))})):this.constructor(t[0])},tn.prototype.intersect=function(){var t=e.call(arguments,0);if(0===t.length)return this;t=t.map((function(e){return i(e)}));var n=this;return this.withMutations((function(e){n.forEach((function(n){t.every((function(e){return e.includes(n)}))||e.remove(n)}))}))},tn.prototype.subtract=function(){var t=e.call(arguments,0);if(0===t.length)return this;t=t.map((function(e){return i(e)}));var n=this;return this.withMutations((function(e){n.forEach((function(n){t.some((function(e){return e.includes(n)}))&&e.remove(n)}))}))},tn.prototype.merge=function(){return this.union.apply(this,arguments)},tn.prototype.mergeWith=function(t){var n=e.call(arguments,1);return this.union.apply(this,n)},tn.prototype.sort=function(e){return ln(Nt(this,e))},tn.prototype.sortBy=function(e,t){return ln(Nt(this,t,e))},tn.prototype.wasAltered=function(){return this._map.wasAltered()},tn.prototype.__iterate=function(e,t){var n=this;return this._map.__iterate((function(t,r){return e(r,r,n)}),t)},tn.prototype.__iterator=function(e,t){return this._map.map((function(e,t){return t})).__iterator(e,t)},tn.prototype.__ensureOwner=function(e){if(e===this.__ownerID)return this;var t=this._map.__ensureOwner(e);return e?this.__make(t,e):(this.__ownerID=e,this._map=t,this)},tn.isSet=nn;var rn,on="@@__IMMUTABLE_SET__@@",an=tn.prototype;function un(e,t){return e.__ownerID?(e.size=t.size,e._map=t,e):t===e._map?e:0===t.size?e.__empty():e.__make(t)}function sn(e,t){var n=Object.create(an);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function cn(){return rn||(rn=sn(Ke()))}function ln(e){return null==e?vn():fn(e)?e:vn().withMutations((function(t){var n=i(e);Ae(n.size),n.forEach((function(e){return t.add(e)}))}))}function fn(e){return nn(e)&&l(e)}an[on]=!0,an.delete=an.remove,an.mergeDeep=an.merge,an.mergeDeepWith=an.mergeWith,an.withMutations=Me.withMutations,an.asMutable=Me.asMutable,an.asImmutable=Me.asImmutable,an.__empty=cn,an.__make=sn,t(ln,tn),ln.of=function(){return this(arguments)},ln.fromKeys=function(e){return this(r(e).keySeq())},ln.prototype.toString=function(){return this.__toString("OrderedSet {","}")},ln.isOrderedSet=fn;var pn,hn=ln.prototype;function dn(e,t){var n=Object.create(hn);return n.size=e?e.size:0,n._map=e,n.__ownerID=t,n}function vn(){return pn||(pn=dn(xt()))}function yn(e){return null==e?On():bn(e)?e:On().unshiftAll(e)}function bn(e){return!(!e||!e[mn])}hn[d]=!0,hn.__empty=vn,hn.__make=dn,t(yn,he),yn.of=function(){return this(arguments)},yn.prototype.toString=function(){return this.__toString("Stack [","]")},yn.prototype.get=function(e,t){var n=this._head;for(e=E(this,e);n&&e--;)n=n.next;return n?n.value:t},yn.prototype.peek=function(){return this._head&&this._head.value},yn.prototype.push=function(){if(0===arguments.length)return this;for(var e=this.size+arguments.length,t=this._head,n=arguments.length-1;n>=0;n--)t={value:arguments[n],next:t};return this.__ownerID?(this.size=e,this._head=t,this.__hash=void 0,this.__altered=!0,this):_n(e,t)},yn.prototype.pushAll=function(e){if(0===(e=o(e)).size)return this;Ae(e.size);var t=this.size,n=this._head;return e.reverse().forEach((function(e){t++,n={value:e,next:n}})),this.__ownerID?(this.size=t,this._head=n,this.__hash=void 0,this.__altered=!0,this):_n(t,n)},yn.prototype.pop=function(){return this.slice(1)},yn.prototype.unshift=function(){return this.push.apply(this,arguments)},yn.prototype.unshiftAll=function(e){return this.pushAll(e)},yn.prototype.shift=function(){return this.pop.apply(this,arguments)},yn.prototype.clear=function(){return 0===this.size?this:this.__ownerID?(this.size=0,this._head=void 0,this.__hash=void 0,this.__altered=!0,this):On()},yn.prototype.slice=function(e,t){if(S(e,t,this.size))return this;var n=C(e,this.size);if(j(t,this.size)!==this.size)return he.prototype.slice.call(this,e,t);for(var r=this.size-n,o=this._head;n--;)o=o.next;return this.__ownerID?(this.size=r,this._head=o,this.__hash=void 0,this.__altered=!0,this):_n(r,o)},yn.prototype.__ensureOwner=function(e){return e===this.__ownerID?this:e?_n(this.size,this._head,e,this.__hash):(this.__ownerID=e,this.__altered=!1,this)},yn.prototype.__iterate=function(e,t){if(t)return this.reverse().__iterate(e);for(var n=0,r=this._head;r&&!1!==e(r.value,n++,this);)r=r.next;return n},yn.prototype.__iterator=function(e,t){if(t)return this.reverse().__iterator(e);var n=0,r=this._head;return new M((function(){if(r){var t=r.value;return r=r.next,F(e,n++,t)}return{value:void 0,done:!0}}))},yn.isStack=bn;var gn,mn="@@__IMMUTABLE_STACK__@@",wn=yn.prototype;function _n(e,t,n,r){var o=Object.create(wn);return o.size=e,o._head=t,o.__ownerID=n,o.__hash=r,o.__altered=!1,o}function On(){return gn||(gn=_n(0))}function En(e,t){var n=function(n){e.prototype[n]=t[n]};return Object.keys(t).forEach(n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(t).forEach(n),e}wn[mn]=!0,wn.withMutations=Me.withMutations,wn.asMutable=Me.asMutable,wn.asImmutable=Me.asImmutable,wn.wasAltered=Me.wasAltered,n.Iterator=M,En(n,{toArray:function(){Ae(this.size);var e=new Array(this.size||0);return this.valueSeq().__iterate((function(t,n){e[n]=t})),e},toIndexedSeq:function(){return new jt(this)},toJS:function(){return this.toSeq().map((function(e){return e&&"function"==typeof e.toJS?e.toJS():e})).__toJS()},toJSON:function(){return this.toSeq().map((function(e){return e&&"function"==typeof e.toJSON?e.toJSON():e})).__toJS()},toKeyedSeq:function(){return new Ct(this,!0)},toMap:function(){return Pe(this.toKeyedSeq())},toObject:function(){Ae(this.size);var e={};return this.__iterate((function(t,n){e[n]=t})),e},toOrderedMap:function(){return _t(this.toKeyedSeq())},toOrderedSet:function(){return ln(u(this)?this.valueSeq():this)},toSet:function(){return tn(u(this)?this.valueSeq():this)},toSetSeq:function(){return new kt(this)},toSeq:function(){return s(this)?this.toIndexedSeq():u(this)?this.toKeyedSeq():this.toSetSeq()},toStack:function(){return yn(u(this)?this.valueSeq():this)},toList:function(){return ot(u(this)?this.valueSeq():this)},toString:function(){return"[Iterable]"},__toString:function(e,t){return 0===this.size?e+t:e+" "+this.toSeq().map(this.__toStringMapper).join(", ")+" "+t},concat:function(){var t=e.call(arguments,0);return Ut(this,Rt(this,t))},includes:function(e){return this.some((function(t){return ae(t,e)}))},entries:function(){return this.__iterator(2)},every:function(e,t){Ae(this.size);var n=!0;return this.__iterate((function(r,o,i){if(!e.call(t,r,o,i))return n=!1,!1})),n},filter:function(e,t){return Ut(this,Dt(this,e,t,!0))},find:function(e,t,n){var r=this.findEntry(e,t);return r?r[1]:n},forEach:function(e,t){return Ae(this.size),this.__iterate(t?e.bind(t):e)},join:function(e){Ae(this.size),e=void 0!==e?""+e:",";var t="",n=!0;return this.__iterate((function(r){n?n=!1:t+=e,t+=null!=r?r.toString():""})),t},keys:function(){return this.__iterator(0)},map:function(e,t){return Ut(this,It(this,e,t))},reduce:function(e,t,n){var r,o;return Ae(this.size),arguments.length<2?o=!0:r=t,this.__iterate((function(t,i,a){o?(o=!1,r=t):r=e.call(n,r,t,i,a)})),r},reduceRight:function(e,t,n){var r=this.toKeyedSeq().reverse();return r.reduce.apply(r,arguments)},reverse:function(){return Ut(this,Tt(this,!0))},slice:function(e,t){return Ut(this,Mt(this,e,t,!0))},some:function(e,t){return!this.every(kn(e),t)},sort:function(e){return Ut(this,Nt(this,e))},values:function(){return this.__iterator(1)},butLast:function(){return this.slice(0,-1)},isEmpty:function(){return void 0!==this.size?0===this.size:!this.some((function(){return!0}))},count:function(e,t){return O(e?this.toSeq().filter(e,t):this)},countBy:function(e,t){return function(e,t,n){var r=Pe().asMutable();return e.__iterate((function(o,i){r.update(t.call(n,o,i,e),0,(function(e){return e+1}))})),r.asImmutable()}(this,e,t)},equals:function(e){return ue(this,e)},entrySeq:function(){var e=this;if(e._cache)return new H(e._cache);var t=e.toSeq().map(jn).toIndexedSeq();return t.fromEntrySeq=function(){return e.toSeq()},t},filterNot:function(e,t){return this.filter(kn(e),t)},findEntry:function(e,t,n){var r=n;return this.__iterate((function(n,o,i){if(e.call(t,n,o,i))return r=[o,n],!1})),r},findKey:function(e,t){var n=this.findEntry(e,t);return n&&n[0]},findLast:function(e,t,n){return this.toKeyedSeq().reverse().find(e,t,n)},findLastEntry:function(e,t,n){return this.toKeyedSeq().reverse().findEntry(e,t,n)},findLastKey:function(e,t){return this.toKeyedSeq().reverse().findKey(e,t)},first:function(){return this.find(x)},flatMap:function(e,t){return Ut(this,function(e,t,n){var r=Wt(e);return e.toSeq().map((function(o,i){return r(t.call(n,o,i,e))})).flatten(!0)}(this,e,t))},flatten:function(e){return Ut(this,zt(this,e,!0))},fromEntrySeq:function(){return new At(this)},get:function(e,t){return this.find((function(t,n){return ae(n,e)}),void 0,t)},getIn:function(e,t){for(var n,r=this,o=Yt(e);!(n=o.next()).done;){var i=n.value;if((r=r&&r.get?r.get(i,v):v)===v)return t}return r},groupBy:function(e,t){return function(e,t,n){var r=u(e),o=(l(e)?_t():Pe()).asMutable();e.__iterate((function(i,a){o.update(t.call(n,i,a,e),(function(e){return(e=e||[]).push(r?[a,i]:i),e}))}));var i=Wt(e);return o.map((function(t){return Ut(e,i(t))}))}(this,e,t)},has:function(e){return this.get(e,v)!==v},hasIn:function(e){return this.getIn(e,v)!==v},isSubset:function(e){return e="function"==typeof e.includes?e:n(e),this.every((function(t){return e.includes(t)}))},isSuperset:function(e){return(e="function"==typeof e.isSubset?e:n(e)).isSubset(this)},keyOf:function(e){return this.findKey((function(t){return ae(t,e)}))},keySeq:function(){return this.toSeq().map(Cn).toIndexedSeq()},last:function(){return this.toSeq().reverse().first()},lastKeyOf:function(e){return this.toKeyedSeq().reverse().keyOf(e)},max:function(e){return Lt(this,e)},maxBy:function(e,t){return Lt(this,t,e)},min:function(e){return Lt(this,e?An(e):Tn)},minBy:function(e,t){return Lt(this,t?An(t):Tn,e)},rest:function(){return this.slice(1)},skip:function(e){return this.slice(Math.max(0,e))},skipLast:function(e){return Ut(this,this.toSeq().reverse().skip(e).reverse())},skipWhile:function(e,t){return Ut(this,Ft(this,e,t,!0))},skipUntil:function(e,t){return this.skipWhile(kn(e),t)},sortBy:function(e,t){return Ut(this,Nt(this,t,e))},take:function(e){return this.slice(0,Math.max(0,e))},takeLast:function(e){return Ut(this,this.toSeq().reverse().take(e).reverse())},takeWhile:function(e,t){return Ut(this,function(e,t,n){var r=Ht(e);return r.__iterateUncached=function(r,o){var i=this;if(o)return this.cacheResult().__iterate(r,o);var a=0;return e.__iterate((function(e,o,u){return t.call(n,e,o,u)&&++a&&r(e,o,i)})),a},r.__iteratorUncached=function(r,o){var i=this;if(o)return this.cacheResult().__iterator(r,o);var a=e.__iterator(2,o),u=!0;return new M((function(){if(!u)return{value:void 0,done:!0};var e=a.next();if(e.done)return e;var o=e.value,s=o[0],c=o[1];return t.call(n,c,s,i)?2===r?e:F(r,s,c,e):(u=!1,{value:void 0,done:!0})}))},r}(this,e,t))},takeUntil:function(e,t){return this.takeWhile(kn(e),t)},valueSeq:function(){return this.toIndexedSeq()},hashCode:function(){return this.__hash||(this.__hash=function(e){if(e.size===1/0)return 0;var t=l(e),n=u(e),r=t?1:0;return function(e,t){return t=ve(t,3432918353),t=ve(t<<15|t>>>-15,461845907),t=ve(t<<13|t>>>-13,5),t=ve((t=(t+3864292196|0)^e)^t>>>16,2246822507),t=ye((t=ve(t^t>>>13,3266489909))^t>>>16)}(e.__iterate(n?t?function(e,t){r=31*r+Dn(be(e),be(t))|0}:function(e,t){r=r+Dn(be(e),be(t))|0}:t?function(e){r=31*r+be(e)|0}:function(e){r=r+be(e)|0}),r)}(this))}});var xn=n.prototype;xn[f]=!0,xn[D]=xn.values,xn.__toJS=xn.toArray,xn.__toStringMapper=Pn,xn.inspect=xn.toSource=function(){return this.toString()},xn.chain=xn.flatMap,xn.contains=xn.includes,En(r,{flip:function(){return Ut(this,Pt(this))},mapEntries:function(e,t){var n=this,r=0;return Ut(this,this.toSeq().map((function(o,i){return e.call(t,[i,o],r++,n)})).fromEntrySeq())},mapKeys:function(e,t){var n=this;return Ut(this,this.toSeq().flip().map((function(r,o){return e.call(t,r,o,n)})).flip())}});var Sn=r.prototype;function Cn(e,t){return t}function jn(e,t){return[t,e]}function kn(e){return function(){return!e.apply(this,arguments)}}function An(e){return function(){return-e.apply(this,arguments)}}function Pn(e){return"string"==typeof e?JSON.stringify(e):String(e)}function In(){return _(arguments)}function Tn(e,t){return e<t?1:e>t?-1:0}function Dn(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}return Sn[p]=!0,Sn[D]=xn.entries,Sn.__toJS=xn.toObject,Sn.__toStringMapper=function(e,t){return JSON.stringify(t)+": "+Pn(e)},En(o,{toKeyedSeq:function(){return new Ct(this,!1)},filter:function(e,t){return Ut(this,Dt(this,e,t,!1))},findIndex:function(e,t){var n=this.findEntry(e,t);return n?n[0]:-1},indexOf:function(e){var t=this.keyOf(e);return void 0===t?-1:t},lastIndexOf:function(e){var t=this.lastKeyOf(e);return void 0===t?-1:t},reverse:function(){return Ut(this,Tt(this,!1))},slice:function(e,t){return Ut(this,Mt(this,e,t,!1))},splice:function(e,t){var n=arguments.length;if(t=Math.max(0|t,0),0===n||2===n&&!t)return this;e=C(e,e<0?this.count():this.size);var r=this.slice(0,e);return Ut(this,1===n?r:r.concat(_(arguments,2),this.slice(e+t)))},findLastIndex:function(e,t){var n=this.findLastEntry(e,t);return n?n[0]:-1},first:function(){return this.get(0)},flatten:function(e){return Ut(this,zt(this,e,!1))},get:function(e,t){return(e=E(this,e))<0||this.size===1/0||void 0!==this.size&&e>this.size?t:this.find((function(t,n){return n===e}),void 0,t)},has:function(e){return(e=E(this,e))>=0&&(void 0!==this.size?this.size===1/0||e<this.size:-1!==this.indexOf(e))},interpose:function(e){return Ut(this,function(e,t){var n=Ht(e);return n.size=e.size&&2*e.size-1,n.__iterateUncached=function(n,r){var o=this,i=0;return e.__iterate((function(e,r){return(!i||!1!==n(t,i++,o))&&!1!==n(e,i++,o)}),r),i},n.__iteratorUncached=function(n,r){var o,i=e.__iterator(1,r),a=0;return new M((function(){return(!o||a%2)&&(o=i.next()).done?o:a%2?F(n,a++,t):F(n,a++,o.value,o)}))},n}(this,e))},interleave:function(){var e=[this].concat(_(arguments)),t=qt(this.toSeq(),K.of,e),n=t.flatten(!0);return t.size&&(n.size=t.size*e.length),Ut(this,n)},keySeq:function(){return le(0,this.size)},last:function(){return this.get(-1)},skipWhile:function(e,t){return Ut(this,Ft(this,e,t,!1))},zip:function(){var e=[this].concat(_(arguments));return Ut(this,qt(this,In,e))},zipWith:function(e){var t=_(arguments);return t[0]=this,Ut(this,qt(this,e,t))}}),o.prototype[h]=!0,o.prototype[d]=!0,En(i,{get:function(e,t){return this.has(e)?e:t},includes:function(e){return this.has(e)},keySeq:function(){return this.valueSeq()}}),i.prototype.has=xn.includes,i.prototype.contains=i.prototype.includes,En(V,r.prototype),En(K,o.prototype),En(W,i.prototype),En(pe,r.prototype),En(he,o.prototype),En(de,i.prototype),{Iterable:n,Seq:U,Collection:fe,Map:Pe,OrderedMap:_t,List:ot,Stack:yn,Set:tn,OrderedSet:ln,Record:Jt,Range:le,Repeat:se,is:ae,fromJS:re}}()},,,function(e,t,n){"use strict";var r=n(75),o=n.n(r),i=n(34),a=n.n(i),u=n(2),s=n.n(u),c=n(0),l=n.n(c),f=n(20),p=function(e){var t=e.onMouseDown;return l.a.createElement("span",{className:"Select-arrow",onMouseDown:t})};p.propTypes={onMouseDown:s.a.func};var h=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}],d=function(e){for(var t=0;t<h.length;t++)e=e.replace(h[t].letters,h[t].base);return e},v=function(e){return null!=e&&""!==e},y=function(e,t,n,r){return r.ignoreAccents&&(t=d(t)),r.ignoreCase&&(t=t.toLowerCase()),r.trimFilter&&(t=t.replace(/^\s+|\s+$/g,"")),n&&(n=n.map((function(e){return e[r.valueKey]}))),e.filter((function(e){if(n&&n.indexOf(e[r.valueKey])>-1)return!1;if(r.filterOption)return r.filterOption.call(void 0,e,t);if(!t)return!0;var o=e[r.valueKey],i=e[r.labelKey],a=v(o),u=v(i);if(!a&&!u)return!1;var s=a?String(o):null,c=u?String(i):null;return r.ignoreAccents&&(s&&"label"!==r.matchProp&&(s=d(s)),c&&"value"!==r.matchProp&&(c=d(c))),r.ignoreCase&&(s&&"label"!==r.matchProp&&(s=s.toLowerCase()),c&&"value"!==r.matchProp&&(c=c.toLowerCase())),"start"===r.matchPos?s&&"label"!==r.matchProp&&s.substr(0,t.length)===t||c&&"value"!==r.matchProp&&c.substr(0,t.length)===t:s&&"label"!==r.matchProp&&s.indexOf(t)>=0||c&&"value"!==r.matchProp&&c.indexOf(t)>=0}))},b=function(e){var t=e.focusedOption,n=e.focusOption,r=e.inputValue,o=e.instancePrefix,i=e.onFocus,u=e.onOptionRef,s=e.onSelect,c=e.optionClassName,f=e.optionComponent,p=e.optionRenderer,h=e.options,d=e.removeValue,v=e.selectValue,y=e.valueArray,b=e.valueKey,g=f;return h.map((function(e,f){var h=y&&y.some((function(t){return t[b]===e[b]})),m=e===t,w=a()(c,{"Select-option":!0,"is-selected":h,"is-focused":m,"is-disabled":e.disabled});return l.a.createElement(g,{className:w,focusOption:n,inputValue:r,instancePrefix:o,isDisabled:e.disabled,isFocused:m,isSelected:h,key:"option-"+f+"-"+e[b],onFocus:i,onSelect:s,option:e,optionIndex:f,ref:function(e){u(e,m)},removeValue:d,selectValue:v},p(e,f,r))}))};b.propTypes={focusOption:s.a.func,focusedOption:s.a.object,inputValue:s.a.string,instancePrefix:s.a.string,onFocus:s.a.func,onOptionRef:s.a.func,onSelect:s.a.func,optionClassName:s.a.string,optionComponent:s.a.func,optionRenderer:s.a.func,options:s.a.array,removeValue:s.a.func,selectValue:s.a.func,valueArray:s.a.array,valueKey:s.a.string};var g=function(e){e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName&&"href"in e.target&&(e.target.target?window.open(e.target.href,e.target.target):window.location.href=e.target.href)},m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w=(function(){function e(e){this.value=e}function t(t){var n,r;function o(n,r){try{var a=t[n](r),u=a.value;u instanceof e?Promise.resolve(u.value).then((function(e){o("next",e)}),(function(e){o("throw",e)})):i(a.done?"return":"normal",a.value)}catch(e){i("throw",e)}}function i(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?o(n.key,n.arg):r=null}this._invoke=function(e,t){return new Promise((function(i,a){var u={key:e,arg:t,resolve:i,reject:a,next:null};r?r=r.next=u:(n=r=u,o(e,t))}))},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),O=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},S=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},C=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},j=function(e){function t(e){w(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMouseDown=n.handleMouseDown.bind(n),n.handleMouseEnter=n.handleMouseEnter.bind(n),n.handleMouseMove=n.handleMouseMove.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.onFocus=n.onFocus.bind(n),n}return x(t,e),_(t,[{key:"handleMouseDown",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onSelect(this.props.option,e)}},{key:"handleMouseEnter",value:function(e){this.onFocus(e)}},{key:"handleMouseMove",value:function(e){this.onFocus(e)}},{key:"handleTouchEnd",value:function(e){this.dragging||this.handleMouseDown(e)}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"onFocus",value:function(e){this.props.isFocused||this.props.onFocus(this.props.option,e)}},{key:"render",value:function(){var e=this.props,t=e.option,n=e.instancePrefix,r=e.optionIndex,o=a()(this.props.className,t.className);return t.disabled?l.a.createElement("div",{className:o,onMouseDown:g,onClick:g},this.props.children):l.a.createElement("div",{className:o,style:t.style,role:"option","aria-label":t.label,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onMouseMove:this.handleMouseMove,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,id:n+"-option-"+r,title:t.title},this.props.children)}}]),t}(l.a.Component);j.propTypes={children:s.a.node,className:s.a.string,instancePrefix:s.a.string.isRequired,isDisabled:s.a.bool,isFocused:s.a.bool,isSelected:s.a.bool,onFocus:s.a.func,onSelect:s.a.func,onUnfocus:s.a.func,option:s.a.object.isRequired,optionIndex:s.a.number};var k=function(e){function t(e){w(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleMouseDown=n.handleMouseDown.bind(n),n.onRemove=n.onRemove.bind(n),n.handleTouchEndRemove=n.handleTouchEndRemove.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n}return x(t,e),_(t,[{key:"handleMouseDown",value:function(e){if("mousedown"!==e.type||0===e.button)return this.props.onClick?(e.stopPropagation(),void this.props.onClick(this.props.value,e)):void(this.props.value.href&&e.stopPropagation())}},{key:"onRemove",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onRemove(this.props.value)}},{key:"handleTouchEndRemove",value:function(e){this.dragging||this.onRemove(e)}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"renderRemoveIcon",value:function(){if(!this.props.disabled&&this.props.onRemove)return l.a.createElement("span",{className:"Select-value-icon","aria-hidden":"true",onMouseDown:this.onRemove,onTouchEnd:this.handleTouchEndRemove,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove},"×")}},{key:"renderLabel",value:function(){return this.props.onClick||this.props.value.href?l.a.createElement("a",{className:"Select-value-label",href:this.props.value.href,target:this.props.value.target,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleMouseDown},this.props.children):l.a.createElement("span",{className:"Select-value-label",role:"option","aria-selected":"true",id:this.props.id},this.props.children)}},{key:"render",value:function(){return l.a.createElement("div",{className:a()("Select-value",this.props.value.disabled?"Select-value-disabled":"",this.props.value.className),style:this.props.value.style,title:this.props.value.title},this.renderRemoveIcon(),this.renderLabel())}}]),t}(l.a.Component);k.propTypes={children:s.a.node,disabled:s.a.bool,id:s.a.string,onClick:s.a.func,onRemove:s.a.func,value:s.a.object.isRequired};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/react-select
*/
var A=function(e){return"string"==typeof e?e:null!==e&&JSON.stringify(e)||""},P=s.a.oneOfType([s.a.string,s.a.node]),I=s.a.oneOfType([s.a.string,s.a.number]),T=1,D=function(e,t){var n=void 0===e?"undefined":m(e);if("string"!==n&&"number"!==n&&"boolean"!==n)return e;var r=t.options,o=t.valueKey;if(r)for(var i=0;i<r.length;i++)if(String(r[i][o])===String(e))return r[i]},M=function(e,t){return!e||(t?0===e.length:0===Object.keys(e).length)},F=function(e){function t(e){w(this,t);var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return["clearValue","focusOption","getOptionLabel","handleInputBlur","handleInputChange","handleInputFocus","handleInputValueChange","handleKeyDown","handleMenuScroll","handleMouseDown","handleMouseDownOnArrow","handleMouseDownOnMenu","handleTouchEnd","handleTouchEndClearValue","handleTouchMove","handleTouchOutside","handleTouchStart","handleValueClick","onOptionRef","removeValue","selectValue"].forEach((function(e){return n[e]=n[e].bind(n)})),n.state={inputValue:"",isFocused:!1,isOpen:!1,isPseudoFocused:!1,required:!1},n}return x(t,e),_(t,[{key:"componentWillMount",value:function(){this._instancePrefix="react-select-"+(this.props.instanceId||++T)+"-";var e=this.getValueArray(this.props.value);this.props.required&&this.setState({required:M(e[0],this.props.multi)})}},{key:"componentDidMount",value:function(){void 0!==this.props.autofocus&&"undefined"!=typeof console&&console.warn("Warning: The autofocus prop has changed to autoFocus, support will be removed after react-select@1.0"),(this.props.autoFocus||this.props.autofocus)&&this.focus()}},{key:"componentWillReceiveProps",value:function(e){var t=this.getValueArray(e.value,e);e.required?this.setState({required:M(t[0],e.multi)}):this.props.required&&this.setState({required:!1}),this.state.inputValue&&this.props.value!==e.value&&e.onSelectResetsInput&&this.setState({inputValue:this.handleInputValueChange("")})}},{key:"componentDidUpdate",value:function(e,t){if(this.menu&&this.focused&&this.state.isOpen&&!this.hasScrolledToOption){var n=Object(f.findDOMNode)(this.focused),r=Object(f.findDOMNode)(this.menu),o=r.scrollTop,i=o+r.offsetHeight,a=n.offsetTop,u=a+n.offsetHeight;(o>a||i<u)&&(r.scrollTop=n.offsetTop),this.hasScrolledToOption=!0}else this.state.isOpen||(this.hasScrolledToOption=!1);if(this._scrollToFocusedOptionOnUpdate&&this.focused&&this.menu){this._scrollToFocusedOptionOnUpdate=!1;var s=Object(f.findDOMNode)(this.focused),c=Object(f.findDOMNode)(this.menu),l=s.getBoundingClientRect(),p=c.getBoundingClientRect();l.bottom>p.bottom?c.scrollTop=s.offsetTop+s.clientHeight-c.offsetHeight:l.top<p.top&&(c.scrollTop=s.offsetTop)}if(this.props.scrollMenuIntoView&&this.menuContainer){var h=this.menuContainer.getBoundingClientRect();window.innerHeight<h.bottom+this.props.menuBuffer&&window.scrollBy(0,h.bottom+this.props.menuBuffer-window.innerHeight)}if(e.disabled!==this.props.disabled&&(this.setState({isFocused:!1}),this.closeMenu()),t.isOpen!==this.state.isOpen){this.toggleTouchOutsideEvent(this.state.isOpen);var d=this.state.isOpen?this.props.onOpen:this.props.onClose;d&&d()}}},{key:"componentWillUnmount",value:function(){this.toggleTouchOutsideEvent(!1)}},{key:"toggleTouchOutsideEvent",value:function(e){var t=e?document.addEventListener?"addEventListener":"attachEvent":document.removeEventListener?"removeEventListener":"detachEvent",n=document.addEventListener?"":"on";document[t](n+"touchstart",this.handleTouchOutside),document[t](n+"mousedown",this.handleTouchOutside)}},{key:"handleTouchOutside",value:function(e){this.wrapper&&!this.wrapper.contains(e.target)&&this.closeMenu()}},{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"blurInput",value:function(){this.input&&this.input.blur()}},{key:"handleTouchMove",value:function(){this.dragging=!0}},{key:"handleTouchStart",value:function(){this.dragging=!1}},{key:"handleTouchEnd",value:function(e){this.dragging||this.handleMouseDown(e)}},{key:"handleTouchEndClearValue",value:function(e){this.dragging||this.clearValue(e)}},{key:"handleMouseDown",value:function(e){if(!(this.props.disabled||"mousedown"===e.type&&0!==e.button))if("INPUT"!==e.target.tagName){if(e.preventDefault(),!this.props.searchable)return this.focus(),this.setState({isOpen:!this.state.isOpen,focusedOption:null});if(this.state.isFocused){this.focus();var t=this.input,n=!0;"function"==typeof t.getInput&&(t=t.getInput()),t.value="",this._focusAfterClear&&(n=!1,this._focusAfterClear=!1),this.setState({isOpen:n,isPseudoFocused:!1,focusedOption:null})}else this._openAfterFocus=this.props.openOnClick,this.focus(),this.setState({focusedOption:null})}else this.state.isFocused?this.state.isOpen||this.setState({isOpen:!0,isPseudoFocused:!1,focusedOption:null}):(this._openAfterFocus=this.props.openOnClick,this.focus())}},{key:"handleMouseDownOnArrow",value:function(e){this.props.disabled||"mousedown"===e.type&&0!==e.button||(this.state.isOpen?(e.stopPropagation(),e.preventDefault(),this.closeMenu()):this.setState({isOpen:!0}))}},{key:"handleMouseDownOnMenu",value:function(e){this.props.disabled||"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this._openAfterFocus=!0,this.focus())}},{key:"closeMenu",value:function(){this.props.onCloseResetsInput?this.setState({inputValue:this.handleInputValueChange(""),isOpen:!1,isPseudoFocused:this.state.isFocused&&!this.props.multi}):this.setState({isOpen:!1,isPseudoFocused:this.state.isFocused&&!this.props.multi}),this.hasScrolledToOption=!1}},{key:"handleInputFocus",value:function(e){if(!this.props.disabled){var t=this.state.isOpen||this._openAfterFocus||this.props.openOnFocus;t=!this._focusAfterClear&&t,this.props.onFocus&&this.props.onFocus(e),this.setState({isFocused:!0,isOpen:!!t}),this._focusAfterClear=!1,this._openAfterFocus=!1}}},{key:"handleInputBlur",value:function(e){if(!this.menu||this.menu!==document.activeElement&&!this.menu.contains(document.activeElement)){this.props.onBlur&&this.props.onBlur(e);var t={isFocused:!1,isOpen:!1,isPseudoFocused:!1};this.props.onBlurResetsInput&&(t.inputValue=this.handleInputValueChange("")),this.setState(t)}else this.focus()}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.state.inputValue!==e.target.value&&(t=this.handleInputValueChange(t)),this.setState({inputValue:t,isOpen:!0,isPseudoFocused:!1})}},{key:"setInputValue",value:function(e){if(this.props.onInputChange){var t=this.props.onInputChange(e);null!=t&&"object"!==(void 0===t?"undefined":m(t))&&(e=""+t)}this.setState({inputValue:e})}},{key:"handleInputValueChange",value:function(e){if(this.props.onInputChange){var t=this.props.onInputChange(e);null!=t&&"object"!==(void 0===t?"undefined":m(t))&&(e=""+t)}return e}},{key:"handleKeyDown",value:function(e){if(!(this.props.disabled||"function"==typeof this.props.onInputKeyDown&&(this.props.onInputKeyDown(e),e.defaultPrevented)))switch(e.keyCode){case 8:!this.state.inputValue&&this.props.backspaceRemoves&&(e.preventDefault(),this.popValue());break;case 9:if(e.shiftKey||!this.state.isOpen||!this.props.tabSelectsValue)break;e.preventDefault(),this.selectFocusedOption();break;case 13:e.preventDefault(),e.stopPropagation(),this.state.isOpen?this.selectFocusedOption():this.focusNextOption();break;case 27:e.preventDefault(),this.state.isOpen?(this.closeMenu(),e.stopPropagation()):this.props.clearable&&this.props.escapeClearsValue&&(this.clearValue(e),e.stopPropagation());break;case 32:if(this.props.searchable)break;if(e.preventDefault(),!this.state.isOpen){this.focusNextOption();break}e.stopPropagation(),this.selectFocusedOption();break;case 38:e.preventDefault(),this.focusPreviousOption();break;case 40:e.preventDefault(),this.focusNextOption();break;case 33:e.preventDefault(),this.focusPageUpOption();break;case 34:e.preventDefault(),this.focusPageDownOption();break;case 35:if(e.shiftKey)break;e.preventDefault(),this.focusEndOption();break;case 36:if(e.shiftKey)break;e.preventDefault(),this.focusStartOption();break;case 46:!this.state.inputValue&&this.props.deleteRemoves&&(e.preventDefault(),this.popValue())}}},{key:"handleValueClick",value:function(e,t){this.props.onValueClick&&this.props.onValueClick(e,t)}},{key:"handleMenuScroll",value:function(e){if(this.props.onMenuScrollToBottom){var t=e.target;t.scrollHeight>t.offsetHeight&&t.scrollHeight-t.offsetHeight-t.scrollTop<=0&&this.props.onMenuScrollToBottom()}}},{key:"getOptionLabel",value:function(e){return e[this.props.labelKey]}},{key:"getValueArray",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n="object"===(void 0===t?"undefined":m(t))?t:this.props;if(n.multi){if("string"==typeof e&&(e=e.split(n.delimiter)),!Array.isArray(e)){if(null==e)return[];e=[e]}return e.map((function(e){return D(e,n)})).filter((function(e){return e}))}var r=D(e,n);return r?[r]:[]}},{key:"setValue",value:function(e){var t=this;if(this.props.autoBlur&&this.blurInput(),this.props.required){var n=M(e,this.props.multi);this.setState({required:n})}this.props.simpleValue&&e&&(e=this.props.multi?e.map((function(e){return e[t.props.valueKey]})).join(this.props.delimiter):e[this.props.valueKey]),this.props.onChange&&this.props.onChange(e)}},{key:"selectValue",value:function(e){var t=this;this.props.closeOnSelect&&(this.hasScrolledToOption=!1);var n=this.props.onSelectResetsInput?"":this.state.inputValue;this.props.multi?this.setState({focusedIndex:null,inputValue:this.handleInputValueChange(n),isOpen:!this.props.closeOnSelect},(function(){t.getValueArray(t.props.value).some((function(n){return n[t.props.valueKey]===e[t.props.valueKey]}))?t.removeValue(e):t.addValue(e)})):this.setState({inputValue:this.handleInputValueChange(n),isOpen:!this.props.closeOnSelect,isPseudoFocused:this.state.isFocused},(function(){t.setValue(e)}))}},{key:"addValue",value:function(e){var t=this.getValueArray(this.props.value),n=this._visibleOptions.filter((function(e){return!e.disabled})),r=n.indexOf(e);this.setValue(t.concat(e)),this.props.closeOnSelect&&(n.length-1===r?this.focusOption(n[r-1]):n.length>r&&this.focusOption(n[r+1]))}},{key:"popValue",value:function(){var e=this.getValueArray(this.props.value);e.length&&!1!==e[e.length-1].clearableValue&&this.setValue(this.props.multi?e.slice(0,e.length-1):null)}},{key:"removeValue",value:function(e){var t=this,n=this.getValueArray(this.props.value);this.setValue(n.filter((function(n){return n[t.props.valueKey]!==e[t.props.valueKey]}))),this.focus()}},{key:"clearValue",value:function(e){e&&"mousedown"===e.type&&0!==e.button||(e.preventDefault(),this.setValue(this.getResetValue()),this.setState({inputValue:this.handleInputValueChange(""),isOpen:!1},this.focus),this._focusAfterClear=!0)}},{key:"getResetValue",value:function(){return void 0!==this.props.resetValue?this.props.resetValue:this.props.multi?[]:null}},{key:"focusOption",value:function(e){this.setState({focusedOption:e})}},{key:"focusNextOption",value:function(){this.focusAdjacentOption("next")}},{key:"focusPreviousOption",value:function(){this.focusAdjacentOption("previous")}},{key:"focusPageUpOption",value:function(){this.focusAdjacentOption("page_up")}},{key:"focusPageDownOption",value:function(){this.focusAdjacentOption("page_down")}},{key:"focusStartOption",value:function(){this.focusAdjacentOption("start")}},{key:"focusEndOption",value:function(){this.focusAdjacentOption("end")}},{key:"focusAdjacentOption",value:function(e){var t=this._visibleOptions.map((function(e,t){return{option:e,index:t}})).filter((function(e){return!e.option.disabled}));if(this._scrollToFocusedOptionOnUpdate=!0,!this.state.isOpen){var n={focusedOption:this._focusedOption||(t.length?t["next"===e?0:t.length-1].option:null),isOpen:!0};return this.props.onSelectResetsInput&&(n.inputValue=""),void this.setState(n)}if(t.length){for(var r=-1,o=0;o<t.length;o++)if(this._focusedOption===t[o].option){r=o;break}if("next"===e&&-1!==r)r=(r+1)%t.length;else if("previous"===e)r>0?r-=1:r=t.length-1;else if("start"===e)r=0;else if("end"===e)r=t.length-1;else if("page_up"===e){var i=r-this.props.pageSize;r=i<0?0:i}else if("page_down"===e){var a=r+this.props.pageSize;r=a>t.length-1?t.length-1:a}-1===r&&(r=0),this.setState({focusedIndex:t[r].index,focusedOption:t[r].option})}}},{key:"getFocusedOption",value:function(){return this._focusedOption}},{key:"selectFocusedOption",value:function(){if(this._focusedOption)return this.selectValue(this._focusedOption)}},{key:"renderLoading",value:function(){if(this.props.isLoading)return l.a.createElement("span",{className:"Select-loading-zone","aria-hidden":"true"},l.a.createElement("span",{className:"Select-loading"}))}},{key:"renderValue",value:function(e,t){var n=this,r=this.props.valueRenderer||this.getOptionLabel,o=this.props.valueComponent;if(!e.length)return function(e,t,n){var r=e.inputValue,o=e.isPseudoFocused,i=e.isFocused,a=t.onSelectResetsInput;return!r||!a&&!n&&!o&&!i}(this.state,this.props,t)?l.a.createElement("div",{className:"Select-placeholder"},this.props.placeholder):null;var i,a,u,s,c,f,p=this.props.onValueClick?this.handleValueClick:null;return this.props.multi?e.map((function(t,i){return l.a.createElement(o,{disabled:n.props.disabled||!1===t.clearableValue,id:n._instancePrefix+"-value-"+i,instancePrefix:n._instancePrefix,key:"value-"+i+"-"+t[n.props.valueKey],onClick:p,onRemove:n.removeValue,placeholder:n.props.placeholder,value:t,values:e},r(t,i),l.a.createElement("span",{className:"Select-aria-only"}," "))})):(i=this.state,a=this.props,u=i.inputValue,s=i.isPseudoFocused,c=i.isFocused,f=a.onSelectResetsInput,u&&(f||!c&&s||c&&!s)?void 0:(t&&(p=null),l.a.createElement(o,{disabled:this.props.disabled,id:this._instancePrefix+"-value-item",instancePrefix:this._instancePrefix,onClick:p,placeholder:this.props.placeholder,value:e[0]},r(e[0]))))}},{key:"renderInput",value:function(e,t){var n,r=this,i=a()("Select-input",this.props.inputProps.className),u=this.state.isOpen,s=a()((O(n={},this._instancePrefix+"-list",u),O(n,this._instancePrefix+"-backspace-remove-message",this.props.multi&&!this.props.disabled&&this.state.isFocused&&!this.state.inputValue),n)),c=this.state.inputValue;!c||this.props.onSelectResetsInput||this.state.isFocused||(c="");var f=E({},this.props.inputProps,{"aria-activedescendant":u?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-describedby":this.props["aria-describedby"],"aria-expanded":""+u,"aria-haspopup":""+u,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-owns":s,onBlur:this.handleInputBlur,onChange:this.handleInputChange,onFocus:this.handleInputFocus,ref:function(e){return r.input=e},role:"combobox",required:this.state.required,tabIndex:this.props.tabIndex,value:c});if(this.props.inputRenderer)return this.props.inputRenderer(f);if(this.props.disabled||!this.props.searchable){var p=S(this.props.inputProps,[]),h=a()(O({},this._instancePrefix+"-list",u));return l.a.createElement("div",E({},p,{"aria-expanded":u,"aria-owns":h,"aria-activedescendant":u?this._instancePrefix+"-option-"+t:this._instancePrefix+"-value","aria-disabled":""+this.props.disabled,"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],className:i,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,ref:function(e){return r.input=e},role:"combobox",style:{border:0,width:1,display:"inline-block"},tabIndex:this.props.tabIndex||0}))}return this.props.autosize?l.a.createElement(o.a,E({id:this.props.id},f,{className:i,minWidth:"5"})):l.a.createElement("div",{className:i,key:"input-wrap",style:{display:"inline-block"}},l.a.createElement("input",E({id:this.props.id},f)))}},{key:"renderClear",value:function(){var e=this.getValueArray(this.props.value);if(this.props.clearable&&e.length&&!this.props.disabled&&!this.props.isLoading){var t=this.props.multi?this.props.clearAllText:this.props.clearValueText,n=this.props.clearRenderer();return l.a.createElement("span",{"aria-label":t,className:"Select-clear-zone",onMouseDown:this.clearValue,onTouchEnd:this.handleTouchEndClearValue,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,title:t},n)}}},{key:"renderArrow",value:function(){if(this.props.arrowRenderer){var e=this.handleMouseDownOnArrow,t=this.state.isOpen,n=this.props.arrowRenderer({onMouseDown:e,isOpen:t});return n?l.a.createElement("span",{className:"Select-arrow-zone",onMouseDown:e},n):null}}},{key:"filterOptions",value:function(e){var t=this.state.inputValue,n=this.props.options||[];if(this.props.filterOptions){var r="function"==typeof this.props.filterOptions?this.props.filterOptions:y;return r(n,t,e,{filterOption:this.props.filterOption,ignoreAccents:this.props.ignoreAccents,ignoreCase:this.props.ignoreCase,labelKey:this.props.labelKey,matchPos:this.props.matchPos,matchProp:this.props.matchProp,trimFilter:this.props.trimFilter,valueKey:this.props.valueKey})}return n}},{key:"onOptionRef",value:function(e,t){t&&(this.focused=e)}},{key:"renderMenu",value:function(e,t,n){return e&&e.length?this.props.menuRenderer({focusedOption:n,focusOption:this.focusOption,inputValue:this.state.inputValue,instancePrefix:this._instancePrefix,labelKey:this.props.labelKey,onFocus:this.focusOption,onOptionRef:this.onOptionRef,onSelect:this.selectValue,optionClassName:this.props.optionClassName,optionComponent:this.props.optionComponent,optionRenderer:this.props.optionRenderer||this.getOptionLabel,options:e,removeValue:this.removeValue,selectValue:this.selectValue,valueArray:t,valueKey:this.props.valueKey}):this.props.noResultsText?l.a.createElement("div",{className:"Select-noresults"},this.props.noResultsText):null}},{key:"renderHiddenField",value:function(e){var t=this;if(this.props.name){if(this.props.joinValues){var n=e.map((function(e){return A(e[t.props.valueKey])})).join(this.props.delimiter);return l.a.createElement("input",{disabled:this.props.disabled,name:this.props.name,ref:function(e){return t.value=e},type:"hidden",value:n})}return e.map((function(e,n){return l.a.createElement("input",{disabled:t.props.disabled,key:"hidden."+n,name:t.props.name,ref:"value"+n,type:"hidden",value:A(e[t.props.valueKey])})}))}}},{key:"getFocusableOptionIndex",value:function(e){var t=this._visibleOptions;if(!t.length)return null;var n=this.props.valueKey,r=this.state.focusedOption||e;if(r&&!r.disabled){var o=-1;if(t.some((function(e,t){var i=e[n]===r[n];return i&&(o=t),i})),-1!==o)return o}for(var i=0;i<t.length;i++)if(!t[i].disabled)return i;return null}},{key:"renderOuter",value:function(e,t,n){var r=this,o=this.renderMenu(e,t,n);return o?l.a.createElement("div",{ref:function(e){return r.menuContainer=e},className:"Select-menu-outer",style:this.props.menuContainerStyle},l.a.createElement("div",{className:"Select-menu",id:this._instancePrefix+"-list",onMouseDown:this.handleMouseDownOnMenu,onScroll:this.handleMenuScroll,ref:function(e){return r.menu=e},role:"listbox",style:this.props.menuStyle,tabIndex:-1},o)):null}},{key:"render",value:function(){var e=this,t=this.getValueArray(this.props.value),n=this._visibleOptions=this.filterOptions(this.props.multi&&this.props.removeSelected?t:null),r=this.state.isOpen;this.props.multi&&!n.length&&t.length&&!this.state.inputValue&&(r=!1);var o=this.getFocusableOptionIndex(t[0]),i=null;i=this._focusedOption=null!==o?n[o]:null;var u=a()("Select",this.props.className,{"has-value":t.length,"is-clearable":this.props.clearable,"is-disabled":this.props.disabled,"is-focused":this.state.isFocused,"is-loading":this.props.isLoading,"is-open":r,"is-pseudo-focused":this.state.isPseudoFocused,"is-searchable":this.props.searchable,"Select--multi":this.props.multi,"Select--rtl":this.props.rtl,"Select--single":!this.props.multi}),s=null;return this.props.multi&&!this.props.disabled&&t.length&&!this.state.inputValue&&this.state.isFocused&&this.props.backspaceRemoves&&(s=l.a.createElement("span",{id:this._instancePrefix+"-backspace-remove-message",className:"Select-aria-only","aria-live":"assertive"},this.props.backspaceToRemoveMessage.replace("{label}",t[t.length-1][this.props.labelKey]))),l.a.createElement("div",{ref:function(t){return e.wrapper=t},className:u,style:this.props.wrapperStyle},this.renderHiddenField(t),l.a.createElement("div",{ref:function(t){return e.control=t},className:"Select-control",onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchEnd:this.handleTouchEnd,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,style:this.props.style},l.a.createElement("div",{className:"Select-multi-value-wrapper",id:this._instancePrefix+"-value"},this.renderValue(t,r),this.renderInput(t,o)),s,this.renderLoading(),this.renderClear(),this.renderArrow()),r?this.renderOuter(n,t,i):null)}}]),t}(l.a.Component);F.propTypes={"aria-describedby":s.a.string,"aria-label":s.a.string,"aria-labelledby":s.a.string,arrowRenderer:s.a.func,autoBlur:s.a.bool,autoFocus:s.a.bool,autofocus:s.a.bool,autosize:s.a.bool,backspaceRemoves:s.a.bool,backspaceToRemoveMessage:s.a.string,className:s.a.string,clearAllText:P,clearRenderer:s.a.func,clearValueText:P,clearable:s.a.bool,closeOnSelect:s.a.bool,deleteRemoves:s.a.bool,delimiter:s.a.string,disabled:s.a.bool,escapeClearsValue:s.a.bool,filterOption:s.a.func,filterOptions:s.a.any,id:s.a.string,ignoreAccents:s.a.bool,ignoreCase:s.a.bool,inputProps:s.a.object,inputRenderer:s.a.func,instanceId:s.a.string,isLoading:s.a.bool,joinValues:s.a.bool,labelKey:s.a.string,matchPos:s.a.string,matchProp:s.a.string,menuBuffer:s.a.number,menuContainerStyle:s.a.object,menuRenderer:s.a.func,menuStyle:s.a.object,multi:s.a.bool,name:s.a.string,noResultsText:P,onBlur:s.a.func,onBlurResetsInput:s.a.bool,onChange:s.a.func,onClose:s.a.func,onCloseResetsInput:s.a.bool,onFocus:s.a.func,onInputChange:s.a.func,onInputKeyDown:s.a.func,onMenuScrollToBottom:s.a.func,onOpen:s.a.func,onSelectResetsInput:s.a.bool,onValueClick:s.a.func,openOnClick:s.a.bool,openOnFocus:s.a.bool,optionClassName:s.a.string,optionComponent:s.a.func,optionRenderer:s.a.func,options:s.a.array,pageSize:s.a.number,placeholder:P,removeSelected:s.a.bool,required:s.a.bool,resetValue:s.a.any,rtl:s.a.bool,scrollMenuIntoView:s.a.bool,searchable:s.a.bool,simpleValue:s.a.bool,style:s.a.object,tabIndex:I,tabSelectsValue:s.a.bool,trimFilter:s.a.bool,value:s.a.any,valueComponent:s.a.func,valueKey:s.a.string,valueRenderer:s.a.func,wrapperStyle:s.a.object},F.defaultProps={arrowRenderer:p,autosize:!0,backspaceRemoves:!0,backspaceToRemoveMessage:"Press backspace to remove {label}",clearable:!0,clearAllText:"Clear all",clearRenderer:function(){return l.a.createElement("span",{className:"Select-clear",dangerouslySetInnerHTML:{__html:"&times;"}})},clearValueText:"Clear value",closeOnSelect:!0,deleteRemoves:!0,delimiter:",",disabled:!1,escapeClearsValue:!0,filterOptions:y,ignoreAccents:!0,ignoreCase:!0,inputProps:{},isLoading:!1,joinValues:!1,labelKey:"label",matchPos:"any",matchProp:"any",menuBuffer:0,menuRenderer:b,multi:!1,noResultsText:"No results found",onBlurResetsInput:!0,onCloseResetsInput:!0,onSelectResetsInput:!0,openOnClick:!0,optionComponent:j,pageSize:5,placeholder:"Select...",removeSelected:!0,required:!1,rtl:!1,scrollMenuIntoView:!0,searchable:!0,simpleValue:!1,tabSelectsValue:!0,trimFilter:!0,valueComponent:k,valueKey:"value"};var R={autoload:s.a.bool.isRequired,cache:s.a.any,children:s.a.func.isRequired,ignoreAccents:s.a.bool,ignoreCase:s.a.bool,loadOptions:s.a.func.isRequired,loadingPlaceholder:s.a.oneOfType([s.a.string,s.a.node]),multi:s.a.bool,noResultsText:s.a.oneOfType([s.a.string,s.a.node]),onChange:s.a.func,onInputChange:s.a.func,options:s.a.array.isRequired,placeholder:s.a.oneOfType([s.a.string,s.a.node]),searchPromptText:s.a.oneOfType([s.a.string,s.a.node]),value:s.a.any},z={},N={autoload:!0,cache:z,children:function(e){return l.a.createElement(F,e)},ignoreAccents:!0,ignoreCase:!0,loadingPlaceholder:"Loading...",options:[],searchPromptText:"Type to search"},L=function(e){function t(e,n){w(this,t);var r=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r._cache=e.cache===z?{}:e.cache,r.state={inputValue:"",isLoading:!1,options:e.options},r.onInputChange=r.onInputChange.bind(r),r}return x(t,e),_(t,[{key:"componentDidMount",value:function(){this.props.autoload&&this.loadOptions("")}},{key:"componentWillReceiveProps",value:function(e){e.options!==this.props.options&&this.setState({options:e.options})}},{key:"componentWillUnmount",value:function(){this._callback=null}},{key:"loadOptions",value:function(e){var t=this,n=this.props.loadOptions,r=this._cache;if(r&&Object.prototype.hasOwnProperty.call(r,e))return this._callback=null,void this.setState({isLoading:!1,options:r[e]});var o=function n(o,i){var a=i&&i.options||[];r&&(r[e]=a),n===t._callback&&(t._callback=null,t.setState({isLoading:!1,options:a}))};this._callback=o;var i=n(e,o);i&&i.then((function(e){return o(0,e)}),(function(e){return o()})),this._callback&&!this.state.isLoading&&this.setState({isLoading:!0})}},{key:"onInputChange",value:function(e){var t=this.props,n=t.ignoreAccents,r=t.ignoreCase,o=t.onInputChange,i=e;if(o){var a=o(i);null!=a&&"object"!==(void 0===a?"undefined":m(a))&&(i=""+a)}var u=i;return n&&(u=d(u)),r&&(u=u.toLowerCase()),this.setState({inputValue:i}),this.loadOptions(u),i}},{key:"noResultsText",value:function(){var e=this.props,t=e.loadingPlaceholder,n=e.noResultsText,r=e.searchPromptText,o=this.state,i=o.inputValue;return o.isLoading?t:i&&n?n:r}},{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.loadingPlaceholder,o=t.placeholder,i=this.state,a=i.isLoading,u=i.options,s={noResultsText:this.noResultsText(),placeholder:a?r:o,options:a&&r?[]:u,ref:function(t){return e.select=t}};return n(E({},this.props,s,{isLoading:a,onInputChange:this.onInputChange}))}}]),t}(c.Component);L.propTypes=R,L.defaultProps=N;var B=function(e){function t(e,n){w(this,t);var r=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.filterOptions=r.filterOptions.bind(r),r.menuRenderer=r.menuRenderer.bind(r),r.onInputKeyDown=r.onInputKeyDown.bind(r),r.onInputChange=r.onInputChange.bind(r),r.onOptionSelect=r.onOptionSelect.bind(r),r}return x(t,e),_(t,[{key:"createNewOption",value:function(){var e=this.props,t=e.isValidNewOption,n=e.newOptionCreator,r=e.onNewOptionClick,o=e.options,i=void 0===o?[]:o;if(t({label:this.inputValue})){var a=n({label:this.inputValue,labelKey:this.labelKey,valueKey:this.valueKey});this.isOptionUnique({option:a,options:i})&&(r?r(a):(i.unshift(a),this.select.selectValue(a)))}}},{key:"filterOptions",value:function(){var e=this.props,t=e.filterOptions,n=e.isValidNewOption,r=e.promptTextCreator,o=e.showNewOptionAtTop,i=(arguments.length<=2?void 0:arguments[2])||[],a=t.apply(void 0,arguments)||[];if(n({label:this.inputValue})){var u=this.props.newOptionCreator,s=u({label:this.inputValue,labelKey:this.labelKey,valueKey:this.valueKey}),c=this.isOptionUnique({option:s,options:i.concat(a)});if(c){var l=r(this.inputValue);this._createPlaceholderOption=u({label:l,labelKey:this.labelKey,valueKey:this.valueKey}),o?a.unshift(this._createPlaceholderOption):a.push(this._createPlaceholderOption)}}return a}},{key:"isOptionUnique",value:function(e){var t=e.option,n=e.options,r=this.props.isOptionUnique;return n=n||this.props.options,r({labelKey:this.labelKey,option:t,options:n,valueKey:this.valueKey})}},{key:"menuRenderer",value:function(e){var t=this.props.menuRenderer;return t(E({},e,{onSelect:this.onOptionSelect,selectValue:this.onOptionSelect}))}},{key:"onInputChange",value:function(e){var t=this.props.onInputChange;return this.inputValue=e,t&&(this.inputValue=t(e)),this.inputValue}},{key:"onInputKeyDown",value:function(e){var t=this.props,n=t.shouldKeyDownEventCreateNewOption,r=t.onInputKeyDown,o=this.select.getFocusedOption();o&&o===this._createPlaceholderOption&&n(e)?(this.createNewOption(),e.preventDefault()):r&&r(e)}},{key:"onOptionSelect",value:function(e){e===this._createPlaceholderOption?this.createNewOption():this.select.selectValue(e)}},{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.ref,r=S(t,["ref"]),o=this.props.children;return o||(o=q),o(E({},r,{allowCreate:!0,filterOptions:this.filterOptions,menuRenderer:this.menuRenderer,onInputChange:this.onInputChange,onInputKeyDown:this.onInputKeyDown,ref:function(t){e.select=t,t&&(e.labelKey=t.props.labelKey,e.valueKey=t.props.valueKey),n&&n(t)}}))}}]),t}(l.a.Component),q=function(e){return l.a.createElement(F,e)},U=function(e){var t=e.option,n=e.options,r=e.labelKey,o=e.valueKey;return!n||!n.length||0===n.filter((function(e){return e[r]===t[r]||e[o]===t[o]})).length},V=function(e){return!!e.label},K=function(e){var t=e.label,n=e.labelKey,r={};return r[e.valueKey]=t,r[n]=t,r.className="Select-create-option-placeholder",r},W=function(e){return'Create option "'+e+'"'},H=function(e){switch(e.keyCode){case 9:case 13:case 188:return!0;default:return!1}};B.isOptionUnique=U,B.isValidNewOption=V,B.newOptionCreator=K,B.promptTextCreator=W,B.shouldKeyDownEventCreateNewOption=H,B.defaultProps={filterOptions:y,isOptionUnique:U,isValidNewOption:V,menuRenderer:b,newOptionCreator:K,promptTextCreator:W,shouldKeyDownEventCreateNewOption:H,showNewOptionAtTop:!0},B.propTypes={children:s.a.func,filterOptions:s.a.any,isOptionUnique:s.a.func,isValidNewOption:s.a.func,menuRenderer:s.a.any,newOptionCreator:s.a.func,onInputChange:s.a.func,onInputKeyDown:s.a.func,onNewOptionClick:s.a.func,options:s.a.array,promptTextCreator:s.a.func,ref:s.a.func,shouldKeyDownEventCreateNewOption:s.a.func,showNewOptionAtTop:s.a.bool};var $=function(e){function t(){return w(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return x(t,e),_(t,[{key:"focus",value:function(){this.select.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement(L,this.props,(function(t){var n=t.ref,r=S(t,["ref"]),o=n;return l.a.createElement(B,r,(function(t){var n=t.ref,r=S(t,["ref"]),i=n;return e.props.children(E({},r,{ref:function(t){i(t),o(t),e.select=t}}))}))}))}}]),t}(l.a.Component);$.propTypes={children:s.a.func.isRequired},$.defaultProps={children:function(e){return l.a.createElement(F,e)}},F.Async=L,F.AsyncCreatable=$,F.Creatable=B,F.Value=k,F.Option=j,t.a=F},,,,function(e,t,n){"use strict";n(94);var r=n(0),o=n.n(r),i=n(2),a=n.n(i),u=n(70),s=n(5),c=s.default.div`
	position: relative;
	
  * {
    vertical-align: middle;
    line-height: 14px;
  }
`,l=s.default.div`
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
`,f=s.default.div`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  text-transform: lowercase;
`,p=s.default.div`
  // Do not overlap with the scope icon.
  width: 100%;
  padding-right: 40px;
  font-size: 12px;
  margin-top: 2px;
  text-align: justify;
  
  &:first-letter {
    text-transform: capitalize;
  }
`,h=s.default.i.attrs({"aria-hidden":!0})`
  margin: 4px 8px;
  font-size: 14px;

  // ### ANY alignment.	
  ${e=>"right"!==e.align&&"\n    &:hover {\n      cursor: pointer;\n      color: #2e92ff;\n    }\n  "}
  
	// ### RIGHT alignment.
	${e=>"right"===e.align&&"\n    position: absolute;\n    right: 0;\n    top: 4px;\n    \n    // Elements on the right are indicators and aren't clickable.\n    color: #cbcbcb;\n  "}

`,d=s.default.div`
	font-size: 13px;
	font-weight: 600;
`,v=s.default.div`
	display: inline-block;
	max-width: calc( 100% - 50px );
`;var y=({images:e,scope:t,displayTypes:n,descriptions:r,label:i})=>o.a.createElement(c,null,o.a.createElement(l,{src:e&&e[0]}),o.a.createElement(v,null,o.a.createElement(d,null,i),o.a.createElement(f,null,n),o.a.createElement(p,null,r&&r[0])),"local"!==t&&o.a.createElement(h,{align:"right",className:"fa fa-cloud"})),b=s.default.div`
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
`,g=s.default.div`
	position: relative;
  box-sizing: border-box;
  max-width: 180px;
  margin-top: 4px;
  min-height: 16px;
  line-height: 16px;
  font-weight: 600;
  font-size: 12px;
  hyphens: auto;
`;class m extends r.Component{constructor(e){super(e),this.onRemove=this.onRemove.bind(this)}onRemove(e){e.preventDefault(),e.stopPropagation(),this.props.onRemove(this.props.value)}render(){const{scope:e,label:t}=this.props.value;return o.a.createElement(b,null,o.a.createElement(h,{className:"fa fa-minus-square",onMouseDown:this.onRemove}),o.a.createElement(g,null,t),"local"!==e&&o.a.createElement(h,{align:"right",className:"fa fa-cloud"}))}}var w=m;function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const O=({option:e,options:t,labelKey:n,valueKey:r})=>t&&-1===t.findIndex(t=>e[r]===t[r]),E=({label:e})=>e&&e.match(/^https?:\/\/.+/i),x=({label:e,labelKey:t,valueKey:n})=>({[t]:e,[n]:e});class S extends r.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this),this.state={value:""}}onChange(e){this.setState({value:e})}render(){const{autoload:e,loadOptions:t,optionRenderer:n,valueComponent:r,...i}=this.props,a=void 0===this.props.multi||this.props.multi;return o.a.createElement(u.a.AsyncCreatable,_({autoload:e,ignoreAccents:!0,ignoreCase:!0,loadOptions:t,optionRenderer:n,valueComponent:r,openOnFocus:!0,autoBlur:!0,multi:a,onChange:this.onChange,value:this.state.value,newOptionCreator:x,isValidNewOption:E,isOptionUnique:O,clearable:!1},i))}}S.propTypes={autoload:a.a.bool,loadOptions:a.a.func.isRequired,optionRenderer:a.a.func,valueComponent:a.a.func},S.defaultProps={autoload:!1,optionRenderer:y,valueComponent:w};t.a=S},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=s(i),u=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var c={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},l=["extraWidth","injectStyles","inputClassName","inputRef","inputStyle","minWidth","onAutosize","placeholderIsMinWidth"],f=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},p=!("undefined"==typeof window||!window.navigator)&&/MSIE |Trident\/|Edge\//.test(window.navigator.userAgent),h=function(){return p?"_"+Math.random().toString(36).substr(2,12):void 0},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.inputRef=function(e){n.input=e,"function"==typeof n.props.inputRef&&n.props.inputRef(e)},n.placeHolderSizerRef=function(e){n.placeHolderSizer=e},n.sizerRef=function(e){n.sizer=e},n.state={inputWidth:e.minWidth,inputId:e.id||h()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.copyInputStyles(),this.updateInputWidth()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.id;t!==this.props.id&&this.setState({inputId:t||h()})}},{key:"componentDidUpdate",value:function(e,t){t.inputWidth!==this.state.inputWidth&&"function"==typeof this.props.onAutosize&&this.props.onAutosize(this.state.inputWidth),this.updateInputWidth()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"copyInputStyles",value:function(){if(this.mounted&&window.getComputedStyle){var e=this.input&&window.getComputedStyle(this.input);e&&(f(e,this.sizer),this.placeHolderSizer&&f(e,this.placeHolderSizer))}}},{key:"updateInputWidth",value:function(){if(this.mounted&&this.sizer&&void 0!==this.sizer.scrollWidth){var e=void 0;e=this.props.placeholder&&(!this.props.value||this.props.value&&this.props.placeholderIsMinWidth)?Math.max(this.sizer.scrollWidth,this.placeHolderSizer.scrollWidth)+2:this.sizer.scrollWidth+2,(e+="number"===this.props.type&&void 0===this.props.extraWidth?16:parseInt(this.props.extraWidth)||0)<this.props.minWidth&&(e=this.props.minWidth),e!==this.state.inputWidth&&this.setState({inputWidth:e})}}},{key:"getInput",value:function(){return this.input}},{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"select",value:function(){this.input.select()}},{key:"renderStyles",value:function(){var e=this.props.injectStyles;return p&&e?a.default.createElement("style",{dangerouslySetInnerHTML:{__html:"input#"+this.state.inputId+"::-ms-clear {display: none;}"}}):null}},{key:"render",value:function(){var e=[this.props.defaultValue,this.props.value,""].reduce((function(e,t){return null!=e?e:t})),t=r({},this.props.style);t.display||(t.display="inline-block");var n=r({boxSizing:"content-box",width:this.state.inputWidth+"px"},this.props.inputStyle),o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(this.props,[]);return function(e){l.forEach((function(t){return delete e[t]}))}(o),o.className=this.props.inputClassName,o.id=this.state.inputId,o.style=n,a.default.createElement("div",{className:this.props.className,style:t},this.renderStyles(),a.default.createElement("input",r({},o,{ref:this.inputRef})),a.default.createElement("div",{ref:this.sizerRef,style:c},e),this.props.placeholder?a.default.createElement("div",{ref:this.placeHolderSizerRef,style:c},this.props.placeholder):null)}}]),t}(i.Component);d.propTypes={className:u.default.string,defaultValue:u.default.any,extraWidth:u.default.oneOfType([u.default.number,u.default.string]),id:u.default.string,injectStyles:u.default.bool,inputClassName:u.default.string,inputRef:u.default.func,inputStyle:u.default.object,minWidth:u.default.oneOfType([u.default.number,u.default.string]),onAutosize:u.default.func,onChange:u.default.func,placeholder:u.default.string,placeholderIsMinWidth:u.default.bool,style:u.default.object,value:u.default.any},d.defaultProps={minWidth:1,injectStyles:!0},t.default=d},function(e,t,n){"use strict";var r=n(43),o=n(66),i=n(77);t.a=function(e){return function t(n,a,u,s){var c=void 0===a?{}:a,l=c.namespace,f=void 0===l?r.b:l,p=c.prefix;return void 0===u&&(u={}),void 0===s&&(s=""),Object(o.a)(n).forEach((function(o){var a=function(e){return s||!p||p&&new RegExp("^"+p+f).test(e)?e:""+p+f+e}(function(e){var t;if(!s)return e;var n=e.toString().split(r.a),o=s.split(r.a);return(t=[]).concat.apply(t,o.map((function(e){return n.map((function(t){return""+e+f+t}))}))).join(r.a)}(o)),c=Object(i.a)(o,n);e(c)?t(c,{namespace:f,prefix:p},u,a):u[a]=c})),u}}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(54);function o(e,t){return Object(r.a)(t)?t.get(e):t[e]}},function(e,t,n){"use strict";t.a=function(e){return null==e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const r=[];var o=new class{get(e=window.wlSettings.default_editor_id){const t=void 0!==window.wp.hooks?window.wp.hooks.applyFilters("wl_default_editor_id",e):e;return r[t]?r[t]:r[t]=tinyMCE.get(t)}};class i{setLink(e,t){}setYesLink(e){}setNoLink(e){}getLink(e){}}class a extends i{constructor(){super(),this.linkByDefault="1"===wlSettings.link_by_default}setLink(e,t){t?e.forEach(e=>this.setYesLink(e)):e.forEach(e=>this.setNoLink(e))}setYesLink(e){const t=o.get().dom;t.removeClass(e,"wl-no-link"),t.addClass(e,"wl-link")}setNoLink(e){const t=o.get().dom;t.removeClass(e,"wl-link"),t.addClass(e,"wl-no-link")}getLink(e){const t=o.get();if(t)return e.reduce((e,n)=>{const r=t.dom;return e||(this.linkByDefault?!r.hasClass(n,"wl-no-link"):r.hasClass(n,"wl-link"))},!1);{const t=document.createElement("div");return t.innerHTML=wp.data.select("core/editor").getBlocks().map(e=>e.originalContent).join(),e.reduce((e,n)=>e||(this.linkByDefault?!(t.querySelector(`[id="${n}"]`)&&t.querySelector(`[id="${n}"]`).classList.contains("wl-no-link")):t.querySelector(`[id="${n}"]`)&&t.querySelector(`[id="${n}"]`).classList.contains("wl-link")),!1)}}}class u extends i{constructor(){super()}setLink(e,t){}setYesLink(e){}setNoLink(e){}getLink(e){}}class s{static getInstance(){return this.isNoEditorAnalysisActive()?new u:new a}static isNoEditorAnalysisActive(){return void 0!==wlSettings&&void 0!==wlSettings.analysis&&void 0!==wlSettings.analysis.isNoEditorAnalysisActive&&!0===wlSettings.analysis.isNoEditorAnalysisActive}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return Z}));var r=n(0),o=n.n(r),i=n(7),a=n(8),u=n(36),s=n(53),c=n.n(s),l=n(2),f=n.n(l),p=n(32),h=n(33),d=n(14),v=n(5);var y=v.default.div`
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
`;var b=({children:e,label:t,...n})=>o.a.createElement(y,n,o.a.createElement("div",{style:{width:"calc(100% - 16px)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},t),e);var g=Object(i.b)(({enabled:e,value:t})=>({enabled:e,label:"Add "+t}),e=>({onClick:()=>e(Object(d.g)())}))(b);var m=v.default.div`
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
`;function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=({onCancel:e,onInputChange:t,...n})=>o.a.createElement(m,null,o.a.createElement("input",_({onChange:e=>t(e.target.value)},n)),o.a.createElement(w,{onClick:e}));var E=v.default.ul`
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
`;var x=({open:e,children:t})=>o.a.createElement(E,{open:e},0<t.length&&t.map((e,t)=>o.a.createElement("li",{key:t},e)),0===t.length&&o.a.createElement("li",{style:{padding:"8px",cursor:"initial"},key:0},"No results."));var S=({open:e,value:t,onCancel:n,onInputChange:r,children:i})=>o.a.createElement("div",null,o.a.createElement(O,{onCancel:n,onInputChange:r,value:t}),o.a.createElement(x,{open:e},i));var C=v.default.div`
  padding: 4px 8px;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  min-height: 32px;
  color: rgb(102, 102, 102);
`;var j=v.default.div`
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
`;var k=({label:e,onClick:t})=>o.a.createElement(C,{onClick:t},o.a.createElement(j,null,"Create ",e,"..."));var A=v.default.i`
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
`;var I=v.default.div`
  // Same as the Cloud Icon.
  color: #cbcbcb;
  font-size: 10px;
  width: calc(100% - 10px);
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 12px;
`;var T=({item:e,...t})=>o.a.createElement(C,t,o.a.createElement(j,{title:e.label},e.label),o.a.createElement(A,{className:"fa fa-cloud",local:"local"===e.scope?1:0}),0<e.descriptions.length&&o.a.createElement(P,{title:e.descriptions[0]},e.descriptions[0]),o.a.createElement(I,null,e.displayTypes));function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var M=({createEntity:e,selectEntity:t,items:n,value:r,showCreate:i,...a})=>{const u=(i?[o.a.createElement(k,{key:1e3,label:r,onClick:()=>e(r)})]:[]).concat(n.map((e,n)=>o.a.createElement(T,{key:n,item:e,onClick:()=>t(e)})));return o.a.createElement(S,D({value:r},a),u)};var F=Object(i.b)(({open:e,value:t,items:n},r)=>({open:e,value:t,items:n,...r}),e=>({onInputChange:t=>e(Object(d.i)(t)),onCancel:()=>e(Object(d.c)())}))(M);const R=v.default.div`
  position: relative;
  overflow-y: visible;
  width: calc(100% + 6px);
  margin-top: 10px;
  margin-bottom: 8px;
  margin-left: -3px;
`,z=v.default.div`
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
`;var N=({children:e,...t})=>o.a.createElement(R,t,o.a.createElement(z,t,e));var L=Object(i.b)(e=>({open:e.open}))(N);var B=v.default.div`
  width: 0;
  height: 0;

  ${e=>v.css`
    border-top: ${e.height} solid transparent;
    border-bottom: ${e.height} solid transparent;
    border-left: ${e.height} solid ${e.color};
  `};
`,q=n(6);const U=window.wlSettings;function V(e,t,...n){if("undefined"!==wp.ajax)return wp.ajax.post("wl_autocomplete",{query:e,show_local_entities:!0,_wpnonce:U.wl_autocomplete_nonce,exclude:U.itemId,scope:U.autocomplete_scope});{const r=new URL("http://localhost:8080/wordlift-api/autocomplete");return r.searchParams.append("query",e),r.searchParams.append("language",t),0===n.length?r.searchParams.append("exclude",""):n.forEach(e=>r.searchParams.append("exclude",e)),fetch(r).then(e=>e.json())}}n(55);function*K({payload:e}){if(void 0===e||""===e)return;yield Object(q.b)(500),void 0!==wp.wordlift&&wp.wordlift.trigger("loading",!0);const t=void 0!==wlSettings.language?wlSettings.language:"en",n=yield Object(q.a)(V,e,t);yield Object(q.d)(Object(d.f)(n)),void 0!==wp.wordlift&&wp.wordlift.trigger("loading",!1)}function*W(){yield Object(q.d)(Object(d.c)())}function H(){return Object(u.b)(e=>{const t=t=>e(t);return wp.wordlift.on("editorSelectionChanged",t),()=>wp.wordlift.off("editorSelectionChanged",t)})}function*$(){const e=yield Object(q.a)(H);for(;;){const{selection:t}=yield Object(q.g)(e);yield Object(q.d)(Object(d.i)(t)),""===t&&(yield Object(q.d)(Object(d.c)()))}}function*G(){yield Object(q.i)(d.i,K)}var Y=function*(){for(yield Object(q.c)($),yield Object(q.h)(d.e,W),yield Object(q.h)(d.b,W);;)yield Object(q.g)(d.g),yield Object(q.a)(K,yield Object(q.f)(e=>({payload:e.value}))),yield Object(q.e)({task:Object(q.a)(G),cancel:Object(q.g)(d.c)})},J=n(26);const X=Object(u.a)(),Q=Object(a.e)(d.h,Object(a.a)(X,c.a));function Z(){return Q.getState().value}X.run(Y),Object(p.on)(J.d,({selection:e})=>Q.dispatch(Object(d.i)(e))),Object(h.addAction)("wordlift.addEntitySuccess","wordlift",()=>Q.dispatch(Object(d.b)())),Object(h.addAction)("unstable_wordlift.closeEntitySelect","wordlift",()=>Q.dispatch(Object(d.c)()));const ee=({createEntity:e,selectEntity:t,showCreate:n})=>o.a.createElement(i.a,{store:Q},o.a.createElement(r.Fragment,null,Object(h.applyFilters)("wordlift.AddEntity.beforeWrapperContainer",[]),o.a.createElement(L,null,o.a.createElement(g,null,o.a.createElement(B,{height:"8px",color:"white"})),o.a.createElement(F,{createEntity:e,selectEntity:t,showCreate:n})),Object(h.applyFilters)("wordlift.AddEntity.afterWrapperContainer",[])));ee.propTypes={selectEntity:f.a.func.isRequired,showCreate:f.a.bool.isRequired};t.a=ee},,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(16),o=n.n(r),i=n(42),a=n(27),u=n(23),s=function(e){return Array.isArray(e)},c=function(e){return"string"==typeof e},l=n(78),f=function(e){return e[e.length-1]},p=n(89),h=n.n(p),d=function(e){return-1===e.indexOf("/")?h()(e):e.split("/").map(h.a).join("/")},v=function(e,t){return e.reduce((function(e,n){return t(e,n)}),{})},y=n(76),b=Object(y.a)(i.a),g=n(43);function m(e,t){var n=void 0===t?{}:t,r=n.namespace,o=void 0===r?g.b:r,i=n.prefix;var a={};return Object.getOwnPropertyNames(e).forEach((function(t){var n=i?t.replace(""+i+o,""):t;return function t(n,r,o){var i=d(o.shift());0===o.length?r[i]=e[n]:(r[i]||(r[i]={}),t(n,r[i],o))}(t,a,n.split(o))})),a}var w=n(12);function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Object(i.a)(f(n))?n.pop():{};return o()(n.every(c)&&(c(e)||Object(i.a)(e)),"Expected optional object followed by string action types"),c(e)?C([e].concat(n),a):_({},x(e,a),C(n,a))}function x(e,t){return m(S(b(e,t)),t)}function S(e,t){var n=void 0===t?{}:t,r=n.prefix,i=n.namespace,c=void 0===i?g.b:i;return v(Object.keys(e),(function(t,n){var i,f=e[n];o()(function(e){if(Object(a.a)(e)||Object(l.a)(e))return!0;if(s(e)){var t=e[0],n=void 0===t?u.a:t,r=e[1];return Object(a.a)(n)&&Object(a.a)(r)}return!1}(f),"Expected function, undefined, null, or array with payload and meta functions for "+n);var p=r?""+r+c+n:n,h=s(f)?w.a.apply(void 0,[p].concat(f)):Object(w.a)(p,f);return _({},t,((i={})[n]=h,i))}))}function C(e,t){var n=S(v(e,(function(e,t){var n;return _({},e,((n={})[t]=u.a,n))})),t);return v(Object.keys(n),(function(e,t){var r;return _({},e,((r={})[d(t)]=n[t],r))}))}},,function(e,t,n){var r=n(121);e.exports=function(e){return r(e).replace(/\s(\w)/g,(function(e,t){return t.toUpperCase()}))}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r="function"!=typeof t[t.length-1]&&t.pop(),o=t;if(void 0===r)throw new TypeError("The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.");return function(e,t){for(var n=arguments.length,i=Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var u=void 0===e,s=void 0===t;return u&&s&&r?r:o.reduce((function(e,n){return n.apply(void 0,[e,t].concat(i))}),u&&!s&&r?r:e)}},o=n(16),i=n.n(o),a=n(42),u=n(54),s=n(66);var c=n(76),l=Object(c.a)((function(e){return(Object(a.a)(e)||Object(u.a)(e))&&(t=e,n=Object(s.a)(t),r=n.every((function(e){return"next"===e||"throw"===e})),!(n.length&&n.length<=2&&r));var t,n,r})),f=n(27),p=n(23),h=n(78),d=function(e){return e.toString()},v=n(43);var y=n(77);function b(e,t,n){void 0===n&&(n={}),i()(Object(a.a)(e)||Object(u.a)(e),"Expected handlers to be a plain object.");var o=l(e,n),c=Object(s.a)(o).map((function(e){return function(e,t,n){void 0===t&&(t=p.a);var r=d(e).split(v.a);i()(!(void 0===n),"defaultState for reducer handling "+r.join(", ")+" should be defined"),i()(Object(f.a)(t)||Object(a.a)(t),"Expected reducer to be a function or object with next and throw reducers");var o=Object(f.a)(t)?[t,t]:[t.next,t.throw].map((function(e){return Object(h.a)(e)?p.a:e})),u=o[0],s=o[1];return function(e,t){void 0===e&&(e=n);var o=t.type;return o&&-1!==r.indexOf(d(o))?(!0===t.error?s:u)(e,t):e}}(e,Object(y.a)(e,o),t)})),b=r.apply(void 0,c.concat([t]));return function(e,n){return void 0===e&&(e=t),b(e,n)}}},,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";var r=n(13);t.a=function(e=null,t){switch(t.type){case r.b:return void 0===t.annotation?null:t.annotation;default:return e}}},function(e,t,n){"use strict";var r=n(13);t.a=function(e="SHOW_ALL",t){switch(t.type){case r.f:return t.filter;case r.b:return void 0===t.annotation?"SHOW_ALL":"SHOW_ANNOTATION";default:return e}}},function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),i=n(7),a=n(104),u=n(106),s=n(105),c=n(109),l=n(80),f=n(14);const p=e.wlSettings,h="undefined"!==p.can_create_entities&&"yes"===p.can_create_entities;t.a=Object(i.b)(null,{addEntityRequest:f.a,createEntityRequest:f.d})(({addEntityRequest:e,createEntityRequest:t})=>o.a.createElement(a.a,null,o.a.createElement(l.a,{createEntity:t,showCreate:h,selectEntity:e}),o.a.createElement(c.a,{open:!0,label:"Content classification"},o.a.createElement(u.a,null),o.a.createElement(s.a,null))))}).call(this,n(28))},function(e,t,n){"use strict";const r=n(5).default.div`
	background-color: #fff;

	// Compensate accordion margin bottom.
	position: relative;

	// Size.
	max-width: 254px;

	// Fixing position in responsive.
	margin: auto;
	margin-bottom: 8px;
`;t.a=r},function(e,t,n){"use strict";var r=n(7),o=n(30),i=n(0),a=n.n(i),u=n(5);var s=u.default.ul`
	margin: 0 auto;
	padding-bottom: 8px;
`;var c=u.default.li`
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

`;var l=u.default.div`
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
`;var h=u.default.img`
  border: 0;
  position: absolute;
  right: 20px;
  top: calc(50% - 10px);
  max-width: 20px;
  max-height: 20px;
`;var d=u.default.div`
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
`;var b=u.default.div`
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
`;class m extends a.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(e)}render(){return a.a.createElement(v,{onClick:this.onClick},a.a.createElement(y,{selected:this.props.selected},a.a.createElement(b,{selected:this.props.selected})),a.a.createElement(g,{selected:this.props.selected},this.props.children))}}var w=m;var _=u.default.div`
	display: inline-block;
	position: relative;
	top: -4px;	
	line-height: 16px;
	font-size: 12px;
`;var O=u.default.i`
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
`;var E=u.default.div`
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
`;var x=u.default.div`
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
`;class S extends a.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(e)}render(){return a.a.createElement(E,{onClick:this.onClick,show:this.props.show},a.a.createElement(x,{open:this.props.open}))}}var C=S;const j=window.wp&&window.wp.hooks&&window.wp.hooks.applyFilters,k=window.wlSettings.wl_root+"images/svg/wl-cloud-icon.svg",A=window.wlSettings.wl_root+"images/svg/wl-network-icon.svg";class P extends a.a.Component{constructor(e){super(e),this.ref=a.a.createRef(),this.onEditClick=this.onEditClick.bind(this),this.onSwitchClick=this.onSwitchClick.bind(this),this.onMainClick=this.onMainClick.bind(this),this.onArrowToggleClick=this.onArrowToggleClick.bind(this),this.close=this.close.bind(this),this.state={open:!1},this.computeIconFilters()}onEditClick(e){e.preventDefault(),this.props.onEditClick(this.props.entity),this.setState({open:!1})}onMainClick(e){e.preventDefault(),this.props.onClick(this.props.entity)}onSwitchClick(e){e.preventDefault(),this.props.onLinkClick(this.props.entity)}onArrowToggleClick(e){e.preventDefault(),this.setState({open:!this.state.open})}close(e){e.preventDefault(),!e.currentTarget.contains(document.activeElement)&&this.state.open&&this.setState({open:!1})}componentDidUpdate(){this.state.open&&this.ref&&this.ref.current&&this.ref.current.focus&&this.ref.current.focus()}computeIconFilters(){this.cloudIconURL=j?j("wl_cloud_icon_url",k):k,this.networkIconURL=j?j("wl_network_icon_url",A):A;let e=this.props.entity.local||this.props.entity.id&&this.props.entity.id.startsWith(window.location.origin);this.iconURL=e?"":this.props.entity.id&&this.props.entity.id.match(/https?:\/\/(?:\w+\.)?(dbpedia|wikidata)\.org/)?this.cloudIconURL:this.networkIconURL,this.iconURL=j?j("wl_icon_url",this.iconURL,this.props.entity):this.iconURL}render(){return a.a.createElement(c,{entity:this.props.entity,onBlur:this.close,ref:this.ref,tabIndex:"0",key:this.props.entity.id},a.a.createElement(l,{onClick:this.onMainClick,open:this.state.open},a.a.createElement(f,{entity:this.props.entity},this.props.entity.label,a.a.createElement(p,{entity:this.props.entity},this.props.entity.mainType)),this.iconURL&&a.a.createElement(h,{src:this.iconURL})),a.a.createElement(d,{open:this.state.open},a.a.createElement(w,{onClick:this.onSwitchClick,selected:this.props.entity.link},"Link"," "),a.a.createElement(_,null,this.props.entity.mainType),a.a.createElement(O,{onClick:this.onEditClick,edit:this.props.entity.edit,className:"fa fa-pencil"})),a.a.createElement(C,{onClick:this.onArrowToggleClick,open:this.state.open,show:this.props.entity.occurrences&&0<this.props.entity.occurrences.length}))}}var I=P;var T=({entities:e,onClick:t,onLinkClick:n,onEditClick:r})=>a.a.createElement(s,null,e.toList().map(e=>a.a.createElement(I,{entity:e,tile:{open:!1},onClick:t,onEditClick:r,onLinkClick:n,key:e.id})));const D=(e,t,n)=>{switch(n){case"SHOW_ANNOTATION":return e.filter(e=>void 0!==e.annotations&&t in e.annotations);case"SHOW_WHO":return e.filter(e=>void 0!==e.w&&"who"===e.w);case"SHOW_WHERE":return e.filter(e=>void 0!==e.w&&"where"===e.w);case"SHOW_WHEN":return e.filter(e=>void 0!==e.w&&"when"===e.w);case"SHOW_WHAT":return e.filter(e=>void 0!==e.w&&"what"===e.w);default:return e.filter(e=>e.shortlist||0<e.occurrences.length)}},M=Object(r.b)(e=>({entities:D(e.entities,e.annotationFilter,e.visibilityFilter)}),e=>({onClick:t=>{e(Object(o.f)(t))},onLinkClick:t=>{e(Object(o.g)(t))},onEditClick:t=>{e(Object(o.d)(t))}}))(T);t.a=M},function(e,t,n){"use strict";var r=n(0),o=n.n(r);var i=n(5).default.div`
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
`,a=n(7),u=n(30);class s extends o.a.PureComponent{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){e.preventDefault(),this.props.onClick(this.props.filter)}render(){return o.a.createElement("a",{className:this.props.active?"wl-active":"",onClick:this.onClick},this.props.children)}}var c=s;var l=Object(a.b)((e,t)=>({active:t.filter===e.visibilityFilter}),e=>({onClick:t=>{e(Object(u.e)(t))}}))(c);t.a=()=>o.a.createElement(i,null,o.a.createElement(l,{filter:"SHOW_WHAT"},"what"),o.a.createElement(l,{filter:"SHOW_WHERE"},"where"),o.a.createElement(l,{filter:"SHOW_WHEN"},"when"),o.a.createElement(l,{filter:"SHOW_WHO"},"who"),o.a.createElement(l,{filter:"SHOW_ALL"},"all"))},function(e,t,n){"use strict";var r=n(67),o=n(13);var i=new class{getW(e){return window._wlMetaBoxSettings.settings.classificationBoxes.reduce((t,n)=>-1===n.registeredTypes.indexOf(e.mainType)?t:n.id,"unknown")}},a=n(79);t.a=function(e=Object(r.Map)(),t){const n=a.a.getInstance();switch(t.type){case o.a:return e.merge(Object(r.Map)({[t.payload.id]:t.payload}));case o.d:const a=Object(r.Map)(t.results.entities).groupBy((e,t)=>e.label);return Object(r.Map)(t.results.entities).map(e=>Object.assign({},e,{link:n.getLink(e.occurrences),local:0===e.id.indexOf(wlSettings.datasetUri),w:i.getW(e),edit:"no"!==wlSettings.can_create_entities,duplicateLabel:1<a.get(e.label).count()})).sort((e,t)=>{if(e.local!==t.local)return t.local-e.local;const n=t.confidence-e.confidence;return 0!==n?n:t.annotations.length-e.annotations.length}).mapEntries(([e,t],n)=>(t.shortlist=n<20,[e,t]));case o.i:const{id:u,link:s}=t.payload;return e.set(u,Object.assign({},e.get(u),{link:s}));case o.j:return e.set(t.entityId,Object.assign({},e.get(t.entityId),{occurrences:t.occurrences,link:n.getLink(t.occurrences)}));default:return e}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return y}));var r=n(6),o=n(13),i=n(55);const a=(e,t)=>e.entities.get(t);var u=n(30),s=n(14),c=(n(0),n(79)),l=n(33);function*f(e){const t=yield Object(r.f)(a,e.entity.id);Object(i.a)().$apply(Object(i.a)().onSelectedEntityTile(t))}function*p({entity:e}){const t=c.a.getInstance();t.setLink(e.occurrences,!e.link),yield Object(r.d)(Object(u.h)({id:e.id,link:t.getLink(e.occurrences)}))}function*h({entity:e}){Object(i.a)().$apply(Object(i.a)().setCurrentEntity(e,"entity"))}function*d({payload:e}){const t=Object(i.a)();t.$apply(()=>{t.setCurrentEntity(),t.currentEntity.description=e.descriptions[0],t.currentEntity.id=e.id,t.currentEntity.images=e.images,t.currentEntity.label=e.label,t.currentEntity.mainType=y(e.types),t.currentEntity.types=e.types,t.currentEntity.sameAs=e.sameAss,t.storeCurrentEntity()}),Object(l.doAction)("unstable_wordlift.closeEntitySelect"),yield Object(r.d)(Object(s.b)())}function*v({payload:e}){const t=Object(i.a)();t.$apply(t.setCurrentEntity(void 0,void 0,e)),yield Object(r.d)(Object(s.e)())}const y=e=>{for(let t=0;t<window._wlEntityTypes.length;t++){const n=window._wlEntityTypes[t];if(-1<e.indexOf(n.uri))return n.slug}return"thing"};function*b({payload:e}){yield Object(r.b)(300),console.log("handleEditorSelectionChanged",e);const t=e.editor,n=t.selection;if(n.isCollapsed()||""===n.getContent({format:"text"}))return void 0;const o=n.getRng();if(null==o)return void 0;const i=o.getBoundingClientRect(),a=t.iframeElement.getBoundingClientRect();a.top,i.top,window.scrollY,a.left,i.right,window.scrollX,a.top,i.bottom,window.scrollY,a.left,i.left,window.scrollX}t.a=function*(){yield Object(r.h)(o.g,f),yield Object(r.h)(o.h,p),yield Object(r.h)(o.e,h),yield Object(r.h)(s.a,d),yield Object(r.h)(s.d,v),yield Object(r.i)(o.c,b)}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(5);var a=i.default.div`
    ${e=>e.open&&i.css`
        border-top : 0 !important;
        border-bottom: 5px solid #007aff;
    `}
`;class u extends o.a.Component{constructor(e){super(e),this.state={open:e.open},this.switch=this.switch.bind(this)}switch(){this.setState(e=>({open:!e.open}))}render(){return o.a.createElement("div",null,o.a.createElement("div",{className:"wl-tab-lead",onClick:this.switch},o.a.createElement("div",{className:"wl-tab-lead-wrap"},o.a.createElement("h1",{className:"wl-tab-lead-text"},this.props.label),o.a.createElement(a,{className:"wl-tab-lead-text wl-tab-lead-btn",open:this.state.open}))),o.a.createElement("div",{className:"wl-tab-wrap",style:{display:this.state.open?"block":"none"}},this.props.children))}}t.a=u},,,,,,,,,,,function(e,t,n){"use strict";var r=n(53),o=n.n(r),i=n(8),a=n(36),u=n(39),s=n(107),c=n(101),l=n(102),f=n(125);var p=Object(i.c)({entities:s.a,annotationFilter:c.a,visibilityFilter:l.a,editor:f.a}),h=n(108);const d=Object(a.a)(),v=Object(i.e)(p,Object(i.a)(d,u.a,o.a));d.run(h.a);t.a=v},function(e,t,n){var r=n(122);e.exports=function(e){return r(e).replace(/[\W_]+(.|$)/g,(function(e,t){return t?" "+t:""})).trim()}},function(e,t){e.exports=function(e){return n.test(e)?e.toLowerCase():r.test(e)?(function(e){return e.replace(i,(function(e,t){return t?" "+t:""}))}(e)||e).toLowerCase():o.test(e)?function(e){return e.replace(a,(function(e,t,n){return t+" "+n.toLowerCase().split("").join(" ")}))}(e).toLowerCase():e.toLowerCase()};var n=/\s/,r=/(_|-|\.|:)/,o=/([a-z][A-Z]|[A-Z][a-z])/;var i=/[\W_]+(.|$)/g;var a=/(.)([A-Z]+)/g},,,function(e,t,n){"use strict";var r=n(13);t.a=function(e={selection:""},t){switch(t.type){case r.c:return Object.assign({},e,{selection:t.selection});default:return e}}},function(e,t,n){"use strict";const r=Array(256).fill().map((e,t)=>(t<16?"0":"")+t.toString(16)),o=window.crypto&&window.crypto.getRandomValues?()=>{const e=new Uint32Array(4);return window.crypto.getRandomValues(e),{d0:e[0],d1:e[1],d2:e[2],d3:e[3]}}:()=>({d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0});t.a=()=>(({d0:e,d1:t,d2:n,d3:o})=>r[255&e]+r[e>>8&255]+r[e>>16&255]+r[e>>24&255]+"-"+r[255&t]+r[t>>8&255]+"-"+r[t>>16&15|64]+r[t>>24&255]+"-"+r[63&n|128]+r[n>>8&255]+"-"+r[n>>16&255]+r[n>>24&255]+r[255&o]+r[o>>8&255]+r[o>>16&255]+r[o>>24&255])(o())},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){var r,o,i,a;window,e.exports=(r=n(5),o=n(0),i=n(67),a=n(216),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=(r=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n"],o=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid black;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),a=s(n(0)),u=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)(u.default)(i);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  vertical-align: middle;\n"],o=["\n  display: inline-block;\n  width: 0;\n  height: 0;\n  cursor: pointer;\n  vertical-align: middle;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i=(r=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n"],o=["\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid black;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),a=s(n(0)),u=s(n(4));function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)(u.default)(i);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(1)),i=(n(2),s(n(20))),a=s(n(21)),u=s(n(7));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onData=n.onData.bind(n),e.loader&&(n.loader=e.loader),e.propertyDecorator&&(n.propertyDecorator=e.propertyDecorator),e.propertyInstanceDecorator&&(n.propertyInstanceDecorator=e.propertyInstanceDecorator),n.DecoratedProperty=n.propertyDecorator(a.default),n.state={properties:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loader(this.props.selected).then(this.onData)}},{key:"componentDidUpdate",value:function(e,t,n){e.selected!==this.props.selected&&this.loader(this.props.selected).then(this.onData)}},{key:"onData",value:function(e){this.setState({properties:e})}},{key:"propertyDecorator",value:function(e){return e}},{key:"render",value:function(){var e=this;return o.default.createElement(i.default,null,o.default.createElement(u.default.Provider,{value:{loader:this.loader,propertyDecorator:this.propertyDecorator,propertyInstanceDecorator:this.propertyInstanceDecorator}},this.state.properties.map((function(t,n){return o.default.createElement(e.DecoratedProperty,{key:n,property:t,propertyInstanceDecorator:e.propertyInstanceDecorator})}))))}}]),t}(o.default.Component);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=((r=n(1))&&r.__esModule?r:{default:r}).default.createContext({loader:function(){return Promise.resolve({})}});t.default=o},function(e,t,n){n(9),e.exports=n(10)},function(e,t){e.exports=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FetchLoader=t.Form=t.SchemaClassTree=void 0;var r=a(n(11)),o=a(n(6)),i=a(n(45));function a(e){return e&&e.__esModule?e:{default:e}}t.SchemaClassTree=r.default,t.Form=o.default,t.FetchLoader=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(1)),i=(n(2),a(n(12)));function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.debug("SchemaClassTree c'tor",{props:e}),n.childrenSelector=n.childrenSelector.bind(n),n.leafDecorator=e.leafDecorator||function(e){return e},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"childrenSelector",value:function(e,t){return t.filter((function(t){return-1<e.children.map((function(e){return e.id})).indexOf(t.id)}))}},{key:"render",value:function(){return o.default.createElement(i.default,{roots:this.props.roots,childrenSelector:this.childrenSelector,leafDecorator:this.props.leafDecorator,items:this.props.items,isSelected:this.props.isSelected,isOpen:this.props.isOpen,toggleSelected:this.props.toggleSelected,toggleOpen:this.props.toggleOpen})}}]),t}(o.default.Component);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n(1)),i=u(n(13)),a=u(n(14));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.items,n=e.leafDecorator,u=e.roots,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["items","leafDecorator","roots"]);return o.default.createElement(i.default,null,u.map((function(e,i){return o.default.createElement(a.default,r({},s,{leafDecorator:n,key:i,item:e,items:t,open:s.isOpen(e),selected:s.isSelected(e),childItems:s.childrenSelector(e,t)}))})))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  list-style: none;\n  padding-left: 0;\n"],o=["\n  list-style: none;\n  padding-left: 0;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.ul(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(1)),a=f(n(15)),u=f(n(16)),s=f(n(3)),c=f(n(5)),l=f(n(17));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.leafDecorator=e.leafDecorator||function(e){return e},n.DecoratedCheckbox=n.leafDecorator(l.default),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.open||e.open||this.props.selected!==e.selected}},{key:"render",value:function(){var e=this.props,n=e.childItems,o=e.open,l=e.selected,f=o?s.default:c.default;return i.default.createElement(a.default,e,0<n.length&&i.default.createElement(f,{onClick:function(){return e.toggleOpen(e.item)}}),i.default.createElement(this.DecoratedCheckbox,r({},e,{type:"checkbox",onChange:function(){return e.toggleSelected(e.item)},checked:l}),e.item.name),0<n.length&&o&&i.default.createElement(u.default,null,n.map((function(n,o){return i.default.createElement(t,r({},e,{key:o,item:n,open:e.isOpen(n),selected:e.isSelected(n),childItems:e.childrenSelector(n,e.items)}))}))))}}]),t}(i.default.Component);t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=u(["\n  // Avoid issues with WordPress own styling.\n  margin-bottom: 0;\n  \n  ",";\n"],["\n  // Avoid issues with WordPress own styling.\n  margin-bottom: 0;\n  \n  ",";\n"]),i=u(["\n      margin-left: 10px;\n    "],["\n      margin-left: 10px;\n    "]),a=n(0);function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var s=((r=a)&&r.__esModule?r:{default:r}).default.li(o,(function(e){return 0===e.childItems.length&&(0,a.css)(i)}));t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  list-style: none;\n  padding-left: 18px;\n"],o=["\n  list-style: none;\n  padding-left: 18px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.ul(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(1)),o=a(n(18)),i=a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.onChange,n=e.children,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["onChange","children"]);return r.default.createElement(o.default,a,r.default.createElement(i.default,{type:"checkbox",checked:a.checked,onChange:t}),n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  margin: 2px 4px;\n  white-space: nowrap;\n\n  cursor: pointer;\n  display: inline-block;\n"],o=["\n  margin: 2px 4px;\n  white-space: nowrap;\n\n  cursor: pointer;\n  display: inline-block;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  cursor: pointer;\n"],o=["\n  cursor: pointer;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.input(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  color: initial;\n  font-size: initial;\n  font-family: initial;\n"],o=["\n  color: initial;\n  font-size: initial;\n  font-family: initial;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=l(n(1)),i=n(2),a=l(n(22)),u=l(n(27)),s=l(n(28)),c=l(n(29));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAdd=n.handleAdd.bind(n),n.handleRemove=n.handleRemove.bind(n),n.propertyInstanceDecorator=e.propertyInstanceDecorator||function(e){return e},n.PropertyInstance=n.propertyInstanceDecorator(c.default),n.state={values:(0,i.Map)((e.values||[]).map((function(e){return[(0,s.default)(),e]}))).toOrderedMap()},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"handleAdd",value:function(e,t){this.setState((function(e){return{values:e.values.set((0,s.default)(),{type:t.name,value:""})}}))}},{key:"handleRemove",value:function(e){this.setState((function(t){return{values:t.values.delete(e)}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.property;return function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}(t,["property"]),o.default.createElement("div",null,o.default.createElement("strong",null,n.name),o.default.createElement(a.default,{property:n,onAdd:this.handleAdd}),this.state.values.map((function(t,r){return o.default.createElement("div",{key:r},o.default.createElement(u.default,{onClick:function(){return e.handleRemove(r)}}),o.default.createElement(e.PropertyInstance,{property:n,propertyValue:t}))})).valueSeq(),o.default.createElement("hr",{style:{color:"#007aff",width:"100%",height:"1px"}}))}}]),t}(o.default.Component);t.default=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(1)),i=c(n(23)),a=c(n(24)),u=c(n(25)),s=c(n(26));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleAdd=n.handleAdd.bind(n),n.handleClick=n.handleClick.bind(n),n.state={open:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"handleClick",value:function(e){if(e.preventDefault(),1===this.props.property.ranges.length)return this.handleAdd(this.props.property,this.props.property.ranges[0]);this.setState((function(e){return{open:!e.open}}))}},{key:"handleAdd",value:function(e,t){this.props.onAdd&&this.props.onAdd(e,t),this.setState({open:!1})}},{key:"render",value:function(){var e=this,t=this.props.property;return o.default.createElement(i.default,null,o.default.createElement(a.default,{open:this.state.open,onClick:this.handleClick}),o.default.createElement(u.default,null,o.default.createElement(s.default,{open:this.state.open},t.ranges.map((function(n,r){return o.default.createElement("div",{key:r,onClick:function(){return e.handleAdd(t,n)}},n.label)})))))}}]),t}(o.default.Component);t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n    display: inline-block;\n    margin: 0 4px;\n"],o=["\n    display: inline-block;\n    margin: 0 4px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  border-radius: 2px;\n\n  &:after {\n    content: ",";\n  }\n"],o=["\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  border-radius: 2px;\n\n  &:after {\n    content: ",";\n  }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a,(function(e){return e.open?"'-'":"'+'"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  overflow: hidden;\n  display: inline-block;\n  height: 20px;\n  vertical-align: top;\n  margin-left: -2px;\n"],o=["\n  overflow: hidden;\n  display: inline-block;\n  height: 20px;\n  vertical-align: top;\n  margin-left: -2px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-radius: 2px;\n  margin-left: ",";\n  transition: 500ms;\n  line-height: 20px;\n  padding-left: 2px;\n  height: 20px;\n  box-sizing: border-box;\n\n  > div {\n    display: inline-block;\n    cursor: pointer;\n    padding: 0 8px;\n    border-left: 1px solid #007aff;\n    color: #007aff;\n    font-weight: 600;\n    font-family: sans-serif;\n    font-size: 12px;\n\n    &:hover {\n      color: #fff;\n      background: #007aff;\n    }\n  }\n"],o=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-radius: 2px;\n  margin-left: ",";\n  transition: 500ms;\n  line-height: 20px;\n  padding-left: 2px;\n  height: 20px;\n  box-sizing: border-box;\n\n  > div {\n    display: inline-block;\n    cursor: pointer;\n    padding: 0 8px;\n    border-left: 1px solid #007aff;\n    color: #007aff;\n    font-weight: 600;\n    font-family: sans-serif;\n    font-size: 12px;\n\n    &:hover {\n      color: #fff;\n      background: #007aff;\n    }\n  }\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a,(function(e){return e.open?"-4px":"-100%"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=['\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: top;\n  border-radius: 2px 0 0px 2px;\n  box-sizing: border-box;\n  margin-top: 1px;\n\n  &:after {\n    content: "-";\n  }\n'],o=['\n  display: inline-block;\n  cursor: pointer;\n  background: #007aff;\n  color: white;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  font-weight: 600;\n  vertical-align: top;\n  border-radius: 2px 0 0px 2px;\n  box-sizing: border-box;\n  margin-top: 1px;\n\n  &:after {\n    content: "-";\n  }\n'],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Array(256).fill().map((function(e,t){return(t<16?"0":"")+t.toString(16)})),o=window.crypto&&window.crypto.getRandomValues?function(){var e=new Uint32Array(4);return window.crypto.getRandomValues(e),{d0:e[0],d1:e[1],d2:e[2],d3:e[3]}}:function(){return{d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0}};t.default=function(){return t=(e=o()).d0,n=e.d1,i=e.d2,a=e.d3,r[255&t]+r[t>>8&255]+r[t>>16&255]+r[t>>24&255]+"-"+r[255&n]+r[n>>8&255]+"-"+r[n>>16&15|64]+r[n>>24&255]+"-"+r[63&i|128]+r[i>>8&255]+"-"+r[i>>16&255]+r[i>>24&255]+r[255&a]+r[a>>8&255]+r[a>>16&255]+r[a>>24&255];var e,t,n,i,a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=m(n(1)),a=n(2),u=m(n(30)),s=m(n(31)),c=m(n(32)),l=m(n(33)),f=m(n(34)),p=m(n(35)),h=m(n(36)),d=m(n(37)),v=m(n(38)),y=m(n(39)),b=m(n(40)),g=m(n(41));function m(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=(0,a.Map)({Boolean:u.default,False:s.default,True:c.default,Date:l.default,DateTime:f.default,Number:p.default,Float:h.default,Integer:d.default,Time:v.default,Text:y.default,URL:b.default}),x=function(e){function t(e){w(this,t);var n=_(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.Component=function(e){return function(t){function n(e){w(this,n);var t=_(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleChange=t.handleChange.bind(t),t.state={value:e.propertyValue.value},t}return O(n,t),o(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return i.default.createElement(e,r({},this.props,{value:this.state.value,onChange:this.handleChange}))}}]),n}(i.default.Component)}(E.get(e.propertyValue.type,g.default)),n}return O(t,e),o(t,[{key:"render",value:function(){return i.default.createElement(this.Component,this.props)}}]),t}(i.default.Component);t.default=x},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],o=["\n  border: 1px solid #007aff;\n  min-height: 20px;\n  height: 20px;\n  line-height: 20px;\n  width: 500px;\n  max-width: calc(100% - 20px);\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.textarea(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  line-height: 20px;\n  height: 20px;\n  width: 500px;\n  max-width: 100%;\n  box-sizing: border-box;\n"],o=["\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  line-height: 20px;\n  height: 20px;\n  width: 500px;\n  max-width: 100%;\n  box-sizing: border-box;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.input(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n(1)),a=f(n(42)),u=f(n(43)),s=n(44),c=f(n(6)),l=f(n(7));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggle=n.toggle.bind(n),n.state={open:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"toggle",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"render",value:function(){var e=this.props,t=e.type,n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type"]),o=this.state.open?s.ArrowUp:s.ArrowDown;return i.default.createElement(i.default.Fragment,null,i.default.createElement(a.default,null,i.default.createElement("input",{type:"radio"}),"New or ",i.default.createElement("input",{type:"radio"}),"Select existing"," ",i.default.createElement("select",null)," ",i.default.createElement("a",{href:"#"},"edit"),i.default.createElement(o,{onClick:this.toggle})),i.default.createElement(u.default,{open:this.state.open},i.default.createElement(l.default.Consumer,null,(function(e){return i.default.createElement(c.default,r({},e,{selected:[t]},n))}))))}}]),t}(i.default.Component);t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  min-height: 20px;\n  // height: 20px;\n  line-height: 20px;\n  width: 504px;\n  max-width: calc(100% - 20px);\n  box-sizing: border-box;\n\n  color: #007aff;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 12px;\n"],o=["\n  display: inline-block;\n  border: 1px solid #007aff;\n  border-left: 0;\n  border-radius: 0 2px 2px 0;\n  vertical-align: bottom;\n  min-height: 20px;\n  // height: 20px;\n  line-height: 20px;\n  width: 504px;\n  max-width: calc(100% - 20px);\n  box-sizing: border-box;\n\n  color: #007aff;\n  font-weight: 600;\n  font-family: sans-serif;\n  font-size: 12px;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,i,a=(r=["\n  display: ",";\n"],o=["\n  display: ",";\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),u=((i=n(0))&&i.__esModule?i:{default:i}).default.div(a,(function(e){return e.open?"block":"none"}));t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowUp=t.ArrowDown=void 0;var r=i(n(3)),o=i(n(5));function i(e){return e&&e.__esModule?e:{default:e}}t.ArrowDown=o.default,t.ArrowUp=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){return fetch(e,{method:"POST",body:JSON.stringify({query:"query {\n\tschemaProperties(classes: "+JSON.stringify(t)+" ) {\n\t\tname\n\t\tlabel\n\t\tdescription\n\t\tweight\n        ranges {\n            name\n            label\n        }\n\t}\n}",variables:null}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){return e.schemaProperties})).then((function(e){return e.sort((function(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0}))}))}}}]))},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(20),o=n.n(r),i=n(74),a=n(0),u=n.n(a);const s=window.wlSettings||{};let c=null;const l=(e,t)=>{3>e.length?t(null,{options:[]}):(null!==c&&clearTimeout(c),c=setTimeout(()=>wp.ajax.post("wl_autocomplete",{query:e,_wpnonce:s.wl_autocomplete_nonce,exclude:s.itemId}).done(e=>t(null,{options:e})).fail(()=>{console.log("error"),t(null,{options:[]})}),1e3))};window.addEventListener("load",()=>{const e=document.getElementById("wl-metabox-field-sameas");null!==e&&o.a.render(u.a.createElement(i.a,{loadOptions:l,name:"wl_metaboxes[entity_same_as][]",placeholder:"",filterOption:(e,t)=>!0,searchPromptText:s.l10n["Type at least 3 characters to search..."],loadingPlaceholder:s.l10n["Please wait while we look for entities in the linked data cloud..."],noResultsText:s.l10n["No results found for your search."]}),e)})},function(e,t,n){"use strict";n.r(t);var r=n(20),o=n.n(r),i=(n(74),n(0)),a=n.n(i),u=n(70);window.addEventListener("load",()=>{const e=window._wlRecipeIngredientSettings||{};let t=null;const n=[{label:e.l10n["(don't change)"],value:"DONT_CHANGE"},{label:e.l10n["(unset)"],value:"UNSET"}],r=(r,o)=>{3>r.length?o(null,{options:n}):(null!==t&&clearTimeout(t),t=setTimeout(()=>wp.ajax.post("wl_ingredient_autocomplete",{query:r,_wpnonce:e.acNonce}).done(e=>o(null,{options:n.concat(e)})).fail(()=>{console.log("error"),o(null,{options:[]})}),1e3))};class i extends a.a.Component{constructor(e){super(e),this.onChange=this.onChange.bind(this),this.state={value:n[0]}}onChange(e){this.setState({value:e})}render(){return a.a.createElement(u.a.Async,{multi:!1,value:this.state.value,onChange:this.onChange,loadOptions:r})}}document.querySelectorAll(".wl-select-main-ingredient").forEach(e=>{o.a.render(a.a.createElement(i,null),e)})})},,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(30);t.a=function(){return function(e){wp.wordlift.on("annotation",(function(t){setTimeout((function(){e(Object(r.c)(t))}),0)}))}}},function(e,t,n){"use strict";var r=n(30);t.a=function(){return function(e){wp.wordlift.on("analysis.result",(function(t){setTimeout((function(){e(Object(r.b)(t))}),0)}))}}},function(e,t,n){"use strict";var r=n(30);t.a=function(){return function(e){wp.wordlift.on("updateOccurrencesForEntity",(function({entityId:t,occurrences:n}){setTimeout((function(){e(Object(r.i)(t,n))}),0)}))}}},function(e,t,n){"use strict";var r=n(30);t.a=function(){return function(e){wp.wordlift.on("editorSelectionChanged",(function(t){setTimeout((function(){e(Object(r.a)(t))}),0)}))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";(function(e){var t=n(0),r=n.n(t),o=n(20),i=n.n(o),a=n(7),u=n(120),s=n(103),c=n(174),l=n(175),f=n(176),p=n(177);e.wp.wordlift.on("wlEntityList.loaded",(function(){i.a.render(r.a.createElement(a.a,{store:u.a},r.a.createElement(s.a,null)),document.getElementById("wl-entity-list")),u.a.dispatch(Object(c.a)()),u.a.dispatch(Object(l.a)()),u.a.dispatch(Object(f.a)()),u.a.dispatch(Object(p.a)())}))}).call(this,n(28))},function(e,t){!function(e){"use strict";if(!e.fetch){var t="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,r="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=function(e){return e&&DataView.prototype.isPrototypeOf(e)},s=ArrayBuffer.isView||function(e){return e&&a.indexOf(Object.prototype.toString.call(e))>-1};d.prototype.append=function(e,t){e=f(e),t=p(t);var n=this.map[e];this.map[e]=n?n+","+t:t},d.prototype.delete=function(e){delete this.map[f(e)]},d.prototype.get=function(e){return e=f(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(f(e))},d.prototype.set=function(e,t){this.map[f(e)]=p(t)},d.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},d.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),h(e)},d.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),h(e)},d.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),h(e)},n&&(d.prototype[Symbol.iterator]=d.prototype.entries);var c=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},m.call(w.prototype),m.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},O.error=function(){var e=new O(null,{status:0,statusText:""});return e.type="error",e};var l=[301,302,303,307,308];O.redirect=function(e,t){if(-1===l.indexOf(t))throw new RangeError("Invalid status code");return new O(null,{status:t,headers:{location:e}})},e.Headers=d,e.Request=w,e.Response=O,e.fetch=function(e,t){return new Promise((function(n,o){var i=new w(e,t),a=new XMLHttpRequest;a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new O(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&r&&(a.responseType="blob"),i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),a.send(void 0===i._bodyInit?null:i._bodyInit)}))},e.fetch.polyfill=!0}function f(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function h(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function d(e){this.map={},e instanceof d?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function v(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function y(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function b(e){var t=new FileReader,n=y(t);return t.readAsArrayBuffer(e),n}function g(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(r&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(o&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(i&&r&&u(e))this._bodyArrayBuffer=g(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(e)&&!s(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=g(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r&&(this.blob=function(){var e=v(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?v(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(b)}),this.text=function(){var e,t,n,r=v(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=y(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}function w(e,t){var n,r,o=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),c.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function _(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function O(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);n(158),n(215),n(159);var r=n(0),o=n.n(r),i=n(20),a=n.n(i),u=n(153);var s=e=>e.sort((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0});function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const f=e=>t=>class extends o.a.Component{constructor(t){super(t),this.is=this.is.bind(this),this.toggle=this.toggle.bind(this),this.on=t["on"+this.capitalize(e)]||(()=>{}),this.state={[e]:t[e]}}componentDidUpdate(t){this.props[e]!==t[e]&&this.setState({[e]:this.props[e]})}is(t){return-1<this.state[e].indexOf(t.id)}toggle(t){this.setState(n=>({[e]:this.is(t)?n[e].filter(e=>t.id!==e):n[e].concat([t.id])})),this.on(t,!this.is(t))}capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}render(){const n={["is"+this.capitalize(e)]:this.is,["toggle"+this.capitalize(e)]:this.toggle};return o.a.createElement(t,l({},this.props,n))}};function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const h=(e=>class extends o.a.Component{constructor(e){super(e),this.onData=this.onData.bind(this),this.state={items:[],roots:[],open:[]}}componentDidMount(){wp.ajax.post("wl_schemaorg_class",{}).then(e=>e.schemaClasses).then(s).then(this.onData)}onData(e){const t=e.filter(e=>"thing"===e.dashname);this.setState({items:e,roots:t,open:t.map(e=>e.id)})}render(){const{items:t,roots:n,open:r}=this.state;return o.a.createElement(e,c({},this.props,{items:t,roots:n,open:r}))}})((d=((...e)=>t=>e.reduce((e,t)=>f(t)(e),t))("open","selected")(u.SchemaClassTree),class extends o.a.Component{constructor(e){super(e),this.getSelected=this.getSelected.bind(this),this.onData=this.onData.bind(this),this.handleSelected=this.handleSelected.bind(this),this.state={selected:document.getElementById("wl_entity_typechecklist")?this.getSelected(document.getElementById("wl_entity_typechecklist")):[]}}componentDidMount(){document.querySelectorAll("#wl_entity_typechecklist, #wl_entity_typechecklist-pop").forEach(e=>e.addEventListener("click",()=>this.onData(this.getSelected(e))))}getSelected(e){return Array.from(e.querySelectorAll("input[type='checkbox']:checked")).map(e=>parseInt(e.value))}onData(e){this.setState({selected:e})}handleSelected(e,t){document.querySelectorAll(`#in-wl_entity_type-${e.id}, #in-popular-wl_entity_type-${e.id}`).forEach(e=>e.checked=t),this.setState(n=>({selected:t?n.selected.concat([e.id]):n.selected.filter(t=>t!==e.id)}))}componentDidUpdate(){window.postMessage({type:"syncWithWordPressTaxonomyMetabox.selected",payload:{selected:this.state.selected}},document.location.href)}render(){const{selected:e,...t}=this.props;return o.a.createElement(d,p({},t,{selected:this.state.selected,onSelected:this.handleSelected}))}}));var d;window.addEventListener("load",()=>{const e=document.querySelector("#taxonomy-wl_entity_type #wl-schema-class-tree");null!==e&&a.a.render(o.a.createElement(h,null),e)});var v=n(126);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}window.addEventListener("load",()=>{const e=document.getElementById("wl-schema-properties-form");if(null===e)return;const t=window.wlSettings||{},n=t.properties,r=(e=>class extends o.a.Component{constructor(e){super(e),this.state={selected:Array.from(document.querySelectorAll("#wl_entity_typechecklist input[type='checkbox']:checked")).map(e=>parseInt(e.value))}}componentDidMount(){window.addEventListener("message",({data:e,origin:t})=>{console.debug("message received",{data:e,origin:t}),0===document.location.href.indexOf(t)&&void 0!==e.type&&"syncWithWordPressTaxonomyMetabox.selected"===e.type&&this.setState({selected:e.payload.selected})},!1)}render(){const{selected:t,...n}=this.props;return o.a.createElement(e,y({},n,{selected:this.state.selected}))}})(u.Form);a.a.render(o.a.createElement(r,{loader:e=>window.wp.ajax.post("wl_schemaorg_property",{term_id:e,_wpnonce:t.wl_schemaorg_property_nonce}).then(e=>e.schemaProperties).then(e=>e.sort((e,t)=>{const n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0})),propertyDecorator:e=>t=>{return o.a.createElement(e,y({values:(r=t.property,n[r.name])},t));var r},propertyInstanceDecorator:e=>t=>{const n=Object(v.a)(),{property:r,propertyValue:i,...a}=t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"hidden",name:`_wl_prop[${r.name}][${n}][type]`,defaultValue:i.type}),o.a.createElement("input",{type:"hidden",name:`_wl_prop[${r.name}][${n}][language]`,defaultValue:i.language}),o.a.createElement(e,y({},a,{property:r,propertyValue:i,name:`_wl_prop[${r.name}][${n}][value]`,value:i.value})))}}),e)});n(160)}]);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Autocomplete_AutocompleteSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Autocomplete/AutocompleteSelect */ "./src/Edit/components/Autocomplete/AutocompleteSelect/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
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
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Autocomplete_AutocompleteSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Autocomplete/AutocompleteSelect */ "./src/Edit/components/Autocomplete/AutocompleteSelect/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_link_LinkServiceFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/link/LinkServiceFactory */ "./src/Edit/services/link/LinkServiceFactory.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);
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

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "backbone":
/*!***************************!*\
  !*** external "Backbone" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Backbone;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=edit.js.map
>>>>>>> 565192e80e2a8462c14291e70e6d4d42180787e7
