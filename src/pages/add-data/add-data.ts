import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

//@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

    data = { entryDate:"", moodScore:5, sleepScore:5, dietScore:5, stressScore:5, totalScore:10, entryNote:"" };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {}

  saveData() {
    this.sqlite.create({
      name: 'wellnessdb1.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO wellnesstracker VALUES(NULL,?,?,?,?,?,?,?)',
      [this.data.entryDate,
      this.data.moodScore,
      this.data.sleepScore,
      this.data.dietScore,
      this.data.stressScore,
      this.data.totalScore,
      this.data.entryNote])
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