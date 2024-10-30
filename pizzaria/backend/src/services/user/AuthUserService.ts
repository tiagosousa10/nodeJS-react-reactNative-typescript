import prismaClient from "../../prisma";
import {compare} from 'bcryptjs'

interface AuthRequest{
    email:string,
    password:string
}

class AuthUserService{
    async execute({email,password}:AuthRequest){
        //                                                  Verificar se o email existe

        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("User/Password Incorrect")
        }

        //                                              preciso verificar se a senha está correta
        const passwordMatch = await compare(password,user.password)

        if(!passwordMatch){
            throw new Error("User/Password Incorrect")

        }

        //gerar um token JWT e devolver os dados do utilizador como id, name, email

        return {ok:true} // se passar por todas as verificaçoes RETORNA isto!!
    }
}

export {AuthUserService}
