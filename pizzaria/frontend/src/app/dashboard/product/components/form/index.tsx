"use client"
import { ChangeEvent, useState } from 'react'
import styles from './styles.module.scss'
import  {UploadCloud} from 'lucide-react'
import Image from 'next/image'
import {Button} from '@/app/dashboard/components/button'
import { api } from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'
import {toast} from 'sonner'
import {useRouter} from 'next/navigation'

//                                                          --- INTERFACES ADICIONAR CATEGORIAS ---
interface CategoryProps{
    id:string
    name:string
}

interface Props{
    categories: CategoryProps[]
}
//                                                                  --- FUNCAO PRINCIPAL ---
export function Form({categories}:Props){
    const router = useRouter()
    const [image,setImage] = useState<File>()
    const [previewImage,setPreviewImage] = useState("")


    //                                                               --- REGISTAR PRODUTO ---
    async function handleRegisterProduct(formData:FormData){
        const categoryIndex = formData.get("category")
        const name = formData.get("name")
        const price = formData.get("price")
        const description = formData.get("description")

        if(!name || !categoryIndex || !price || !description || !image){
            toast.warning("Preencha todos os campos!")
            return;
        }
     
        const data = new FormData()

        data.append("name",name)
        data.append("price",price)
        data.append("description",description)
        data.append("category_id", categories[Number(categoryIndex)].id)
        data.append("file",image)

        const token = getCookieClient() // para ir buscar o token aos cookies armazenados na web
        await api.post("/product",data,{ // para enviar o produto para a base de dados/backend
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log("erro", err)
            toast.warning("FALHA ao cadastrar PRODUTO!")

            return
        })
        toast.success("Produto Registado com SUCESSO!")
        router.push("/dashboard")
    }


    //                                                                   --- UPLOAD IMAGEM ---
    function handleFile(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files[0]){
            const image = e.target.files[0]

            if(image.type !== "image/jpeg" && image.type !== "image/png"){
                toast.warning("Formato não permitido!")
                return
            }

            setImage(image)
            setPreviewImage(URL.createObjectURL(image))
        }
    }


    return(
        <main className={styles.container}>
            <h1>Novo Produto</h1>
            <form action={handleRegisterProduct} className={styles.form}     >
            <label className={styles.labelImage}>
                <span>
                    <UploadCloud  size={24}  color='#fff' />
                </span>
                <input 
                 type="file"
                 accept='image/png, image/jpeg'
                 required 
                 onChange={handleFile}
                 />

                 {previewImage && (
                    <Image 
                        alt='Imagem de previe'
                        src={previewImage}
                        className={styles.preview}
                        fill={true}
                        quality={100}
                        priority={true}
                    />
                 )}
            </label>
            
                 <select name="category" >
                    {categories.map((category, index)=> (
                         <option key={category.id} value={index}      >
                            {category.name}
                         </option>
                    ) 
                )}
                 </select>

                 <input 
                  type="text"
                  name="name" 
                  placeholder='Digite o nome do produto...'
                  required
                  className={styles.input}
                  />

                 <input 
                  type="text"
                  name="price" 
                  placeholder='Digite preço do produto...'
                  required
                  className={styles.input}
                  />

                  <textarea 
                   className={styles.input}
                   placeholder='Digite a descriçao do produto...'
                   required
                   name='description'
                   ></textarea>
                   <Button name='Cadastrar Produto' />
            </form>
        </main>
    )
}
