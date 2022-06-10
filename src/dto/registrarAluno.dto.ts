import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class RegistrarAlunoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  sobrenome: string;

  @IsNumberString()
  @IsNotEmpty()
  idade: string;
}
