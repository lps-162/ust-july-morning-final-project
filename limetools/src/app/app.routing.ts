import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "app/erp/home/home.component";
import { AboutComponent } from "app/erp/about/about.component";
import { EmployeesListComponent } from "app/erp/employees/employees-list/employees-list.component";
import { EmployeeDetailsComponent } from "app/erp/employees/employee-details/employee-details.component";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'employees',
        component: EmployeesListComponent
    },
    {
        path: 'employees/:id',
        component: EmployeeDetailsComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);
