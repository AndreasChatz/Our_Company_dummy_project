import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLowerCase'
})
export class UpperLowerCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
