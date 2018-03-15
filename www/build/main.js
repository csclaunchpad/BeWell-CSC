webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Login_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, sqlite, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.storage = storage;
        this.userRecords = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__Login_login_login__["a" /* Login */]);
            }
        });
    }
    HomePage.prototype.test = function () {
        this.storage.get("userID").then(function (value) {
            console.log(value);
        });
    };
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
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote, amount: res.rows.item(i).amount });
                }
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */]);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true" >\n    <button ion-button menuToggle>\n        <ion-icon name="menu" persistent="true"></ion-icon>\n    </button>\n    <ion-title>\n      Home\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addData()">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n		<ion-row>\n			<ion-col>\n				Placeholder for dashboard\n			</ion-col>\n		</ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DailyEntry_dailyEntry__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CheckinLogInfo_checkinLogInfo__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_Login_login_login__ = __webpack_require__(20);
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
            name: 'ionicdb5.db',
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
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header *ngIf="pageElementsLoaded">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{pageElements.checkinLogText}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addData()">\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n	<ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header" style="margin: 0">\n    <ion-list>\n        <ion-item-sliding *ngFor="let wellness of userRecords; let i=index" (click)="redirectToCheckinLogInfo(wellness.rowid)">\n            <ion-item nopadding>\n                <ion-card>\n                    <ion-row layout-align="center center" flex="60">\n\n                        <ion-col class="moodBackground" layout-align="center center">\n                            <strong>{{pageElements.moodText}}: </strong>{{wellness.moodScore}}\n                        </ion-col>\n\n                        <ion-col class="dietBackground" layout-align="center center">\n                            <strong>{{pageElements.dietText}}: </strong>{{wellness.dietScore}}\n                        </ion-col>                \n\n                        <ion-col class="sleepBackground" layout-align="center center">\n                            <strong>{{pageElements.sleepText}}: </strong>{{wellness.sleepScore}}\n                        </ion-col>                \n\n                        <ion-col class="stressBackground" layout-align="center center">\n                            <strong>{{pageElements.stressText}}: </strong>{{wellness.stressScore}}\n                        </ion-col>\n\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-6>\n                            {{pageElements.wellnessScoreText}}: {{wellness.totalScore}}\n                        </ion-col>\n                        <ion-col col-6>\n                            {{wellness.date}}\n                        </ion-col>\n                    </ion-row>\n                                    \n                </ion-card>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block>Aidez moi! / Help me!</button>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newUser_newUser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recoverUser_recoverUser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(49);
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
            name: 'ionicdb5.db',
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\login\login.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded">\n	<ion-grid>\n		<ion-row>\n			<ion-col text-center>\n				{{pageElements.firstNameText}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<ion-item>\n					<ion-input type="text" placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				{{pageElements.pinText}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<ion-item>\n					<ion-input type="text" placeholder="{{pageElements.pinText}}" [(ngModel)]="pin"></ion-input>\n				</ion-item>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n			<ion-col text-center>\n				<button ion-button (click)="login()">{{pageElements.loginText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row>\n		\n			<ion-col col-6 text-center>\n				<button ion-button (click)="newUser()">{{pageElements.createUserText}}</button>\n			</ion-col>\n			\n			<ion-col col-6 text-center>\n				<button ion-button (click)="recoverUser()">{{pageElements.forgotPinText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<!--<button ion-button (click)="toggleFade()">Toggle</button>-->\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\login\login.html"*/
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

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(28);
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
            name: 'ionicdb5.db',
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
            selector: 'page-newUser',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\newUser\newUser.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			New User\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n	\n	<ion-grid>\n		<!-- Name already used flag -->	\n		<ion-row *ngIf="firstNameFound">\n			<ion-col>\n				{{pageElements.firstNameFoundText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Name cannot be blank flag -->\n		<ion-row *ngIf="invalidName">\n			<ion-col>\n				{{pageElements.invalidNameText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- First name label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.firstNameText}}</ion-label>\n				<ion-input placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Invalid pin length flag -->\n		<ion-row *ngIf="invalidPinLength">\n			<ion-col>\n				<!-- {{pageElements.invalidPinLengthText}} -->\n			</ion-col>\n		</ion-row>\n		\n		<!-- Pin label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.pinText}}</ion-label>\n				<ion-input placeholder="{{pageElements.pinText}}" [(ngModel)]="pin"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Blank security question flag -->\n		<ion-row *ngIf="invalidSecurityQuestion">\n			<ion-col>\n				{{pageElements.invalidSecurityQuestionText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Security question label and input field -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.securityQuestionText}}</ion-label> \n				<ion-input placeholder="{{pageElements.securityQuestionText}}" [(ngModel)]="securityQuestion"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Blank security answer flag -->\n		<ion-row *ngIf="invalidSecurityAnswer">\n			<ion-col>\n				{{pageElements.invalidSecurityAnswerText}}\n			</ion-col>\n		</ion-row>\n		\n		<!-- Security answer label and input flag -->\n		<ion-row>\n			<ion-col>\n				<ion-label color="primary">{{pageElements.securityAnswerText}}</ion-label>\n				<ion-input placeholder="{{pageElements.securityAnswerText}}" [(ngModel)]="securityAnswer"></ion-input>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Create user button -->\n		<ion-row>\n			<ion-col>\n				<button ion-button (click)="createUser()">{{pageElements.createUserText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\newUser\newUser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */]])
    ], NewUser);
    return NewUser;
}());

//# sourceMappingURL=newUser.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
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
            name: 'ionicdb5.db',
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
            selector: 'page-recoverUser',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\recoverUser\recoverUser.html"*/'<ion-header *ngIf="pageElementsLoaded">\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>\n			{{pageElements.recoverUserText}}\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n	<ion-grid>\n		<!-- Phase 1 -->\n		<ion-row *ngIf="phase1">\n		\n			<!-- Name not found flag -->\n			<ion-col *ngIf="inputNotFound">\n				{{pageElements.cantFindNameText}}\n			</ion-col>\n			\n			<!-- First name label and input field -->\n			<ion-col>\n				<ion-label color="primary">{{pageElements.nameOfAccountText}}</ion-label>\n				<ion-input placeholder="{{pageElements.firstNameText}}" [(ngModel)]="firstName"></ion-input>\n			</ion-col>\n			\n			<!-- Find name button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase1()">{{pageElements.findNameText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Phase 2 -->\n		<ion-row *ngIf="phase2">\n		\n			<!-- Incorrect answer flag -->\n			<ion-col *ngIf="incorrectInput">\n				{{pageElements.wrongAnswerText}}\n			</ion-col>\n			\n			<!-- Security question, security answer label, and input field -->\n			<ion-col>\n				{{securityQuestion}}\n				<ion-label color="primary">{{pageElements.answerToQuestionText}}</ion-label>\n				<ion-input placeholder="{{pageElements.securityAnswerText}}" [(ngModel)]="securityAnswer"></ion-input>\n			</ion-col>\n			\n			<!-- Submit answer button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase2()">{{pageElements.submitAnswerText}}</button>\n			</ion-col>\n		</ion-row>\n		\n		<!-- Phase 3 -->\n		<ion-row *ngIf="phase3">\n		\n			<!-- Invalid pin length flag -->\n			<ion-col *ngIf="invalidPin">\n				{{pageElements.invalidPinText}}\n			</ion-col>\n			\n			<!-- Pin label and input field -->\n			<ion-col>\n				<ion-label color="primary">{{pageElements.enterNewPinText}}</ion-label>\n				<ion-input placeholder="{{pageElements.characterLengthText}}" [(ngModel)]="pin"></ion-input>\n			</ion-col>\n			\n			<!-- Set new pin button -->\n			<ion-col>\n				<button ion-button (click)="submitPhase3()">{{pageElements.setNewPinText}}</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\recoverUser\recoverUser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1__assets_services_translationService__["a" /* TranslationService */]])
    ], RecoverUser);
    return RecoverUser;
}());

//# sourceMappingURL=recoverUser.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLogInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_Login_login_login__ = __webpack_require__(20);
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
            name: 'ionicdb5.db',
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
            selector: 'page-checkinLogInfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/'<ion-header *ngIf="pageElementsLoaded">\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>{{pageElements.checkinLogInfoText}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n	<ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding style="height: 100%" *ngIf="pageElementsLoaded" class="has-header">\n\n    <ion-grid>\n		<ion-row text-center>\n			<ion-col>\n				<img src="../../assets/imgs/feelings/face{{totalScore}}.png" class="feelingImg">\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				{{pageElements.dateText}}: {{userRecords.date}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				{{userRecords.entryNote}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col col-4>\n				{{pageElements.moodText}}: {{userRecords.moodScore}}\n			</ion-col>\n			\n			<ion-col col-4 offset-4>\n				{{pageElements.dietText}}: {{userRecords.dietScore}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col col-4>\n				{{pageElements.sleepText}}: {{userRecords.sleepScore}}\n			</ion-col>\n			\n			<ion-col col-4 offset-4>\n				{{pageElements.stressText}}: {{userRecords.stressScore}}\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button block>{{pageElements.editText}}</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button block>{{pageElements.deleteText}}</button>\n			</ion-col>\n		</ion-row>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <button ion-button block>Aidez moi / Help Me</button>\n    </ion-toolbar>\n</ion-footer>\n\n<!--\n<md-content layout-align="start center" layout="column">\n\n    <img src="imgs/feelings/face{{checkinTotal}}.png" class="feelingImg"/>\n\n    <div layout="row" layout-align="center">\n        <div aria-label="{{pageElements.previousAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasPrev}" ng-click="prevEntry()">\n            <img src="imgs/leftArrow.png" class="arrow">\n        </div>\n        <div aria-label="{{pageElements.nextAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasNext}" ng-click="nextEntry()">\n            <img src="imgs/rightArrow.png" class="arrow">\n        </div>\n    </div>\n\n    <h3>{{pageElements.onText}} {{entry.date | date: \'longDate\'}}, {{pageElements.youWereFeelingText}}</h3>\n\n	<div layout="row"  layout-align="center center">\n		<div layout="column" class="dietBackground" layout-align="center center">\n			<div aria-label="{{pageElements.dietText}}: {{entry.dietScore}}">\n				<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n			</div>\n		</div>\n		<div layout="column" class="moodBackground" layout-align="center center">\n			<div aria-label="{{pageElements.moodText}}: {{entry.moodScore}}" layout-align="center center">\n				<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n			</div>\n		</div>\n		<div layout="row" class="stressBackground" layout-align="center center">\n			<div aria-label="{{pageElements.stressText}}: {{entry.stressScore}}">\n				<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n			</div>\n		</div>\n		<div layout="row" class="sleepBackground" layout-align="center center">\n			<div aria-label="{{pageElements.sleepText}}: {{entry.sleepScore}}">\n				<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n			</div>\n		</div>					\n	</div>\n					\n	\n	<!-- Center doesn\'t work atm -->\n<!--	<div layout="row" flex layout-align="center center">\n		<div flex aria-label="Notes: {{entry.entryNote}}">\n			<p ng-show="notesProvided" ng-bind="entry.entryNote" class="descriptionText"></p>\n			<p ng-show="!notesProvided" class="descriptionText">{{pageElements.noNotesText}}</p>\n		</div>\n	</div>\n</md-content>\n-->\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/
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
                        ResourceTitleText: "Ressources",
                        resPageText: "Choisissez la liste de ressources qui vous concerne",
                        buttonText1: "SCC EMPLOYÉ",
                        buttonText2: "SCC FAMILLE D'EMPLOYÉS",
                        buttonText3: "PUBLIQUE"
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

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOut; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(20);
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
            selector: 'page-signout',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\signout\signout.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n		Sign Out\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\Login\signout\signout.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SignOut);
    return SignOut;
}());

//# sourceMappingURL=signout.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CscContacts_cscContacts__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Employee_employee__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EmployeeFamily_employeeFamily__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Public_public__ = __webpack_require__(336);
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
        this.public = __WEBPACK_IMPORTED_MODULE_7__Public_public__["a" /* Public */];
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
                _this.pageElements = _this.translationService.load("resource.html", value);
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
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\resources.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    \n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n    <ion-title>{{pageElements.resourceTitleText}}</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!-- Loading Div --> \n\n<div *ngIf="!pageElementsLoaded">\n\n	<ion-spinner></ion-spinner>\n\n</div>\n\n\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n\n\n             \n\n    <h3 class="title">{{pageElements.resPageText}}</h3>\n\n    \n\n        <button ion-button block [navPush]="employee">{{pageElements.buttonText1}}</button>\n\n\n\n        <button ion-button block [navPush]="empfamily">{{pageElements.buttonText2}}</button>\n\n    \n\n        <button ion-button block [navPush]="public">{{pageElements.buttonText1}}</button>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\resources.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__assets_services_translationService__["a" /* TranslationService */]])
    ], Resources);
    return Resources;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSCContacts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], CSCContacts);
    return CSCContacts;
}());

//# sourceMappingURL=cscContacts.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__ = __webpack_require__(426);
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
    function Employee(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.eapinfo = __WEBPACK_IMPORTED_MODULE_4__Employee_InfoPages_eapinfo__["a" /* EAPInfo */];
        this.resinfo = __WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */];
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__["a" /* Login */]);
            }
        });
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
    //opens resource link with details associated to the selection from the UI.
    Employee.prototype.JumpToLink = function (empObj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ResPages_resinfo__["a" /* ResInfo */], { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle });
        //        this.navCtrl.push( ResInfo, { eapObj } )
    };
    Employee = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\employee.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Employee</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <button ion-button block (click)="JumpToLink(clObj)"> Crisis Hotline </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(eapObj)"> Employee Assistance Program </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(cmhaObj)"> CAN Mental Health Association </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(cismObj)"> Critical Incident Stress Management </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(rmrObj)"> Road to Mental Readiness </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(rwpObj)"> Return to Work Program </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(ohsObj)"> Occupational Health and Safety </button>\n\n    \n\n    <button ion-button block (click)="JumpToLink(hppObj)"> Harassment Prevention Program </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(hhlObj)"> Harassment Hot line </button>\n\n\n\n    <button ion-button block (click)="JumpToLink(sunObj)"> Sunlife </button>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<!--\n\n\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n    <a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], Employee);
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeFam; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], EmployeeFam);
    return EmployeeFam;
}());

//# sourceMappingURL=employeeFamily.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Public; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Public);
    return Public;
    var Public_1;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_Login_login_login__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular/Ionic
//  Imports



// JS Imports


// SQLite3 Imports
 //services for SQLite FEB 2018
// Import for Translation Service


var Dashboard = (function () {
    function Dashboard(navCtrl, storage, sqlite, translationService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.sqlite = sqlite;
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
        // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_Login_login_login__["a" /* Login */]);
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
                console.log(_this.pageElements);
            }
            else {
                console.log("No language flag set");
            }
        });
    };
    // Triggers after view inits
    Dashboard.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            _this.openDatabase = db;
            db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecords = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecords.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, moodScore: res.rows.item(i).moodScore, dietScore: res.rows.item(i).dietScore, sleepScore: res.rows.item(i).sleepScore, stressScore: res.rows.item(i).stressScore, entryNote: res.rows.item(i).entryNote, amount: res.rows.item(i).amount });
                }
                console.log("User Records:");
                console.log(_this.userRecords);
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
        // Fetch our 2D context for our graph, this is required when creating the graph
        this.context = this.pageElement.nativeElement.getContext('2d');
        // Labels and data within the graph
        var _data = {
            labels: ["Feb 8", "Feb 9", "Feb 10", "Feb 11"],
            datasets: [{
                    label: "Test Chart",
                    data: [5, 3, 10, 8],
                    borderColor: "rgba(255, 99, 132, 0.2)",
                    fill: false
                }]
        };
        // Options for chart
        var _options = {
            scales: {
                xAxes: [{
                        type: "time",
                        time: {
                            displayFormats: {
                                quarter: "MMM D"
                            }
                        },
                        display: true
                    }],
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            }
        };
        /* Generate Chart
        /
        /	Type: The kind of chart we want (bar, line, pie, etc)
        /	Data: Our data variable above that contains our labels and our input data
        /	Options: Our options variable above
        /
        */
        this.mainChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__(this.context, {
            type: "line",
            data: _data,
            options: _options
        });
    };
    Dashboard.prototype.generate = function (fromDate, toDate) {
        var _this = this;
        console.log("DB:");
        console.log(this.openDatabase);
        console.log(fromDate);
        console.log(toDate);
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
        fromDate = __WEBPACK_IMPORTED_MODULE_2_moment__(fromDate).format('YYYY-MM-DD HH:mm:ss');
        toDate = __WEBPACK_IMPORTED_MODULE_2_moment__(toDate).format('YYYY-MM-DD HH:mm:ss');
        // Set the times to their min or max hour accordingly
        var finalFromDate = new String(fromDate.slice(0, 10) + ' 00' + fromDate.slice(13, fromDate.length));
        var finalToDate = new String(toDate.slice(0, 10) + ' 23' + toDate.slice(13, toDate.length));
        // Turn them into a string object so we can use them in our queries
        fromDate = finalFromDate.toString();
        toDate = finalToDate.toString();
        // ----------- Combining above data to form queries ----------- //
        // Generating the select and where clause based off data above
        selectStatement = moodScore + stressScore + dietScore + sleepScore + "date";
        whereClause = "WHERE date BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') ORDER BY date DESC";
        query = "SELECT " + selectStatement + " FROM wellness " + whereClause;
        console.log(query);
        // ----------- Query DB and build graph objects ----------- //
        this.openDatabase.executeSql(query, {})
            .then(function (res) {
            // Our Graph Data
            var graphDataSets = [];
            var labelsArray = [];
            var moodScoreArray = [];
            var stressScoreArray = [];
            var dietScoreArray = [];
            var sleepScoreArray = [];
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
            console.log(_this.pageElement);
            //this.pageElement.nativeElement.outerHTML = '<canvas #mainChart width="100%" height="100%"></canvas>'; 
            //this.pageElement.nativeElement.parentElement.innerHTML = '<canvas #mainChart width="100%" height="100%"></canvas>';
            // Fetch our 2D context for our graph, this is required when creating the graph
            _this.context = _this.pageElement.nativeElement.getContext('2d');
            // Generate Chart
            var mainChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__(_this.context, {
                type: 'line',
                data: {
                    labels: labelsArray,
                    datasets: datasetsObject
                },
                options: {
                    scales: {
                        xAxes: [{
                                type: 'time',
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
                    }
                }
            });
        }).catch(function (e) { return console.log(e); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mainChart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], Dashboard.prototype, "pageElement", void 0);
    Dashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analyticDashboard',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Dashboard\analyticDashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{pageElements.dashboardText}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-grid>\n\n	\n\n	<ion-row>\n\n            <ion-col col-md-5>\n\n		<ion-item>\n\n                    <ion-label>{{pageElements.fromDateText}}</ion-label>\n\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="fromDate"></ion-datetime>\n\n		</ion-item>\n\n            </ion-col>\n\n            <ion-col col-md-5 offset-md-2>\n\n                <ion-item>\n\n                    <ion-label>{{pageElements.toDateText}}</ion-label>\n\n                    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="toDate"></ion-datetime>\n\n		</ion-item>\n\n            </ion-col>\n\n	</ion-row>	\n\n	\n\n	<ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>{{pageElements.moodText}}</ion-label>\n\n                    <ion-checkbox color="dark" checked="false" [(ngModel)]="moodCheckbox"></ion-checkbox>\n\n		</ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>{{pageElements.moodText}}</ion-label>\n\n                    <ion-checkbox color="dark" checked="false" [(ngModel)]="dietCheckbox"></ion-checkbox>\n\n		</ion-item>\n\n            </ion-col>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>{{pageElements.moodText}}</ion-label>\n\n                    <ion-checkbox color="dark" checked="false" [(ngModel)]="stressCheckbox"></ion-checkbox>\n\n		</ion-item>\n\n            </ion-col>\n\n		<ion-col>\n\n                    <ion-item>\n\n                        <ion-label>{{pageElements.moodText}}</ion-label>\n\n			<ion-checkbox color="dark" checked="false" [(ngModel)]="sleepCheckbox"></ion-checkbox>\n\n                    </ion-item>\n\n		</ion-col>\n\n	</ion-row>\n\n		\n\n	<ion-row class="border">\n\n            <ion-col>\n\n                <div layout="row">\n\n                    <div id="chartDiv" #chartDiv>\n\n                        <canvas id="mainChart" #mainChart width="100%" height="100%"></canvas>\n\n                    </div>	\n\n                </div>\n\n            </ion-col>\n\n	</ion-row>\n\n		\n\n	<ion-row>\n\n            <ion-col>\n\n		<button ion-button (click)="generate(fromDate, toDate)">Generate</button>\n\n            </ion-col>\n\n	</ion-row>\n\n    </ion-grid> \n\n    \n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Dashboard\analyticDashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], Storage, __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__["a" /* TranslationService */]])
    ], Dashboard);
    return Dashboard;
}());

//# sourceMappingURL=analyticDashboard.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Updates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__ = __webpack_require__(20);
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
            selector: 'page-updates',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\updates\updates.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu" persistent="true"></ion-icon>\n		</button>\n		<ion-title>\n			Updates\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row>\n			<ion-col class="updateHeader">\n				Update 1.0.0\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col class="updateDate">\n				March 14, 2018\n			</ion-col>\n		</ion-row>\n		<hr class="updateHR">\n		<ion-row>\n			<ion-col class="updateContent">\n				Welcome to the soft launch!\n			</ion-col>\n		</ion-row>\n		\n\n		\n		<!-- ////// -->\n	</ion-grid>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<button ion-button block>Aidez moi / Help Me</button>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\updates\updates.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Updates);
    return Updates;
}());

//# sourceMappingURL=updates.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_Login_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_languageSelection_languageSelection__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_Login_newUser_newUser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_Login_recoverUser_recoverUser__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_Login_signout_signout__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_updates_updates__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__ = __webpack_require__(210);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__["a" /* Public */]
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
                __WEBPACK_IMPORTED_MODULE_13__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_19__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_17__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_18__pages_Resources_Public_public__["a" /* Public */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__assets_services_translationService__["a" /* TranslationService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_signout_signout__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Dashboard_analyticDashboard__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_updates_updates__ = __webpack_require__(343);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Daily Entry', component: __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */] },
            { title: 'Checkin Log', component: __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
            { title: 'Analytic Dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_Dashboard_analyticDashboard__["a" /* Dashboard */] },
            { title: 'Resources', component: __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */] },
            //			{ title: 'Tools', component: Tools },
            { title: 'Update Log', component: __WEBPACK_IMPORTED_MODULE_10__pages_updates_updates__["a" /* Updates */] },
            { title: 'Sign out', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_Login_signout_signout__["a" /* SignOut */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-nz": 242,
	"./en-nz.js": 242,
	"./eo": 243,
	"./eo.js": 243,
	"./es": 244,
	"./es-do": 245,
	"./es-do.js": 245,
	"./es-us": 246,
	"./es-us.js": 246,
	"./es.js": 244,
	"./et": 247,
	"./et.js": 247,
	"./eu": 248,
	"./eu.js": 248,
	"./fa": 249,
	"./fa.js": 249,
	"./fi": 250,
	"./fi.js": 250,
	"./fo": 251,
	"./fo.js": 251,
	"./fr": 252,
	"./fr-ca": 253,
	"./fr-ca.js": 253,
	"./fr-ch": 254,
	"./fr-ch.js": 254,
	"./fr.js": 252,
	"./fy": 255,
	"./fy.js": 255,
	"./gd": 256,
	"./gd.js": 256,
	"./gl": 257,
	"./gl.js": 257,
	"./gom-latn": 258,
	"./gom-latn.js": 258,
	"./gu": 259,
	"./gu.js": 259,
	"./he": 260,
	"./he.js": 260,
	"./hi": 261,
	"./hi.js": 261,
	"./hr": 262,
	"./hr.js": 262,
	"./hu": 263,
	"./hu.js": 263,
	"./hy-am": 264,
	"./hy-am.js": 264,
	"./id": 265,
	"./id.js": 265,
	"./is": 266,
	"./is.js": 266,
	"./it": 267,
	"./it.js": 267,
	"./ja": 268,
	"./ja.js": 268,
	"./jv": 269,
	"./jv.js": 269,
	"./ka": 270,
	"./ka.js": 270,
	"./kk": 271,
	"./kk.js": 271,
	"./km": 272,
	"./km.js": 272,
	"./kn": 273,
	"./kn.js": 273,
	"./ko": 274,
	"./ko.js": 274,
	"./ky": 275,
	"./ky.js": 275,
	"./lb": 276,
	"./lb.js": 276,
	"./lo": 277,
	"./lo.js": 277,
	"./lt": 278,
	"./lt.js": 278,
	"./lv": 279,
	"./lv.js": 279,
	"./me": 280,
	"./me.js": 280,
	"./mi": 281,
	"./mi.js": 281,
	"./mk": 282,
	"./mk.js": 282,
	"./ml": 283,
	"./ml.js": 283,
	"./mr": 284,
	"./mr.js": 284,
	"./ms": 285,
	"./ms-my": 286,
	"./ms-my.js": 286,
	"./ms.js": 285,
	"./mt": 287,
	"./mt.js": 287,
	"./my": 288,
	"./my.js": 288,
	"./nb": 289,
	"./nb.js": 289,
	"./ne": 290,
	"./ne.js": 290,
	"./nl": 291,
	"./nl-be": 292,
	"./nl-be.js": 292,
	"./nl.js": 291,
	"./nn": 293,
	"./nn.js": 293,
	"./pa-in": 294,
	"./pa-in.js": 294,
	"./pl": 295,
	"./pl.js": 295,
	"./pt": 296,
	"./pt-br": 297,
	"./pt-br.js": 297,
	"./pt.js": 296,
	"./ro": 298,
	"./ro.js": 298,
	"./ru": 299,
	"./ru.js": 299,
	"./sd": 300,
	"./sd.js": 300,
	"./se": 301,
	"./se.js": 301,
	"./si": 302,
	"./si.js": 302,
	"./sk": 303,
	"./sk.js": 303,
	"./sl": 304,
	"./sl.js": 304,
	"./sq": 305,
	"./sq.js": 305,
	"./sr": 306,
	"./sr-cyrl": 307,
	"./sr-cyrl.js": 307,
	"./sr.js": 306,
	"./ss": 308,
	"./ss.js": 308,
	"./sv": 309,
	"./sv.js": 309,
	"./sw": 310,
	"./sw.js": 310,
	"./ta": 311,
	"./ta.js": 311,
	"./te": 312,
	"./te.js": 312,
	"./tet": 313,
	"./tet.js": 313,
	"./th": 314,
	"./th.js": 314,
	"./tl-ph": 315,
	"./tl-ph.js": 315,
	"./tlh": 316,
	"./tlh.js": 316,
	"./tr": 317,
	"./tr.js": 317,
	"./tzl": 318,
	"./tzl.js": 318,
	"./tzm": 319,
	"./tzm-latn": 320,
	"./tzm-latn.js": 320,
	"./tzm.js": 319,
	"./uk": 321,
	"./uk.js": 321,
	"./ur": 322,
	"./ur.js": 322,
	"./uz": 323,
	"./uz-latn": 324,
	"./uz-latn.js": 324,
	"./uz.js": 323,
	"./vi": 325,
	"./vi.js": 325,
	"./x-pseudo": 326,
	"./x-pseudo.js": 326,
	"./yo": 327,
	"./yo.js": 327,
	"./zh-cn": 328,
	"./zh-cn.js": 328,
	"./zh-hk": 329,
	"./zh-hk.js": 329,
	"./zh-tw": 330,
	"./zh-tw.js": 330
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
webpackContext.id = 424;

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EAPInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-eapinfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\InfoPages\eapinfo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <a href="mailto:tim.jodoin@gmail.com" class="buttonLink">\n\n        <button ion-button block>Contact EAP</button>\n\n    </a>\n\n\n\n     <div> \n\n        <object type="text/html" data="http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative" width="50%" height="100%" style="overflow:auto;border:5px ridge blue">\n\n        </object>\n\n    </div>\n\n    \n\n    \n\n \n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n	<a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n	\n\n	\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\Employee\InfoPages\eapinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], EAPInfo);
    return EAPInfo;
    var EAPInfo_1;
}());

//# sourceMappingURL=eapinfo.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.storage.get("userID").then(function (value) {
            if (value == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_Login_login_login__["a" /* Login */]);
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#loadExternalURL').load("https://cors-anywhere.herokuapp.com/" + this.resUrl);
    };
    ResInfo.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ResInfo_1, {
            item: item
        });
    };
    ResInfo = ResInfo_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resinfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\ResPages\resinfo.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{resTitle}}</ion-title>\n\n    </ion-navbar>\n\n        <a href="{{resEmail}}" class="buttonLink">\n\n        <button ion-button block>{{resTitle}}</button>\n\n    </a>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n<!--    \n\n    <a href="mailto:{{resEmail}}" class="buttonLink">\n\n        <button ion-button block>{{resTitle}}</button>\n\n    </a>\n\n-->    \n\n    <div id="loadExternalURL" width="100%" height="100%">\n\n<!--        <object type="text/html" data="https://cors-anywhere.herokuapp.com/{{resUrl}}" width="100%" height="100%" style="overflow:auto;border:5px ridge blue">\n\n        </object>\n\n-->\n\n    </div>  \n\n       \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\Resources\ResPages\resinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ResInfo);
    return ResInfo;
    var ResInfo_1;
}());

//# sourceMappingURL=resinfo.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelection; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_Login_login_login__ = __webpack_require__(20);
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
            selector: 'page-languageSelection',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\languageSelection\languageSelection.html"*/'<ion-header>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid>\n        <ion-row text-center style="margin-top: 15%">\n			<ion-col text-center>\n				<h2 class="md-display-1" aria-label="Mental Health App">Mental Health App</h2>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button (click)="setLanguage(\'en\')" aria-label="English"><strong>English</strong></button>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button href="../../assets/Content/7102606_EN_MHApp_TermsConditions_Draft_v2.0_2018-02-23.pdf" aria-label="Terms and Conditions" >Terms and Conditions</button> \n			</ion-col>\n		</ion-row>\n		<ion-row text-center style="margin-top: 20%">\n			<ion-col>\n				<h2 class="md-display-1" aria-label="App Santé mentale">App Santé Mentale</h2>\n			</ion-col>\n		</ion-row>\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button (click)="setLanguage(\'fr\')" aria-label="Français" ><strong>Français</strong></button>\n			</ion-col>\n		</ion-row>\n		\n		<ion-row text-center>\n			<ion-col>\n				<button ion-button href="../../assets/Content/7102606_EN_MHApp_TermsConditions_Draft_v2.0_2018-02-23.pdf" aria-label="Termes et Conditions" >Termes et Conditions</button>  \n			</ion-col>\n		</ion-row>  \n    </ion-grid>\n</ion-content>\n\n<ion-footer text-center>\n	<span class="" aria-label="Version 1.0"><small>Version 1.0</small></span>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\languageSelection\languageSelection.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LanguageSelection);
    return LanguageSelection;
}());

//# sourceMappingURL=languageSelection.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_Login_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CheckinLog_checkinLog__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_moment__);
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
            name: 'ionicdb5.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?,?)', [_this.userID, __WEBPACK_IMPORTED_MODULE_8_moment__().format('YYYY-MM-DD HH:mm:ss'), _this.data.moodScore, _this.data.dietScore, _this.data.sleepScore, _this.data.stressScore, _this.data.entryNote])
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
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header *ngIf="pageElementsLoaded">\n\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{pageElements.dailyEntryText}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<!-- Loading Div -->\n<div *ngIf="!pageElementsLoaded">\n	<ion-spinner></ion-spinner>\n</div>\n\n<ion-content padding *ngIf="pageElementsLoaded" class="has-header">\n\n    <div text-center>\n        <img src="../../../assets/imgs/feelings/face{{data.moodScore}}.png" class="feelingImg">         \n    </div>\n    \n  <form (ngSubmit)="saveData()">\n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.moodScore" name="moodScore" color="moodColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.moodText}}</ion-label>\n        </ion-range>\n    </ion-item>      \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.dietScore" name="dietScore" color="dietColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.dietText}}</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.sleepScore" name="sleepScore" color="sleepColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.sleepText}}</ion-label>\n        </ion-range>\n    </ion-item> \n\n    <ion-item>\n        <ion-range min="1" max="10" [(ngModel)]="data.stressScore" name="stressScore" color="stressColor" pin="true" class="slider" (ionChange)="updateScores()">\n            <ion-label range-left>{{pageElements.stressText}}</ion-label>\n        </ion-range>\n    </ion-item>       \n      \n    <ion-item>\n      <ion-label>{{pageElements.descriptionText}}</ion-label>\n      <ion-input type="text" placeholder="Description" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n    </ion-item>\n  \n      \n    <button ion-button type="submit" block>{{pageElements.saveDataText}}</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__assets_services_translationService__["a" /* TranslationService */]])
    ], DailyEntry);
    return DailyEntry;
}());

//# sourceMappingURL=dailyEntry.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map