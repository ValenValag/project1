import { z } from 'zod'

const projectModel = z.object({
  name: z.string(),
  workers: z.array(z.string().email('Invalid email on workers')).min(1, 'Needed at least 1 worker on it.'),
  tasks: z.array(z.object({
    name: z.string()
  }))
})

export {
  projectModel
}
