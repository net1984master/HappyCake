import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.model';
import { PhotoMetadata } from './photo-metadata.model';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, PhotoMetadata])],
  providers: [PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
