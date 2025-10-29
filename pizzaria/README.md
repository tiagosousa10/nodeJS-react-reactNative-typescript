# 🍕 Pizzaria - Order Management System

Complete pizza order management system composed of three applications: Backend (REST API), Frontend (Web Dashboard) and Mobile (App for waiters).

## 📋 Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [System Flow](#system-flow)
- [Prerequisites](#prerequisites)
- [Installation and Configuration](#installation-and-configuration)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database Structure](#database-structure)

## 🎯 Overview

This project is a complete pizza order management system that allows:

- **Backend**: REST API to manage users, categories, products and orders
- **Frontend**: Web dashboard for administrators to manage products, categories and view orders
- **Mobile**: React Native app for waiters to open tables and make orders in real-time

### Main Features

- ✅ JWT Authentication
- ✅ Category CRUD
- ✅ Product CRUD
- ✅ Order Management (Create, Add items, Remove items, Finish)
- ✅ Table System
- ✅ Real-time Dashboard
- ✅ Mobile interface for waiters

## 🛠 Technologies Used

### Backend

- **Node.js** with **TypeScript**
- **Express.js** - Web framework
- **Prisma ORM** - Database management
- **PostgreSQL** - Database
- **JWT** (jsonwebtoken) - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload
- **CORS** - Communication between frontend and backend

### Frontend

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Static typing
- **SASS/SCSS** - Styling
- **Axios** - HTTP client
- **Cookies-next** - Cookie management
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Mobile

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation
- **AsyncStorage** - Local storage
- **Axios** - HTTP client
- **TypeScript** - Static typing

## 📁 Project Structure

```
pizzaria/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Controllers (User, Category, Product, Order)
│   │   ├── services/        # Business logic
│   │   ├── middlewares/     # Authentication middlewares
│   │   ├── config/          # Configuration (Multer, etc)
│   │   ├── prisma/          # Prisma client
│   │   ├── routes.ts        # Route definition
│   │   └── server.ts        # Express server
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/       # Database migrations
│   └── tmp/                 # Temporary upload files
│
├── frontend/
│   ├── src/
│   │   ├── app/             # Next.js routes and pages
│   │   │   ├── dashboard/  # Administrative dashboard
│   │   │   ├── signup/      # Signup page
│   │   │   ├── page.tsx     # Login page
│   │   │   └── globals.scss # Global styles
│   │   ├── services/       # API client
│   │   ├── lib/             # Utilities (cookies, helpers)
│   │   └── middleware.ts   # Authentication middleware
│   └── public/             # Static files
│
└── mobile/
    ├── src/
    │   ├── pages/          # App pages
    │   │   ├── SignIn/      # Login
    │   │   ├── Dashboard/   # Table selection
    │   │   ├── Order/       # Order management
    │   │   └── FinishOrder/ # Finalization
    │   ├── components/      # Reusable components
    │   ├── contexts/        # Context API (AuthContext)
    │   ├── routes/          # Route configuration
    │   ├── services/       # API client
    │   └── utils/          # Utilities (theme)
    └── App.tsx             # Main component
```

## 🔄 System Flow

### 1. Authentication

```
User (Admin/Waiter)
    ↓
[Frontend/Mobile] → POST /session
    ↓
[Backend] → Validates credentials → Generates JWT Token
    ↓
[Frontend/Mobile] → Stores token (Cookie/AsyncStorage)
    ↓
Token used in subsequent requests
```

### 2. Order Flow (Mobile)

```
Waiter logs in
    ↓
Selects table number
    ↓
Creates new order (POST /order)
    ↓
Selects category and product
    ↓
Adds items to order (POST /order/add)
    ↓
Views item list
    ↓
Finalizes order (PUT /order/send)
    ↓
Order sent to kitchen
```

### 3. Administrative Flow (Frontend)

```
Admin logs in
    ↓
Accesses Dashboard
    ↓
Manages Categories:
  - Create category (POST /category)
  - List categories (GET /category)
    ↓
Manages Products:
  - Create product (POST /product)
  - List by category (GET /category/product)
    ↓
Views Orders:
  - List orders (GET /orders)
  - View order details (GET /order/detail)
  - Finish order (PUT /order/finish)
```

## 📦 Prerequisites

Before starting, make sure you have installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **PostgreSQL** (version 12 or higher)
- **Git**
- For mobile: **Expo CLI** (`npm install -g expo-cli`)

## ⚙️ Installation and Configuration

### 1. Clone the repository

```bash
git clone <repository-url>
cd pizzaria
```

### 2. Backend Configuration

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/pizzaria?schema=public"

# JWT
JWT_SECRET="your-jwt-secret-key-here"

# Server
PORT=3333

# Cloudinary (optional, for image upload)
CLOUDINARY_URL="your-cloudinary-url"
```

Run database migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

### 3. Frontend Configuration

```bash
cd frontend
npm install
```

Create a `.env.local` file in the `frontend/` folder:

```env
NEXT_PUBLIC_API=http://localhost:3333
```

### 4. Mobile Configuration

```bash
cd mobile
npm install
```

Edit the `mobile/src/services/api.ts` file and configure the API URL:

```typescript
const api = axios.create({
  baseURL: "http://YOUR_LOCAL_IP:3333", // Ex: "http://192.168.1.100:3333"
});
```

**Note**: Use your machine's IP on the local network, not `localhost`, so the mobile app can access the API.

## 🚀 Running the Project

### Backend

```bash
cd backend
npm run dev
```

The server will be running on `http://localhost:3333`

### Frontend

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Mobile

```bash
cd mobile
npm start
```

Or use specific commands:

```bash
npm run android  # For Android
npm run ios       # For iOS (macOS only)
npm run web       # For web
```

**Note**: To test on a physical device, install the Expo Go app and scan the QR code displayed in the terminal.

## 📡 API Endpoints

### Authentication

| Method | Endpoint   | Description   | Auth |
| ------ | ---------- | ------------- | ---- |
| POST   | `/users`   | Create user   | No   |
| POST   | `/session` | Login         | No   |
| GET    | `/me`      | Get user data | Yes  |

### Categories

| Method | Endpoint    | Description     | Auth |
| ------ | ----------- | --------------- | ---- |
| POST   | `/category` | Create category | Yes  |
| GET    | `/category` | List categories | Yes  |

### Products

| Method | Endpoint            | Description               | Auth |
| ------ | ------------------- | ------------------------- | ---- |
| POST   | `/product`          | Create product            | Yes  |
| GET    | `/category/product` | List products by category | Yes  |

### Orders

| Method | Endpoint        | Description            | Auth |
| ------ | --------------- | ---------------------- | ---- |
| POST   | `/order`        | Create order           | Yes  |
| DELETE | `/order`        | Remove order           | Yes  |
| GET    | `/order/detail` | View order details     | Yes  |
| GET    | `/orders`       | List orders            | Yes  |
| POST   | `/order/add`    | Add item to order      | Yes  |
| DELETE | `/order/remove` | Remove item from order | Yes  |
| PUT    | `/order/send`   | Send order to kitchen  | Yes  |
| PUT    | `/order/finish` | Finish order           | Yes  |

## 🔐 Authentication

The system uses JWT (JSON Web Tokens) for authentication.

### Authentication Flow

1. **Login** (`POST /session`):

   ```json
   {
     "email": "user@email.com",
     "password": "password123"
   }
   ```

2. **Response**:

   ```json
   {
     "id": "uuid",
     "name": "User Name",
     "email": "user@email.com",
     "token": "jwt-token-here"
   }
   ```

3. **Use Token**: In authenticated requests, include the header:
   ```
   Authorization: Bearer <token>
   ```

### Token Storage

- **Frontend**: Stored in HTTP-only cookie
- **Mobile**: Stored in local AsyncStorage

### Validation

- The `isAuthenticated` middleware validates the token on all protected routes
- Tokens expire in 30 days
- Invalid token returns status 401 (Unauthorized)

## 🗄️ Database Structure

### Prisma Models

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

The project uses a consistent color system between frontend and mobile:

### Color Palette

- **Seasalt** (`#f8f9faff`): Main background
- **Antiflash White** (`#e9ecefff`): Secondary background
- **Platinum** (`#dee2e6ff`): Borders
- **Slate Gray** (`#6c757dff`): Placeholders
- **Outer Space** (`#495057ff`): Main buttons
- **Onyx** (`#343a40ff`): Button hover
- **Eerie Black** (`#212529ff`): Main text

### Style Standards

- **Border Radius**: 8px (main buttons), 4px (smaller elements)
- **Button Height**: 40px default
- **Font Sizes**: 14px, 16px, 18px, 20px, 30px

## 📝 Useful Scripts

### Backend

```bash
npm run dev          # Development with hot reload
npm run build        # Build for production
npm run start        # Start production version
npm run prisma:generate  # Generate Prisma client
```

### Frontend

```bash
npm run dev          # Development
npm run build        # Build for production
npm run start        # Start production version
npm run lint         # Check code
```

### Mobile

```bash
npm start            # Start Expo
npm run android      # Android
npm run ios          # iOS
npm run web          # Web
```

## 🐛 Troubleshooting

### Common Issues

1. **Database connection error**:

   - Check if PostgreSQL is running
   - Confirm credentials in `.env`

2. **Mobile cannot access API**:

   - Use your machine's IP on the local network (not `localhost`)
   - Verify the device is on the same network
   - Confirm the firewall is not blocking port 3333

3. **Authentication error**:

   - Check if the token is being sent correctly
   - Confirm `JWT_SECRET` is configured
   - Token may have expired (30 days)

4. **Prisma migrations**:
   - Run `npx prisma generate` before starting the server
   - To reset the database: `npx prisma migrate reset`

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Native Documentation](https://reactnative.dev/docs)
- [Expo Documentation](https://docs.expo.dev)

## 🤝 Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the ISC license.

## 👨‍💻 Author

Developed as part of a Node.js, React and React Native course.

---

**Note**: This is a learning project. For production use, consider adding:

- More robust data validation
- Automated tests
- Logging and monitoring
- Rate limiting
- HTTPS in production
- User permission validation
- Secure image upload (Cloudinary/S3)
