webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AddDataPage } from '../add-data/add-data';

//import { EditDataPage } from '../edit-data/edit-data';
var HomePage = (function () {
    function HomePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.userRecords = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    HomePage.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote, amount: res.rows.item(i).amount });
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalIncome FROM wellness WHERE type="Income"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalExpense FROM wellness WHERE type="Expense"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */]);
    };
    HomePage.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addData()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            \n            <header role="banner"></header>\n            <ion-col>\n                <h2 class="md-display-1" aria-label="Mental Health App">Mental Health App</h2>\n                <button ion-button ng-click="setLanguage(\'en\')" aria-label="English" ><strong>English</strong></button> <BR>\n                <button ion-button href="#/terms-en" aria-label="Terms and Conditions" >Terms and Conditions</button> \n            </ion-col>\n\n            <ion-col>\n                <div flex lang="fr" layout="column">\n                    <h2 class="md-display-1" aria-label="App Santé mentale">App Santé Mentale</h2>\n                    <button ion-button ng-click="setLanguage(\'fr\')" aria-label="Français" ><strong>Français</strong></button> <BR>\n                    <button ion-button href="#/terms-fr" aria-label="Termes et Conditions" >Termes et Conditions</button>                     \n                </div>\n            </ion-col>\n        \n        </ion-row>     \n        <br class="clearfix" />\n       <p class="text-center ver" aria-label="Version 1.0"><small>Version 1.0</small></p>\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AddDataPage } from '../add-data/add-data';
//import { EditDataPage } from '../edit-data/edit-data';
var Login = (function () {
    function Login(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
    }
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Login\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    \n\n<!--\n\n    <h2>Password</h2>\n\n    <ion-item>\n\n        <ion-input type="password" placeholder="Password Input"></ion-input>\n\n    </ion-item>\n\n    \n\n    <ion-row>\n\n        \n\n        <div layout-align="start center">\n\n            <button ion-button ng-click="login()">Login</button>\n\n	</div>\n\n\n\n        <div layout-align="end center">\n\n            <button ion-button ng-click="forgotPin()">Forgot Pin</button>\n\n	</div>\n\n        \n\n    </ion-row>\n\n        \n\n    <ion-row>\n\n\n\n        <div>\n\n            <button ion-button ng-click="newUser()">Create User</button>\n\n        </div>\n\n\n\n    </ion-row>\n\n-->\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_data_edit_data__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DailyEntry_dailyEntry__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//
//import { AddDataPage } from '../../add-data/add-data';

//import { CheckinLogInfo } from '../CheckinLogInfo/checkinLogInfo';

 //services for SQLite FEB 2018
//import { Toast } from '@ionic-native/toast';
//import { DataServiceProvider } from '../../../providers/data-service/data-service';
var CheckinLog = (function () {
    function CheckinLog(navCtrl, navParams, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        //    checkinLogInfo = CheckinLogInfo;
        //        dailyntry = DailyEntry;
        this.userRecords = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
    }
    CheckinLog.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    CheckinLog.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    CheckinLog.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote, amount: res.rows.item(i).amount });
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalIncome FROM wellness WHERE type="Income"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalExpense FROM wellness WHERE type="Expense"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    CheckinLog.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__DailyEntry_dailyEntry__["a" /* DailyEntry */]);
    };
    CheckinLog.prototype.editData = function (rowid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_data_edit_data__["a" /* EditDataPage */], {
            rowid: rowid
        });
    };
    CheckinLog.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    CheckinLog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLog</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="addData()">\n\n                <ion-icon name="add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n    <ion-item-sliding *ngFor="let wellness of userRecords; let i=index">\n\n        <ion-item nopadding>\n\n            <ion-card>\n\n                <ion-row layout-align="center center" flex="60">\n\n\n\n                    <ion-col class="moodBackground" layout-align="center center">\n\n                        {{wellness.moodScore}}\n\n                        <strong>Mood</strong>\n\n                    </ion-col>\n\n\n\n                    <ion-col class="dietBackground" layout-align="center center">\n\n                        {{wellness.dietScore}}\n\n                        <strong>Diet</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="sleepBackground" layout-align="center center">\n\n                        {{wellness.sleepScore}}\n\n                        <strong>Sleep</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="stressBackground" layout-align="center center">\n\n                        {{wellness.stressScore}}\n\n                        <strong>Stress</strong>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n\n\n                <ion-icon name="Wellness" item-start></ion-icon>\n\n                Wellness Score:{{(wellness.moodScore+wellness.stressScore+wellness.dietScore+wellness.stressScore)*2}}\n\n\n\n            </ion-card>\n\n\n\n        </ion-item>\n\n      <!--  </button> -->\n\n    </ion-item-sliding>\n\n    </ion-list>    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CscContacts_cscContacts__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Employee_employee__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EmployeeFamily_employeeFamily__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Public_public__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Resources = (function () {
    function Resources(navCtrl) {
        this.navCtrl = navCtrl;
        this.cscContacts = __WEBPACK_IMPORTED_MODULE_2__CscContacts_cscContacts__["a" /* CSCContacts */];
        this.employee = __WEBPACK_IMPORTED_MODULE_3__Employee_employee__["a" /* Employee */];
        this.empfamily = __WEBPACK_IMPORTED_MODULE_4__EmployeeFamily_employeeFamily__["a" /* EmployeeFam */];
        this.public = __WEBPACK_IMPORTED_MODULE_5__Public_public__["a" /* Public */];
    }
    Resources = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\resources.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Resources</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    \n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n    \n\n        <button ion-button block [navPush]="employee">CSC Employee</button>\n\n\n\n        <button ion-button block [navPush]="empfamily">CSC Employee Family</button>\n\n    \n\n        <button ion-button block [navPush]="public">Public</button>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\resources.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Resources);
    return Resources;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSCContacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CSCContacts = (function () {
    function CSCContacts(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CSCContacts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cscContacts',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\CscContacts\cscContacts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CSCContacts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<div ng-controller="ResourcesCtrl as ctrl" ng-cloak>\n\n	<md-content class="md-padding">\n\n		<form ng-submit="$event.preventDefault()">\n\n			<md-autocomplete\n\n		          md-selected-item="ctrl.selectedItem"\n\n		          md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"\n\n		          md-search-text="ctrl.searchText"\n\n		          md-items="item in ctrl.querySearch(ctrl.searchText)"\n\n		          md-item-text="item.name"\n\n		          md-min-length="0"\n\n		          placeholder="Search for ...">\n\n		        <md-item-template>\n\n		          <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.name}}</span>\n\n		        </md-item-template>\n\n		        <md-not-found>\n\n		          No resource matching "{{ctrl.searchText}}" were found.\n\n		        </md-not-found>\n\n		    </md-autocomplete>\n\n       		<md-switch flex ng-model="gpsState" ng-change="updateList(gpsState)" ng-if="isGPSEnabled()" aria-label="gps">GPS Results <span>({{getProvince()}})</span></md-switch>\n\n	    </form>      \n\n	    <md-list md-whiteframe="3">\n\n	      <md-list-item class="md-2-line" ng-repeat="item in ctrl.querySearch(ctrl.searchText)">\n\n	      	<ng-md-icon class="md-avatar-icon" icon="person"></ng-md-icon>\n\n	        <div class="md-list-item-text">\n\n	          <h3>{{item.name}}</h3>\n\n	          <p>{{item.region_en}} / {{item.secion_en}}</p>\n\n	        </div>\n\n	          <md-menu class="md-secondary">\n\n			    <md-button class="md-icon-button">\n\n			      <ng-md-icon icon="more_vert" style="fill: gray"></ng-md-icon>\n\n			    </md-button>\n\n			    <md-menu-content width="2">\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'A call will be placed\')">\n\n			        	<ng-md-icon icon="call" style="fill: gray"></ng-md-icon>&nbsp;Call\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'An email will be sent\')">\n\n			         	<ng-md-icon icon="email" style="fill: gray"></ng-md-icon>&nbsp;E-mail\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			    </md-menu-content>\n\n			  </md-menu>\n\n	        <md-divider ng-if="!$last"></md-divider>\n\n	      </md-list-item>\n\n	    </md-list>\n\n  	</md-content>		\n\n</div>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\CscContacts\cscContacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CSCContacts);
    return CSCContacts;
}());

//# sourceMappingURL=cscContacts.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Employee = (function () {
    function Employee(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Employee_1 = Employee;
    Employee.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Employee_1, {
            item: item
        });
    };
    Employee = Employee_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\employee.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Employee</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Employee Assistance Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Harassment Prevention Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Harassment Hot line</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>National Attendance Management Program</button>\n\n    </a>    \n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Critical Incident Stress Management</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Occupational Health and Safety</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Return to Work Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>CSC Contacts by Email</button>\n\n    </a>\n\n    <a href="https://www.sunlife.ca/" class="buttonLink">\n\n        <button ion-button block>Sunlife</button>\n\n    </a>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n	<a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n	\n\n	\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Employee);
    return Employee;
    var Employee_1;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeFam = (function () {
    function EmployeeFam(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EmployeeFam = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-family',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>EmployeeFam</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href=Employee class="buttonLink">\n\n        <button ion-button block >Employee Assistance Program</button>\n\n    </a>\n\n    \n\n    <a href="https://www.canada.ca/en/public-health/services/mental-health-services.html" class="buttonLink">\n\n        <button ion-button block >Mental Health Service</button>\n\n    </a>\n\n    \n\n    <a href="./pages/Resources/public" class="buttonLink">\n\n        <button ion-button block >CSC Family Support Number</button>\n\n    </a>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EmployeeFam);
    return EmployeeFam;
}());

//# sourceMappingURL=employeeFamily.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Public; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Public = (function () {
    function Public(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Public_1 = Public;
    Public.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Public_1, {
            item: item
        });
    };
    Public = Public_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Public\public.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Public</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href="tel:911" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:911">911</md-button>\n\n    </a>\n\n\n\n	<a href="http://ottawa.cmha.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="http://ottawa.cmha.ca/">Canadian Mental Health Association (CMHA)</md-button>\n\n    </a>\n\n	\n\n	<a href="tel:618161979" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:618161979">Call a friend</md-button>\n\n    </a>\n\n	\n\n</md-content>\n\n-->\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Public\public.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Public);
    return Public;
    var Public_1;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SQLTester; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AddDataPage } from '../add-data/add-data';

//import { EditDataPage } from '../edit-data/edit-data';
var SQLTester = (function () {
    function SQLTester(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.userRecords = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
    }
    SQLTester.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    SQLTester.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    SQLTester.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote, amount: res.rows.item(i).amount });
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalIncome FROM wellness WHERE type="Income"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT SUM(amount) AS totalExpense FROM wellness WHERE type="Expense"', {})
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                    _this.balance = _this.totalIncome - _this.totalExpense;
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    SQLTester.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */]);
    };
    SQLTester.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
                .then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    SQLTester = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sqltester-home',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\SQLTester\sqltester.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Checkin Log\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addData()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Wellness List DB Test</h2>\n  <ion-list>\n    <ion-item-sliding *ngFor="let wellness of userRecords; let i=index">\n      <ion-item nopadding>\n        <p>\n          <span>{{wellness.date}}</span><br>\n          Mood: {{wellness.moodScore}}<br>\n          Diet: {{wellness.dietScore}}<br>\n          Sleep: {{wellness.sleepScore}}<br>\n          Stress: {{wellness.stressScore}}<br>\n          {{wellness.entryNote}}\n        </p>\n        <h3 item-end>\n          Wellness Score:{{(wellness.moodScore+wellness.stressScore+wellness.dietScore+wellness.stressScore)*2}}\n        </h3>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="editData(wellness.rowid)">\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button color="danger" (click)="deleteData(wellness.rowid)">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\SQLTester\sqltester.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], SQLTester);
    return SQLTester;
}());

//# sourceMappingURL=sqltester.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_SQLTester_sqltester__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//import { AddDataPage } from '../pages/add-data/add-data';
//import { EditDataPage } from '../pages/edit-data/edit-data';




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_13__pages_SQLTester_sqltester__["a" /* SQLTester */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__["a" /* Public */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_13__pages_SQLTester_sqltester__["a" /* SQLTester */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__["a" /* Public */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_login__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_SQLTester_sqltester__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//import { AddDataPage } from '../pages/add-data/add-data';
//import { EditDataPage } from '../pages/edit-data/edit-data';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Daily Entry', component: __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */] },
            { title: 'Checkin Log', component: __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
            { title: 'SQL Tester', component: __WEBPACK_IMPORTED_MODULE_9__pages_SQLTester_sqltester__["a" /* SQLTester */] },
            //      { title: 'Add Data', component: AddDataPage },
            { title: 'Resorces', component: __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */] },
            { title: 'Log In', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_login__["a" /* Login */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var EditDataPage = (function () {
    function EditDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { rowid: 0, date: "", moodScore: 0, dietScore: 0, sleepScore: 0, stressScore: 0, entryNote: "", amount: 0 };
        this.getCurrentData(navParams.get("rowid"));
    }
    EditDataPage.prototype.getCurrentData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM wellness WHERE rowid=?', [rowid])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.rowid = res.rows.item(0).rowid;
                    _this.data.date = res.rows.item(0).date;
                    _this.data.moodScore = res.rows.item(0).moodScore;
                    _this.data.dietScore = res.rows.item(0).dietScore;
                    _this.data.sleepScore = res.rows.item(0).sleepScore;
                    _this.data.stressScore = res.rows.item(0).stressScore;
                    _this.data.entryNote = res.rows.item(0).entryNote;
                    _this.data.amount = res.rows.item(0).amount;
                }
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage.prototype.updateData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE wellness SET date=?,moodScore=?,dietScore=?,sleepScore=?,description=?,amount=? WHERE rowid=?', [_this.data.date, _this.data.moodScore, _this.data.dietScore, _this.data.sleepScore, _this.data.stressScore, _this.data.entryNote, _this.data.amount, _this.data.rowid])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data updated', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    EditDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-data',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\edit-data\edit-data.html"*/'<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<ion-header>\n\n  <ion-navbar>\n         <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Data</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h2>Edit Data</h2>\n  <form (ngSubmit)="updateData()">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label>mood</ion-label>\n      <ion-input type="number" placeholder="moodScore" [(ngModel)]="data.moodScore" name="moodScore" required="" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Diet</ion-label>\n      <ion-input type="number" placeholder="dietScore" [(ngModel)]="data.dietScore" name="dietScore" required="" ></ion-input>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label>Sleep</ion-label>\n      <ion-input type="number" placeholder="sleepScore" [(ngModel)]="data.sleepScore" name="sleepScore" required="" ></ion-input>\n    </ion-item>      \n\n    <ion-item>\n      <ion-label>Stress</ion-label>\n      <ion-input type="number" placeholder="stressScore" [(ngModel)]="data.stressScore" name="stressScore" required="" ></ion-input>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n    </ion-item>\n      \n    <ion-item>\n      <ion-label>Amount</ion-label>\n      <ion-input type="number" placeholder="Amount" [(ngModel)]="data.amount" name="amount" required="" ></ion-input>\n    </ion-item>\n    <ion-input type="hidden" [(ngModel)]="data.rowid" name="rowid"></ion-input>\n    <button ion-button type="submit" block>Update Data</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\edit-data\edit-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], EditDataPage);
    return EditDataPage;
}());

//# sourceMappingURL=edit-data.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var DailyEntry = (function () {
    function DailyEntry(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { date: "", moodScore: 5, dietScore: 5, sleepScore: 5, stressScore: 5, entryNote: "" };
    }
    DailyEntry.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?,?)', [_this.data.date, _this.data.moodScore, _this.data.dietScore, _this.data.sleepScore, _this.data.stressScore, _this.data.entryNote])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data saved', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        }).catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    DailyEntry = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Daily Entry</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div text-center>\n\n        <img src="../../assets/imgs/feelings/face10.png" class="feelingImg">         \n\n    </div>\n\n    \n\n  <form (ngSubmit)="saveData()">\n\n    <ion-item>\n\n      <ion-label>Date</ion-label>\n\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-range min="0" max="10" [(ngModel)]="data.moodScore" name="moodScore" color="secondary" pin="true" class="slider">\n\n            <ion-label range-left>Mood</ion-label>\n\n        </ion-range>\n\n    </ion-item>      \n\n\n\n    <ion-item>\n\n        <ion-range min="0" max="10" [(ngModel)]="data.dietScore" name="dietScore" color="secondary" pin="true" class="slider">\n\n            <ion-label range-left>Diet</ion-label>\n\n        </ion-range>\n\n    </ion-item> \n\n\n\n    <ion-item>\n\n        <ion-range min="0" max="10" [(ngModel)]="data.sleepScore" name="sleepScore" color="secondary" pin="true" class="slider">\n\n            <ion-label range-left>Sleep</ion-label>\n\n        </ion-range>\n\n    </ion-item> \n\n\n\n    <ion-item>\n\n        <ion-range min="0" max="10" [(ngModel)]="data.stressScore" name="stressScore" color="secondary" pin="true" class="slider">\n\n            <ion-label range-left>Mood</ion-label>\n\n        </ion-range>\n\n    </ion-item>       \n\n      \n\n    <ion-item>\n\n      <ion-label>Description</ion-label>\n\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n\n    </ion-item>\n\n  \n\n      \n\n    <button ion-button type="submit" block>Save Data</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], DailyEntry);
    return DailyEntry;
}());

//# sourceMappingURL=dailyEntry.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map