import * as iof from "io-filter";
import {MainController} from "../controller/MainController";
import {UserController} from "../controller/UserController";

export const routes: any = {

    "/": {
        method: "get",
            handler: MainController.hello,
    },

    "/users": {

        routes: {

            /** Get one user */
            "/:id([0-9]+)": {
                method: "get",
                rateLimit: {weight: 100},
                db: {mysql: true},
                cache: {expire: 1000},
                handler: UserController.get,
            },

            /** Create a new user */
            "/create": {
                method: "post",
                    paramFilter: new iof.ObjectFilter({
                    email: new iof.ValueTypeFilter("string"),
                    password: new iof.ValueTypeFilter("string"),
                }),
                rateLimit: {weight: 100},
                db: {mysql: true},
                handler: UserController.create,
            },

            /** List all users */
            "/list": {
                method: "get",
                rateLimit: {weight: 100},
                db: {mysql: true},
                cache: {expire: 1000},
                handler: UserController.list,
            },
        },
    },

};
