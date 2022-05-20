import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Photo} from "./photo.model";

@Injectable()
export class PhotoService {

    constructor(@InjectRepository(Photo) private readonly photoRepository: Repository<Photo>) {
    }

    async findAll() {
        return this.photoRepository.find();
    }

    async findOne(id: string) {
        return this.photoRepository.findOne(id);
    }

    async create(newPhoto: Omit<Photo, 'id'>): Promise<Photo> {
        const ph = new Photo();
        ph.name = newPhoto.name;
        ph.filename = newPhoto.filename;
        ph.description = newPhoto.description;
        ph.views = newPhoto.views;
        ph.isPublished = newPhoto.isPublished;
        return this.photoRepository.save(ph);
    }
}
