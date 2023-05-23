import ErrorMessage from "@utils/ErrorMessage";
import { IUsersService } from "./IUsersService";
import jwt from "jsonwebtoken"
import { UserCredentialsDTO } from "./dtos/UserCredentialsDTO";
import { IUsersRepository } from "@repositories/interfaces/IUSersRepository";

export class UsersService implements IUsersService {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async login(userCredentials: UserCredentialsDTO): Promise<string> {
        try {
            const user = await this.usersRepository.findByUsernameAndPassword(
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