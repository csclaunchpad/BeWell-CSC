import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Login } from '../../home/Login/login/login';
import { Storage } from '@ionic/storage';

import { EAPInfo } from '../Employee/InfoPages/eapinfo';
import { ResInfo } from '../ResPages/resinfo';

@Component({
    selector: 'page-employee',
    templateUrl: 'employee.html'
})

export class Employee {
    eapinfo = EAPInfo;
    resinfo = ResInfo;
    
    public clObj: any;
    public eapObj: any;
    public cmhaObj: any;
    public cismObj: any;
    public rmrObj: any;
    public rwpObj: any;
    public ohsObj: any;
    public hppObj: any;
    public hhlObj: any;
    public sunObj: any;
    
    
    constructor(public navCtrl: NavController, private storage: Storage) {
        this.storage.get("userID").then((value) => {
            if(value == null) {
                this.navCtrl.setRoot(Login);
            }
	});

        this.clObj =  {    empUrl:"http://www.crisisline.ca/", 
                            empEmail:"tel:+18669960991",
                            empTitle:"Contact Crisisline"     
        };        
        this.eapObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Contact EAP"     
        };
        this.cmhaObj = {    empUrl:"https://cmha.ca/", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"CAN Mental Health Association"     
        };
        this.cismObj = {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Critical Incident Stress Management"     
        };
        this.rmrObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Road to Mental Readiness"     
        };
        this.rwpObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Return to Work Program"     
        };
        this.ohsObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Occupational Health and Safety"     
        };
        this.hppObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Harassment Prevention Program"     
        };        
        this.hhlObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Harassment Hot line"     
        }; 
        this.sunObj =  {    empUrl:"http://www.lte-ene.ca/en/highlights/2015-11/mental-health-initiative", 
                            empEmail:"mailto:tim.jodoin@gmail.com",
                            empTitle:"Sunlife"     
        };         
              
                                                                    
    }
    
    //opens resource link with details associated to the selection from the UI.
    JumpToLink(empObj) {
        this.navCtrl.push( ResInfo, { empUrl: empObj.empUrl, empEmail: empObj.empEmail, empTitle: empObj.empTitle } )
//        this.navCtrl.push( ResInfo, { eapObj } )

    }

}
