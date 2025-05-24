import { ICidade } from '@interfaces';

export interface IEstado {
  nome: string;
  sigla: string;
  cidades: ICidade[];
}
