import { Coordenada } from './coordenada';
import { TipoLocal } from '@enums';
import { Cidade, Endereco, Estado, Pais } from '@models';

export class Local {
  nome!: string | null | undefined;
  tipo!: TipoLocal | null | undefined;
  endereco!: Endereco | null | undefined;

  constructor(
    nome: string | null | undefined,
    tipo: TipoLocal | null | undefined,
    endereco: Endereco | null | undefined
  ) {
    if (!nome || tipo == null || !endereco) {
      throw new Error('Nome, tipo e endereço são obrigatórios');
    }

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

  static fromForm(formData: {
    nome: string | null | undefined;
    tipo: TipoLocal | null | undefined;
    logradouro: string | null | undefined;
    numero: number | null | undefined;
    bairro: string | null | undefined;
    cidade: Cidade | null | undefined;
    estado: Estado | null | undefined;
    pais: Pais | null | undefined;
    coordenadas: Coordenada | null | undefined;
  }): Local {
    return new Local(
      formData.nome,
      formData.tipo,
      new Endereco(
        formData.logradouro,
        formData.numero,
        formData.bairro,
        formData.cidade,
        formData.estado,
        formData.pais,
        formData.coordenadas
      )
    );
  }
}
