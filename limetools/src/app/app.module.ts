import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './erp/home/home.component';
import { AboutComponent } from './erp/about/about.component';
import { EmployeesListComponent } from './erp/employees/employees-list/employees-list.component';
import { NavbarComponent } from './erp/navbar/navbar.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeesListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
