import {RequestLocal} from "deadlockjs";

export class MainController {

    /**
     *
     * @param {RequestLocal} loc
     * @returns {Promise<string>}
     */
    public static async hello(loc: RequestLocal): Promise<string> {
        return "ok";
    }

}
