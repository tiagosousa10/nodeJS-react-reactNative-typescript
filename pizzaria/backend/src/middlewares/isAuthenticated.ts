import {NextFunction, Request,Response} from 'express'
import {verify} from 'jsonwebtoken'

interface Payload{
    sub:string;
}

export function isAuthenticated(
    req:Request,
    res:Response, 
    next:NextFunction
){

                                                        //Receber o Token
const authToken = req.headers.authorization;

if(!authToken){
    return res.status(401).end() // 401- nao autorizado
}

const [, token] = authToken.split(" ") // Destruturar o authToken

    try{
                                                        //validar o token
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        return next()

    }catch(e){ // caso nao exista o token 
        return res.status(401).end() // nao autorizado
    }
}
