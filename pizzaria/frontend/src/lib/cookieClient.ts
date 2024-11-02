import {getCookie} from 'cookies-next'
import { cookies } from 'next/headers'

export function getCookieClient(){
    const token = getCookie("session")

    return token
}
