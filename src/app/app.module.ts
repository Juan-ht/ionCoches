import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Formulario } from '../pages/formulario/formulario';
import { ListaCoches } from '../pages/listaCoches/listaCoches';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CochesService } from '../servicios/coche.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDGGlwZ0HAyvmYXzT6exygPNRXq-JU6Ds4",
    authDomain: "ioncoches.firebaseapp.com",
    databaseURL: "https://ioncoches.firebaseio.com",
    projectId: "ioncoches",
    storageBucket: "",
    messagingSenderId: "218729396422"

};

@NgModule({
  declarations: [
    MyApp,
    Formulario,
    ListaCoches,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Formulario,
    ListaCoches,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CochesService
  ]
})
export class AppModule {}
