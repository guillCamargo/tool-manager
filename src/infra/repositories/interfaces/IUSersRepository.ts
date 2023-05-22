import User from "@entities/User";

export interface IUsersRepository {
    findByUsernameAndPassword(username: string, password: string): Promise<User>
}