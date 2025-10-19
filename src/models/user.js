import { z } from 'zod'

const userModel = z.object({
  name: z.string().min(6, 'Name too short, min. 6 chars'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password too short, min 8 chars.'),
  role: z.enum(['user', 'admin']).optional()
})

const loginModel = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 chars.')
})

export {
  userModel,
  loginModel
}
