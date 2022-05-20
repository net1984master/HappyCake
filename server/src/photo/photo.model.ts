import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Photo {
    @PrimaryColumn()
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
}