import * as z from "zod"

export const CustomerModel = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  email: z.string(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})
