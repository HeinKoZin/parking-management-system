import * as z from "zod"
import { CompleteCustomer, RelatedCustomerModel, CompleteBookingService, RelatedBookingServiceModel } from "./index"

export const BookingModel = z.object({
  id: z.number().int(),
  parkingFee: z.number().int(),
  duration: z.number().int(),
  car_no: z.string(),
  note: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  customerId: z.number().int(),
})

export interface CompleteBooking extends z.infer<typeof BookingModel> {
  customer: CompleteCustomer
  services: CompleteBookingService[]
}

/**
 * RelatedBookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedBookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() => BookingModel.extend({
  customer: RelatedCustomerModel,
  services: RelatedBookingServiceModel.array(),
}))
