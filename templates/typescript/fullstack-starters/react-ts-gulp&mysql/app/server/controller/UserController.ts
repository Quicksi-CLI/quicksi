import {RequestLocal} from "deadlockjs";
import {User} from "../../shared/model/User";
import {UserService} from "../service/UserService";

export class UserController {

    /**
     *
     * @param {RequestLocal} loc
     * @returns {Promise<User[]>}
     */
    public static async get(loc: RequestLocal): Promise<User> {
        const id: number = parseInt(loc.express.req.params.id, 10);
        return await UserService.get(loc.mysql, id);
    }

    /**
     *
     * @param {RequestLocal} loc
     * @returns {Promise<number>} id of the user
     */
    public static async create(loc: RequestLocal): Promise<number> {
        const email: string = loc.requestInfo.params.email;
        const password: string = loc.requestInfo.params.password;
        const user: User = new User({id: 0, login: email, password, level: 0});

        return await UserService.create(loc.mysql, user);
    }

    /**
     *
     * @param {RequestLocal} loc
     * @returns {Promise<User[]>}
     */
    public static async list(loc: RequestLocal): Promise<User[]> {
        return await UserService.getAll(loc.mysql);
    }
}
