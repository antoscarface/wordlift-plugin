!function(t){function c(e){if(d[e])return d[e].exports;var n=d[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}var d={};return c.m=t,c.c=d,c.i=function(t){return t},c.d=function(t,d,e){c.o(t,d)||Object.defineProperty(t,d,{configurable:!1,enumerable:!0,get:e})},c.n=function(t){var d=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(d,"a",d),d},c.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},c.p="",c(c.s=6)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Delay a function call by half a second.\n *\n * Any function can be delayed using `delay`. The timeout for the call is bound\n * to the provided element. If another function call is delayed on the same\n * element, any previous timeout is cancelled.\n *\n * This function is used to validate in real-time inputs when the user presses\n * a key, but allowing the user to press more keys (hence the delay).\n *\n * @since 3.9.0\n *\n * @param {Object} $elem A jQuery element reference which will hold the timeout\n *     reference.\n * @param {Function} fn The function to call.\n * @param {...Object} args Additional arguments for the callback.\n */\nvar delay = function delay($elem, fn) {\n  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  // Clear a validation timeout.\n  clearTimeout($elem.data('timeout'));\n\n  // Validate the key, after a delay, so that another key is pressed, this\n  // validation is cancelled.\n  $elem.data('timeout', setTimeout.apply(undefined, [fn, 500].concat(args)));\n};\n\n// Finally export the `delay` function.\n/* harmony default export */ __webpack_exports__[\"a\"] = delay;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0cy9jb21tb24vZGVsYXkuanM/Njg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERlbGF5IGEgZnVuY3Rpb24gY2FsbCBieSBoYWxmIGEgc2Vjb25kLlxuICpcbiAqIEFueSBmdW5jdGlvbiBjYW4gYmUgZGVsYXllZCB1c2luZyBgZGVsYXlgLiBUaGUgdGltZW91dCBmb3IgdGhlIGNhbGwgaXMgYm91bmRcbiAqIHRvIHRoZSBwcm92aWRlZCBlbGVtZW50LiBJZiBhbm90aGVyIGZ1bmN0aW9uIGNhbGwgaXMgZGVsYXllZCBvbiB0aGUgc2FtZVxuICogZWxlbWVudCwgYW55IHByZXZpb3VzIHRpbWVvdXQgaXMgY2FuY2VsbGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byB2YWxpZGF0ZSBpbiByZWFsLXRpbWUgaW5wdXRzIHdoZW4gdGhlIHVzZXIgcHJlc3Nlc1xuICogYSBrZXksIGJ1dCBhbGxvd2luZyB0aGUgdXNlciB0byBwcmVzcyBtb3JlIGtleXMgKGhlbmNlIHRoZSBkZWxheSkuXG4gKlxuICogQHNpbmNlIDMuOS4wXG4gKlxuICogQHBhcmFtIHtPYmplY3R9ICRlbGVtIEEgalF1ZXJ5IGVsZW1lbnQgcmVmZXJlbmNlIHdoaWNoIHdpbGwgaG9sZCB0aGUgdGltZW91dFxuICogICAgIHJlZmVyZW5jZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsLlxuICogQHBhcmFtIHsuLi5PYmplY3R9IGFyZ3MgQWRkaXRpb25hbCBhcmd1bWVudHMgZm9yIHRoZSBjYWxsYmFjay5cbiAqL1xuY29uc3QgZGVsYXkgPSAoICRlbGVtLCBmbiwgLi4uYXJncyApID0+IHtcblx0Ly8gQ2xlYXIgYSB2YWxpZGF0aW9uIHRpbWVvdXQuXG5cdGNsZWFyVGltZW91dCggJGVsZW0uZGF0YSggJ3RpbWVvdXQnICkgKTtcblxuXHQvLyBWYWxpZGF0ZSB0aGUga2V5LCBhZnRlciBhIGRlbGF5LCBzbyB0aGF0IGFub3RoZXIga2V5IGlzIHByZXNzZWQsIHRoaXNcblx0Ly8gdmFsaWRhdGlvbiBpcyBjYW5jZWxsZWQuXG5cdCRlbGVtLmRhdGEoICd0aW1lb3V0Jywgc2V0VGltZW91dCggZm4sIDUwMCwgLi4uYXJncyApICk7XG59O1xuXG4vLyBGaW5hbGx5IGV4cG9ydCB0aGUgYGRlbGF5YCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IGRlbGF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zY3JpcHRzL2NvbW1vbi9kZWxheS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Check for duplicate titles.\n *\n * @since 3.10.0\n *\n * @param {Object} $ A jQuery instance.\n * @param {Object} ajax A `wp.ajax` class used to perform `post` requests to\n *     `admin-ajax.php`.\n * @param {String} title The title to check for duplicates.\n * @param {Number} postId The current post id, excluded from the duplicates\n *     results.\n * @param {String} message The error message to display in case there are\n *     duplicates.\n * @param {Function} callback A callback function to call to deliver the\n *     results.\n */\nvar check = function check($, ajax, title, postId, message, callback) {\n\t// Use `wp.ajax` to post a request to find an existing entity with the\n\t// specified title.\n\tajax.post('entity_by_title', { title: title }).done(function (response) {\n\t\t// Prepare the html code to show in the error div.\n\t\tvar html = $.map(response.results, function (item) {\n\t\t\t// If the item is the current post, ignore it.\n\t\t\tif (item.id === postId) {\n\t\t\t\treturn '';\n\t\t\t}\n\n\t\t\t// Create the edit link.\n\t\t\tvar editLink = response.edit_link.replace('%d', item.id);\n\n\t\t\t// Return the html code.\n\t\t\treturn message + '<a target=\"_blank\" href=\"' + editLink + '\">' + item.title + '</a><br />';\n\t\t}).join(''); // Join the html codes together.\n\n\t\t// Call the callback function.\n\t\tcallback(html);\n\t});\n};\n\n// Finally export the `check` function.\n/* harmony default export */ __webpack_exports__[\"a\"] = check;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2NyaXB0cy9jb21tb24vY2hlY2suanM/OTVkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrIGZvciBkdXBsaWNhdGUgdGl0bGVzLlxuICpcbiAqIEBzaW5jZSAzLjEwLjBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gJCBBIGpRdWVyeSBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhamF4IEEgYHdwLmFqYXhgIGNsYXNzIHVzZWQgdG8gcGVyZm9ybSBgcG9zdGAgcmVxdWVzdHMgdG9cbiAqICAgICBgYWRtaW4tYWpheC5waHBgLlxuICogQHBhcmFtIHtTdHJpbmd9IHRpdGxlIFRoZSB0aXRsZSB0byBjaGVjayBmb3IgZHVwbGljYXRlcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBwb3N0SWQgVGhlIGN1cnJlbnQgcG9zdCBpZCwgZXhjbHVkZWQgZnJvbSB0aGUgZHVwbGljYXRlc1xuICogICAgIHJlc3VsdHMuXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IGluIGNhc2UgdGhlcmUgYXJlXG4gKiAgICAgZHVwbGljYXRlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gY2FsbCB0byBkZWxpdmVyIHRoZVxuICogICAgIHJlc3VsdHMuXG4gKi9cbmNvbnN0IGNoZWNrID0gKCAkLCBhamF4LCB0aXRsZSwgcG9zdElkLCBtZXNzYWdlLCBjYWxsYmFjayApID0+IHtcblx0Ly8gVXNlIGB3cC5hamF4YCB0byBwb3N0IGEgcmVxdWVzdCB0byBmaW5kIGFuIGV4aXN0aW5nIGVudGl0eSB3aXRoIHRoZVxuXHQvLyBzcGVjaWZpZWQgdGl0bGUuXG5cdGFqYXgucG9zdCggJ2VudGl0eV9ieV90aXRsZScsIHsgdGl0bGU6IHRpdGxlIH0gKVxuXHRcdC5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG5cdFx0XHQvLyBQcmVwYXJlIHRoZSBodG1sIGNvZGUgdG8gc2hvdyBpbiB0aGUgZXJyb3IgZGl2LlxuXHRcdFx0Y29uc3QgaHRtbCA9ICQubWFwKCByZXNwb25zZS5yZXN1bHRzLCBmdW5jdGlvbiggaXRlbSApIHtcblx0XHRcdFx0Ly8gSWYgdGhlIGl0ZW0gaXMgdGhlIGN1cnJlbnQgcG9zdCwgaWdub3JlIGl0LlxuXHRcdFx0XHRpZiAoIGl0ZW0uaWQgPT09IHBvc3RJZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGVkaXQgbGluay5cblx0XHRcdFx0Y29uc3QgZWRpdExpbmsgPSByZXNwb25zZS5lZGl0X2xpbmsucmVwbGFjZSggJyVkJywgaXRlbS5pZCApO1xuXG5cdFx0XHRcdC8vIFJldHVybiB0aGUgaHRtbCBjb2RlLlxuXHRcdFx0XHRyZXR1cm4gbWVzc2FnZSArICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJyArIGVkaXRMaW5rICsgJ1wiPicgK1xuXHRcdFx0XHRcdCAgIGl0ZW0udGl0bGUgKyAnPC9hPjxiciAvPic7XG5cdFx0XHR9ICkuam9pbiggJycgKTsgLy8gSm9pbiB0aGUgaHRtbCBjb2RlcyB0b2dldGhlci5cblxuXHRcdFx0Ly8gQ2FsbCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0XHRjYWxsYmFjayggaHRtbCApO1xuXHRcdH0gKTtcbn07XG5cbi8vIEZpbmFsbHkgZXhwb3J0IHRoZSBgY2hlY2tgIGZ1bmN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgY2hlY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NjcmlwdHMvY29tbW9uL2NoZWNrLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scripts_common_delay__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_common_check__ = __webpack_require__(1);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/**\n * Internal dependencies\n */\n\n\n\n(function ($) {\n\t/**\n  * Execute when the document is ready.\n  *\n  * @since 3.1.0\n  */\n\t$(function () {\n\t\t// The Entity Types Taxonomy is exclusive, one cannot choose more\n\t\t// than a type. Therefore from the PHP code we provide a Walker\n\t\t// that changes checkboxes into radios. However the quickedit on\n\t\t// the client side is applied only to checkboxes, so we override\n\t\t// the function here to apply the selection also to radios.\n\n\t\t// Do not hook, if we're not on a page with the inlineEditPost.\n\t\tif ('undefined' === typeof inlineEditPost || null === inlineEditPost) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Create a reference to the original function.\n\t\tvar fnEdit = inlineEditPost.edit;\n\n\t\t// Override the edit function.\n\t\tinlineEditPost.edit = function (id) {\n\t\t\t// Call the original function.\n\t\t\tfnEdit.apply(this, arguments);\n\n\t\t\t// Get the id (this is a copy of what happens in the original\n\t\t\t// edit function).\n\t\t\tif ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {\n\t\t\t\tid = this.getId(id);\n\t\t\t}\n\n\t\t\t// Get a reference to the row data (holding the post data) and\n\t\t\t// to the newly displayed inline edit row.\n\t\t\tvar rowData = $('#inline_' + id),\n\t\t\t    editRow = $('#edit-' + id);\n\n\t\t\t// Select the terms for the taxonomy (this is a copy of the\n\t\t\t// original lines in the edit function but we're targeting\n\t\t\t// radios instead of checkboxes).\n\t\t\t$('.post_category', rowData).each(function () {\n\t\t\t\tvar termIds = $(this).text();\n\n\t\t\t\tif (termIds) {\n\t\t\t\t\tvar taxname = $(this).attr('id').replace('_' + id, '');\n\t\t\t\t\t// Target radios (instead of checkboxes).\n\t\t\t\t\t$('ul.' + taxname + '-checklist :radio', editRow).val(termIds.split(','));\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\t});\n\n\t/**\n  * Handle the alternative labels, by providing an 'Add more titles'\n  * button and input texts where to add the labels.\n  *\n  * @since 3.2.0\n  */\n\t$(function () {\n\t\t// Add the delete button to the existing input texts.\n\t\t$('.wl-alternative-label > .wl-delete-button').on('click', function (event) {\n\t\t\t$(event.delegateTarget).parent().remove();\n\t\t});\n\n\t\t// Handle the click on the 'Add more titles' button and bind the\n\t\t// event of the (new) delete button.\n\t\t$('#wl-add-alternative-labels-button').on('click', function (event) {\n\t\t\t$(event.delegateTarget).before(function () {\n\t\t\t\tvar $element = $($('#wl-tmpl-alternative-label-input').html());\n\t\t\t\t$element.children('.wl-delete-button').on('click', function () {\n\t\t\t\t\t$element.remove();\n\t\t\t\t});\n\t\t\t\treturn $element;\n\t\t\t});\n\t\t});\n\t});\n\n\t/**\n  * Check for duplicate title/labels via AJAX while the user is typing.\n  *\n  * @since 3.2.0\n  */\n\t$(function () {\n\t\t// return if we are not in the entity editor page (the *wlSettings*\n\t\t// json is only enqueued there) wlSettings.entityBeingEdited comes\n\t\t// from `wp_localize_script`, so '1' (true) or '' (false).\n\t\tif (typeof wlSettings === 'undefined' || 1 !== Number(wlSettings.entityBeingEdited)) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Print error message in page and hide it.\n\t\tvar duplicatedEntityErrorDiv = $('<div class=\"wl-notice notice wl-suggestion\" ' + ' id=\"wl-same-title-error\"><p></p></div>').insertBefore('div.wrap [name=post]').hide();\n\n\t\t/**\n   * Check whether the specified title is already used by other\n   * entities.\n   *\n   * @since 3.10.0\n   */\n\t\tvar callback = function callback() {\n\t\t\t// A jQuery reference to the element firing the event.\n\t\t\tvar $this = $(this);\n\n\t\t\t// Delay execution of the check.\n\t\t\t__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__scripts_common_delay__[\"a\" /* default */])($this, __WEBPACK_IMPORTED_MODULE_1__scripts_common_check__[\"a\" /* default */], $, wp.ajax, $this.val(), wlSettings.post_id, wlSettings.l10n['You already published an entity with the same name'], function (html) {\n\t\t\t\t// Set the error div content.\n\t\t\t\t$('#wl-same-title-error p').html(html);\n\n\t\t\t\t// If the html code isn't empty then show the error.\n\t\t\t\tif ('' !== html) {\n\t\t\t\t\tduplicatedEntityErrorDiv.show();\n\t\t\t\t} else {\n\t\t\t\t\t// If the html code is empty, hide the error div.\n\t\t\t\t\tduplicatedEntityErrorDiv.hide();\n\t\t\t\t}\n\t\t\t});\n\t\t};\n\n\t\t// Whenever something happens in the entity title...\n\t\t$('[name=post_title]').on('change paste keyup', callback).each(callback);\n\t});\n\n\t/**\n  * Draw dashboard if needed\n  *\n  * @since 3.4.0\n  */\n\t$(function () {\n\t\t// return if not needed\n\t\tif (!$('#wl-dashboard-widget-inner-wrapper').length) {\n\t\t\treturn;\n\t\t}\n\n\t\t$.getJSON(ajaxurl + '?action=wordlift_get_stats', function (stats) {\n\t\t\t// Get the triples, 0 by default if triples is not a number.\n\t\t\tvar triples = isNaN(stats.triples) ? 0 : stats.triples;\n\n\t\t\t// Calculate wikidata ratio\n\t\t\t// TODO percentage should be added via css\n\t\t\tstats.wikidata = (triples * 100 / 947690143).toFixed(5) + '%';\n\t\t\t// Calculate annotated posts ratio\n\t\t\t// eslint-disable-next-line camelcase\n\t\t\tstats.annotated_posts_percentage = (stats.annotated_posts * 100 / stats.posts).toFixed(1);\n\t\t\t// Convert NaN to zero if needed\n\t\t\t// See https://github.com/insideout10/wordlift-plugin/issues/269\n\t\t\t// eslint-disable-next-line camelcase, space-unary-ops\n\t\t\tstats.annotated_posts_percentage = +stats.annotated_posts_percentage || 0;\n\t\t\t// TODO percentage should be added via css\n\t\t\t// eslint-disable-next-line camelcase\n\t\t\tstats.annotated_posts_percentage = stats.annotated_posts_percentage + '%';\n\n\t\t\t// Populate annotated posts pie chart\n\t\t\t$('#wl-posts-pie-chart circle').css('stroke-dasharray', stats.annotated_posts * 100 / stats.posts + ' 100');\n\t\t\t// Populate average entity ratings gauge chart\n\t\t\t$('#wl-entities-gauge-chart .stat').css('stroke-dasharray', stats.rating / 2 + ' 100');\n\n\t\t\t// TODO percentage should be added via css\n\t\t\tstats.rating = stats.rating + '%';\n\t\t\t// populate value placeholders\n\t\t\tfor (var property in stats) {\n\t\t\t\t$('#wl-dashboard-widget-' + property).text(stats[property]);\n\t\t\t}\n\n\t\t\t// Finally show the widget\n\t\t\t$('#wl-dashboard-widget-inner-wrapper').show();\n\n\t\t\t// Set the same height for stat graph wrappers\n\t\t\t// Links not working with css alternatives\n\t\t\tvar minHeight = 0;\n\t\t\t$('.wl-stat-graph-wrapper').each(function () {\n\t\t\t\tvar stat = $(this);\n\t\t\t\tif (stat.height() > minHeight) {\n\t\t\t\t\tminHeight = stat.height();\n\t\t\t\t}\n\t\t\t});\n\n\t\t\t$('.wl-stat-graph-wrapper').css('min-height', minHeight);\n\t\t});\n\t});\n})(jQuery);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYWRtaW4vanMvd29yZGxpZnQtYWRtaW4uanM/MjA0YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgZGVsYXkgZnJvbSAnLi4vLi4vc2NyaXB0cy9jb21tb24vZGVsYXknO1xuaW1wb3J0IGNoZWNrIGZyb20gJy4uLy4uL3NjcmlwdHMvY29tbW9uL2NoZWNrJztcblxuKFxuXHRmdW5jdGlvbiggJCApIHtcblx0XHQvKipcblx0XHQgKiBFeGVjdXRlIHdoZW4gdGhlIGRvY3VtZW50IGlzIHJlYWR5LlxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuMS4wXG5cdFx0ICovXG5cdFx0JCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBUaGUgRW50aXR5IFR5cGVzIFRheG9ub215IGlzIGV4Y2x1c2l2ZSwgb25lIGNhbm5vdCBjaG9vc2UgbW9yZVxuXHRcdFx0Ly8gdGhhbiBhIHR5cGUuIFRoZXJlZm9yZSBmcm9tIHRoZSBQSFAgY29kZSB3ZSBwcm92aWRlIGEgV2Fsa2VyXG5cdFx0XHQvLyB0aGF0IGNoYW5nZXMgY2hlY2tib3hlcyBpbnRvIHJhZGlvcy4gSG93ZXZlciB0aGUgcXVpY2tlZGl0IG9uXG5cdFx0XHQvLyB0aGUgY2xpZW50IHNpZGUgaXMgYXBwbGllZCBvbmx5IHRvIGNoZWNrYm94ZXMsIHNvIHdlIG92ZXJyaWRlXG5cdFx0XHQvLyB0aGUgZnVuY3Rpb24gaGVyZSB0byBhcHBseSB0aGUgc2VsZWN0aW9uIGFsc28gdG8gcmFkaW9zLlxuXG5cdFx0XHQvLyBEbyBub3QgaG9vaywgaWYgd2UncmUgbm90IG9uIGEgcGFnZSB3aXRoIHRoZSBpbmxpbmVFZGl0UG9zdC5cblx0XHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBpbmxpbmVFZGl0UG9zdCB8fCBudWxsID09PSBpbmxpbmVFZGl0UG9zdCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuXHRcdFx0Y29uc3QgZm5FZGl0ID0gaW5saW5lRWRpdFBvc3QuZWRpdDtcblxuXHRcdFx0Ly8gT3ZlcnJpZGUgdGhlIGVkaXQgZnVuY3Rpb24uXG5cdFx0XHRpbmxpbmVFZGl0UG9zdC5lZGl0ID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0XHQvLyBDYWxsIHRoZSBvcmlnaW5hbCBmdW5jdGlvbi5cblx0XHRcdFx0Zm5FZGl0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHQvLyBHZXQgdGhlIGlkICh0aGlzIGlzIGEgY29weSBvZiB3aGF0IGhhcHBlbnMgaW4gdGhlIG9yaWdpbmFsXG5cdFx0XHRcdC8vIGVkaXQgZnVuY3Rpb24pLlxuXHRcdFx0XHRpZiAoIHR5cGVvZiBpZCA9PT0gJ29iamVjdCcgKSB7XG5cdFx0XHRcdFx0aWQgPSB0aGlzLmdldElkKCBpZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSByb3cgZGF0YSAoaG9sZGluZyB0aGUgcG9zdCBkYXRhKSBhbmRcblx0XHRcdFx0Ly8gdG8gdGhlIG5ld2x5IGRpc3BsYXllZCBpbmxpbmUgZWRpdCByb3cuXG5cdFx0XHRcdGNvbnN0IHJvd0RhdGEgPSAkKCAnI2lubGluZV8nICsgaWQgKSxcblx0XHRcdFx0XHRlZGl0Um93ID0gJCggJyNlZGl0LScgKyBpZCApO1xuXG5cdFx0XHRcdC8vIFNlbGVjdCB0aGUgdGVybXMgZm9yIHRoZSB0YXhvbm9teSAodGhpcyBpcyBhIGNvcHkgb2YgdGhlXG5cdFx0XHRcdC8vIG9yaWdpbmFsIGxpbmVzIGluIHRoZSBlZGl0IGZ1bmN0aW9uIGJ1dCB3ZSdyZSB0YXJnZXRpbmdcblx0XHRcdFx0Ly8gcmFkaW9zIGluc3RlYWQgb2YgY2hlY2tib3hlcykuXG5cdFx0XHRcdCQoICcucG9zdF9jYXRlZ29yeScsIHJvd0RhdGEgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRjb25zdCB0ZXJtSWRzID0gJCggdGhpcyApLnRleHQoKTtcblxuXHRcdFx0XHRcdGlmICggdGVybUlkcyApIHtcblx0XHRcdFx0XHRcdGNvbnN0IHRheG5hbWUgPSAkKCB0aGlzICkuYXR0ciggJ2lkJyApLnJlcGxhY2UoICdfJyArIGlkLCAnJyApO1xuXHRcdFx0XHRcdFx0Ly8gVGFyZ2V0IHJhZGlvcyAoaW5zdGVhZCBvZiBjaGVja2JveGVzKS5cblx0XHRcdFx0XHRcdCQoICd1bC4nICsgdGF4bmFtZSArICctY2hlY2tsaXN0IDpyYWRpbycsIGVkaXRSb3cgKVxuXHRcdFx0XHRcdFx0XHQudmFsKCB0ZXJtSWRzLnNwbGl0KCAnLCcgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fTtcblx0XHR9ICk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGUgdGhlIGFsdGVybmF0aXZlIGxhYmVscywgYnkgcHJvdmlkaW5nIGFuICdBZGQgbW9yZSB0aXRsZXMnXG5cdFx0ICogYnV0dG9uIGFuZCBpbnB1dCB0ZXh0cyB3aGVyZSB0byBhZGQgdGhlIGxhYmVscy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAzLjIuMFxuXHRcdCAqL1xuXHRcdCQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gQWRkIHRoZSBkZWxldGUgYnV0dG9uIHRvIHRoZSBleGlzdGluZyBpbnB1dCB0ZXh0cy5cblx0XHRcdCQoICcud2wtYWx0ZXJuYXRpdmUtbGFiZWwgPiAud2wtZGVsZXRlLWJ1dHRvbicgKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHQkKCBldmVudC5kZWxlZ2F0ZVRhcmdldCApLnBhcmVudCgpLnJlbW92ZSgpO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBIYW5kbGUgdGhlIGNsaWNrIG9uIHRoZSAnQWRkIG1vcmUgdGl0bGVzJyBidXR0b24gYW5kIGJpbmQgdGhlXG5cdFx0XHQvLyBldmVudCBvZiB0aGUgKG5ldykgZGVsZXRlIGJ1dHRvbi5cblx0XHRcdCQoICcjd2wtYWRkLWFsdGVybmF0aXZlLWxhYmVscy1idXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0JCggZXZlbnQuZGVsZWdhdGVUYXJnZXQgKS5iZWZvcmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50ID0gJCggJCggJyN3bC10bXBsLWFsdGVybmF0aXZlLWxhYmVsLWlucHV0JyApLmh0bWwoKSApO1xuXHRcdFx0XHRcdCRlbGVtZW50LmNoaWxkcmVuKCAnLndsLWRlbGV0ZS1idXR0b24nICkub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JGVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdHJldHVybiAkZWxlbWVudDtcblx0XHRcdFx0fSApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIGZvciBkdXBsaWNhdGUgdGl0bGUvbGFiZWxzIHZpYSBBSkFYIHdoaWxlIHRoZSB1c2VyIGlzIHR5cGluZy5cblx0XHQgKlxuXHRcdCAqIEBzaW5jZSAzLjIuMFxuXHRcdCAqL1xuXHRcdCQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gcmV0dXJuIGlmIHdlIGFyZSBub3QgaW4gdGhlIGVudGl0eSBlZGl0b3IgcGFnZSAodGhlICp3bFNldHRpbmdzKlxuXHRcdFx0Ly8ganNvbiBpcyBvbmx5IGVucXVldWVkIHRoZXJlKSB3bFNldHRpbmdzLmVudGl0eUJlaW5nRWRpdGVkIGNvbWVzXG5cdFx0XHQvLyBmcm9tIGB3cF9sb2NhbGl6ZV9zY3JpcHRgLCBzbyAnMScgKHRydWUpIG9yICcnIChmYWxzZSkuXG5cdFx0XHRpZiAoIHR5cGVvZiB3bFNldHRpbmdzID09PSAndW5kZWZpbmVkJyB8fFxuXHRcdFx0XHQgMSAhPT0gTnVtYmVyKCB3bFNldHRpbmdzLmVudGl0eUJlaW5nRWRpdGVkICkgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHJpbnQgZXJyb3IgbWVzc2FnZSBpbiBwYWdlIGFuZCBoaWRlIGl0LlxuXHRcdFx0Y29uc3QgZHVwbGljYXRlZEVudGl0eUVycm9yRGl2ID0gJChcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJ3bC1ub3RpY2Ugbm90aWNlIHdsLXN1Z2dlc3Rpb25cIiAnICtcblx0XHRcdFx0JyBpZD1cIndsLXNhbWUtdGl0bGUtZXJyb3JcIj48cD48L3A+PC9kaXY+JyApXG5cdFx0XHRcdC5pbnNlcnRCZWZvcmUoICdkaXYud3JhcCBbbmFtZT1wb3N0XScgKVxuXHRcdFx0XHQuaGlkZSgpO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIENoZWNrIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB0aXRsZSBpcyBhbHJlYWR5IHVzZWQgYnkgb3RoZXJcblx0XHRcdCAqIGVudGl0aWVzLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBzaW5jZSAzLjEwLjBcblx0XHRcdCAqL1xuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gQSBqUXVlcnkgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IGZpcmluZyB0aGUgZXZlbnQuXG5cdFx0XHRcdGNvbnN0ICR0aGlzID0gJCggdGhpcyApO1xuXG5cdFx0XHRcdC8vIERlbGF5IGV4ZWN1dGlvbiBvZiB0aGUgY2hlY2suXG5cdFx0XHRcdGRlbGF5KFxuXHRcdFx0XHRcdCR0aGlzLFxuXHRcdFx0XHRcdGNoZWNrLFxuXHRcdFx0XHRcdCQsXG5cdFx0XHRcdFx0d3AuYWpheCxcblx0XHRcdFx0XHQkdGhpcy52YWwoKSxcblx0XHRcdFx0XHR3bFNldHRpbmdzLnBvc3RfaWQsXG5cdFx0XHRcdFx0d2xTZXR0aW5ncy5sMTBuWyAnWW91IGFscmVhZHkgcHVibGlzaGVkIGFuIGVudGl0eSB3aXRoIHRoZSBzYW1lIG5hbWUnIF0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0XHRcdFx0XHQvLyBTZXQgdGhlIGVycm9yIGRpdiBjb250ZW50LlxuXHRcdFx0XHRcdFx0JCggJyN3bC1zYW1lLXRpdGxlLWVycm9yIHAnICkuaHRtbCggaHRtbCApO1xuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgaHRtbCBjb2RlIGlzbid0IGVtcHR5IHRoZW4gc2hvdyB0aGUgZXJyb3IuXG5cdFx0XHRcdFx0XHRpZiAoICcnICE9PSBodG1sICkge1xuXHRcdFx0XHRcdFx0XHRkdXBsaWNhdGVkRW50aXR5RXJyb3JEaXYuc2hvdygpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGh0bWwgY29kZSBpcyBlbXB0eSwgaGlkZSB0aGUgZXJyb3IgZGl2LlxuXHRcdFx0XHRcdFx0XHRkdXBsaWNhdGVkRW50aXR5RXJyb3JEaXYuaGlkZSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFdoZW5ldmVyIHNvbWV0aGluZyBoYXBwZW5zIGluIHRoZSBlbnRpdHkgdGl0bGUuLi5cblx0XHRcdCQoICdbbmFtZT1wb3N0X3RpdGxlXScgKVxuXHRcdFx0XHQub24oICdjaGFuZ2UgcGFzdGUga2V5dXAnLCBjYWxsYmFjayApXG5cdFx0XHRcdC5lYWNoKCBjYWxsYmFjayApO1xuXHRcdH0gKTtcblxuXHRcdC8qKlxuXHRcdCAqIERyYXcgZGFzaGJvYXJkIGlmIG5lZWRlZFxuXHRcdCAqXG5cdFx0ICogQHNpbmNlIDMuNC4wXG5cdFx0ICovXG5cdFx0JCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyByZXR1cm4gaWYgbm90IG5lZWRlZFxuXHRcdFx0aWYgKCAhICQoICcjd2wtZGFzaGJvYXJkLXdpZGdldC1pbm5lci13cmFwcGVyJyApLmxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkLmdldEpTT04oIGFqYXh1cmwgKyAnP2FjdGlvbj13b3JkbGlmdF9nZXRfc3RhdHMnLCBmdW5jdGlvbiggc3RhdHMgKSB7XG5cdFx0XHRcdC8vIEdldCB0aGUgdHJpcGxlcywgMCBieSBkZWZhdWx0IGlmIHRyaXBsZXMgaXMgbm90IGEgbnVtYmVyLlxuXHRcdFx0XHRjb25zdCB0cmlwbGVzID0gaXNOYU4oIHN0YXRzLnRyaXBsZXMgKSA/IDAgOiBzdGF0cy50cmlwbGVzO1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZSB3aWtpZGF0YSByYXRpb1xuXHRcdFx0XHQvLyBUT0RPIHBlcmNlbnRhZ2Ugc2hvdWxkIGJlIGFkZGVkIHZpYSBjc3Ncblx0XHRcdFx0c3RhdHMud2lraWRhdGEgPSAoXG5cdFx0XHRcdFx0XHRcdFx0XHQgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgdHJpcGxlcyAqIDEwMFxuXHRcdFx0XHRcdFx0XHRcdFx0ICkgLyA5NDc2OTAxNDNcblx0XHRcdFx0XHRcdFx0XHQgKS50b0ZpeGVkKCA1ICkgKyAnJSc7XG5cdFx0XHRcdC8vIENhbGN1bGF0ZSBhbm5vdGF0ZWQgcG9zdHMgcmF0aW9cblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRzdGF0cy5hbm5vdGF0ZWRfcG9zdHNfcGVyY2VudGFnZSA9IChcblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRzdGF0cy5hbm5vdGF0ZWRfcG9zdHMgKiAxMDBcblx0XHRcdFx0XHQpIC8gc3RhdHMucG9zdHNcblx0XHRcdFx0KS50b0ZpeGVkKCAxICk7XG5cdFx0XHRcdC8vIENvbnZlcnQgTmFOIHRvIHplcm8gaWYgbmVlZGVkXG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaW5zaWRlb3V0MTAvd29yZGxpZnQtcGx1Z2luL2lzc3Vlcy8yNjlcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZSwgc3BhY2UtdW5hcnktb3BzXG5cdFx0XHRcdHN0YXRzLmFubm90YXRlZF9wb3N0c19wZXJjZW50YWdlID0gKyBzdGF0cy5hbm5vdGF0ZWRfcG9zdHNfcGVyY2VudGFnZSB8fCAwO1xuXHRcdFx0XHQvLyBUT0RPIHBlcmNlbnRhZ2Ugc2hvdWxkIGJlIGFkZGVkIHZpYSBjc3Ncblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXHRcdFx0XHRzdGF0cy5hbm5vdGF0ZWRfcG9zdHNfcGVyY2VudGFnZSA9IHN0YXRzLmFubm90YXRlZF9wb3N0c19wZXJjZW50YWdlICsgJyUnO1xuXG5cdFx0XHRcdC8vIFBvcHVsYXRlIGFubm90YXRlZCBwb3N0cyBwaWUgY2hhcnRcblx0XHRcdFx0JCggJyN3bC1wb3N0cy1waWUtY2hhcnQgY2lyY2xlJyApLmNzcyhcblx0XHRcdFx0XHQnc3Ryb2tlLWRhc2hhcnJheScsXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRzdGF0cy5hbm5vdGF0ZWRfcG9zdHMgKiAxMDBcblx0XHRcdFx0XHRcdCkgLyBzdGF0cy5wb3N0c1xuXHRcdFx0XHRcdCkgKyAnIDEwMCdcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gUG9wdWxhdGUgYXZlcmFnZSBlbnRpdHkgcmF0aW5ncyBnYXVnZSBjaGFydFxuXHRcdFx0XHQkKCAnI3dsLWVudGl0aWVzLWdhdWdlLWNoYXJ0IC5zdGF0JyApLmNzcyhcblx0XHRcdFx0XHQnc3Ryb2tlLWRhc2hhcnJheScsXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0c3RhdHMucmF0aW5nIC8gMlxuXHRcdFx0XHRcdCkgKyAnIDEwMCdcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBUT0RPIHBlcmNlbnRhZ2Ugc2hvdWxkIGJlIGFkZGVkIHZpYSBjc3Ncblx0XHRcdFx0c3RhdHMucmF0aW5nID0gc3RhdHMucmF0aW5nICsgJyUnO1xuXHRcdFx0XHQvLyBwb3B1bGF0ZSB2YWx1ZSBwbGFjZWhvbGRlcnNcblx0XHRcdFx0Zm9yICggY29uc3QgcHJvcGVydHkgaW4gc3RhdHMgKSB7XG5cdFx0XHRcdFx0JCggJyN3bC1kYXNoYm9hcmQtd2lkZ2V0LScgKyBwcm9wZXJ0eSApLnRleHQoIHN0YXRzWyBwcm9wZXJ0eSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGaW5hbGx5IHNob3cgdGhlIHdpZGdldFxuXHRcdFx0XHQkKCAnI3dsLWRhc2hib2FyZC13aWRnZXQtaW5uZXItd3JhcHBlcicgKS5zaG93KCk7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBzYW1lIGhlaWdodCBmb3Igc3RhdCBncmFwaCB3cmFwcGVyc1xuXHRcdFx0XHQvLyBMaW5rcyBub3Qgd29ya2luZyB3aXRoIGNzcyBhbHRlcm5hdGl2ZXNcblx0XHRcdFx0bGV0IG1pbkhlaWdodCA9IDA7XG5cdFx0XHRcdCQoICcud2wtc3RhdC1ncmFwaC13cmFwcGVyJyApLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGNvbnN0IHN0YXQgPSAkKCB0aGlzICk7XG5cdFx0XHRcdFx0aWYgKCBzdGF0LmhlaWdodCgpID4gbWluSGVpZ2h0ICkge1xuXHRcdFx0XHRcdFx0bWluSGVpZ2h0ID0gc3RhdC5oZWlnaHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHQkKCAnLndsLXN0YXQtZ3JhcGgtd3JhcHBlcicgKS5jc3MoICdtaW4taGVpZ2h0JywgbWluSGVpZ2h0ICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG4pKCBqUXVlcnkgKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYWRtaW4vanMvd29yZGxpZnQtYWRtaW4uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=")}]);