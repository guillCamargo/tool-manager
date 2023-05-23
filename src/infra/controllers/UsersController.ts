import { Request, Response } from "express";
import { IUsersService } from "@services/users/IUsersService";

export class UsersController {
    constructor(
        private usersService: IUsersService
    ) { }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const token = await this.usersService.login(req.body)

            return res.status(201).send(token);
        } catch (e) {
            return res.status(e.code).send(e)
        }
    }
}