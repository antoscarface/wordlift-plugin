!function(n){var i={};function e(t){if(i[t])return i[t].exports;var l=i[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=n,e.c=i,e.d=function(n,i,t){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var l in n)e.d(t,l,function(i){return n[i]}.bind(null,l));return t},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=157)}({135:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAnnotationElement; });\n/**\n * This file provides helper functions.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * Check whether the provided HTMLElement is an annotation.\n *\n * An {@link HTMLElement} is considered an annotation if it satisfies the following\n * requirements:\n *  - it has a `span` tagName.\n *  - it has an `id` attribute.\n *  - it has a `textannotation` class name.\n *\n * @since 3.23.0\n * @param {HTMLElement} el The {@link HTMLElement}.\n * @returns {boolean} True if it\'s annotation span otherwise false.\n */\nconst isAnnotationElement = el => {\n  return "undefined" !== typeof el && "undefined" !== typeof el.tagName && "undefined" !== typeof el.id && "undefined" !== typeof el.classList && "SPAN" === el.tagName && el.classList.contains("textannotation");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hlbHBlcnMuanM/YTJjYyJdLCJuYW1lcyI6WyJpc0Fubm90YXRpb25FbGVtZW50IiwiZWwiLCJ0YWdOYW1lIiwiaWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7O0FBYU8sTUFBTUEsbUJBQW1CLEdBQUdDLEVBQUUsSUFBSTtBQUN2QyxTQUNFLGdCQUFnQixPQUFPQSxFQUF2QixJQUNBLGdCQUFnQixPQUFPQSxFQUFFLENBQUNDLE9BRDFCLElBRUEsZ0JBQWdCLE9BQU9ELEVBQUUsQ0FBQ0UsRUFGMUIsSUFHQSxnQkFBZ0IsT0FBT0YsRUFBRSxDQUFDRyxTQUgxQixJQUlBLFdBQVdILEVBQUUsQ0FBQ0MsT0FKZCxJQUtBRCxFQUFFLENBQUNHLFNBQUgsQ0FBYUMsUUFBYixDQUFzQixnQkFBdEIsQ0FORjtBQVFELENBVE0iLCJmaWxlIjoiMTM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAYXV0aG9yIERhdmlkIFJpY2NpdGVsbGkgPGRhdmlkQHdvcmRsaWZ0LmlvPlxuICogQHNpbmNlIDMuMjMuMFxuICovXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgcHJvdmlkZWQgSFRNTEVsZW1lbnQgaXMgYW4gYW5ub3RhdGlvbi5cbiAqXG4gKiBBbiB7QGxpbmsgSFRNTEVsZW1lbnR9IGlzIGNvbnNpZGVyZWQgYW4gYW5ub3RhdGlvbiBpZiBpdCBzYXRpc2ZpZXMgdGhlIGZvbGxvd2luZ1xuICogcmVxdWlyZW1lbnRzOlxuICogIC0gaXQgaGFzIGEgYHNwYW5gIHRhZ05hbWUuXG4gKiAgLSBpdCBoYXMgYW4gYGlkYCBhdHRyaWJ1dGUuXG4gKiAgLSBpdCBoYXMgYSBgdGV4dGFubm90YXRpb25gIGNsYXNzIG5hbWUuXG4gKlxuICogQHNpbmNlIDMuMjMuMFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgVGhlIHtAbGluayBIVE1MRWxlbWVudH0uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBpdCdzIGFubm90YXRpb24gc3BhbiBvdGhlcndpc2UgZmFsc2UuXG4gKi9cbmV4cG9ydCBjb25zdCBpc0Fubm90YXRpb25FbGVtZW50ID0gZWwgPT4ge1xuICByZXR1cm4gKFxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBlbCAmJlxuICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBlbC50YWdOYW1lICYmXG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGVsLmlkICYmXG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGVsLmNsYXNzTGlzdCAmJlxuICAgIFwiU1BBTlwiID09PSBlbC50YWdOYW1lICYmXG4gICAgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGV4dGFubm90YXRpb25cIilcbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///135\n')},157:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);\n/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(158);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * This file provides a TinyMCE plugin for integration with WordLift.\n *\n * TinyMCE is loaded in different places within WordPress. We\'re specifically\n * targeting TinyMCE used as editor in Gutenberg\'s `classic` block.\n *\n * We\'re aiming to send an `action` every time the text selection changes. The\n * action should be caught by other components in page to update the UI (namely\n * the `Add ...` button in the classification box.\n *\n * The plugin name `wl_tinymce_2` is also defined in\n * src/includes/class-wordlift-tinymce-adapter.php and *must* match.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * External dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\nconst tinymce = global["tinymce"];\ntinymce.PluginManager.add("wl_tinymce_2", function (ed) {\n  // Capture `NodeChange` events and broadcast the selected text.\n  ed.on("NodeChange", e => {\n    Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_common_constants__WEBPACK_IMPORTED_MODULE_1__[/* SELECTION_CHANGED */ "b"], {\n      selection: ed.selection.getContent({\n        format: "text"\n      })\n    }); // Fire the annotation change.\n\n    const payload = "undefined" !== typeof e && Object(_common_helpers__WEBPACK_IMPORTED_MODULE_2__[/* isAnnotationElement */ "a"])(e.element) ? // Set the payload to `{ annotationId }` if it\'s an annotation otherwise to null.\n    e.element.id : undefined;\n    Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_common_constants__WEBPACK_IMPORTED_MODULE_1__[/* ANNOTATION_CHANGED */ "a"], payload);\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(26)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGlueS1tY2UvaW5kZXguanM/MDcyOSJdLCJuYW1lcyI6WyJ0aW55bWNlIiwiZ2xvYmFsIiwiUGx1Z2luTWFuYWdlciIsImFkZCIsImVkIiwib24iLCJlIiwidHJpZ2dlciIsIlNFTEVDVElPTl9DSEFOR0VEIiwic2VsZWN0aW9uIiwiZ2V0Q29udGVudCIsImZvcm1hdCIsInBheWxvYWQiLCJpc0Fubm90YXRpb25FbGVtZW50IiwiZWxlbWVudCIsImlkIiwidW5kZWZpbmVkIiwiQU5OT1RBVElPTl9DSEFOR0VEIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7O0FBR0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLE9BQU8sR0FBR0MsTUFBTSxDQUFDLFNBQUQsQ0FBdEI7QUFDQUQsT0FBTyxDQUFDRSxhQUFSLENBQXNCQyxHQUF0QixDQUEwQixjQUExQixFQUEwQyxVQUFTQyxFQUFULEVBQWE7QUFDckQ7QUFDQUEsSUFBRSxDQUFDQyxFQUFILENBQU0sWUFBTixFQUFvQkMsQ0FBQyxJQUFJO0FBQ3ZCQyw0REFBTyxDQUFDQywyRUFBRCxFQUFvQjtBQUFFQyxlQUFTLEVBQUVMLEVBQUUsQ0FBQ0ssU0FBSCxDQUFhQyxVQUFiLENBQXdCO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BQXhCO0FBQWIsS0FBcEIsQ0FBUCxDQUR1QixDQUd2Qjs7QUFDQSxVQUFNQyxPQUFPLEdBQ1gsZ0JBQWdCLE9BQU9OLENBQXZCLElBQTRCTyxtRkFBbUIsQ0FBQ1AsQ0FBQyxDQUFDUSxPQUFILENBQS9DLEdBQ0k7QUFDQVIsS0FBQyxDQUFDUSxPQUFGLENBQVVDLEVBRmQsR0FHSUMsU0FKTjtBQUtBVCw0REFBTyxDQUFDVSw0RUFBRCxFQUFxQkwsT0FBckIsQ0FBUDtBQUNELEdBVkQ7QUFXRCxDQWJELEUiLCJmaWxlIjoiMTU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGZpbGUgcHJvdmlkZXMgYSBUaW55TUNFIHBsdWdpbiBmb3IgaW50ZWdyYXRpb24gd2l0aCBXb3JkTGlmdC5cbiAqXG4gKiBUaW55TUNFIGlzIGxvYWRlZCBpbiBkaWZmZXJlbnQgcGxhY2VzIHdpdGhpbiBXb3JkUHJlc3MuIFdlJ3JlIHNwZWNpZmljYWxseVxuICogdGFyZ2V0aW5nIFRpbnlNQ0UgdXNlZCBhcyBlZGl0b3IgaW4gR3V0ZW5iZXJnJ3MgYGNsYXNzaWNgIGJsb2NrLlxuICpcbiAqIFdlJ3JlIGFpbWluZyB0byBzZW5kIGFuIGBhY3Rpb25gIGV2ZXJ5IHRpbWUgdGhlIHRleHQgc2VsZWN0aW9uIGNoYW5nZXMuIFRoZVxuICogYWN0aW9uIHNob3VsZCBiZSBjYXVnaHQgYnkgb3RoZXIgY29tcG9uZW50cyBpbiBwYWdlIHRvIHVwZGF0ZSB0aGUgVUkgKG5hbWVseVxuICogdGhlIGBBZGQgLi4uYCBidXR0b24gaW4gdGhlIGNsYXNzaWZpY2F0aW9uIGJveC5cbiAqXG4gKiBUaGUgcGx1Z2luIG5hbWUgYHdsX3RpbnltY2VfMmAgaXMgYWxzbyBkZWZpbmVkIGluXG4gKiBzcmMvaW5jbHVkZXMvY2xhc3Mtd29yZGxpZnQtdGlueW1jZS1hZGFwdGVyLnBocCBhbmQgKm11c3QqIG1hdGNoLlxuICpcbiAqIEBhdXRob3IgRGF2aWQgUmljY2l0ZWxsaSA8ZGF2aWRAd29yZGxpZnQuaW8+XG4gKiBAc2luY2UgMy4yMy4wXG4gKi9cblxuLyoqXG4gKiBFeHRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IHsgdHJpZ2dlciB9IGZyb20gXCJiYWNrYm9uZVwiO1xuXG4vKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyBBTk5PVEFUSU9OX0NIQU5HRUQsIFNFTEVDVElPTl9DSEFOR0VEIH0gZnJvbSBcIi4uL2NvbW1vbi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlzQW5ub3RhdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi4vY29tbW9uL2hlbHBlcnNcIjtcblxuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IHRpbnltY2UgPSBnbG9iYWxbXCJ0aW55bWNlXCJdO1xudGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZChcIndsX3RpbnltY2VfMlwiLCBmdW5jdGlvbihlZCkge1xuICAvLyBDYXB0dXJlIGBOb2RlQ2hhbmdlYCBldmVudHMgYW5kIGJyb2FkY2FzdCB0aGUgc2VsZWN0ZWQgdGV4dC5cbiAgZWQub24oXCJOb2RlQ2hhbmdlXCIsIGUgPT4ge1xuICAgIHRyaWdnZXIoU0VMRUNUSU9OX0NIQU5HRUQsIHsgc2VsZWN0aW9uOiBlZC5zZWxlY3Rpb24uZ2V0Q29udGVudCh7IGZvcm1hdDogXCJ0ZXh0XCIgfSkgfSk7XG5cbiAgICAvLyBGaXJlIHRoZSBhbm5vdGF0aW9uIGNoYW5nZS5cbiAgICBjb25zdCBwYXlsb2FkID1cbiAgICAgIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBlICYmIGlzQW5ub3RhdGlvbkVsZW1lbnQoZS5lbGVtZW50KVxuICAgICAgICA/IC8vIFNldCB0aGUgcGF5bG9hZCB0byBgeyBhbm5vdGF0aW9uSWQgfWAgaWYgaXQncyBhbiBhbm5vdGF0aW9uIG90aGVyd2lzZSB0byBudWxsLlxuICAgICAgICAgIGUuZWxlbWVudC5pZFxuICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICB0cmlnZ2VyKEFOTk9UQVRJT05fQ0hBTkdFRCwgcGF5bG9hZCk7XG4gIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///157\n')},158:function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGlueS1tY2UvaW5kZXguc2Nzcz9hMzQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE1OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///158\n")},23:function(module,exports){eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n")},26:function(module,exports){eval('var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function("return this")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === "object") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it\'s\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n')},64:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECTION_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ANNOTATION_CHANGED; });\n/* unused harmony export PLUGIN_NAMESPACE */\n/* unused harmony export EDITOR_STORE */\n/* unused harmony export EDITOR_ELEMENT_ID */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WORDLIFT_STORE; });\n/**\n * This file defines constants used across different files and components.\n *\n * @author David Riccitelli <david@wordlift.io>\n * @since 3.23.0\n */\n\n/**\n * WordPress\' action hook to signal that a selection has changed.\n *\n * @since 3.23.0\n * @type {string}\n */\nconst SELECTION_CHANGED = "wordlift.selectionChanged";\n/**\n * WordPress\' action hook to signal that an annotation has changed. The action\n * provides the annotation id as `{ annotationId }`. The annotation id usually\n * matches the element id that caused the action to be fired.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst ANNOTATION_CHANGED = "wordlift.annotationChanged";\n/**\n * The plugin namespace.\n *\n * @type {string}\n */\n\nconst PLUGIN_NAMESPACE = "wordlift";\n/**\n * Define the G\'berg editor store name.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst EDITOR_STORE = "core/editor";\n/**\n * Define the editor element id.\n *\n * @since 3.23.0\n * @type {string}\n */\n\nconst EDITOR_ELEMENT_ID = "editor";\n/**\n * Define the WordLift Store name used for {@link select} and {@link dispatch}\n * functions.\n *\n * @type {string}\n */\n\nconst WORDLIFT_STORE = "wordlift/editor";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbnN0YW50cy5qcz85YTM2Il0sIm5hbWVzIjpbIlNFTEVDVElPTl9DSEFOR0VEIiwiQU5OT1RBVElPTl9DSEFOR0VEIiwiUExVR0lOX05BTUVTUEFDRSIsIkVESVRPUl9TVE9SRSIsIkVESVRPUl9FTEVNRU5UX0lEIiwiV09SRExJRlRfU1RPUkUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FBT0E7Ozs7OztBQU1PLE1BQU1BLGlCQUFpQixHQUFHLDJCQUExQjtBQUVQOzs7Ozs7Ozs7QUFRTyxNQUFNQyxrQkFBa0IsR0FBRyw0QkFBM0I7QUFFUDs7Ozs7O0FBS08sTUFBTUMsZ0JBQWdCLEdBQUcsVUFBekI7QUFFUDs7Ozs7OztBQU1PLE1BQU1DLFlBQVksR0FBRyxhQUFyQjtBQUVQOzs7Ozs7O0FBTU8sTUFBTUMsaUJBQWlCLEdBQUcsUUFBMUI7QUFFUDs7Ozs7OztBQU1PLE1BQU1DLGNBQWMsR0FBRyxpQkFBdkIiLCJmaWxlIjoiNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZmlsZSBkZWZpbmVzIGNvbnN0YW50cyB1c2VkIGFjcm9zcyBkaWZmZXJlbnQgZmlsZXMgYW5kIGNvbXBvbmVudHMuXG4gKlxuICogQGF1dGhvciBEYXZpZCBSaWNjaXRlbGxpIDxkYXZpZEB3b3JkbGlmdC5pbz5cbiAqIEBzaW5jZSAzLjIzLjBcbiAqL1xuXG4vKipcbiAqIFdvcmRQcmVzcycgYWN0aW9uIGhvb2sgdG8gc2lnbmFsIHRoYXQgYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQuXG4gKlxuICogQHNpbmNlIDMuMjMuMFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5zZWxlY3Rpb25DaGFuZ2VkXCI7XG5cbi8qKlxuICogV29yZFByZXNzJyBhY3Rpb24gaG9vayB0byBzaWduYWwgdGhhdCBhbiBhbm5vdGF0aW9uIGhhcyBjaGFuZ2VkLiBUaGUgYWN0aW9uXG4gKiBwcm92aWRlcyB0aGUgYW5ub3RhdGlvbiBpZCBhcyBgeyBhbm5vdGF0aW9uSWQgfWAuIFRoZSBhbm5vdGF0aW9uIGlkIHVzdWFsbHlcbiAqIG1hdGNoZXMgdGhlIGVsZW1lbnQgaWQgdGhhdCBjYXVzZWQgdGhlIGFjdGlvbiB0byBiZSBmaXJlZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgQU5OT1RBVElPTl9DSEFOR0VEID0gXCJ3b3JkbGlmdC5hbm5vdGF0aW9uQ2hhbmdlZFwiO1xuXG4vKipcbiAqIFRoZSBwbHVnaW4gbmFtZXNwYWNlLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBQTFVHSU5fTkFNRVNQQUNFID0gXCJ3b3JkbGlmdFwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgRydiZXJnIGVkaXRvciBzdG9yZSBuYW1lLlxuICpcbiAqIEBzaW5jZSAzLjIzLjBcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFRElUT1JfU1RPUkUgPSBcImNvcmUvZWRpdG9yXCI7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBlZGl0b3IgZWxlbWVudCBpZC5cbiAqXG4gKiBAc2luY2UgMy4yMy4wXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRURJVE9SX0VMRU1FTlRfSUQgPSBcImVkaXRvclwiO1xuXG4vKipcbiAqIERlZmluZSB0aGUgV29yZExpZnQgU3RvcmUgbmFtZSB1c2VkIGZvciB7QGxpbmsgc2VsZWN0fSBhbmQge0BsaW5rIGRpc3BhdGNofVxuICogZnVuY3Rpb25zLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBXT1JETElGVF9TVE9SRSA9IFwid29yZGxpZnQvZWRpdG9yXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///64\n')}});