import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NgReduxModule } from '@angular-redux/store';
import { StoreModule } from '../store/all_module';
import { HttpModule } from '@angular/http';
import { ListPageModule } from '../pages/list/list.module';
import { DetailsPageModule } from '../pages/details/details.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [ListPageModule,DetailsPageModule,
    BrowserModule,NgReduxModule,StoreModule,HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
