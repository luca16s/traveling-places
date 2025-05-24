import { TipoLocal } from '@enums';
import { Endereco } from './export';

export class Localidade {
  nome!: string;
  endereco!: Endereco;
  tipo!: TipoLocal | null | undefined;

  constructor(
    nome: string,
    endereco: Endereco,
    tipo: TipoLocal | null | undefined
  ) {
    this.nome = nome;
    this.tipo = tipo;
    this.endereco = new Endereco(
      endereco.logradouro,
      endereco.numero,
      endereco.bairro,
      endereco.cidade,
      endereco.estado,
      endereco.pais,
      endereco.coordenadas
    );
  }
}
