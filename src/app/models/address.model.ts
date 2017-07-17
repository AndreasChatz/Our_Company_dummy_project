import { Geo } from './geo.model';

export class Address {

  constructor(public street: string, public suite: string,
              public city: string, public zipcode: string,
              public geo: Geo,){
    this.street  = street;
    this.suite   = suite;
    this.city    = city;
    this.zipcode = zipcode;
    this.geo     = geo;
  }
}
