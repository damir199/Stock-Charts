import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { SearchBarComponent } from "src/app/shared/components/search-bar/search-bar.component";

import { FlexLayoutModule } from "@angular/flex-layout";

import { ReactiveFormsModule } from "@angular/forms/";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "../modules/dashboard/dashboard.component";
import { ErrorComponent } from "../error/error/error.component";
import { AngularMaterialModule } from "../modules/angular-material/angular-material.module";
import { SalesComponent } from "../components/sales/sales.component";
import { ReceiptComponent } from "../components/receipt/receipt.component";

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    SalesComponent,
    SearchBarComponent,
    ReceiptComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ErrorComponent,
    SalesComponent,
    SearchBarComponent,
    ReceiptComponent,
  ],
})
export class SharedModule {}
