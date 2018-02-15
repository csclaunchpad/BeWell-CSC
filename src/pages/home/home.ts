import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    userRecord: any = [];
    entryDate:string ="";
    moodScore:number = 5;
    sleepScore:number = 5;
    dietScore:number = 5;
    stressScore:number = 5;
    totalScore:number = 10;
    entryNote:string = "";

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private sqlite: SQLite ) {}

    ionViewDidLoad() {
        this.getData();
    }

    ionViewWillEnter() {
        this.getData();
    }

    getData() {
        this.sqlite.create({
        name: 'wellnessdb1.db',
        location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS wellnesstracker(rowid INTEGER PRIMARY KEY, entryDate TEXT, moodScore INT, sleepScore INT, dietScore INT, stressScore INT, totalScore INT, entryNote TEXT)', {})
            .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
            db.executeSql('SELECT * FROM userRecord ORDER BY rowid DESC', {})
            .then(res => {
                this.userRecord = [];
                for(var i=0; i<res.rows.length; i++) {
                    this.userRecord.push({ rowid:res.rows.item(i).rowid,
                    entryDate:res.rows.item(i).entryDate,
                    moodScore:res.rows.item(i).moodScore,
                    sleepScore:res.rows.item(i).sleepScore,
                    dietScore:res.rows.item(i).dietScore,
                    stressScore:res.rows.item(i).stressScore,
                    totalScore:res.rows.item(i).totalScore,
                    entryNote:res.rows.item(i).entryNote })
                }
            }).catch(e => console.log(e));
        }).catch(e => console.log(e));  
    }

    addData() {
        this.navCtrl.push(AddDataPage);
    }

    editData(rowid) {
        this.navCtrl.push(EditDataPage, { rowid:rowid });
    }

/*    deleteData(rowid) {
        this.sqlite.create({
            name: 'wellnessdb1.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
        db.executeSql('DELETE FROM wellnesstracker WHERE rowid=?', [rowid])
        .then(res => {
            console.log(res);
            this.getData();
        })
        .catch(e => console.log(e));
        }).catch(e => console.log(e));
    }
*/
}
