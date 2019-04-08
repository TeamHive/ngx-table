import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeLabel'
})
export class ActiveLabelPipe implements PipeTransform {
  transform(value: boolean): string {
    return value === true ? 'Active' : 'Inactive';
  }
}
