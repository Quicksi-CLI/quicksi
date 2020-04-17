import { IUser } from '../interface/user';
import { IResponse } from './response';

export interface ISignUpResponse {
    message: string;
    user: IResponse<IUser>
}