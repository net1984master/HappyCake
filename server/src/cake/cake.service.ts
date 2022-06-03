import { Injectable } from '@nestjs/common';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cake } from './entities/cake.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CakeService {
  constructor(
    @InjectRepository(Cake) private readonly cakeRepo: Repository<Cake>,
  ) {}

  async create(createCakeDto: CreateCakeDto) {
    const cake = new Cake();
    cake.name = createCakeDto.name;
    cake.description = createCakeDto.description;
    return this.cakeRepo.save(cake);
  }

  findAll() {
    return this.cakeRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cake`;
  }

  async update(id: number, updateCakeDto: UpdateCakeDto) {
    /*const cake = new Cake();
    cake.id
    cake.name = updateCakeDto.name;
    cake.description = updateCakeDto.description;*/
    return this.cakeRepo.save(updateCakeDto);
  }

  remove(id: number) {
    return `This action removes a #${id} cake`;
  }
}
