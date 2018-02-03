webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(196);
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
            selector: 'page-analyticDashboard',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Dashboard\analyticDashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Dashboard</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n \n\n\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n\n\n<ion-item>\n\n      <ion-icon  name="cloud-upload" item-start></ion-icon>\n\n   Wellness Entries\n\n   <ion-badge item-end>{{dataService.wellness.length}}</ion-badge>\n\n</ion-item>\n\n\n\n  </ion-card-header>\n\n\n\n  <ion-list>\n\n    <button ion-item ion-item *ngFor="let wellness of dataService.wellness" >\n\n      <ion-icon name="happy" item-start></ion-icon>\n\n     Mood Data: {{wellness.moodScore}}\n\n    </button>\n\n  </ion-list>\n\n</ion-card>\n\n\n\n\n\n<ion-card>\n\n  <ion-card-header>\n\n\n\n<ion-item>\n\n      <ion-icon  name="happy" item-start></ion-icon>\n\n Add an Entry\n\n   \n\n</ion-item>\n\n\n\n  </ion-card-header>\n\n\n\n  <ion-list>\n\n  \n\n  <ion-label >Mood</ion-label>\n\n <ion-range [(ngModel)]="moodScore" min="1" max="5">\n\n    <ion-icon range-left small name="sad"></ion-icon>\n\n    <ion-icon range-right name="happy"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Sleep</ion-label>\n\n <ion-range [(ngModel)]="sleepScore" min="1" max="5">\n\n    <ion-icon range-left small name="sunny"></ion-icon>\n\n    <ion-icon range-right name="moon"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Stress</ion-label>\n\n <ion-range [(ngModel)]="stressScore" min="1" max="5">\n\n    <ion-icon range-left small name="add"></ion-icon>\n\n    <ion-icon range-right name="remove"></ion-icon>\n\n  </ion-range>\n\n\n\n  <ion-label >Diet</ion-label>\n\n <ion-range [(ngModel)]="dietScore" min="1" max="5">\n\n    <ion-icon range-left small name="pizza"></ion-icon>\n\n    <ion-icon range-right name="bicycle"></ion-icon>\n\n  </ion-range>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label floating>Notes</ion-label>\n\n    <ion-input [(ngModel)]="entryNote" type="text"></ion-input>\n\n  </ion-item>\n\n\n\n<button ion-button full color="primary"   (click)="submitWellness()">Submit Wellness Score</button>\n\n\n\n\n\n  </ion-list>\n\n</ion-card>\n\n</ion-content>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n\n\n<!--  <md-content ng-cloak> \n\n<ion-content padding>\n\n	<div layout="column">  \n\n            <ion-card>\n\n                <ion-card-content>\n\n<!--            <md-card flex="50" class="slider" id="slider">\n\n			<!-- Question Selection -->\n\n<!--			<div layout="row">\n\n				<div layout="row" layout-padding layout-align="start center" flex>\n\n					<div layout="row">\n\n			<!--			<div class="moodText" layout="column" layout-padding>\n\n                                                   <ion-item>\n\n                                                        <ion-label>Pepperoni</ion-label>\n\n                                                        <ion-checkbox [(ngModel)]="userInput.moodCheckbox" aria-label="{{pageElements.moodCheckboxAL}}"></ion-checkbox>\n\n                                                    </ion-item>\n\n                                                    \n\n                        				<md-checkbox class="md-primary" ng-model="userInput.moodCheckbox" aria-label="{{pageElements.moodCheckboxAL}}">\n\n								{{pageElements.moodText}}\n\n							</md-checkbox>\n\n                        \n\n						</div>\n\n                        -->\n\n                        <!--                    \n\n						<div class="sleepText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.sleepCheckbox" aria-label="{{pageElements.sleepCheckboxAL}}">\n\n								{{pageElements.sleepText}}\n\n							</md-checkbox>\n\n						</div>\n\n						<div class="stressText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.stressCheckbox" aria-label="{{pageElements.stressCheckboxAL}}">\n\n								{{pageElements.stressText}}\n\n							</md-checkbox>\n\n						</div>\n\n						<div class="dietText" layout="column" layout-padding>\n\n							<md-checkbox class="md-primary" ng-model="userInput.dietCheckbox" aria-label="{{pageElements.dietCheckboxAL}}">\n\n								{{pageElements.dietText}}\n\n							</md-checkbox>\n\n						</div>\n\n                        -->\n\n<!--					</div>\n\n				</div>\n\n			</div>		\n\n          <!--      </md-card> -->\n\n<!--                </ion-card-content>\n\n        </ion-card>\n\n<!--		\n\n		<div flex ng-show="!pageElements.loadComplete && pageElements.loadStarted && !pageElements.hideAllElements">\n\n			<md-progress-linear md-mode="indeterminate"></md-progress-linear>\n\n		</div>\n\n		\n\n		<md-card ng-show="pageElements.hideAllElements" layout-align="center center">\n\n			<div aria-label="{{pageElements.noCheckinsFoundAL}}">\n\n				{{pageElements.noCheckinsFound}}!\n\n			</div>\n\n		</md-card>\n\n-->		\n\n		<!-- Graph -->\n\n<!--		<md-card>\n\n			<div layout="row">\n\n				<div id="chartDiv" layout-fill>\n\n					<canvas id="mainChart"></canvas>\n\n				</div>	\n\n			</div>\n\n		</md-card>\n\n			\n\n		<div layout="row"  layout-align="center center">\n\n			<div layout="column" class="dietBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.dietScoreAverageAL}} {{dietScoreAverage}}">\n\n					<strong>{{pageElements.dietText}}:<br></strong> {{dietScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="column" class="moodBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.moodScoreAverageAL}} {{moodScoreAverage}}">\n\n					<strong>{{pageElements.moodText}}:<br></strong> {{moodScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="row" class="stressBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.stressScoreAverageAL}} {{stressScoreAverage}}">\n\n					<strong>{{pageElements.stressText}}:<br></strong> {{stressScoreAverage}}\n\n				</div>\n\n			</div>\n\n			<div layout="row" class="sleepBackground" layout-align="center center">\n\n				<div aria-label="{{pageElements.sleepScoreAverageAL}} {{sleepScoreAverage}}">\n\n					<strong>{{pageElements.sleepText}}:<br></strong> {{sleepScoreAverage}}\n\n				</div>\n\n			</div>					\n\n		</div>		\n\n				\n\n		<div layout="column" layout-align="center center"  style="height: 100%;">\n\n			<div layout-padding aria-label="From Date">\n\n				<md-datepicker ng-model="userInput.fromDate" md-max-date="userInput.toDate" md-placeholder="Enter date"></md-datepicker>\n\n			</div>\n\n			<div layout-padding class="md-datePicker-align" aria-label="To Date">\n\n				<md-datepicker ng-model="userInput.toDate" md-min-date="userInput.fromDate" md-placeholder="Enter date"></md-datepicker>\n\n			</div>\n\n			<div layout="row">\n\n				<md-button class="md-raised md-primary buttonBold" ng-click="generateChart(userInput.fromDate, userInput.toDate, false)" aria-label="{{pageElements.toDateAL}}">{{pageElements.generateText}}</md-button>\n\n				<md-button class="md-raised md-primary buttonBold" ng-click="redirectToCheckinLog()" aria-label="{{pageElements.fromDateAL}}">{{pageElements.checkinLogText}}</md-button>\n\n			</div>\n\n		</div>\n\n                -->\n\n<!--	</div>\n\n</ion-content>\n\n<!-- </md-content>  -->\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Dashboard\analyticDashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
    ], Dashboard);
    return Dashboard;
}());

//# sourceMappingURL=analyticDashboard.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(283);
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

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyEntry; });
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


var DailyEntry = (function () {
    function DailyEntry(navCtrl) {
        this.navCtrl = navCtrl;
        this.mood = 5;
        this.sleep = 5;
        this.diet = 5;
        this.stress = 5;
    }
    DailyEntry = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dailyEntry',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>DailyEntry</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div text-center>\n\n        <img src="../../assets/imgs/feelings/face10.png" class="feelingImg"/>\n\n    </div>\n\n\n\n    <ion-list> \n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="moodScore" color="secondary" pin="true">\n\n                <ion-label range-left>Mood</ion-label>\n\n            </ion-range>\n\n        </ion-item>    \n\n    \n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="sleepScore" color="secondary" pin="true">\n\n                <ion-label range-left>Sleep</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="dietScore" color="secondary" pin="true">\n\n                <ion-label range-left>Diet</ion-label>\n\n            </ion-range>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="stressScore" color="secondary" pin="true">\n\n                <ion-label range-left>Stress</ion-label>\n\n            </ion-range>\n\n        </ion-item>    \n\n    </ion-list>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!-- <md-content>\n\n    <p>Trial 1 </p>\n\n </md-content> \n\n-->\n\n\n\n\n\n<!--\n\n<md-content layout-align="start center" layout="column" class="wt dailyEntry">\n\n\n\n    <img src="imgs/feelings/face{{totalScore}}.png" class="feelingImg"/>\n\n	\n\n	<div layout="row" layout-padding layout-align="center center">\n\n		<h2 class="sliderHeader" aria-label="{{pageElements.sliderHeaderText}}">\n\n			{{pageElements.sliderHeaderText}}\n\n		</h2>\n\n	</div>\n\n\n\n    <md-slider aria-label="{{pageElements.moodSliderAL}}" flex min="1" max="10" ng-model="moodScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-labe="{{pageElements.moodSentenceText}}">{{pageElements.moodSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.sleepSliderAL}}" flex min="1" max="10" ng-model="sleepScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-labe="{{pageElements.sleepSentenceText}}">{{pageElements.sleepSentenceText}}</h3>\n\n	\n\n    <md-slider aria-label="{{pageElements.dietSliderAL}}" flex min="1" max="10" ng-model="dietScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-labe="{{pageElements.dietSentenceText}}">{{pageElements.dietSentenceText}}</h3>\n\n\n\n    <md-slider aria-label="{{pageElements.stressSliderAL}}" flex min="1" max="10" ng-model="stressScore" class="slider md-primary" md-discrete></md-slider>\n\n    <h3 class="sliderHeader" aria-labe="{{pageElements.stressSentenceText}}">{{pageElements.stressSentenceText}}</h3>	\n\n\n\n    <md-input-container class="md-block descriptionContainer">\n\n        <label aria-label="{{pageElements.whatsOnYourMindAL}}">{{pageElements.whatsOnYourMindText}}</label>\n\n        <textarea ng-model="entryNote" md-maxlength="500" maxlength="500" class="descriptionText"></textarea>\n\n    </md-input-container>\n\n\n\n    <div>\n\n        <md-button class="md-raised md-primary" ng-click="saveEntry()" aria-label="{{pageElements.doneText}}">{{pageElements.doneText}}</md-button>\n\n    </div>\n\n\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\DailyEntry\dailyEntry.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], DailyEntry);
    return DailyEntry;
}());

//# sourceMappingURL=dailyEntry.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinLog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CheckinLogInfo_checkinLogInfo__ = __webpack_require__(200);
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
    function CheckinLog(navCtrl) {
        this.navCtrl = navCtrl;
        this.checkinLogInfo = __WEBPACK_IMPORTED_MODULE_2__CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */];
    }
    CheckinLog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkinLog',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLog</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content >\n\n    <div layout="row" layout-align="end center">\n\n        <a href="#dailyEntry">\n\n            <md-button class="md-raised md-primary" aria-label="{{pageElements.addNewEntryAL}}">{{pageElements.addNewEntryText}}</md-button>\n\n        </a>\n\n    </div>\n\n\n\n    <md-card>\n\n        <a ng-hide="entries == null" ng-repeat="entry in entries" href="#checkinLogInfo/{{::entry.entryID}}" class="entryItem">\n\n            <md-card>\n\n				<!-- Card Body -->\n\n<!--				<div layout="row">\n\n				\n\n					<!-- Date Space -->\n\n<!--					<div layout="row" layout-align="start center" flex="20">\n\n						<div flex aria-label="{{pageElements.dateEnteredAL}}: {{entry.dateEntered}}">\n\n							<strong>{{pageElements.dateText}}<br></strong> {{entry.dateEntered}}\n\n						</div>\n\n					</div>\n\n				\n\n					<!-- Question Score Space -->\n\n<!--					<div layout="row" layout-align="center center" flex="60">\n\n						<div layout="row" class="dietBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.dietScoreAL}}: {{entry.dietScore}}">\n\n								<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="moodBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.moodScoreAL}}: {{entry.moodScore}}">\n\n								<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="stressBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.stressScoreAL}}: {{entry.stressScore}}">\n\n								<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n\n							</div>\n\n						</div>\n\n						<div layout="row" class="sleepBackground" layout-align="center center">\n\n							<div aria-label="{{pageElements.sleepScoreAL}}: {{entry.sleepScore}}">\n\n								<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n\n							</div>\n\n						</div>\n\n						\n\n						\n\n					</div>\n\n					\n\n					<!-- Total Score Space -->\n\n<!--					<div layout="row" layout-align="end center" flex="20">\n\n						<div>\n\n							<div aria-label="{{pageElements.veryLowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore <= 10"><strong></strong> {{pageElements.veryLowText}} <br>({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.lowText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 11 && entry.entryScore <= 30"><strong></strong> {{pageElements.lowText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.roughText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 31 && entry.entryScore <= 40"><strong></strong> {{pageElements.roughText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.decentText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 41 && entry.entryScore <= 50"><strong></strong> {{pageElements.decentText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.goodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 51 && entry.entryScore <= 60"><strong></strong> {{pageElements.goodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.veryGoodText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 61 && entry.entryScore <= 75"><strong></strong> {{pageElements.veryGoodText}} ({{entry.entryScore}})</div>\n\n							<div aria-label="{{pageElements.amazingText}}: {{entry.entryScore}}" flex ng-show="entry.entryScore >= 76"><strong></strong> {{pageElements.amazingText}} ({{entry.entryScore}})</div>\n\n						</div>\n\n					</div>\n\n				</div>\n\n            </md-card>\n\n        </a>\n\n        <md-card ng-show="entries == null">\n\n            <md-card-title>\n\n                <md-card-title-text aria-label="{{pageElements.loadingText}}">\n\n                    <span>{{pageElements.loadingText}}</span>\n\n                </md-card-title-text>\n\n            </md-card-title>\n\n        </md-card>\n\n    </md-card>\n\n</md-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLog\checkinLog.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CheckinLog);
    return CheckinLog;
}());

//# sourceMappingURL=checkinLog.js.map

/***/ }),

/***/ 200:
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
            selector: 'page-checkinLogInfo',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CheckinLogInfo</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout-align="start center" layout="column">\n\n\n\n    <img src="imgs/feelings/face{{checkinTotal}}.png" class="feelingImg"/>\n\n\n\n    <div layout="row" layout-align="center">\n\n        <div aria-label="{{pageElements.previousAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasPrev}" ng-click="prevEntry()">\n\n            <img src="imgs/leftArrow.png" class="arrow">\n\n        </div>\n\n        <div aria-label="{{pageElements.nextAL}}" class="navArrowBtn" ng-class="{\'disabled\': !hasNext}" ng-click="nextEntry()">\n\n            <img src="imgs/rightArrow.png" class="arrow">\n\n        </div>\n\n    </div>\n\n\n\n    <h3>{{pageElements.onText}} {{entry.date | date: \'longDate\'}}, {{pageElements.youWereFeelingText}}</h3>\n\n\n\n	<div layout="row"  layout-align="center center">\n\n		<div layout="column" class="dietBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.dietText}}: {{entry.dietScore}}">\n\n				<strong>{{pageElements.dietText}}<br></strong> {{entry.dietScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="column" class="moodBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.moodText}}: {{entry.moodScore}}" layout-align="center center">\n\n				<strong>{{pageElements.moodText}}<br></strong> {{entry.moodScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="row" class="stressBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.stressText}}: {{entry.stressScore}}">\n\n				<strong>{{pageElements.stressText}}<br></strong> {{entry.stressScore}}\n\n			</div>\n\n		</div>\n\n		<div layout="row" class="sleepBackground" layout-align="center center">\n\n			<div aria-label="{{pageElements.sleepText}}: {{entry.sleepScore}}">\n\n				<strong>{{pageElements.sleepText}}<br></strong> {{entry.sleepScore}}\n\n			</div>\n\n		</div>					\n\n	</div>\n\n					\n\n	\n\n	<!-- Center doesn\'t work atm -->\n\n<!--	<div layout="row" flex layout-align="center center">\n\n		<div flex aria-label="Notes: {{entry.entryNote}}">\n\n			<p ng-show="notesProvided" ng-bind="entry.entryNote" class="descriptionText"></p>\n\n			<p ng-show="!notesProvided" class="descriptionText">{{pageElements.noNotesText}}</p>\n\n		</div>\n\n	</div>\n\n</md-content>\n\n-->\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\WellnessTracker\CheckinLogInfo\checkinLogInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CheckinLogInfo);
    return CheckinLogInfo;
}());

//# sourceMappingURL=checkinLogInfo.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resources; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CscContacts_cscContacts__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Employee_employee__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EmployeeFamily_employeeFamily__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Public_public__ = __webpack_require__(205);
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
            selector: 'page-resources',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Resources.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Resources</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    \n\n    <a href=Employee class="buttonLink">\n\n        <button ion-button block [navPush]="employee">CSC Employee</button>\n\n    </a>\n\n    \n\n    <a href="./pages/Resources/employeeFamily" class="buttonLink">\n\n        <button ion-button block [navPush]="empfamily">CSC Employee Family</button>\n\n    </a>\n\n    \n\n    <a href="./pages/Resources/public" class="buttonLink">\n\n        <button ion-button block [navPush]="public">Public</button>\n\n    </a>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href="#resources/employee" class="buttonLink">\n\n        <md-button class="md-primary md-raised">CSC Employee</md-button>\n\n    </a>\n\n    <a href="#resources/employeeFamily" class="buttonLink">\n\n        <md-button class="md-primary md-raised">CSC Employee Family</md-button>\n\n    </a>\n\n    <a href="#resources/public" class="buttonLink">\n\n        <md-button class="md-primary md-raised">Public</md-button>\n\n    </a>\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Resources.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Resources);
    return Resources;
}());

//# sourceMappingURL=resources.js.map

/***/ }),

/***/ 202:
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
            selector: 'page-cscContacts',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\CscContacts\cscContacts.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CSCContacts</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<div ng-controller="ResourcesCtrl as ctrl" ng-cloak>\n\n	<md-content class="md-padding">\n\n		<form ng-submit="$event.preventDefault()">\n\n			<md-autocomplete\n\n		          md-selected-item="ctrl.selectedItem"\n\n		          md-search-text-change="ctrl.searchTextChange(ctrl.searchText)"\n\n		          md-search-text="ctrl.searchText"\n\n		          md-items="item in ctrl.querySearch(ctrl.searchText)"\n\n		          md-item-text="item.name"\n\n		          md-min-length="0"\n\n		          placeholder="Search for ...">\n\n		        <md-item-template>\n\n		          <span md-highlight-text="ctrl.searchText" md-highlight-flags="^i">{{item.name}}</span>\n\n		        </md-item-template>\n\n		        <md-not-found>\n\n		          No resource matching "{{ctrl.searchText}}" were found.\n\n		        </md-not-found>\n\n		    </md-autocomplete>\n\n       		<md-switch flex ng-model="gpsState" ng-change="updateList(gpsState)" ng-if="isGPSEnabled()" aria-label="gps">GPS Results <span>({{getProvince()}})</span></md-switch>\n\n	    </form>      \n\n	    <md-list md-whiteframe="3">\n\n	      <md-list-item class="md-2-line" ng-repeat="item in ctrl.querySearch(ctrl.searchText)">\n\n	      	<ng-md-icon class="md-avatar-icon" icon="person"></ng-md-icon>\n\n	        <div class="md-list-item-text">\n\n	          <h3>{{item.name}}</h3>\n\n	          <p>{{item.region_en}} / {{item.secion_en}}</p>\n\n	        </div>\n\n	          <md-menu class="md-secondary">\n\n			    <md-button class="md-icon-button">\n\n			      <ng-md-icon icon="more_vert" style="fill: gray"></ng-md-icon>\n\n			    </md-button>\n\n			    <md-menu-content width="2">\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'A call will be placed\')">\n\n			        	<ng-md-icon icon="call" style="fill: gray"></ng-md-icon>&nbsp;Call\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			      <md-menu-item>\n\n			        <md-button ng-click="showInfoMessage(\'An email will be sent\')">\n\n			         	<ng-md-icon icon="email" style="fill: gray"></ng-md-icon>&nbsp;E-mail\n\n			        </md-button>\n\n			      </md-menu-item>\n\n			    </md-menu-content>\n\n			  </md-menu>\n\n	        <md-divider ng-if="!$last"></md-divider>\n\n	      </md-list-item>\n\n	    </md-list>\n\n  	</md-content>		\n\n</div>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\CscContacts\cscContacts.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CSCContacts);
    return CSCContacts;
}());

//# sourceMappingURL=cscContacts.js.map

/***/ }),

/***/ 203:
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
            selector: 'page-employee',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\employee.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Employee</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Employee Assistance Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee.html" class="buttonLink">\n\n        <button ion-button block>Harassment Prevention Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Harassment Hot line</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>National Attendance Management Program</button>\n\n    </a>    \n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Critical Incident Stress Management</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Occupational Health and Safety</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>Return to Work Program</button>\n\n    </a>\n\n    <a href="./pages/Resources/employee" class="buttonLink">\n\n        <button ion-button block>CSC Contacts by Email</button>\n\n    </a>\n\n    <a href="https://www.sunlife.ca/" class="buttonLink">\n\n        <button ion-button block>Sunlife</button>\n\n    </a>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <md-button class="md-primary md-raised">Employee Assistance Program</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Prevention Program</md-button>\n\n    <md-button class="md-primary md-raised">National Attendance Management Program</md-button>\n\n    <md-button class="md-primary md-raised">Critical Incident Stress Management</md-button>\n\n    <md-button class="md-primary md-raised">Occupational Health and Safety</md-button>\n\n    <md-button class="md-primary md-raised">Return to Work Program</md-button>\n\n    <md-button class="md-primary md-raised">CSC Contacts by Email</md-button>\n\n    <md-button class="md-primary md-raised">Harassment Hot line</md-button>\n\n	\n\n	<a href="href="https://www.sunlife.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="https://www.sunlife.ca/" >Sunlife</md-button>\n\n    </a>\n\n	\n\n	\n\n	\n\n\n\n</md-content>\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Employee\employee.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Employee);
    return Employee;
    var Employee_1;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 204:
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
            selector: 'page-family',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>EmployeeFam</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href=Employee class="buttonLink">\n\n        <button ion-button block >Employee Assistance Program</button>\n\n    </a>\n\n    \n\n    <a href="https://www.canada.ca/en/public-health/services/mental-health-services.html" class="buttonLink">\n\n        <button ion-button block >Mental Health Service</button>\n\n    </a>\n\n    \n\n    <a href="./pages/Resources/public" class="buttonLink">\n\n        <button ion-button block >CSC Family Support Number</button>\n\n    </a>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\EmployeeFamily\employeeFamily.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EmployeeFam);
    return EmployeeFam;
}());

//# sourceMappingURL=employeeFamily.js.map

/***/ }),

/***/ 205:
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
            selector: 'page-public',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Public\public.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Public</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n<!--\n\n<md-content layout="column" layout-align="start center" class="resources">\n\n\n\n    <h3 class="title">Choose the resource list that applies.</h3>\n\n\n\n    <a href="tel:911" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:911">911</md-button>\n\n    </a>\n\n\n\n	<a href="http://ottawa.cmha.ca/" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="http://ottawa.cmha.ca/">Canadian Mental Health Association (CMHA)</md-button>\n\n    </a>\n\n	\n\n	<a href="tel:618161979" class="buttonLink">\n\n        <md-button class="md-primary md-raised" href="tel:618161979">Call a friend</md-button>\n\n    </a>\n\n	\n\n</md-content>\n\n-->\n\n\n\n'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Resources\Public\public.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Public);
    return Public;
    var Public_1;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 206:
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
            selector: 'page-tools',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Tools\toolStore.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Tools</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <button ion-button block>Aidez moi / Help Me</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n\n\n<!--\n\n<md-content ng-cloak>\n\n	<div ng-repeat="favouriteTool in favouritedTools" flex layout="row" layout-fill>\n\n		<md-card flex>\n\n			<md-card-title>\n\n				<md-card-title-media layout-padding>\n\n					<div flex class="border md-media-md card-media"></div>\n\n				</md-card-title-media>\n\n			\n\n				<md-card-title-text>\n\n					<span class="md-headline">{{favouriteTool.name}}</span>\n\n					<span class="md-subhead">Developed by {{favouriteTool.designedBy}}</span>\n\n				</md-card-title-text>\n\n			</md-card-title>\n\n			<md-card-content>\n\n				<p>{{favouriteTool.subDescription}}\n\n			</md-card-content>\n\n			\n\n			<md-card-actions layout="row" layout-padding layout-align="end end">\n\n				<md-button ng-click="goToTool(favouriteTool.link)" class="md-raised md-primary" aria-label="">Start Tool</md-button>\n\n				<md-button ng-click="removeToolFromFavourites(favouriteTool.toolID)" class="md-raised md-primary" aria-label="Unfavourite">Unfavourite</md-button>\n\n				<md-button ng-click="moreDetails(favouriteTool.toolID)" class="md-raised md-primary" aria-label="More Details">More Details</md-button>\n\n			</md-card-actions>\n\n		</md-card>\n\n	</div>\n\n	\n\n	<md-divider></md-divider>\n\n	\n\n	<div ng-repeat="tool in tools" flex layout="row" layout-fill>\n\n		<md-card flex>\n\n			<md-card-title>\n\n				<md-card-title-media layout-padding>\n\n					<div flex class="border md-media-md card-media"></div>\n\n				</md-card-title-media>\n\n			\n\n				<md-card-title-text>\n\n					<span class="md-headline">{{tool.name}}</span>\n\n					<span class="md-subhead">Developed by {{tool.designedBy}}</span>\n\n				</md-card-title-text>\n\n			</md-card-title>\n\n			<md-card-content>\n\n				<p>{{tool.subDescription}}\n\n			</md-card-content>\n\n			\n\n			<md-card-actions layout="row" layout-padding layout-align="end end">\n\n				<md-button ng-click="goToTool(tool.link)" class="md-raised md-primary" aria-label="">Start Tool</md-button>\n\n				<md-button ng-click="addToolToFavourites(tool.toolID)" class="md-raised md-primary" aria-label="Favourite Tool">Favourite</md-button>\n\n				<md-button ng-click="moreDetails(tool.toolID)" class="md-raised md-primary" aria-label="More Details">More Details</md-button>\n\n			</md-card-actions>\n\n		</md-card>\n\n	</div>\n\n</md-content>\n\n\n\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Tools\toolStore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Tools);
    return Tools;
    var Tools_1;
}());

//# sourceMappingURL=toolStore.js.map

/***/ }),

/***/ 207:
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
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <button ion-button block>Aidez moi / Help Me</button>\n  </ion-toolbar>\n</ion-footer>\n\n<!--\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n-->'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\pages\Settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Settings);
    return Settings;
    var Settings_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Tools_toolStore__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Settings_settings__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_data_service_data_service__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //    HomePage,
                //    ListPage,
                __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Tools_toolStore__["a" /* Tools */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Settings_settings__["a" /* Settings */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //    HomePage,
                //    ListPage,
                __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__["a" /* DailyEntry */],
                __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLogInfo_checkinLogInfo__["a" /* CheckinLogInfo */],
                __WEBPACK_IMPORTED_MODULE_7__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */],
                __WEBPACK_IMPORTED_MODULE_8__pages_Resources_resources__["a" /* Resources */],
                __WEBPACK_IMPORTED_MODULE_9__pages_Resources_CscContacts_cscContacts__["a" /* CSCContacts */],
                __WEBPACK_IMPORTED_MODULE_10__pages_Resources_Employee_employee__["a" /* Employee */],
                __WEBPACK_IMPORTED_MODULE_11__pages_Resources_EmployeeFamily_employeeFamily__["a" /* EmployeeFam */],
                __WEBPACK_IMPORTED_MODULE_12__pages_Resources_Public_public__["a" /* Public */],
                __WEBPACK_IMPORTED_MODULE_13__pages_Tools_toolStore__["a" /* Tools */],
                __WEBPACK_IMPORTED_MODULE_14__pages_Settings_settings__["a" /* Settings */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_data_service_data_service__["a" /* DataServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Dashboard_analyticDashboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_WellnessTracker_DailyEntry_dailyEntry__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLog_checkinLog__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Resources_resources__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_Tools_toolStore__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_Settings_settings__ = __webpack_require__(207);
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


//import {CSCContacts} from '../pages/Resources/CscContacts/cscContacts';
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
            { title: 'Checking Log', component: __WEBPACK_IMPORTED_MODULE_6__pages_WellnessTracker_CheckinLog_checkinLog__["a" /* CheckinLog */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Tim\MobileAppProjects\ionicmhapp\bewell\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map