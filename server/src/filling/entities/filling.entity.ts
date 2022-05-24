import {Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import { EntityWithSequence, NextVal } from 'typeorm-sequence-oracle-fixed';
import { FillingPhoto } from './filling-photo.entity';

@Entity()
export class Filling extends EntityWithSequence {
  constructor() {
    super();
  }
  @PrimaryColumn()
  @NextVal('seq')
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ length: 4000 })
  compound: string;
  @OneToMany((type) => FillingPhoto, (fillingPhoto) => fillingPhoto.filling, {
    cascade: true,
  })
  photos: FillingPhoto[];
}
