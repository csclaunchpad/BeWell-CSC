import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CSCContacts } from './CscContacts/cscContacts';
import { Employee } from './Employee/employee';
import { EmployeeFam } from './EmployeeFamily/employeeFamily';
import { Public } from './Public/public';
import { Login } from '../home/Login/login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-resources',
  templateUrl: 'resources.html'
})
export class Resources {
    cscContacts = CSCContacts;
    employee = Employee;
    empfamily = EmployeeFam;
    public = Public;
    
    constructor(public navCtrl: NavController, private storage: Storage) {
		this.storage.get("userID").then((value) => {
			if(value == null) {
				this.navCtrl.setRoot(Login);
			}
		});
	}

}
