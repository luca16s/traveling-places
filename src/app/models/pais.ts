import { Estado } from '@models';

export class Pais {
  public nome: string = '';
  public sigla: string = '';
  public estados: Estado[] = [];

  constructor(sigla: string, nome: string, estados: Estado[]) {
    this.nome = nome;
    this.sigla = sigla;
    this.estados = estados;
  }
}
