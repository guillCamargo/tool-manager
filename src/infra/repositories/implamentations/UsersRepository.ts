import { Op } from "sequelize";
import User from "../../../core/entities/User";
import ErrorMessage from "../../../core/utils/ErrorMessage";
import { IUsersRepository } from "../interfaces/IUSersRepository";

export class UsersRepository implements IUsersRepository {
    async findByUsername(username: string, password: string): Promise<User> {
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