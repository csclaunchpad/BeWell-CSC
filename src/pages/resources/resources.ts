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
        private translationService: TranslationService) 
    {
	
	this.authenticate();
	this.configuration();
    
	/*
        this.easObj =  {    empImg:"easObj.jpg", 
                            empContact:"tel:+15555555",
                            empPage:"easObj"     
        };        
        this.eapObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Contact EAP"     
        };
        this.cmhaObj = {    empUrl:"https://cmha.ca/", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"CAN Mental Health Association"     
        };
        this.cismObj = {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Critical Incident Stress Management"     
        };
        this.rmrObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Road to Mental Readiness"     
        };
        this.rwpObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Return to Work Program"     
        };
        this.ohsObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Occupational Health and Safety"     
        };
        this.hppObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Harassment Prevention Program"     
        };        

        this.hhlObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Harassment Hot line"     
        }; 
        this.sunObj =  {    empUrl:"http://www.sunlife.com", 
                            empEmail:"tel:+18887577427",
                            empTitle:"Sunlife"     
        };                                                    
        */
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
                this.pageElements = this.translationService.load("resources.html", "en");
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
    
    //opens resource link with details associated to the selection from the UI.
    GoToPage(name) {
		
        this.navCtrl.push( ResInfo, { pageName: name } )
    }
}
