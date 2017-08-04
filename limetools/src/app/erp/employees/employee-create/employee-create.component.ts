import { Component, OnInit } from '@angular/core';
import { Employee } from "app/shared/models/employee";
import { EmployeesService } from "app/shared/services/employees.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee;
  errorMessage: string;
  
  createForm: FormGroup;
  isFormValid: boolean;

  formErrors = {
      emp_no: '',
      first_name: '',
      last_name: '',
      city: ''
    };

    validationMessages = {
      emp_no: {
        'required': 'Emp No is required',
        'minlength': 'Emp No should be of 3 characters',
        'maxlength': 'Emp No should not exceed 6 characters'
      },
      first_name: {
        'required': 'First name is required',
        'minlength': 'First name should be of 5 characters',
        'maxlength': 'First name should not exceed 20 characters'
      },
      last_name: {
        'required': 'Last name is required',
        'minlength': 'Last name should be of 2 characters',
        'maxlength': 'Last name should not exceed 5 characters'
      },
      city: {
        'required': 'City name is required'
      }
    };

 
  constructor(private router: Router,
              private empService: EmployeesService,
              private fb: FormBuilder) { 
    
  }

  ngOnInit() {
   this.employee = new Employee();
   this.isFormValid = false;
   this.buildForm();
  }

  buildForm() {
    this.createForm = this.fb.group({
      emp_no: [ '', 
                [ Validators.required, 
                  Validators.minLength(3), 
                  Validators.maxLength(6)
                ]
              ],
      first_name: ['',  
                 [
                  Validators.required, 
                  Validators.minLength(5),
                  Validators.maxLength(20)]
                ],
      last_name: ['',
                    [
                    Validators.required, 
                    Validators.minLength(2),
                    Validators.maxLength(5)
                    ]
                ],
      city: ['', Validators.required]
    });



    console.log(this.createForm);

    this.createForm.valueChanges.subscribe(data => {

      // looping thru fields and setting up errors
      for (let field in this.formErrors) {
        this.formErrors[field] = '';
        let input = this.createForm.get(field);

        if (input.invalid && input.dirty) {
          for (let err in input.errors) {
            this.formErrors[field] = this.validationMessages[field][err];
            console.log('Generic error handling');
          }
        }
      }

      //this.employee = data; 
      this.isFormValid = this.createForm.valid;
    });
  }

  createEmployee() {
      console.log(this.createForm);

    this.empService.createEmployee(this.createForm.value)
          .subscribe((employee) => {
            // console.log(employee);
            // this.successMessage = 'Employee Created Successfully';
            // setTimeout(() => this.successMessage = '', 2000); 
            // this.employee = new Employee();

            this.router.navigate(['/employees', employee.id]);
          },
          errorMessage => {
              this.errorMessage = errorMessage;
          });
  }

}
