import { Request, Response, NextFunction } from 'express';
import { MessageCodeError } from '../../errors/message-code-error';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { User } from '../../models/user';
import { UserTransformer } from '../../transformers/user.transformer';
import { container } from '../../containers/container';
import { TYPES } from '../../interface/types';

const userTransformer: UserTransformer = container.get<UserTransformer>(TYPES.UserTransformer);

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.header('authorization');
    if (!header) {
        const error = new MessageCodeError('Unauthenticated:missingAuthToken', 401);
        return next(error);
    }
    if (header.split(' ')[0] !== 'Bearer') {
        const error = new MessageCodeError('Unauthenticated:malformedAuthToken', 400);
        return next(error);
    }
    const token = header.split(' ')[1];
    // Just a hack
    const payload: any = jwt.verify(token, config.jwtSecret);
    console.log(payload);
    try {
        const user = await User.findOne({ where: { email: payload.email } });
        if (!user) {
            const error = new MessageCodeError('Unauthenticated:invalidAuthToken', 400);
            return next(error);
        }
        req.body.user = userTransformer.transform(user);
        next();
    } catch (error) {
        next(error);
    }

};