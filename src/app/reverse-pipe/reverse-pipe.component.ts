import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipeComponent implements PipeTransform {
  transform(value) {
        if (!value) return;
  
        return value.reverse();
      }
}
