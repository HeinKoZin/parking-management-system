import * as z from "zod"
import { CompleteBookingService, RelatedBookingServiceModel } from "./index"

export const BookingModel = z.object({
  id: z.number().int(),
  parkingFee: z.number().int(),
  duration: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteBooking extends z.infer<typeof BookingModel> {
  services: CompleteBookingService[]
}

/**
 * RelatedBookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() => BookingModel.extend({
  services: RelatedBookingServiceModel.array(),
}))
