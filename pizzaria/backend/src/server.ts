import express ,{Request,Response,NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors'
import {router} from './routes'

const app = express()
app.use(express.json()) //tipo de formato para o express
app.use(cors())
    
app.use(router) // usar as rotas de router

//middleware
app.use((err:Error, req:Request, res:Response, next:NextFunction)=> {
    if(err instanceof Error){
        // se for uma instancia do tipo Error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message:'Internal server error.'
    })
})

app.listen(3333, () => console.log('Servidor Online na porta: 3333'))
