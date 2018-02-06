webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//services

//services for SQLite FEB 2018 TJ

//import { AddDataPage } from '../add-data/add-data';
//import { EditDataPage } from '../edit-data/edit-data';
var DailyEntry = (function () {
    function DailyEntry(navCtrl, sqlite, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        this.dataService = dataService;
        this.userRecord = [];
        this.entryDate = "";
        this.moodScore = 5;
        this.sleepScore = 5;
        this.dietScore = 5;
        this.stressScore = 5;
        this.totalScore = 10;
        this.entryNote = "";
        //automatically load the wellness tracker listing when the page arrives
        this.dataService.wellness_tracker_list("wellness").subscribe(function (response) {
            _this.dataService.wellness = response;
            //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
            for (var a = 0; a < response.length; a++) {
                _this.dataService.wellness[a] = JSON.parse(_this.dataService.wellness[a].jsondata);
            }
        });
    }
    // SQLite add ins
    DailyEntry.prototype.ionViewDidLoad = function () {
        this.getData();
    };
    DailyEntry.prototype.ionViewWillEnter = function () {
        this.getData();
    };
    DailyEntry.prototype.getData = function () {
        var _this = this;
        this.sqlite.create({ name: 'wellness.db', location: 'default' }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
                .then(function (res) {
                _this.userRecord = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.userRecord.push({ rowid: res.rows.item(i).rowid, date: res.rows.item(i).date, type: res.rows.item(i).type, description: res.rows.item(i).description, amount: res.rows.item(i).amount });
                }
            })
                .catch(function (e) { return console.log(e); });
            //            db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
            //            .then(res => {
            //                if(res.rows.length>0) {
            //                    this.totalIncome = parseInt(res.rows.item(0).totalIncome);
            //                    this.balance = this.totalIncome-this.totalExpense;
            //                }
            //            })
            //            .catch(e => console.log(e));
            //            db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
            //            .then(res => {
            //                if(res.rows.length>0) {
            //                    this.totalExpense = parseInt(res.rows.item(0).totalExpense);
            //                    this.balance = this.totalIncome-this.totalExpense;
            //                }
            //            })
        }).catch(function (e) { return console.log(e); });
    };
    DailyEntry.prototype.addData = function () {
        this.navCtrl.push(AddDataPage);
    };
    DailyEntry.prototype.editData = function (rowid) {
        this.navCtrl.push(EditDataPage, {
            rowid: rowid
        });
    };
    DailyEntry.prototype.deleteData = function (rowid) {
        var _this = this;
        this.sqlite.create({ name: 'wellness.db', location: 'default' }).then(function (db) {
            db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid]).then(function (res) {
                console.log(res);
                _this.getData();
            })
                .catch(function (e) { return console.log(e); });
        }).catch(function (e) { return console.log(e); });
    };
    // End of SQLit Data Servies
    //a simple function to submit the scores into the database
    DailyEntry.prototype.submitWellness = function () {
        var _this = this;
        this.dataService.wellness_tracker_add(this.moodScore, this.sleepScore, this.stressScore, this.dietScore, this.entryNote).subscribe(function (response) {
            alert("Score Submitted");
            console.log(response);
            //load the latest version from the DB
            _this.dataService.wellness_tracker_list("wellness").subscribe(function (response2) {
                _this.dataService.wellness = response2;
                //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
                for (var a = 0; a < response2.length; a++) {
                    _this.dataService.wellness[a] = JSON.parse(_this.dataService.wellness[a].jsondata);
                }
            });
        });
    };
    // Given a number, this method will reverse it. 10 = 1, 9 = 2, 8 = 3, 7 = 4, 6 = 5, 5 = 6, 4 = 7, 3 = 8, 2 = 9, 1 = 10
    DailyEntry.prototype.reverseScore = function (score) { return ((10 - score) + 1); };
    DailyEntry.prototype.calcTotalScore = function () {
        this.totalScore = (((this.moodScore + this.sleepScore + this.dietScore + this.stressScore) / 40) * 10);
    };
    DailyEntry = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>DailyEntry</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <div text-center>\n\n        <img src="../../assets/imgs/feelings/face{{totalScore}}.png" class="feelingImg">         \n\n    </div>\n\n\n\n    <ion-list> \n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="moodScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Mood</ion-label>\n\n            </ion-range>\n\n        </ion-item>    \n\n    \n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="sleepScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Sleep</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="dietScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Diet</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="stressScore" color="secondary" pin="true" class="slider">\n\n                <ion-label range-left>Stress</ion-label>\n\n            </ion-range>\n\n        </ion-item> \n\n \n\n\n\n        <ion-item>\n\n            <ion-label floating>What on your mind?</ion-label>\n\n            <ion-input [(ngModel)]="entryNote" type="text" whatsOnYourMindText></ion-input>\n\n        </ion-item>        \n\n        \n\n        <ion-item>\n\n          <button ion-button full color="primary" (click)="submitWellness()">Submit Wellness Score</button>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!-- <md-content>\n\n    <p>Trial 1 </p>\n\n </md-content> \n\n-->\n\n\n\n\n\n<!--\n\n<md-content layout-align="start center" layout="column" class="wt dailyEntry">\n\n\n\n    <img src="imgs/feelings/face{{totalScore}}.png" class="feelingImg"/>\n\n	\n\n	<div layout="row" layout-padding layout-align="center center">\n\n		<h2 class="sliderHeader" aria-label="{{pageElements.sliderHeaderText}}">\n\n			{{pageElements.sliderHeaderText}}\n\n		</h2>\n\n	</div>\n\n\n\n    <md-slider aria-label="{{pageElements.moodSliderAL}}" flex min="1" max="10" ng-model="moodScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.moodSentenceText}}">{{pageElements.moodSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.sleepSliderAL}}" flex min="1" max="10" ng-model="sleepScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.sleepSentenceText}}">{{pageElements.sleepSentenceText}}</h3>\n\n	\n\n    <md-slider aria-label="{{pageElements.dietSliderAL}}" flex min="1" max="10" ng-model="dietScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.dietSentenceText}}">{{pageElements.dietSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.stressSliderAL}}" flex min="1" max="10" ng-model="stressScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-label="{{pageElements.stressSentenceText}}">{{pageElements.stressSentenceText}}</h3>	\n\n\n\n    <md-input-container class="md-block descriptionContainer">\n\n        <label aria-label="{{pageElements.whatsOnYourMindAL}}">{{pageElements.whatsOnYourMindText}}</label>\n\n        <textarea ng-model="entryNote" md-maxlength="500" maxlength="500" class="descriptionText"></textarea>\n\n    </md-input-container>\n\n\n\n    <div>\n\n        <md-button class="md-raised md-primary" ng-click="saveEntry()" aria-label="{{pageElements.doneText}}">{{pageElements.doneText}}</md-button>\n\n    </div>\n\n\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]) === "function" && _c || Object])
    ], DailyEntry);
    return DailyEntry;
    var _a, _b, _c;
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

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//services

var Dashboard = (function () {
    function Dashboard(navCtrl, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        //define the variables to link with the ngModel in the main page
        this.moodScore = 1;
        this.sleepScore = 1;
        this.stressScore = 1;
        this.dietScore = 1;
        this.entryNote = "";
        //automatically load the wellness tracker listing when the page arrives
        this.dataService.wellness_tracker_list("wellness").subscribe(function (response) {
            _this.dataService.wellness = response;
            //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
            for (var a = 0; a < response.length; a++) {
                _this.dataService.wellness[a] = JSON.parse(_this.dataService.wellness[a].jsondata);
            }
        });
    }
    //a simple function to submit the scores into the database
    Dashboard.prototype.submitWellness = function () {
        var _this = this;
        this.dataService.wellness_tracker_add(this.moodScore, this.sleepScore, this.stressScore, this.dietScore, this.entryNote).subscribe(function (response) {
            alert("Score Submitted");
            console.log(response);
            //load the latest version from the DB
            _this.dataService.wellness_tracker_list("wellness").subscribe(function (response2) {
                _this.dataService.wellness = response2;
                //convert the JSON text to a JSON object so you can reference it as wellness.moodScore in the ngFor
                for (var a = 0; a < response2.length; a++) {
                    _this.dataService.wellness[a] = JSON.parse(_this.dataService.wellness[a].jsondata);
                }
            });
        });
    };
    Dashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-analyticDashboard',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Dashboard\analyticDashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n\n\n<ion-item>\n\n      <ion-icon  name="cloud-upload" item-start></ion-icon>\n\n   Wellness Entries\n\n   <ion-badge item-end>{{dataService.wellness.length}}</ion-badge>\n\n</ion-item>\n\n\n\n  </ion-card-header>\n\n\n\n  <ion-list>\n\n    <button ion-item *ngFor="let wellness of dataService.wellness" >\n\n      <ion-icon name="happy" item-start></ion-icon>\n\n     Mood Data: {{wellness.moodScore}}\n\n    </button>\n\n  </ion-list>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n\n\n<ion-item>\n\n      <ion-icon  name="happy" item-start></ion-icon>\n\n Add an Entry\n\n   \n\n</ion-item>\n\n\n\n  </ion-card-header>\n\n\n\n  <ion-list>\n\n  \n\n  <ion-label >Mood</ion-label>\n\n <ion-range [(ngModel)]="moodScore" min="1" max="5">\n\n    <ion-icon range-left small name="sad"></ion-icon>\n\n    <ion-icon range-right name="happy"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Sleep</ion-label>\n\n <ion-range [(ngModel)]="sleepScore" min="1" max="5">\n\n    <ion-icon range-left small name="sunny"></ion-icon>\n\n    <ion-icon range-right name="moon"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Stress</ion-label>\n\n <ion-range [(ngModel)]="stressScore" min="1" max="5">\n\n    <ion-icon range-left small name="add"></ion-icon>\n\n    <ion-icon range-right name="remove"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Diet</ion-label>\n\n <ion-range [(ngModel)]="dietScore" min="1" max="5">\n\n    <ion-icon range-left small name="pizza"></ion-icon>\n\n    <ion-icon range-right name="bicycle"></ion-icon>\n\n  </ion-range>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label floating>Notes</ion-label>\n\n    <ion-input [(ngModel)]="entryNote" type="text"></ion-input>\n\n  </ion-item>\n\n\n\n<button ion-button full color="primary"   (click)="submitWellness()">Submit Wellness Score</button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n\n\n<!--  <md-content ng-cloak> \n\n<ion-content padding>\n\n	<div layout="column">  \n\n            <ion-card>\n\n                <ion-card-content>\n\n<!--            <md-card flex="50" class="slider" id="slider">\n\n			<!-- Question Selection -->\n\n<!--			<div layout="row">\n\n				<div layout="row" layout-padding layout-align="start center" flex>\n\n					<div layout="row">\n\n			<!--			<div class="moodText" layout="column" layout-padding>\n\n                                                   <ion-item>\n\n                                                        <ion-label>Pepperoni</ion-label>\n\n                                                        <ion-checkbox [(ngModel)]="userInput.moodCheckbox" aria-label="{{pageElements.moodCheckboxAL}}"></ion-checkbox>\n\n                                                    </ion-item>\n\n                                                    \n\n                        				<md-checkbox class="md-primary" ng-model="userInput.moodCheckbox" aria-label="{{pageElements.moodCheckboxAL}}">\n\n								{{pageElements.moodText}}\n\n							</md-checkbox>\n\n                        \n\n						</div>\n\n                        -->\n\n                        <!--                    \n\n						<div class="sleepText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.sleepCheckbox" aria-label="{{pageElements.sleepCheckboxAL}}">\n\n								{{pageElements.sleepText}}\n\n							</md-checkbox>\n\n						</div>\n\n						<div class="stressText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.stressCheckbox" aria-label="{{pageElements.stressCheckboxAL}}">\n\n								{{pageElements.stressText}}\n\n							</md-checkbox>\n\n						</div>\n\n						<div class="dietText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.dietCheckbox" aria-label="{{pageElements.dietCheckboxAL}}">\n\n								{{pageElements.dietText}}\n\n							</md-checkbox>\n\n						</div>\n\n                        -->\n\n<!--					</div>\n\n				</div>\n\n			</div>		\n\n          <!--      </md-card> -->\n\n<!--                </ion-card-content>\n\n        </ion-card>\n\n<!--		\n\n		<div flex ng-show="!pageElements.loadComplete && pageElements.loadStarted && !pageElements.hideAllElements">\n\n			<md-progress-linear md-mode="indeterminate"></md-progress-linear>\n\n		</div>\n\n		\n\n		<md-card ng-show="pageElements.hideAllElements" layout-align="center center">\n\n			<div aria-label="{{pageElements.noCheckinsFoundAL}}">\n\n				{{pageElements.noCheckinsFound}}!\n\n			</div>\n\n		</md-card>\n\n-->		\n\n		<!-- Graph -->\n\n<!--		<md-card>\n\n			<div layout="row">\n\n				<div id="chartDiv" layout-fill>\n\n					<canvas id="mainChart"></canvas>\n\n				</div>	\n\n			</div>\n\n		</md-card>\n\n			\n\n		<div layout="row"  layout-align="center center">\n\n			<div layout="column" class="dietBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.dietScoreAverageAL}} {{dietScoreAverage}}">\n\n					<strong>{{pageElements.dietText}}:<br></strong> {{dietScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="column" class="moodBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.moodScoreAverageAL}} {{moodScoreAverage}}">\n\n					<strong>{{pageElements.moodText}}:<br></strong> {{moodScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="row" class="stressBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.stressScoreAverageAL}} {{stressScoreAverage}}">\n\n					<strong>{{pageElements.stressText}}:<br></strong> {{stressScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="row" class="sleepBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.sleepScoreAverageAL}} {{sleepScoreAverage}}">\n\n					<strong>{{pageElements.sleepText}}:<br></strong> {{sleepScoreAverage}}\n\n				</div>\n\n			</div>					\n\n		</div>		\n\n				\n\n		<div layout="column" layout-align="center center"  style="height: 100%;">\n\n			<div layout-padding aria-label="From Date">\n\n				<md-datepicker ng-model="userInput.fromDate" md-max-date="userInput.toDate" md-placeholder="Enter date"></md-datepicker>\n\n			</div>\n\n			<div layout-padding class="md-datePicker-align" aria-label="To Date">\n\n				<md-datepicker ng-model="userInput.toDate" md-min-date="userInput.fromDate" md-placeholder="Enter date"></md-datepicker>\n\n			</div>\n\n			<div layout="row">\n\n				<md-button class="md-raised md-primary buttonBold" ng-click="generateChart(userInput.fromDate, userInput.toDate, false)" aria-label="{{pageElements.toDateAL}}">{{pageElements.generateText}}</md-button>\n\n				<md-button class="md-raised md-primary buttonBold" ng-click="redirectToCheckinLog()" aria-label="{{pageElements.fromDateAL}}">{{pageElements.checkinLogText}}</md-button>\n\n			</div>\n\n		</div>\n\n                -->\n\n<!--	</div>\n\n</ion-content>\n\n<!-- </md-content>  -->\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Dashboard\analyticDashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], Dashboard);
    return Dashboard;
}());

/*
//------------------ Analytic Dashboard Controller --------------------
app.controller('analyticDashboardCtrl', ['$scope', "queryService", "translationService", "$window", function($scope, queryService, translationService, $window){
    
    // Check to see if a user is logged in, if not, redirect to login screen
    if(localStorage.getItem("user") != null) {
        
        // Mood = 0, sleep = 1, stress = 2, diet = 3
        $scope.graphColours = ["#FF9800", "#01579B", "#D32F2F", "#4CAF50"];
        
        // Form values
        $scope.userInput = {
            moodCheckbox: false,
            sleepCheckbox: false,
            stressCheckbox: false,
            dietCheckbox: false,
            fromDate: new Date(),
            toDate: new Date()
        }
        
        // Page elements
        $scope.pageElements = translationService.translate("analyticDashboard.html");

        $scope.redirectToCheckinLog = function() {
            $window.location.href= "#/checkinLog";
        }
        
        // Launch function
        $scope.pageLoad = function() {
            // Tell our loading bar that the back-end has started
            $scope.pageElements.loadStarted = true;
            
            // Set up our dates for last month
            
            // Grab both our dates
            var today = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            var todayMinusAMonth = moment().subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss');
                
            // Set the times to their min or max hour accordingly
            var finalTodayDate = new String(today.slice(0, 10) + ' 23' + today.slice(13, today.length));
            var finalTodayMinusAMonth = new String(todayMinusAMonth.slice(0, 10) + ' 00' + todayMinusAMonth.slice(13, todayMinusAMonth.length));

            // Turn them into a string object so we can use them in our queries
            finalTodayDate = finalTodayDate.toString();
            finalTodayMinusAMonth = finalTodayMinusAMonth.toString();
            
            // Call the method to generate the chart
            $scope.generateChart(finalTodayMinusAMonth, finalTodayDate, true);
        }
        
        // Called when "Generate" button is clicked, creates a chart
        $scope.generateChart = function(fromDate, toDate, pageLaunchFlag) {
            
            if(pageLaunchFlag === null) pageLaunchFlag = false;
            
            // Tell our loading bar that the back-end has started
            $scope.pageElements.loadStarted = true;
            
            // Reset our counters
            $scope.totalAverage = 0;
            $scope.totalCheckins = 0;
            $scope.moodScoreAverage = 0;
            $scope.stressScoreAverage = 0;
            $scope.dietScoreAverage = 0;
            $scope.sleepScoreAverage = 0;
            
            $scope.pageElements.maximizeButton = !$scope.pageElements.maximizeButton;
            $scope.pageElements.showOutput = true;
            
            // Display the appropriate elements if their checkbox was selected
            if($scope.userInput.moodCheckbox || pageLaunchFlag) {
                $scope.pageElements.moodValues = true;
            } else {
                $scope.pageElements.moodValues = false;
            }
            
            if($scope.userInput.stressCheckbox || pageLaunchFlag) {
                $scope.pageElements.stressValues = true;
            } else {
                $scope.pageElements.stressValues = false;
            }
            
            if($scope.userInput.dietCheckbox || pageLaunchFlag) {
                $scope.pageElements.dietValues = true;
            } else {
                $scope.pageElements.dietValues = false;
            }
            
            if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
                $scope.pageElements.sleepValues = true;
            } else {
                $scope.pageElements.sleepValues = false;
            }
            
            var selectStatement = "";
            var whereClause = "";
            
            // We need to fill variables depending on whether they were selected or not (We avoid string building doing it this way)
            var moodScore = "";
            var stressScore = "";
            var dietScore = "";
            var sleepScore = "";
            
            if($scope.userInput.moodCheckbox || pageLaunchFlag) {
                moodScore = "moodScore, ";
            }
            
            if($scope.userInput.stressCheckbox || pageLaunchFlag) {
                stressScore = "stressScore, ";
            }
            
            if($scope.userInput.dietCheckbox || pageLaunchFlag) {
                dietScore = "dietScore, ";
            }
            
            if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
                sleepScore = "sleepScore, ";
            }
            
            if(!pageLaunchFlag) {
            
                // Format our dates
                var fromDate = moment(fromDate).format('YYYY-MM-DD HH:mm:ss');
                var toDate = moment(toDate).format('YYYY-MM-DD HH:mm:ss');
                    
                // Set the times to their min or max hour accordingly
                var finalFromDate = new String(fromDate.slice(0, 10) + ' 00' + fromDate.slice(13, fromDate.length));
                var finalToDate = new String(toDate.slice(0, 10) + ' 23' + toDate.slice(13, toDate.length));

                // Turn them into a string object so we can use them in our queries
                fromDate = finalFromDate.toString();
                toDate = finalToDate.toString();
            }
            
            // Generating the select and where clause
            selectStatement = moodScore + stressScore + dietScore + sleepScore + "dateEntered";
            whereClause = "userID = '" + localStorage.getItem("user") + "' AND dateEntered BETWEEN DATETIME('" + fromDate + "') AND DATETIME('" + toDate + "') ORDER BY dateEntered DESC";

            // Query the actual line graph data
            queryService.selectQuery(selectStatement, "wellnessTrackerEntries", whereClause).then(function(response) {
                $scope.entries = response.data;
            
                var labelsArray = [];
                
                var moodScoreArray = [];
                var stressScoreArray = [];
                var dietScoreArray = [];
                var sleepScoreArray = [];
                
                var moodScoreTotal = 0;
                var stressScoreTotal = 0;
                var dietScoreTotal = 0;
                var sleepScoreTotal = 0;
                
                $scope.totalCheckins = 0;
                
                // Each array is aligned, apply the actual values from our query
                for(var i = 0; i < $scope.entries.length; i++) {
                    
                    $scope.totalCheckins++;
                    
                    labelsArray[i] = $scope.entries[i].dateEntered;
                    
                    if($scope.userInput.moodCheckbox || pageLaunchFlag) {
                        moodScoreArray[i] = $scope.entries[i].moodScore;
                        moodScoreTotal = moodScoreTotal + parseInt($scope.entries[i].moodScore);
                    }
                    
                    if($scope.userInput.stressCheckbox || pageLaunchFlag) {
                        stressScoreArray[i] = $scope.entries[i].stressScore;
                        stressScoreTotal = stressScoreTotal + parseInt($scope.entries[i].stressScore);
                    }
                    
                    if($scope.userInput.dietCheckbox || pageLaunchFlag) {
                        dietScoreArray[i] = $scope.entries[i].dietScore;
                        dietScoreTotal = dietScoreTotal + parseInt($scope.entries[i].dietScore);
                    }
                    
                    if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
                        sleepScoreArray[i] = $scope.entries[i].sleepScore;
                        sleepScoreTotal = sleepScoreTotal + parseInt($scope.entries[i].sleepScore);
                    }
                }
                
                // If their appropriate checkbox is selected, calculate the average score
                if($scope.userInput.moodCheckbox || pageLaunchFlag) $scope.moodScoreAverage = (moodScoreTotal / $scope.totalCheckins).toFixed(2);
                if($scope.userInput.stressCheckbox || pageLaunchFlag) $scope.stressScoreAverage = (stressScoreTotal / $scope.totalCheckins).toFixed(2);
                if($scope.userInput.dietCheckbox || pageLaunchFlag) $scope.dietScoreAverage = (dietScoreTotal / $scope.totalCheckins).toFixed(2);
                if($scope.userInput.sleepCheckbox || pageLaunchFlag) $scope.sleepScoreAverage = (sleepScoreTotal / $scope.totalCheckins).toFixed(2);
                
                // Build our graph object
                var graphDataSets = [];
                
                // If moodCheckbox was selected, build our mood line
                if($scope.userInput.moodCheckbox || pageLaunchFlag) {
                    
                    var moodCheckboxIndex = graphDataSets.length;
                    
                    graphDataSets[graphDataSets.length] = {
                        data: moodScoreArray,
                        label: $scope.pageElements.moodText,
                        borderColor: $scope.graphColours[0],
                        fill: false
                    }
                }
                
                // If stressCheckbox was selected, build our stress line
                if($scope.userInput.stressCheckbox || pageLaunchFlag) {
                    
                    var stressCheckboxIndex = graphDataSets.length;
                    
                    graphDataSets[graphDataSets.length] = {
                        data: stressScoreArray,
                        label: $scope.pageElements.stressText,
                        borderColor: $scope.graphColours[2],
                        fill: false
                    }
                }
                
                // If dietCheckbox was selected, build our diet line
                if($scope.userInput.dietCheckbox || pageLaunchFlag) {
                    
                    var dietCheckboxIndex = graphDataSets.length;
                    
                    graphDataSets[graphDataSets.length] = {
                        data: dietScoreArray,
                        label: $scope.pageElements.dietText,
                        borderColor: $scope.graphColours[3],
                        fill: false
                    }
                }
                
                // If sleepCheckbox was selected, build our sleep quality line
                if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
                    
                    var sleepCheckboxIndex = graphDataSets.length;
                    
                    graphDataSets[graphDataSets.length] = {
                        data: sleepScoreArray,
                        label: $scope.pageElements.sleepText,
                        borderColor: $scope.graphColours[1],
                        fill: false
                    }
                }
                
                var datasetsObject = [];
                
                
                
                if($scope.userInput.moodCheckbox || pageLaunchFlag) {
                    datasetsObject[datasetsObject.length] = {label: graphDataSets[moodCheckboxIndex].label, data: graphDataSets[moodCheckboxIndex].data, borderColor: graphDataSets[moodCheckboxIndex].borderColor, fill: graphDataSets[moodCheckboxIndex].fill};
                }
                
                if($scope.userInput.stressCheckbox || pageLaunchFlag) {
                    datasetsObject[datasetsObject.length] = {label: graphDataSets[stressCheckboxIndex].label, data: graphDataSets[stressCheckboxIndex].data, borderColor: graphDataSets[stressCheckboxIndex].borderColor, fill: graphDataSets[stressCheckboxIndex].fill};
                }
                
                if($scope.userInput.dietCheckbox || pageLaunchFlag) {
                    datasetsObject[datasetsObject.length] = {label: graphDataSets[dietCheckboxIndex].label, data: graphDataSets[dietCheckboxIndex].data, borderColor: graphDataSets[dietCheckboxIndex].borderColor, fill: graphDataSets[dietCheckboxIndex].fill};
                }
                
                if($scope.userInput.sleepCheckbox || pageLaunchFlag) {
                    datasetsObject[datasetsObject.length] = {label: graphDataSets[sleepCheckboxIndex].label, data: graphDataSets[sleepCheckboxIndex].data, borderColor: graphDataSets[sleepCheckboxIndex].borderColor, fill: graphDataSets[sleepCheckboxIndex].fill};
                }
                
                var chartDiv = document.getElementById("chartDiv");
                chartDiv.innerHTML = '<canvas id="mainChart"></canvas>';
                
                // Generate Chart
                var mainChart = new Chart(document.getElementById("mainChart").getContext('2d'), {
                    
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
                            }]
                        }
                    }
                });
                
                $scope.pageElements.loadComplete = true;
            });
        }
        
        $scope.pageLoad();
    } else {
        $window.location.href = "#/home";
    }
    
//}]);*/
//# sourceMappingURL=analyticDashboard.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CheckinLogInfo_checkinLogInfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DailyEntry_dailyEntry__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckinLog = (function () {
    function CheckinLog(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.checkinLogInfo = __WEBPACK_IMPORTED_MODULE_2__CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */];
        this.dailyentry = __WEBPACK_IMPORTED_MODULE_3__DailyEntry_dailyEntry__["a" /* DailyEntry */];
    }
    CheckinLog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLog</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <button ion-button block [navPush]="dailyentry">Add New Entry</button>\n\n\n\n    <ion-list>\n\n\n\n        <button ion-item class="fullbutton" *ngFor="let wellness of dataService.wellness" >\n\n            <ion-card>\n\n                <ion-row layout-align="center center" flex="60">\n\n\n\n                    <ion-col class="moodBackground" layout-align="center center">\n\n                        {{wellness.moodScore}}\n\n                        <strong>Mood</strong>\n\n                    </ion-col>\n\n\n\n                    <ion-col class="dietBackground" layout-align="center center">\n\n                        {{wellness.dietScore}}\n\n                        <strong>Diet</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="sleepBackground" layout-align="center center">\n\n                        {{wellness.sleepScore}}\n\n                        <strong>Sleep</strong>\n\n                    </ion-col>                \n\n\n\n                    <ion-col class="stressBackground" layout-align="center center">\n\n                        {{wellness.stressScore}}\n\n                        <strong>Stress</strong>\n\n                    </ion-col>\n\n\n\n                </ion-row>\n\n\n\n                <ion-icon name="Wellness" item-start></ion-icon>\n\n                Wellness Score:{{(wellness.moodScore+wellness.stressScore+wellness.dietScore+wellness.stressScore)*2}}\n\n\n\n            </ion-card>\n\n        </button>\n\n\n\n\n\n\n\n    </ion-list>    \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n    <md-card>\n\n        <a ng-hide="entries == null" ng-repeat="entry in entries" href="#checkinLogInfo/{{::entry.entryID}}" class="entryItem">\n\n            <md-card>\n\n				<!-- Card Body -->\n\n<!--				<div layout="row">\n\n				\n\n					<!-- Date Space -->\n\n<!--					<div layout="row" layout-align="start center" flex="20">\n\n						<div flex aria-label="{{pageElements.dateEnteredAL}}: {{entry.dateEntered}}">\n\n							<strong>{{pageElements.dateText}}<br></strong> {{entry.dateEntered}}\n\n						</div>\n\n					</div>\n\n				\n\n					<!-- Question Score Space -->\n\n<!--					<div layout="row" layout-align="center center" flex="60">\n\n						<div layout="row" class="dietBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.dietScoreAL}}: {{entry.dietScore}}">\n\n								<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="moodBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.moodScoreAL}}: {{entry.moodScore}}">\n\n								<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="stressBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.stressScoreAL}}: {{entry.stressScore}}">\n\n								<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="sleepBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.sleepScoreAL}}: {{entry.sleepScore}}">\n\n								<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n\n							</div>\n\n						</div>\n\n						\n\n						\n\n					</div>\n\n					\n\n					<!-- Total Score Space -->\n\n<!--					<div layout="row" layout-align="end center" flex="20">\n\n						<div>\n\n							<div aria-label="{{pageElements.veryLowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore <= 10"><strong></strong> {{pageElements.veryLowText}} <br>({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.lowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 11 && entry.entryScore <= 30"><strong></strong> {{pageElements.lowText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.roughText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 31 && entry.entryScore <= 40"><strong></strong> {{pageElements.roughText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.decentText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 41 && entry.entryScore <= 50"><strong></strong> {{pageElements.decentText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.goodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 51 && entry.entryScore <= 60"><strong></strong> {{pageElements.goodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.veryGoodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 61 && entry.entryScore <= 75"><strong></strong> {{pageElements.veryGoodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.amazingText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 76"><strong></strong> {{pageElements.amazingText}} ({{entry.entryScore}})</div>\n\n						</div>\n\n					</div>\n\n				</div>\n\n            </md-card>\n\n        </a>\n\n        <md-card ng-show="entries == null">\n\n            <md-card-title>\n\n                <md-card-title-text aria-label="{{pageElements.loadingText}}">\n\n                    <span>{{pageElements.loadingText}}</span>\n\n                </md-card-title-text>\n\n            </md-card-title>\n\n        </md-card>\n\n    </md-card>\n\n</md-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLogInfo; });
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


var CheckinLogInfo = (function () {
    function CheckinLogInfo(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CheckinLogInfo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLogInfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLogInfo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div text-center>\n\n        <img src="../../assets/imgs/feelings/face{{totalScore}}.png" class="feelingImg">         \n\n    </div>\n\n<!--    \n\n    <div layout="row" layout-align="center">\n\n        <div aria-label="{{pageElements.previousAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasPrev}" ng-click="prevEntry()">\n\n            <img src="imgs/leftArrow.png" class="arrow">\n\n        </div>\n\n        <div aria-label="{{pageElements.nextAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasNext}" ng-click="nextEntry()">\n\n            <img src="imgs/rightArrow.png" class="arrow">\n\n        </div>\n\n    </div>\n\n-->\n\n   \n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n        <button ion-button block>Aidez moi / Help Me</button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<md-content layout-align="start center" layout="column">\n\n\n\n    <img src="imgs/feelings/face{{checkinTotal}}.png" class="feelingImg"/>\n\n\n\n    <div layout="row" layout-align="center">\n\n        <div aria-label="{{pageElements.previousAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasPrev}" ng-click="prevEntry()">\n\n            <img src="imgs/leftArrow.png" class="arrow">\n\n        </div>\n\n        <div aria-label="{{pageElements.nextAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasNext}" ng-click="nextEntry()">\n\n            <img src="imgs/rightArrow.png" class="arrow">\n\n        </div>\n\n    </div>\n\n\n\n    <h3>{{pageElements.onText}} {{entry.date | date: \'longDate\'}}, {{pageElements.youWereFeelingText}}</h3>\n\n\n\n	<div layout="row"  layout-align="center center">\n\n		<div layout="column" class="dietBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.dietText}}: {{entry.dietScore}}">\n\n				<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="column" class="moodBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.moodText}}: {{entry.moodScore}}" layout-align="center center">\n\n				<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="row" class="stressBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.stressText}}: {{entry.stressScore}}">\n\n				<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="row" class="sleepBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.sleepText}}: {{entry.sleepScore}}">\n\n				<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n\n			</div>\n\n		</div>					\n\n	</div>\n\n					\n\n	\n\n	<!-- Center doesn\'t work atm -->\n\n<!--	<div layout="row" flex layout-align="center center">\n\n		<div flex aria-label="Notes: {{entry.entryNote}}">\n\n			<p ng-show="notesProvided" ng-bind="entry.entryNote" class="descriptionText"></p>\n\n			<p ng-show="!notesProvided" class="descriptionText">{{pageElements.noNotesText}}</p>\n\n		</div>\n\n	</div>\n\n</md-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CheckinLogInfo);
    return CheckinLogInfo;
}());

//# sourceMappingURL=checkinLogInfo.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CscContacts_cscContacts__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Employee_employee__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EmployeeFamily_employeeFamily__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Public_public__ = __webpack_require__(206);
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
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Resources.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Resources</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n    \n\n        <button ion-button block [navPush]="employee">CSC Employee</button>\n\n\n\n        <button ion-button block [navPush]="empfamily">CSC Employee Family</button>\n\n    \n\n        <button ion-button block [navPush]="public">Public</button>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href="#resources/employee" class="buttonLink">\n\n        <md-button class="md-primary md-raised">CSC Employee</md-button>\n\n    </a>\n\n    <a href="#resources/employeeFamily" class="buttonLink">\n\n        <md-button class="md-primary md-raised">CSC Employee Family</md-button>\n\n    </a>\n\n    <a href="#resources/public" class="buttonLink">\n\n        <md-button class="md-primary md-raised">Public</md-button>\n\n    </a>\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Resources.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Resources);
    return Resources;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 203:
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
            selector: 'page-cscContacts',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\CscContacts\cscContacts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CSCContacts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<div ng-controller="ResourcesCtrl as ctrl" ng-cloak>\n\n	<md-content class="md-padding">\n\n		<form ng-submit="$event.preventDefault()">\n\n			<md-autocomplete\n\n		          md-selected-item="ctrl.selectedItem"\n\n		          md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"\n\n		          md-search-text="ctrl.searchText"\n\n		          md-items="item in ctrl.querySearch(ctrl.searchText)"\n\n		          md-item-text="item.name"\n\n		          md-min-length="0"\n\n		          placeholder="Search for ...">\n\n		        <md-item-template>\n\n		          <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.name}}</span>\n\n		        </md-item-template>\n\n		        <md-not-found>\n\n		          No resource matching "{{ctrl.searchText}}" were found.\n\n		        </md-not-found>\n\n		    </md-autocomplete>\n\n       		<md-switch flex ng-model="gpsState" ng-change="updateList(gpsState)" ng-if="isGPSEnabled()" aria-label="gps">GPS Results <span>({{getProvince()}})</span></md-switch>\n\n	    </form>      \n\n	    <md-list md-whiteframe="3">\n\n	      <md-list-item class="md-2-line" ng-repeat="item in ctrl.querySearch(ctrl.searchText)">\n\n	      	<ng-md-icon class="md-avatar-icon" icon="person"></ng-md-icon>\n\n	        <div class="md-list-item-text">\n\n	          <h3>{{item.name}}</h3>\n\n	          <p>{{item.region_en}} / {{item.secion_en}}</p>\n\n	        </div>\n\n	          <md-menu class="md-secondary">\n\n			    <md-button class="md-icon-button">\n\n			      <ng-md-icon icon="more_vert" style="fill: gray"></ng-md-icon>\n\n			    </md-button>\n\n			    <md-menu-content width="2">\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'A call will be placed\')">\n\n			        	<ng-md-icon icon="call" style="fill: gray"></ng-md-icon>&nbsp;Call\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'An email will be sent\')">\n\n			         	<ng-md-icon icon="email" style="fill: gray"></ng-md-icon>&nbsp;E-mail\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			    </md-menu-content>\n\n			  </md-menu>\n\n	        <md-divider ng-if="!$last"></md-divider>\n\n	      </md-list-item>\n\n	    </md-list>\n\n  	</md-content>		\n\n</div>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\CscContacts\cscContacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CSCContacts);
    return CSCContacts;
}());

//# sourceMappingURL=cscContacts.js.map

/***/ }),

/***/ 204:
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
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Employee\employee.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Employee</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Employee Assistance Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Harassment Prevention Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Harassment Hot line</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>National Attendance Management Program</button>\n\n    </a>    \n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Critical Incident Stress Management</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Occupational Health and Safety</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Return to Work Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>CSC Contacts by Email</button>\n\n    </a>\n\n    <a href="https://www.sunlife.ca/" class="buttonLink">\n\n        <button ion-button block>Sunlife</button>\n\n    </a>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n	<a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n	\n\n	\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Employee\employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Employee);
    return Employee;
    var Employee_1;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 205:
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
            selector: 'page-family',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>EmployeeFam</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href=Employee class="buttonLink">\n\n        <button ion-button block >Employee Assistance Program</button>\n\n    </a>\n\n    \n\n    <a href="https://www.canada.ca/en/public-health/services/mental-health-services.html" class="buttonLink">\n\n        <button ion-button block >Mental Health Service</button>\n\n    </a>\n\n    \n\n    <a href="./pages/Resources/public" class="buttonLink">\n\n        <button ion-button block >CSC Family Support Number</button>\n\n    </a>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EmployeeFam);
    return EmployeeFam;
}());

//# sourceMappingURL=employeeFamily.js.map

/***/ }),

/***/ 206:
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
            selector: 'page-public',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Public\public.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Public</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href="tel:911" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:911">911</md-button>\n\n    </a>\n\n\n\n	<a href="http://ottawa.cmha.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="http://ottawa.cmha.ca/">Canadian Mental Health Association (CMHA)</md-button>\n\n    </a>\n\n	\n\n	<a href="tel:618161979" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:618161979">Call a friend</md-button>\n\n    </a>\n\n	\n\n</md-content>\n\n-->\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Resources\Public\public.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Public);
    return Public;
    var Public_1;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tools; });
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


var Tools = (function () {
    function Tools(navCtrl, navParams) {
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
    Tools_1 = Tools;
    Tools.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Tools_1, {
            item: item
        });
    };
    Tools = Tools_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tools',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Tools\toolStore.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tools</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<md-content ng-cloak>\n\n	<div ng-repeat="favouriteTool in favouritedTools" flex layout="row" layout-fill>\n\n		<md-card flex>\n\n			<md-card-title>\n\n				<md-card-title-media layout-padding>\n\n					<div flex class="border md-media-md card-media"></div>\n\n				</md-card-title-media>\n\n			\n\n				<md-card-title-text>\n\n					<span class="md-headline">{{favouriteTool.name}}</span>\n\n					<span class="md-subhead">Developed by {{favouriteTool.designedBy}}</span>\n\n				</md-card-title-text>\n\n			</md-card-title>\n\n			<md-card-content>\n\n				<p>{{favouriteTool.subDescription}}\n\n			</md-card-content>\n\n			\n\n			<md-card-actions layout="row" layout-padding layout-align="end end">\n\n				<md-button ng-click="goToTool(favouriteTool.link)" class="md-raised md-primary" aria-label="">Start Tool</md-button>\n\n				<md-button ng-click="removeToolFromFavourites(favouriteTool.toolID)" class="md-raised md-primary" aria-label="Unfavourite">Unfavourite</md-button>\n\n				<md-button ng-click="moreDetails(favouriteTool.toolID)" class="md-raised md-primary" aria-label="More Details">More Details</md-button>\n\n			</md-card-actions>\n\n		</md-card>\n\n	</div>\n\n	\n\n	<md-divider></md-divider>\n\n	\n\n	<div ng-repeat="tool in tools" flex layout="row" layout-fill>\n\n		<md-card flex>\n\n			<md-card-title>\n\n				<md-card-title-media layout-padding>\n\n					<div flex class="border md-media-md card-media"></div>\n\n				</md-card-title-media>\n\n			\n\n				<md-card-title-text>\n\n					<span class="md-headline">{{tool.name}}</span>\n\n					<span class="md-subhead">Developed by {{tool.designedBy}}</span>\n\n				</md-card-title-text>\n\n			</md-card-title>\n\n			<md-card-content>\n\n				<p>{{tool.subDescription}}\n\n			</md-card-content>\n\n			\n\n			<md-card-actions layout="row" layout-padding layout-align="end end">\n\n				<md-button ng-click="goToTool(tool.link)" class="md-raised md-primary" aria-label="">Start Tool</md-button>\n\n				<md-button ng-click="addToolToFavourites(tool.toolID)" class="md-raised md-primary" aria-label="Favourite Tool">Favourite</md-button>\n\n				<md-button ng-click="moreDetails(tool.toolID)" class="md-raised md-primary" aria-label="More Details">More Details</md-button>\n\n			</md-card-actions>\n\n		</md-card>\n\n	</div>\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Tools\toolStore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Tools);
    return Tools;
    var Tools_1;
}());

//# sourceMappingURL=toolStore.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
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


var Settings = (function () {
    function Settings(navCtrl, navParams) {
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
    Settings_1 = Settings;
    Settings.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Settings_1, {
            item: item
        });
    };
    Settings = Settings_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>\n\n<!--\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\pages\Settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Settings);
    return Settings;
    var Settings_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Dashboard_analyticDashboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Resources_resources__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Resources_CscContacts_cscContacts__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Employee_employee__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Resources_EmployeeFamily_employeeFamily__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Resources_Public_public__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Tools_toolStore__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Settings_settings__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_data_service_data_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// imports for SQL lite 



//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';













//plugins

//providers

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //    HomePage,
                //    ListPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_8__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_9__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Tools_toolStore__["a" /* Tools */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Settings_settings__["a" /* Settings */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //    HomePage,
                //    ListPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_8__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_9__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_15__pages_Tools_toolStore__["a" /* Tools */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Settings_settings__["a" /* Settings */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */] //Added for SQLite TJ 
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Resources_resources__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Tools_toolStore__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Settings_settings__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';


//import { CheckinLogInfo } from '../pages/WellnessTracker/CheckinLogInfo/checkinLogInfo';


//import { CSCContacts } from '../pages/Resources/CscContacts/cscContacts';
//import { Employee } from '../pages/Resources/Employee/employee';
//import { EmployeeFam } from '../pages/Resources/EmployeeFamily/employeeFamily';
//import { Public } from '../pages/Resources/Public/public';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__["a" /* Dashboard */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        // This is the list that populates the displayed Menu items.
        this.pages = [
            //      { title: 'Home', component: HomePage },
            //      { title: 'List', component: ListPage },
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__["a" /* Dashboard */] },
            { title: 'Daily Entry', component: __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */] },
            //      { title: 'Daily Log', component: CheckinLogInfo },
            { title: 'Checkin Log', component: __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
            { title: 'Resources', component: __WEBPACK_IMPORTED_MODULE_7__pages_Resources_resources__["a" /* Resources */] },
            //      { title: 'Contacts', component: CSCContacts },      // Not needed on main menu
            //      { title: 'Employee', component: Employee },
            //      { title: 'Employee Family', component: EmployeeFam },
            //      { title: 'Public', component: Public },
            { title: 'Tools', component: __WEBPACK_IMPORTED_MODULE_8__pages_Tools_toolStore__["a" /* Tools */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_9__pages_Settings_settings__["a" /* Settings */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\wellness\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\wellness\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//plugins
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = (function () {
    function DataServiceProvider(http) {
        this.http = http;
        //define the array wellness that will be used across all of the pages
        this.wellness = [];
        //uuid subscription number
        this.uuidsubscription = "cf22320c-c988-4350-a591-3b3f9b34999f";
    }
    //sort a json array by its property field alphabetically
    DataServiceProvider.prototype.sortByProperty = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        };
    };
    ;
    //adds an entry in the SQL Server database
    //You can push any JSONdata variable to the database.  if you wwant different element types, just update the wellness type variable accordingly
    DataServiceProvider.prototype.wellness_tracker_add = function (moodScore, sleepScore, stressScore, dietScore, entryNote) {
        try {
            var timeNow = new Date().toISOString();
            var link = 'https://countboard.com/mhapp/mhapp_element_create_app.php';
            var jsondata = JSON.stringify({ moodScore: moodScore, sleepScore: sleepScore, stressScore: stressScore, dietScore: dietScore, entryNote: entryNote, dateEntered: timeNow });
            var data = JSON.stringify({ uuidsubscription: this.uuidsubscription, elementtype: 'wellness', name: "Wellness Tracker Entry", description: "Optional Description Field", jsondata: jsondata });
            return this.http.post(link, data).map(function (res) { return res.json(); });
        }
        catch (err) {
            alert("An error was found: " + err);
        }
    };
    //pull the list of wellness elements from the SQL Server database
    DataServiceProvider.prototype.wellness_tracker_list = function (elementtype) {
        var link = 'https://countboard.com/mhapp/mhapp_elements_list_app.php';
        var data = JSON.stringify({ uuidsubscription: this.uuidsubscription, elementtype: elementtype });
        return this.http.post(link, data).map(function (res) { return res.json(); });
    };
    //generic AJAX function
    //generic async function
    DataServiceProvider.prototype.async = function (link, data) {
        return this.http.post(link, data).map(function (res) { return res.json(); });
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map