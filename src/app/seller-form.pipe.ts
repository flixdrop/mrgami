import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sellerForm'
})
export class SellerFormPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
