import {cookies} from 'next/headers'

export  async function getCookieServer(){
    const cookieStore= await cookies() // caso de erro no .get/.set dos cookies ! tem que ser async
    const token = cookieStore.get("session")?.value;

    return token || null
}
