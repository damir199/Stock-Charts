import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";

import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from "@angular/forms";
import { CardComponent } from "./widgets/card/card.component";
import { DashboardComponent } from "../modules/dashboard/dashboard.component";
import { ErrorComponent } from "../error/error/error.component";
import { AngularMaterialModule } from "../modules/angular-material/angular-material.module";
import { StoresComponent } from '../components/stores/stores.component';
import { SalesComponent } from '../components/sales/sales.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    ErrorComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    CardComponent,
    DashboardComponent,
    ErrorComponent,
    SalesComponent
  ],
})
export class SharedModule {}
