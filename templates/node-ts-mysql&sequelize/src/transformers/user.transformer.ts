import { TransformerAbstract } from './base.transform';
import { IUser } from '../interface/user';
import { injectable } from 'inversify';

@injectable()
export class UserTransformer extends TransformerAbstract<IUser> {
    public transform(submission: IUser): IUser {
        return {
            firstName: submission.firstName,
            lastName: submission.lastName,
            email: submission.email,
            profilePic: submission.profilePic || '',
        }
    }
}