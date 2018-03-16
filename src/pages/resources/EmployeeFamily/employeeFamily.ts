import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from '../../../assets/services/translationService';

import { EAPInfo } from '../Employee/InfoPages/eapinfo';
import { ResInfo } from '../ResPages/resinfo';

@Component({
  selector: 'page-employeeFamily',
  templateUrl: 'employeeFamily.html'
})
export class EmployeeFam {
    eapinfo = EAPInfo;
    resinfo = ResInfo;

    public oneObj: any;
    public twoObj: any;
    public threeObj: any;
    public fourObj: any;
    public fiveObj: any;        
                
    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;   
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translationService: TranslationService) {
        
	this.authenticate();
        this.configuration();

        this.oneObj =  {    empUrl:"http://www.crisisline.ca/", 
                            empEmail:"tel:+18669960991",
                            empTitle:"Contact Crisisline"     
        };        
        this.twoObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Contact EAP"     
        };
        this.threeObj = {    empUrl:"https://cmha.ca/", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"CAN Mental Health Association"     
        };
        this.fourObj = {    empUrl:"https://www.canada.ca/en/public-health/services/mental-health-services.html", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Mental Health Service"     
        };
        this.fiveObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Road to Mental Readiness"     
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
                this.pageElements = this.translationService.load("employeeFamily.html", value);
		this.pageElementsLoaded = true;
		console.log(this.pageElements);
            } 
            else {
                console.log("No language flag set");
            }			
	});
    }    
}

