"use strict";
(self["webpackChunkmy_webpack_biolerplate"] = self["webpackChunkmy_webpack_biolerplate"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* CSS */\n\nhtml {\n    box-sizing: border-box;\n}\n\n#list-container {\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    border: 1px solid rgba(220, 220, 220, 1);\n    width: 500px;\n    max-width: 500px;\n    background-color: white;\n    box-shadow: 0 0 30px rgba(150, 150, 150, 0.25);\n}\n\n.list-head {\n    display: flex;\n    margin: 0;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid rgba(220, 220, 220, 1);\n    padding: 0 1rem;\n}\n\n#icon {\n    color: gray;\n}\n\n.input {\n    border: none;\n    font-size: 1rem;\n    padding: 1rem 1rem;\n    font-style: italic;\n}\n\n.list {\n    display: flex;\n    align-items: baseline;\n    border-bottom: 1px solid rgba(220, 220, 220, 1);\n    border-top: 1px solid rgba(220, 220, 220, 1);\n    padding: 1rem 1rem;\n}\n\n.list p {\n    margin-left: 1rem;\n}\n\ni {\n    margin-left: auto;\n    color: gray;\n}\n\n.hide {\n    display: none;\n}\n\n.button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid rgba(220, 220, 220, 1);\n    background-color: rgb(238, 238, 238);\n}\n\nbutton {\n    border: none;\n    color: gray;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.edit {\n    background-color: rgba(255, 235, 205);\n}\n\n.edit input {\n    border: none;\n    background-color: rgba(255, 235, 205);\n    font-size: 1rem;\n    margin-left: 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.strike {\n    text-decoration: line-through;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,QAAQ;;AAER;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;IACd,wCAAwC;IACxC,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;IACnB,wCAAwC;IACxC,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,+CAA+C;IAC/C,4CAA4C;IAC5C,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,+CAA+C;IAC/C,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,qCAAqC;IACrC,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,6BAA6B;AACjC","sourcesContent":["/* CSS */\n\nhtml {\n    box-sizing: border-box;\n}\n\n#list-container {\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    border: 1px solid rgba(220, 220, 220, 1);\n    width: 500px;\n    max-width: 500px;\n    background-color: white;\n    box-shadow: 0 0 30px rgba(150, 150, 150, 0.25);\n}\n\n.list-head {\n    display: flex;\n    margin: 0;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid rgba(220, 220, 220, 1);\n    padding: 0 1rem;\n}\n\n#icon {\n    color: gray;\n}\n\n.input {\n    border: none;\n    font-size: 1rem;\n    padding: 1rem 1rem;\n    font-style: italic;\n}\n\n.list {\n    display: flex;\n    align-items: baseline;\n    border-bottom: 1px solid rgba(220, 220, 220, 1);\n    border-top: 1px solid rgba(220, 220, 220, 1);\n    padding: 1rem 1rem;\n}\n\n.list p {\n    margin-left: 1rem;\n}\n\ni {\n    margin-left: auto;\n    color: gray;\n}\n\n.hide {\n    display: none;\n}\n\n.button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid rgba(220, 220, 220, 1);\n    background-color: rgb(238, 238, 238);\n}\n\nbutton {\n    border: none;\n    color: gray;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.edit {\n    background-color: rgba(255, 235, 205);\n}\n\n.edit input {\n    border: none;\n    background-color: rgba(255, 235, 205);\n    font-size: 1rem;\n    margin-left: 1rem;\n}\n\ninput:focus {\n    outline: none;\n}\n\n.strike {\n    text-decoration: line-through;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addList": () => (/* binding */ addList),
/* harmony export */   "checkbox": () => (/* binding */ checkbox),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "listBody": () => (/* binding */ listBody),
/* harmony export */   "taskDescription": () => (/* binding */ taskDescription)
/* harmony export */ });
const listBody = document.getElementById("list-body");
const checkbox = document.querySelector("input[name=check]");
const taskDescription = document.querySelector(".taskdescription");
const addList = document.querySelector("input[name=addtext]");
const clear = document.getElementById("clear");



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ "./src/elements.js");
// css files here




const newTask = new _todolist_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

const getCheck = (element) => {
        return ` ${
    element.completed
      ? `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check" checked>`
      : `<input type="checkbox" aria-label="${element.index}" data-name="status" name="check">`
  } `;
};

const showTaskItem = (element) => {
  return `<div class="list show">
                ${getCheck(element)}                
                <p class="taskdescription ${
                  element.completed ? "strike" : ""
                }">${element.description}</p>
               <i class="fa fa-ellipsis-v fa-2x menu-icon" aria-label="${
                 element.index
               }"  data-name="edit"></i>
          </div>`;
};

const editDescription = (element) => {
  return `<div class="list edit">
                 ${getCheck(element)} 
                <input type="text" class="desc" value="${
                  element.description
                }" aria-label ="${element.index}" >
                <i class="fa fa-trash-o fa-2x" aria-label="${
                  element.index
                }"  data-name="delete"></i>
          </div>`;
};

const refresh = () => {
  const list = newTask.listArray;
  let content = "";
  if (list) {
    list.forEach((element) => {
      content += `${
        element.edit ? editDescription(element) : showTaskItem(element)
      }`;
    });
  }
  _elements_js__WEBPACK_IMPORTED_MODULE_2__.listBody.innerHTML = content;
};
refresh();

//Event Listeners
_elements_js__WEBPACK_IMPORTED_MODULE_2__.addList.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let val = _elements_js__WEBPACK_IMPORTED_MODULE_2__.addList.value;
    if (val) {
      newTask.addTask(val);
      _elements_js__WEBPACK_IMPORTED_MODULE_2__.addList.value = "";
      refresh();
    }
  }
});

_elements_js__WEBPACK_IMPORTED_MODULE_2__.listBody.addEventListener("click", (e) => {
  if (e.target.nodeName === "I") {
    if (e.target.dataset.name === "edit") {
      newTask.setEdit(e.target.ariaLabel);
      refresh();
    } else if (e.target.dataset.name === "delete") {
      newTask.removeTask(parseInt(e.target.ariaLabel));
      refresh();
    }
  }
});

_elements_js__WEBPACK_IMPORTED_MODULE_2__.listBody.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    if (e.target.value) {
      let id = parseInt(e.target.ariaLabel);
      newTask.editTask(id, e.target.value);
      refresh();
    }
  }
});

_elements_js__WEBPACK_IMPORTED_MODULE_2__.listBody.addEventListener("change", (e) => {
  if (e.target.dataset.name === "status") {
    newTask.changeComplete(parseInt(e.target.ariaLabel));
    refresh();
  }
});

_elements_js__WEBPACK_IMPORTED_MODULE_2__.clear.addEventListener("click", () => {
  newTask.clearCompleted();
  refresh();
});

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDoList {
    constructor() {
        this.getTasks();
    }

    updateTasks() {
        localStorage.setItem("toDoList", JSON.stringify(this.listArray));
    }

    getTasks() {
        this.listArray = JSON.parse(localStorage.getItem("toDoList")) || [];
    }

    //show tasks
    showTasks() {
        return JSON.parse(localStorage.getItem("toDoList")) || [];
    }

    setEdit(i) {
        const task = this.listArray.find(
            (item) => parseInt(item.index) === parseInt(i)
        );
        task.edit = true;
        this.updateTasks();
    }

    //add a task
    addTask(description) {
        const task = {
            description,
            completed: false,
            index: this.listArray.length + 1,
            edit: false,
        };
        this.listArray = [...this.listArray, task];
        this.updateTasks();
    }

    //remove a task
    clearCompleted() {
            this.listArray = this.listArray.filter((item) => item.completed !== true);
            if (this.listArray.length > 0) {
                this.listArray = this.listArray.map((list, i) => {
                    list.index = i + 1;
                    return list;
                });
            }
            this.updateTasks();
        }
        //remove a task
    removeTask(index) {
        this.listArray = this.listArray.filter((item) => item.index !== index);
        this.listArray = this.listArray.map((list, i) => {
            list.index = i + 1;
            return list;
        });
        this.updateTasks();
    }

    //Edit a task
    editTask(index, description) {
        this.listArray[index - 1].description = description;
        this.listArray[index - 1].edit = false;
        this.updateTasks();
    }

    changeComplete(i) {
        let status = this.listArray[i - 1].completed;
        this.listArray[i - 1] = {
            ...this.listArray[i - 1],
            completed: !status,
        };
        this.updateTasks();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxnRUFBOEI7QUFDOUI7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDakdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL215LXdlYnBhY2stYmlvbGVycGxhdGUvLi9zcmMvZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1iaW9sZXJwbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLWJpb2xlcnBsYXRlLy4vc3JjL3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ1NTICovXFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMjUpO1xcbn1cXG5cXG4ubGlzdC1oZWFkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuI2ljb24ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxufVxcblxcbi5saXN0IHAge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDIwNSk7XFxufVxcblxcbi5lZGl0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCAyMDUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxRQUFROztBQUVSO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsK0NBQStDO0lBQy9DLDRDQUE0QztJQUM1QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0Msb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ1NTICovXFxuXFxuaHRtbCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMzBweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMjUpO1xcbn1cXG5cXG4ubGlzdC1oZWFkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuI2ljb24ge1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMSk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XFxufVxcblxcbi5saXN0IHAge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzUsIDIwNSk7XFxufVxcblxcbi5lZGl0IGlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjM1LCAyMDUpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBsaXN0Qm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1ib2R5XCIpO1xuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1jaGVja11cIik7XG5jb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tkZXNjcmlwdGlvblwiKTtcbmNvbnN0IGFkZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT1hZGR0ZXh0XVwiKTtcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbGVhclwiKTtcblxuZXhwb3J0IHsgbGlzdEJvZHksIGNoZWNrYm94LCB0YXNrRGVzY3JpcHRpb24sIGFkZExpc3QsIGNsZWFyIH07IiwiLy8gY3NzIGZpbGVzIGhlcmVcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4vdG9kb2xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudHMuanNcIjtcblxuY29uc3QgbmV3VGFzayA9IG5ldyBUb2RvTGlzdCgpO1xuXG5jb25zdCBnZXRDaGVjayA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiBgICR7XG4gICAgZWxlbWVudC5jb21wbGV0ZWRcbiAgICAgID8gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsPVwiJHtlbGVtZW50LmluZGV4fVwiIGRhdGEtbmFtZT1cInN0YXR1c1wiIG5hbWU9XCJjaGVja1wiIGNoZWNrZWQ+YFxuICAgICAgOiBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGFyaWEtbGFiZWw9XCIke2VsZW1lbnQuaW5kZXh9XCIgZGF0YS1uYW1lPVwic3RhdHVzXCIgbmFtZT1cImNoZWNrXCI+YFxuICB9IGA7XG59O1xuXG5jb25zdCBzaG93VGFza0l0ZW0gPSAoZWxlbWVudCkgPT4ge1xuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJsaXN0IHNob3dcIj5cbiAgICAgICAgICAgICAgICAke2dldENoZWNrKGVsZW1lbnQpfSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRhc2tkZXNjcmlwdGlvbiAke1xuICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb21wbGV0ZWQgPyBcInN0cmlrZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIj4ke2VsZW1lbnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lbGxpcHNpcy12IGZhLTJ4IG1lbnUtaWNvblwiIGFyaWEtbGFiZWw9XCIke1xuICAgICAgICAgICAgICAgICBlbGVtZW50LmluZGV4XG4gICAgICAgICAgICAgICB9XCIgIGRhdGEtbmFtZT1cImVkaXRcIj48L2k+XG4gICAgICAgICAgPC9kaXY+YDtcbn07XG5cbmNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IChlbGVtZW50KSA9PiB7XG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImxpc3QgZWRpdFwiPlxuICAgICAgICAgICAgICAgICAke2dldENoZWNrKGVsZW1lbnQpfSBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImRlc2NcIiB2YWx1ZT1cIiR7XG4gICAgICAgICAgICAgICAgICBlbGVtZW50LmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgfVwiIGFyaWEtbGFiZWwgPVwiJHtlbGVtZW50LmluZGV4fVwiID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW8gZmEtMnhcIiBhcmlhLWxhYmVsPVwiJHtcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5kZXhcbiAgICAgICAgICAgICAgICB9XCIgIGRhdGEtbmFtZT1cImRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5gO1xufTtcblxuY29uc3QgcmVmcmVzaCA9ICgpID0+IHtcbiAgY29uc3QgbGlzdCA9IG5ld1Rhc2subGlzdEFycmF5O1xuICBsZXQgY29udGVudCA9IFwiXCI7XG4gIGlmIChsaXN0KSB7XG4gICAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb250ZW50ICs9IGAke1xuICAgICAgICBlbGVtZW50LmVkaXQgPyBlZGl0RGVzY3JpcHRpb24oZWxlbWVudCkgOiBzaG93VGFza0l0ZW0oZWxlbWVudClcbiAgICAgIH1gO1xuICAgIH0pO1xuICB9XG4gIEVsZW1lbnQubGlzdEJvZHkuaW5uZXJIVE1MID0gY29udGVudDtcbn07XG5yZWZyZXNoKCk7XG5cbi8vRXZlbnQgTGlzdGVuZXJzXG5FbGVtZW50LmFkZExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgbGV0IHZhbCA9IEVsZW1lbnQuYWRkTGlzdC52YWx1ZTtcbiAgICBpZiAodmFsKSB7XG4gICAgICBuZXdUYXNrLmFkZFRhc2sodmFsKTtcbiAgICAgIEVsZW1lbnQuYWRkTGlzdC52YWx1ZSA9IFwiXCI7XG4gICAgICByZWZyZXNoKCk7XG4gICAgfVxuICB9XG59KTtcblxuRWxlbWVudC5saXN0Qm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIklcIikge1xuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0Lm5hbWUgPT09IFwiZWRpdFwiKSB7XG4gICAgICBuZXdUYXNrLnNldEVkaXQoZS50YXJnZXQuYXJpYUxhYmVsKTtcbiAgICAgIHJlZnJlc2goKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQubmFtZSA9PT0gXCJkZWxldGVcIikge1xuICAgICAgbmV3VGFzay5yZW1vdmVUYXNrKHBhcnNlSW50KGUudGFyZ2V0LmFyaWFMYWJlbCkpO1xuICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufSk7XG5cbkVsZW1lbnQubGlzdEJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICBsZXQgaWQgPSBwYXJzZUludChlLnRhcmdldC5hcmlhTGFiZWwpO1xuICAgICAgbmV3VGFzay5lZGl0VGFzayhpZCwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgcmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufSk7XG5cbkVsZW1lbnQubGlzdEJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuZGF0YXNldC5uYW1lID09PSBcInN0YXR1c1wiKSB7XG4gICAgbmV3VGFzay5jaGFuZ2VDb21wbGV0ZShwYXJzZUludChlLnRhcmdldC5hcmlhTGFiZWwpKTtcbiAgICByZWZyZXNoKCk7XG4gIH1cbn0pO1xuXG5FbGVtZW50LmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Rhc2suY2xlYXJDb21wbGV0ZWQoKTtcbiAgcmVmcmVzaCgpO1xufSk7IiwiY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdldFRhc2tzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGFza3MoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0xpc3RcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0QXJyYXkpKTtcbiAgICB9XG5cbiAgICBnZXRUYXNrcygpIHtcbiAgICAgICAgdGhpcy5saXN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0xpc3RcIikpIHx8IFtdO1xuICAgIH1cblxuICAgIC8vc2hvdyB0YXNrc1xuICAgIHNob3dUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvTGlzdFwiKSkgfHwgW107XG4gICAgfVxuXG4gICAgc2V0RWRpdChpKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLmxpc3RBcnJheS5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IHBhcnNlSW50KGl0ZW0uaW5kZXgpID09PSBwYXJzZUludChpKVxuICAgICAgICApO1xuICAgICAgICB0YXNrLmVkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tzKCk7XG4gICAgfVxuXG4gICAgLy9hZGQgYSB0YXNrXG4gICAgYWRkVGFzayhkZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXg6IHRoaXMubGlzdEFycmF5Lmxlbmd0aCArIDEsXG4gICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5saXN0QXJyYXkgPSBbLi4udGhpcy5saXN0QXJyYXksIHRhc2tdO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhc2tzKCk7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgYSB0YXNrXG4gICAgY2xlYXJDb21wbGV0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RBcnJheSA9IHRoaXMubGlzdEFycmF5LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgIT09IHRydWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RBcnJheSA9IHRoaXMubGlzdEFycmF5Lm1hcCgobGlzdCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmluZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vcmVtb3ZlIGEgdGFza1xuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICAgICAgdGhpcy5saXN0QXJyYXkgPSB0aGlzLmxpc3RBcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IGluZGV4KTtcbiAgICAgICAgdGhpcy5saXN0QXJyYXkgPSB0aGlzLmxpc3RBcnJheS5tYXAoKGxpc3QsIGkpID0+IHtcbiAgICAgICAgICAgIGxpc3QuaW5kZXggPSBpICsgMTtcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrcygpO1xuICAgIH1cblxuICAgIC8vRWRpdCBhIHRhc2tcbiAgICBlZGl0VGFzayhpbmRleCwgZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5saXN0QXJyYXlbaW5kZXggLSAxXS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmxpc3RBcnJheVtpbmRleCAtIDFdLmVkaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrcygpO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbXBsZXRlKGkpIHtcbiAgICAgICAgbGV0IHN0YXR1cyA9IHRoaXMubGlzdEFycmF5W2kgLSAxXS5jb21wbGV0ZWQ7XG4gICAgICAgIHRoaXMubGlzdEFycmF5W2kgLSAxXSA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMubGlzdEFycmF5W2kgLSAxXSxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXR1cyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXNrcygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9