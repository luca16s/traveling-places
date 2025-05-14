import { Coordinate as Coordenada } from './export';

export class Endereco {
  rua!: string;
  numero!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  pais!: string;
  coordenadas!: Coordenada;

  constructor(
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
    coordinate: Coordenada
  ) {
    this.rua = rua;
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
