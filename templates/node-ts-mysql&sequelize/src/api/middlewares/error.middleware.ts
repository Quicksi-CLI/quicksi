import { Request, Response, NextFunction } from 'express';
import { MessageCodeError } from '../../errors/message-code-error';

export const handleError = (error: MessageCodeError | Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof MessageCodeError) {
        res.setHeader('x-message', error.message);
        res.setHeader('x-httpStatus-error', error.statusCode);
        res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
    } else {
        res.status(400).json({ status: 400, error });
    }

};