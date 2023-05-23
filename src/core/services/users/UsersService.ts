import ErrorMessage from "@utils/ErrorMessage";
import { IUsersService } from "./IUsersService";
import { UserCredentialsDTO } from "./dtos/UserCredentialsDTO";
import axios from "axios";
import querystring from "querystring"

export class UsersService implements IUsersService {

    async login(userCredentials: UserCredentialsDTO): Promise<string> {
        try {
            const token = await axios.post(`http://keycloak:${process.env.KEYCLOAK_PORT}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,
                querystring.stringify({
                    grant_type: process.env.KEYCLOAK_GRANT_TYPE_PASSWORD,
                    client_id: process.env.KEYCLOAK_CLIENT_ID,
                    username: userCredentials.username,
                    password: userCredentials.password,
                    client_secret: process.env.KEYCLOAK_SECRET,
                }), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            return token.data
        } catch (e) {
            throw new ErrorMessage(401, 'Credenciais inválidas')
        }
    }
}