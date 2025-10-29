# 📚 Study Projects - Node.js, React and React Native

This repository contains projects and exercises developed during Node.js, React and React Native courses.

## 📁 Repository Structure

### 🎓 **aula/**

Basic React project created with Create React App. Contains fundamental examples of React components and basic structure of a React application.

**Content:**

- Basic React components (`App.js`, `index.js`)
- CSS styles (`style.css`)
- Default Create React App configuration

**Technologies:** React 18, React Scripts

---

### 🌐 **frontend/**

Folder reserved for future frontend projects. Currently empty.

---

### 🚀 **meuprojeto/**

Complete Next.js 15 project with TypeScript, demonstrating advanced framework features.

**Content:**

- Next.js routing structure (App Router)
- Protected routes with route groups `(admin)` and `(site)`
- Reusable components (`Header`, `OwnerRepo`)
- Pages: Admin, Client, Repositories
- Styles with CSS Modules

**Technologies:** Next.js 15, React 19, TypeScript

---

### 💻 **nodejs/**

Basic Node.js projects and exercises.

**Content:**

- `modulo01/`: First course module with fundamental Node.js examples
- Basic JavaScript code to learn essential Node.js concepts

**Technologies:** Node.js

---

### 🍕 **pizzaria/**

**Complete pizza order management system** - Main project composed of three integrated applications.

**Structure:**

- **`backend/`**: REST API with Node.js, Express, TypeScript, Prisma and PostgreSQL
  - JWT authentication system
  - CRUD for categories, products and orders
  - Image upload
  - Organized Controllers, Services, Middlewares
- **`frontend/`**: Administrative web dashboard with Next.js
  - Interface to manage products and categories
  - Real-time order viewing
  - Authentication and route protection
- **`mobile/`**: React Native app for waiters
  - Mobile application with Expo
  - Table and order management
  - Interface optimized for mobile devices

**Technologies:** Node.js, Express, TypeScript, Prisma, PostgreSQL, Next.js, React Native, Expo

**📖 For more details, see:** `pizzaria/README.md`

---

### 🎬 **prime/**

React application that simulates a movie catalog (similar to Postflix/Netflix).

**Content:**

- Navigation with React Router DOM
- Pages: Home, Movie, Favorites, Error
- External API integration (Axios)
- Toast notifications
- Reusable Header component

**Technologies:** React 18, React Router DOM, Axios, React Toastify

---

### 📝 **primeiras-aulas/**

Basic HTML and JavaScript projects for beginners.

**Content:**

- Pure HTML examples
- Basic JavaScript scripts
- Web programming fundamentals

**Technologies:** HTML, Vanilla JavaScript

---

### 🎯 **primeiro-app/**

First React project created during the course.

**Content:**

- Main component `App.js`
- Custom component `Nome.js`
- Basic React structure
- Initial Create React App configuration

**Technologies:** React, Create React App

---

### 🎥 **src - POSTFLIX-professor/**

Reference code provided by the course instructor (Postflix).

**Content:**

- Complete React project structure
- Components: Header
- Pages: Home, Movie, Favorites, Error
- API service
- Route configuration
- CSS styles organized by component

**Technologies:** React, React Router DOM

**Note:** Educational reference code from instructor.

---

### 🗂️ **sujeito/**

React project with complete routing system.

**Content:**

- Navigation with React Router
- Pages: Home, Product, About, Contact, Error
- Reusable Header component
- Organized CSS styles
- Configured route structure

**Technologies:** React, React Router DOM

---

### ✅ **tarefas/**

Basic React Native application for task management.

**Content:**

- Main component `App.tsx`
- Task component `Tarefa.js`
- Expo configuration
- App assets and icons

**Technologies:** React Native, Expo

---

## 🛠️ Technologies Used

### Frontend

- **React** (18.x) - JavaScript library for interfaces
- **Next.js** (15.x) - React framework for production
- **TypeScript** - JavaScript superset with static typing
- **React Router DOM** - Routing for React applications
- **CSS Modules / SCSS** - Modular styling

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Minimalist web framework
- **TypeScript** - Static typing
- **Prisma** - ORM for database
- **PostgreSQL** - Relational database
- **JWT** - Token authentication

### Mobile

- **React Native** - Framework for mobile development
- **Expo** - React Native development platform

### Tools

- **Axios** - HTTP client
- **Bcryptjs** - Password hashing
- **Multer** - File upload
- **Cloudinary** - Image storage

---

## 📖 How to Use

Each project is independent and has its own configuration. To start a project:

1. Navigate to the desired project folder
2. Install dependencies: `npm install`
3. Run the project as indicated in the `package.json` of each folder

**Examples:**

```bash
# Basic React project
cd aula
npm install
npm start

# Next.js project
cd meuprojeto
npm install
npm run dev

# Pizzaria System (Backend)
cd pizzaria/backend
npm install
npm run dev

# Pizzaria System (Frontend)
cd pizzaria/frontend
npm install
npm run dev

# Pizzaria System (Mobile)
cd pizzaria/mobile
npm install
npm start
```

---

## 📝 Notes

- This repository contains learning projects and course exercises
- Some projects may be at different stages of development
- The **pizzaria** project is the most complete and includes detailed documentation
- For specific projects, consult individual READMEs when available

---

## 🎯 Objective

This repository documents the learning journey in:

- Frontend development with React and Next.js
- Backend development with Node.js and Express
- Mobile development with React Native and Expo
- TypeScript for typed development
- Integration between frontend, backend and mobile

---

**Developed during Node.js, React and React Native courses** 🚀
