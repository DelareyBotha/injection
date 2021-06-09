// @ts-ignore
import { Router } from 'express';
import { autoInjectable } from "tsyringe";
import { UserService } from "../services/user-service";


autoInjectable()
export default class UserController {
    userService: UserService;
    router: Router;

    constructor(userService: UserService) {
        this.userService = userService;
        this.router = new Router();
    }

    getUsersRoute() {
        return this.userService.getUsers();
    }

    routes() {
        this.router.get("/", (_req: any, res: any) => {
            res.send(this.getUsersRoute());
        });
        return this.router;
    }

}