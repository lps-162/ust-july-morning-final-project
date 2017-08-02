import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeesService {
  employeesUrl = 'http://localhost:3000/api/employees34';

  constructor(private http: Http) { 

  }

  getEmployees() {
    return this.http.get(this.employeesUrl)
            .map(response => response.json())
            .catch(err => {
              //console.log(err);
              return Observable.throw('Couldnt fetch Employees');
            });
  }

  getEmployeeDetails(id) {
    // `${this.employeesUrl}/${id}/projects`
    let empDetailsUrl = this.employeesUrl + '/' + id;
    return this.http.get(empDetailsUrl)
            .map(response => response.json());
  }

  createEmployee(employee) {

    return this.http.post(this.employeesUrl, employee)
            .map(response => response.json());
  }
}
