import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dailyEntry',
  templateUrl: 'dailyEntry.html'
})
export class DailyEntry {
    public mood = 5;
    public sleep = 5;
    public diet = 5;
    public stress = 5;
    
    constructor(public navCtrl: NavController ) {
    }
}
