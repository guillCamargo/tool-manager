import { Request, Response } from "express";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
var querystring = require('querystring');

export const verifyJWT = async (req: Request, res: Response, next: () => void) => {
    const authorization = req.headers['authorization']
    if (!authorization)
        return res.status(401).json({ auth: false, message: 'No token provided.' });

    const config = {
        headers: { Authorization: authorization }
    };

    try {
        await axios.get(`http://keycloak:${process.env.KEYCLOAK_PORT}/auth/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/userinfo`,
            config);

            next()
    } catch (e) {
        throw new ErrorMessage(401, 'Token Inválido')
    }

}