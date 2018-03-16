import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from '../../../assets/services/translationService';

import { EAPInfo } from '../Employee/InfoPages/eapinfo';
import { ResInfo } from '../ResPages/resinfo';

@Component({
    selector: 'page-employee',
    templateUrl: 'employee.html'
})

export class Employee {
    eapinfo = EAPInfo;
    resinfo = ResInfo;
    
    public clObj: any;
    public eapObj: any;
    public cmhaObj: any;
    public cismObj: any;
    public rmrObj: any;
    public rwpObj: any;
    public ohsObj: any;
    public hppObj: any;
    public hhlObj: any;
    public sunObj: any;

    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;    
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translationService: TranslationService) {

      	this.authenticate();
        this.configuration();
        
        this.clObj =  {     empUrl:"http://www.crisisline.ca/", 
                            empEmail:"tel:+18669960991",
                            empTitle:"Contact Crisisline"     
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
        this.sunObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Sunlife"     
        };                                                                         
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
                this.pageElements = this.translationService.load("employee.html", value);
		this.pageElementsLoaded = true;
		console.log(this.pageElements);
            } 
            else {
                console.log("No language flag set");
            }			
	});
    }        
    
    //opens resource link with details associated to the selection from the UI.
    JumpToLink(empObj) {
        this.navCtrl.push( ResInfo, { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle } )
//        this.navCtrl.push( ResInfo, { eapObj } )
    }
}
