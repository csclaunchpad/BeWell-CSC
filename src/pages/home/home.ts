import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { Login } from './Login/login/login';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { DailyEntry } from '../WellnessTracker/DailyEntry/dailyEntry';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    userRecords: any = [];
    totalIncome = 0;
    totalExpense = 0;
    balance = 0;

    constructor(public navCtrl: NavController, private sqlite: SQLite, private storage: Storage) {
		
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
		});
    }
	
	test() {
		this.storage.get("userID").then((value) => {
			console.log(value);
		});
	}

    ionViewDidLoad() {
      this.getData();
    }

    ionViewWillEnter() {
      this.getData();
    }

    getData() {
      this.sqlite.create({
        name: 'ionicdb5.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, userID INT, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
		
        db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
        .then(res => {
          this.userRecords = [];
          for(var i=0; i<res.rows.length; i++) {
            this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote,amount:res.rows.item(i).amount})
          }
        }).catch(e => console.log(e));
      }).catch(e => console.log(e));
    }

    addData() {
      this.navCtrl.push(DailyEntry);
    }


    deleteData(rowid) {
      this.sqlite.create({
        name: 'ionicdb5.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM wellness WHERE rowid=?', [rowid])
        .then(res => {
          console.log(res);
          this.getData();
        })
        .catch(e => console.log(e));
      }).catch(e => console.log(e));
    }
    
    //------------------ Home Controller --------------------
//    (translationService){
//	this.setLanguage = function(language) {
//		localStorage.setItem("languageFlag", language);
//		$window.location.href = "Login";
//	}
//    }]);
    
}
