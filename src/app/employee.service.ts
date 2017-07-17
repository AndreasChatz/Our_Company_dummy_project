import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Employee } from './models/employee.model';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  getEmployees(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(
        (response: Response) => {
          console.log(response.json());
          return response.json();
        }
      );
  }
}
