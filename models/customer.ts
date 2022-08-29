import * as z from "zod"

export const CustomerModel = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
