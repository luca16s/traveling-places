import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  standalone: true,
})
export class EnumKeysPipe implements PipeTransform {
  transform<TEnum extends object, TReturn extends TEnum>(
    input: TEnum
  ): TReturn[] {
    return Object.entries(input) as TReturn[];
  }
}
