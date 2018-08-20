(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-header></app-header>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header-image\"></div>\n  <div class=\"card-holder\">\n    <div class=\"container\">\n      <div class=\"card\">\n\n        <div class=\"profile\">\n          <img class=\"img-responsive d-none d-md-block\" src=\"../../assets/image1.jpg\" />\n          <img class=\"img-responsive d-md-none\" src=\"../../assets/image2.jpg\" />\n          <div class=\"slant\"></div>\n        </div>\n\n        <div class=\"card-content\">\n\n          <div class=\"basic-info\">\n            <h4 class=\"text-uppercase\">Ankan Poddar</h4>\n            <h6 class=\"text-capitalize\">Software Engineer &amp; Web Developer</h6>\n          </div>\n\n          <div class=\"contact-info\">\n            <ul class=\"profile-list\">\n              <li class=\"d-flex align-items-center\">\n                <span class=\"title\"><i class=\"fas fa-envelope\"></i></span>\n                <span class=\"content\">friendyankan@gmail.com</span>\n              </li>\n              <li class=\"d-flex align-items-center\">\n                <span class=\"title\"><i class=\"fas fa-globe\"></i></span>\n                <span class=\"content\">https://ankan17.github.io</span>\n              </li>\n              <li class=\"d-flex align-items-center\">\n                <span class=\"title\"><i class=\"fab fa-github\"></i></span>\n                <span class=\"content\">https://github.com/ankan17</span>\n              </li>\n              <li class=\"d-flex align-items-center\">\n                <span class=\"title\"><i class=\"fas fa-phone\"></i></span>\n                <span class=\"content\">+91 98045 17793</span>\n              </li>\n              <li class=\"d-flex align-items-center\">\n                <span class=\"title\"><i class=\"fas fa-map-marker-alt\"></i></span>\n                <span class=\"content\">C-35, Amarabati, Sodepur</span>\n              </li>\n            </ul>\n          </div>\n\n          <div class=\"contact-links\">\n            <a target=\"_blank\" href=\"https://www.facebook.com/friendyankan\" class=\"btn-floating indigo\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n            <a target=\"_blank\" href=\"https://twitter.com/PoddarAnkan\" class=\"btn-floating blue\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n            <a target=\"_blank\" href=\"https://plus.google.com/101331497280009937677\" class=\"btn-floating red\">\n              <i class=\"fab fa-google-plus-g\"></i>\n            </a>\n            <a target=\"_blank\" href=\"https://www.linkedin.com/in/ankan-poddar-86a6b6163\" class=\"btn-floating blue darken-3\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n            <a target=\"_blank\" href=\"https://github.com/ankan17\" class=\"btn-floating elegant-color\">\n              <i class=\"fab fa-github\"></i>\n            </a>\n          </div>\n\n        </div>  <!-- Card content -->\n\n      </div>  <!-- Card -->\n    </div>  <!-- Container -->\n  </div>  <!-- Card Holder -->\n</div>  <!-- Header -->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Break points */\n/* Colors */\n.header-image {\n  height: 370px;\n  width: 100%;\n  background: url('background.jpg') no-repeat fixed center center;\n  background-size: cover; }\n.card-holder {\n  -webkit-transform: translateY(-212px);\n          transform: translateY(-212px); }\n@media (max-width: 768px) {\n    .card-holder {\n      -webkit-transform: translateY(-178px);\n              transform: translateY(-178px); } }\n.card-holder .card {\n    height: 400px;\n    background-color: #038175;\n    border-radius: 0 0 2px 2px;\n    overflow: hidden; }\n@media (max-width: 768px) {\n      .card-holder .card {\n        overflow: visible; } }\n.card-holder .card .profile {\n      position: absolute;\n      right: 0; }\n@media (max-width: 768px) {\n        .card-holder .card .profile {\n          left: 0;\n          bottom: 85%;\n          width: 150px;\n          margin-left: auto;\n          margin-right: auto; } }\n.card-holder .card .profile img {\n        width: 400px; }\n@media (max-width: 992px) {\n          .card-holder .card .profile img {\n            max-width: 360px; } }\n@media (max-width: 768px) {\n          .card-holder .card .profile img {\n            height: 150px;\n            width: 150px;\n            border-radius: 50%;\n            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24), 0 2px 14px 0 rgba(0, 0, 0, 0.16); } }\n.card-holder .card .profile .slant {\n        position: absolute;\n        top: 0;\n        z-index: 1;\n        border-style: solid;\n        border-width: 400px 0 0 100px;\n        border-color: rgba(223, 50, 50, 0) transparent transparent #038175; }\n@media (max-width: 768px) {\n          .card-holder .card .profile .slant {\n            display: none; } }\n.card-holder .card .card-content {\n      padding: 40px;\n      border-radius: 0 0 2px 2px;\n      color: #fff; }\n.card-holder .card .card-content .basic-info {\n        max-width: 514px; }\n@media (max-width: 992px) {\n          .card-holder .card .card-content .basic-info {\n            max-width: 300px; } }\n@media (max-width: 768px) {\n          .card-holder .card .card-content .basic-info {\n            max-width: 100%;\n            text-align: center;\n            margin-top: 30px; } }\n.card-holder .card .card-content .basic-info h4 {\n          font-weight: 900;\n          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);\n          font-size: 2.15rem;\n          line-height: 110%;\n          margin: 1.15rem 0 0.912rem 0; }\n.card-holder .card .card-content .basic-info h6 {\n          font-weight: 300;\n          margin-top: -10px;\n          margin-bottom: 18px;\n          font-size: 1.2em;\n          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29); }\n@media (max-width: 768px) {\n        .card-holder .card .card-content .contact-info {\n          display: table;\n          margin: 0 auto;\n          max-width: 100%;\n          padding: 0; } }\n.card-holder .card .card-content .contact-info .profile-list {\n        list-style: none;\n        padding-left: 0;\n        margin-bottom: 18px; }\n.card-holder .card .card-content .contact-info .profile-list li {\n          line-height: 30px; }\n.card-holder .card .card-content .contact-info .profile-list li .title {\n            font-size: 21px;\n            margin-right: 12px; }\n.card-holder .card .card-content .contact-info .profile-list li .content {\n            font-size: 14px;\n            font-weight: 500; }\n@media (max-width: 768px) {\n        .card-holder .card .card-content .contact-links {\n          display: table;\n          margin: 0 auto 9px;\n          max-width: 100%;\n          padding: 0; } }\n.card-holder .card .card-content .contact-links .btn-floating {\n        width: 37px;\n        height: 37px;\n        padding: 0;\n        border-radius: 50%;\n        transition: all .3s;\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n        text-decoration: none;\n        margin-left: 16px;\n        margin-bottom: 4px;\n        z-index: 0 !important; }\n.card-holder .card .card-content .contact-links .btn-floating:first-child {\n          margin-left: 0; }\n.card-holder .card .card-content .contact-links .btn-floating:hover {\n          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); }\n.card-holder .card .card-content .contact-links .btn-floating i {\n          color: #fff;\n          font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hercules/Projects/ankan17.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map