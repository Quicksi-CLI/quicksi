import { Container } from 'inversify';
import { AuthService } from '../services/auth.service';
import { TYPES } from '../interface/types';
import { SentryService } from '../services/sentry.service';
import { UserTransformer } from '../transformers/user.transformer';

/*
  Adding defaultScope: 'Singleton' otherwise it creates multiple objects
 */
const container = new Container({ defaultScope: 'Singleton' });

container.bind<AuthService>(TYPES.AuthService).to(AuthService);
container.bind<SentryService>(TYPES.SentryService).to(SentryService);
container.bind<UserTransformer>(TYPES.UserTransformer).to(UserTransformer);

export { container };