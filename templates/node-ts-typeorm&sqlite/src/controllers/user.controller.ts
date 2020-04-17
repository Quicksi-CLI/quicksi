import { Controller, Post, BodyParams } from "@tsed/common";
import { User } from "../data/models/entities/user.entity";
import { UsersService } from "../services/users/users.service";
import { CryptoService } from "../services/auth/crypto.service";
import {Description, Returns, Summary} from "@tsed/swagger";

@Controller('/user')
export default class UserController {
    constructor(private usersService: UsersService, private crypto: CryptoService) {
    }

    @Post("/create-account")
    @Summary("User creates account after receiving invitation token")
    @Description(`
        The current implementation allows an user to create his account after receiving invitation token
    `)
    @Returns(User)
    async create (@BodyParams('user') user: User, @BodyParams('token') token: string): Promise<User> {

        const invitedUser = await this.usersService.findByEmail(user.email);

        if (invitedUser.invitationToken === token) {
            const passHash = await this.crypto.hash(user.password);

            invitedUser.firstName = user.firstName;
            invitedUser.lastName = user.lastName;
            invitedUser.password = passHash;
            invitedUser.invitationToken = '';
        }

        return this.usersService.update(invitedUser);
    }

    @Post("/reset-password")
    @Summary("User resets password after receiving reset token")
    @Description(`
        The current implementation allows an user to reset his account's password after receiving reset token
    `)
    @Returns(User)
    async resetPassword(@BodyParams('token') token: string, @BodyParams('email') email: string,
                        @BodyParams('password') password: string): Promise<User> {

        const passHash = await this.crypto.hash(password);
        const user = await this.usersService.findByEmail(email);

        if (user.resetToken === token) {
            user.password = passHash;
            user.resetToken = '';
        }

        return this.usersService.update(user);
    }
}