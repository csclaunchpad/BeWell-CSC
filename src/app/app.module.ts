import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { TranslationService } from '../assets/services/translationService';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/home/Login/login/login';
import { LanguageSelection } from '../pages/languageSelection/languageSelection';
import { NewUser } from '../pages/home/Login/newUser/newUser';
import { RecoverUser } from '../pages/home/Login/recoverUser/recoverUser';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { CheckinLogInfo } from '../pages/WellnessTracker/CheckinLogInfo/checkinLogInfo';
import { Resources } from '../pages/Resources/resources';
import { CSCContacts } from '../pages/Resources/CscContacts/cscContacts';
import { Employee } from '../pages/Resources/Employee/employee';
import { EmployeeFam } from '../pages/Resources/EmployeeFamily/employeeFamily';
import { Public } from '../pages/Resources/Public/public';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { SignOut } from '../pages/home/Login/signout/signout';
import { Updates } from '../pages/updates/updates';
//import { Tools } from '../pages/tools/tools';
import { ResInfo } from '../pages/Resources/ResPages/resinfo';

import { AddData } from '../pages/add-data/add-data';

import { Assessment } from '../pages/Tools/assessment/assessment';


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
    LanguageSelection,
    RecoverUser,
    DailyEntry,
    Updates,
//    Tools,
    Assessment,
    CheckinLog,
    CheckinLogInfo,
    Resources,
    Dashboard,
    CSCContacts,
    Employee,
    EmployeeFam,
    Public,
    ResInfo,
    AddData
    ],
	imports: [
		BrowserModule,
		//BrowserAnimationsModule,
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
		LanguageSelection,
		DailyEntry,
		CheckinLog,
		Updates,
//		Tools,
		Assessment,
                CheckinLogInfo,
		Resources,
		Dashboard,
		CSCContacts,
		Employee,
		EmployeeFam,
		Public,
                ResInfo,
                AddData
	],
	providers: [
		StatusBar,
		SplashScreen,
		TranslationService,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		SQLite,
		Toast
	]
})
export class AppModule {}
