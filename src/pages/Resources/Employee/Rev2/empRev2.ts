import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../../home/Login/login/login';
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from '../../../../assets/services/translationService';

import { EAPInfo } from '../InfoPages/eapinfo';
import { ResInfo } from '../../ResPages/resinfo';

@Component({
    selector: 'page-empRev2',
    templateUrl: 'empRev2.html'
})

export class EmpRev2 {
    eapinfo = EAPInfo;
    resinfo = ResInfo;

    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;    

    public oneObj: any;
    public twoObj: any;     
        
        
    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translationService: TranslationService) {

      	this.authenticate();
        this.configuration();

        this.oneObj =  {    empUrl:"https://www.canada.ca/en/employment-social-development/services/health-safety/compensation/federal-employees.html", 
                            empEmail:"mailto:Address Needed",
                            empTitle:"Contact Workers’ Compensation"     
        };        
        this.twoObj =  {    empUrl:"https://www.canada.ca/en/treasury-board-secretariat/services/values-ethics/diversity-equity/disability-management/fundamentals-return-to-work-plan.html", 
                            empEmail:"mailto:PAE-GSIC_001.GEN_EAP-CISM@CSC-SCC.GC.CA",
                            empTitle:"Contact EAP"     
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
                this.pageElements = this.translationService.load("empRev2.html", value);
		this.pageElementsLoaded = true; 
		console.log(this.pageElements);
            } 
            else {
                console.log("No language flag set");
            }			
	});
    }        
    JumpToLink(empObj) {
        this.navCtrl.push( ResInfo, { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle } )
//        this.navCtrl.push( ResInfo, { eapObj } )
    }
    
    //POP a page off the menu stack        
    goBack() {
        this.navCtrl.pop();
    }

}
