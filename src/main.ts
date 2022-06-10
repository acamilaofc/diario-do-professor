import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AlunoModule } from './aluno.module';

async function bootstrap() {
  const app = await NestFactory.create(AlunoModule);

  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, DELETE, OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
