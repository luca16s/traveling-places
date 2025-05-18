import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { Component } from '@angular/core';
import {
  TipoLocal,
  TipoLocalIcon,
  TipoLocalIcone,
  TipoLocalNome,
} from '@enums';
import { EnumPipe } from '@shared/pipes';
import { EnumType } from '@shared/models';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'iso-home',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    EnumPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;
  protected tipoLocalIcone = TipoLocalIcone;

  protected localSelecionado: EnumType = new EnumType(
    TipoLocal.CASA,
    TipoLocalNome.get(TipoLocal.CASA)
  );

  protected onLocalSelecionado(event: MatSelectChange): void {
    this.localSelecionado = new EnumType(
      event.value,
      TipoLocalNome.get(event.value)
    );
  }
}
