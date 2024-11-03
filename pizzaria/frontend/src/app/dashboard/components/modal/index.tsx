"use client"
import styles from './styles.module.scss'
import { X} from 'lucide-react'
import {use} from 'react'
import {OrderContext} from '@/providers/order'

export function Modalorder(){
    const {onRequestClose} = use(OrderContext)


    return(
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <button className={styles.dialogBack} onClick={onRequestClose}>
                     <X  size={40} color='#ff3f4b'  />
                 </button>

                 <article className={styles.container}>
                        <h2>Detalhes do Pedido</h2>

                        <span   className={styles.table}>
                            Mesa <b>36</b>
                        </span>

                        <section className={styles.item}>
                            <span>
                                1 - <b>Pizza Catupiry</b>
                            </span>
                            <span className={styles.description}>Pizza de frango com atupiry </span>
                        </section>


                        <section className={styles.item}>
                            <span>
                                1 - <b>Pizza Universal</b>
                            </span>
                            <span className={styles.description}>Pizza de frango com atupiry </span>
                        </section>

                        <button className={styles.buttonOrder}>
                            Concluir Pedido
                        </button>
                 </article>
            </section>
        </dialog>
    )
}
