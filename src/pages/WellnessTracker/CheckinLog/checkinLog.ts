import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CheckinLogInfo } from '../CheckinLogInfo/checkinLogInfo';

@Component({
  selector: 'page-checkinLog',
  templateUrl: 'checkinLog.html'
})
export class CheckinLog {
    checkinLogInfo = CheckinLogInfo;
    constructor(public navCtrl: NavController) {
    }
}

