import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './erp/home/home.component';
import { AboutComponent } from './erp/about/about.component';
import { NavbarComponent } from './erp/navbar/navbar.component';
import { appRouting } from './app.routing';
import { NotFoundComponent } from './erp/not-found/not-found.component';
import { EmployeesModule } from "app/erp/employees/employees.module";
import { EmployeesService } from "app/shared/services/employees.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    
    //EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
