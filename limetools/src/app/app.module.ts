import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './erp/home/home.component';
import { AboutComponent } from './erp/about/about.component';
import { EmployeesListComponent } from './erp/employees/employees-list/employees-list.component';
import { NavbarComponent } from './erp/navbar/navbar.component';
import { appRouting } from './app.routing';
import { EmployeeDetailsComponent } from './erp/employees/employee-details/employee-details.component';
import { NotFoundComponent } from './erp/not-found/not-found.component';
import { EmployeeCreateComponent } from './erp/employees/employee-create/employee-create.component';
import { EmployeesSectionComponent } from './erp/employees/employees-section/employees-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeesListComponent,
    NavbarComponent,
    EmployeeDetailsComponent,
    NotFoundComponent,
    EmployeeCreateComponent,
    EmployeesSectionComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
