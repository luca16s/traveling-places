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
    KeyValuePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;
}
