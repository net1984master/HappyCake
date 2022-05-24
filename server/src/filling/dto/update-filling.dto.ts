import { PartialType } from '@nestjs/mapped-types';
import { CreateFillingDto } from './create-filling.dto';

export class UpdateFillingDto extends PartialType(CreateFillingDto) {}
