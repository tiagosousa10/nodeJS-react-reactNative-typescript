# 🍕 Pizzaria - Sistema de Gestão de Pedidos

Sistema completo de gestão de pedidos para pizzaria composto por três aplicações: Backend (API REST), Frontend (Web Dashboard) e Mobile (Aplicativo para garçons).

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Fluxo do Sistema](#fluxo-do-sistema)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
- [Executando o Projeto](#executando-o-projeto)
- [API Endpoints](#api-endpoints)
- [Autenticação](#autenticação)
- [Estrutura do Banco de Dados](#estrutura-do-banco-de-dados)

## 🎯 Visão Geral

Este projeto é um sistema completo de gestão de pedidos para pizzaria que permite:

- **Backend**: API REST para gerenciar usuários, categorias, produtos e pedidos
- **Frontend**: Dashboard web para administradores gerenciarem produtos, categorias e visualizarem pedidos
- **Mobile**: Aplicativo React Native para garçons abrirem mesas e fazerem pedidos em tempo real

### Funcionalidades Principais

- ✅ Autenticação com JWT
- ✅ CRUD de Categorias
- ✅ CRUD de Produtos
- ✅ Gestão de Pedidos (Criar, Adicionar itens, Remover itens, Finalizar)
- ✅ Sistema de Mesas
- ✅ Dashboard em tempo real
- ✅ Interface mobile para garçons

## 🛠 Tecnologias Utilizadas

### Backend

- **Node.js** com **TypeScript**
- **Express.js** - Framework web
- **Prisma ORM** - Gerenciamento de banco de dados
- **PostgreSQL** - Banco de dados
- **JWT** (jsonwebtoken) - Autenticação
- **bcryptjs** - Hash de senhas
- **Multer** - Upload de arquivos
- **CORS** - Comunicação entre frontend e backend

### Frontend

- **Next.js 15** - Framework React
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **SASS/SCSS** - Estilização
- **Axios** - Cliente HTTP
- **Cookies-next** - Gerenciamento de cookies
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

### Mobile

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **React Navigation** - Navegação
- **AsyncStorage** - Armazenamento local
- **Axios** - Cliente HTTP
- **TypeScript** - Tipagem estática

## 📁 Estrutura do Projeto

```
pizzaria/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Controllers (User, Category, Product, Order)
│   │   ├── services/        # Lógica de negócio
│   │   ├── middlewares/     # Middlewares de autenticação
│   │   ├── config/          # Configurações (Multer, etc)
│   │   ├── prisma/          # Cliente Prisma
│   │   ├── routes.ts        # Definição de rotas
│   │   └── server.ts        # Servidor Express
│   ├── prisma/
│   │   ├── schema.prisma    # Schema do banco de dados
│   │   └── migrations/       # Migrações do banco
│   └── tmp/                 # Arquivos temporários de upload
│
├── frontend/
│   ├── src/
│   │   ├── app/             # Rotas e páginas Next.js
│   │   │   ├── dashboard/  # Dashboard administrativo
│   │   │   ├── signup/      # Página de cadastro
│   │   │   ├── page.tsx     # Página de login
│   │   │   └── globals.scss # Estilos globais
│   │   ├── services/       # Cliente API
│   │   ├── lib/             # Utilitários (cookies, helpers)
│   │   └── middleware.ts   # Middleware de autenticação
│   └── public/             # Arquivos estáticos
│
└── mobile/
    ├── src/
    │   ├── pages/          # Páginas do app
    │   │   ├── SignIn/      # Login
    │   │   ├── Dashboard/   # Seleção de mesa
    │   │   ├── Order/       # Gestão de pedido
    │   │   └── FinishOrder/ # Finalização
    │   ├── components/      # Componentes reutilizáveis
    │   ├── contexts/        # Context API (AuthContext)
    │   ├── routes/          # Configuração de rotas
    │   ├── services/       # Cliente API
    │   └── utils/          # Utilitários (theme)
    └── App.tsx             # Componente principal
```

## 🔄 Fluxo do Sistema

### 1. Autenticação

```
Usuário (Admin/Garçom)
    ↓
[Frontend/Mobile] → POST /session
    ↓
[Backend] → Valida credenciais → Gera JWT Token
    ↓
[Frontend/Mobile] → Armazena token (Cookie/AsyncStorage)
    ↓
Token usado em requisições subsequentes
```

### 2. Fluxo de Pedidos (Mobile)

```
Garçom faz login
    ↓
Seleciona número da mesa
    ↓
Cria novo pedido (POST /order)
    ↓
Seleciona categoria e produto
    ↓
Adiciona itens ao pedido (POST /order/add)
    ↓
Visualiza lista de itens
    ↓
Finaliza pedido (PUT /order/send)
    ↓
Pedido enviado para cozinha
```

### 3. Fluxo Administrativo (Frontend)

```
Admin faz login
    ↓
Acessa Dashboard
    ↓
Gerencia Categorias:
  - Criar categoria (POST /category)
  - Listar categorias (GET /category)
    ↓
Gerencia Produtos:
  - Criar produto (POST /product)
  - Listar por categoria (GET /category/product)
    ↓
Visualiza Pedidos:
  - Listar pedidos (GET /orders)
  - Detalhar pedido (GET /order/detail)
  - Finalizar pedido (PUT /order/finish)
```

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **PostgreSQL** (versão 12 ou superior)
- **Git**
- Para mobile: **Expo CLI** (`npm install -g expo-cli`)

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd pizzaria
```

### 2. Configuração do Backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend/`:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/pizzaria?schema=public"

# JWT
JWT_SECRET="sua-chave-secreta-jwt-aqui"

# Server
PORT=3333

# Cloudinary (opcional, para upload de imagens)
CLOUDINARY_URL="sua-url-cloudinary"
```

Execute as migrações do banco de dados:

```bash
npx prisma generate
npx prisma migrate dev
```

### 3. Configuração do Frontend

```bash
cd frontend
npm install
```

Crie um arquivo `.env.local` na pasta `frontend/`:

```env
NEXT_PUBLIC_API=http://localhost:3333
```

### 4. Configuração do Mobile

```bash
cd mobile
npm install
```

Edite o arquivo `mobile/src/services/api.ts` e configure a URL da API:

```typescript
const api = axios.create({
  baseURL: "http://SEU_IP_LOCAL:3333", // Ex: "http://192.168.1.100:3333"
});
```

**Nota**: Use o IP da sua máquina na rede local, não `localhost`, para que o app mobile possa acessar a API.

## 🚀 Executando o Projeto

### Backend

```bash
cd backend
npm run dev
```

O servidor estará rodando em `http://localhost:3333`

### Frontend

```bash
cd frontend
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

### Mobile

```bash
cd mobile
npm start
```

Ou use os comandos específicos:

```bash
npm run android  # Para Android
npm run ios       # Para iOS (apenas macOS)
npm run web       # Para web
```

**Nota**: Para testar no dispositivo físico, instale o app Expo Go e escaneie o QR code exibido no terminal.

## 📡 API Endpoints

### Autenticação

| Método | Endpoint   | Descrição              | Auth |
| ------ | ---------- | ---------------------- | ---- |
| POST   | `/users`   | Criar usuário          | Não  |
| POST   | `/session` | Login                  | Não  |
| GET    | `/me`      | Obter dados do usuário | Sim  |

### Categorias

| Método | Endpoint    | Descrição         | Auth |
| ------ | ----------- | ----------------- | ---- |
| POST   | `/category` | Criar categoria   | Sim  |
| GET    | `/category` | Listar categorias | Sim  |

### Produtos

| Método | Endpoint            | Descrição                     | Auth |
| ------ | ------------------- | ----------------------------- | ---- |
| POST   | `/product`          | Criar produto                 | Sim  |
| GET    | `/category/product` | Listar produtos por categoria | Sim  |

### Pedidos

| Método | Endpoint        | Descrição                  | Auth |
| ------ | --------------- | -------------------------- | ---- |
| POST   | `/order`        | Criar pedido               | Sim  |
| DELETE | `/order`        | Remover pedido             | Sim  |
| GET    | `/order/detail` | Detalhar pedido            | Sim  |
| GET    | `/orders`       | Listar pedidos             | Sim  |
| POST   | `/order/add`    | Adicionar item ao pedido   | Sim  |
| DELETE | `/order/remove` | Remover item do pedido     | Sim  |
| PUT    | `/order/send`   | Enviar pedido para cozinha | Sim  |
| PUT    | `/order/finish` | Finalizar pedido           | Sim  |

## 🔐 Autenticação

O sistema utiliza JWT (JSON Web Tokens) para autenticação.

### Fluxo de Autenticação

1. **Login** (`POST /session`):

   ```json
   {
     "email": "usuario@email.com",
     "password": "senha123"
   }
   ```

2. **Resposta**:

   ```json
   {
     "id": "uuid",
     "name": "Nome do Usuário",
     "email": "usuario@email.com",
     "token": "jwt-token-aqui"
   }
   ```

3. **Usar Token**: Em requisições autenticadas, inclua o header:
   ```
   Authorization: Bearer <token>
   ```

### Armazenamento do Token

- **Frontend**: Armazenado em cookie HTTP-only
- **Mobile**: Armazenado no AsyncStorage local

### Validação

- O middleware `isAuthenticated` valida o token em todas as rotas protegidas
- Tokens expiram em 30 dias
- Token inválido retorna status 401 (Unauthorized)

## 🗄️ Estrutura do Banco de Dados

### Modelos Prisma

#### User

```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String
  password  String
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())
}
```

#### Category

```prisma
model Category {
  id        String   @id @default(uuid())
  name      String
  products  Product[]
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())
}
```

#### Product

```prisma
model Product {
  id          String   @id @default(uuid())
  name        String
  price       String
  description String
  banner      String
  category_id String
  category    Category @relation(fields: [category_id], references: [id])
  items       Item[]
  created_at  DateTime? @default(now())
  updated_at  DateTime? @default(now())
}
```

#### Order

```prisma
model Order {
  id        String   @id @default(uuid())
  table     Int
  status    Boolean  @default(false)
  draft     Boolean  @default(true)
  name      String?
  items     Item[]
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())
}
```

#### Item

```prisma
model Item {
  id         String   @id @default(uuid())
  amount     Int
  order_id   String
  product_id String
  order      Order    @relation(fields: [order_id], references: [id])
  product    Product  @relation(fields: [product_id], references: [id])
  created_at DateTime? @default(now())
  updated_at DateTime? @default(now())
}
```

## 🎨 Design System

O projeto utiliza um sistema de cores consistente entre frontend e mobile:

### Paleta de Cores

- **Seasalt** (`#f8f9faff`): Background principal
- **Antiflash White** (`#e9ecefff`): Background secundário
- **Platinum** (`#dee2e6ff`): Bordas
- **Slate Gray** (`#6c757dff`): Placeholders
- **Outer Space** (`#495057ff`): Botões principais
- **Onyx** (`#343a40ff`): Hover de botões
- **Eerie Black** (`#212529ff`): Textos principais

### Padrões de Estilo

- **Border Radius**: 8px (botões principais), 4px (elementos menores)
- **Altura de Botões**: 40px padrão
- **Font Sizes**: 14px, 16px, 18px, 20px, 30px

## 📝 Scripts Úteis

### Backend

```bash
npm run dev          # Desenvolvimento com hot reload
npm run build        # Build para produção
npm run start        # Iniciar versão de produção
npm run prisma:generate  # Gerar cliente Prisma
```

### Frontend

```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run start        # Iniciar versão de produção
npm run lint         # Verificar código
```

### Mobile

```bash
npm start            # Iniciar Expo
npm run android      # Android
npm run ios          # iOS
npm run web          # Web
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de conexão com banco de dados**:

   - Verifique se o PostgreSQL está rodando
   - Confirme as credenciais no `.env`

2. **Mobile não consegue acessar API**:

   - Use o IP da máquina na rede local (não `localhost`)
   - Verifique se o dispositivo está na mesma rede
   - Confirme que o firewall não está bloqueando a porta 3333

3. **Erro de autenticação**:

   - Verifique se o token está sendo enviado corretamente
   - Confirme se o `JWT_SECRET` está configurado
   - Token pode ter expirado (30 dias)

4. **Prisma migrations**:
   - Execute `npx prisma generate` antes de rodar o servidor
   - Para resetar o banco: `npx prisma migrate reset`

## 📚 Recursos Adicionais

- [Documentação Prisma](https://www.prisma.io/docs)
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação React Native](https://reactnative.dev/docs)
- [Documentação Expo](https://docs.expo.dev)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

Desenvolvido como parte de um curso de Node.js, React e React Native.

---

**Nota**: Este é um projeto de aprendizado. Para uso em produção, considere adicionar:

- Validação mais robusta de dados
- Testes automatizados
- Logging e monitoramento
- Rate limiting
- HTTPS em produção
- Validação de permissões de usuário
- Upload de imagens seguro (Cloudinary/S3)
