// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Local Storage Import
import { Storage } from '@ionic/storage';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Import for Translation Service
import { TranslationService } from '../../assets/services/translationService';

// Page Imports
import { DailyEntry } from './DailyEntry/dailyEntry';
import { CheckinLog } from './CheckinLog/checkinLog';
import { Dashboard } from '../Dashboard/analyticDashboard';
import { Assessment } from '../Tools/assessment/assessment';

import { Login } from '../home/Login/login/login';


@Component({
    selector: 'page-wellnesstracker',
    templateUrl: 'wellnesstracker.html'
})

export class WellnessTracker {
    wellnesstracker = WellnessTracker;
    dailyentry = DailyEntry;
    checkinlog = CheckinLog;
    dashboard = Dashboard;
    assessment = Assessment;
        
    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;
    
    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        private storage: Storage, 
        private translationService: TranslationService) 
        {
            
	this.authenticate();
        this.configuration();
    }
    
    authenticate() {		
    // Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
	this.storage.get("userID").then((value) => {
            if(value == null) {
//                this.navCtrl.setRoot(Login);
            }
            this.userID = value;
	});
    }
    
    configuration() {
		
		// Fetch the content from our language translation service
		var languageFlag = this.storage.get("languageFlag").then((value) => {
				if(value != null) {
					this.pageElements = this.translationService.load("wellnesstracker.html", value);
			this.pageElementsLoaded = true;
			console.log(this.pageElements);
				} 
				else {
					console.log("No language flag set");
				}			
		});
    }
	
	//POP a page off the menu stack               
    goBack() {
        this.navCtrl.pop();
    } 
        
}
