import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'componentCard'
})
export class ComponentCardPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
