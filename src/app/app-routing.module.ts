import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LoginComponent } from "./auth/login/login.component";

import { SalesComponent } from "./components/sales/sales.component";
import { StaffComponent } from "./components/staff/staff.component";
import { StoresComponent } from "./components/stores/stores.component";

import { AuthGuard } from "./auth/auth.guard";
import { ReceiptComponent } from "./components/receipt/receipt.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "staff",
        component: StaffComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "sales",
        component: SalesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "stores",
        component: StoresComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "sales/:id",
        component: ReceiptComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
