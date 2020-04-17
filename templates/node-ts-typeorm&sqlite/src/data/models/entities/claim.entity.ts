import {Property, MaxLength, Required} from "@tsed/common";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Claim {

    @PrimaryGeneratedColumn()
    @Property()
    id: number;

    @Column()
    @MaxLength(100)
    @Required()
    claim: string;

    @ManyToOne(type => User, user => user.claims)
    user: User;

}