import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'value',
  standalone: true,
})
export class EnumValuesPipe implements PipeTransform {
  transform<TEnum>(
    input: TEnum,
    mapper: Map<TEnum, string>
  ) {
    return mapper.get(input);
  }
}
