import {NextRequest,NextResponse} from 'next/server'
import { getCookieServer } from '@/lib/cookieServer'
import {api} from '@/services/api'

export async function middleware(req:NextRequest){

    const {pathname} = req.nextUrl

    if(pathname.startsWith("/_next") || pathname === "/"){
        return NextResponse.next()
    }

    const token = await getCookieServer()
    
    
    if(pathname.startsWith("/dashboard")){
        if(!token){ //senao tiver TOKEN ao tentar entrar em dashboard
            return NextResponse.redirect(new URL('/', req.url)) // redirecionar para a pagina de LOGIN
        }

        const isValid= await validateToken(token)
        console.log(isValid)

        if(!isValid){
            return NextResponse.redirect(new URL('/', req.url)) // redirecionar para a pagina de LOGIN
        }
    }

    return NextResponse.next() // deixo renderizar a URL, apos passar por todos os passos

  
}

// --- VERIFICAR TOKEN --- true or false
async function validateToken(token:string){ 
    if(!token) return false;

    try{
        await api.get('/me',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        return true;

    }catch(e){
        return false
    }
}
