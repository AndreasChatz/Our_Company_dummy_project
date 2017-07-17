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
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

}
