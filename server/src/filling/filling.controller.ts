import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FillingService } from './filling.service';
import { CreateFillingDto } from './dto/create-filling.dto';
import { UpdateFillingDto } from './dto/update-filling.dto';
import { Filling } from './entities/filling.entity';

@Controller('filling')
export class FillingController {
  constructor(private readonly fillingService: FillingService) {}

  @Post()
  async create(@Body() createFillingDto: CreateFillingDto) {
    return this.fillingService.create(createFillingDto);
  }

  @Get()
  findAll() {
    return this.fillingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fillingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFillingDto: UpdateFillingDto) {
    return this.fillingService.update(+id, updateFillingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fillingService.remove(+id);
  }
}
