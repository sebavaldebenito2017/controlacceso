import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteServices } from '../services/note.services';
import { DetallePage } from '../pages/detalle/detalle';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAHA3qzNN5wzr91Bn72KLnpxn9t7WlVVdY",
  authDomain: "controlusuarios-f47ee.firebaseapp.com",
  databaseURL: "https://controlusuarios-f47ee.firebaseio.com",
  storageBucket: "controlusuarios-f47ee.appspot.com",
  messagingSenderId: '605229745256'
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteServices
  ]
})
export class AppModule {}
