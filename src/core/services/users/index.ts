import { UsersController } from "@controllers/UsersController";
import { UsersService } from "./UsersService";

const usersService = new UsersService()

const usersController = new UsersController(usersService)

export { usersService, usersController }