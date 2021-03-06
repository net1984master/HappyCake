import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn, PrimaryColumn, Relation,
} from "typeorm"
import {Photo} from "./photo.model";
import {EntityWithSequence, NextVal} from "typeorm-sequence-oracle-fixed";

@Entity()
export class PhotoMetadata extends EntityWithSequence{
    constructor() {
        super();
    }

    @NextVal('seq')
    @PrimaryColumn()
    id: number

    @Column("number")
    height: number

    @Column("number")
    width: number

    @Column()
    orientation: string

    @Column()
    compressed: boolean

    @Column()
    comment: string

    @OneToOne(type => Photo,(photo)=>photo.metadata)
    @JoinColumn()
    photo: Relation<Photo>
}