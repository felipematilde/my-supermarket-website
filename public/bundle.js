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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(htmlFather) {\n    _classCallCheck(this, Card);\n\n    this.htmlFather = htmlFather;\n  }\n\n  _createClass(Card, [{\n    key: \"setItem\",\n    value: function setItem(item) {\n      this.item = item;\n      this.buildCard();\n    }\n  }, {\n    key: \"buildCard\",\n    value: function buildCard() {\n      var item = this.item;\n      var card = document.createElement('div');\n      card.className = \"card\";\n      var img = document.createElement(\"img\");\n      img.src = item.imageSrc;\n      img.alt = item.name;\n      img.style = \"width:100%\";\n      card.appendChild(img);\n      var h1Name = document.createElement(\"h1\");\n      var textName = document.createTextNode(item.name);\n      h1Name.appendChild(textName);\n      card.appendChild(h1Name);\n      var pPrice = document.createElement(\"p\");\n      var textPrice = document.createTextNode(\"US$ \".concat(item.price));\n      pPrice.appendChild(textPrice);\n      pPrice.nodeValue = \"US$\".concat(item.price);\n      card.appendChild(pPrice);\n      var pDescription = document.createElement(\"p\");\n      var textDescription = document.createTextNode(item.description);\n      pDescription.appendChild(textDescription);\n      card.appendChild(pDescription);\n      var pButtonAdd = document.createElement(\"p\");\n      var buttonAdd = document.createElement(\"button\");\n      var textButtonAdd = document.createTextNode(\"Add to Cart\");\n      buttonAdd.appendChild(textButtonAdd);\n      pButtonAdd.appendChild(buttonAdd);\n      card.appendChild(pButtonAdd);\n      this.htmlFather.appendChild(card);\n    }\n  }]);\n\n  return Card;\n}();\n\n\n\n//# sourceURL=webpack:///./src/card.js?");

/***/ }),

/***/ "./src/cardsDisplay.js":
/*!*****************************!*\
  !*** ./src/cardsDisplay.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardsDisplay; });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar CardsDisplay = function CardsDisplay(stock, htmlFather) {\n  _classCallCheck(this, CardsDisplay);\n\n  stock.dataList.forEach(function (data) {\n    var card = new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](htmlFather);\n    card.setItem(data.item);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/cardsDisplay.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: fillStock, searchOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillStock\", function() { return fillStock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchOn\", function() { return searchOn; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n\n\nfunction fillStock(stock) {\n  var bananaPrata = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Banana prata\", \"Monkey favorite fruit, source of vitamines.\", 0.15, \"https://static.carrefour.com.br/medias/sys_master/images/images/h3c/h4c/h00/h00/14506624385054.jpg\");\n  var bananaNanica = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Banana nanica\", \"The biggest banana of the world.\", 0.10, \"https://static.carrefour.com.br/medias/sys_master/images/images/h9e/hf5/h00/h00/14088528953374.jpg\");\n  var texasBurguer = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Texas Burguer\", \"Authentic burguer from texas, 200g of cown meat\", 2.30, \"https://static.carrefour.com.br/medias/sys_master/images/images/h11/h5a/h00/h00/9580135972894.jpg\");\n  var cocaCola350ml = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Coca-Cola 350ml\", \"The most drinked soda in the world. 350ml.\", 0.90, \"https://static.carrefour.com.br/medias/sys_master/images/images/hc5/h21/h00/h00/12175672868894.jpg\");\n  var cocaCola2l = new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Coca-Cola 2L\", \"The most drinked soda in the world. 2L.\", 2.20, \"https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg\");\n  stock.addItem(bananaPrata, 20);\n  stock.addItem(bananaNanica, 20);\n  stock.addItem(texasBurguer, 20);\n  stock.addItem(cocaCola350ml, 20);\n  stock.addItem(cocaCola2l, 20);\n}\nfunction searchOn(stock, htmlFather) {\n  var searchBox = document.querySelector(\"input.search-tool\");\n  var searchText = searchBox.value;\n  searchBox.value = \"\";\n  htmlFather.innerHTML = \"\";\n  var findItemTxt = document.createTextNode(\"Your choosen product:\");\n  var findItemP = document.createElement(\"p\");\n  findItemP.appendChild(findItemTxt);\n  htmlFather.appendChild(findItemP);\n  var itemNotFound = true;\n  stock.dataList.forEach(function (data) {\n    if (data.item.name.toUpperCase().includes(searchText.toUpperCase())) {\n      itemNotFound = false;\n      var card = new _card__WEBPACK_IMPORTED_MODULE_1__[\"default\"](htmlFather);\n      card.setItem(data.item);\n    }\n  });\n\n  if (itemNotFound) {\n    findItemTxt.nodeValue = \"Sorry, we didn't find your item :(\";\n  }\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Item = function Item(name, description, price, imageSrc) {\n  _classCallCheck(this, Item);\n\n  this.name = name;\n  this.description = description;\n  this.price = price;\n  this.imageSrc = imageSrc;\n};\n\n\n\n//# sourceURL=webpack:///./src/item.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock */ \"./src/stock.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/card.js\");\n/* harmony import */ var _cardsDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardsDisplay */ \"./src/cardsDisplay.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\n\nvar choosenProductDiv = document.getElementById(\"choosen-product\");\nvar randonProductsDiv = document.getElementById(\"random-products\");\nvar stock = new _stock__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nObject(_functions__WEBPACK_IMPORTED_MODULE_3__[\"fillStock\"])(stock); // let choosenProduct = new Card(choosenProductDiv);\n// let randomIndex = Math.round(Math.random()*(stock.dataList.length-1));\n// // choosenProduct.setItem(stock.dataList[randomIndex].item);\n\nvar randonProducts = new _cardsDisplay__WEBPACK_IMPORTED_MODULE_2__[\"default\"](stock, randonProductsDiv);\nvar searchButton = document.querySelector(\"button.search-tool\");\n\nsearchButton.onclick = function () {\n  return Object(_functions__WEBPACK_IMPORTED_MODULE_3__[\"searchOn\"])(stock, choosenProductDiv);\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/stock.js":
/*!**********************!*\
  !*** ./src/stock.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stock; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Stock = /*#__PURE__*/function () {\n  function Stock() {\n    _classCallCheck(this, Stock);\n\n    this.dataList = []; //[{item: item, quantity: quantity}]\n  }\n\n  _createClass(Stock, [{\n    key: \"addItem\",\n    value: function addItem(item, quantity) {\n      if (quantity <= 0) {\n        return;\n      }\n\n      var itemOnList = false;\n      this.dataList.forEach(function (data) {\n        if (data.item.name === item.name) {\n          //Maybe here I can use map\n          itemOnList = true;\n          data.item.quantity += quantity;\n        }\n      });\n\n      if (!itemOnList) {\n        this.dataList.push({\n          item: item,\n          quantity: quantity\n        });\n      }\n\n      ;\n    }\n  }, {\n    key: \"removeItem\",\n    value: function removeItem(item, quantity) {\n      if (quantity <= 0) {\n        return;\n      }\n\n      this.dataList.forEach(function (data) {\n        if (data.item.name === item.name) {\n          if (data.item.quantity < quantity) {\n            return;\n          } else {\n            data.item.quantity -= quantity;\n          }\n        }\n      });\n    }\n  }]);\n\n  return Stock;\n}();\n\n\n\n//# sourceURL=webpack:///./src/stock.js?");

/***/ })

/******/ });