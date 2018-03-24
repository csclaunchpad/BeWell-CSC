webpackJsonp([0],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Tools_assessment_assessment__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// Local Storage Import
//import { IonicStorageModule } from '@ionic/storage';

// Import for Translation Service


var HomePage = (function () {
    function HomePage(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.assessment = __WEBPACK_IMPORTED_MODULE_4__Tools_assessment_assessment__["a" /* Assessment */];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
    }
    HomePage.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //              this.navCtrl.setRoot(Login);
            }
            _this.userID = value;
        });
    };
    HomePage.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("home.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\home.html"*/'<ion-header *ngIf="pageElementsLoaded">\n  <ion-navbar hideBackButton="true" >\n    <button ion-button menuToggle>\n        <ion-icon name="menu" persistent="true"></ion-icon>\n    </button>\n    <ion-title>\n      {{pageElements.homeTitleText}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addData()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- Loading Div --> \n<div *ngIf="!pageElementsLoaded">\n    <ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n    <div text-center>\n        <img src="../../../assets/imgs/CF.png" class="MapleLeafImg">         \n    </div> \n    \n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <h4 class="title">Where do you score?</h4>         \n            <div text-center>\n                <img src="../../../assets/imgs/MHCM.png" class="assessmentImg">         \n            </div> \n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n<!--                <button ion-button block [navPush]="assessment">Mental Health Continuum</button>       -->\n                <button ion-button block [navPush]="assessment">{{pageElements.buttonText1}}</button>    \n            </ion-col>\n        </ion-row>\n        \n	<ion-row>\n            <ion-col>\n		Link Disabled\n            </ion-col>\n	</ion-row>\n        \n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assessment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// Local Storage Import

// Import for Translation Service

var Assessment = (function () {
    function Assessment(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
    }
    Assessment.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //                this.navCtrl.setRoot(Login);
            }
            _this.userID = value;
        });
    };
    Assessment.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("assessment.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    Assessment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assessment',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Tools\assessment\assessment.html"*/'<ion-header *ngIf="pageElementsLoaded">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<!-- Loading Div --> \n<div *ngIf="!pageElementsLoaded">\n    <ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header"> \n      \n    <h4 class="title">Operational Stress Injury vs. Post-Traumatic Stress Disorder</h4>         \n    \n    <br>\n        An operational stress injury is any persistent psychological \n        difficulty you are experiencing because of your work duties. \n        It is the term used to describe a broad range of problems which \n        includes post-traumatic stress disorder (PTSD) and any other \n        diagnosed conditions, such as anxiety disorders, depression, \n        and other conditions that could interfere with your daily \n        functioning.\n\n    <br>         \n    <div text-center>\n        <img src="../../../assets/imgs/R2MR.png" class="assessmentImg">         \n    </div>                     \n    \n    <button ion-button block (click)="beginTest()"> \n        <ion-icon name="play"> {{pageElements.buttonText1}} </ion-icon>\n    </button>\n    \n    <ion-row>\n	<ion-col>\n            Disabled for Testing!!\n	</ion-col>\n    </ion-row>             \n                          \n</ion-content>\n\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block>Aidez moi / Help Me</button>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Tools\assessment\assessment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], Assessment);
    return Assessment;
}());

//# sourceMappingURL=assessment.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DailyEntry_dailyEntry__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CheckinLogInfo_checkinLogInfo__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_Login_login_login__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// Local Storage Import

// SQLite3 Imports
 //services for SQLite FEB 2018
// Import for Translation Service

// ------------------------- Page Specific Imports ------------------------- //
// Page Imports



var CheckinLog = (function () {
    // ------------------------- Page Specific Variables ------------------------- //
    function CheckinLog(navCtrl, navParams, sqlite, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.storage = storage;
        this.translationService = translationService;
        // ------------------------- Mandatory variables for all pages ------------------------- //
        // Stores our SQLite3 table data
        this.userRecords = [];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
    }
    CheckinLog.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_Login_login_login__["a" /* Login */]);
            }
            _this.userID = value;
        });
    };
    CheckinLog.prototype.redirectToCheckinLogInfo = function (checkinLogID) {
        var objectTest = { test: checkinLogID };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */], {
            entryID: objectTest.test
        });
    };
    CheckinLog.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("checkinLog.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    CheckinLog.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    CheckinLog.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    CheckinLog.prototype.initDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            _this.openDatabase.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.getData();
        }).catch(function (e) { return console.log(e); });
    };
    CheckinLog.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote });
                }
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    CheckinLog.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__DailyEntry_dailyEntry__["a" /* DailyEntry */]);
    };
    /* Needs to be rewritten not using edit-data.ts
    editData(rowid) {
        this.navCtrl.push(EditDataPage, {
            rowid:rowid
        });
    }*/
    CheckinLog.prototype.deleteData = function (rowid) {
        var _this = this;
        this.openDatabase.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
            .then(function (res) {
            console.log(res);
            _this.getData();
        })
            .catch(function (e) { return console.log(e); });
    };
    CheckinLog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header *ngIf="pageElementsLoaded">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{pageElements.checkinLogText}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addData()">\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n    <ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header" style="margin: 0">\n    <ion-list>\n        <ion-item-sliding *ngFor="let wellness of userRecords; let i=index" (click)="redirectToCheckinLogInfo(wellness.rowid)">\n            <ion-item nopadding>\n                <ion-card>\n                    <ion-row layout-align="center center" flex="60">\n\n                        <ion-col class="moodBackground" layout-align="center center">\n                            <strong>{{pageElements.moodText}}: </strong>{{wellness.moodScore}}\n                        </ion-col>\n\n                        <ion-col class="dietBackground" layout-align="center center">\n                            <strong>{{pageElements.dietText}}: </strong>{{wellness.dietScore}}\n                        </ion-col>                \n\n                        <ion-col class="sleepBackground" layout-align="center center">\n                            <strong>{{pageElements.sleepText}}: </strong>{{wellness.sleepScore}}\n                        </ion-col>                \n\n                        <ion-col class="stressBackground" layout-align="center center">\n                            <strong>{{pageElements.stressText}}: </strong>{{wellness.stressScore}}\n                        </ion-col>\n\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-6>\n                            {{pageElements.wellnessScoreText}}: {{wellness.totalScore}}\n                        </ion-col>\n                        <ion-col col-6>\n                            {{wellness.date}}\n                        </ion-col>\n                    </ion-row>\n                                    \n                </ion-card>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block>Aidez moi! / Help me!</button>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAPInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EAPInfo = (function () {
    function EAPInfo(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EAPInfo_1 = EAPInfo;
    EAPInfo.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(EAPInfo_1, {
            item: item
        });
    };
    EAPInfo = EAPInfo_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eapinfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\InfoPages\eapinfo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <a href="mailto:tim.jodoin@gmail.com" class="buttonLink">\n\n        <button ion-button block>Contact EAP</button>\n\n    </a>\n\n\n\n     <div> \n\n        <object type="text/html" data="http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative" width="50%" height="100%" style="overflow:auto;border:5px ridge blue">\n\n        </object>\n\n    </div>\n\n    \n\n    \n\n \n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n	<a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n	\n\n	\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\InfoPages\eapinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EAPInfo);
    return EAPInfo;
    var EAPInfo_1;
}());

//# sourceMappingURL=eapinfo.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
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
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslationService; });
var TranslationService = (function () {
    function TranslationService() {
        console.log("Translation Service Loaded");
    }
    TranslationService.prototype.load = function (page, languageFlag) {
        console.log("Page: " + page);
        console.log("languageFlag2: " + languageFlag);
        if (languageFlag == "en") {
            switch (page) {
                case "login.html": {
                    return {
                        firstNameText: "First Name",
                        pinText: "Pin",
                        createUserText: "Create User",
                        loginText: "Login",
                        forgotPinText: "Forgot Pin"
                    };
                }
                case "newUser.html": {
                    return {
                        firstNameText: "First Name",
                        pinText: "Pin",
                        pinRestrictionText: "4-6 Character Pin",
                        securityQuestionText: "Security Question",
                        securityAnswerText: "Security Answer",
                        createUserText: "Create User!",
                        firstNameFoundText: "That first name is already taken!",
                        invalidNameText: "Your first name cannot be blank",
                        invalidPinLengthText: "Your pin has to be 4-6 characters",
                        invalidSecurityQuestionText: "Your security question cannot be blank!",
                        invalidSecurityAnswerText: "Your security answer cannot be blank!"
                    };
                }
                case "recoverUser.html": {
                    return {
                        recoverUserText: "Recover User",
                        cantFindNameText: "We couldn't find that name!",
                        nameOfAccountText: "What is the name of the account you're trying to recover?",
                        firstNameText: "First Name",
                        findNameText: "Find Name",
                        wrongAnswerText: "That isn't the answer!",
                        answerToQuestionText: "What is the answer to the following security question?",
                        securityAnswerText: "Security Answer",
                        submitAnswerText: "Submit Answer",
                        invalidPinText: "Your pin needs to be between 4 and 6 characters!",
                        enterNewPinText: "Please enter your new pin",
                        characterLengthText: "4-6 Character Pin",
                        setNewPinText: "Set new pin"
                    };
                }
                case "recoverUser.html": {
                    return {
                        recoverUserText: "Recover User",
                        cantFindNameText: "We couldn't find that name!",
                        nameOfAccountText: "What is the name of the account you're trying to recover?",
                        firstNameText: "First Name",
                        findNameText: "Find Name",
                        wrongAnswerText: "That isn't the answer!",
                        answerToQuestionText: "What is the answer to the following security question?",
                        securityAnswerText: "Security Answer",
                        submitAnswerText: "Submit Answer",
                        invalidPinText: "Your pin needs to be between 4 and 6 characters!",
                        enterNewPinText: "Please enter your new pin",
                        characterLengthText: "4-6 Character Pin",
                        setNewPinText: "Set new pin"
                    };
                }
                case "home.html": {
                    return {
                        homeTitleText: "Welcome",
                        buttonText1: "Mental Health Continuum",
                        buttonText2: "Link 2",
                        buttonText3: "Link 3"
                    };
                }
                case "dailyEntry.html": {
                    return {
                        dailyEntryText: "Daily Entry",
                        moodText: "Mood",
                        dietText: "Diet",
                        sleepText: "Sleep",
                        stressText: "Stress",
                        descriptionText: "Description",
                        saveDataText: "Save Data"
                    };
                }
                case "checkinLog.html": {
                    console.log("HIT");
                    return {
                        checkinLogText: "Checkin Log",
                        moodText: "Mood",
                        dietText: "Diet",
                        sleepText: "Sleep",
                        stressText: "Stress",
                        wellnessScoreText: "Score",
                        helpMeText: "Help Me!"
                    };
                }
                case "analyticDashboard.html": {
                    return {
                        dashboardText: "Dashboard",
                        fromDateText: "From Date",
                        toDateText: "To Date",
                        moodText: "Mood",
                        dietText: "Diet",
                        sleepText: "Sleep",
                        stressText: "Stress",
                        generateText: "Generate"
                    };
                }
                case "checkinLogInfo.html": {
                    return {
                        checkinLogInfoText: "Check in Log Info",
                        dateText: "Date",
                        moodText: "Mood",
                        dietText: "Diet",
                        sleepText: "Sleep",
                        stressText: "Stress",
                        editText: "Edit",
                        deleteText: "Delete"
                    };
                }
                case "resources.html": {
                    return {
                        resourceTitleText: "Resources",
                        resPageText: "Choose the resource list that applies to you",
                        buttonText1: "CSC EMPLOYEE",
                        buttonText2: "CSC EMPLOYEE FAMILY",
                        buttonText3: "PUBLIC"
                    };
                }
                case "employee.html": {
                    return {
                        resourceTitleText: "Employee Resources",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "Employee Assistance Program",
                        buttonText3: "CAN Mental Health Association",
                        buttonText4: "Critical Incident Stress Management",
                        buttonText5: "Road to Mental Readiness",
                        buttonText6: "Return to Work Program",
                        buttonText7: "Occupational Health and Safety",
                        buttonText8: "Harassment Prevention Program",
                        buttonText9: "Harassment Hot line",
                        buttonText10: "Sun Life"
                    };
                }
                case "employeeFamily.html": {
                    return {
                        resourceTitleText: "Employee Family",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "Employee Assitance Program",
                        buttonText3: "Mental Health Service",
                        buttonText4: "CSC Family Support Number"
                    };
                }
                case "public.html": {
                    return {
                        resourceTitleText: "Public",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "CAN Mental Health Association",
                        buttonText3: "Critical Incident Stress Management",
                        buttonText4: "HC Mental Health Services"
                    };
                }
                case "assessment.html": {
                    return {
                        resourceTitleText: "Road to Mental Readyness",
                        resourcePageText: "Assess Yourself",
                        opStressInurySentence: "",
                        buttonText1: "Begin Assessment",
                        buttonText2: "Begin Assessment",
                        buttonText3: "Begin Assessment",
                    };
                }
                default: {
                    return {};
                }
            }
        }
        else if (languageFlag == "fr") {
            switch (page) {
                case "login.html": {
                    return {
                        firstNameText: "Prénom",
                        pinText: "épingle",
                        createUserText: "Créer un utilisateur",
                        loginText: "S'identifier",
                        forgotPinText: "Pin oublié"
                    };
                }
                case "newUser.html": {
                    return {
                        firstNameText: "Prénom",
                        pinText: "Épingle",
                        pinRestrictionText: "4-6 Pin de caractère",
                        securityQuestionText: "Question de sécurité",
                        securityAnswerText: "Réponse de sécurité",
                        createUserText: "Créer un utilisateur!",
                        firstNameFoundText: "Ce prénom est déjà pris!",
                        invalidNameText: "Votre prénom ne peut pas être vide",
                        invalidPinLengthText: "Votre code doit être entre 4 et 6 caractères",
                        invalidSecurityQuestionText: "Votre question de sécurité ne peut pas être vide!",
                        invalidSecurityAnswerText: "Votre réponse de sécurité ne peut pas être vide!"
                    };
                }
                case "recoverUser.html": {
                    return {
                        recoverUserText: "Récupérer l'utilisateur",
                        cantFindNameText: "Nous n'avons pas trouvé ce nom!",
                        nameOfAccountText: "Quel est le nom du compte que vous essayez de récupérer?",
                        firstNameText: "Prénom",
                        findNameText: "Trouver le nom",
                        wrongAnswerText: "Ce n'est pas la réponse!",
                        answerToQuestionText: "Quelle est la réponse à la question de sécurité suivante?",
                        securityAnswerText: "Réponse de sécurité",
                        submitAnswerText: "Envoyer une réponse",
                        invalidPinText: "Votre code doit avoir entre 4 et 6 caractères!",
                        enterNewPinText: "S'il vous plaît entrer votre nouvelle broche",
                        characterLengthText: "4-6 Pin de caractère",
                        setNewPinText: "Définir une nouvelle broche"
                    };
                }
                case "home.html": {
                    return {
                        homeTitleText: "Welcome",
                        buttonText1: "Mental Health Continuum",
                        buttonText2: "Link 2",
                        buttonText3: "Link 3"
                    };
                }
                case "dailyEntry.html": {
                    return {
                        dailyEntryText: "Entrée quotidienne",
                        moodText: "Ambiance",
                        dietText: "Régime",
                        sleepText: "Dormir",
                        stressText: "Stress",
                        descriptionText: "La description",
                        saveDataText: "Enregistrer des données"
                    };
                }
                case "checkinLog.html": {
                    return {
                        checkinLogText: "Journal d'enregistrement",
                        moodText: "Ambiance",
                        dietText: "Régime",
                        sleepText: "Dormir",
                        stressText: "Stress",
                        wellnessScoreText: "Score",
                        helpMeText: "Aidez moi!"
                    };
                }
                case "analyticDashboard.html": {
                    return {
                        dashboardText: "Tableau de bord",
                        fromDateText: "Partir de la date",
                        toDateText: "À ce jour",
                        moodText: "Ambiance",
                        dietText: "Régime",
                        sleepText: "Dormir",
                        stressText: "Stress",
                        generateText: "Produire"
                    };
                }
                case "checkinLogInfo.html": {
                    return {
                        checkinLogInfoText: "Archiver les informations du journal",
                        dateText: "Rendez-vous amoureux",
                        moodText: "Ambiance",
                        dietText: "Régime",
                        sleepText: "Dormir",
                        stressText: "Stress",
                        editText: "modifier",
                        deleteText: "Effacer"
                    };
                }
                case "resources.html": {
                    return {
                        resourceTitleText: "Ressources",
                        resPageText: "Choisissez la liste de ressources qui vous concerne",
                        buttonText1: "SCC EMPLOYÉ",
                        buttonText2: "SCC FAMILLE D'EMPLOYÉS",
                        buttonText3: "PUBLIQUE"
                    };
                }
                case "employee.html": {
                    return {
                        resourceTitleText: "Ressources",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Employee Assistance Program",
                        buttonText2: "Harassment Prevention Program",
                        buttonText3: "National Attendance Management Program",
                        buttonText4: "Critical Incident Stress Management",
                        buttonText5: "Occupational Health and Safety",
                        buttonText6: "Return to Work Program",
                        buttonText7: "CSC Contacts by Email",
                        buttonText8: "Harassment Hot line",
                        buttonText9: "Sun Life"
                    };
                }
                case "employeeFamily.html": {
                    return {
                        resourceTitleText: "Employee Family",
                        resPageText: "Choisissez la liste de ressources qui vous concerne",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "Employee Assitance Program",
                        buttonText3: "Mental Health Service",
                        buttonText4: "CSC Family Support Number"
                    };
                }
                case "public.html": {
                    return {
                        resourceTitleText: "Public",
                        resPageText: "Choose the resource list that applies.",
                        buttonText1: "Crisis Hotline",
                        buttonText2: "CAN Mental Health Association",
                        buttonText3: "Critical Incident Stress Management",
                        buttonText4: "HC Mental Health Services"
                    };
                }
                default: {
                    return {};
                }
            }
        }
    };
    return TranslationService;
}());

//# sourceMappingURL=translationService.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__ = __webpack_require__(28);
// Angular/Ionic Imports
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LanguageSelection = (function () {
    function LanguageSelection(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    // Set the language cookie, and then redirect to login.html
    LanguageSelection.prototype.setLanguage = function (language) {
        var _this = this;
        this.storage.set("languageFlag", language).then(function (value) {
            _this.storage.get("languageFlag").then(function (value) {
                console.log("Language Flag: " + value);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__["a" /* Login */]);
            });
        });
    };
    LanguageSelection = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-languageSelection',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\languageSelection\languageSelection.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row text-center style="margin-top: 15%">\n			<ion-col text-center>\n				<h2 class="md-display-1" aria-label="Mental Health App">Mental Health App</h2>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button (click)="setLanguage(\'en\')" aria-label="English"><strong>English</strong></button>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button href="../../assets/Content/7102606_EN_MHApp_TermsConditions_Draft_v2.0_2018-02-23.pdf" aria-label="Terms and Conditions" >Terms and Conditions</button> \n			</ion-col>\n		</ion-row>\n		<ion-row text-center style="margin-top: 20%">\n			<ion-col>\n				<h2 class="md-display-1" aria-label="App Santé mentale">App Santé Mentale</h2>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button (click)="setLanguage(\'fr\')" aria-label="Français" ><strong>Français</strong></button>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button href="../../assets/Content/7102606_EN_MHApp_TermsConditions_Draft_v2.0_2018-02-23.pdf" aria-label="Termes et Conditions" >Termes et Conditions</button>  \n			</ion-col>\n		</ion-row>  \n    </ion-grid>\n</ion-content>\n\n<ion-footer text-center>\n	<span class="" aria-label="Version 1.0"><small>Version 1.0</small></span>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\languageSelection\languageSelection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LanguageSelection);
    return LanguageSelection;
}());

//# sourceMappingURL=languageSelection.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Base Imports


// Import for localStorage

// Import for SQLite3

// Import for Translation Service

var NewUser = (function () {
    function NewUser(navCtrl, sqlite, storage, translationService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.storage = storage;
        this.translationService = translationService;
        // Stores our SQLite3 table data
        this.userRecords = [];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("newUser.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                // Handle null language flag
            }
        });
        // Initialize our view variables
        this.firstName = "";
        this.pin = "";
        this.securityQuestion = "";
        this.securityAnswer = "";
        // Initialize our input validation flags
        this.firstNameFound = false;
        this.invalidPin = false;
        this.invalidSecurityQuestion = false;
        this.invalidSecurityAnswer = false;
        // Initialize our DB
        this.initDB();
    }
    NewUser.prototype.createUser = function () {
        var _this = this;
        // Reset our input validation flags
        this.firstNameFound = false;
        this.invalidName = false;
        this.invalidPin = false;
        this.invalidSecurityQuestion = false;
        this.invalidSecurityAnswer = false;
        // Check if the first name is blank, if it is, set the flag
        if (this.firstName == "") {
            this.invalidName = true;
        }
        // Check to see if that firstName is already used, if so, set the flag
        for (var i = 0; i < this.userRecords.length; i++) {
            if (this.firstName == this.userRecords[i].firstName) {
                this.firstNameFound = true;
            }
        }
        // Check to see if the pin provided is between 4 and 6 characters, if not, set the flag
        if (this.pin.length < 4 || this.pin.length > 6) {
            this.invalidPin = true;
            console.log("Pin is invalid");
        }
        // Check to see if the security question is blank, if so, set the flag
        if (this.securityQuestion == "") {
            this.invalidSecurityQuestion = true;
        }
        // Check to see if the security answer is blank, if so, set the flag
        if (this.securityAnswer == "") {
            this.invalidSecurityAnswer = true;
        }
        // If all flags are false, execute the insert query
        if (!this.invalidName && !this.firstNameFound && !this.invalidPin && !this.invalidSecurityQuestion && !this.invalidSecurityAnswer) {
            this.openDatabase.executeSql('INSERT INTO users(firstName, pin, securityQuestion, securityAnswer) VALUES (?,?,?,?)', [this.firstName, this.pin, this.securityQuestion, this.securityAnswer])
                .then(function (res) {
                console.log("User added successfully");
                // Redirect back to the only possible page call, login.html
                _this.navCtrl.pop();
            }).catch(function (e) { return console.log(e); });
        }
    };
    // Initializes our DB, and fetchs all user records storing them in userRecords[]
    NewUser.prototype.initDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, firstName: res.rows.item(i).firstName, pin: res.rows.item(i).pin, securityQuestion: res.rows.item(i).securityQuestion, securityAnswer: res.rows.item(i).securityAnswer });
                }
                console.log("User Records:");
                console.log(_this.userRecords);
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    NewUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newUser',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\newUser\newUser.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			New User\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n	\n	<ion-grid>\n		<!-- Name already used flag -->	\n		<ion-row *ngIf="firstNameFound">\n			<ion-col>\n				{{pageElements.firstNameFoundText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Name cannot be blank flag -->\n		<ion-row *ngIf="invalidName">\n			<ion-col>\n				{{pageElements.invalidNameText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- First name label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.firstNameText}}</ion-label>\n				<ion-input placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Invalid pin length flag -->\n		<ion-row *ngIf="invalidPinLength">\n			<ion-col>\n				<!-- {{pageElements.invalidPinLengthText}} -->\n			</ion-col>\n		</ion-row>\n		\n		<!-- Pin label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.pinText}}</ion-label>\n				<ion-input placeholder="{{pageElements.pinText}}" [(ngModel)]="pin"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Blank security question flag -->\n		<ion-row *ngIf="invalidSecurityQuestion">\n			<ion-col>\n				{{pageElements.invalidSecurityQuestionText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Security question label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.securityQuestionText}}</ion-label> \n				<ion-input placeholder="{{pageElements.securityQuestionText}}" [(ngModel)]="securityQuestion"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Blank security answer flag -->\n		<ion-row *ngIf="invalidSecurityAnswer">\n			<ion-col>\n				{{pageElements.invalidSecurityAnswerText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Security answer label and input flag -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.securityAnswerText}}</ion-label>\n				<ion-input placeholder="{{pageElements.securityAnswerText}}" [(ngModel)]="securityAnswer"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Create user button -->\n		<ion-row>\n			<ion-col>\n				<button ion-button (click)="createUser()">{{pageElements.createUserText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\newUser\newUser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], NewUser);
    return NewUser;
}());

//# sourceMappingURL=newUser.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Import for localStorage

// Import for Translation Service

// Import for SQLite3

// ------------------------- Page Specific Imports ------------------------- //


var RecoverUser = (function () {
    function RecoverUser(navCtrl, sqlite, storage, translationService) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.storage = storage;
        this.translationService = translationService;
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        // Stores our SQLite3 table data
        this.userRecords = [];
        this.configuration();
    }
    RecoverUser.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("recoverUser.html", value);
                _this.pageElementsLoaded = true;
            }
            else {
                // Handle null language flag
            }
        });
        // Set our initial flags
        this.phase1 = true;
        this.phase2 = false;
        this.phase3 = false;
        // Initialize our input validation flags
        this.incorrectInput = false;
        this.inputNotFound = false;
        this.invalidPin = false;
        // Initialize our DB
        this.initDB();
    };
    // Phase 1: Grab first name and check to see if it exists in our DB
    RecoverUser.prototype.submitPhase1 = function () {
        var nameFound = false;
        for (var i = 0; i < this.userRecords.length; i++) {
            if (this.firstName == this.userRecords[i].firstName) {
                this.phase1 = false;
                this.phase2 = true;
                nameFound = true;
                console.log("Name Found");
                this.userFoundID = this.userRecords[i].rowid;
                this.securityQuestion = this.userRecords[i].securityQuestion;
            }
        }
        if (!nameFound) {
            this.inputNotFound = true;
            console.log("Name not found");
        }
    };
    // Phase 2: User has been found, now ask them their security question
    RecoverUser.prototype.submitPhase2 = function () {
        var answerFound = false;
        for (var i = 0; i < this.userRecords.length; i++) {
            if (this.securityAnswer == this.userRecords[i].securityAnswer) {
                this.phase2 = false;
                this.phase3 = true;
                answerFound = true;
                console.log("Answer is correct");
            }
        }
        if (!answerFound) {
            this.incorrectInput = true;
            console.log("Answer is not correct");
        }
    };
    // Phase 3: User got the security question right, allow them to enter a new pin, once entered, update the user in the DB
    RecoverUser.prototype.submitPhase3 = function () {
        var _this = this;
        if (this.pin.length < 4 || this.pin.length > 6) {
            this.invalidPin = true;
            console.log("That pin is invalid");
        }
        else {
            this.openDatabase.executeSql('UPDATE users SET pin = ? WHERE rowid= ?', [this.pin, this.userFoundID]).then(function (res) {
                console.log(_this.userFoundID);
                console.log("User pin successfully updated");
                _this.navCtrl.pop();
            }).catch(function (e) { return console.log(e); });
        }
    };
    // Initializes our DB, and fetchs all user records storing them in userRecords[]
    RecoverUser.prototype.initDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, firstName: res.rows.item(i).firstName, pin: res.rows.item(i).pin, securityQuestion: res.rows.item(i).securityQuestion, securityAnswer: res.rows.item(i).securityAnswer });
                }
                console.log("User Records:");
                console.log(_this.userRecords);
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    RecoverUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-recoverUser',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\recoverUser\recoverUser.html"*/'<ion-header *ngIf="pageElementsLoaded">\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			{{pageElements.recoverUserText}}\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n	<ion-grid>\n		<!-- Phase 1 -->\n		<ion-row *ngIf="phase1">\n		\n			<!-- Name not found flag -->\n			<ion-col *ngIf="inputNotFound">\n				{{pageElements.cantFindNameText}}\n			</ion-col>\n			\n			<!-- First name label and input field -->\n			<ion-col>\n				<ion-label color="primary">{{pageElements.nameOfAccountText}}</ion-label>\n				<ion-input placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n			</ion-col>\n			\n			<!-- Find name button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase1()">{{pageElements.findNameText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Phase 2 -->\n		<ion-row *ngIf="phase2">\n		\n			<!-- Incorrect answer flag -->\n			<ion-col *ngIf="incorrectInput">\n				{{pageElements.wrongAnswerText}}\n			</ion-col>\n			\n			<!-- Security question, security answer label, and input field -->\n			<ion-col>\n				{{securityQuestion}}\n				<ion-label color="primary">{{pageElements.answerToQuestionText}}</ion-label>\n				<ion-input placeholder="{{pageElements.securityAnswerText}}" [(ngModel)]="securityAnswer"></ion-input>\n			</ion-col>\n			\n			<!-- Submit answer button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase2()">{{pageElements.submitAnswerText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Phase 3 -->\n		<ion-row *ngIf="phase3">\n		\n			<!-- Invalid pin length flag -->\n			<ion-col *ngIf="invalidPin">\n				{{pageElements.invalidPinText}}\n			</ion-col>\n			\n			<!-- Pin label and input field -->\n			<ion-col>\n				<ion-label color="primary">{{pageElements.enterNewPinText}}</ion-label>\n				<ion-input placeholder="{{pageElements.characterLengthText}}" [(ngModel)]="pin"></ion-input>\n			</ion-col>\n			\n			<!-- Set new pin button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase3()">{{pageElements.setNewPinText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\recoverUser\recoverUser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__assets_services_translationService__["a" /* TranslationService */]])
    ], RecoverUser);
    return RecoverUser;
}());

//# sourceMappingURL=recoverUser.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLogInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_Login_login_login__ = __webpack_require__(28);
// ------------------------- Mandatory imports for all pages ------------------------- //
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Component Imports


// Local Storage Import

// SQLite3 Imports
 //services for SQLite FEB 2018
// Import for Translation Service

// ------------------------- Page Specific Imports ------------------------- //

var CheckinLogInfo = (function () {
    function CheckinLogInfo(navCtrl, navParams, storage, translationService, sqlite) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.sqlite = sqlite;
        // ------------------------- Mandatory variables for all pages ------------------------- //
        // Stores our SQLite3 table data
        this.userRecords = [];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.configuration();
        this.authenticate();
    }
    CheckinLogInfo.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("checkinLogInfo.html", value);
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
        this.checkinLogID = this.navParams.get('entryID');
        this.initDB();
    };
    CheckinLogInfo.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_Login_login_login__["a" /* Login */]);
            }
        });
    };
    CheckinLogInfo.prototype.initDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            _this.openDatabase.executeSql('SELECT * FROM wellness WHERE rowid = ?', [_this.checkinLogID])
                .then(function (res) {
                console.log(_this.checkinLogID);
                _this.userRecords = res.rows.item(0);
                console.log(_this.userRecords);
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    CheckinLogInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLogInfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/'<ion-header *ngIf="pageElementsLoaded">\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{pageElements.checkinLogInfoText}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n	<ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding style="height: 100%" *ngIf="pageElementsLoaded" class="has-header">\n\n    <ion-grid>\n		<ion-row text-center>\n			<ion-col>\n				<img src="../../assets/imgs/feelings/face{{totalScore}}.png" class="feelingImg">\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				{{pageElements.dateText}}: {{userRecords.date}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				{{userRecords.entryNote}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col col-4>\n				{{pageElements.moodText}}: {{userRecords.moodScore}}\n			</ion-col>\n			\n			<ion-col col-4 offset-4>\n				{{pageElements.dietText}}: {{userRecords.dietScore}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col col-4>\n				{{pageElements.sleepText}}: {{userRecords.sleepScore}}\n			</ion-col>\n			\n			<ion-col col-4 offset-4>\n				{{pageElements.stressText}}: {{userRecords.stressScore}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button block>{{pageElements.editText}}</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button block>{{pageElements.deleteText}}</button>\n			</ion-col>\n		</ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block>Aidez moi / Help Me</button>\n    </ion-toolbar>\n</ion-footer>\n\n<!--\n<md-content layout-align="start center" layout="column">\n\n    <img src="imgs/feelings/face{{checkinTotal}}.png" class="feelingImg"/>\n\n    <div layout="row" layout-align="center">\n        <div aria-label="{{pageElements.previousAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasPrev}" ng-click="prevEntry()">\n            <img src="imgs/leftArrow.png" class="arrow">\n        </div>\n        <div aria-label="{{pageElements.nextAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasNext}" ng-click="nextEntry()">\n            <img src="imgs/rightArrow.png" class="arrow">\n        </div>\n    </div>\n\n    <h3>{{pageElements.onText}} {{entry.date | date: \'longDate\'}}, {{pageElements.youWereFeelingText}}</h3>\n\n	<div layout="row"  layout-align="center center">\n		<div layout="column" class="dietBackground" layout-align="center center">\n			<div aria-label="{{pageElements.dietText}}: {{entry.dietScore}}">\n				<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n			</div>\n		</div>\n		<div layout="column" class="moodBackground" layout-align="center center">\n			<div aria-label="{{pageElements.moodText}}: {{entry.moodScore}}" layout-align="center center">\n				<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n			</div>\n		</div>\n		<div layout="row" class="stressBackground" layout-align="center center">\n			<div aria-label="{{pageElements.stressText}}: {{entry.stressScore}}">\n				<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n			</div>\n		</div>\n		<div layout="row" class="sleepBackground" layout-align="center center">\n			<div aria-label="{{pageElements.sleepText}}: {{entry.sleepScore}}">\n				<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n			</div>\n		</div>					\n	</div>\n					\n	\n	<!-- Center doesn\'t work atm -->\n<!--	<div layout="row" flex layout-align="center center">\n		<div flex aria-label="Notes: {{entry.entryNote}}">\n			<p ng-show="notesProvided" ng-bind="entry.entryNote" class="descriptionText"></p>\n			<p ng-show="!notesProvided" class="descriptionText">{{pageElements.noNotesText}}</p>\n		</div>\n	</div>\n</md-content>\n-->\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], CheckinLogInfo);
    return CheckinLogInfo;
}());

//# sourceMappingURL=checkinLogInfo.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newUser_newUser__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recoverUser_recoverUser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(61);
// ------------------------- Mandatory imports for all pages ------------------------- //
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Local Storage Imports

// Component Imports


// SQLite3 Imports

// Import for Translation Service

// Alert Controller Imports

// Page Imports
 // newUser.html
 // recoverUser.html
 // home.html
 // home.html
var Login = (function () {
    //private fadeState: String = 'visible';
    function Login(navCtrl, sqlite, alertCtrl, storage, menu, translationService) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.menu = menu;
        this.translationService = translationService;
        // ------------------------- Mandatory variables for all pages ------------------------- //
        // Stores our SQLite3 table data
        this.userRecords = [];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
    }
    Login.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home__["a" /* HomePage */]);
            }
        });
    };
    Login.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("login.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                // Handle null language flag
            }
        });
        // Call initDB without the login flag
        this.initDB(false);
    };
    // Redirect the user to newUser.html
    Login.prototype.newUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newUser_newUser__["a" /* NewUser */]);
    };
    // Redirect the user to recoverUser.html
    Login.prototype.recoverUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recoverUser_recoverUser__["a" /* RecoverUser */]);
    };
    // Our login method, call initDB() with the login flag
    Login.prototype.login = function () {
        this.initDB(true);
    };
    // This method will show an alert based off the title, subtitle, and button text inputs
    Login.prototype.showAlert = function (titleText, subtitleText, buttonText) {
        console.log(this.navCtrl);
        var alert = this.alertCtrl.create({
            title: titleText,
            subTitle: subtitleText,
            buttons: [buttonText]
        });
        alert.present(alert);
    };
    // Queries the DB for the provided pin, returns true if the account was found
    Login.prototype.checkPin = function () {
        // Check our DB variable
        if (this.openDatabase != null) {
            // Check our records variable
            if (this.userRecords != null) {
                // Iterate through our records variable, if we have a match, take in the userID and return true
                for (var i = 0; i < this.userRecords.length; i++) {
                    if (this.userRecords[i].pin.toLowerCase() == this.pin.toLowerCase() && this.userRecords[i].firstName.toLowerCase() == this.firstName.toLowerCase()) {
                        this.userID = this.userRecords[i].rowid;
                        return true;
                    }
                }
            }
            else {
                console.log("userRecords hasn't been set");
                return false;
            }
        }
        else {
            console.log("openDatabase hasn't been set");
            return false;
        }
        // No user found
        console.log("No user found");
        return false;
    };
    Login.prototype.loginProcess = function () {
        // If found
        if (this.checkPin()) {
            console.log("User ID:" + this.userID);
            // Set our login flag in localStorage and then redirect to the home page
            this.storage.set("userID", this.userID);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */]);
            // If not found
        }
        else {
            this.showAlert("Invalid Login", "The first name or pin you have entered wasn't found", "Let's try again!");
        }
    };
    // Creates a connection to our DB, performs the login process if given the login flag
    Login.prototype.initDB = function (loginFlag) {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            // Take the open connection and save it to our openDatabase variable
            _this.openDatabase = db;
            // If the table hasn't been created yet, create it (This will eventually be moved to an initial script that'll run on launch
            db.executeSql('CREATE TABLE IF NOT EXISTS users(rowid INTEGER PRIMARY KEY, firstName TEXT, pin TEXT, securityQuestion TEXT, securityAnswer TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            // Fetch all the users from our DB
            db.executeSql('SELECT * FROM users ORDER BY rowid DESC', {})
                .then(function (res) {
                // Store them all in our userRecords variable
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, firstName: res.rows.item(i).firstName, pin: res.rows.item(i).pin, securityQuestion: res.rows.item(i).securityQuestion, securityAnswer: res.rows.item(i).securityAnswer });
                }
                console.log("User Records:");
                console.log(_this.userRecords);
                // If login flag is set, start our login checking process, we do it this way because our DB is retrieved as a promise. (Possibly explore better promise handling techniques in the future - JW) 
                if (loginFlag) {
                    _this.loginProcess();
                }
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\login\login.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded">\n	<ion-grid>\n		<ion-row>\n			<ion-col text-center>\n				{{pageElements.firstNameText}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<ion-item>\n					<ion-input type="text" placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				{{pageElements.pinText}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<ion-item>\n					<ion-input type="text" placeholder="{{pageElements.pinText}}" [(ngModel)]="pin"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<button ion-button (click)="login()">{{pageElements.loginText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n		\n			<ion-col col-6 text-center>\n				<button ion-button (click)="newUser()">{{pageElements.createUserText}}</button>\n			</ion-col>\n			\n			<ion-col col-6 text-center>\n				<button ion-button (click)="recoverUser()">{{pageElements.forgotPinText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<!--<button ion-button (click)="toggleFade()">Toggle</button>-->\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\login\login.html"*/
            /*animations: [
                trigger('fade', [
                    state('visible', style({
                        opacity: 1
                    })),
                    state('invisible', style({
                        opacity: 0.1
                    })),
                    transition('visible <=> invisible', animate('200ms linear'))
                ])
            ]*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignOut = (function () {
    function SignOut(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        storage.remove("userID").then(function () {
            console.log("Signout successful!");
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
        }).catch(function (e) {
            console.log("Signout unsuccessful: " + e);
        });
    }
    SignOut = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signout',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\signout\signout.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n		Sign Out\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\home\Login\signout\signout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SignOut);
    return SignOut;
}());

//# sourceMappingURL=signout.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CscContacts_cscContacts__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Employee_employee__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EmployeeFamily_employeeFamily__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Public_public__ = __webpack_require__(340);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// Local Storage Import

// Import for Translation Service

// Page Imports




var Resources = (function () {
    function Resources(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.cscContacts = __WEBPACK_IMPORTED_MODULE_4__CscContacts_cscContacts__["a" /* CSCContacts */];
        this.employee = __WEBPACK_IMPORTED_MODULE_5__Employee_employee__["a" /* Employee */];
        this.empfamily = __WEBPACK_IMPORTED_MODULE_6__EmployeeFamily_employeeFamily__["a" /* EmployeeFam */];
        this.resPublic = __WEBPACK_IMPORTED_MODULE_7__Public_public__["a" /* Public */];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
    }
    Resources.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //                this.navCtrl.setRoot(Login);
            }
            _this.userID = value;
        });
    };
    Resources.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("resources.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    Resources = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\resources.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    \n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!-- Loading Div --> \n\n<div *ngIf="!pageElementsLoaded">\n\n	<ion-spinner></ion-spinner>\n\n</div>\n\n\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n             \n\n    <h3 class="title">{{pageElements.resPageText}}</h3>\n\n    \n\n        <button ion-button block [navPush]="employee">{{pageElements.buttonText1}}</button>\n\n\n\n        <button ion-button block [navPush]="empfamily">{{pageElements.buttonText2}}</button>\n\n    \n\n        <button ion-button block [navPush]="resPublic">{{pageElements.buttonText3}}</button>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    \n\n    <ion-toolbar>\n\n    \n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    \n\n    </ion-toolbar>\n\n    \n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\resources.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], Resources);
    return Resources;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSCContacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-cscContacts',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\CscContacts\cscContacts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CSCContacts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<div ng-controller="ResourcesCtrl as ctrl" ng-cloak>\n\n	<md-content class="md-padding">\n\n		<form ng-submit="$event.preventDefault()">\n\n			<md-autocomplete\n\n		          md-selected-item="ctrl.selectedItem"\n\n		          md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"\n\n		          md-search-text="ctrl.searchText"\n\n		          md-items="item in ctrl.querySearch(ctrl.searchText)"\n\n		          md-item-text="item.name"\n\n		          md-min-length="0"\n\n		          placeholder="Search for ...">\n\n		        <md-item-template>\n\n		          <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.name}}</span>\n\n		        </md-item-template>\n\n		        <md-not-found>\n\n		          No resource matching "{{ctrl.searchText}}" were found.\n\n		        </md-not-found>\n\n		    </md-autocomplete>\n\n       		<md-switch flex ng-model="gpsState" ng-change="updateList(gpsState)" ng-if="isGPSEnabled()" aria-label="gps">GPS Results <span>({{getProvince()}})</span></md-switch>\n\n	    </form>      \n\n	    <md-list md-whiteframe="3">\n\n	      <md-list-item class="md-2-line" ng-repeat="item in ctrl.querySearch(ctrl.searchText)">\n\n	      	<ng-md-icon class="md-avatar-icon" icon="person"></ng-md-icon>\n\n	        <div class="md-list-item-text">\n\n	          <h3>{{item.name}}</h3>\n\n	          <p>{{item.region_en}} / {{item.secion_en}}</p>\n\n	        </div>\n\n	          <md-menu class="md-secondary">\n\n			    <md-button class="md-icon-button">\n\n			      <ng-md-icon icon="more_vert" style="fill: gray"></ng-md-icon>\n\n			    </md-button>\n\n			    <md-menu-content width="2">\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'A call will be placed\')">\n\n			        	<ng-md-icon icon="call" style="fill: gray"></ng-md-icon>&nbsp;Call\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'An email will be sent\')">\n\n			         	<ng-md-icon icon="email" style="fill: gray"></ng-md-icon>&nbsp;E-mail\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			    </md-menu-content>\n\n			  </md-menu>\n\n	        <md-divider ng-if="!$last"></md-divider>\n\n	      </md-list-item>\n\n	    </md-list>\n\n  	</md-content>		\n\n</div>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\CscContacts\cscContacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CSCContacts);
    return CSCContacts;
}());

//# sourceMappingURL=cscContacts.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import for Translation Service



var Employee = (function () {
    function Employee(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.eapinfo = __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__["a" /* EAPInfo */];
        this.resinfo = __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
        this.clObj = { empUrl: "http://www.crisisline.ca/",
            empEmail: "tel:+18669960991",
            empTitle: "Contact Crisisline"
        };
        this.eapObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Contact EAP"
        };
        this.cmhaObj = { empUrl: "https://cmha.ca/",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "CAN Mental Health Association"
        };
        this.cismObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Critical Incident Stress Management"
        };
        this.rmrObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Road to Mental Readiness"
        };
        this.rwpObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Return to Work Program"
        };
        this.ohsObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Occupational Health and Safety"
        };
        this.hppObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Harassment Prevention Program"
        };
        this.hhlObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Harassment Hot line"
        };
        this.sunObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Sunlife"
        };
    }
    Employee.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //                this.navCtrl.setRoot(Login);
            }
            _this.userID = value;
        });
    };
    Employee.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("employee.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    //opens resource link with details associated to the selection from the UI.
    Employee.prototype.JumpToLink = function (empObj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */], { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle });
        //        this.navCtrl.push( ResInfo, { eapObj } )
    };
    Employee = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\employee.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- Loading Div --> \n\n<div *ngIf="!pageElementsLoaded">\n\n    <ion-spinner></ion-spinner>\n\n</div>\n\n\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n\n\n    <button ion-button block (click)="JumpToLink(clObj)"> {{pageElements.buttonText1}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(eapObj)"> {{pageElements.buttonText2}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(cmhaObj)"> {{pageElements.buttonText3}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(cismObj)"> {{pageElements.buttonText4}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(rmrObj)"> {{pageElements.buttonText5}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(rwpObj)"> {{pageElements.buttonText6}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(ohsObj)"> {{pageElements.buttonText7}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(hppObj)"> {{pageElements.buttonText8}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(hhlObj)"> {{pageElements.buttonText9}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(sunObj)"> {{pageElements.buttonText10}} </button>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], Employee);
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Employee_InfoPages_eapinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ResPages_resinfo__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Import for Translation Service



var EmployeeFam = (function () {
    function EmployeeFam(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.eapinfo = __WEBPACK_IMPORTED_MODULE_5__Employee_InfoPages_eapinfo__["a" /* EAPInfo */];
        this.resinfo = __WEBPACK_IMPORTED_MODULE_6__ResPages_resinfo__["a" /* ResInfo */];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
        this.oneObj = { empUrl: "http://www.crisisline.ca/",
            empEmail: "tel:+18669960991",
            empTitle: "Contact Crisisline"
        };
        this.twoObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Contact EAP"
        };
        this.threeObj = { empUrl: "https://cmha.ca/",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "CAN Mental Health Association"
        };
        this.fourObj = { empUrl: "https://www.canada.ca/en/public-health/services/mental-health-services.html",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Mental Health Service"
        };
        this.fiveObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Road to Mental Readiness"
        };
    }
    EmployeeFam.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__["a" /* Login */]);
            }
            _this.userID = value;
        });
    };
    EmployeeFam.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("employeeFamily.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    EmployeeFam = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employeeFamily',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n\n\n    <h3 class="title">{{pageElements.resPageText}}</h3>\n\n\n\n    <button ion-button block (click)="JumpToLink(oneObj)"> {{pageElements.buttonText1}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(twoObj)"> {{pageElements.buttonText2}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(threeObj)"> {{pageElements.buttonText3}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(fourObj)"> {{pageElements.buttonText4}} </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(fiveObj)"> {{pageElements.buttonText5}} </button>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], EmployeeFam);
    return EmployeeFam;
}());

//# sourceMappingURL=employeeFamily.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Public; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Component Imports



// Import for Translation Service



var Public = (function () {
    function Public(navCtrl, navParams, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translationService = translationService;
        this.eapinfo = __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__["a" /* EAPInfo */];
        this.resinfo = __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        this.authenticate();
        this.configuration();
        this.oneObj = { empUrl: "http://www.crisisline.ca/",
            empEmail: "tel:+18669960991",
            empTitle: "Contact Crisisline"
        };
        this.twoObj = { empUrl: "http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "Contact EAP"
        };
        this.threeObj = { empUrl: "https://cmha.ca/",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "CAN Mental Health Association"
        };
        this.fourObj = { empUrl: "https://www.canada.ca/en/public-health/services/mental-health-services.html",
            empEmail: "mailto:tim.jodoin@gmail.com",
            empTitle: "HC Mental Health Services"
        };
        this.fourObj = { empUrl: "http://www.camh.ca/en/hospital/Pages/home.aspx",
            empEmail: "",
            empTitle: "Centre for Addiction and Mental Health"
        };
    }
    Public.prototype.authenticate = function () {
        var _this = this;
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //                this.navCtrl.setRoot(Login);
            }
            _this.userID = value;
        });
    };
    Public.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("public.html", value);
                _this.pageElementsLoaded = true;
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    //opens resource link with details associated to the selection from the UI.
    Public.prototype.JumpToLink = function (empObj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */], { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle });
        //        this.navCtrl.push( ResInfo, { eapObj } )
    };
    Public = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Public\public.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    <ion-navbar>\n\n        <button ion-button menuToggle >\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<!-- Loading Div --> \n\n<div *ngIf="!pageElementsLoaded">\n\n	<ion-spinner></ion-spinner>\n\n</div>\n\n\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n             \n\n    <h3 class="title">{{pageElements.resPageText}}</h3>\n\n\n\n    <button ion-button block (click)="JumpToLink(oneObj)"> {{pageElements.buttonText1}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(twoObj)"> {{pageElements.buttonText2}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(threeObj)"> {{pageElements.buttonText3}} </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(fourObj)"> {{pageElements.buttonText4}} </button>\n\n\n\n</ion-content>    \n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Public\public.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], Public);
    return Public;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_Login_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// Local Storage Imports

 //services for SQLite FEB 2018
// Import for Translation Service

// ------------------------- Page Specific Imports ------------------------- //
// Accessible DOM Imports

// Alert Imports

// Page Imports

// JS Imports


var Dashboard = (function () {
    function Dashboard(navCtrl, sqlite, alertCtrl, storage, translationService) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.translationService = translationService;
        // ------------------------- Mandatory variables for all pages ------------------------- 
        // Stores our DB results for scores
        this.userRecords = [];
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        // Mood = 0, sleep = 1, stress = 2, diet = 3 
        this.graphColours = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
        this.authenticate();
        this.configuration();
    }
    Dashboard.prototype.authenticate = function () {
        var _this = this;
        // Grabs login flag, if null, redirect to login page
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_Login_login_login__["a" /* Login */]);
            }
            _this.userID = value;
        });
    };
    Dashboard.prototype.configuration = function () {
        var _this = this;
        // Fetch the content from our language translation service
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("analyticDashboard.html", value);
                _this.pageElementsLoaded = true;
            }
            else {
                // Handle null language flag
            }
            // Initialize our DB
            _this.initDB();
        });
    };
    // Shows alert based on the title, subtitle, and button text supplied
    Dashboard.prototype.showAlert = function (titleText, subtitleText, buttonText) {
        console.log(this.navCtrl);
        var alert = this.alertCtrl.create({
            title: titleText,
            subTitle: subtitleText,
            buttons: [buttonText]
        });
        alert.present(alert);
    };
    // Checks if input is valid, returns true if input is valid, shows alerts and returns false if not
    Dashboard.prototype.validateInput = function () {
        if (!this.moodCheckbox && !this.stressCheckbox && !this.dietCheckbox && !this.sleepCheckbox) {
            this.showAlert("Whoops!", "You don't have a score checkbox checked!", "Right on!");
            return false;
        }
        if (this.fromDate == null || this.toDate == null) {
            this.showAlert("Whoops!", "You haven't selected both a from-date and to-date", "For sure!");
            return false;
        }
        return true;
    };
    // Generates a chart based off data from view
    Dashboard.prototype.generate = function (fromDate, toDate) {
        var _this = this;
        // Checks if the input is valid, if not, don't run
        if (this.validateInput()) {
            var selectStatement = "";
            var whereClause = "";
            var query = "";
            // ----------- Building SQL Query ----------- //
            // We need to fill variables depending on whether they were selected or not (We avoid string building doing it this way)
            var moodScore = "";
            var stressScore = "";
            var dietScore = "";
            var sleepScore = "";
            if (this.moodCheckbox) {
                moodScore = "moodScore, ";
            }
            if (this.stressCheckbox) {
                stressScore = "stressScore, ";
            }
            if (this.dietCheckbox) {
                dietScore = "dietScore, ";
            }
            if (this.sleepCheckbox) {
                sleepScore = "sleepScore, ";
            }
            // ----------- Building/Formatting Dates ----------- //
            // Formatting dates
            fromDate = __WEBPACK_IMPORTED_MODULE_6_moment__(fromDate).format('YYYY-MM-DD HH:mm:ss');
            toDate = __WEBPACK_IMPORTED_MODULE_6_moment__(toDate).format('YYYY-MM-DD HH:mm:ss');
            // Set the times to their min or max hour accordingly
            var finalFromDate = new String(fromDate.slice(0, 10) + ' 00' + fromDate.slice(13, fromDate.length));
            var finalToDate = new String(toDate.slice(0, 10) + ' 23' + toDate.slice(13, toDate.length));
            // Turn them into a string object so we can use them in our queries
            fromDate = finalFromDate.toString();
            toDate = finalToDate.toString();
            // ----------- Combining above data to form queries ----------- //
            // Generating the select and where clause based off data above
            selectStatement = moodScore + stressScore + dietScore + sleepScore + "date";
            whereClause = "WHERE date BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') AND userID = '" + this.userID + "' ORDER BY date DESC";
            query = "SELECT " + selectStatement + " FROM wellness " + whereClause;
            // ----------- Query DB and build graph objects ----------- //
            this.openDatabase.executeSql(query, {}).then(function (res) {
                // Our Graph Data
                var graphDataSets = [];
                var labelsArray = [];
                // Stores all data in their respective arrays
                var moodScoreArray = [];
                var stressScoreArray = [];
                var dietScoreArray = [];
                var sleepScoreArray = [];
                console.log(res);
                for (var i = 0; i < res.rows.length; i++) {
                    labelsArray[i] = res.rows.item(i).date;
                    if (_this.moodCheckbox) {
                        moodScoreArray[i] = res.rows.item(i).moodScore;
                    }
                    if (_this.stressCheckbox) {
                        stressScoreArray[i] = res.rows.item(i).stressScore;
                    }
                    if (_this.dietCheckbox) {
                        dietScoreArray[i] = res.rows.item(i).dietScore;
                    }
                    if (_this.sleepCheckbox) {
                        sleepScoreArray[i] = res.rows.item(i).sleepScore;
                    }
                }
                // If moodCheckbox was selected, build our mood line
                if (_this.moodCheckbox) {
                    var moodCheckboxIndex = graphDataSets.length;
                    graphDataSets[graphDataSets.length] = {
                        data: moodScoreArray,
                        label: "Mood",
                        borderColor: _this.graphColours[0],
                        fill: false
                    };
                }
                // If stressCheckbox was selected, build our stress line
                if (_this.stressCheckbox) {
                    var stressCheckboxIndex = graphDataSets.length;
                    graphDataSets[graphDataSets.length] = {
                        data: stressScoreArray,
                        label: "Stress",
                        borderColor: _this.graphColours[2],
                        fill: false
                    };
                }
                // If dietCheckbox was selected, build our diet line
                if (_this.dietCheckbox) {
                    var dietCheckboxIndex = graphDataSets.length;
                    graphDataSets[graphDataSets.length] = {
                        data: dietScoreArray,
                        label: "Diet",
                        borderColor: _this.graphColours[3],
                        fill: false
                    };
                }
                // If sleepCheckbox was selected, build our sleep quality line
                if (_this.sleepCheckbox) {
                    var sleepCheckboxIndex = graphDataSets.length;
                    graphDataSets[graphDataSets.length] = {
                        data: sleepScoreArray,
                        label: "Sleep",
                        borderColor: _this.graphColours[1],
                        fill: false
                    };
                }
                var datasetsObject = [];
                if (_this.moodCheckbox) {
                    datasetsObject[datasetsObject.length] = { label: graphDataSets[moodCheckboxIndex].label, data: graphDataSets[moodCheckboxIndex].data, borderColor: graphDataSets[moodCheckboxIndex].borderColor, fill: graphDataSets[moodCheckboxIndex].fill };
                }
                if (_this.stressCheckbox) {
                    datasetsObject[datasetsObject.length] = { label: graphDataSets[stressCheckboxIndex].label, data: graphDataSets[stressCheckboxIndex].data, borderColor: graphDataSets[stressCheckboxIndex].borderColor, fill: graphDataSets[stressCheckboxIndex].fill };
                }
                if (_this.dietCheckbox) {
                    datasetsObject[datasetsObject.length] = { label: graphDataSets[dietCheckboxIndex].label, data: graphDataSets[dietCheckboxIndex].data, borderColor: graphDataSets[dietCheckboxIndex].borderColor, fill: graphDataSets[dietCheckboxIndex].fill };
                }
                if (_this.sleepCheckbox) {
                    datasetsObject[datasetsObject.length] = { label: graphDataSets[sleepCheckboxIndex].label, data: graphDataSets[sleepCheckboxIndex].data, borderColor: graphDataSets[sleepCheckboxIndex].borderColor, fill: graphDataSets[sleepCheckboxIndex].fill };
                }
                console.log(datasetsObject);
                // Fetch our 2D context for our graph, this is required when creating the graph
                _this.context = _this.pageElement.nativeElement.getContext('2d');
                // Generate Chart
                var mainChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__(_this.context, {
                    type: 'line',
                    data: {
                        labels: labelsArray,
                        datasets: datasetsObject
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                    type: 'time',
                                    distribution: 'series',
                                    time: {
                                        displayFormats: {
                                            quarter: 'MMM D'
                                        }
                                    }
                                }],
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                        },
                        responsive: true
                    }
                });
            }).catch(function (e) { return console.log(e); });
        }
    };
    // Initializes our DB, and fetchs all user records storing them in userRecords[]
    Dashboard.prototype.initDB = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            _this.openDatabase.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            _this.openDatabase.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote });
                }
                console.log("User Records:");
                console.log(_this.userRecords);
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Dashboard.prototype, "pageElement", void 0);
    Dashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analyticDashboard',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Dashboard\analyticDashboard.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<ion-title>{{pageElements.dashboardText}}</ion-title>\n\n		\n\n		<ion-buttons end>\n\n            <button ion-button icon-only (click)="addData()">\n\n                <ion-icon name="add-circle"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="has-header" style="height: 100%">\n\n<ion-grid *ngIf="pageElementsLoaded">\n\n	<ion-row>\n\n		<ion-col col-md-5>\n\n			<ion-item>\n\n				<ion-label>{{pageElements.fromDateText}}</ion-label>\n\n				<ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="fromDate"></ion-datetime>\n\n			</ion-item>\n\n		</ion-col>\n\n		<ion-col col-md-5 offset-md-2>\n\n			<ion-item>\n\n				<ion-label>{{pageElements.toDateText}}</ion-label>\n\n				<ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="toDate"></ion-datetime>\n\n			</ion-item>\n\n		</ion-col>\n\n	</ion-row>	\n\n\n\n	<ion-row>\n\n		<ion-col>\n\n			<ion-item>\n\n				<ion-label style="font-color: #FF9800">{{pageElements.moodText}}</ion-label>\n\n				<ion-checkbox color="dark" checked="false" [(ngModel)]="moodCheckbox"></ion-checkbox>\n\n			</ion-item>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-item>\n\n				<ion-label style="font-color: #4CAF50">{{pageElements.dietText}}</ion-label>\n\n				<ion-checkbox color="dark" checked="false" [(ngModel)]="dietCheckbox"></ion-checkbox>\n\n			</ion-item>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-item>\n\n				<ion-label style="font-color: #D32F2F">{{pageElements.stressText}}</ion-label>\n\n				<ion-checkbox color="dark" checked="false" [(ngModel)]="stressCheckbox"></ion-checkbox>\n\n			</ion-item>\n\n		</ion-col>\n\n		<ion-col>\n\n			<ion-item>\n\n				<ion-label style="font-color: #01579B">{{pageElements.sleepText}}</ion-label>\n\n				<ion-checkbox color="dark" checked="false" [(ngModel)]="sleepCheckbox"></ion-checkbox>\n\n			</ion-item>\n\n		</ion-col>\n\n	</ion-row>\n\n	\n\n	<ion-row>\n\n		<ion-col>\n\n			<div layout="row">\n\n				<div id="chartDiv" #chartDiv>\n\n					<canvas id="mainChart" #mainChart width="100%" height="100%"></canvas>\n\n				</div>	\n\n			</div>\n\n		</ion-col>\n\n	</ion-row>\n\n	\n\n	<ion-row>\n\n		<ion-col>\n\n			<button ion-button (click)="generate(fromDate, toDate)">{{pageElements.generateText}}</button>\n\n		</ion-col>\n\n	</ion-row>\n\n</ion-grid>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Dashboard\analyticDashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], Dashboard);
    return Dashboard;
}());

//# sourceMappingURL=analyticDashboard.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Updates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Updates = (function () {
    function Updates(navCtrl, sqlite, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.storage = storage;
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__["a" /* Login */]);
            }
        });
    }
    Updates = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updates',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\updates\updates.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu" persistent="true"></ion-icon>\n		</button>\n		<ion-title>\n			Updates\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col class="updateHeader">\n				Update 1.0.0\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="updateDate">\n				March 14, 2018\n			</ion-col>\n		</ion-row>\n		<hr class="updateHR">\n		<ion-row>\n			<ion-col class="updateContent">\n				Welcome to the soft launch!\n			</ion-col>\n		</ion-row>\n		\n\n		\n		<!-- ////// -->\n	</ion-grid>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<button ion-button block>Aidez moi / Help Me</button>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\updates\updates.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Updates);
    return Updates;
}());

//# sourceMappingURL=updates.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_Login_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_languageSelection_languageSelection__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_Login_newUser_newUser__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_Login_recoverUser_recoverUser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_Login_signout_signout__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_updates_updates__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_Resources_ResPages_resinfo__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_data_add_data__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Tools_assessment_assessment__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_toast__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





















//import { Tools } from '../pages/tools/tools';







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_Login_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_Login_signout_signout__["a" /* SignOut */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_Login_newUser_newUser__["a" /* NewUser */],
                __WEBPACK_IMPORTED_MODULE_8__pages_languageSelection_languageSelection__["a" /* LanguageSelection */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_Login_recoverUser_recoverUser__["a" /* RecoverUser */],
                __WEBPACK_IMPORTED_MODULE_11__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_21__pages_updates_updates__["a" /* Updates */],
                //    Tools,
                __WEBPACK_IMPORTED_MODULE_24__pages_Tools_assessment_assessment__["a" /* Assessment */],
                __WEBPACK_IMPORTED_MODULE_12__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Resources_ResPages_resinfo__["a" /* ResInfo */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_data_add_data__["a" /* AddData */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //BrowserAnimationsModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_Login_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_20__pages_home_Login_signout_signout__["a" /* SignOut */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_Login_newUser_newUser__["a" /* NewUser */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_Login_recoverUser_recoverUser__["a" /* RecoverUser */],
                __WEBPACK_IMPORTED_MODULE_8__pages_languageSelection_languageSelection__["a" /* LanguageSelection */],
                __WEBPACK_IMPORTED_MODULE_11__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_12__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_21__pages_updates_updates__["a" /* Updates */],
                //		Tools,
                __WEBPACK_IMPORTED_MODULE_24__pages_Tools_assessment_assessment__["a" /* Assessment */],
                __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_22__pages_Resources_ResPages_resinfo__["a" /* ResInfo */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_data_add_data__["a" /* AddData */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_languageSelection_languageSelection__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_Login_signout_signout__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Resources_resources__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Dashboard_analyticDashboard__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_updates_updates__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Tools_assessment_assessment__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//import { Tools } from '../pages/tools/tools';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        //  rootPage: any = LanguageSelection;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Daily Entry', component: __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */] },
            { title: 'Checkin Log', component: __WEBPACK_IMPORTED_MODULE_8__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
            { title: 'Analytic Dashboard', component: __WEBPACK_IMPORTED_MODULE_10__pages_Dashboard_analyticDashboard__["a" /* Dashboard */] },
            { title: 'Resources', component: __WEBPACK_IMPORTED_MODULE_9__pages_Resources_resources__["a" /* Resources */] },
            { title: 'Self Assessment', component: __WEBPACK_IMPORTED_MODULE_12__pages_Tools_assessment_assessment__["a" /* Assessment */] },
            { title: 'Update Log', component: __WEBPACK_IMPORTED_MODULE_11__pages_updates_updates__["a" /* Updates */] },
            { title: 'FR/EN', component: __WEBPACK_IMPORTED_MODULE_5__pages_languageSelection_languageSelection__["a" /* LanguageSelection */] },
            { title: 'Sign out', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_Login_signout_signout__["a" /* SignOut */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 216,
	"./af.js": 216,
	"./ar": 217,
	"./ar-dz": 218,
	"./ar-dz.js": 218,
	"./ar-kw": 219,
	"./ar-kw.js": 219,
	"./ar-ly": 220,
	"./ar-ly.js": 220,
	"./ar-ma": 221,
	"./ar-ma.js": 221,
	"./ar-sa": 222,
	"./ar-sa.js": 222,
	"./ar-tn": 223,
	"./ar-tn.js": 223,
	"./ar.js": 217,
	"./az": 224,
	"./az.js": 224,
	"./be": 225,
	"./be.js": 225,
	"./bg": 226,
	"./bg.js": 226,
	"./bm": 227,
	"./bm.js": 227,
	"./bn": 228,
	"./bn.js": 228,
	"./bo": 229,
	"./bo.js": 229,
	"./br": 230,
	"./br.js": 230,
	"./bs": 231,
	"./bs.js": 231,
	"./ca": 232,
	"./ca.js": 232,
	"./cs": 233,
	"./cs.js": 233,
	"./cv": 234,
	"./cv.js": 234,
	"./cy": 235,
	"./cy.js": 235,
	"./da": 236,
	"./da.js": 236,
	"./de": 237,
	"./de-at": 238,
	"./de-at.js": 238,
	"./de-ch": 239,
	"./de-ch.js": 239,
	"./de.js": 237,
	"./dv": 240,
	"./dv.js": 240,
	"./el": 241,
	"./el.js": 241,
	"./en-au": 242,
	"./en-au.js": 242,
	"./en-ca": 243,
	"./en-ca.js": 243,
	"./en-gb": 244,
	"./en-gb.js": 244,
	"./en-ie": 245,
	"./en-ie.js": 245,
	"./en-nz": 246,
	"./en-nz.js": 246,
	"./eo": 247,
	"./eo.js": 247,
	"./es": 248,
	"./es-do": 249,
	"./es-do.js": 249,
	"./es-us": 250,
	"./es-us.js": 250,
	"./es.js": 248,
	"./et": 251,
	"./et.js": 251,
	"./eu": 252,
	"./eu.js": 252,
	"./fa": 253,
	"./fa.js": 253,
	"./fi": 254,
	"./fi.js": 254,
	"./fo": 255,
	"./fo.js": 255,
	"./fr": 256,
	"./fr-ca": 257,
	"./fr-ca.js": 257,
	"./fr-ch": 258,
	"./fr-ch.js": 258,
	"./fr.js": 256,
	"./fy": 259,
	"./fy.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-latn": 262,
	"./gom-latn.js": 262,
	"./gu": 263,
	"./gu.js": 263,
	"./he": 264,
	"./he.js": 264,
	"./hi": 265,
	"./hi.js": 265,
	"./hr": 266,
	"./hr.js": 266,
	"./hu": 267,
	"./hu.js": 267,
	"./hy-am": 268,
	"./hy-am.js": 268,
	"./id": 269,
	"./id.js": 269,
	"./is": 270,
	"./is.js": 270,
	"./it": 271,
	"./it.js": 271,
	"./ja": 272,
	"./ja.js": 272,
	"./jv": 273,
	"./jv.js": 273,
	"./ka": 274,
	"./ka.js": 274,
	"./kk": 275,
	"./kk.js": 275,
	"./km": 276,
	"./km.js": 276,
	"./kn": 277,
	"./kn.js": 277,
	"./ko": 278,
	"./ko.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mr": 288,
	"./mr.js": 288,
	"./ms": 289,
	"./ms-my": 290,
	"./ms-my.js": 290,
	"./ms.js": 289,
	"./mt": 291,
	"./mt.js": 291,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 428;

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(116);
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
var AddData = (function () {
    function AddData(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { date: "", moodScore: 0, dietScore: 0, sleepScore: 0, stressScore: 0, entryNote: "" };
    }
    AddData.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?)', [_this.data.date, _this.data.moodScore, _this.data.dietScore, _this.data.sleepScore, _this.data.stressScore, _this.data.entryNote])
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
    AddData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-data',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\add-data\add-data.html"*/'<!DOCTYPE html>\n<!--\nTo change this license header, choose License Headers in Project Properties.\nTo change this template file, choose Tools | Templates\nand open the template in the editor.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Daily Entry</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div text-center>\n        <img src="../../assets/imgs/feelings/face10.png" class="feelingImg">         \n    </div>\n    \n  <form (ngSubmit)="saveData()">\n    <ion-item>\n      <ion-label>Date</ion-label>\n      <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-range min="0" max="10" [(ngModel)]="data.moodScore" name="moodScore" color="secondary" pin="true" class="slider">\n            <ion-label range-left>Mood</ion-label>\n        </ion-range>\n    </ion-item>      \n\n    <ion-item>\n        <ion-range min="0" max="10" [(ngModel)]="data.dietScore" name="dietScore" color="secondary" pin="true" class="slider">\n            <ion-label range-left>Diet</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="0" max="10" [(ngModel)]="data.sleepScore" name="sleepScore" color="secondary" pin="true" class="slider">\n            <ion-label range-left>Sleep</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="0" max="10" [(ngModel)]="data.stressScore" name="stressScore" color="secondary" pin="true" class="slider">\n            <ion-label range-left>Mood</ion-label>\n        </ion-range>\n    </ion-item>       \n      \n    <ion-item>\n      <ion-label>Description</ion-label>\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n    </ion-item>\n      \n      \n    <button ion-button type="submit" block>Save Data</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\add-data\add-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], AddData);
    return AddData;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_Login_login_login__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CheckinLog_checkinLog__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports


// SQLite3 Imports


// Local Storage Imports

// Import for Translation Service

// ------------------------- Page Specific Imports ------------------------- //
// Page Imports


// Moment (Date framework) Import

//@IonicPage()
var DailyEntry = (function () {
    function DailyEntry(navCtrl, navParams, sqlite, toast, storage, translationService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.storage = storage;
        this.translationService = translationService;
        // Controls whether our view is loaded based off of if pageElements has been loaded
        this.pageElementsLoaded = false;
        // ------------------------- Page Specific Variables ------------------------- //
        this.data = { date: "", moodScore: 5, dietScore: 5, sleepScore: 5, stressScore: 5, entryNote: "" };
        this.authenticate();
        this.configuration();
    }
    DailyEntry.prototype.configuration = function () {
        var _this = this;
        var languageFlag = this.storage.get("languageFlag").then(function (value) {
            if (value != null) {
                _this.pageElements = _this.translationService.load("dailyEntry.html", value);
                _this.pageElementsLoaded = true;
            }
            else {
                // Handle null language flag
            }
        });
    };
    DailyEntry.prototype.authenticate = function () {
        var _this = this;
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_Login_login_login__["a" /* Login */]);
            }
            _this.userID = value;
        });
    };
    DailyEntry.prototype.updateScores = function (selectedValue) {
        console.log("HIT");
    };
    DailyEntry.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb6.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?)', [_this.userID, __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD HH:mm:ss'), _this.data.moodScore, _this.data.dietScore, _this.data.sleepScore, _this.data.stressScore, _this.data.entryNote])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data saved', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__CheckinLog_checkinLog__["a" /* CheckinLog */]);
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
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{pageElements.dailyEntryText}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n	<ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n    <div text-center>\n        <img src="../../../assets/imgs/feelings/face{{data.moodScore}}.png" class="feelingImg">         \n    </div>\n    \n  <form (ngSubmit)="saveData()">\n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.moodScore" name="moodScore" color="moodColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.moodText}}</ion-label>\n        </ion-range>\n    </ion-item>      \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.dietScore" name="dietScore" color="dietColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.dietText}}</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.sleepScore" name="sleepScore" color="sleepColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.sleepText}}</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.stressScore" name="stressScore" color="stressColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.stressText}}</ion-label>\n        </ion-range>\n    </ion-item>       \n      \n    <ion-item>\n      <ion-label>{{pageElements.descriptionText}}</ion-label>\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n    </ion-item>\n  \n      \n    <button ion-button type="submit" block>{{pageElements.saveDataText}}</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__["a" /* TranslationService */]])
    ], DailyEntry);
    return DailyEntry;
}());

//# sourceMappingURL=dailyEntry.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResInfo = (function () {
    function ResInfo(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                //                this.navCtrl.setRoot(Login);
            }
        });
        this.resUrl = this.navParams.get("empUrl"); // Load link to content reference
        this.resEmail = this.navParams.get("empEmail"); // Load link to contact refernce 
        this.resTitle = this.navParams.get("empTitle"); // Load link to contact refernce 
    }
    ResInfo_1 = ResInfo;
    ResInfo.prototype.ionViewDidLoad = function () {
        this.loadLinkPage(this.resUrl);
    };
    ResInfo.prototype.loadLinkPage = function (url) {
        //                $('#loadExternalURL').load("https://cors-anywhere.herokuapp.com/"+this.resUrl);
    };
    ResInfo.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ResInfo_1, {
            item: item
        });
    };
    ResInfo = ResInfo_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resinfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\ResPages\resinfo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{resTitle}}</ion-title>\n\n    </ion-navbar>\n\n        <a href="{{resEmail}}" class="buttonLink">\n\n        <button ion-button block>{{resTitle}}</button>\n\n    </a>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n<!--    \n\n    <a href="mailto:{{resEmail}}" class="buttonLink">\n\n        <button ion-button block>{{resTitle}}</button>\n\n    </a>\n\n-->    \n\n    <div id="loadExternalURL" width="100%" height="100%">\n\n<!--        <object type="text/html" data="https://cors-anywhere.herokuapp.com/{{resUrl}}" width="100%" height="100%" style="overflow:auto;border:5px ridge blue">\n\n        </object>\n\n-->\n\n    </div>  \n\n       \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\ResPages\resinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ResInfo);
    return ResInfo;
    var ResInfo_1;
}());

//# sourceMappingURL=resinfo.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map