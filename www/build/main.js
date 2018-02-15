webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(33);
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
var AddDataPage = (function () {
    function AddDataPage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { entryDate: "", moodScore: 5, sleepScore: 5, dietScore: 5, stressScore: 5, totalScore: 10, entryNote: "" };
    }
    AddDataPage.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({
            name: 'wellnessdb1.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO wellnesstracker VALUES(NULL,?,?,?,?,?,?,?)', [_this.data.entryDate,
                _this.data.moodScore,
                _this.data.sleepScore,
                _this.data.dietScore,
                _this.data.stressScore,
                _this.data.totalScore,
                _this.data.entryNote])
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
    AddDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-data',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\add-data\add-data.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Add Data</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <h2>Add Data</h2>\n    <form (ngSubmit)="saveData()">\n\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Mood</ion-label>\n            <ion-input type="number" placeholder="Mood" [(ngModel)]="data.moodScore" name="moodScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Sleep</ion-label>\n            <ion-input type="number" placeholder="Sleep" [(ngModel)]="data.sleepScore" name="sleepScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Diet</ion-label>\n            <ion-input type="number" placeholder="Diet" [(ngModel)]="data.dietScore" name="dietScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Diet</ion-label>\n            <ion-input type="number" placeholder="Stress" [(ngModel)]="data.stressScore" name="stressScore" required="" ></ion-input>\n        </ion-item>        \n        \n        <ion-item>\n            <ion-label>Description</ion-label>\n            <ion-input type="text" placeholder="Whats on your mind?" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n        </ion-item>\n\n        <button ion-button type="submit" block>Save Data</button>\n    </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\add-data\add-data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], AddDataPage);
    return AddDataPage;
}());

//# sourceMappingURL=add-data.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(33);
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
        this.data = { rowid: 0, entryDate: "", moodScore: 5, sleepScore: 5, dietScore: 5, stressScore: 5, totalScore: 10, entryNote: "" };
        this.getCurrentData(navParams.get("rowid"));
    }
    EditDataPage.prototype.getCurrentData = function (rowid) {
        var _this = this;
        this.sqlite.create({
            name: 'wellnessdb1.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('SELECT * FROM wellnesstracker WHERE rowid=?', [rowid])
                .then(function (res) {
                if (res.rows.length > 0) {
                    _this.data.rowid = res.rows.item(0).rowid;
                    _this.data.entryDate = res.rows.item(0).entryDate;
                    _this.data.moodScore = res.rows.item(0).moodScore;
                    _this.data.sleepScore = res.rows.item(0).sleepScore;
                    _this.data.dietScore = res.rows.item(0).dietScore;
                    _this.data.stressScore = res.rows.item(0).stressScore;
                    _this.data.entryNote = res.rows.item(0).entryNote;
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
            name: 'wellnessdb1.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('UPDATE wellnesstracker SET entryDate=?,moodScore=?,sleepScore=?,dietScore=?,stressScore=?,totalScore=?,entryNote=? WHERE rowid=?', [_this.data.entryDate,
                _this.data.moodScore,
                _this.data.sleepScore,
                _this.data.dietScore,
                _this.data.stressScore,
                _this.data.totalScore,
                _this.data.entryNote,
                _this.data.rowid])
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
            selector: 'page-edit-data',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\edit-data\edit-data.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Edit Data</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h2>Edit Data</h2>\n    <form (ngSubmit)="updateData()">\n        <ion-item>\n            <ion-label>Date</ion-label>\n            <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="data.date" name="date" required=""></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Mood</ion-label>\n            <ion-input type="number" placeholder="Mood" [(ngModel)]="data.moodScore" name="moodScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Sleep</ion-label>\n            <ion-input type="number" placeholder="Sleep" [(ngModel)]="data.sleepScore" name="sleepScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Diet</ion-label>\n            <ion-input type="number" placeholder="Diet" [(ngModel)]="data.dietScore" name="dietScore" required="" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Stress</ion-label>\n            <ion-input type="number" placeholder="Stress" [(ngModel)]="data.stressScore" name="stressScore" required="" ></ion-input>\n        </ion-item>\n        \n        \n        <ion-item>\n            <ion-label>Entry Note</ion-label>\n            <ion-input type="text" placeholder="Entry Note" [(ngModel)]="data.entryNote" name="entryNote" required="" ></ion-input>\n        </ion-item>\n        \n        <ion-input type="hidden" [(ngModel)]="data.rowid" name="rowid"></ion-input>\n\n        <button ion-button type="submit" block>Update Data</button>\n        \n    </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\edit-data\edit-data.html"*/,
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

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_data_edit_data__ = __webpack_require__(103);
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
    function HomePage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.userRecord = [];
        this.entryDate = "";
        this.moodScore = 5;
        this.sleepScore = 5;
        this.dietScore = 5;
        this.stressScore = 5;
        this.totalScore = 10;
        this.entryNote = "";
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
            name: 'wellnessdb1.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellnesstracker(rowid INTEGER PRIMARY KEY, entryDate TEXT, moodScore INT, sleepScore INT, dietScore INT, stressScore INT, totalScore INT, entryNote TEXT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM userRecord ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecord = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecord.push({ rowid: res.rows.item(i).rowid,
                        entryDate: res.rows.item(i).entryDate,
                        moodScore: res.rows.item(i).moodScore,
                        sleepScore: res.rows.item(i).sleepScore,
                        dietScore: res.rows.item(i).dietScore,
                        stressScore: res.rows.item(i).stressScore,
                        totalScore: res.rows.item(i).totalScore,
                        entryNote: res.rows.item(i).entryNote });
                }
            }).catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    HomePage.prototype.addData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__add_data_add_data__["a" /* AddDataPage */]);
    };
    HomePage.prototype.editData = function (rowid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_data_edit_data__["a" /* EditDataPage */], { rowid: rowid });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Home</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="addData()">\n                <ion-icon name="add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h2>Checkins</h2>\n    <ion-list>\n        <ion-item-sliding *ngFor="let wellnesstracker of userRecord; let i=index">\n            <ion-item nopadding>\n            <p>\n                <span>{{wellnesstracker.entryDate}}</span><br>\n                Type: {{wellnesstracker.moodScore}}<br>\n                {{wellnesstracker.entryNote}}\n            </p>\n            <h3 item-end>\n                Amount: ${{wellnesstracker.totalScore}}\n            </h3>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="primary" (click)="editData(wellnesstracker.rowid)">\n                   <ion-icon name="paper"></ion-icon>\n                </button>\n                <button ion-button color="danger" (click)="deleteData(wellnesstracker.rowid)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-title>Balance: ${{balance}}</ion-title>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DailyEntry_dailyEntry__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { CheckinLogInfo } from '../CheckinLogInfo/checkinLogInfo';

 //services for SQLite FEB 2018

//import { DataServiceProvider } from '../../../providers/data-service/data-service';
var CheckinLog = (function () {
    function CheckinLog(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        //    checkinLogInfo = CheckinLogInfo;
        this.dailyentry = __WEBPACK_IMPORTED_MODULE_2__DailyEntry_dailyEntry__["a" /* DailyEntry */];
    }
    CheckinLog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLog</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <button ion-button block [navPush]="dailyentry">Add New Entry</button>\n\n\n\n    <ion-list>\n\n        \n\n    <ion-item-sliding *ngFor="let userRecord of wellness; let i=index">\n\n      <ion-item nopadding>\n\n        <p>\n\n          <span>{{userRecord.entryDate}}</span><br>\n\n          Mood Score: {{userRecord.moodScore}}<br>\n\n          Note: {{userRecord.entryNote}}\n\n        </p>\n\n        <h3 item-end>\n\n          Amount: ${{userRecord.totalScore}}\n\n        </h3>\n\n      </ion-item>\n\n<!--      <ion-item-options side="right">\n\n        <button ion-button color="primary" (click)="editData(userRecord.rowid)">\n\n          <ion-icon name="paper"></ion-icon>\n\n        </button>\n\n        <button ion-button color="danger" (click)="deleteData(userRecord.rowid)">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n-->\n\n    </ion-item-sliding>\n\n        \n\n<!--        <button ion-item class="fullbutton" *ngFor="let wellness of dataService.wellness" >\n\n            <ion-card>\n\n                <ion-row layout-align="center center" flex="60">\n\n\n\n                    <ion-col class="moodBackground" layout-align="center center">\n\n                        {{wellness.moodScore}}\n\n                        <strong>Mood</strong>\n\n                    </ion-col>\n\n\n\n                    <ion-col class="dietBackground" layout-align="center center">\n\n                        {{wellness.dietScore}}\n\n                        <strong>Diet</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="sleepBackground" layout-align="center center">\n\n                        {{wellness.sleepScore}}\n\n                        <strong>Sleep</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="stressBackground" layout-align="center center">\n\n                        {{wellness.stressScore}}\n\n                        <strong>Stress</strong>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n\n\n                <ion-icon name="Wellness" item-start></ion-icon>\n\n                Wellness Score:{{(wellness.moodScore+wellness.stressScore+wellness.dietScore+wellness.stressScore)*2}}\n\n\n\n            </ion-card>\n\n        </button>\n\n-->\n\n\n\n\n\n    </ion-list>    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n    <md-card>\n\n        <a ng-hide="entries == null" ng-repeat="entry in entries" href="#checkinLogInfo/{{::entry.entryID}}" class="entryItem">\n\n            <md-card>\n\n				<!-- Card Body -->\n\n<!--				<div layout="row">\n\n				\n\n					<!-- Date Space -->\n\n<!--					<div layout="row" layout-align="start center" flex="20">\n\n						<div flex aria-label="{{pageElements.dateEnteredAL}}: {{entry.dateEntered}}">\n\n							<strong>{{pageElements.dateText}}<br></strong> {{entry.dateEntered}}\n\n						</div>\n\n					</div>\n\n				\n\n					<!-- Question Score Space -->\n\n<!--					<div layout="row" layout-align="center center" flex="60">\n\n						<div layout="row" class="dietBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.dietScoreAL}}: {{entry.dietScore}}">\n\n								<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="moodBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.moodScoreAL}}: {{entry.moodScore}}">\n\n								<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="stressBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.stressScoreAL}}: {{entry.stressScore}}">\n\n								<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="sleepBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.sleepScoreAL}}: {{entry.sleepScore}}">\n\n								<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n\n							</div>\n\n						</div>\n\n						\n\n						\n\n					</div>\n\n					\n\n					<!-- Total Score Space -->\n\n<!--					<div layout="row" layout-align="end center" flex="20">\n\n						<div>\n\n							<div aria-label="{{pageElements.veryLowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore <= 10"><strong></strong> {{pageElements.veryLowText}} <br>({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.lowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 11 && entry.entryScore <= 30"><strong></strong> {{pageElements.lowText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.roughText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 31 && entry.entryScore <= 40"><strong></strong> {{pageElements.roughText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.decentText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 41 && entry.entryScore <= 50"><strong></strong> {{pageElements.decentText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.goodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 51 && entry.entryScore <= 60"><strong></strong> {{pageElements.goodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.veryGoodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 61 && entry.entryScore <= 75"><strong></strong> {{pageElements.veryGoodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.amazingText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 76"><strong></strong> {{pageElements.amazingText}} ({{entry.entryScore}})</div>\n\n						</div>\n\n					</div>\n\n				</div>\n\n            </md-card>\n\n        </a>\n\n        <md-card ng-show="entries == null">\n\n            <md-card-title>\n\n                <md-card-title-text aria-label="{{pageElements.loadingText}}">\n\n                    <span>{{pageElements.loadingText}}</span>\n\n                </md-card-title-text>\n\n            </md-card-title>\n\n        </md-card>\n\n    </md-card>\n\n</md-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
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
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_data_edit_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_toast__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                //    DailyEntry,
                __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_data_edit_data__["a" /* EditDataPage */]
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
                //    DailyEntry,
                __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_data_add_data__["a" /* AddDataPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_edit_data_edit_data__["a" /* EditDataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_toast__["a" /* Toast */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_data_add_data__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_edit_data_edit_data__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';




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
            //      { title: 'Daily Entry', component: DailyEntry },
            { title: 'Checkin Log', component: __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */] },
            { title: 'Add Data', component: __WEBPACK_IMPORTED_MODULE_7__pages_add_data_add_data__["a" /* AddDataPage */] },
            { title: 'Edit Data', component: __WEBPACK_IMPORTED_MODULE_8__pages_edit_data_edit_data__["a" /* EditDataPage */] }
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //services for SQLite FEB 2018

var DailyEntry = (function () {
    function DailyEntry(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
        this.data = { entryDate: "", moodScore: 5, sleepScore: 5, dietScore: 5, stressScore: 5, totalScore: 10, entryNote: "" };
    }
    DailyEntry.prototype.saveData = function () {
        var _this = this;
        this.sqlite.create({ name: 'wellnessdb1.db', location: 'default' }).then(function (db) {
            db.executeSql('INSERT INTO wellnesstracker VALUES(NULL,?,?,?,?,?,?,?)', [_this.data.entryDate,
                _this.data.moodScore,
                _this.data.sleepScore,
                _this.data.dietScore,
                _this.data.stressScore,
                _this.data.totalScore,
                _this.data.entryNote]).then(function (res) {
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
    // Given a number, this method will reverse it. 10 = 1, 9 = 2, 8 = 3, 7 = 4, 6 = 5, 5 = 6, 4 = 7, 3 = 8, 2 = 9, 1 = 10
    //    reverseScore(score) 
    //    { 
    //       return ((10 - score) + 1); 
    //    }
    DailyEntry.prototype.calcTotalScore = function () {
        this.data.totalScore = (((this.data.moodScore + this.data.sleepScore + this.data.dietScore + this.data.stressScore) / 40) * 10);
    };
    DailyEntry = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>DailyEntry</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div text-center>\n\n        <img src="../../assets/imgs/feelings/face10.png" class="feelingImg">         \n\n    </div>\n\n\n\n    <form (ngSubmit)="saveData()" >\n\n    <ion-list> \n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="data.moodScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Mood</ion-label>\n\n            </ion-range>\n\n        </ion-item>    \n\n    \n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="data.sleepScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Sleep</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="data.dietScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Diet</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="data.stressScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Stress</ion-label>\n\n            </ion-range>\n\n        </ion-item> \n\n \n\n        <ion-item>\n\n            <ion-label floating>What on your mind?</ion-label>\n\n            <ion-input [(ngModel)]="data.entryNote" type="text" whatsOnYourMindText></ion-input>\n\n        </ion-item>        \n\n        \n\n        <ion-item>\n\n          <button ion-button type="submit" full>Submit Wellness Score</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n        \n\n    </form>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!-- <md-content>\n\n    <p>Trial 1 </p>\n\n </md-content> \n\n-->\n\n\n\n\n\n<!--\n\n<md-content layout-align="start center" layout="column" class="wt dailyEntry">\n\n\n\n    <img src="imgs/feelings/face{{totalScore}}.png" class="feelingImg"/>\n\n	\n\n	<div layout="row" layout-padding layout-align="center center">\n\n		<h2 class="sliderHeader" aria-label="{{pageElements.sliderHeaderText}}">\n\n			{{pageElements.sliderHeaderText}}\n\n		</h2>\n\n	</div>\n\n\n\n    <md-slider aria-label="{{pageElements.moodSliderAL}}" flex min="1" max="10" ng-model="moodScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.moodSentenceText}}">{{pageElements.moodSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.sleepSliderAL}}" flex min="1" max="10" ng-model="sleepScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.sleepSentenceText}}">{{pageElements.sleepSentenceText}}</h3>\n\n	\n\n    <md-slider aria-label="{{pageElements.dietSliderAL}}" flex min="1" max="10" ng-model="dietScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.dietSentenceText}}">{{pageElements.dietSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.stressSliderAL}}" flex min="1" max="10" ng-model="stressScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.stressSentenceText}}">{{pageElements.stressSentenceText}}</h3>	\n\n\n\n    <md-input-container class="md-block descriptionContainer">\n\n        <label aria-label="{{pageElements.whatsOnYourMindAL}}">{{pageElements.whatsOnYourMindText}}</label>\n\n        <textarea ng-model="entryNote" md-maxlength="500" maxlength="500" class="descriptionText"></textarea>\n\n    </md-input-container>\n\n\n\n    <div>\n\n        <md-button class="md-raised md-primary" ng-click="saveEntry()" aria-label="{{pageElements.doneText}}">{{pageElements.doneText}}</md-button>\n\n    </div>\n\n\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\SQLTest\sqltest\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */]])
    ], DailyEntry);
    return DailyEntry;
}());

//define the variables to link with the ngModel in the main page
//    		$scope.updatePicture = function(totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) {
//			totalScore = ((parseInt(moodScore) + parseInt(sleepScore) + parseInt(dietScore) + parseInt(stressScore)) / 4); //Added by JW
//		}
//		
//		$scope.$watch(function( totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) { return moodScore },
//			function(totalScore, moodScore, sleepScore, dietScore, scoreManager, stressScore) {
//				totalScore = ((parseInt(moodScore) + parseInt(sleepScore) + parseInt(dietScore) + parseInt(stressScore)) / 4).toFixed(0); //Added by JW
//
//			}
//		);
//		$scope.$watch(function(scope) { return $scope.sleepScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW
//			}
//		);
//		$scope.$watch(function(scope) { return $scope.stressScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW
//			}
//		);
//		$scope.$watch(function(scope) { return $scope.dietScore },
//			function() {
//				$scope.totalScore = ((parseInt($scope.moodScore) + parseInt($scope.sleepScore) + parseInt($scope.dietScore) + scoreManager.reverseScore(parseInt($scope.stressScore))) / 4).toFixed(0); //Added by JW
//			}
//		);
//}
//# sourceMappingURL=dailyEntry.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map