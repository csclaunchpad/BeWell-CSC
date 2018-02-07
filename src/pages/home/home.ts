import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//services for SQLite FEB 2018
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { AddDataPage } from '../../providers/SQLiteDataServices/Add-Data/add-Data';
//import { EditDataPage } from '../../providers/SQLiteDataServices/Edit-Data/edit-Data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//Change me later  I was borrowed from https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
//    expenses: any = [];
    userRecord: any = [];
    totalIncome = 0;
    totalExpense = 0;
    balance = 0;

  constructor(public navCtrl: NavController, private sqlite: SQLite) {}

  // SQLite add ins
    ionViewDidLoad() {
        this.getData();
    }

    ionViewWillEnter() {
        this.getData();
    }

    getData() {
        this.sqlite.create({ name: 'wellness.db', location: 'default'}).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS expense(rowid INTEGER PRIMARY KEY, date TEXT, type TEXT, description TEXT, amount INT)', {})
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
            db.executeSql('SELECT * FROM expense ORDER BY rowid DESC', {})
            .then(res => {
                this.userRecord = [];
                for(var i=0; i<res.rows.length; i++) {
                    this.userRecord.push({rowid:res.rows.item(i).rowid,date:res.rows.item(i).date,type:res.rows.item(i).type,description:res.rows.item(i).description,amount:res.rows.item(i).amount})
                }
            })
            .catch(e => console.log(e));
            db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
            .then(res => {
                if(res.rows.length>0) {
                    this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                    this.balance = this.totalIncome-this.totalExpense;
                }
            })
            .catch(e => console.log(e));
            db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
            .then(res => {
                if(res.rows.length>0) {
                    this.totalExpense = parseInt(res.rows.item(0).totalExpense);
                    this.balance = this.totalIncome-this.totalExpense;
                }
            })
        }).catch(e => console.log(e));
    }

//    addData() {
//        this.navCtrl.push(AddDataPage);
//    }

//    editData(rowid) {
//        this.navCtrl.push(EditDataPage, {
//            rowid:rowid
//        });
//    }

    deleteData(rowid) {
        this.sqlite.create({name: 'wellness.db', location: 'default'}).then((db: SQLiteObject) => {
            db.executeSql('DELETE FROM expense WHERE rowid=?', [rowid]).then(res => {
                console.log(res);
                this.getData();
            })
            .catch(e => console.log(e));
        }).catch(e => console.log(e));
    }
    
    // End of SQLit Data Servies
}
