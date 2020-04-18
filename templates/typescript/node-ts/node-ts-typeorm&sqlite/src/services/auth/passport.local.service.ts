


import {
    AfterRoutesInit,
    BeforeRoutesInit,
    ExpressApplication,
    Inject,
    ServerSettingsService,
    Service
} from "@tsed/common";
import * as Passport from "passport";
import * as PassportJwt from 'passport-jwt';
import { Strategy } from "passport-local";
import { NotFound } from "ts-httpexceptions";
import { UsersService } from "../users/users.service";
import { CryptoService } from "./crypto.service";
import config from "../../config";

@Service()
export class PassportLocalService implements BeforeRoutesInit, AfterRoutesInit {

    constructor(private usersService: UsersService,
        private crypto: CryptoService,
        private serverSettings: ServerSettingsService,
        @Inject(ExpressApplication) private expressApplication: ExpressApplication) {

        // used to serialize the user for the session
        Passport.serializeUser(PassportLocalService.serialize);

        // used to deserialize the user
        Passport.deserializeUser(this.deserialize.bind(this));
    }

    $beforeRoutesInit() {
        const options: any = this.serverSettings.get("passport") || {} as any;
        const { userProperty } = options;
        this.expressApplication.use(Passport.initialize({ userProperty }));
        Passport.use(new PassportJwt.Strategy({
            //secret we used to sign our JWT
            secretOrKey: config.secret,
            jwtFromRequest: PassportJwt.ExtractJwt.fromHeader('token')
        }, async (token, done) => {
            try {
                //Pass the user details to the next middleware
                return done(null, token);
            } catch (error) {
                done(error);
            }
        }));
    }

    $afterRoutesInit() {
        this.initializeLogin();
    }


    static serialize(user, done) {
        done(null, user.id);
    }


    public deserialize(id, done) {
        done(null, this.usersService.findById(id));
    };


    public initializeLogin() {
        Passport.use("login", new Strategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        }, (req, email, password, done) => {
            this.login(email, password)
                .then((user) => done(null, user))
                .catch((err) => done(err));
        }));
    }


    async login(email: string, password: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        if (user) {

            const isCorrect = await this.crypto.compare(password, user.password);
            if (isCorrect) {
                return user;
            }
        }

        throw new NotFound("User not found");
    };
}
