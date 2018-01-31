import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { Dashboard } from '../pages/Dashboard/analyticDashboard';
import { DailyEntry } from '../pages/WellnessTracker/DailyEntry/dailyEntry';
//import { DailyLog } from '../pages/WellnessTracker/checkinLoginfo';
import { CheckinLog } from '../pages/WellnessTracker/CheckinLog/checkinLog';
import { Resources } from '../pages/Resources/resources';
import { Tools } from '../pages/Tools/toolStore';
import { Settings } from '../pages/Settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//plugins
import { HttpModule } from '@angular/http';

//providers
import { DataServiceProvider } from '../providers/data-service/data-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
//    ListPage,
    Dashboard,
    DailyEntry,
//    DailyLog,
    CheckinLog,
    Resources,
    Tools,
    Settings
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
//    ListPage,
    Dashboard,
    DailyEntry,
//   DailyLog,
    CheckinLog,
    Resources,
    Tools,
    Settings    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider
  ]
})
export class AppModule {}
