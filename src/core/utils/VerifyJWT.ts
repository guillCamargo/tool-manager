import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const verifyJWT = (req: Request, res: Response, next: () => void) => {
    const authorization = req.headers['authorization']
    let token = '';
    if (!authorization)
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    else
        token = authorization.replace('Bearer ', '');

    jwt.verify(
        token,
        process.env.SECRET,
        (error, decoded) => {
            if (error) {
                console.log(error)
                return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
            }

            next()
        });
}