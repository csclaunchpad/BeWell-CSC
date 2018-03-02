import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login/login';
import { NewUser } from '../pages/home/Login/newUser/newUser';
import { RecoverUser } from '../pages/home/Login/recoverUser/recoverUser';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { CSCContacts } from '../pages/Resources/CscContacts/cscContacts';
import { Employee } from '../pages/Resources/Employee/employee';
import { EmployeeFam } from '../pages/Resources/EmployeeFamily/employeeFamily';
import { Public } from '../pages/Resources/Public/public';
import { SQLTester } from '../pages/SQLTester/sqltester';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { SignOut } from '../pages/home/Login/signout/signout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
	SignOut,
	NewUser,
	RecoverUser,
    DailyEntry,
    CheckinLog,
    Resources,
    SQLTester,
	Dashboard,
    CSCContacts,
    Employee,
    EmployeeFam,
    Public
//    AddDataPage,
//    EditDataPage
    
  ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		Login,
		SignOut,
		NewUser,
		RecoverUser,
		DailyEntry,
		CheckinLog,
		Resources,
		SQLTester,
		Dashboard,
		CSCContacts,
		Employee,
		EmployeeFam,
		Public   
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
