import { Request, Response } from 'express';
import { AuthService } from '../../services/auth.service';
import { container } from '../../containers/container';
import { TYPES } from '../../interface/types';

const authService: AuthService = container.get<AuthService>(TYPES.AuthService);

export const signUp = async (req: Request, res: Response) => {
    const response = await authService.signUp(req.body);
    res.json(response);
};

export const login = async (req: Request, res: Response) => {
    const response = await authService.login(req.body.email, req.body.password);
    res.json(response);
};

export const getProfile = async (req: Request, res: Response) => {
    res.json({ status: 201, user: req.body.user })
};