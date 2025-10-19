import express from 'express'
import dotenv from 'dotenv'
import { registerUser } from './routes/auth/register.js'

dotenv.config({
  path: '.env'
})

const api = express()
const PORT = process.env.PORT || 3000

api.get('/auth/register', registerUser)

api.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`)
})
