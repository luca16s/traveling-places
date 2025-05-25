import { FormControl, FormGroup } from '@angular/forms';
import { TipoLocal } from '@enums';
import { Cidade, Estado, Pais } from '@models';
import { CoordenadaForm } from './export';

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
