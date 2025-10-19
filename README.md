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
| Validación        | Zod                       |  [ ]   |
| Autenticación     | JWT + bcrypt              |  [ ]   |
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
| 👤 Usuarios      | Registro, login, roles (admin/user) |  [ ]   |
| 🔑 Autenticación | JWT con refresh y expiración        |  [ ]   |
| 📁 Proyectos     | CRUD, colaboradores                 |  [ ]   |
| ✅ Tareas        | CRUD, asignación a usuarios         |  [ ]   |
| 🔒 Seguridad     | Middleware de auth, roles           |  [ ]   |
| ⚙️ Validación    | Esquemas Zod o Joi                  |  [ ]   |
| 🧪 Testing       | Tests de endpoints básicos          |  [ ]   |
| ☁️ Despliegue    | Proyecto en la nube                 |  [ ]   |
| 🐳 Docker        | Contenedores reproducibles          |  [ ]   |
| 📜 Swagger       | Documentación de API                |  [ ]   |

---

## 🔗 Endpoints

| Método   | Ruta                      | Descripción               |
| -------- | ------------------------- | ------------------------- |
| `POST`   | `/api/auth/register`      | Registrar usuario         |
| `POST`   | `/api/auth/login`         | Iniciar sesión            |
| `GET`    | `/api/projects`           | Ver proyectos del usuario |
| `POST`   | `/api/projects`           | Crear proyecto            |
| `GET`    | `/api/projects/:id`       | Ver proyecto con tareas   |
| `POST`   | `/api/projects/:id/tasks` | Crear tarea               |
| `PATCH`  | `/api/tasks/:id`          | Actualizar tarea          |
| `DELETE` | `/api/tasks/:id`          | Eliminar tarea            |
