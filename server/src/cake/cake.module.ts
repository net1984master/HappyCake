import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';
import { CakeController } from './cake.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cake } from './entities/cake.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cake])],
  controllers: [CakeController],
  providers: [CakeService],
})
export class CakeModule {}
