import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee;
  successMessage: string;

  constructor(private router: Router,
              private empService: EmployeesService) { 
    
  }

  ngOnInit() {
   this.employee = new Employee();


  }

  createEmployee() {
    this.empService.createEmployee(this.employee)
          .subscribe((employee) => {
            // console.log(employee);
            // this.successMessage = 'Employee Created Successfully';
            // setTimeout(() => this.successMessage = '', 2000); 
            // this.employee = new Employee();

            this.router.navigate(['/employees', employee.id]);
          });
  }

}
