import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { PhotoModule } from './photo/photo.module';
import {Photo} from "./photo/photo.model";

// type: 'oracle',
//     host: '192.168.96.106',
//     port: 1521,
//     connectString:'(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.96.106)(PORT = 1521))(CONNECT_DATA =(SID=oratest1)))',
//     sid: 'oratest1',
//     username: 'test12',
//     password: 'test12',
//     entities: [__dirname + '/../**/*.entity.{js,ts}'],
//     synchronize: true,



@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'oracle',
          host: '192.168.96.106',
          port: 1521,
          connectString:'(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.96.106)(PORT = 1521))(CONNECT_DATA =(SID=oratest1)))',
          sid: 'oratest1',
          username: 'test12',
          password: 'test12',
          entities: [Photo],
          synchronize: true,
      }),
      PhotoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
