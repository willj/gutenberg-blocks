/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./48kblocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./48kblocks.js":
/*!**********************!*\
  !*** ./48kblocks.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block1 */ \"./block1.js\");\n/* harmony import */ var _block1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_block1__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _block2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block2 */ \"./block2.js\");\n\n\n\n//# sourceURL=webpack:///./48kblocks.js?");

/***/ }),

/***/ "./block1.js":
/*!*******************!*\
  !*** ./block1.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck,\n    InnerBlocks = _wp$editor.InnerBlocks;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    SelectControl = _wp$components.SelectControl;\nregisterBlockType('c48kblocks/block-1', {\n  title: '48k block 1',\n  icon: 'paperclip',\n  category: 'layout',\n  attributes: {\n    content: {\n      type: 'string',\n      source: 'html',\n      selector: 'p'\n    },\n    cheeseCounter: {\n      type: 'number',\n      default: 0\n    },\n    sector: {\n      type: 'string',\n      default: ''\n    },\n    imageId: {\n      type: 'number'\n    },\n    imageUrl: {\n      type: 'string'\n    }\n  },\n  edit: function edit(_ref) {\n    var className = _ref.className,\n        attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n    function onChangeContent(newContent) {\n      setAttributes({\n        content: newContent\n      });\n    }\n\n    function onCheeseClicked() {\n      setAttributes({\n        cheeseCounter: attributes.cheeseCounter + 1\n      });\n    }\n\n    function onSectorChange(sector) {\n      setAttributes({\n        sector: sector\n      });\n    }\n\n    function onImageSelected(media) {\n      // you'd probably select the right size, and save the alt text etc too\n      console.log(media);\n      setAttributes({\n        imageId: media.id,\n        imageUrl: media.url\n      });\n    }\n\n    return wp.element.createElement(\"div\", {\n      className: className\n    }, wp.element.createElement(BlockControls, null, wp.element.createElement(IconButton, {\n      icon: \"paperclip\",\n      label: \"cheese!\",\n      onClick: onCheeseClicked\n    })), wp.element.createElement(InspectorControls, null, wp.element.createElement(\"p\", null, \"Hello inspector\"), wp.element.createElement(SelectControl, {\n      label: \"Choose a sector\",\n      value: attributes.sector,\n      onChange: onSectorChange,\n      options: [{\n        label: '',\n        value: ''\n      }, {\n        label: 'B2B',\n        value: 'B2B'\n      }, {\n        label: 'B2C',\n        value: 'B2C'\n      }]\n    })), wp.element.createElement(\"h2\", null, \"Cheese was clicked \", attributes.cheeseCounter, \" times!\"), wp.element.createElement(RichText, {\n      tagName: \"p\",\n      onChange: onChangeContent,\n      value: attributes.content,\n      placeholder: \"Write some rubbish here!\"\n    }), wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, \"Selected sector: \", attributes.sector)), wp.element.createElement(MediaUploadCheck, null, wp.element.createElement(MediaUpload, {\n      allowedTypes: \"image\",\n      multiple: false,\n      value: attributes.imageId,\n      onSelect: onImageSelected,\n      render: function render(_ref2) {\n        var open = _ref2.open;\n        return wp.element.createElement(\"div\", null, attributes.imageUrl && wp.element.createElement(\"img\", {\n          src: attributes.imageUrl\n        }), wp.element.createElement(\"button\", {\n          onClick: open\n        }, \"Add Image\"));\n      }\n    })), wp.element.createElement(\"p\", null, \"Allow nested blocks, you can limit what's allowed with the allowedBlocks prop\"), wp.element.createElement(\"div\", {\n      className: className + '-nested-img-wrapper'\n    }, wp.element.createElement(InnerBlocks, {\n      allowedBlocks: ['core/image']\n    })));\n  },\n  save: function save(_ref3) {\n    var attributes = _ref3.attributes;\n    return wp.element.createElement(\"div\", null, wp.element.createElement(\"h2\", null, \"Cheese was clicked \", attributes.cheeseCounter, \" times!\"), wp.element.createElement(RichText.Content, {\n      tagName: \"p\",\n      value: attributes.content\n    }), wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, \"Sector: \", attributes.sector)), attributes.imageUrl && wp.element.createElement(\"img\", {\n      src: attributes.imageUrl\n    }), wp.element.createElement(\"div\", null, wp.element.createElement(InnerBlocks.Content, null)));\n  }\n});\n\n//# sourceURL=webpack:///./block1.js?");

/***/ }),

/***/ "./block2.js":
/*!*******************!*\
  !*** ./block2.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    SelectControl = _wp$components.SelectControl;\nvar withSelect = wp.data.withSelect;\nvar selectSectors = withSelect(function (select) {\n  var sectors = select('core').getEntityRecords('taxonomy', 'sector', {}) || [];\n  return {\n    sectors: sectors.map(function (sector) {\n      return {\n        label: sector.name,\n        value: sector.slug\n      };\n    })\n  };\n});\nregisterBlockType('c48kblocks/block-2', {\n  title: '48k block 2',\n  icon: 'thumbs-up',\n  category: 'layout',\n  attributes: {\n    sector: {\n      type: 'string',\n      default: ''\n    }\n  },\n  edit: selectSectors(function (_ref) {\n    var sectors = _ref.sectors,\n        className = _ref.className,\n        attributes = _ref.attributes,\n        setAttributes = _ref.setAttributes;\n\n    function onSectorChange(sector) {\n      setAttributes({\n        sector: sector\n      });\n    }\n\n    return wp.element.createElement(\"div\", {\n      className: className\n    }, wp.element.createElement(InspectorControls, null, wp.element.createElement(\"p\", null, \"Hello inspector\"), wp.element.createElement(SelectControl, {\n      label: \"Choose a sector\",\n      value: attributes.sector,\n      onChange: onSectorChange,\n      options: [{\n        label: '',\n        value: ''\n      }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sectors))\n    })), wp.element.createElement(\"div\", null, wp.element.createElement(\"p\", null, \"Choose a sector from the panel on the right\"), wp.element.createElement(\"p\", null, \"Sector: \", attributes.sector)));\n  }),\n  save: function save() {\n    // this is server rendered\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./block2.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {\n      arr2[i] = arr[i];\n    }\n\n    return arr2;\n  }\n}\n\nmodule.exports = _arrayWithoutHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nmodule.exports = _iterableToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\nmodule.exports = _nonIterableSpread;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js\");\n\nvar iterableToArray = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/iterableToArray.js\");\n\nvar nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ \"./node_modules/@babel/runtime/helpers/nonIterableSpread.js\");\n\nfunction _toConsumableArray(arr) {\n  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();\n}\n\nmodule.exports = _toConsumableArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/toConsumableArray.js?");

/***/ })

/******/ });