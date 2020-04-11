import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AccountsComponent } from './components/accounts/accounts.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'profile',
    component: ProfileComponent

  },
  {
    path: 'charts',
    component: ChartsComponent

  },
  {
    path: 'accounts',
    component: AccountsComponent

  }
]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
