import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ChartsComponent } from './components/charts/charts.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AccountsComponent,
    ChartsComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
