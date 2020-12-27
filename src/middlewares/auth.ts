import {NextFunction, Request, Response} from "express";
import {decode} from "../utils/jwt";

export async function authByToken(req:Request, res:Response, next:NextFunction){
    const authHeader = req.header('Authorisation')?.split(' ')
    if (!authHeader){
        return res.status(401).json({
            errors: { body: [ 'Authorisation failed', 'No Authorisation header'] }
        })
    }

    if (authHeader[0] != 'Token'){
        return res.status(401).json({
            errors: { body: [ 'Authorisation failed', 'No token'] }
        })
    }

    const token = authHeader[1]
    try{
        const user = await decode(token);
        if (!user) {throw new Error('No user found in token')}
        ;(req as any).user = user
        return next()
    }catch (e) {
        return res.status(401).json({
            errors: { body: [ 'Authorisation failed', e.message] }
        })
    }

}