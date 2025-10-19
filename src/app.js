// ---
import express from 'express'
import dotenv from 'dotenv'

import { registerUser } from './routes/auth/register.js'
import { loginUser } from './routes/auth/login.js'
// ---

dotenv.config({
  path: '.env'
})

const api = express()
const PORT = process.env.PORT || 3000

api.use(express.json())

api.post('/api/auth/register', registerUser)
api.post('/api/auth/login', loginUser)

api.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})
