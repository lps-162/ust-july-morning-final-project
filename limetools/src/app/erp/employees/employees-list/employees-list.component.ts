import { Component, OnInit } from '@angular/core';
import { EmployeesService } from "app/shared/services/employees.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  gridData;
  errorMessage;
  
  constructor(private empService: EmployeesService) { }

  ngOnInit() {
    this.empService.getEmployees()
      .subscribe(employees => this.gridData = employees,
                 err => console.log(err));
    
  }

}
