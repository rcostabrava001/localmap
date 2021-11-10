import { Column, PrimaryGeneratedColumn, Entity, CreateDateColumn } from "typeorm";

@Entity()
export class Store {
 @PrimaryGeneratedColumn('uuid')
 id: string;
 
 @Column('varchar')
 name: string;

 @Column('varchar')
 titleOS: string;

 @Column('varchar')
 descriptionOS: string;

 @Column('varchar')
 dev: string;
 
 @Column('varchar')
 description: string;
 
 @Column('varchar')
 category: string;
 
 @Column('varchar')
 contact: string;
 
 @Column('double precision')
 latitude: number;
 
 @Column('double precision')
 longitude: number;

 @CreateDateColumn({type:'date'})
 created: Date;
}