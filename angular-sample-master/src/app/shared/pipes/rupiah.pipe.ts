import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah'
})
export class RupiahPipe implements PipeTransform {

  transform(value: any, currency: string): any {
    return (currency ? currency : "Rp. ") +value;
  }

}
