import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import logoImg from '/public/logo.svg'

export default function Signup(){
    return(
        <>
        <div className={styles.containerCenter} >
      <Image src={logoImg} alt="Logo da pizzaria"     />

      <section className={styles.login}>
        <h1>Criar a sua Conta</h1>
        <form action="">
         <input 
          type="text" 
          required 
          name='name' 
          placeholder='Digite o seu nome...' 
          className={styles.input}
        />
         <input 
          type="email" 
          required 
          name='email' 
          placeholder='Digite o seu e-mail...' 
          className={styles.input}
        />

        <input 
          type="password" 
          required 
          name='password' 
          placeholder='**********' 
          className={styles.input}
        />

    <button type='submit' className={styles.button}>
      Cadastrar
    </button>
    </form>

    <Link href='/' className={styles.text}>
        Já possui uma conta? Faça o Login.
    </Link>
      </section>
    </div>
        </>
    )
}
