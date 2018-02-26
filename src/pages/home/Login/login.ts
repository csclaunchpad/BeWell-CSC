import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
//import { AddDataPage } from '../add-data/add-data';

//import { EditDataPage } from '../edit-data/edit-data';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class Login {


    constructor(public navCtrl: NavController, private sqlite: SQLite) {

    }




}
