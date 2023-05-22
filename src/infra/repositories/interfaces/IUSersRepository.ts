import User from "../../../core/entities/User";

export interface IUsersRepository {
    findByUsername(username: string, password: string): Promise<User>
}