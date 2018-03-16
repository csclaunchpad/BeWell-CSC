import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

import * as $ from "jquery";

@Component({
    selector: 'page-resinfo',
    templateUrl: 'resinfo.html'
})
export class ResInfo {

    public resUrl;
    public resEmail;
    public resTitle;
    
    constructor(public navCtrl: NavController, 
        public navParams: NavParams, 
        private storage: Storage) 
    {    
        this.storage.get("userID").then((value) => {   
            if(value == null) {
                this.navCtrl.setRoot(Login);
            }    
        });
                
        this.resUrl = this.navParams.get("empUrl");        // Load link to content reference
        this.resEmail = this.navParams.get("empEmail");    // Load link to contact refernce 
        this.resTitle = this.navParams.get("empTitle");  // Load link to contact refernce 
   
    } 
    
    ionViewDidLoad() {
        this.loadLinkPage(this.resUrl);
    }

    loadLinkPage(url){
//                $('#loadExternalURL').load("https://cors-anywhere.herokuapp.com/"+this.resUrl);
    }

        
    itemTapped(event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ResInfo, {
            item: item
        });
    }
}
