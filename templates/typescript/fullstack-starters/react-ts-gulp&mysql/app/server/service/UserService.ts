import {MySQL} from "deadlockjs-lightorm";
import {PoolConnection} from "mysql";
import {User} from "../../shared/model/User";

/**
 *
 */
export class UserService {

    /**
     *
     * @param {PoolConnection} mysql
     * @param id
     * @returns {Promise<User[]>}
     */
    public static async get(mysql: PoolConnection, id: number): Promise<User> {
        return await MySQL.fetchById(mysql, User, id);
    }

    /**
     *
     * @param {PoolConnection} mysql
     * @param user
     * @returns {Promise<number>}
     */
    public static async create(mysql: PoolConnection, user: User): Promise<number> {
        return await MySQL.insertEntity(mysql, user);
    }

    /**
     *
     * @param {PoolConnection} mysql
     * @returns {Promise<User[]>}
     */
    public static async getAll(mysql: PoolConnection): Promise<User[]> {
        return await MySQL.fetch(mysql, User);
    }
}
