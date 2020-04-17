import { Service } from "@tsed/di";

import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Service()
export class CryptoService {

    public async hash(value: string): Promise<string> {
        return new Promise((res, rej) => bcrypt.hash(value, saltRounds, function (err, hash) {
            if (err) {
                rej(err);
            } else {
                res(hash);
            }
        }));
    }

    public async compare(value: string, hash: string): Promise<any> {
        return new Promise((res, rej) => bcrypt.compare(value, hash, function (err, response) {
            if (err) {
                rej(err);
            } else {
                res(response);
            }
        }));
    }

}