import { Cidade, Coordenada, Estado, Pais } from '@models';

export class Endereco {
  logradouro!: string | null | undefined;
  numero!: number | null | undefined;
  bairro!: string | null | undefined;
  cidade!: Cidade | null | undefined;
  estado!: Estado | null | undefined;
  pais!: Pais | null | undefined;
  coordenadas!: Coordenada | null | undefined;

  constructor(
    logradouro: string | null | undefined,
    numero: number | null | undefined,
    bairro: string | null | undefined,
    cidade: Cidade | null | undefined,
    estado: Estado | null | undefined,
    pais: Pais | null | undefined,
    coordenada: Coordenada | null | undefined
  ) {
    if (
      !logradouro ||
      !numero ||
      !bairro ||
      !cidade ||
      !estado ||
      !pais ||
      !coordenada
    ) {
      throw new Error('Todos os campos são obrigatórios');
    }

    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.coordenadas = new Coordenada(
      coordenada.latitude,
      coordenada.longitude
    );
  }
}
