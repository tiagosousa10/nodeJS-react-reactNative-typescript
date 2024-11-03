import styles from './styles.module.scss'
import { Button } from '@/app/dashboard/components/button'
import {api} from '@/services/api'
import { redirect} from 'next/navigation'
import {getCookieServer} from '@/lib/cookieServer'

//--- CATEGORY --- 
export default function Category(){

    async function handleRegisterCategory(formData:FormData){
        "use server"

        const name = formData.get("name") // name no input

        if(name === '') return;

       const data = {
        name:name,
       }

       const token = await getCookieServer()

       await api.post("/category", data, {
        headers:{
            Authorization: `Bearer ${token}`
        }
       })
       .catch((err) => {
        console.log(err)
        return;
       })

        redirect("/dashboard")

    }

    return(
        <main className={styles.container}>
            <h1>Pagina Category</h1>

            <form 
                action={handleRegisterCategory}
                className={styles.form}>

                <input 
                    type="text" 
                    name="name" 
                    placeholder='Nome da categoria, ex: Pizzas' 
                    className={styles.input} />
                <Button name="Cadastrar"/>

            </form>
        </main>
    )
}
