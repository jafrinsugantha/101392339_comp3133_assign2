// // employees.component.ts

// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from './employees.services';

// @Component({
//   selector: 'app-employees',
//   templateUrl: './employees.component.html',
//   styleUrls: ['./employees.component.css']
// })
// export class EmployeesComponent implements OnInit {
//   employees: any[] = [];

//   constructor(private employeeService: EmployeeService) {}

//   ngOnInit(): void {
//     this.fetchEmployees();
//   }

//   fetchEmployees(): void {
//     this.employeeService.getEmployees()
//       .subscribe(employees => {
//         this.employees = employees;
//       });
//   }
// }
// employees.component.ts

// employees.component.ts

import { Component, OnInit } from '@angular/core';
import { Employee } from './employees.component';
import { EmployeeService } from './employees.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      error => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  updateEmployee(employeeId: number) {
    this.router.navigate(['/employees/update', employeeId]);
  }

  deleteEmployee(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      () => {
        // Remove the deleted employee from the list
        this.employees = this.employees.filter(employee => employee.id !== employeeId);
      },
      error => {
        console.error('Error deleting employee:', error);
      }
    );
  }
}
