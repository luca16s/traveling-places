export class Estado {
  public nome!: string;
  public sigla!: string;

  constructor(
    nome: string | null | undefined,
    sigla: string | null | undefined
  ) {
    if (!nome || !sigla) {
      throw new Error('Nome e sigla são obrigatórios');
    }

    this.nome = nome;
    this.sigla = sigla;
  }

  static fromForm(formData: {
    nome: string | null | undefined;
    sigla: string | null | undefined;
  }): Estado {
    return new Estado(formData.nome, formData.sigla);
  }
}
