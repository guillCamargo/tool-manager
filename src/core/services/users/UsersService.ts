import ErrorMessage from "../../utils/ErrorMessage";
import { UserCredentialsDTO } from "./dtos/UserCredentialsDTO";
import { IUsersService } from "./IUsersService";
import jwt from "jsonwebtoken"
import { IUsersRepository } from "../../../infra/repositories/interfaces/IUSersRepository";

export class UsersService implements IUsersService {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async login(userCredentials: UserCredentialsDTO): Promise<string> {
        try {
            const user = await this.usersRepository.findByUsername(
                userCredentials.username,
                userCredentials.password)
            const token = jwt.sign({ user: user.username }, process.env.SECRET, {
                expiresIn: 300
            })
            return token
        } catch (e) {
            throw new ErrorMessage(401, 'Credenciais inválidas')
        }
    }
}