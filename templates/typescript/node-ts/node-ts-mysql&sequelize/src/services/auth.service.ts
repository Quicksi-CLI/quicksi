import { inject, injectable } from 'inversify';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';
import { IUser } from '../interface/user';
import { TYPES } from '../interface/types';
import { UserTransformer } from '../transformers/user.transformer';
import { ISignUpResponse } from '../responses/signup';
import { MessageCodeError } from '../errors/message-code-error';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { ILoginResponse } from '../responses/login';
import { IResponse } from '../responses/response';

@injectable()
export class AuthService {
    constructor(@inject(TYPES.UserTransformer) private userTransformer: UserTransformer) {

    }

    async signUp(newUser: IUser): Promise<IResponse<ISignUpResponse>> {
        const user = await User.findOne({ where: { email: newUser.email } });
        if (!user) {
            newUser.password = await this.hashPassword(newUser.password!);
            try {
                const createdUser: IUser = await User.create(newUser);
                return {
                    data: {
                        message: 'User created successfully!',
                        user: { data: this.userTransformer.transform(createdUser) }
                    }
                };

            } catch (error) {
                throw new MessageCodeError(error.message, 500);
            }
        } else {
            throw new MessageCodeError('User already exists!', 400);
        }
    }

    async login(email: string, password: string): Promise<IResponse<ILoginResponse>> {
        const user = await User.findOne({ where: { email } });
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                const token = jwt.sign({
                    id: user.id,
                    email: user.email,
                    name: `${user.firstName} ${user.lastName}`
                }, config.jwtSecret);
                return {
                    data: {
                        message: 'User logged in successfully!',
                        token,
                        user: { data: this.userTransformer.transform(user) }
                    }
                }
            } else {
                throw new MessageCodeError('Incorrect password!', 400);
            }
        } else {
            throw new MessageCodeError('Incorrect email address!', 400);
        }
    }

    private hashPassword(password: string): Promise<string> {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err: Error, salt: string) => {
                if (!err) {
                    bcrypt.hash(password, salt, (err: Error, hash: string) => {
                        if (err) reject(err);
                        else resolve(hash);
                    });
                }
            });
        });
    }
}