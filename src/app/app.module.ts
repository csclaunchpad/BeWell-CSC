import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { CSCContacts } from '../pages/Resources/CscContacts/cscContacts';
import { Employee } from '../pages/Resources/Employee/employee';
import { EmployeeFam } from '../pages/Resources/EmployeeFamily/employeeFamily';
import { Public } from '../pages/Resources/Public/public';
import { SQLTester } from '../pages/SQLTester/sqltester';


//import { AddDataPage } from '../pages/add-data/add-data';
//import { EditDataPage } from '../pages/edit-data/edit-data';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    DailyEntry,
    CheckinLog,
    Resources,
    SQLTester,
    CSCContacts,
    Employee,
    EmployeeFam,
    Public,
//    AddDataPage,
//    EditDataPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    DailyEntry,
    CheckinLog,
    Resources,
    SQLTester,
    CSCContacts,
    Employee,
    EmployeeFam,
    Public,
//    AddDataPage,
//    EditDataPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast
  ]
})
export class AppModule {}
