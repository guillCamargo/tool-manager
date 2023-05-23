import { Op } from "sequelize";
import User from "@entities/User";
import ErrorMessage from "@utils/ErrorMessage";
import { IUsersRepository } from "@repositories/interfaces/IUSersRepository";

export class UsersRepository implements IUsersRepository {
    async findByUsernameAndPassword(username: string, password: string): Promise<User> {
        return User.findOne({
            where: {
                [Op.and]: [
                    { username: username },
                    { password: password }
                ]
            }
        })
    }

}