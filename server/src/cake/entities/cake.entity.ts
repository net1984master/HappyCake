import { EntityWithSequence, NextVal } from 'typeorm-sequence-oracle-fixed';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity()
export class Cake extends EntityWithSequence {
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
}
