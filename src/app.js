// ---
import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'

import { registerUser } from './routes/auth/register.js'
import { loginUser } from './routes/auth/login.js'
import { getProjects, createProject } from './routes/projects.js'
import { getUsers } from './routes/users.js'

import { checkJWT } from './middlewares/authorization.js'
import { isAdmin } from './middlewares/isAdmin.js'
// ---

dotenv.config({
  path: '.env'
})

const api = express()
const PORT = process.env.PORT || 3000

api.use(express.json())
api.use(helmet())
api.use(cors())
api.use(morgan('dev'))

api.post('/api/auth/register', registerUser)
api.post('/api/auth/login', loginUser)
api.get('/api/projects', checkJWT, getProjects)
api.post('/api/projects', checkJWT, createProject)
api.get('/api/users', checkJWT, isAdmin, getUsers)

api.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})
