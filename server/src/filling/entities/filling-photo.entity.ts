import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { EntityWithSequence, NextVal } from 'typeorm-sequence-oracle-fixed';
import { Filling } from './filling.entity';

export enum PhotoSize {
  Standart,
  Small,
  Large,
}

@Entity()
export class FillingPhoto extends EntityWithSequence {
  constructor() {
    super();
  }
  @PrimaryColumn()
  @NextVal('seq')
  id: number;
  @Column()
  file: string;
  @Column()
  size: PhotoSize;
  @ManyToOne((type) => Filling, (filling) => filling.photos)
  filling: Filling;
}
