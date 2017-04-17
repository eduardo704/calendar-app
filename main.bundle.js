webpackJsonp([2,4],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Calendar app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(237),
        styles: [__webpack_require__(168)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_calendar_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__calendar_calendar_component__["a" /* CalendarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
        this.appoitment = {
            dayOfApoitment: new Date(),
            text: '',
            isEdit: false
        };
        this.appoitments = [];
        this.today = new Date;
        this.isOkay = true;
        this.isEdit = false;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.appoitment = this.initState();
        this.oldApoiment = this.initState();
    };
    CalendarComponent.prototype.makeApoitment = function () {
        var _this = this;
        if (this.appoitment.isEdit) {
            var old = this.appoitments.forEach(function (element) {
                if (element == _this.oldApoiment) {
                    console.log('ISOLD');
                    if (_this.appoitment.dayOfApoitment.getTime() !== _this.oldApoiment.dayOfApoitment.getTime()) {
                        var isNotOkay = _this.appoitments.some(function (element) {
                            return element.dayOfApoitment.getTime() === _this.appoitment.dayOfApoitment.getTime();
                            ;
                        });
                        _this.isOkay = !isNotOkay;
                        if (_this.isOkay) {
                            element.text = _this.appoitment.text;
                            element.dayOfApoitment = _this.appoitment.dayOfApoitment;
                            element = _this.appoitment;
                        }
                    }
                    else {
                        // alert('ddidn change date')
                        console.log(_this.appoitment);
                        element.text = _this.appoitment.text;
                    }
                }
                return;
            });
        }
        else {
            var isNotOkay = this.appoitments.some(function (element) {
                return element.dayOfApoitment.getTime() === _this.appoitment.dayOfApoitment.getTime();
            });
            this.isOkay = !isNotOkay;
            if (this.isOkay) {
                this.appoitments.push(this.appoitment);
            }
        }
        this.appoitments.forEach(function (app) { return app.isEdit = false; });
        this.appoitment = this.initState();
        this.oldApoiment = this.initState();
    };
    CalendarComponent.prototype.initState = function () {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return {
            dayOfApoitment: date,
            text: '',
            isEdit: false
        };
    };
    CalendarComponent.prototype.selectItem = function (item) {
        this.appoitments.forEach(function (app) { return app.isEdit = false; });
        item.isEdit = true;
        this.appoitment = Object.assign({}, item);
        this.oldApoiment = item;
    };
    CalendarComponent.prototype.removeItem = function (item) {
        var index = this.appoitments.indexOf(item);
        this.appoitments.splice(index, 1);
        this.appoitment = this.initState();
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calendar',
        template: __webpack_require__(238),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".margin-top-1 {\r\n    margin-top: 1em;\r\n}\r\n\r\n.no-padding {\r\n    padding-left: 0 !important;\r\n    padding-right: 0!important;\r\n}\r\n\r\n.list-group-item {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n        </div>\n\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n\n<div class=\"container\">\n    <app-calendar></app-calendar>\n</div>"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n    <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-sm-offset-4\">\n                <div style=\"display: flex; justify-content: center\">\n                    <p-calendar [(ngModel)]=\"appoitment.dayOfApoitment\" [minDate]=\"today\" [inline]=\"true\"></p-calendar>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row margin-top-1\">\n            <div class=\"col-sm-12\">\n                <form class=\"form-horizontal\">\n                    <fieldset>\n                        <h3>Make appoitment</h3>\n                        <hr/>\n                        <div class=\"form-group\">\n                            <label for=\"textArea\" class=\"col-lg-2 control-label\">Appoitment:</label>\n                            <div class=\"col-lg-10\">\n                                <textarea name='appoitment' [(ngModel)]=\"appoitment.text\" class=\"form-control\">  </textarea>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label class=\"col-lg-2 control-label\">Selected Date:</label>\n                            <div class=\"col-lg-10\">\n                                <label class=\"control-label\"> {{appoitment.dayOfApoitment|date}}</label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-offset-2 col-sm-10 no-padding\">\n                            <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)='makeApoitment()'>Make appoitment</button>\n                        </div>\n                        <div *ngIf='!isOkay' class=\"col-sm-12 margin-top-1 no-padding\">\n                            <div class=\"alert  alert-danger\">\n                                <strong> There is already an appoitment in {{appoitment.dayOfApoitment|date}}</strong> Please selcet another date.\n                            </div>\n                        </div>\n                    </fieldset>\n                </form>\n            </div>\n        </div>\n        <div class=\"row margin-top-1\">\n            <div class=\"col-sm-12\">\n                <h3>Appoitments</h3>\n                <hr/>\n                <ul class=\"list-group\">\n                    <li [ngClass]=\"{'active': item.isEdit}\" *ngFor=\"let item of appoitments\" class=\"list-group-item\" (click)='selectItem(item)'>\n                        <span>{{item.text}}</span>\n                        <span>{{item.dayOfApoitment|date}}</span>\n                        <span style=\"float: right\" (click)='removeItem(item)'> &times;</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(111);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.bundle.js.map