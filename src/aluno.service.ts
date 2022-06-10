import { Injectable } from '@nestjs/common';
import { Aluno } from '@prisma/client';
import { Alunos } from './Classes/alunos';
import { Medias } from './Classes/medias';
import { RegistrarAlunoDTO } from './dto/registrarAluno.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AlunoService {
  constructor(private prisma: PrismaService) {}

  async obterMedias(): Promise<Medias[]> {
    const tempMedia = await this.prisma.notas.groupBy({
      by: ['alunoId'],
      _avg: {
        nota: true,
      },
    });
    const media: Array<Medias> = [];
    tempMedia.forEach((item) => {
      const socorro = new Medias(item._avg.nota, item.alunoId);
      media.push(socorro);
    });
    return media;
  }

  async listarAlunos(): Promise<Alunos[]> {
    const alunos = await this.prisma.aluno.findMany();
    const medias = await this.obterMedias();
    const merged: Array<Alunos> = medias.map((media) => ({
      ...alunos.find((o) => o.id === media.alunoId),
      ...media,
    }));
    return merged;
  }
  async obterAluno(id: number): Promise<Aluno> {
    return await this.prisma.aluno.findUnique({
      where: {
        id: id,
      },
      include: {
        notas: {
          select: {
            avaliacao: true,
            nota: true,
          },
        },
      },
    });
  }

  async registrarAluno(dados: RegistrarAlunoDTO): Promise<Aluno> {
    return await this.prisma.aluno.create({
      data: {
        nome: dados.nome,
        sobrenome: dados.sobrenome,
        idade: Number(dados.idade),
      },
    });
  }

  async removerAluno(id: number) {
    await this.prisma.aluno.delete({
      where: {
        id: id,
      },
    });
  }
}
