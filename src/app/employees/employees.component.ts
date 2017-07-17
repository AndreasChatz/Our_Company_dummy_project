import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/employee.model';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
