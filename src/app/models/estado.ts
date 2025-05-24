import { Cidade } from "@models";

export class Estado {
  public nome: string = '';
  public sigla: string = '';
  public cidades: Cidade[] = [];

  constructor(sigla: string, nome: string, cidades: Cidade[]) {
    this.nome = nome;
    this.sigla = sigla;
    this.cidades = cidades;
  }
}
