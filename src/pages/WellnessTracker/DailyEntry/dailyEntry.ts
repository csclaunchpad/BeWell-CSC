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
import { TranslationService } from './../../../assets/services/translationService';

// ------------------------- Page Specific Imports ------------------------- //

// Page Imports
import { Login } from '../../home/Login/login/login';
import { CheckinLog } from '../CheckinLog/checkinLog';

// Moment (Date framework) Import
import * as moment from 'moment';

//@IonicPage()
@Component({
  selector: 'page-dailyEntry',
  templateUrl: 'dailyEntry.html'
})
export class DailyEntry {
	
	// ------------------------- Mandatory variables for all pages ------------------------- //
	
	// The actual content of the page, fetched via translationService.ts
	private pageElements: Object;
	
	// Controls whether our view is loaded based off of if pageElements has been loaded
	private pageElementsLoaded: boolean = false;
	
	private userID: string;
	
	// ------------------------- Page Specific Variables ------------------------- //
	
	data = { date:"", moodScore:5, dietScore:5, sleepScore:5, stressScore:5, entryNote:"" };

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
				this.navCtrl.setRoot(Login);
			}
			this.userID = value;
		});	
	}
	
	updateScores(selectedValue: any) {
		console.log("HIT");
	}

  saveData() {
    this.sqlite.create({
      name: 'ionicdb5.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?,?)',[this.userID, moment().format('YYYY-MM-DD HH:mm:ss'),this.data.moodScore,this.data.dietScore,this.data.sleepScore,this.data.stressScore,this.data.entryNote])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.setRoot(CheckinLog);
            }
          );
        })
        .catch(e => {
          console.log(e);
          this.toast.show(e, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );
        });
    }).catch(e => {
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }
}