import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartsComponent } from './components/charts/charts.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {
  path:'',
  component: DefaultComponent,
  children: [
    {
    path: '',
    component: DashboardComponent
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

  },
]

},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
