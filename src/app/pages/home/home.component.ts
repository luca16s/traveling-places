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
import {
  DisabledFieldDirective,
  NumbersOnlyDirective,
} from '@shared/directives';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { IPais } from '@interfaces';

export interface CoordenadaForm {
  longitude: FormControl<number | null | undefined>;
  latitude: FormControl<number | null | undefined>;
}

export interface LocalForm {
  local: FormControl<string | null | undefined>;
  tipoLocal: FormControl<TipoLocal | null | undefined>;
  logradouro: FormControl<string | null | undefined>;
  numero: FormControl<number | null | undefined>;
  bairro: FormControl<string | null | undefined>;
  cidade: FormControl<Cidade | null | undefined>;
  estado: FormControl<Estado | null | undefined>;
  pais: FormControl<Pais | null | undefined>;
  coordenada: FormGroup<CoordenadaForm>;
}

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
    DisabledFieldDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(FormBuilder);

  protected tipoLocal = TipoLocal;
  protected tipoLocalNome = TipoLocalNome;
  protected tipoLocalIcone = TipoLocalIcone;

  protected cidades: Cidade[] | null | undefined;
  protected estados: Estado[] | null | undefined;
  protected paises: Observable<IPais[]> | null | undefined;

  protected get local(): LocalForm {
    return this.localForm.controls;
  }

  protected localSelecionado: EnumType = new EnumType(
    TipoLocal.CASA,
    TipoLocalNome.get(TipoLocal.CASA)
  );

  protected localForm!: FormGroup<LocalForm>;

  ngOnInit(): void {
    this.paises = this.getPaises();

    this.localForm = this.formBuilder.group<LocalForm>({
      local: new FormControl(null, Validators.required),
      tipoLocal: new FormControl(null, Validators.required),
      logradouro: new FormControl(null, Validators.required),
      numero: new FormControl(null, Validators.required),
      bairro: new FormControl(null, Validators.required),
      cidade: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      estado: new FormControl(
        { value: null, disabled: true },
        Validators.required
      ),
      pais: new FormControl(
        { value: null, disabled: false },
        Validators.required
      ),
      coordenada: this.formBuilder.group<CoordenadaForm>({
        longitude: new FormControl(null, Validators.required),
        latitude: new FormControl(null, Validators.required),
      }),
    });
  }

  protected onLocalSelecionado(event: MatSelectChange): void {
    this.localSelecionado = new EnumType(
      event.value,
      TipoLocalNome.get(event.value)
    );
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

  protected getPaises(): Observable<IPais[]> | null | undefined {
    return this.http.get<IPais[]>('/assets/data/paises.json');
  }

  protected onLimpar(): void {
    this.localForm.reset();
    this.localForm.get('estado')?.disable();
    this.localForm.get('cidade')?.disable();
  }

  protected onSubmit(): void {
    if (this.localForm.invalid) {
      return;
    }
  }
}
