import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperLowerCase'
})
export class UpperLowerCasePipe implements PipeTransform {

  transform(value: any) {
    const wordArray: string [] = value.split('');
    let upperLowerArray: string [] = [];
    for (let i=0; i < wordArray.length; i++) {
      if (i%2 === 0) {
        upperLowerArray.push(wordArray[i].toUpperCase());
      } else {
        upperLowerArray.push(wordArray[i].toLowerCase());
      }
    }
    return upperLowerArray.join('');
  }

}
