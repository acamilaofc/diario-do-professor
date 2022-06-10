import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Aluno } from '@prisma/client';
import { AlunoService } from './aluno.service';
import { Alunos } from './Classes/alunos';
import { RegistrarAlunoDTO } from './dto/registrarAluno.dto';

@Controller('api/alunos')
export class AlunoController {
  constructor(private readonly appService: AlunoService) {}

  @Get()
  async listarAlunos(): Promise<Alunos[]> {
    return this.appService.listarAlunos();
  }

  @Get(':id')
  async obterAluno(@Param('id') id: string): Promise<Aluno> {
    return this.appService.obterAluno(parseInt(id));
  }

  @Post('registrar')
  async registrarAluno(@Body() dados: RegistrarAlunoDTO): Promise<Aluno> {
    return await this.appService.registrarAluno(dados);
  }

  @Delete('remover')
  async removerAluno(@Body() id: string) {
    return await this.appService.removerAluno(parseInt(id));
  }
}
