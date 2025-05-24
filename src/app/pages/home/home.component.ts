import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { Component, inject, OnInit } from '@angular/core';
import { TipoLocal, TipoLocalIcone, TipoLocalNome } from '@enums';
import { EnumPipe } from '@shared/pipes';
import { EnumType } from '@shared/models';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Cidade, Estado, Pais } from '@models';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from '@shared/directives';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'iso-home',
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    EnumPipe,
    NumbersOnlyDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private http = inject(HttpClient);

  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;
  protected tipoLocalIcone = TipoLocalIcone;
  protected paises: Observable<Pais[]> | null | undefined;
  protected estados: Estado[] | null | undefined;
  protected cidades: Cidade[] | null | undefined;

  protected localSelecionado: EnumType = new EnumType(
    TipoLocal.CASA,
    TipoLocalNome.get(TipoLocal.CASA)
  );

  protected localidadeForm = new FormGroup({
    local: new FormControl(null, Validators.required),
    tipoLocal: new FormControl(null, Validators.required),
    logradouro: new FormControl(null, Validators.required),
    numero: new FormControl(null, Validators.required),
    bairro: new FormControl(null, Validators.required),
    cidade: new FormControl({ value: '', disabled: true }, Validators.required),
    estado: new FormControl({ value: '', disabled: true }, Validators.required),
    pais: new FormControl({ value: '', disabled: false }, Validators.required),
    longitude: new FormControl(null, Validators.required),
    latitude: new FormControl(null, Validators.required),
  });

  protected onLocalSelecionado(event: MatSelectChange): void {
    this.localSelecionado = new EnumType(
      event.value,
      TipoLocalNome.get(event.value)
    );

    console.log(this.localidadeForm.get('tipoLocal'));
  }

  protected onPaisSelecionado(event: MatSelectChange): void {
    if (event.value === null) {
      return;
    }

    this.estados = event.value.estados;
  }

  protected onEstadoSelecionado(event: MatSelectChange): void {
    if (event.value === null) {
      return;
    }

    this.cidades = event.value.cidades;
  }

  protected getPaises(): Observable<Pais[]> | null | undefined {
    return this.http.get<[]>('/assets/data/paises.json');
  }

  ngOnInit(): void {
    this.paises = this.getPaises();
  }

  protected onLimpar(): void {
    this.localidadeForm.reset();
    this.localidadeForm.get('estado')?.disable();
    this.localidadeForm.get('cidade')?.disable();
  };

  protected onSubmit(): void {
    console.warn(this.localidadeForm.value);
  }
}
