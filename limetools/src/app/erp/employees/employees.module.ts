import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { employeesRouting } from "app/erp/employees/employees.routing";
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";
import { EmployeeCreateComponent } from "app/erp/employees/employee-create/employee-create.component";
import { EmployeesSectionComponent } from "app/erp/employees/employees-section/employees-section.component";
import { EmployeesService } from "app/shared/services/employees.service";

@NgModule({
  imports: [
    CommonModule,
    employeesRouting,
    HttpModule,
    FormsModule
  ],
  declarations: [
    EmployeesListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeesSectionComponent
  ],
  providers: [
    EmployeesService
  ]
})
export class EmployeesModule { }
