import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/strategies/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Set up global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());


  await app.listen(3000);
}
bootstrap();
