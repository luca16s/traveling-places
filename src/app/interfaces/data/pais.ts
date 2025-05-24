import { IEstado } from '@interfaces';

export interface IPais {
  nome: string;
  sigla: string;
  estados: IEstado[];
}
