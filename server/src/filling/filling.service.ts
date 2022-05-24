import { Injectable } from '@nestjs/common';
import { CreateFillingDto } from './dto/create-filling.dto';
import { UpdateFillingDto } from './dto/update-filling.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Filling } from './entities/filling.entity';
import { Repository } from 'typeorm';
import { FillingPhoto, PhotoSize } from './entities/filling-photo.entity';

@Injectable()
export class FillingService {
  constructor(
    @InjectRepository(Filling) private readonly filling: Repository<Filling>,
    @InjectRepository(FillingPhoto)
    private readonly fillingPhoto: Repository<FillingPhoto>,
  ) {}

  async create(createFillingDto: CreateFillingDto) {
    const filling = new Filling();
    filling.name = createFillingDto.name;
    filling.description = createFillingDto.description;
    filling.compound = createFillingDto.compound;
    const result = await this.filling.insert(filling);
    await this.addPhoto(
      createFillingDto.standartPhoto,
      filling,
      PhotoSize.Standart,
    );
    await this.addPhoto(createFillingDto.smallPhoto, filling, PhotoSize.Small);
    await this.addPhoto(createFillingDto.largePhoto, filling, PhotoSize.Large);
    return result;
  }
  private async addPhoto(file: string, filling: Filling, size: PhotoSize) {
    if (file) {
      const photo = new FillingPhoto();
      photo.file = file;
      photo.filling = filling;
      photo.size = size;
      await this.fillingPhoto.insert(photo);
    }
  }
  findAll() {
    return `This action returns all filling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filling`;
  }

  update(id: number, updateFillingDto: UpdateFillingDto) {
    return `This action updates a #${id} filling`;
  }

  remove(id: number) {
    return `This action removes a #${id} filling`;
  }
}
