import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/employee.model';
// import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Observable<any>;
  showEmployees: Boolean = true;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

  }

  onFetchEmployees() {
    this.employees = this.employeeService.getEmployees();
    this.showEmployees = !this.showEmployees;
  }

}
