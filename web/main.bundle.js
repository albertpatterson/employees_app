webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabButton{\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    border: 2px solid black;\r\n    background: #f1f1f1;\r\n    font-size: 25px;\r\n    width: 100%;\r\n}\r\n\r\n.tabButton:hover{\r\n    background: #707070;\r\n}\r\n\r\n.tabButton.selected{\r\n    background: #cfcfcf;\r\n}\r\n\r\n#viewButtons{\r\n    margin: 25px 0;\r\n}\r\n\r\n#viewButtons>div{\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"text-center\">Employee Manager</h1>\n\n    <div id=viewButtons class=\"row\">\n        <div class = \"col-md-6\">\n            <tooltip arrowLocation=\"top\" left=\"0%\" top=\"50px\" width=\"150px\" message=\"See detailed employee data\" [hidden]=\"!showTips\"></tooltip>                  \n            <button class=\"btn tabButton\" [class.selected]=\"tabDisplayManager.employeesData=='visible'\" (click)=\"showEmployeeDataTab()\">Employees Data</button>                \n        </div>\n        <div class = \"col-md-6\">\n            <tooltip arrowLocation=\"top\" right=\"0%\" top=\"50px\" width=\"150px\" message=\"See raw table data\" [hidden]=\"!showTips\"></tooltip>\n            <button class=\"btn tabButton\" [class.selected]=\"tabDisplayManager.rawTables=='visible'\" (click)=\"showRawTablesTab()\">Raw Tables</button>                \n        </div>\n    </div>\n    <app-employee-data-tab [display] = \"tabDisplayManager.employeesData\"></app-employee-data-tab>\n    <app-tables-tab [display] = \"tabDisplayManager.rawTables\"></app-tables-tab>        \n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_SingleActivationManager__ = __webpack_require__("../../../../../src/app/utils/SingleActivationManager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * tabs shown on the page
 */
var tabs = ["employeesData", "rawTables"];
/**
 * component defining the two tabs to display - detailed employee data and raw tables
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
var AppComponent = (function () {
    function AppComponent() {
        /**
         * indicates if the tooltips should be shown
         *
         * @type {boolean}
         * @memberof AppComponent
         */
        this.showTips = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tabDisplayManager = new __WEBPACK_IMPORTED_MODULE_1__utils_SingleActivationManager__["a" /* SingleActivationManager */](tabs, "block", "none");
    };
    /**
     * Show the detailed employee data tab
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.showEmployeeDataTab = function () {
        this.tabDisplayManager.activate('employeesData');
        this.showTips = false;
    };
    /**
   * Show the raw tables tab
   *
   * @memberof AppComponent
   */
    AppComponent.prototype.showRawTablesTab = function () {
        this.tabDisplayManager.activate('rawTables');
        this.showTips = false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'employee-manager',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/app/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tables_tab_tables_tab_component__ = __webpack_require__("../../../../../src/app/tables-tab/tables-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_data_tab_employee_data_tab_component__ = __webpack_require__("../../../../../src/app/employee-data-tab/employee-data-tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_database_service__ = __webpack_require__("../../../../../src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_table_data_table_component__ = __webpack_require__("../../../../../src/app/data-table/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employee_data_update_form_employee_data_update_form_component__ = __webpack_require__("../../../../../src/app/employee-data-update-form/employee-data-update-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__employee_data_filter_form_employee_data_filter_form_component__ = __webpack_require__("../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__loading_indicator_loading_indicator_component__ = __webpack_require__("../../../../../src/app/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/tooltip/tooltip.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dropdown_dropdown_component__["a" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_6__tables_tab_tables_tab_component__["a" /* TablesTabComponent */],
            __WEBPACK_IMPORTED_MODULE_7__employee_data_tab_employee_data_tab_component__["a" /* EmployeeDataTabComponent */],
            __WEBPACK_IMPORTED_MODULE_10__data_table_data_table_component__["a" /* DataTableComponent */],
            __WEBPACK_IMPORTED_MODULE_11__employee_data_update_form_employee_data_update_form_component__["a" /* EmployeeDataUpdateFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__employee_data_filter_form_employee_data_filter_form_component__["a" /* EmployeeDataFilterFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__tooltip_tooltip_component__["a" /* TooltipComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_database_service__["a" /* DatabaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-table-contrainer{\r\n    overflow-x: \"scroll\";\r\n    text-align: center;\r\n}\r\n\r\nth{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"data-table-contrainer\">\n  <table class=\"table\" (dblclick)=\"dblClick($event)\">\n    <tr>\n      <th *ngFor=\"let header of headers\">{{header}}</th>\n    </tr>\n    <tr *ngFor=\"let row of rowData; index as rowNum\">\n      <td *ngFor=\"let item of row; index as colNum\" [attr.data-row]=\"rowNum\" [attr.data-col]=\"colNum\">{{item}}</td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/data-table/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * component defining a table for displaying and editing data
 *
 * @export
 * @class DataTableComponent
 * @implements {OnChanges}
 */
var DataTableComponent = (function () {
    function DataTableComponent() {
        /**
         * emitter for double click event to trigger data edit
         *
         * @type {EventEmitter<number[]>}
         * @memberof DataTableComponent
         */
        this.cellDblClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * emit the double click event with information about the cell that was clicked
     *
     * @param {any} event
     * @memberof DataTableComponent
     */
    DataTableComponent.prototype.dblClick = function (event) {
        var target = event.target;
        var col = target.dataset.col;
        var row = target.dataset.row;
        this.cellDblClick.next([row, col]);
        event.preventDefault();
    };
    return DataTableComponent;
}());
DataTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-data-table',
        template: __webpack_require__("../../../../../src/app/data-table/data-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/data-table/data-table.component.css")],
        inputs: ["headers",
            "rowData"],
        outputs: [
            "cellDblClick"
        ]
    }),
    __metadata("design:paramtypes", [])
], DataTableComponent);

//# sourceMappingURL=data-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdownContainer{\r\n    display: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdownContainer\">\n  <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{title}}\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" (click)=\"select($event)\">\n        <a class=\"dropdown-item\" href=\"#\" *ngFor=\"let item of items\">{{item}}</a>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * component defining a custom drop down menu
 *
 * @export
 * @class DropdownComponent
 */
var DropdownComponent = (function () {
    function DropdownComponent() {
        /**
         * event emmitter for item selection event
         *
         * @type {EventEmitter<string>}
         * @memberof DropdownComponent
         */
        this.selection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    DropdownComponent.prototype.select = function (event) {
        var selection = event.target.innerText;
        console.log(selection);
        this.selection.next(selection);
    };
    return DropdownComponent;
}());
DropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dropdown',
        template: __webpack_require__("../../../../../src/app/dropdown/dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dropdown/dropdown.component.css")],
        inputs: ["title",
            "items"],
        outputs: ["selection"]
    }),
    __metadata("design:paramtypes", [])
], DropdownComponent);

//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#empoyeeDataFilterFormContainer{\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n#empoyeeDataFilterForm{\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n}\r\n\r\n\r\nlabel{\r\n    color: white;\r\n}\r\n\r\n#gender>title{\r\n    text-align: center;\r\n}\r\n\r\n#formTitle{\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 25px;   \r\n}\r\n\r\n.form-group{\r\n    text-align: left;\r\n}\r\n\r\n#gender .form-group{\r\n    text-align: center;\r\n}\r\n\r\n.btn{\r\n    transition: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"empoyeeDataFilterFormContainer\" [style.visibility]=\"visibility\">\r\n    <h1 id=\"formTitle\">{{formTitle}}</h1>\r\n    <form id=\"empoyeeDataFilterForm\" (ngSubmit)=\"onSubmit()\" #empoyeeDataFilterForm=\"ngForm\">\r\n      \r\n      <label for=\"gender\">Gender</label>\r\n      <div id=\"gender\" class=\"row\">\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"genderM\">Male</label>\r\n          <input type=\"checkbox\" class=\"form-control\" id=\"genderM\" [(ngModel)]=\"filter.genderM\" name=\"gender\" value=\"M\" [attr.checked]=\"filter.genderM\">\r\n        </div>\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"genderF\">Female</label>\r\n          <input type=\"checkbox\" class=\"form-control\" id=\"genderF\" [(ngModel)]=\"filter.genderF\" name=\"gender\" value=\"M\" [attr.checked]=\"filter.genderF\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"form-group\">\r\n        <label for=\"limit\">Limit</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"limit\" required [(ngModel)]=\"filter.limit\" name=\"limit\" [value]=\"filter.limit\">\r\n      </div> \r\n  \r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"(!empoyeeDataFilterForm.form.valid)||(!empoyeeDataFilterForm.form.dirty)\">Submit</button>\r\n      <button class=\"btn btn-basic\" (click)=\"hide()\">Cancel</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDataFilterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Filter__ = __webpack_require__("../../../../../src/app/utils/Filter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * component defining a form to choose filters for the employee data
 *
 * @export
 * @class EmployeeDataFilterFormComponent
 * @implements {OnChanges}
 */
var EmployeeDataFilterFormComponent = (function () {
    function EmployeeDataFilterFormComponent() {
        /**
         * indicates if this form is visible
         *
         * @type {string}
         * @memberof EmployeeDataFilterFormComponent
         */
        this.visibility = "visible";
        /**
         * The title to display with the form
         *
         * @type {string}
         * @memberof EmployeeDataFilterFormComponent
         */
        this.formTitle = "Filter Employee Data";
        /**
         * emmitter for the form changed event
         *
         * @type {EventEmitter<Filter>}
         * @memberof EmployeeDataFilterFormComponent
         */
        this.filterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * emitter for the visibility changed event
         *
         * @type {EventEmitter<string>}
         * @memberof EmployeeDataFilterFormComponent
         */
        this.visibilityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * ensure that a valid vilter is being used
     *
     * @memberof EmployeeDataFilterFormComponent
     */
    EmployeeDataFilterFormComponent.prototype.ngOnChanges = function () {
        this.filter = this.filter || new __WEBPACK_IMPORTED_MODULE_1__utils_Filter__["a" /* Filter */](true, true, 1e3);
    };
    /**
     * submit the update to the filter
     *
     * @memberof EmployeeDataFilterFormComponent
     */
    EmployeeDataFilterFormComponent.prototype.onSubmit = function () {
        this.filterChanged.next(this.filter);
        this.hide();
    };
    /**
     * hide the form
     *
     * @memberof EmployeeDataFilterFormComponent
     */
    EmployeeDataFilterFormComponent.prototype.hide = function () {
        this.visibility = "hidden";
        this.visibilityChange.next(this.visibility);
    };
    /**
     * show the form
     *
     * @memberof EmployeeDataFilterFormComponent
     */
    EmployeeDataFilterFormComponent.prototype.show = function () {
        this.visibility = "visible";
        this.visibilityChange.next(this.visibility);
    };
    return EmployeeDataFilterFormComponent;
}());
EmployeeDataFilterFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employee-data-filter-form',
        template: __webpack_require__("../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee-data-filter-form/employee-data-filter-form.component.css")],
        inputs: [
            "filter",
            "visibility"
        ],
        outputs: [
            "filterChanged",
            "visibilityChange"
        ]
    }),
    __metadata("design:paramtypes", [])
], EmployeeDataFilterFormComponent);

//# sourceMappingURL=employee-data-filter-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee-data-tab/employee-data-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#viewButtonRow{\r\n    margin: 25px 0;\r\n    position: relative;\r\n}\r\n\r\n.viewButton{\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    border: 2px solid #000;\r\n    background: #f1f1f1;\r\n    font-size: 20px;\r\n    color: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee-data-tab/employee-data-tab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"centeredContents\" [style.display]=\"display\">\n  <div id=\"viewButtonRow\" class=\"row\">\n    <tooltip arrowLocation=\"top\" left=\"0%\" top=\"45px\" width=\"150px\" message=\"Add a new employee\" [hidden]=\"!showTips\"></tooltip>\n    <button (click)=\"addEmployee()\" class=\"viewButton btn btn-success col-sm-4\">Add</button>\n    <tooltip arrowLocation=\"top\" left=\"0%\" top=\"45px\" width=\"150px\" message=\"Set query filters\" [hidden]=\"!showTips\"></tooltip>\n    <button (click)=\"showFilterForm()\" class=\"viewButton btn btn-success col-sm-4\">Set Filters</button>\n    <tooltip arrowLocation=\"top\" left=\"0%\" top=\"45px\" width=\"150px\" message=\"Fetch data according to filters\" [hidden]=\"!showTips\"></tooltip>\n    <button (click)=\"fetchData()\" class=\"viewButton btn btn-success col-sm-4\">Fetch Data</button>\n  </div>\n\n  <app-loading-indicator *ngIf=\"loading; else dataTable\"></app-loading-indicator>\n  <ng-template #dataTable>\n      <tooltip arrowLocation=\"bottom\" left=\"0%\" top=\"45px\" width=\"150px\" message=\"Double click to edit\" [hidden]=\"!showTableTip\"></tooltip>\n      <app-data-table [headers]=\"headers\" [rowData]=\"rowData\" (cellDblClick)=\"showUpdateForm($event)\"></app-data-table>        \n  </ng-template>  \n\n  <app-employee-data-update-form [(visibility)]=\"overlayVisibilityManager.updateForm\" [employee]=\"employeeSnapshot\" (changeSubmit)=\"applyUpdate($event)\"></app-employee-data-update-form>\n  <app-employee-data-filter-form [(visibility)]=\"overlayVisibilityManager.filterForm\" [(filter)]=\"filter\"></app-employee-data-filter-form>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/employee-data-tab/employee-data-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDataTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__("../../../../../src/app/services/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_Employee__ = __webpack_require__("../../../../../src/app/utils/Employee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Filter__ = __webpack_require__("../../../../../src/app/utils/Filter.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_SingleActivationManager__ = __webpack_require__("../../../../../src/app/utils/SingleActivationManager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// forms to be shown with this tab
var overlays = ["updateForm", "filterForm"];
/**
 * component defining the tab to display and update detailed imployee data
 *
 * @export
 * @class EmployeeDataTabComponent
 * @implements {OnInit}
 */
var EmployeeDataTabComponent = (function () {
    /**
     * Creates an instance of EmployeeDataTabComponent.
     * @param {DatabaseService} databaseService - the service allowing querying and updating of the database
     * @memberof EmployeeDataTabComponent
     */
    function EmployeeDataTabComponent(databaseService) {
        this.databaseService = databaseService;
        /**
         * indicates if a request for data has not been resolved
         *
         * @type {boolean}
         * @memberof EmployeeDataTabComponent
         */
        this.loading = false;
        /**
         * indicates if the tooltips for the viwe buttons should be shown
         *
         * @type {boolean}
         * @memberof EmployeeDataTabComponent
         */
        this.showTips = true;
        /**
         * indicates if the tooltip for the table should be shown
         *
         * @type {boolean}
         * @memberof EmployeeDataTabComponent
         */
        this.showTableTip = null;
    }
    /**
     * initialize the employee and overlayVisiblityManager
     *
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.ngOnInit = function () {
        this._setEmployee(null);
        this.filter = new __WEBPACK_IMPORTED_MODULE_3__utils_Filter__["a" /* Filter */](true, true, 5);
        this.overlayVisibilityManager = new __WEBPACK_IMPORTED_MODULE_4__utils_SingleActivationManager__["a" /* SingleActivationManager */](overlays, "visible", "hidden");
    };
    /**
     * apply updates to the employee
     *
     * @param {Employee} updatedEmployee - the updated employee data
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.applyUpdate = function (updatedEmployee) {
        var _this = this;
        // show the loading indicator until updated data is received
        this.loading = true;
        var updateApplied;
        // if the employee number is null, a new employee is to be added
        if (this._employee.emp_no === null) {
            updateApplied = this.databaseService.addEmployee(updatedEmployee);
            // otherwise an existing employee is to be updated 
        }
        else {
            updateApplied = this.updateEmployee(updatedEmployee);
        }
        updateApplied.then(function (employee) {
            _this.updateEmployeeDataDisplay(employee);
            _this.loading = false;
        })
            .catch(this._handleError);
    };
    /**
     * update an existing employee
     *
     * @param {Employee} updatedEmployee - the updated employee data
     * @returns {Promise<Employee>} promise to be resolve once the request to update the employee is resolved
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.updateEmployee = function (updatedEmployee) {
        this.showTableTip = false;
        var updateApplied;
        // create an object represending the fields to update
        var update = {};
        for (var field in this._employee) {
            if (this._employee[field] !== updatedEmployee[field]) {
                update[field] = updatedEmployee[field];
            }
        }
        // apply the update and return promise
        if (Object.keys(update).length > 0) {
            this._setEmployee(updatedEmployee);
            updateApplied = this.databaseService.updateEmployee(this._employee.emp_no, update);
        }
        else {
            updateApplied = Promise.resolve(this._employee);
        }
        return updateApplied;
    };
    /**
     * update the detailed employee data displayed in the table
     *
     * @param {Employee} employee - the updated employee data
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.updateEmployeeDataDisplay = function (employee) {
        var emp_no_str = employee.emp_no.toString();
        var row = this.rowData.findIndex(function (row) { return row[0] === emp_no_str; });
        if (row === -1) {
            row = this.rowData.length;
            this.rowData[row] = [];
        }
        this.rowData[row][0] = employee.emp_no;
        this.rowData[row][1] = employee.birth_date;
        this.rowData[row][2] = employee.first_name;
        this.rowData[row][3] = employee.last_name;
        this.rowData[row][4] = employee.gender;
        this.rowData[row][5] = employee.hire_date;
        this.rowData[row][6] = employee.title;
        this.rowData[row][7] = employee.to_date;
        this.rowData[row][8] = employee.dept_name;
        this.rowData[row][9] = employee.salary;
    };
    /**
     * fetch the detailed employee data according to the filter
     *
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.fetchData = function () {
        var _this = this;
        this.showTips = false;
        this._clearData();
        this.loading = true;
        this.databaseService.getFullEmployeeData(this.filter)
            .then(function (data) {
            _this.showTableTip = _this.showTableTip === null;
            _this._updateData(data);
            _this.loading = false;
        })
            .catch(this._handleError);
    };
    /**
     * update the data displayed in the table
     *
     * @private
     * @param {any} data - the data to display in the table
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype._updateData = function (data) {
        this.headers = data.columnNames;
        this.rowData = data.data;
        this.overlayVisibilityManager.deactivateAll();
    };
    /**
     * clear the table
     *
     * @private
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype._clearData = function () {
        this.headers = [];
        this.rowData = [[]];
    };
    /**
     * show the update form with the employee data populated
     *
     * @param {number[]} itemCoords - the corrdinates of the cell that was dobule clicked, used to identify the employee to update
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.showUpdateForm = function (itemCoords) {
        this.showTableTip = (this.showTableTip === null) ? null : false;
        var row = itemCoords[0];
        this._setEmployee(new __WEBPACK_IMPORTED_MODULE_2__utils_Employee__["a" /* Employee */](this.rowData[row][0], this.rowData[row][1], this.rowData[row][2], this.rowData[row][3], this.rowData[row][4], this.rowData[row][5], this.rowData[row][6], this.rowData[row][7], this.rowData[row][8], this.rowData[row][9]));
        this.overlayVisibilityManager.activate("updateForm");
    };
    /**
     * show the form to add an employee
     *
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.addEmployee = function () {
        this.showTips = false;
        this._setEmployee(null);
        this.overlayVisibilityManager.activate("updateForm");
    };
    /**
     * show the form to update the filter
     *
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype.showFilterForm = function () {
        this.showTableTip = (this.showTableTip === null) ? null : false;
        this.showTips = false;
        this.overlayVisibilityManager.activate("filterForm");
    };
    /**
     * handle an error in a request
     *
     * @private
     * @param {Error} e - the error message
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype._handleError = function (e) {
        alert("an error occured, please reload " + e);
    };
    /**
     * set the employee to update
     *
     * @private
     * @param {Employee} employee - the data of the employee to update
     * @memberof EmployeeDataTabComponent
     */
    EmployeeDataTabComponent.prototype._setEmployee = function (employee) {
        if (employee === null) {
            this._employee = new __WEBPACK_IMPORTED_MODULE_2__utils_Employee__["a" /* Employee */](null, null, null, null, null, null, null, null, null, null);
        }
        else {
            this._employee = employee;
        }
        this.employeeSnapshot = JSON.parse(JSON.stringify(this._employee));
    };
    return EmployeeDataTabComponent;
}());
EmployeeDataTabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employee-data-tab',
        template: __webpack_require__("../../../../../src/app/employee-data-tab/employee-data-tab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee-data-tab/employee-data-tab.component.css")],
        inputs: ["display"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]) === "function" && _a || Object])
], EmployeeDataTabComponent);

var _a;
//# sourceMappingURL=employee-data-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/employee-data-update-form/employee-data-update-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#empoyeeDataUpdateFormContainer{\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n#empoyeeDataUpdateForm{\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n}\r\n\r\n\r\nlabel{\r\n    color: white;\r\n}\r\n\r\n#gender>title{\r\n    text-align: center;\r\n}\r\n\r\n#formTitle{\r\n    color: white;\r\n    font-weight: bold;\r\n    font-size: 25px;   \r\n}\r\n\r\n.form-group{\r\n    text-align: left;\r\n}\r\n\r\n#gender .form-group{\r\n    text-align: center;\r\n}\r\n\r\n.btn{\r\n    transition: none;\r\n}\r\n\r\n.form-control:disabled{\r\n    background-color: #929292\r\n}\r\n\r\ninput[type=\"radio\"]{\r\n    height: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee-data-update-form/employee-data-update-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"empoyeeDataUpdateFormContainer\" [style.visibility]=\"visibility\">\r\n    <h1 id=\"formTitle\">{{formTitle}}</h1>\r\n    <form id=\"empoyeeDataUpdateForm\" (ngSubmit)=\"onSubmit()\" #empoyeeDataUpdateForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label for=\"birth_date\">Birth Date</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"birth_date\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.birth_date\" name=\"birth_date\" [value]=\"employee.birth_date\">\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"first_name\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"first_name\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.first_name\" name=\"first_name\" [value]=\"employee.first_name\">\r\n      </div>\r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"last_name\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"last_name\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.last_name\" name=\"last_name\" [value]=\"employee.last_name\">\r\n      </div>\r\n    \r\n      \r\n      <label for=\"gender\">Gender</label>\r\n      <div id=\"gender\" class=\"row\">\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"genderM\">Male</label>\r\n          <input type=\"radio\" class=\"form-control\" id=\"genderM\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.gender\" name=\"gender\" value=\"M\" [attr.checked]=\"employee.gender==='M'\">\r\n        </div>\r\n        <div class=\"form-group col-sm-6\">\r\n          <label for=\"genderF\">Female</label>\r\n          <input type=\"radio\" class=\"form-control\" id=\"genderF\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.gender\" name=\"gender\" value=\"F\" [attr.checked]=\"employee.gender==='F'\">\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"hire_date\">Hire Date</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"hire_date\" required [disabled]=\"!isNewEmployee\" [(ngModel)]=\"employee.hire_date\" name=\"hire_date\" [value]=\"employee.hire_date\">\r\n      </div>\r\n    \r\n      <div class=\"form-group\">\r\n        <label for=\"title\">Title</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"title\" required [(ngModel)]=\"employee.title\" name=\"title\" [value]=\"employee.title\">\r\n      </div> \r\n      \r\n      <div class=\"form-group\">\r\n        <label for=\"to_date\">To Date</label>\r\n        <input type=\"date\" class=\"form-control\" id=\"to_date\" required disabled [(ngModel)]=\"employee.to_date\" name=\"to_date\" [value]=\"employee.to_date\">\r\n      </div>\r\n        \r\n      <div class=\"form-group\">\r\n        <label for=\"dept_name\">Department</label>\r\n        <select id=\"dept_name\" class=\"form-control\" required [(ngModel)]=\"employee.dept_name\" name=\"dept_name\">\r\n          <option value=\"Customer Service\" [selected]=\"employee.dept_name==='Customer Service'\">Customer Service</option>\r\n          <option value=\"Development\" [selected]=\"employee.dept_name==='Development'\">Development</option>\r\n          <option value=\"Finance\" [selected]=\"employee.dept_name==='Finance'\">Finance</option>\r\n          <option value=\"Human Resources\" [selected]=\"employee.dept_name==='Human Resources'\">Human Resources</option>\r\n          <option value=\"Marketing\" [selected]=\"employee.dept_name==='Marketing'\">Marketing</option>\r\n          <option value=\"Production\" [selected]=\"employee.dept_name==='Production'\">Production</option>\r\n          <option value=\"Quality Management\" [selected]=\"employee.dept_name==='Quality Management'\">Quality Management</option>\r\n          <option value=\"Research\" [selected]=\"employee.dept_name==='Research'\">Research</option>\r\n          <option value=\"Sales\" [selected]=\"employee.dept_name==='Sales'\">Sales</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"salary\">Salary</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"salary\" required [(ngModel)]=\"employee.salary\" name=\"salary\" [value]=\"employee.salary\">\r\n      </div>       \r\n      \r\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"(!empoyeeDataUpdateForm.form.valid)||(!empoyeeDataUpdateForm.form.dirty)\">Submit</button>\r\n      <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"isNewEmployee\" (click)=\"fireEmployee()\">Fire</button>\r\n      <button type=\"button\" class=\"btn btn-basic\" (click)=\"hide()\">Cancel</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/employee-data-update-form/employee-data-update-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDataUpdateFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * defines a form for updating an employee's data
 *
 * @export
 * @class EmployeeDataUpdateFormComponent
 * @implements {OnInit}
 * @implements {OnChanges}
 */
var EmployeeDataUpdateFormComponent = (function () {
    function EmployeeDataUpdateFormComponent() {
        /**
         * indicates if the form is visible
         *
         * @type {string}
         * @memberof EmployeeDataUpdateFormComponent
         */
        this.visibility = "visible";
        /**
         * the title to be shown with the form
         *
         * @type {string}
         * @memberof EmployeeDataUpdateFormComponent
         */
        this.formTitle = "Add New Employee";
        /**
         * emitter for the update employee data event
         *
         * @type {EventEmitter<Employee>}
         * @memberof EmployeeDataUpdateFormComponent
         */
        this.changeSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        /**
         * emitter for the visibility changed event
         *
         * @type {EventEmitter<string>}
         * @memberof EmployeeDataUpdateFormComponent
         */
        this.visibilityChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * update the display on it
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.ngOnInit = function () {
        this._updateDisplay();
    };
    /**
     * update the display when any changes occure
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.ngOnChanges = function () {
        this._updateDisplay();
    };
    /**
     * update the form display
     *
     * @private
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype._updateDisplay = function () {
        this.isNewEmployee = !this.employee.emp_no;
        if (!this.isNewEmployee) {
            this.formTitle = "Update Data Form Employee #" + this.employee.emp_no;
        }
        else {
            this.formTitle = "Provide Data For New Employee";
        }
    };
    /**
     * event the employee data update event
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.onSubmit = function () {
        this.changeSubmit.next(this.employee);
        this.hide();
    };
    /**
     * hide the form
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.hide = function () {
        console.log("hide");
        this.visibility = "hidden";
        this.visibilityChange.next(this.visibility);
    };
    /**
     * show the form
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.show = function () {
        this.visibility = "visible";
        this.visibilityChange.next(this.visibility);
    };
    /**
     * fire an employee
     *
     * @memberof EmployeeDataUpdateFormComponent
     */
    EmployeeDataUpdateFormComponent.prototype.fireEmployee = function () {
        alert("YOURE FIRED!");
        // todo use service to update data
    };
    return EmployeeDataUpdateFormComponent;
}());
EmployeeDataUpdateFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-employee-data-update-form',
        template: __webpack_require__("../../../../../src/app/employee-data-update-form/employee-data-update-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee-data-update-form/employee-data-update-form.component.css")],
        inputs: [
            "employee",
            "visibility"
        ],
        outputs: [
            "changeSubmit",
            "visibilityChange"
        ]
    }),
    __metadata("design:paramtypes", [])
], EmployeeDataUpdateFormComponent);

//# sourceMappingURL=employee-data-update-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/loading-indicator/loading-indicator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loading-indicator-container{\r\n    width: 750px;\r\n    height: 750px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#message{\r\n    font-size: 50px;\r\n}\r\n\r\n#spinner-container{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n}\r\n\r\n#rotor{\r\n    position: relative;\r\n    top: -750px;\r\n    border-top-color: #f1f1f1; \r\n}\r\n\r\n#background{\r\n    left: 25%;\r\n    border-color: black;\r\n}\r\n\r\n.circle{\r\n    border: 20px solid transparent;\r\n    border-radius: 50%;\r\n    height:100%;\r\n    width: 100%;\r\n    margin:0 auto;\r\n}\r\n\r\n.spinning{\r\n    -webkit-animation-name: spin;\r\n            animation-name: spin;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 1100px) {\r\n    #rotor{\r\n        top: -500px;\r\n    }\r\n    #loading-indicator-container {\r\n        width: 500px;\r\n        height: 500px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 625px) {\r\n    #rotor{\r\n        top: -400px;\r\n    }\r\n    #loading-indicator-container {\r\n        width: 400px;\r\n        height: 400px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n    #rotor{\r\n        top: -200px;\r\n    }\r\n    #loading-indicator-container {\r\n        width: 200px;\r\n        height: 200px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);} \r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);} \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loading-indicator/loading-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loading-indicator-container\">\n  <p id=\"message\">Loading</p>\n  <div id=\"spinner-container\">\n      <div id=\"background\" class=\"circle\"></div>\n      <div id=\"rotor\" class=\"spinning circle\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loading-indicator/loading-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * define a simple spinner to indicate that the app is loading data
 *
 * @export
 * @class LoadingIndicatorComponent
 */
var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
    }
    return LoadingIndicatorComponent;
}());
LoadingIndicatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-loading-indicator',
        template: __webpack_require__("../../../../../src/app/loading-indicator/loading-indicator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loading-indicator/loading-indicator.component.css")],
    }),
    __metadata("design:paramtypes", [])
], LoadingIndicatorComponent);

//# sourceMappingURL=loading-indicator.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * defines a service for sending requests to query and update employee data
 *
 * @export
 * @class DatabaseService
 */
var DatabaseService = (function () {
    /**
     * Creates an instance of DatabaseService.
     * @param {Http} http
     * @memberof DatabaseService
     */
    function DatabaseService(http) {
        this.http = http;
        /**
         * url to access the table meta data
         *
         * @private
         * @type {string}
         * @memberof DatabaseService
         */
        this._tableNamesUrl = "databaseData";
        /**
         * url to access the table data
         *
         * @private
         * @type {string}
         * @memberof DatabaseService
         */
        this._tableDataUrl = "tableData";
        /**
         * url to access the detailed employee data
         *
         * @private
         * @type {string}
         * @memberof DatabaseService
         */
        this._FullEmployeeDataUrl = "fullEmployeeData";
    }
    /**
     * get the names of the tables in the database
     *
     * @returns {Promise<string[]>} promise to be resolved when the response to the request is received
     * @memberof DatabaseService
     */
    DatabaseService.prototype.getTableNames = function () {
        return this.http.get(this._tableNamesUrl)
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    /**
     * get raw data stored in a table
     *
     * @param {string} tableName the name of the table to access
     * @returns {Promise<any>} promise to be resolved when the response to the request is received
     * @memberof DatabaseService
     */
    DatabaseService.prototype.getTableData = function (tableName) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        search.append("tableName", tableName);
        return this.http.get(this._tableDataUrl, { search: search })
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    /**
     * get the detailed employee data
     *
     * @param {Filter} filter defines what data to select
     * @returns {Promise<String[]>} promise to be resolved when the response to the request is received
     * @memberof DatabaseService
     */
    DatabaseService.prototype.getFullEmployeeData = function (filter) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        search.append("genderM", filter.genderM.toString());
        search.append("genderF", filter.genderF.toString());
        search.append("limit", filter.limit.toString());
        return this.http.get(this._FullEmployeeDataUrl, { search: search })
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    /**
     * update an existing employees data
     *
     * @param {string} emp_no the employee id number
     * @param {*} updates updates to apply to the employee's data
     * @returns {Promise<any>} promise to be resolved when the response to the request is received
     * @memberof DatabaseService
     */
    DatabaseService.prototype.updateEmployee = function (emp_no, updates) {
        var url = this._FullEmployeeDataUrl;
        url += "?emp_no=" + emp_no;
        var attrs = [];
        var values = [];
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var field in updates) {
            attrs.push(field);
            values.push(updates[field]);
        }
        url += "&attrs=" + attrs.join(",") + "&values=" + values.join(",");
        return this.http.put(url, search)
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    /**
     * add a new employee
     *
     * @param {Employee} employee the data of the new employee
     * @returns {Promise<any>} promise to be resolved when the response to the request is received
     * @memberof DatabaseService
     */
    DatabaseService.prototype.addEmployee = function (employee) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        search.append("birth_date", employee.birth_date);
        search.append("first_name", employee.first_name);
        search.append("last_name", employee.last_name);
        search.append("gender", employee.gender);
        search.append("hire_date", employee.hire_date);
        search.append("title", employee.title);
        search.append("dept_name", employee.dept_name);
        search.append("salary", employee.salary);
        return this.http.post(this._FullEmployeeDataUrl, search)
            .toPromise()
            .then(function (resp) { return resp.json(); });
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DatabaseService);

var _a;
//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ "../../../../../src/app/tables-tab/tables-tab.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tables-tab/tables-tab.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"centeredContents\" [style.display]=\"display\">\n      <dropdown title=\"Select a Table\" [items]=\"tableNames\" (selection)=\"showTable($event)\"></dropdown>\n      <app-data-table [headers]=\"headers\" [rowData]=\"rowData\"></app-data-table>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/tables-tab/tables-tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablesTabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__("../../../../../src/app/services/database.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * defines the tab displaying the raw table data
 *
 * @export
 * @class TablesTabComponent
 * @implements {OnInit}
 */
var TablesTabComponent = (function () {
    /**
     * Creates an instance of TablesTabComponent.
     * @param {DatabaseService} databaseService
     * @memberof TablesTabComponent
     */
    function TablesTabComponent(databaseService) {
        this.databaseService = databaseService;
        /**
         * names of the tables stored in the database
         *
         * @type {string[]}
         * @memberof TablesTabComponent
         */
        this.tableNames = [];
    }
    /**
     * get the names of the tables in the database on init
     *
     * @memberof TablesTabComponent
     */
    TablesTabComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.databaseService.getTableNames()
            .then(function (names) {
            _this.tableNames = names;
        })
            .catch(function (e) { return _this._handleError(e); });
    };
    /**
     * show the table data
     *
     * @param {string} tableName
     * @memberof TablesTabComponent
     */
    TablesTabComponent.prototype.showTable = function (tableName) {
        var _this = this;
        this.databaseService.getTableData(tableName)
            .then(function (data) {
            _this.headers = data.columnNames;
            _this.rowData = data.data;
        });
    };
    TablesTabComponent.prototype._handleError = function (e) {
        alert("An Errr occured, please reload: " + e.message);
    };
    return TablesTabComponent;
}());
TablesTabComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tables-tab',
        template: __webpack_require__("../../../../../src/app/tables-tab/tables-tab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tables-tab/tables-tab.component.css")],
        inputs: ["display"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]) === "function" && _a || Object])
], TablesTabComponent);

var _a;
//# sourceMappingURL=tables-tab.component.js.map

/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customTooltipContainer{\r\n    position: relative;\r\n    background: blue;\r\n    z-index: 1000;\r\n}\r\n\r\n.customTooltip{\r\n    position: absolute;\r\n    display: block;\r\n    background: black;\r\n    border-radius: 10px;\r\n}\r\n\r\n.customTooltip.bottom .message::after{\r\n    content: \" \";\r\n    position: absolute;\r\n    top: 100%; \r\n    left: 50%;\r\n    margin-left: -10px;\r\n    border-width: 10px;\r\n    border-style: solid;\r\n    border-color: black transparent transparent transparent;\r\n}\r\n\r\n.customTooltip.top .exit::before{\r\n    content: \" \";\r\n    position: absolute;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin-left: -10px;\r\n    border-width: 10px;\r\n    border-style: solid;\r\n    border-color: transparent transparent black transparent;\r\n}\r\n\r\n.exit{\r\n    text-align: right;\r\n    margin: 0;\r\n    padding: 5px;\r\n\r\n}\r\n\r\n.exit>a{\r\n    color:white;\r\n    font-size: 20px;\r\n}\r\n\r\n.message{\r\n    color:white;\r\n    margin: -10px 0px 0px 0px;\r\n    padding:0 10px 10px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customTooltipContainer\" >\n  <div class=\"customTooltip\" [ngClass]=\"arrowLocation\" [style.left]=\"left\" [style.right]=\"right\" [style.top]=\"top\" [style.bottom]=\"bottom\" [style.width]=\"width\" [style.visibility]=\"visibility\">\n    <p class=\"exit\"><a (click)=\"exit()\">x</a></p>\n    <p class=\"message\">{{message}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * defines a tooltip to be shown on the page for instructional purposes
 *
 * @export
 * @class TooltipComponent
 * @implements {OnInit}
 */
var TooltipComponent = (function () {
    function TooltipComponent() {
        /**
         * event emitter for the exit tooltip event
         *
         * @type {EventEmitter<null>}
         * @memberof TooltipComponent
         */
        this.onExit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    /**
     * ensure all properties have valid valued
     *
     * @memberof TooltipComponent
     */
    TooltipComponent.prototype.ngOnInit = function () {
        this.width = this.width || "";
        this.left = this.left || null;
        this.right = this.right || null;
        this.top = this.top || null;
        this.bottom = this.bottom || null;
        this.message = this.message || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";
        this.visibility = this.visibility || "visible";
        this.arrowLocation = this.arrowLocation || "bottom";
    };
    /**
     * hide the tooltip and emit the exit event
     *
     * @memberof TooltipComponent
     */
    TooltipComponent.prototype.exit = function () {
        this.visibility = "hidden";
        this.onExit.next();
    };
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'tooltip',
        template: __webpack_require__("../../../../../src/app/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tooltip/tooltip.component.css")],
        inputs: [
            "width",
            "left",
            "right",
            "top",
            "bottom",
            "message",
            "visibility",
            "arrowLocation"
        ],
        outputs: [
            "onExit"
        ]
    }),
    __metadata("design:paramtypes", [])
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/utils/Employee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
// defines a set of detailed data for an employee
var Employee = (function () {
    function Employee(emp_no, birth_date, first_name, last_name, gender, hire_date, title, to_date, dept_name, salary) {
        this.emp_no = emp_no;
        this.birth_date = birth_date;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.hire_date = hire_date;
        this.title = title;
        this.to_date = to_date;
        this.dept_name = dept_name;
        this.salary = salary;
    }
    return Employee;
}());

;
//# sourceMappingURL=Employee.js.map

/***/ }),

/***/ "../../../../../src/app/utils/Filter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
// defines a filter for employee data
var Filter = (function () {
    function Filter(genderM, genderF, limit) {
        this.genderM = genderM;
        this.genderF = genderF;
        this.limit = limit;
    }
    return Filter;
}());

//# sourceMappingURL=Filter.js.map

/***/ }),

/***/ "../../../../../src/app/utils/SingleActivationManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleActivationManager; });
/**
 * manager of switchable (on/off) states allowing only a single state to be active (on) at a time
 *
 * @export
 * @class SingleActivationManager
 */
var SingleActivationManager = (function () {
    /**
     * Creates an instance of SingleActivationManager.
     * @param {string[]} switchNames
     * @param {string} onValue
     * @param {string} offValue
     * @memberof SingleActivationManager
     */
    function SingleActivationManager(switchNames, onValue, offValue) {
        var _this = this;
        this._switchNames = switchNames;
        this._onValue = onValue || true;
        this._offValue = offValue || false;
        // defines setters and getters for the switches such that activating on switch deactivates the others
        this._switchNames.forEach(function (name) {
            Object.defineProperty(_this, name, {
                get: function () {
                    return this._getState(name);
                },
                set: function (state) {
                    if (state === this._onValue) {
                        this._activeSwitchName = name;
                    }
                    else {
                        this._activeSwitchName = null;
                    }
                }
            });
        });
    }
    /**
     * get the state of a switch
     *
     * @private
     * @param {string} switchName the name of the switch to check
     * @returns {string} the state of the switch
     * @memberof SingleActivationManager
     */
    SingleActivationManager.prototype._getState = function (switchName) {
        return (switchName === this._activeSwitchName) ? this._onValue : this._offValue;
    };
    /**
     * deactivate all switches
     *
     * @memberof SingleActivationManager
     */
    SingleActivationManager.prototype.deactivateAll = function () {
        this._activeSwitchName = null;
    };
    /**
     * activate a switch
     *
     * @param {string} switchName the name of the switch
     * @memberof SingleActivationManager
     */
    SingleActivationManager.prototype.activate = function (switchName) {
        if (this._isSwitchName(switchName)) {
            this[switchName] = this._onValue;
        }
        else {
            throw new Error("Invalid overlayName \"" + switchName + "\", valid names are " + this._switchNames.toString());
        }
    };
    /**
     * indicates if a string is a valid swich name
     *
     * @private
     * @param {string} switchName the name to check
     * @returns {boolean} indicates if the string is a valid name
     * @memberof SingleActivationManager
     */
    SingleActivationManager.prototype._isSwitchName = function (switchName) {
        return this._switchNames.reduce(function (any, name) { return (any || name === switchName); }, false);
    };
    return SingleActivationManager;
}());

//# sourceMappingURL=SingleActivationManager.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map