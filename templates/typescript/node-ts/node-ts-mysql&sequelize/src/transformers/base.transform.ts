
// An abstract class to transform the object retrieved from database to a response model
import { injectable } from 'inversify';

@injectable()
export abstract class TransformerAbstract<T> {
    public abstract transform(submission: T): any;
}