# 🧩 Proyecto Backend — API de Gestión de Tareas Colaborativa

API REST desarrollada con **Node.js + Express + Prisma + PostgreSQL**, que permite gestionar usuarios, proyectos y tareas con autenticación JWT y control de roles.

---

## 🚀 Objetivo

Construir una API profesional y modular aplicando buenas prácticas de backend:

- Arquitectura escalable
- Seguridad (JWT, roles)
- Validación de datos
- Despliegue en la nube
- Testing básico

---

## 🧱 Stack Tecnológico

| Categoría         | Tecnología                | Estado |
| ----------------- | ------------------------- | :----: |
| Lenguaje          | Node.js (v20+)            |  [x]   |
| Framework         | Express.js                |  [x]   |
| ORM               | Prisma                    |  [x]   |
| Base de datos     | PostgreSQL                |  [x]   |
| Validación        | Zod                       |  [x]   |
| Autenticación     | JWT + bcrypt              |  [x]   |
| Seguridad         | helmet, cors              |  [ ]   |
| Logging           | morgan                    |  [ ]   |
| Variables entorno | dotenv                    |  [x]   |
| Testing           | Jest + Supertest          |  [ ]   |
| Despliegue        | Render / Railway / Fly.io |  [ ]   |
| Bonus             | Docker + Swagger          |  [ ]   |

---

## 📁 Estructura del proyecto

```
├── src/
│ ├── config/ # Configuración (BD, env)
│ ├── controllers/ # Lógica de negocio
│ ├── routes/ # Endpoints de la API
│ ├── models/ # Modelos de datos (Prisma)
│ ├── utils/ # Helpers y utilidades
│ └── app.js # App principal
├── prisma/
│ └── schema.prisma
├── tests/
│ └── app.test.js
├── .env
├── package.json
└── README.md
```

---

## 🧠 Funcionalidades principales

| Módulo           | Descripción                         | Estado |
| ---------------- | ----------------------------------- | :----: |
| 👤 Usuarios      | Registro, login, roles (admin/user) |  [x]   |
| 🔑 Autenticación | JWT con refresh y expiración        |  [x]   |
| 📁 Proyectos     | CRUD, colaboradores                 |  [x]   |
| 🔒 Seguridad     | Middleware de auth, roles           |  [x]   |
| ⚙️ Validación    | Esquemas Zod o Joi                  |  [x]   |
| 🧪 Testing       | Tests de endpoints básicos          |  [x]   |
| ☁️ Despliegue    | Proyecto en la nube                 |  [ ]   |
| 🐳 Docker        | Contenedores reproducibles          |  [ ]   |
| 📜 Swagger       | Documentación de API                |  [x]   |

---

## 🔗 Endpoints

| Método   | Ruta                      | Descripción               |
| -------- | ------------------------- | ------------------------- |
| `POST`   | `/api/auth/register`      | Registrar usuario         |
| `POST`   | `/api/auth/login`         | Iniciar sesión            |
| `GET`    | `/api/projects`           | Ver proyectos del usuario |
| `POST`   | `/api/projects`           | Crear proyecto            |
| `GET`    | `/api/projects/:id`       | Ver proyecto con tareas   |
| `GET`    | `/api/projects/:user`     | Ver proyectos del usuario | ADMIN
| `GET`    | `/api/users`              | Ver usuarios y sus datos  | ADMIN

### _Programado por ValenValag_
