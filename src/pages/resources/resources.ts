import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CSCContacts } from './CscContacts/cscContacts';
import { Employee } from './Employee/employee';
import { EmployeeFam } from './EmployeeFamily/employeeFamily';
import { Public } from './Public/public';

@Component({
  selector: 'page-resources',
  templateUrl: 'Resources.html'
})
export class Resources {
    cscContacts = CSCContacts;
    employee = Employee;
    empfamily = EmployeeFam;
    public = Public;
    
    constructor(public navCtrl: NavController) {
   
  }

}
