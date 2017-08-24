import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
