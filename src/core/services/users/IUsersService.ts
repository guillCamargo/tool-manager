import { UserCredentialsDTO } from "./dtos/UserCredentialsDTO";

export interface IUsersService {
    login(userCredentials: UserCredentialsDTO): Promise<string>
}