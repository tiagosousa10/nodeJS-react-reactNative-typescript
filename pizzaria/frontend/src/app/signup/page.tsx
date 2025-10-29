"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";
import logoImg from "/public/logo.svg";

import { toast } from "sonner";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  async function handleRegister(formData: FormData) {
    console.log("cheguei ao handleRegister");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (
      !name ||
      !email ||
      !password ||
      name === "" ||
      email === "" ||
      password === ""
    ) {
      console.log("PREENCHA TODOS OS CAMPOS !");
      return;
    }

    try {
      console.log("cheguei ao try");
      const response = await api.post("/users", {
        name: name,
        email: email,
        password: password,
      });

      if (!response.data) {
        toast.error("Erro ao criar usuário");
        return;
      }
      toast.success("Utilizador criado com sucesso");
      router.push("/");
    } catch (err) {
      console.log("erro!", err);
    }
  }

  return (
    <>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo da pizzaria" />

        <section className={styles.login}>
          <h1>Criar a sua Conta</h1>
          <form action={handleRegister}>
            <input
              type="text"
              required
              name="name"
              placeholder="Digite o seu nome..."
              className={styles.input}
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Digite o seu e-mail..."
              className={styles.input}
            />

            <input
              type="password"
              required
              name="password"
              placeholder="**********"
              className={styles.input}
            />

            <button type="submit" className={styles.button}>
              Cadastrar
            </button>
          </form>

          <Link href="/" className={styles.text}>
            Já possui uma conta? Faça o Login.
          </Link>
        </section>
      </div>
    </>
  );
}
