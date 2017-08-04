// import { Component, OnInit } from '@angular/core';
// import { Employee } from "app/shared/models/employee";
// import { EmployeesService } from "app/shared/services/employees.service";
// import { Router } from "@angular/router";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// @Component({
//   selector: 'app-employee-create',
//   templateUrl: './employee-create.component.html',
//   styleUrls: ['./employee-create.component.css']
// })
// export class EmployeeCreateComponent implements OnInit {
//   employee: Employee;
//   successMessage: string;
  
//   createForm: FormGroup;

//   empNoError: string;
 
//   constructor(private router: Router,
//               private empService: EmployeesService,
//               private fb: FormBuilder) { 
    
//   }

//   ngOnInit() {
//    this.employee = new Employee();
//    this.buildForm();
//   }

//   buildForm() {
//     this.createForm = this.fb.group({
//       emp_no: [ '', 
//                 [ Validators.required, 
//                   Validators.minLength(3), 
//                   Validators.maxLength(6)
//                 ]
//               ],
//       first_name: ['',  [Validators.required, 
//                   Validators.minLength(3)]
//                 ],
//       last_name: [''],
//       city: ['']
//     });



//     console.log(this.createForm);

//     this.createForm.valueChanges.subscribe(data => {
//       this.empNoError = '';
//       let empNoControl = this.createForm.get('emp_no');

//       if (empNoControl.dirty && empNoControl.invalid) {
//         console.log(empNoControl.errors);
//         if (empNoControl.errors['required'])
//           this.empNoError = 'Name is required';
//         if (empNoControl.errors['minlength'])
//           this.empNoError = 'Name should be minimum 3 characters';
//         if (empNoControl.errors['maxlength'])
//           this.empNoError = 'Name should not exceed 6 characters';
//       }

//       let firstNameControl = this.createForm.get('emp_no');
//       if (firstNameControl.dirty && firstNameControl.invalid) {
//         console.log(firstNameControl.errors);
//         if (firstNameControl.errors['required'])
//           this.empNoError = 'Name is required';
//         if (firstNameControl.errors['minlength'])
//           this.empNoError = 'Name should be minimum 3 characters';
//       }
//     });
//   }

//   createEmployee() {
//     this.empService.createEmployee(this.employee)
//           .subscribe((employee) => {
//             // console.log(employee);
//             // this.successMessage = 'Employee Created Successfully';
//             // setTimeout(() => this.successMessage = '', 2000); 
//             // this.employee = new Employee();

//             this.router.navigate(['/employees', employee.id]);
//           });
//   }

// }
