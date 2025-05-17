import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Component, OnInit } from '@angular/core';
import { TipoLocal, TipoLocalNome } from '@enums';
import { CastPipe, EnumKeysPipe, EnumValuesPipe } from '@shared/pipes';

@Component({
  selector: 'iso-home',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    EnumKeysPipe,
    EnumValuesPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;

  ngOnInit(): void {
    for (const tl of Object.entries(TipoLocal)) {
      let a: string | TipoLocal = tl[1];
      let b = a as keyof typeof TipoLocal;
      let c: TipoLocal = TipoLocal[a as keyof typeof TipoLocal];

      let aa = [tl[0], tl[1] as string];

      console.log(`///////`);
      var pipe = new EnumValuesPipe();
      console.log(
        `texto: ${pipe.transform(
          TipoLocal,
          [tl[0], tl[1] as string],
          TipoLocalNome as Map<TipoLocal, string>
        )}`
      );
      break;
    }
  }
}
