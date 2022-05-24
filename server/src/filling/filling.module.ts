import { Module } from '@nestjs/common';
import { FillingService } from './filling.service';
import { FillingController } from './filling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filling } from './entities/filling.entity';
import { FillingPhoto } from './entities/filling-photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Filling, FillingPhoto])],
  controllers: [FillingController],
  providers: [FillingService],
})
export class FillingModule {}
