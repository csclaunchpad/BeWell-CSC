import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';

// Import for Translation Service
import { TranslationService } from '../../../assets/services/translationService';

@Component({
    selector: 'page-resinfo',
    templateUrl: 'resinfo.html'
})
export class ResInfo {
    public resImg;
    public resEmail;
//    public resTitle;
    
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
                //this.pageElements = this.translationService.load("EmployeeProtectionProtocol", "en");
				//this.pageElements = this.translationService.load("EmployeeAssistanceServices", "en");
				//this.pageElements = this.translationService.load("CriticalIncidentStressManagement", "en");
				//this.pageElements = this.translationService.load("DutyToAccomodate", "en");
				//this.pageElements = this.translationService.load("EmployeeAssistanceProgram", "en");
				//this.pageElements = this.translationService.load("HarassmentPreventionProgram", "en");
				console.log(this.navParams);
				this.pageElements = this.translationService.load(this.navParams.get('pageName'), "en");
				
				
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
