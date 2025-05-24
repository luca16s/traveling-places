export class Cidade {
  public nome!: string;

  constructor(nome: string | null | undefined) {
    if (!nome) {
      throw new Error('Nome é obrigatório');
    }

    this.nome = nome;
  }

  static fromForm(formData: { nome: string | null | undefined }): Cidade {
    return new Cidade(formData.nome);
  }
}
