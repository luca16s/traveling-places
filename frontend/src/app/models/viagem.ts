export class Viagem {
  ida: Date;
  volta: Date;
  destino: string;

  constructor(
    inicio: Date | null | undefined,
    fim: Date | null | undefined,
    destino: string | null | undefined
  ) {
    if (!destino || !inicio || !fim) {
      throw new Error('Destino, ida e volta são obrigatórios.');
    }
    this.ida = inicio;
    this.volta = fim;
    this.destino = destino;
  }

  static fromForm(formData: {
    inicio: Date | null | undefined;
    fim: Date | null | undefined;
    destino: string | null | undefined;
  }): Viagem {
    return new Viagem(formData.inicio, formData.fim, formData.destino);
  }
}
