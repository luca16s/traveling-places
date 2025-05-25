import { Pipe, PipeTransform } from '@angular/core';
import { EnumType } from '@shared/models';

@Pipe({
  name: 'enumKvP',
  standalone: true,
})
export class EnumPipe implements PipeTransform {
  transform(
    input: Record<number, string>,
    map: Map<number, string>
  ): EnumType[] {
    return Object.keys(input)
      .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const numKey = Number(key);
        return {
          key: numKey,
          label: map.get(numKey),
        };
      });
  }
}
