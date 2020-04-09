import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule, RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from "@angular/material/sidenav";
import { LoginComponent } from 'src/app/auth/login/login.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    LoginComponent,
    RouterLink
  ]
})
export class DefaultModule { }
