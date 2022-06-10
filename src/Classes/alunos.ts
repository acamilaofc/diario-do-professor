export class Alunos {
  public id: number;
  public nome: string;
  public sobrenome: string;
  public idade: number;
  public media: number;
  //   public alunoId: number;

  constructor(
    id: number,
    nome: string,
    sobrenome: string,
    idade: number,
    media: number,
    // alunoId: number
  ) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.media = media;
    // this.alunoId = alunoId;
  }
}
