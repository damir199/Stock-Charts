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
import { WorkshopComponent } from "./components/workshop/workshop.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        component: WorkshopComponent,
      },
      {
        path: "staff",
        component: StaffComponent,
      },
      {
        path: "sales",
        component: SalesComponent,
      },
      {
        path: "stores",
        component: StoresComponent,
      },
      {
        path: "sales/:id",
        component: ReceiptComponent,
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
