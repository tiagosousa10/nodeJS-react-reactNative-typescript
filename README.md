# 📚 Projetos de Estudo - Node.js, React e React Native

Este repositório contém projetos e exercícios desenvolvidos durante cursos de Node.js, React e React Native.

## 📁 Estrutura do Repositório

### 🎓 **aula/**

Projeto React básico criado com Create React App. Contém exemplos fundamentais de componentes React e estrutura básica de uma aplicação React.

**Conteúdo:**

- Componentes React básicos (`App.js`, `index.js`)
- Estilos CSS (`style.css`)
- Configuração padrão do Create React App

**Tecnologias:** React 18, React Scripts

---

### 🌐 **frontend/**

Pasta reservada para projetos frontend futuros. Atualmente vazia.

---

### 🚀 **meuprojeto/**

Projeto Next.js 15 completo com TypeScript, demonstrando funcionalidades avançadas do framework.

**Conteúdo:**

- Estrutura de rotas do Next.js (App Router)
- Rotas protegidas com grupos de rotas `(admin)` e `(site)`
- Componentes reutilizáveis (`Header`, `OwnerRepo`)
- Páginas: Admin, Cliente, Repositórios
- Estilos com CSS Modules

**Tecnologias:** Next.js 15, React 19, TypeScript

---

### 💻 **nodejs/**

Projetos e exercícios básicos de Node.js.

**Conteúdo:**

- `modulo01/`: Primeiro módulo do curso com exemplos fundamentais de Node.js
- Código básico em JavaScript para aprender conceitos essenciais do Node.js

**Tecnologias:** Node.js

---

### 🍕 **pizzaria/**

**Sistema completo de gestão de pedidos para pizzaria** - Projeto principal composto por três aplicações integradas.

**Estrutura:**

- **`backend/`**: API REST com Node.js, Express, TypeScript, Prisma e PostgreSQL
  - Sistema de autenticação JWT
  - CRUD de categorias, produtos e pedidos
  - Upload de imagens
  - Controllers, Services, Middlewares organizados
- **`frontend/`**: Dashboard web administrativo com Next.js
  - Interface para gerenciar produtos e categorias
  - Visualização de pedidos em tempo real
  - Autenticação e proteção de rotas
- **`mobile/`**: App React Native para garçons
  - Aplicativo mobile com Expo
  - Gestão de mesas e pedidos
  - Interface otimizada para dispositivos móveis

**Tecnologias:** Node.js, Express, TypeScript, Prisma, PostgreSQL, Next.js, React Native, Expo

**📖 Para mais detalhes, consulte:** `pizzaria/README.md`

---

### 🎬 **prime/**

Aplicação React que simula um catálogo de filmes (similar ao Postflix/Netflix).

**Conteúdo:**

- Navegação com React Router DOM
- Páginas: Home, Filme, Favoritos, Erro
- Integração com API externa (Axios)
- Notificações toast
- Componente Header reutilizável

**Tecnologias:** React 18, React Router DOM, Axios, React Toastify

---

### 📝 **primeiras-aulas/**

Projetos HTML e JavaScript básicos para iniciantes.

**Conteúdo:**

- Exemplos de HTML puro
- Scripts JavaScript básicos
- Fundamentos de programação web

**Tecnologias:** HTML, JavaScript vanilla

---

### 🎯 **primeiro-app/**

Primeiro projeto React criado durante o curso.

**Conteúdo:**

- Componente principal `App.js`
- Componente customizado `Nome.js`
- Estrutura básica de React
- Configuração inicial do Create React App

**Tecnologias:** React, Create React App

---

### 🎥 **src - POSTFLIX-professor/**

Código de referência fornecido pelo professor do curso (Postflix).

**Conteúdo:**

- Estrutura de projeto React completa
- Componentes: Header
- Páginas: Home, Filme, Favoritos, Erro
- Serviço de API
- Configuração de rotas
- Estilos CSS organizados por componente

**Tecnologias:** React, React Router DOM

**Nota:** Código de referência educacional do professor.

---

### 🗂️ **sujeito/**

Projeto React com sistema de rotas completo.

**Conteúdo:**

- Navegação com React Router
- Páginas: Home, Produto, Sobre, Contato, Erro
- Componente Header reutilizável
- Estilos CSS organizados
- Estrutura de rotas configurada

**Tecnologias:** React, React Router DOM

---

### ✅ **tarefas/**

Aplicativo React Native básico para gerenciamento de tarefas.

**Conteúdo:**

- Componente principal `App.tsx`
- Componente de tarefas `Tarefa.js`
- Configuração Expo
- Assets e ícones do aplicativo

**Tecnologias:** React Native, Expo

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React** (18.x) - Biblioteca JavaScript para interfaces
- **Next.js** (15.x) - Framework React para produção
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Router DOM** - Roteamento para aplicações React
- **CSS Modules / SCSS** - Estilização modular

### Backend

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação por tokens

### Mobile

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento React Native

### Ferramentas

- **Axios** - Cliente HTTP
- **Bcryptjs** - Hash de senhas
- **Multer** - Upload de arquivos
- **Cloudinary** - Armazenamento de imagens

---

## 📖 Como Usar

Cada projeto é independente e possui sua própria configuração. Para iniciar um projeto:

1. Navegue até a pasta do projeto desejado
2. Instale as dependências: `npm install`
3. Execute o projeto conforme indicado no `package.json` de cada pasta

**Exemplos:**

```bash
# Projeto React básico
cd aula
npm install
npm start

# Projeto Next.js
cd meuprojeto
npm install
npm run dev

# Sistema Pizzaria (Backend)
cd pizzaria/backend
npm install
npm run dev

# Sistema Pizzaria (Frontend)
cd pizzaria/frontend
npm install
npm run dev

# Sistema Pizzaria (Mobile)
cd pizzaria/mobile
npm install
npm start
```

---

## 📝 Notas

- Este repositório contém projetos de aprendizado e exercícios de cursos
- Alguns projetos podem estar em diferentes estágios de desenvolvimento
- O projeto **pizzaria** é o mais completo e inclui documentação detalhada
- Para projetos específicos, consulte os READMEs individuais quando disponíveis

---

## 🎯 Objetivo

Este repositório documenta a jornada de aprendizado em:

- Desenvolvimento Frontend com React e Next.js
- Desenvolvimento Backend com Node.js e Express
- Desenvolvimento Mobile com React Native e Expo
- TypeScript para desenvolvimento tipado
- Integração entre frontend, backend e mobile

---

**Desenvolvido durante cursos de Node.js, React e React Native** 🚀
