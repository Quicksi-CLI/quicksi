"use strict";
import {User} from "../data/models/entities/user.entity";
import * as jwt from "jsonwebtoken";
import {BodyParams, Controller, Get, Post, Req, Required, Res} from "@tsed/common";
import * as Express from "express";
import * as Passport from "passport";
import {BadRequest} from "ts-httpexceptions";
import { Summary, Returns, Description } from "@tsed/swagger";
import config from '../config';
@Controller("/auth")
export class AuthController {
   
    @Post("/login")
    @Summary("Login")
    @Description('Returns user data, set of claims and JWT token')
    async login(@Required() @BodyParams("email") email: string,
                @Required() @BodyParams("password") password: string,
                @Req() request: Express.Request,
                @Res() response: Express.Response) {

        this.validateEmail(email);

        return new Promise<any>((resolve, reject) => {
            Passport
                .authenticate("login", (err, user: User) => {
                    if (err) {
                        reject(err);
                    }

                    request['logIn'](user, (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            const {id, firstName, lastName, email, claims: userClaims} = user;
                            const claims: Array<string> = userClaims.map(claim => claim.claim);
                            const token = jwt.sign({id, firstName, lastName, email, claims}, config.secret);
                            resolve({user, claims, token});
                        }
                    });

                })(request, response, () => {

                });
        });

    }
    

    @Get("/logout")
    @Summary("Logout")
    public logout(@Req() request: Express.Request): string {
        request['logout']();
        return "Disconnected";
    }

    private validateEmail(email: string) {
        const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(email && regEmail.test(email))) {
            throw new BadRequest("Email is invalid");
        }
    }
}