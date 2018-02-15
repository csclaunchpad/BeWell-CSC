import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

//@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

      data = { rowid:0, entryDate:"", moodScore:5, sleepScore:5, dietScore:5, stressScore:5, totalScore:10, entryNote:""};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private sqlite: SQLite,
    private toast: Toast) {
      this.getCurrentData(navParams.get("rowid"));
  }

  getCurrentData(rowid) {
    this.sqlite.create({
      name: 'wellnessdb1.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM wellnesstracker WHERE rowid=?', [rowid])
        .then(res => {
          if(res.rows.length > 0) {
            this.data.rowid = res.rows.item(0).rowid;
            this.data.entryDate = res.rows.item(0).entryDate;
            this.data.moodScore = res.rows.item(0).moodScore;
            this.data.sleepScore = res.rows.item(0).sleepScore;
            this.data.dietScore = res.rows.item(0).dietScore;
            this.data.stressScore = res.rows.item(0).stressScore;  
            this.data.entryNote = res.rows.item(0).entryNote;
          }
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

  updateData() {
    this.sqlite.create({
      name: 'wellnessdb1.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('UPDATE wellnesstracker SET entryDate=?,moodScore=?,sleepScore=?,dietScore=?,stressScore=?,totalScore=?,entryNote=? WHERE rowid=?',
      [this.data.entryDate,
      this.data.moodScore,
      this.data.sleepScore,
      this.data.dietScore,
      this.data.stressScore,
      this.data.totalScore,
      this.data.entryNote,
      this.data.rowid])
        .then(res => {
          console.log(res);
          this.toast.show('Data updated', '5000', 'center').subscribe(
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