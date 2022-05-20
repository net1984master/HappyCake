import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const oracledb = require('oracledb');
  oracledb.initOracleClient({libDir: 'D:\\noracle\\instantclient_21_3'});
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
