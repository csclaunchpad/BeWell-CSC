// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';


// Local Storage Import
import { Storage } from '@ionic/storage';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

// Import for Translation Service
import { TranslationService } from '../../assets/services/translationService';

// Page Imports
import { ResInfo } from './ResPages/resinfo';
import { Public } from './Public/public';
import { Login } from '../home/Login/login/login';
import { EmpRev1 } from './Employee/Rev1/empRev1';
import { DailyEntry } from '../WellnessTracker/DailyEntry/dailyEntry';

@Component({
    selector: 'page-resources',
    templateUrl: 'resources.html'
})

export class Resources {
	
    resPublic = Public;
    emprev1 = EmpRev1;
    
    public easObj: any;
    public eapObj: any;
    public cmhaObj: any;
    public cismObj: any;
    public rmrObj: any;
    public rwpObj: any;
    public ohsObj: any;
    public hppObj: any;
    public hhlObj: any;
    public sunObj: any; 
    
    // The actual content of the page, fetched via translationService.ts
    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;
    
    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        private storage: Storage, 
        private translationService: TranslationService) {
	
		this.authenticate();
		this.configuration();
    
    }
    
    authenticate() {		
		// Fetch our login flag and check it's value, if it's null, the user is not logged in so redirect them to the login screen
		this.storage.get("userID").then((value) => {
            if(value == null) {
                this.navCtrl.setRoot(Login);
            }
            this.userID = value;
		});
    }
    
    configuration() {
		
        // Fetch the content from our language translation service
		var languageFlag = this.storage.get("languageFlag").then((value) => {
            if(value != null) {
                this.pageElements = this.translationService.load("resources.html", value);
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
	
	addData() {
		this.navCtrl.push(DailyEntry);
    }
    
    //opens resource link with details associated to the selection from the UI.
    GoToPage(name) {
		
        this.navCtrl.push( ResInfo, { pageName: name } )
    }
}
