import { UsersController } from "@controllers/UsersController";
import { UsersRepository } from "@repositories/implamentations/UsersRepository";
import { UsersService } from "./UsersService";

const usersRepository = new UsersRepository

const usersService = new UsersService(usersRepository)

const usersController = new UsersController(usersService)

export { usersService, usersController }