import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {PhotoService} from "./photo.service";
import {Photo} from "./photo.model";

@Controller('photo')
export class PhotoController {

    constructor(private readonly photoService: PhotoService) {
    }

    @Get()
    async findAll(){
        return this.photoService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
        return this.photoService.findOne(id);
    }
    @Post()
    async create(@Body() newPhoto:Omit<Photo,'id'>):Promise<Photo>{
        return this.photoService.create(newPhoto);
    }
}
