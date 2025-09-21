import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();  // Load .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);  // For web if needed, but bot is CLI-based
}
bootstrap();