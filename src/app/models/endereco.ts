import { Coordinate as Coordenada } from './export';

export class Endereco {
  logradouro!: string;
  numero!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  pais!: string;
  coordenadas!: Coordenada;

  constructor(
    logradouro: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
    coordinate: Coordenada
  ) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.pais = pais;
    this.coordenadas = new Coordenada(
      coordinate.latitude,
      coordinate.longitude
    );
  }
}
