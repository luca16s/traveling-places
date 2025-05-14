import { CurrencyPipe } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[isoCurrency]',
})
export class CurrencyDirective {
  constructor(private input: MatInput, private currency: CurrencyPipe) {}

  @HostListener('change', ['$event.target.value'])
  onChange(value: string): void {
    this.input.value = this.currency.transform(value);
  }
}
