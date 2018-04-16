// ------------------------- Mandatory imports for all pages ------------------------- //
// Component Imports
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// SQLite3 Imports
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

// Local Storage Imports
import { Storage } from '@ionic/storage';

// Import for Translation Service
import { TranslationService } from '../../../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //
// Page Imports
import { Login } from '../../../home/Login/login/login';

// Page Imports
import { HomePage } from '../../../home/home';

// Moment (Date framework) Import
import * as moment from 'moment';

//@IonicPage()
@Component({
  selector: 'page-selfAssessment',
  templateUrl: 'selfAssessment.html'
})
export class SelfAssessment {
	
	// ------------------------- Mandatory variables for all pages ------------------------- //
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	private userID: string;
        
        private scoreBadge: string;
	
	// ------------------------- Page Specific Variables ------------------------- //
	
	data = { date:"", Q1:5, Q2:5, Q3:5, Q4:5, Q5:5, Q6:5, Q7:5, Q8:5, Q9:5, Q10:5, Q11:5, Q12:5 };

	constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private toast: Toast, private storage: Storage, private translationService: TranslationService) {
		this.authenticate();
		this.configuration();
	}
	
	configuration() {
		var languageFlag = this.storage.get("languageFlag").then((value) => {
			if(value != null) {
				this.pageElements = this.translationService.load("dailyEntry.html", value);
				this.pageElementsLoaded = true;
			} else {
				// Handle null language flag
			}
		});
	}
	
	authenticate() {
		this.storage.get("userID").then((value) => {
			if(value == null) {
//                            this.navCtrl.setRoot(Login);
			}
			this.userID = value;
		});	
	}
	
	updateScores(selectedValue: any) {
            console.log("HIT");
            var score = (this.data.Q1+this.data.Q2+this.data.Q3+this.data.Q4+this.data.Q5+this.data.Q6+this.data.Q7+this.data.Q8+this.data.Q9+this.data.Q10+this.data.Q11+this.data.Q12);
            /*
            if(score < 12*10/4){
                this.scoreBadge = "Healthy.png";
            }
            else if(score < 12*10/2){
                this.scoreBadge = "Reacting.png";
            }
            else if(score < ((12*10/2)+(12*10/4))){
                this.scoreBadge = "Injured.png";
            }
            else(score < 12*10){
                this.scoreBadge = "Ill.png";
            }
            */       
	}

}