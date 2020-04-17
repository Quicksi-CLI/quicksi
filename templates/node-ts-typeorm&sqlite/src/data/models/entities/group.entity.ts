import {Property, MaxLength, Required} from "@tsed/common";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Group {

    @PrimaryGeneratedColumn()
    @Property()
    id: number;

    @Column()
    @MaxLength(100)
    @Required()
    name: string;
}