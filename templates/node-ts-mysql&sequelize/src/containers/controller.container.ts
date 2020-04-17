import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const controllerContainer = (f: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(errors.array());
        }
        try {
            await f(req, res);
        } catch (error) {
            next(error);
        }
    };
};