import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Photo} from "./photo.model";
import {PhotoMetadata} from "./photo-metadata.model";

@Injectable()
export class PhotoService {

    constructor(@InjectRepository(Photo) private readonly photoRepository: Repository<Photo>,@InjectRepository(PhotoMetadata) private readonly photoMetadataRepository: Repository<PhotoMetadata>) {
    }

    async findAll() {
        return this.photoRepository.find();
    }

    async findOne(id: string) {
        //return this.photoRepository.findOne(id);
        return this.photoRepository.findAndCount()

    }

    async create(newPhoto: Omit<Photo, 'id'>) {
        const photo = new Photo();
        photo.name = newPhoto.name;
        photo.filename = newPhoto.filename;
        photo.description = newPhoto.description;
        photo.views = newPhoto.views;
        photo.isPublished = newPhoto.isPublished;


        // create a photo metadata
        const metadata = new PhotoMetadata()
        metadata.height = 640
        metadata.width = 480
        metadata.compressed = true
        metadata.comment = "cybershoot"
        metadata.orientation = "portrait"
        metadata.photo = photo // таким образом мы соединяем их

        const savedPhoto = await this.photoRepository.save(photo);
        const savedMetadata = await this.photoMetadataRepository.save(metadata);

        return [savedPhoto, savedMetadata];

        //return this.photoRepository.save(ph);
    }
}
