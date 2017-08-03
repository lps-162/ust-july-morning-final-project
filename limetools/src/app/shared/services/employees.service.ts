import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Employee } from "app/shared/models/employee";


@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees';

  constructor(private http: Http) { 

  }

  private handleError(err) {
    const errBody = err.json();
    let errMessage: string;
    console.log(errBody);
    if (errBody.error.statusCode === 404) {
      errMessage = '404: Resource Not Found';
    }
    
    return Observable.throw(errMessage);
  }

  getEmployees() {
    return this.http.get(this.employeesUrl)
            .map(response => response.json())
            .map(employees => employees.map(this.formatEmployee))
            .do(data => console.log(data))
            .catch(this.handleError)
  }

  private formatEmployee(empData) : Employee {
    let employee = new Employee();
    employee.id = empData.id;
    employee.first_name = empData.first_name;
    employee.last_name = empData.last_name;
    employee.city = empData.city;
    employee.emp_no = empData.emp_no;

    // generated properties
    employee.full_name = employee.first_name + ' ' + employee.last_name;

    return employee;
  }

  getEmployeeDetails(id) : Observable<Employee> {
    // `${this.employeesUrl}/${id}/projects`
    let empDetailsUrl = this.employeesUrl + '/' + id;
    return this.http.get(empDetailsUrl)
            .map(response => response.json())
            .map(this.formatEmployee)
            .catch(this.handleError);
  }

  createEmployee(employee) {

    return this.http.post(this.employeesUrl, employee)
            .map(response => response.json())
            .catch(this.handleError);
  }
}
