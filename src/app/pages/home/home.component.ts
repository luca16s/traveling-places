import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

import { Component, inject, OnInit } from '@angular/core';
import { TipoLocal, TipoLocalIcone, TipoLocalNome } from '@enums';
import { CastPipe, EnumPipe } from '@shared/pipes';
import { EnumType } from '@shared/models';
import { MatIconModule } from '@angular/material/icon';
import { Cidade, Estado, Local, Pais, Coordenada } from '@models';
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
import { ICidade, IEstado, IPais } from '@interfaces';
import { CoordenadaForm, LocalForm } from './interfaces/export';

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
    CastPipe,
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
  protected paises: IPais[] | null | undefined;

  protected localForm!: FormGroup<LocalForm>;

  protected get local(): LocalForm {
    return this.localForm.controls;
  }

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

  protected onPaisSelecionado(event: MatSelectChange<Pais>): void {
    if (event.value === null) {
      return;
    }

    this.estados = this.paises
      ?.filter((pais) => {
        return pais.sigla === event.value.sigla;
      })[0]
      .estados.map(this.convertEstadoToSelect);
  }

  protected convertEstadoToSelect(value: IEstado): Estado {
    return new Estado(value.nome, value.sigla);
  }

  protected onEstadoSelecionado(event: MatSelectChange<Estado>): void {
    if (!event?.value?.sigla || !this.local?.pais?.value?.sigla) {
      return;
    }

    this.cidades = this.paises
      ?.filter((pais) => {
        return pais.sigla === this.local?.pais?.value?.sigla;
      })[0]
      .estados.filter((estado) => {
        return estado.sigla === event.value.sigla;
      })[0]
      .cidades.map(this.convertCidadeToSelect);
  }

  protected convertPaisToSelect(value: IPais[] | null | undefined): Pais[] {
    if (!value || value.length === 0) {
      return [];
    }

    return value.map((pais) => new Pais(pais.nome, pais.sigla));
  }

  protected convertCidadeToSelect(value: ICidade): Cidade {
    return new Cidade(value.nome);
  }

  protected onLimpar(): void {
    this.localForm.reset();
    this.local.estado.disable();
    this.local.cidade.disable();
  }

  protected onSubmit(): void {
    if (this.localForm.invalid) {
      return;
    }

    const formValue = this.localForm.value;
    const mappedFormValue = {
      nome: formValue.local,
      tipo: formValue.tipoLocal,
      logradouro: formValue.logradouro,
      numero: formValue.numero,
      bairro: formValue.bairro,
      cidade: formValue.cidade,
      estado: formValue.estado,
      pais: formValue.pais,
      coordenadas: Coordenada.fromForm({
        longitude: formValue?.coordenada?.longitude,
        latitude: formValue?.coordenada?.latitude,
      }),
    };
    const novoLocal = Local.fromForm(mappedFormValue);

    console.log(novoLocal);
  }

  public ngOnInit(): void {
    this.http.get<IPais[]>('/assets/data/paises.json').subscribe((paises) => {
      this.paises = paises;
    });

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
}
