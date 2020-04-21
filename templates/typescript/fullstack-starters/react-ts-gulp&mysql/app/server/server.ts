import {APIDescription, DeadLock} from "deadlockjs";
import * as fs from "fs";
import * as path from "path";
import {App} from "../shared/App";
import {routes} from "./routes/api";

const STATIC: string = path.join(__dirname, "../client/");

const dbConf: any = JSON.parse(
    fs  .readFileSync(path.join(__dirname, "../../../database.json"))
        .toString(),
);

const api: APIDescription = {

    static: STATIC,

    port: App.PORT,

    hostname: App.HOST,

    basePath: App.API_PATH,

    // Mysql pool configuration
    db: {
        mysql: {
            connectionLimit: 100,
            database: dbConf.dev.database,
            host: "localhost",
            password: dbConf.dev.password,
            port: 3306,
            user: dbConf.dev.user,
        },
    },

    // rate limit
    rateLimit: {
        ipWhitelist: [],
        maxPending: 0,
        maxWeightPerSec: 100,
        weight: 10,
    },

    // cache
    cache: {expire: 0},

    routes,
};

(async () => {

    await DeadLock.startApp(api);
    console.log("Quicksi Server started. Listening on " + App.HOST + ":" + App.PORT);
    console.log("Static content: " + STATIC);
    console.log("API basepath: " + App.API_PATH);
    console.log("");
    console.log("Go to http://" + App.HOST + ":" + App.PORT + "/ on your browser");
})();
