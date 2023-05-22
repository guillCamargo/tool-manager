import { Op } from "sequelize";
import User from "@entities/User";
import ErrorMessage from "@utils/ErrorMessage";
import { IUsersRepository } from "@repositories/interfaces/IUSersRepository";

export class UsersRepository implements IUsersRepository {
    async findByUsernameAndPassword(username: string, password: string): Promise<User> {
        try {
            return User.findOne({
                where: {
                    [Op.and]: [
                        { username: username },
                        { password: password }
                    ]
                }
            })
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }

}