import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes( 
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  ); // NOTE - pipes é um padrão que permite softwares se comunicar

  await app.listen(3000);
}
bootstrap();

//modulo - controllers, providers, outros modulos
