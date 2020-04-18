import {Property, MaxLength, Required, Email, IgnoreProperty, UniqueItems} from "@tsed/common";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable} from "typeorm";
import { Claim } from "./claim.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @Property()
    id: number;

    @Column()
    @MaxLength(100)
    @Required()
    firstName: string;

    @Column()
    @MaxLength(100)
    @Required()
    lastName: string;

    @Column({unique: true})
    @Email()
    email: string;

    @OneToMany(type => Claim, claim => claim.user, {
        eager: true
    })
    @JoinTable()
    claims: Claim[];

    @Column({nullable: true})
    password: string;

    @Column({nullable: true})
    invitationToken: string;

    @Column({nullable: true})
    resetToken: string;
}