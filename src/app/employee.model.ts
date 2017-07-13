import { Address } from './address.model';
import { Company } from './company.model';

export class Employee {

  constructor(public id: number, public name: string,
              public userName: string, public email: string,
              public address: Address, public phone,
              public website, public company: Company) {
      this.id       = id;
      this.name     = name;
      this.userName = userName;
      this.email    = email;
      this.address  = address;
      this.phone    = phone;
      this.website  = website;
      this.company  = company;
    }
}
