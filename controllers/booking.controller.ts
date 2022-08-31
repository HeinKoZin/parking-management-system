import { CreateBookingInput } from "@dtos/booking/create_booking.input";
import { BookingModel } from "@models/booking";
import { bookings, create, remove, update } from "@services/booking.service";
import { Request, Response } from "express";
import * as z from "zod";

export const getAllBookings = async (req: Request, res: Response) => {
	try {
		const getAllBookings = await bookings();
		res.json(getAllBookings);
	} catch (error) {
		res.json(error);
	}
};

export const createBooking = async (req: Request, res: Response) => {
	const data: {
		car_no: string;
		parking_fee: string;
		duration: string;
		note: string;
		customer_id: string;
	} = req.body;

	try {
		const input = {
			car_no: data.car_no,
			parking_fee: parseInt(data.parking_fee),
			duration: parseInt(data.duration),
			note: data.note,
			customer_id: parseInt(data.customer_id),
		};
		const createBooking = await create(input);
		res.json(createBooking);
	} catch (error) {
		res.json(error);
	}
};

export const updateBooking = async (req: Request, res: Response) => {
	const data: {
		car_no: string;
		parking_fee: string;
		duration: string;
		note: string;
		customer_id: string;
	} = req.body;

	try {
		const input = {
			car_no: data.car_no,
			parking_fee: data.parking_fee ? parseInt(data.parking_fee) : undefined,
			duration: data.duration ? parseInt(data.duration) : undefined,
			note: data.note,
			customer_id: data.customer_id ? parseInt(data.customer_id) : undefined,
		};
		const { id } = req.params;
		const createBooking = await update(parseInt(id), input);
		res.json(createBooking);
	} catch (error) {
		res.json(error);
	}
};

export const deleteBooking = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteBooking = await remove(parseInt(id));
		res.json(deleteBooking);
	} catch (error) {
		res.json(error);
	}
};
