import {Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {TestUser} from "../test-user/test-user.model";
import {EntityWithSequence, NextVal} from "typeorm-sequence-oracle-fixed";

@Entity({name:'photo'})
export class Photo extends EntityWithSequence{
    constructor() {
        super();
    }
    @NextVal('seq')
    @PrimaryColumn({name:'id'})
    id: number
    @Column({length:100})
    name: string
    @Column()
    description: string
    @Column()
    filename: string
    @Column()
    views: number
    @Column()
    isPublished: boolean
    // @ManyToOne(()=>TestUser,(user) => user.photos)
    // user:TestUser
}