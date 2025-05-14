import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ncm',
  standalone: true,
})
export class NcmPipe implements PipeTransform {
  private SEPARATOR: string = '.';

  transform(value: string): string {
    return value === ''
      ? ''
      : `${value.substring(0, 2)}${this.SEPARATOR}${value.substring(2, 4)}${
          this.SEPARATOR
        }${value.substring(4, 6)}${this.SEPARATOR}${value.substring(6, 8)}`;
  }
}
