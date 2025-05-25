import { Directive, HostListener } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { NcmPipe } from '../pipes/ncm.pipe';

@Directive({
  selector: '[isoNcm]',
})
export class NcmDirective {
  constructor(private ncmPipe: NcmPipe, private input: MatInput) {}

  @HostListener('change', ['$event.target.value'])
  onChange(value: string): void {
    this.input.value = this.ncmPipe.transform(value);
  }
}
