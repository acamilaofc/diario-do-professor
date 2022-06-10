import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [AlunoController],
  providers: [AlunoService, PrismaService],
})
export class AlunoModule {}
