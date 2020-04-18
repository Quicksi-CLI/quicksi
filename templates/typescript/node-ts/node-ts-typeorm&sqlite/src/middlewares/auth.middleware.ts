import { IMiddleware, Request, Response } from 'ts-express-decorators';
import { OverrideMiddleware, AuthenticatedMiddleware, EndpointInfo, EndpointMetadata } from "@tsed/common";
import { Forbidden, BadRequest } from 'ts-httpexceptions';
import { $log } from 'ts-log-debug';
import * as Passport from 'passport';
import * as PassportJwt from 'passport-jwt';
import config from '../config';

@OverrideMiddleware(AuthenticatedMiddleware)
export default class AuthMiddleware implements IMiddleware {

    public use(
        @EndpointInfo() endpoint: EndpointMetadata,
        @Request() request: Express.Request,
        @Response() response: Express.Response) {

        return new Promise<any>((reslove, reject) => {
            Passport.authenticate('jwt', {
                session: false,
                secretOrKey: config.secret,
                jwtFromRequest: PassportJwt.ExtractJwt.fromHeader('token')
            }, (err, body, info) => {
                console.log(body);
                if (err) {
                    $log.error('Authenticate -> Error');
                    reject(new BadRequest(err));
                }

                if (!body) {
                    $log.warn('Authenticate -> False');
                    reject(new Forbidden(info));
                }

                $log.info('Authenticated -> Ok');
                const options = endpoint.get(AuthenticatedMiddleware) || {};
                const { claims } = body;

                if (claims && claims.indexOf('can_do_everything') !== -1 || claims.indexOf(options.claim) !== -1) {
                    request['user'] = body;
                    reslove();
                } else {
                    reject(new Forbidden('missing claim'))
                }


            })(request, response);

        });

    }
}