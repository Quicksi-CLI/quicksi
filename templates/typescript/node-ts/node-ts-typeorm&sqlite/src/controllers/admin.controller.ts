import { Controller, Put, Authenticated, Post, BodyParams } from "@tsed/common";
import { Summary, Returns, Description } from "@tsed/swagger";
import { User } from "../data/models/entities/user.entity";
import { UsersService } from "../services/users/users.service";
import { CryptoService } from "../services/auth/crypto.service";
import { EmailingService } from "../services/mail/emailing.service";
import { NotFound } from "ts-httpexceptions";
import { AssignClaims } from "../data/models/requests/assign.claims.model";

@Controller("/admin")
export default class AdminController {

    constructor(private usersService: UsersService, private crypto: CryptoService, private emailingService: EmailingService) {
    }

    @Post("/users")
    @Authenticated({ claim: 'can_create_users' })
    @Summary("Creates new user")
    @Description(`
        Required claim: can_create_users.
        The current implementation allows an administrator to create one user using password / confirm properties 
        but it will be switched to an invitation method in the future.
    `)
    @Returns(User)
    async create(@BodyParams() user: User): Promise<User> {

        //Password created user
        const passHash = await this.crypto.hash(user.password);
        user.password = passHash;

        return this.usersService.create(user);
    }

    @Post("/users/invitation")
    @Authenticated({ claim: 'can_create_users' })
    @Summary("Creates new user")
    @Description(`
        Required claim: can_create_users.
        The current implementation allows an administrator to create one user using invitations.
    `)
    async createUserWithInvitations(@BodyParams('email') email:string): Promise<string> {
        const invitationToken = await this.crypto.hash(email);

        const message = {
            from: 'nodeStarterKit@something.com',
            to: email,
            subject: 'Confirm Email',
            text: `Token ${invitationToken}`, // This will be replaced with a link
            html: `<p>Token ${invitationToken}</p>` // This will be replaced with a link
        };

        const user = await this.usersService.findByEmail(email);

        if (user) {
            return `User ${email} already exists`
        }

        return this.emailingService.sendEmail(message)
            .then(async () => {
                const newUser = {
                    id: 0,
                    firstName: '',
                    lastName: '',
                    email: email,
                    invitationToken: invitationToken,
                    claims: [],
                    resetToken: '',
                    password: ''
                };

                await this.usersService.create(newUser);

                return `Message sent`;
            })
            .catch(err => {
                return err;
            })

    }

    @Post("/users/send-reset-token")
    @Authenticated({claim: 'can_create_users'})
    @Summary("Send reset password token")
    @Description(`
        Required claim: can_create_users.
        The current implementation allows an administrator to send a reset token password.
    `)
    async sendResetToken(@BodyParams('email') email:string): Promise<string> {

        const resetToken = await this.crypto.hash('reset' + email);
        const message = {
            from: 'nodeStarterKit@something.com',
            to: email,
            subject: 'Reset password',
            text: `Token ${resetToken}`, // This will be replaced with a link
            html: `<p>Token ${resetToken}</p>` // This will be replaced with a link
        };

        return this.emailingService.sendEmail(message)
            .then(async () => {
                await this.usersService.updateOneColumn(email, 'resetToken', resetToken);
                return `Reset password message sent`;
            })
            .catch(err => {
                return err;
            })
    }

    @Post("/users/remove-user")
    @Authenticated({claim: 'can_create_users'})
    @Summary("Removing user")
    @Description(`
        Required claim: can_create_users.
        The current implementation allows an administrator to remove an user.
    `)
    async removeUser(@BodyParams('email') email:string): Promise<any> {
        const removedUser = await this.usersService.remove(email);
        return `User ${removedUser.email} has been removed`;
    }

    @Post("/claims/assign")
    @Authenticated({ claim: 'can_create_users' })
    @Summary('Assigns a set of claims to an user')
    @Description(`
        Claims required: can_crete_users
        Allows an administrator to assign multiple claims to one user
    `)
    @Returns(User)
    async assign(@BodyParams() req: AssignClaims): Promise<User> {
        const { claims, userId } = req;
        const user = await this.usersService.findById(userId);
        if (user) {
            claims.forEach(async claim => {
                await this.usersService.storeClaim(claim, user);
            });

            return user;
        } else {
            throw new NotFound(`User not found`);
        }
    }

    @Put("/echo")
    @Authenticated({ claim: 'can_do_everything' })
    @Summary('Echo administrator method')
    async echo(@BodyParams() req: any): Promise<any> {
        return req;
    }


}
