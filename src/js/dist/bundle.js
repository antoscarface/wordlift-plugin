!function(n){var B={};function I(i){if(B[i])return B[i].exports;var Q=B[i]={i:i,l:!1,exports:{}};return n[i].call(Q.exports,Q,Q.exports,I),Q.l=!0,Q.exports}I.m=n,I.c=B,I.d=function(n,B,i){I.o(n,B)||Object.defineProperty(n,B,{enumerable:!0,get:i})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,B){if(1&B&&(n=I(n)),8&B)return n;if(4&B&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(I.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&B&&"string"!=typeof n)for(var Q in n)I.d(i,Q,function(B){return n[B]}.bind(null,Q));return i},I.n=function(n){var B=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(B,"a",B),B},I.o=function(n,B){return Object.prototype.hasOwnProperty.call(n,B)},I.p="",I(I.s=142)}({142:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js\nvar defineProperty = __webpack_require__(16);\nvar defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);\n\n// CONCATENATED MODULE: ./src/Public/analytics.js\n\n\n/**\n * A collection of functions and logic to handle sending of entity data to an\n * external analytics tracker.\n *\n * Objects: `ga`, `__gaTracker` are supported as is `gtag`.\n *\n * NOTE: the `__gaTracker` object is a common remap name in WordPress.\n */\n(function () {\n  // Only run after page has loaded.\n  document.addEventListener("DOMContentLoaded", function (event) {\n    // We should have an entity object by here but if not short circuit.\n    if (typeof wordliftAnalyticsEntityData === "undefined") {\n      return;\n    }\n    /**\n     * Promise to handle detection and return of an analytics object.\n     *\n     * @type {Promise}\n     */\n\n\n    var detectAnalyticsObject = new Promise(function (resolve, reject) {\n      var analyticsObj = getAnalyticsObject();\n      return resolve(analyticsObj);\n    });\n    /**\n     * A function returning the promise that deals with creating items\n     * to send and passing them to the correct send function.\n     *\n     * @method\n     * @param  {object} analyticsObj an analytics tracking object that is the resolve of the detect function.\n     * @return {Promise}\n     */\n\n    var sendAnalyticsData = function sendAnalyticsData(analyticsObj) {\n      return new Promise(function (resolve, reject) {\n        // if we dont have an object to push into and an object\n        // with config then this is a failure - reject.\n        if ("undefined" === typeof analyticsObj || "undefined" === typeof wordliftAnalyticsConfigData) {\n          return reject();\n        } // setup the custom dimention names.\n\n\n        var dimX = "dimension" + wordliftAnalyticsConfigData.entity_uri_dimension;\n        var dimY = "dimension" + wordliftAnalyticsConfigData.entity_type_dimension; // Create an array of all the individual entities.\n\n        var entities = [];\n\n        for (var key in wordliftAnalyticsEntityData) {\n          if (wordliftAnalyticsEntityData.hasOwnProperty(key)) {\n            entities.push(wordliftAnalyticsEntityData[key]);\n          }\n        } // Count the total entities we have to send.\n\n\n        var entitiesTotal = entities.length; // console.log( `Going to send analytics events using ${analyticsObj.__wl_type} object type.` );\n\n        /**\n         * Depending on the tracking object type send the data\n         * to the correspending service.\n         */\n\n        if ("ga" === analyticsObj.__wl_type) {\n          // This is `ga` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGaEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        } else if ("gtag" === analyticsObj.__wl_type) {\n          // This is `gtag` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGtagEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        } else if ("gtm" === analyticsObj.__wl_type) {\n          // This is `gtag` style object.\n          for (var i = 0; i < entitiesTotal; i++) {\n            sendGtmEvent(analyticsObj, dimX, dimY, entities[i].label, entities[i].uri, entities[i].type);\n          }\n        } // @TODO handle failure.\n        // resolve to finish.\n\n\n        return resolve(true);\n      });\n    }; // Fire off the promise chain to detect and send analytics data.\n\n\n    detectAnalyticsObject.then(function (analyticsObj) {\n      return sendAnalyticsData(analyticsObj);\n    });\n  });\n  /**\n   * Detects and returns a supported analytics object if one exists.\n   *\n   * @method getAnalyticsObject\n   * @return {object|bool}\n   */\n\n  function getAnalyticsObject() {\n    var obj = false; // detect GTAG, GTM, GA in that order.\n\n    if (window.gtag) {\n      obj = window.gtag;\n      obj.__wl_type = "gtag";\n    } else if (window.dataLayer) {\n      obj = window.dataLayer;\n      obj.__wl_type = "gtm";\n    } else if (window.ga) {\n      obj = window.ga;\n      obj.__wl_type = "ga";\n    } else if (window.__gaTracker) {\n      obj = window.__gaTracker;\n      obj.__wl_type = "ga";\n    } // console.log( `Found a ${obj.__wl_type} analytics object.` );\n\n\n    return obj;\n  }\n  /**\n   * Wrapper function for pushing entity analytics data to ga style tracker.\n   *\n   * @method sendGaEvent\n   * @param  {ga} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n\n\n  function sendGaEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    var _analyticsObj;\n\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    }\n\n    analyticsObj("send", "event", "WordLift", "Mentions", label, 1, (_analyticsObj = {}, defineProperty_default()(_analyticsObj, dimX, uri), defineProperty_default()(_analyticsObj, dimY, type), defineProperty_default()(_analyticsObj, "nonInteraction", true), _analyticsObj));\n  }\n  /**\n   * Wrapper function for pushing entity analytics data to gtag.\n   *\n   * @method sendGtagEvent\n   * @param  {gtag} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n\n\n  function sendGtagEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    var _analyticsObj2;\n\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    } // console.log("Sending gtag event ...");\n\n\n    analyticsObj("event", "Mentions", (_analyticsObj2 = {\n      event_category: "WordLift",\n      event_label: label,\n      value: 1\n    }, defineProperty_default()(_analyticsObj2, dimX, uri), defineProperty_default()(_analyticsObj2, dimY, type), defineProperty_default()(_analyticsObj2, "non_interaction", true), _analyticsObj2));\n  }\n  /**\n   * Wrapper function for pushing entity analytics data to gtag.\n   *\n   * @method sendGtagEvent\n   * @param  {gtag} analyticsObject The anlytics object we push into.\n   * @param  {string} dimX the name of the first custom dimension.\n   * @param  {string} dimY the name of the second custom dimension.\n   * @param  {string} label a string to use as the label.\n   * @param  {string} uri the uri of this entity.\n   * @param  {string} type the entity type.\n   */\n\n\n  function sendGtmEvent(analyticsObj, dimX, dimY, label, uri, type) {\n    // Double check we have the config object before continuing.\n    if ("undefined" === typeof wordliftAnalyticsConfigData) {\n      return false;\n    } // console.log("Sending gtm event...");\n\n\n    analyticsObj.push({\n      "event": "Mentions",\n      "wl_event_action": "Mentions",\n      "wl_event_category": "WordLift",\n      "wl_event_label": label,\n      "wl_event_value": 1,\n      "wl_event_uri": uri,\n      "wl_index_uri": dimX.replace(/^\\D+/g, \'\'),\n      "wl_event_type": type,\n      "wl_index_type": dimY.replace(/^\\D+/g, \'\'),\n      "non_interaction": true\n    });\n  }\n})();\n// CONCATENATED MODULE: ./src/Public/index.js\n/**\n * Internal dependencies.\n */\n // Set a reference to the WordLift settings.\n\nvar settings = window.wlSettings;\n/**\n * Build the request URL, inclusive of the query string parameters.\n *\n * @since 3.19.1\n *\n * @param params {{jsonld_url, postId, isHome}} The query parameters.\n * @returns {string} The request URl.\n */\n\nvar buildUrl = function buildUrl(params) {\n  // Join with `?` or `&`.\n  // const joinChar = 0 <= params.apiUrl.indexOf("?") ? "&" : "?";\n  // Build the URL\n  var url = params[\'jsonld_url\'] + ("undefined" !== typeof params.isHome ? 0 : params.postId); // params[\'jsonld_url\'] +\n  // // joinChar +\n  // // "action=wl_jsonld" +\n  // // Append the post id parameter.\n  // ("undefined" !== typeof params.postId ? "&id=" + params.postId : "") +\n  // // Append the homepage parameter.\n  // ("undefined" !== typeof params.isHome ? "&homepage=true" : "");\n\n  return url;\n};\n/**\n * Load the JSON-LD.\n *\n * @since 3.0.0\n */\n\n\nvar loadJsonLd = function loadJsonLd() {\n  // Bail out it the container doesn\'t now about fetch.\n  if ("undefined" === typeof fetch) return; // Check if the JSON-LD is disabled, i.e. if there\'s a `jsonld_enabled`\n  // setting explicitly defined with a value different from \'1\'.\n\n  if ("undefined" !== typeof settings["jsonld_enabled"] && "1" !== settings["jsonld_enabled"]) {\n    return;\n  } // Check that we have a post id or it\'s homepage, otherwise exit.\n\n\n  if ("undefined" === typeof settings.postId && "undefined" === typeof settings.isHome) {\n    return;\n  } // Get the request URL.\n\n\n  var url = buildUrl(settings); // Finally fetch the URL.\n  //\n  // DO NOT use here `new URL(...)` / `URL.searchParams`: Google SDTT doesn\'t understand them.\n\n  fetch(url).then(function (response) {\n    return response.text();\n  }).then(function (body) {\n    // Use `document.createElement`. See https://github.com/insideout10/wordlift-plugin/issues/810.\n    var script = document.createElement("script");\n    script.type = "application/ld+json";\n    script.innerText = body;\n    document.head.appendChild(script);\n  });\n};\n\nloadJsonLd(); //\n// window.addEventListener("load", loadJsonLd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUHVibGljL2FuYWx5dGljcy5qcz85NWZiIiwid2VicGFjazovLy8uL3NyYy9QdWJsaWMvaW5kZXguanM/ODFiYSJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIndvcmRsaWZ0QW5hbHl0aWNzRW50aXR5RGF0YSIsImRldGVjdEFuYWx5dGljc09iamVjdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYW5hbHl0aWNzT2JqIiwiZ2V0QW5hbHl0aWNzT2JqZWN0Iiwic2VuZEFuYWx5dGljc0RhdGEiLCJ3b3JkbGlmdEFuYWx5dGljc0NvbmZpZ0RhdGEiLCJkaW1YIiwiZW50aXR5X3VyaV9kaW1lbnNpb24iLCJkaW1ZIiwiZW50aXR5X3R5cGVfZGltZW5zaW9uIiwiZW50aXRpZXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJlbnRpdGllc1RvdGFsIiwibGVuZ3RoIiwiX193bF90eXBlIiwiaSIsInNlbmRHYUV2ZW50IiwibGFiZWwiLCJ1cmkiLCJ0eXBlIiwic2VuZEd0YWdFdmVudCIsInNlbmRHdG1FdmVudCIsInRoZW4iLCJvYmoiLCJ3aW5kb3ciLCJndGFnIiwiZGF0YUxheWVyIiwiZ2EiLCJfX2dhVHJhY2tlciIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiLCJ2YWx1ZSIsInJlcGxhY2UiLCJzZXR0aW5ncyIsIndsU2V0dGluZ3MiLCJidWlsZFVybCIsInBhcmFtcyIsInVybCIsImlzSG9tZSIsInBvc3RJZCIsImxvYWRKc29uTGQiLCJmZXRjaCIsInJlc3BvbnNlIiwidGV4dCIsImJvZHkiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFTQSxDQUFDLFlBQVc7QUFDVjtBQUNBQSxVQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxVQUFTQyxLQUFULEVBQWdCO0FBQzVEO0FBQ0EsUUFBSSxPQUFPQywyQkFBUCxLQUF1QyxXQUEzQyxFQUF3RDtBQUN0RDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxRQUFJQyxxQkFBcUIsR0FBRyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDaEUsVUFBSUMsWUFBWSxHQUFHQyxrQkFBa0IsRUFBckM7QUFDQSxhQUFPSCxPQUFPLENBQUNFLFlBQUQsQ0FBZDtBQUNELEtBSDJCLENBQTVCO0FBS0E7Ozs7Ozs7OztBQVFBLFFBQUlFLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBU0YsWUFBVCxFQUF1QjtBQUM3QyxhQUFPLElBQUlILE9BQUosQ0FBWSxVQUFTQyxPQUFULEVBQWtCQyxNQUFsQixFQUEwQjtBQUMzQztBQUNBO0FBQ0EsWUFBSSxnQkFBZ0IsT0FBT0MsWUFBdkIsSUFBdUMsZ0JBQWdCLE9BQU9HLDJCQUFsRSxFQUErRjtBQUM3RixpQkFBT0osTUFBTSxFQUFiO0FBQ0QsU0FMMEMsQ0FPM0M7OztBQUNBLFlBQUlLLElBQUksR0FBRyxjQUFjRCwyQkFBMkIsQ0FBQ0Usb0JBQXJEO0FBQ0EsWUFBSUMsSUFBSSxHQUFHLGNBQWNILDJCQUEyQixDQUFDSSxxQkFBckQsQ0FUMkMsQ0FXM0M7O0FBQ0EsWUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsYUFBSyxJQUFJQyxHQUFULElBQWdCZCwyQkFBaEIsRUFBNkM7QUFDM0MsY0FBSUEsMkJBQTJCLENBQUNlLGNBQTVCLENBQTJDRCxHQUEzQyxDQUFKLEVBQXFEO0FBQ25ERCxvQkFBUSxDQUFDRyxJQUFULENBQWNoQiwyQkFBMkIsQ0FBQ2MsR0FBRCxDQUF6QztBQUNEO0FBQ0YsU0FqQjBDLENBbUIzQzs7O0FBQ0EsWUFBSUcsYUFBYSxHQUFHSixRQUFRLENBQUNLLE1BQTdCLENBcEIyQyxDQXNCM0M7O0FBRUE7Ozs7O0FBSUEsWUFBSSxTQUFTYixZQUFZLENBQUNjLFNBQTFCLEVBQXFDO0FBQ25DO0FBQ0EsZUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxhQUFwQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUN0Q0MsdUJBQVcsQ0FBQ2hCLFlBQUQsRUFBZUksSUFBZixFQUFxQkUsSUFBckIsRUFBMkJFLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSLENBQVlFLEtBQXZDLEVBQThDVCxRQUFRLENBQUNPLENBQUQsQ0FBUixDQUFZRyxHQUExRCxFQUErRFYsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWUksSUFBM0UsQ0FBWDtBQUNEO0FBQ0YsU0FMRCxNQUtPLElBQUksV0FBV25CLFlBQVksQ0FBQ2MsU0FBNUIsRUFBdUM7QUFDNUM7QUFDQSxlQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILGFBQXBCLEVBQW1DRyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDSyx5QkFBYSxDQUFDcEIsWUFBRCxFQUFlSSxJQUFmLEVBQXFCRSxJQUFyQixFQUEyQkUsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWUUsS0FBdkMsRUFBOENULFFBQVEsQ0FBQ08sQ0FBRCxDQUFSLENBQVlHLEdBQTFELEVBQStEVixRQUFRLENBQUNPLENBQUQsQ0FBUixDQUFZSSxJQUEzRSxDQUFiO0FBQ0Q7QUFDTCxTQUxTLE1BS0gsSUFBSSxVQUFVbkIsWUFBWSxDQUFDYyxTQUEzQixFQUFzQztBQUN4QztBQUNBLGVBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsYUFBcEIsRUFBbUNHLENBQUMsRUFBcEMsRUFBd0M7QUFDdENNLHdCQUFZLENBQUNyQixZQUFELEVBQWVJLElBQWYsRUFBcUJFLElBQXJCLEVBQTJCRSxRQUFRLENBQUNPLENBQUQsQ0FBUixDQUFZRSxLQUF2QyxFQUE4Q1QsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWUcsR0FBMUQsRUFBK0RWLFFBQVEsQ0FBQ08sQ0FBRCxDQUFSLENBQVlJLElBQTNFLENBQVo7QUFDRDtBQUNGLFNBM0MwQyxDQTRDM0M7QUFDQTs7O0FBQ0EsZUFBT3JCLE9BQU8sQ0FBQyxJQUFELENBQWQ7QUFDRCxPQS9DTSxDQUFQO0FBZ0RELEtBakRELENBeEI0RCxDQTJFNUQ7OztBQUNBRix5QkFBcUIsQ0FBQzBCLElBQXRCLENBQTJCLFVBQUF0QixZQUFZO0FBQUEsYUFBSUUsaUJBQWlCLENBQUNGLFlBQUQsQ0FBckI7QUFBQSxLQUF2QztBQUNELEdBN0VEO0FBK0VBOzs7Ozs7O0FBTUEsV0FBU0Msa0JBQVQsR0FBOEI7QUFDNUIsUUFBSXNCLEdBQUcsR0FBRyxLQUFWLENBRDRCLENBRTVCOztBQUNILFFBQUlDLE1BQU0sQ0FBQ0MsSUFBWCxFQUFpQjtBQUNaRixTQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBYjtBQUNBRixTQUFHLENBQUNULFNBQUosR0FBZ0IsTUFBaEI7QUFDRCxLQUhKLE1BR1UsSUFBSVUsTUFBTSxDQUFDRSxTQUFYLEVBQXNCO0FBQzNCSCxTQUFHLEdBQUdDLE1BQU0sQ0FBQ0UsU0FBYjtBQUNBSCxTQUFHLENBQUNULFNBQUosR0FBZ0IsS0FBaEI7QUFDRCxLQUhNLE1BR0EsSUFBSVUsTUFBTSxDQUFDRyxFQUFYLEVBQWU7QUFDcEJKLFNBQUcsR0FBR0MsTUFBTSxDQUFDRyxFQUFiO0FBQ0FKLFNBQUcsQ0FBQ1QsU0FBSixHQUFnQixJQUFoQjtBQUNELEtBSE0sTUFHQSxJQUFJVSxNQUFNLENBQUNJLFdBQVgsRUFBd0I7QUFDN0JMLFNBQUcsR0FBR0MsTUFBTSxDQUFDSSxXQUFiO0FBQ0FMLFNBQUcsQ0FBQ1QsU0FBSixHQUFnQixJQUFoQjtBQUNELEtBZjJCLENBaUI1Qjs7O0FBRUEsV0FBT1MsR0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFXQSxXQUFTUCxXQUFULENBQXFCaEIsWUFBckIsRUFBbUNJLElBQW5DLEVBQXlDRSxJQUF6QyxFQUErQ1csS0FBL0MsRUFBc0RDLEdBQXRELEVBQTJEQyxJQUEzRCxFQUFpRTtBQUFBOztBQUMvRDtBQUNBLFFBQUksZ0JBQWdCLE9BQU9oQiwyQkFBM0IsRUFBd0Q7QUFDdEQsYUFBTyxLQUFQO0FBQ0Q7O0FBQ0RILGdCQUFZLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsRUFBOEIsVUFBOUIsRUFBMENpQixLQUExQyxFQUFpRCxDQUFqRCwrREFDVGIsSUFEUyxFQUNGYyxHQURFLDJDQUVUWixJQUZTLEVBRUZhLElBRkUsNkRBR00sSUFITixrQkFBWjtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFXQSxXQUFTQyxhQUFULENBQXVCcEIsWUFBdkIsRUFBcUNJLElBQXJDLEVBQTJDRSxJQUEzQyxFQUFpRFcsS0FBakQsRUFBd0RDLEdBQXhELEVBQTZEQyxJQUE3RCxFQUFtRTtBQUFBOztBQUNqRTtBQUNBLFFBQUksZ0JBQWdCLE9BQU9oQiwyQkFBM0IsRUFBd0Q7QUFDdEQsYUFBTyxLQUFQO0FBQ0QsS0FKZ0UsQ0FNakU7OztBQUVBSCxnQkFBWSxDQUFDLE9BQUQsRUFBVSxVQUFWO0FBQ1Y2QixvQkFBYyxFQUFFLFVBRE47QUFFVkMsaUJBQVcsRUFBRWIsS0FGSDtBQUdWYyxXQUFLLEVBQUU7QUFIRyxnREFJVDNCLElBSlMsRUFJRmMsR0FKRSw0Q0FLVFosSUFMUyxFQUtGYSxJQUxFLCtEQU1PLElBTlAsbUJBQVo7QUFRRDtBQUVEOzs7Ozs7Ozs7Ozs7O0FBV0EsV0FBU0UsWUFBVCxDQUFzQnJCLFlBQXRCLEVBQW9DSSxJQUFwQyxFQUEwQ0UsSUFBMUMsRUFBZ0RXLEtBQWhELEVBQXVEQyxHQUF2RCxFQUE0REMsSUFBNUQsRUFBa0U7QUFDaEU7QUFDQSxRQUFJLGdCQUFnQixPQUFPaEIsMkJBQTNCLEVBQXdEO0FBQ3RELGFBQU8sS0FBUDtBQUNELEtBSitELENBTWhFOzs7QUFFQUgsZ0JBQVksQ0FBQ1csSUFBYixDQUFrQjtBQUNoQixlQUFxQixVQURMO0FBRWhCLHlCQUFxQixVQUZMO0FBR2hCLDJCQUFxQixVQUhMO0FBSWhCLHdCQUFxQk0sS0FKTDtBQUtoQix3QkFBcUIsQ0FMTDtBQU1oQixzQkFBcUJDLEdBTkw7QUFPbkIsc0JBQXFCZCxJQUFJLENBQUM0QixPQUFMLENBQWMsT0FBZCxFQUF1QixFQUF2QixDQVBGO0FBUWhCLHVCQUFxQmIsSUFSTDtBQVNuQix1QkFBcUJiLElBQUksQ0FBQzBCLE9BQUwsQ0FBYyxPQUFkLEVBQXVCLEVBQXZCLENBVEY7QUFVbkIseUJBQXFCO0FBVkYsS0FBbEI7QUFZRDtBQUNGLENBak1ELEk7O0FDVEE7OztDQUtBOztBQUNBLElBQU1DLFFBQVEsR0FBR1QsTUFBTSxDQUFDVSxVQUF4QjtBQUVBOzs7Ozs7Ozs7QUFRQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVQyxNQUFWLEVBQWtCO0FBQy9CO0FBQ0E7QUFFQTtBQUNBLE1BQU1DLEdBQUcsR0FBR0QsTUFBTSxDQUFDLFlBQUQsQ0FBTixJQUF5QixnQkFBZ0IsT0FBT0EsTUFBTSxDQUFDRSxNQUE5QixHQUF1QyxDQUF2QyxHQUEyQ0YsTUFBTSxDQUFDRyxNQUEzRSxDQUFaLENBTCtCLENBTTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVKLFNBQU9GLEdBQVA7QUFDSCxDQWZEO0FBaUJBOzs7Ozs7O0FBS0EsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUMzQjtBQUNBLE1BQUksZ0JBQWdCLE9BQU9DLEtBQTNCLEVBQWtDLE9BRlAsQ0FJM0I7QUFDQTs7QUFDQSxNQUNJLGdCQUFnQixPQUFPUixRQUFRLENBQUMsZ0JBQUQsQ0FBL0IsSUFDQSxRQUFRQSxRQUFRLENBQUMsZ0JBQUQsQ0FGcEIsRUFHRTtBQUNFO0FBQ0gsR0FYMEIsQ0FhM0I7OztBQUNBLE1BQ0ksZ0JBQWdCLE9BQU9BLFFBQVEsQ0FBQ00sTUFBaEMsSUFDQSxnQkFBZ0IsT0FBT04sUUFBUSxDQUFDSyxNQUZwQyxFQUdFO0FBQ0U7QUFDSCxHQW5CMEIsQ0FxQjNCOzs7QUFDQSxNQUFNRCxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0YsUUFBRCxDQUFwQixDQXRCMkIsQ0F3QjNCO0FBQ0E7QUFDQTs7QUFDQVEsT0FBSyxDQUFDSixHQUFELENBQUwsQ0FDS2YsSUFETCxDQUNVLFVBQVVvQixRQUFWLEVBQW9CO0FBQ3RCLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0gsR0FITCxFQUlLckIsSUFKTCxDQUlVLFVBQVVzQixJQUFWLEVBQWdCO0FBQ2xCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHckQsUUFBUSxDQUFDc0QsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FELFVBQU0sQ0FBQzFCLElBQVAsR0FBYyxxQkFBZDtBQUNBMEIsVUFBTSxDQUFDRSxTQUFQLEdBQW1CSCxJQUFuQjtBQUNBcEQsWUFBUSxDQUFDd0QsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixNQUExQjtBQUNILEdBVkw7QUFXSCxDQXRDRDs7QUF3Q0FMLFVBQVUsRyxDQUVWO0FBQ0EiLCJmaWxlIjoiMTQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIGFuZCBsb2dpYyB0byBoYW5kbGUgc2VuZGluZyBvZiBlbnRpdHkgZGF0YSB0byBhblxuICogZXh0ZXJuYWwgYW5hbHl0aWNzIHRyYWNrZXIuXG4gKlxuICogT2JqZWN0czogYGdhYCwgYF9fZ2FUcmFja2VyYCBhcmUgc3VwcG9ydGVkIGFzIGlzIGBndGFnYC5cbiAqXG4gKiBOT1RFOiB0aGUgYF9fZ2FUcmFja2VyYCBvYmplY3QgaXMgYSBjb21tb24gcmVtYXAgbmFtZSBpbiBXb3JkUHJlc3MuXG4gKi9cblxuKGZ1bmN0aW9uKCkge1xuICAvLyBPbmx5IHJ1biBhZnRlciBwYWdlIGhhcyBsb2FkZWQuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gV2Ugc2hvdWxkIGhhdmUgYW4gZW50aXR5IG9iamVjdCBieSBoZXJlIGJ1dCBpZiBub3Qgc2hvcnQgY2lyY3VpdC5cbiAgICBpZiAodHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzRW50aXR5RGF0YSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb21pc2UgdG8gaGFuZGxlIGRldGVjdGlvbiBhbmQgcmV0dXJuIG9mIGFuIGFuYWx5dGljcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAdHlwZSB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICB2YXIgZGV0ZWN0QW5hbHl0aWNzT2JqZWN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgYW5hbHl0aWNzT2JqID0gZ2V0QW5hbHl0aWNzT2JqZWN0KCk7XG4gICAgICByZXR1cm4gcmVzb2x2ZShhbmFseXRpY3NPYmopO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIHByb21pc2UgdGhhdCBkZWFscyB3aXRoIGNyZWF0aW5nIGl0ZW1zXG4gICAgICogdG8gc2VuZCBhbmQgcGFzc2luZyB0aGVtIHRvIHRoZSBjb3JyZWN0IHNlbmQgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAbWV0aG9kXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBhbmFseXRpY3NPYmogYW4gYW5hbHl0aWNzIHRyYWNraW5nIG9iamVjdCB0aGF0IGlzIHRoZSByZXNvbHZlIG9mIHRoZSBkZXRlY3QgZnVuY3Rpb24uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICB2YXIgc2VuZEFuYWx5dGljc0RhdGEgPSBmdW5jdGlvbihhbmFseXRpY3NPYmopIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gaWYgd2UgZG9udCBoYXZlIGFuIG9iamVjdCB0byBwdXNoIGludG8gYW5kIGFuIG9iamVjdFxuICAgICAgICAvLyB3aXRoIGNvbmZpZyB0aGVuIHRoaXMgaXMgYSBmYWlsdXJlIC0gcmVqZWN0LlxuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGFuYWx5dGljc09iaiB8fCBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd29yZGxpZnRBbmFseXRpY3NDb25maWdEYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0dXAgdGhlIGN1c3RvbSBkaW1lbnRpb24gbmFtZXMuXG4gICAgICAgIHZhciBkaW1YID0gXCJkaW1lbnNpb25cIiArIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YS5lbnRpdHlfdXJpX2RpbWVuc2lvbjtcbiAgICAgICAgdmFyIGRpbVkgPSBcImRpbWVuc2lvblwiICsgd29yZGxpZnRBbmFseXRpY3NDb25maWdEYXRhLmVudGl0eV90eXBlX2RpbWVuc2lvbjtcblxuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHRoZSBpbmRpdmlkdWFsIGVudGl0aWVzLlxuICAgICAgICB2YXIgZW50aXRpZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHdvcmRsaWZ0QW5hbHl0aWNzRW50aXR5RGF0YSkge1xuICAgICAgICAgIGlmICh3b3JkbGlmdEFuYWx5dGljc0VudGl0eURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZW50aXRpZXMucHVzaCh3b3JkbGlmdEFuYWx5dGljc0VudGl0eURhdGFba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ291bnQgdGhlIHRvdGFsIGVudGl0aWVzIHdlIGhhdmUgdG8gc2VuZC5cbiAgICAgICAgdmFyIGVudGl0aWVzVG90YWwgPSBlbnRpdGllcy5sZW5ndGg7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coIGBHb2luZyB0byBzZW5kIGFuYWx5dGljcyBldmVudHMgdXNpbmcgJHthbmFseXRpY3NPYmouX193bF90eXBlfSBvYmplY3QgdHlwZS5gICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlcGVuZGluZyBvbiB0aGUgdHJhY2tpbmcgb2JqZWN0IHR5cGUgc2VuZCB0aGUgZGF0YVxuICAgICAgICAgKiB0byB0aGUgY29ycmVzcGVuZGluZyBzZXJ2aWNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKFwiZ2FcIiA9PT0gYW5hbHl0aWNzT2JqLl9fd2xfdHlwZSkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgYGdhYCBzdHlsZSBvYmplY3QuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllc1RvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIHNlbmRHYUV2ZW50KGFuYWx5dGljc09iaiwgZGltWCwgZGltWSwgZW50aXRpZXNbaV0ubGFiZWwsIGVudGl0aWVzW2ldLnVyaSwgZW50aXRpZXNbaV0udHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFwiZ3RhZ1wiID09PSBhbmFseXRpY3NPYmouX193bF90eXBlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBgZ3RhZ2Agc3R5bGUgb2JqZWN0LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXNUb3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBzZW5kR3RhZ0V2ZW50KGFuYWx5dGljc09iaiwgZGltWCwgZGltWSwgZW50aXRpZXNbaV0ubGFiZWwsIGVudGl0aWVzW2ldLnVyaSwgZW50aXRpZXNbaV0udHlwZSk7XG4gICAgICAgICAgfVxuXHQgICAgfSBlbHNlIGlmIChcImd0bVwiID09PSBhbmFseXRpY3NPYmouX193bF90eXBlKSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBgZ3RhZ2Agc3R5bGUgb2JqZWN0LlxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXNUb3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBzZW5kR3RtRXZlbnQoYW5hbHl0aWNzT2JqLCBkaW1YLCBkaW1ZLCBlbnRpdGllc1tpXS5sYWJlbCwgZW50aXRpZXNbaV0udXJpLCBlbnRpdGllc1tpXS50eXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQFRPRE8gaGFuZGxlIGZhaWx1cmUuXG4gICAgICAgIC8vIHJlc29sdmUgdG8gZmluaXNoLlxuICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBGaXJlIG9mZiB0aGUgcHJvbWlzZSBjaGFpbiB0byBkZXRlY3QgYW5kIHNlbmQgYW5hbHl0aWNzIGRhdGEuXG4gICAgZGV0ZWN0QW5hbHl0aWNzT2JqZWN0LnRoZW4oYW5hbHl0aWNzT2JqID0+IHNlbmRBbmFseXRpY3NEYXRhKGFuYWx5dGljc09iaikpO1xuICB9KTtcblxuICAvKipcbiAgICogRGV0ZWN0cyBhbmQgcmV0dXJucyBhIHN1cHBvcnRlZCBhbmFseXRpY3Mgb2JqZWN0IGlmIG9uZSBleGlzdHMuXG4gICAqXG4gICAqIEBtZXRob2QgZ2V0QW5hbHl0aWNzT2JqZWN0XG4gICAqIEByZXR1cm4ge29iamVjdHxib29sfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0QW5hbHl0aWNzT2JqZWN0KCkge1xuICAgIHZhciBvYmogPSBmYWxzZTtcbiAgICAvLyBkZXRlY3QgR1RBRywgR1RNLCBHQSBpbiB0aGF0IG9yZGVyLlxuXHRpZiAod2luZG93Lmd0YWcpIHtcbiAgICAgIG9iaiA9IHdpbmRvdy5ndGFnO1xuICAgICAgb2JqLl9fd2xfdHlwZSA9IFwiZ3RhZ1wiO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmRhdGFMYXllcikge1xuICAgICAgb2JqID0gd2luZG93LmRhdGFMYXllcjtcbiAgICAgIG9iai5fX3dsX3R5cGUgPSBcImd0bVwiO1xuICAgIH0gZWxzZSBpZiAod2luZG93LmdhKSB7XG4gICAgICBvYmogPSB3aW5kb3cuZ2E7XG4gICAgICBvYmouX193bF90eXBlID0gXCJnYVwiO1xuICAgIH0gZWxzZSBpZiAod2luZG93Ll9fZ2FUcmFja2VyKSB7XG4gICAgICBvYmogPSB3aW5kb3cuX19nYVRyYWNrZXI7XG4gICAgICBvYmouX193bF90eXBlID0gXCJnYVwiO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCBgRm91bmQgYSAke29iai5fX3dsX3R5cGV9IGFuYWx5dGljcyBvYmplY3QuYCApO1xuXG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIGZvciBwdXNoaW5nIGVudGl0eSBhbmFseXRpY3MgZGF0YSB0byBnYSBzdHlsZSB0cmFja2VyLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbmRHYUV2ZW50XG4gICAqIEBwYXJhbSAge2dhfSBhbmFseXRpY3NPYmplY3QgVGhlIGFubHl0aWNzIG9iamVjdCB3ZSBwdXNoIGludG8uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWCB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaW1ZIHRoZSBuYW1lIG9mIHRoZSBzZWNvbmQgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsYWJlbCBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVyaSB0aGUgdXJpIG9mIHRoaXMgZW50aXR5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgdGhlIGVudGl0eSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gc2VuZEdhRXZlbnQoYW5hbHl0aWNzT2JqLCBkaW1YLCBkaW1ZLCBsYWJlbCwgdXJpLCB0eXBlKSB7XG4gICAgLy8gRG91YmxlIGNoZWNrIHdlIGhhdmUgdGhlIGNvbmZpZyBvYmplY3QgYmVmb3JlIGNvbnRpbnVpbmcuXG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3b3JkbGlmdEFuYWx5dGljc0NvbmZpZ0RhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYW5hbHl0aWNzT2JqKFwic2VuZFwiLCBcImV2ZW50XCIsIFwiV29yZExpZnRcIiwgXCJNZW50aW9uc1wiLCBsYWJlbCwgMSwge1xuICAgICAgW2RpbVhdOiB1cmksXG4gICAgICBbZGltWV06IHR5cGUsXG4gICAgICBub25JbnRlcmFjdGlvbjogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyYXBwZXIgZnVuY3Rpb24gZm9yIHB1c2hpbmcgZW50aXR5IGFuYWx5dGljcyBkYXRhIHRvIGd0YWcuXG4gICAqXG4gICAqIEBtZXRob2Qgc2VuZEd0YWdFdmVudFxuICAgKiBAcGFyYW0gIHtndGFnfSBhbmFseXRpY3NPYmplY3QgVGhlIGFubHl0aWNzIG9iamVjdCB3ZSBwdXNoIGludG8uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWCB0aGUgbmFtZSBvZiB0aGUgZmlyc3QgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBkaW1ZIHRoZSBuYW1lIG9mIHRoZSBzZWNvbmQgY3VzdG9tIGRpbWVuc2lvbi5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsYWJlbCBhIHN0cmluZyB0byB1c2UgYXMgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVyaSB0aGUgdXJpIG9mIHRoaXMgZW50aXR5LlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHR5cGUgdGhlIGVudGl0eSB0eXBlLlxuICAgKi9cbiAgZnVuY3Rpb24gc2VuZEd0YWdFdmVudChhbmFseXRpY3NPYmosIGRpbVgsIGRpbVksIGxhYmVsLCB1cmksIHR5cGUpIHtcbiAgICAvLyBEb3VibGUgY2hlY2sgd2UgaGF2ZSB0aGUgY29uZmlnIG9iamVjdCBiZWZvcmUgY29udGludWluZy5cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VuZGluZyBndGFnIGV2ZW50IC4uLlwiKTtcblxuICAgIGFuYWx5dGljc09iaihcImV2ZW50XCIsIFwiTWVudGlvbnNcIiwge1xuICAgICAgZXZlbnRfY2F0ZWdvcnk6IFwiV29yZExpZnRcIixcbiAgICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAgIHZhbHVlOiAxLFxuICAgICAgW2RpbVhdOiB1cmksXG4gICAgICBbZGltWV06IHR5cGUsXG4gICAgICBub25faW50ZXJhY3Rpb246IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGZ1bmN0aW9uIGZvciBwdXNoaW5nIGVudGl0eSBhbmFseXRpY3MgZGF0YSB0byBndGFnLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbmRHdGFnRXZlbnRcbiAgICogQHBhcmFtICB7Z3RhZ30gYW5hbHl0aWNzT2JqZWN0IFRoZSBhbmx5dGljcyBvYmplY3Qgd2UgcHVzaCBpbnRvLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGRpbVggdGhlIG5hbWUgb2YgdGhlIGZpcnN0IGN1c3RvbSBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZGltWSB0aGUgbmFtZSBvZiB0aGUgc2Vjb25kIGN1c3RvbSBkaW1lbnNpb24uXG4gICAqIEBwYXJhbSAge3N0cmluZ30gbGFiZWwgYSBzdHJpbmcgdG8gdXNlIGFzIHRoZSBsYWJlbC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmkgdGhlIHVyaSBvZiB0aGlzIGVudGl0eS5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB0eXBlIHRoZSBlbnRpdHkgdHlwZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNlbmRHdG1FdmVudChhbmFseXRpY3NPYmosIGRpbVgsIGRpbVksIGxhYmVsLCB1cmksIHR5cGUpIHtcbiAgICAvLyBEb3VibGUgY2hlY2sgd2UgaGF2ZSB0aGUgY29uZmlnIG9iamVjdCBiZWZvcmUgY29udGludWluZy5cbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdvcmRsaWZ0QW5hbHl0aWNzQ29uZmlnRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiU2VuZGluZyBndG0gZXZlbnQuLi5cIik7XG5cbiAgICBhbmFseXRpY3NPYmoucHVzaCh7XG4gICAgICBcImV2ZW50XCI6ICAgICAgICAgICAgIFwiTWVudGlvbnNcIixcbiAgICAgIFwid2xfZXZlbnRfYWN0aW9uXCI6ICAgXCJNZW50aW9uc1wiLFxuICAgICAgXCJ3bF9ldmVudF9jYXRlZ29yeVwiOiBcIldvcmRMaWZ0XCIsXG4gICAgICBcIndsX2V2ZW50X2xhYmVsXCI6ICAgIGxhYmVsLFxuICAgICAgXCJ3bF9ldmVudF92YWx1ZVwiOiAgICAxLFxuICAgICAgXCJ3bF9ldmVudF91cmlcIjogICAgICB1cmksXG5cdCAgXCJ3bF9pbmRleF91cmlcIjogICAgICBkaW1YLnJlcGxhY2UoIC9eXFxEKy9nLCAnJyApLFxuICAgICAgXCJ3bF9ldmVudF90eXBlXCI6ICAgICB0eXBlLFxuXHQgIFwid2xfaW5kZXhfdHlwZVwiOiAgICAgZGltWS5yZXBsYWNlKCAvXlxcRCsvZywgJycgKSxcblx0ICBcIm5vbl9pbnRlcmFjdGlvblwiOiAgIHRydWVcbiAgICB9KTtcbiAgfVxufSkoKTtcbiIsIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuICovXG5pbXBvcnQgXCIuL2FuYWx5dGljc1wiO1xuXG4vLyBTZXQgYSByZWZlcmVuY2UgdG8gdGhlIFdvcmRMaWZ0IHNldHRpbmdzLlxuY29uc3Qgc2V0dGluZ3MgPSB3aW5kb3cud2xTZXR0aW5ncztcblxuLyoqXG4gKiBCdWlsZCB0aGUgcmVxdWVzdCBVUkwsIGluY2x1c2l2ZSBvZiB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnMuXG4gKlxuICogQHNpbmNlIDMuMTkuMVxuICpcbiAqIEBwYXJhbSBwYXJhbXMge3tqc29ubGRfdXJsLCBwb3N0SWQsIGlzSG9tZX19IFRoZSBxdWVyeSBwYXJhbWV0ZXJzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlcXVlc3QgVVJsLlxuICovXG5jb25zdCBidWlsZFVybCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAvLyBKb2luIHdpdGggYD9gIG9yIGAmYC5cbiAgICAvLyBjb25zdCBqb2luQ2hhciA9IDAgPD0gcGFyYW1zLmFwaVVybC5pbmRleE9mKFwiP1wiKSA/IFwiJlwiIDogXCI/XCI7XG5cbiAgICAvLyBCdWlsZCB0aGUgVVJMXG4gICAgY29uc3QgdXJsID0gcGFyYW1zWydqc29ubGRfdXJsJ10gKyAoIFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBwYXJhbXMuaXNIb21lID8gMCA6IHBhcmFtcy5wb3N0SWQgKTtcbiAgICAgICAgLy8gcGFyYW1zWydqc29ubGRfdXJsJ10gK1xuICAgICAgICAvLyAvLyBqb2luQ2hhciArXG4gICAgICAgIC8vIC8vIFwiYWN0aW9uPXdsX2pzb25sZFwiICtcbiAgICAgICAgLy8gLy8gQXBwZW5kIHRoZSBwb3N0IGlkIHBhcmFtZXRlci5cbiAgICAgICAgLy8gKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBwYXJhbXMucG9zdElkID8gXCImaWQ9XCIgKyBwYXJhbXMucG9zdElkIDogXCJcIikgK1xuICAgICAgICAvLyAvLyBBcHBlbmQgdGhlIGhvbWVwYWdlIHBhcmFtZXRlci5cbiAgICAgICAgLy8gKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBwYXJhbXMuaXNIb21lID8gXCImaG9tZXBhZ2U9dHJ1ZVwiIDogXCJcIik7XG5cbiAgICByZXR1cm4gdXJsO1xufTtcblxuLyoqXG4gKiBMb2FkIHRoZSBKU09OLUxELlxuICpcbiAqIEBzaW5jZSAzLjAuMFxuICovXG5jb25zdCBsb2FkSnNvbkxkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEJhaWwgb3V0IGl0IHRoZSBjb250YWluZXIgZG9lc24ndCBub3cgYWJvdXQgZmV0Y2guXG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBmZXRjaCkgcmV0dXJuO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIEpTT04tTEQgaXMgZGlzYWJsZWQsIGkuZS4gaWYgdGhlcmUncyBhIGBqc29ubGRfZW5hYmxlZGBcbiAgICAvLyBzZXR0aW5nIGV4cGxpY2l0bHkgZGVmaW5lZCB3aXRoIGEgdmFsdWUgZGlmZmVyZW50IGZyb20gJzEnLlxuICAgIGlmIChcbiAgICAgICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHNldHRpbmdzW1wianNvbmxkX2VuYWJsZWRcIl0gJiZcbiAgICAgICAgXCIxXCIgIT09IHNldHRpbmdzW1wianNvbmxkX2VuYWJsZWRcIl1cbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHRoYXQgd2UgaGF2ZSBhIHBvc3QgaWQgb3IgaXQncyBob21lcGFnZSwgb3RoZXJ3aXNlIGV4aXQuXG4gICAgaWYgKFxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygc2V0dGluZ3MucG9zdElkICYmXG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBzZXR0aW5ncy5pc0hvbWVcbiAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgcmVxdWVzdCBVUkwuXG4gICAgY29uc3QgdXJsID0gYnVpbGRVcmwoc2V0dGluZ3MpO1xuXG4gICAgLy8gRmluYWxseSBmZXRjaCB0aGUgVVJMLlxuICAgIC8vXG4gICAgLy8gRE8gTk9UIHVzZSBoZXJlIGBuZXcgVVJMKC4uLilgIC8gYFVSTC5zZWFyY2hQYXJhbXNgOiBHb29nbGUgU0RUVCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhlbS5cbiAgICBmZXRjaCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgIC8vIFVzZSBgZG9jdW1lbnQuY3JlYXRlRWxlbWVudGAuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaW5zaWRlb3V0MTAvd29yZGxpZnQtcGx1Z2luL2lzc3Vlcy84MTAuXG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSBcImFwcGxpY2F0aW9uL2xkK2pzb25cIjtcbiAgICAgICAgICAgIHNjcmlwdC5pbm5lclRleHQgPSBib2R5O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KTtcbn07XG5cbmxvYWRKc29uTGQoKTtcblxuLy9cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkSnNvbkxkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///142\n')},16:function(module,exports){eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz85NTIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n")}});