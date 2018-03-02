import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditDataPage } from '../../edit-data/edit-data';
import { DailyEntry } from '../DailyEntry/dailyEntry';
import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';  //services for SQLite FEB 2018

@Component({
  selector: 'page-checkinLog',
  templateUrl: 'checkinLog.html'
})

export class CheckinLog {
//    checkinLogInfo = CheckinLogInfo;
//        dailyntry = DailyEntry;
    userRecords: any = [];
    totalIncome = 0;
    totalExpense = 0;
    balance = 0;


    constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite, private storage: Storage) {
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
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
        db.executeSql('CREATE TABLE IF NOT EXISTS wellness(rowid INTEGER PRIMARY KEY, date TEXT, moodScore INT, dietScore INT, sleepScore INT, stressScore INT, entryNote TEXT, amount INT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
        db.executeSql('SELECT * FROM wellness ORDER BY rowid DESC', {})
        .then(res => {
          this.userRecords = [];
          for(var i=0; i<res.rows.length; i++) {
            this.userRecords.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,moodScore:res.rows.item(i).moodScore,dietScore:res.rows.item(i).dietScore,sleepScore:res.rows.item(i).sleepScore,stressScore:res.rows.item(i).stressScore,entryNote:res.rows.item(i).entryNote,amount:res.rows.item(i).amount})
          }
        })
        .catch(e => console.log(e));
        db.executeSql('SELECT SUM(amount) AS totalIncome FROM wellness WHERE type="Income"', {})
        .then(res => {
          if(res.rows.length>0) {
            this.totalIncome = parseInt(res.rows.item(0).totalIncome);
            this.balance = this.totalIncome-this.totalExpense;
          }
        })
        .catch(e => console.log(e));
        db.executeSql('SELECT SUM(amount) AS totalExpense FROM wellness WHERE type="Expense"', {})
        .then(res => {
          if(res.rows.length>0) {
            this.totalExpense = parseInt(res.rows.item(0).totalExpense);
            this.balance = this.totalIncome-this.totalExpense;
          }
        })
      }).catch(e => console.log(e));
    }

    addData() {
      this.navCtrl.push(DailyEntry);
    }

    editData(rowid) {
      this.navCtrl.push(EditDataPage, {
        rowid:rowid
      });
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
}

