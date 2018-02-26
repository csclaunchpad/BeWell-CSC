import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { AddDataPage } from '../add-data/add-data';
import { DailyEntry } from '../WellnessTracker/DailyEntry/dailyEntry';

//import { EditDataPage } from '../edit-data/edit-data';

@Component({
    selector: 'sqltester-home',
    templateUrl: 'sqltester.html'
})
export class SQLTester {

    userRecords: any = [];
    totalIncome = 0;
    totalExpense = 0;
    balance = 0;


    constructor(public navCtrl: NavController, private sqlite: SQLite) {

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
