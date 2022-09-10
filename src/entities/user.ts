import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import "reflect-metadata";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number
    @Column()
    firstname:string
    @Column()
    lastname:string
    @Column()
    actice:boolean
    @CreateDateColumn()
    createdAt:Date
    @UpdateDateColumn()
    updatedAt:Date

}