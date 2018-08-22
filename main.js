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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-aos=\"fade-up\" data-aos-delay=\"500\" data-aos-offset=\"50\" class=\"card-holder\">\n  <div class=\"container\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <p class=\"card-text\">{{ about }}</p>\n      </div>\n      <div class=\"card-action\">\n        <a href=\"#\" class=\"btn waves-effect\">Download CV</a>\n        <a href=\"#\" class=\"btn waves-effect\">Contact Me</a>\n      </div>\n    </div>  <!-- Card -->\n  </div>  <!-- Container -->\n</div>  <!-- Card Holder -->\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Break points */\n/* Colors */\n.card-holder {\n  position: relative;\n  top: 208px; }\n@media (max-width: 768px) {\n    .card-holder {\n      top: 162px; } }\n.card-holder .card {\n    border-radius: 0; }\n.card-holder .card .card-body {\n      padding: 0; }\n.card-holder .card .card-body .card-text {\n        padding: 40px;\n        border-bottom: 1px solid rgba(160, 160, 160, 0.2);\n        color: #616161;\n        font-size: 0.98rem;\n        text-align: center; }\n.card-holder .card .card-action {\n      padding: 20px;\n      text-align: center; }\n.card-holder .card .card-action a.btn {\n        margin: 7px 7px;\n        background: #038175;\n        color: #fff;\n        width: 180px;\n        border-radius: 2px;\n        font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.about = "Hello! I\u2019m Ankan Poddar, a software developer by passion and well-versed with web-development too.\n    Experienced with development of open-source projects, unit testing and continuous integration, I have good\n    knowledge of technologies like HTML5/CSS3, SASS, JavaScript, JQuery, Angular JS, ReactJS, Vue.js, Python,\n    Flask, Django and git.";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header id=\"header\">\n    <div class=\"header-image\"></div>\n  </header>\n  <app-info-card></app-info-card>\n  <app-about></app-about>\n  <app-education></app-education>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-image {\n  position: absolute;\n  height: 370px;\n  width: 100%;\n  background: url('background.jpg') no-repeat fixed center center;\n  background-size: cover; }\n"

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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-card/info-card.component */ "./src/app/info-card/info-card.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
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
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_4__["InfoCardComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"]
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

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"text-uppercase text-center section-header\">\n    <i class=\"fas fa-book\" data-aos=\"fade-up\" data-aos-duration=\"800\"></i>Education\n  </h4>\n  <div class=\"education-timeline\">\n    <div class=\"timeline-block\" *ngFor=\"let block of blocks\">\n      <div class=\"timeline-dot\">\n        <h6>{{ block.dot }}</h6>\n      </div>\n      <div class=\"card timeline-content\" data-aos=\"fade-up\">\n        <div class=\"card-content\">\n          <h6 class=\"timeline-title\">{{ block.name }}</h6>\n          <div class=\"timeline-info\">\n            <h6>{{ block.institute }}</h6>\n            <h6>{{ block.duration }}</h6>\n          </div>\n          <p>{{ block.description }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.scss":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Break points */\n/* Colors */\n.container {\n  position: relative;\n  top: 282px;\n  margin-bottom: 20px; }\n.container .section-header {\n    font-weight: 600;\n    font-size: 33px;\n    margin: 1.14rem 0 0.912rem 0; }\n.container .section-header i {\n      width: 66px;\n      height: 66px;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      margin: -2px 12px 12px 12px;\n      color: #0c8599;\n      font-size: 42px;\n      line-height: 66px; }\n.container .education-timeline::before {\n    content: '';\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -2px;\n    height: 57.1%;\n    width: 4px;\n    opacity: 0.3;\n    background: #038175; }\n@media (max-width: 768px) {\n      .container .education-timeline::before {\n        height: 77.1%; } }\n.container .education-timeline .timeline-block {\n    overflow: hidden; }\n.container .education-timeline .timeline-block:not(:first-child) {\n      margin: 0.5em 0; }\n@media (min-width: 768px) {\n        .container .education-timeline .timeline-block:not(:first-child) {\n          margin: -6em 0; } }\n.container .education-timeline .timeline-block .timeline-dot {\n      position: absolute;\n      left: 50%;\n      width: 50px;\n      height: 50px;\n      z-index: 2;\n      margin-left: -25px;\n      background: #038175;\n      border-radius: 100%;\n      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n      color: #fff;\n      text-align: center; }\n@media (max-width: 768px) {\n        .container .education-timeline .timeline-block .timeline-dot {\n          left: auto;\n          right: 4%;\n          margin-top: 5px; } }\n.container .education-timeline .timeline-block .timeline-dot h6 {\n        padding: 0;\n        font-size: 30px;\n        font-weight: bold;\n        line-height: 50px;\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29); }\n.container .education-timeline .timeline-block .card {\n      margin: 0;\n      border-radius: 0; }\n@media (min-width: 768px) {\n        .container .education-timeline .timeline-block .card {\n          width: 44%; } }\n.container .education-timeline .timeline-block .card .card-content {\n        padding: 20px;\n        border-radius: 0 0 2px 2px; }\n.container .education-timeline .timeline-block .timeline-content {\n      position: relative;\n      background: #fff;\n      margin-right: 0;\n      z-index: 1;\n      margin-bottom: 5px;\n      border-left: 5px solid #9C27B0; }\n.container .education-timeline .timeline-block .timeline-content .timeline-title {\n        max-width: 100%;\n        font-size: 21px;\n        margin: 10px 0 20px; }\n.container .education-timeline .timeline-block .timeline-content .timeline-info h6 {\n        font-size: 17px;\n        line-height: 15px;\n        margin: 10px 0; }\n.container .education-timeline .timeline-block .timeline-content p {\n        margin-top: 20px;\n        font-size: 15px; }\n.container .education-timeline .timeline-block .timeline-content::before {\n        content: '';\n        width: 58px;\n        height: 4px;\n        position: absolute;\n        top: 26px;\n        left: 100%;\n        z-index: -2;\n        opacity: 0.3;\n        background: #038175; }\n.container .education-timeline .timeline-block:nth-child(2n) .timeline-content {\n      float: right; }\n.container .education-timeline .timeline-block:nth-child(2n) .timeline-content::before {\n        top: 25px;\n        left: auto;\n        right: 101.2%;\n        z-index: -2; }\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.blocks = [
            {
                dot: 'P',
                name: 'Primary and Secondary Education',
                institute: 'Ramakrishna Mission Vidyamandir',
                duration: 'Jan 2001 - Mar 2014',
                description: "I completed my primary and secondary education from this prestigious school under the\n        Central Board of Secondary Education. I successfully passed all subjects with a perfect 10 CGPA."
            },
            {
                dot: 'S',
                name: 'Senior Secondary Education',
                institute: 'Sudhir Memorial Institute',
                duration: 'May 2014 - Mar 2016',
                description: "I completed my senior secondary education from this school under the Central Board\n        of Secondary Education. I successfully passed with a percentage of 94.8."
            },
            {
                dot: 'C',
                name: 'Computer Science and Engineering',
                institute: 'National Institute of Technology',
                duration: 'July 2016 - Present',
                description: "I am currently studying Computer Science in this prestigious college of national\n        repute and I am in the 3rd year of college with a CGPA of 9.31."
            }
        ];
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/education/education.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/info-card/info-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-card/info-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div data-aos=\"zoom-in-up\" class=\"card-holder\">\n  <div class=\"container\">\n    <div class=\"card\">\n\n      <div class=\"profile\">\n        <img class=\"img-responsive d-none d-md-block\" src=\"../../assets/image1.jpg\" />\n        <img class=\"img-responsive d-md-none\" src=\"../../assets/image2.jpg\" />\n        <div class=\"slant\"></div>\n      </div>\n\n      <div class=\"card-content\">\n        <div class=\"basic-info\">\n          <h4 class=\"text-uppercase\">{{ name }}</h4>\n          <h6 class=\"text-capitalize\">{{ position }}</h6>\n        </div>\n        <div class=\"contact-info\">\n          <ul class=\"profile-list\">\n            <li class=\"d-flex align-items-center\" *ngFor=\"let contact of contactInfo\">\n              <span class=\"title\"><i class=\"{{ contact.icon }}\"></i></span>\n              <span class=\"content\">{{ contact.text }}</span>\n            </li>\n          </ul>\n        </div>\n        <div class=\"contact-links\">\n          <a target=\"_blank\" *ngFor=\"let link of contactLinks\" href=\"{{ link.href }}\" class=\"{{ 'btn-floating ' + link.color }}\">\n            <i class=\"{{ link.icon }}\"></i>\n          </a>\n        </div>\n      </div>  <!-- Card content -->\n\n    </div>  <!-- Card -->\n  </div>  <!-- Container -->\n</div>  <!-- Card Holder -->\n"

/***/ }),

/***/ "./src/app/info-card/info-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/info-card/info-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Break points */\n/* Colors */\n.card-holder {\n  position: relative;\n  top: 158px; }\n@media (max-width: 768px) {\n    .card-holder {\n      top: 124px; } }\n.card-holder .card {\n    height: 400px;\n    background-color: #038175;\n    border-radius: 0 0 2px 2px;\n    overflow: hidden; }\n@media (max-width: 768px) {\n      .card-holder .card {\n        overflow: visible; } }\n.card-holder .card .profile {\n      position: absolute;\n      right: 0; }\n@media (max-width: 768px) {\n        .card-holder .card .profile {\n          left: 0;\n          bottom: 85%;\n          width: 150px;\n          margin-left: auto;\n          margin-right: auto; } }\n.card-holder .card .profile img {\n        width: 400px; }\n@media (max-width: 992px) {\n          .card-holder .card .profile img {\n            max-width: 360px; } }\n@media (max-width: 768px) {\n          .card-holder .card .profile img {\n            height: 150px;\n            width: 150px;\n            border-radius: 50%;\n            box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24), 0 2px 14px 0 rgba(0, 0, 0, 0.16); } }\n.card-holder .card .profile .slant {\n        position: absolute;\n        top: 0;\n        z-index: 1;\n        border-style: solid;\n        border-width: 400px 0 0 100px;\n        border-color: rgba(223, 50, 50, 0) transparent transparent #038175; }\n@media (max-width: 768px) {\n          .card-holder .card .profile .slant {\n            display: none; } }\n.card-holder .card .card-content {\n      padding: 40px;\n      border-radius: 0 0 2px 2px;\n      color: #fff; }\n.card-holder .card .card-content .basic-info {\n        max-width: 514px; }\n@media (max-width: 992px) {\n          .card-holder .card .card-content .basic-info {\n            max-width: 300px; } }\n@media (max-width: 768px) {\n          .card-holder .card .card-content .basic-info {\n            max-width: 100%;\n            text-align: center;\n            margin-top: 30px; } }\n.card-holder .card .card-content .basic-info h4 {\n          font-weight: 700;\n          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);\n          font-size: 32px;\n          line-height: 110%;\n          margin: 1.15rem 0 0.912rem 0; }\n.card-holder .card .card-content .basic-info h6 {\n          font-weight: 300;\n          margin-top: -10px;\n          margin-bottom: 18px;\n          font-size: 1.2em;\n          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29); }\n@media (max-width: 768px) {\n        .card-holder .card .card-content .contact-info {\n          display: table;\n          margin: 0 auto;\n          max-width: 100%;\n          padding: 0; } }\n.card-holder .card .card-content .contact-info .profile-list {\n        list-style: none;\n        padding-left: 0;\n        margin-bottom: 18px; }\n.card-holder .card .card-content .contact-info .profile-list li {\n          line-height: 30px; }\n.card-holder .card .card-content .contact-info .profile-list li .title {\n            font-size: 21px;\n            margin-right: 12px; }\n.card-holder .card .card-content .contact-info .profile-list li .content {\n            font-size: 14px;\n            font-weight: 500; }\n@media (max-width: 768px) {\n        .card-holder .card .card-content .contact-links {\n          display: table;\n          margin: 0 auto 9px;\n          max-width: 100%;\n          padding: 0; } }\n.card-holder .card .card-content .contact-links .btn-floating {\n        width: 37px;\n        height: 37px;\n        padding: 0;\n        border-radius: 50%;\n        transition: all .3s;\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n        text-decoration: none;\n        margin-left: 16px;\n        margin-bottom: 4px;\n        z-index: 0 !important; }\n.card-holder .card .card-content .contact-links .btn-floating:first-child {\n          margin-left: 0; }\n.card-holder .card .card-content .contact-links .btn-floating:hover {\n          box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); }\n.card-holder .card .card-content .contact-links .btn-floating i {\n          color: #fff;\n          font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/info-card/info-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-card/info-card.component.ts ***!
  \**************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
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

var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent() {
        this.name = 'Ankan Poddar';
        this.position = 'Software Engineer & Web Developer';
        this.contactInfo = [
            { icon: 'fas fa-envelope', text: 'friendyankan@gmail.com' },
            { icon: 'fas fa-globe', text: 'https://ankan17.github.io' },
            { icon: 'fab fa-github', text: 'https://github.com/ankan17' },
            { icon: 'fas fa-phone', text: '+91 98045 17793' },
            { icon: 'fas fa-map-marker-alt', text: 'C-35, Amarabati, Sodepur' }
        ];
        this.contactLinks = [
            { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/friendyankan', color: 'indigo' },
            { icon: 'fab fa-twitter', href: 'https://twitter.com/PoddarAnkan', color: 'blue' },
            { icon: 'fab fa-google-plus-g', href: 'https://plus.google.com/101331497280009937677', color: 'red' },
            { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/ankan-poddar-86a6b6163', color: 'blue darken-3' },
            { icon: 'fab fa-github', href: 'https://github.com/ankan17', color: 'elegant-color' }
        ];
    }
    InfoCardComponent.prototype.ngOnInit = function () {
    };
    InfoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-card',
            template: __webpack_require__(/*! ./info-card.component.html */ "./src/app/info-card/info-card.component.html"),
            styles: [__webpack_require__(/*! ./info-card.component.scss */ "./src/app/info-card/info-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoCardComponent);
    return InfoCardComponent;
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
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });
aos__WEBPACK_IMPORTED_MODULE_4___default.a.init({
    once: true,
    duration: 1100,
    offset: -20,
    easing: 'ease-in-out-cubic'
});


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