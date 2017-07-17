import { Injectable } from '@angular/core';

import { Employee } from './models/employee.model';

@Injectable()
export class EmployeeService {
  private employees: Employee [] =
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "userName": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": -37.3159,
          "lng": 81.1496
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
  ];

  constructor() { }

  getEmployees(): Employee[] {
    return this.employees.slice();
  }
}
