import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import * as moment from 'moment';

//@IonicPage()
@Component({
  selector: 'page-dailyEntry',
  templateUrl: 'dailyEntry.html'
})
export class DailyEntry {

  data = { date:"", moodScore:5, dietScore:5, sleepScore:5, stressScore:5, entryNote:"" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {}

  saveData() {
    this.sqlite.create({
      name: 'ionicdb5.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO wellness VALUES(NULL,?,?,?,?,?,?,?)',[moment().format('YYYY-MM-DD HH:mm:ss'),this.data.moodScore,this.data.dietScore,this.data.sleepScore,this.data.stressScore,this.data.entryNote])
        .then(res => {
          console.log(res);
          this.toast.show('Data saved', '5000', 'center').subscribe(
            toast => {
              this.navCtrl.popToRoot();
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