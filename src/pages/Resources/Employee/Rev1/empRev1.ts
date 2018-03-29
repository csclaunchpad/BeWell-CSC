import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../../home/Login/login/login';
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from '../../../../assets/services/translationService';


@Component({
    selector: 'page-empRev1',
    templateUrl: 'empRev1.html'
})

export class EmpRev1 {

    private pageElements: Object;
	
    // Controls whether our view is loaded based off of if pageElements has been loaded
    private pageElementsLoaded: boolean = false;   

    private userID: string;    
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translationService: TranslationService) {

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
                this.pageElements = this.translationService.load("empRev1.html", value);
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
