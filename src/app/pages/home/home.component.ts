import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { Component } from '@angular/core';
import { TipoLocal, TipoLocalNome } from '@enums';
import { EnumPipe } from '@shared/pipes';
import { EnumType } from '@shared/models';

@Component({
  selector: 'iso-home',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, EnumPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;

  protected localSelecionado!: EnumType;
}
