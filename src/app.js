// ---
import express from 'express'
import dotenv from 'dotenv'

import { registerUser } from './routes/auth/register.js'
import { loginUser } from './routes/auth/login.js'
import { getProjects, createProject } from './routes/projects.js'

import { checkJWT } from './middlewares/authorization.js'
// ---

dotenv.config({
  path: '.env'
})

const api = express()
const PORT = process.env.PORT || 3000

api.use(express.json())

api.post('/api/auth/register', registerUser)
api.post('/api/auth/login', loginUser)
api.get('/api/projects', checkJWT, getProjects)
api.post('/api/projects', checkJWT, createProject)

api.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})
