import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.use(cookieParser() as any);
  await app.listen(process.env.PORT || 3000);
}
bootstrap()
  .then()
  .catch((err: Error) => {
    throw new Error(err.message);
  });
