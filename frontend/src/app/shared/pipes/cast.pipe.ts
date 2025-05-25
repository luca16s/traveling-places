import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
    name: 'as',
    standalone: true
})
export class CastPipe implements PipeTransform {
  transform<TValue, TReturn>(
    input: TValue,
    convertFn: (value: TValue) => TReturn
  ): TReturn {
    return convertFn(input);
  }
}
