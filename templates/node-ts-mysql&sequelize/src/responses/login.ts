import { IUser } from '../interface/user';
import { IResponse } from './response';

export interface ILoginResponse {
    message: string;
    token: string;
    user: IResponse<IUser>;
}