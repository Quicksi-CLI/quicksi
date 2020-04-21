import {Entity, Field} from "deadlockjs-lightorm";
import {IUser} from "./IUser";

@Entity("public table 'users'")
export class User implements IUser {

    @Field("public primary column 'id'")
    public id!: number;

    @Field("public column 'login'")
    public login!: string;

    @Field("private column 'password'")
    public password?: string;

    @Field("public column 'level'")
    public level!: number;

    @Field("public date column 'date_joined'")
    public dateJoined: number = 0;

    constructor(data?: IUser) {

        if (data) {
            this.id = data.id;
            this.login = data.login;
            this.password = data.password;
            this.level = data.level;
        }
    }

}
