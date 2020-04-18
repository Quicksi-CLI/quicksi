import { injectable } from 'inversify';
import * as Raven from 'raven-js';
import { config } from '../config';

@injectable()
export class SentryService {
    public captureException(exception: any, options?: Raven.RavenOptions): void {
        if (config.environment == 'production') {
            Raven.captureException(exception, options);
        }
    }
}