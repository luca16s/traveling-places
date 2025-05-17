import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'values',
  standalone: true,
})
export class EnumValuesPipe implements PipeTransform {
  protected enumKeys<O extends object, K extends keyof O = keyof O>(
    obj: O
  ): K[] {
    return Object.keys(obj).filter((k) => Number.isNaN(k)) as K[];
  }

  transform<TEnum>(
    input: TEnum,
    item: string[],
    mapper: Map<TEnum, string>
  ): string | undefined {

    console.log('input', input);
    console.log('item', item);
    console.log('mapper', mapper.get(item[1]));

    return 'mapper(input, item[1])';
  }
}
