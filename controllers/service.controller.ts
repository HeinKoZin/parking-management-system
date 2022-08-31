import { Request, Response } from "express";
import { create, remove, services, update } from "@services/service.service";
import { z } from "zod";
import internal from "stream";

export const getAllServices = async (req: Request, res: Response) => {
	const getAllServices = await services();

	res.json(getAllServices);
};

export const createService = async (req: Request, res: Response) => {
	try {
		const ServiceModel = z.object({
			name: z.string(),
			fee: z.number(),
		});
		const { name, fee } = req.body as { name: string; fee: string };
		const input = ServiceModel.parse({ name, fee: parseInt(fee) });
		const createService = await create(input);
		res.json(createService);
	} catch (error) {
		res.json(error);
	}
};

export const updateService = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const { name, fee } = req.body as { name: string; fee: string };
		const input = { name, fee: fee ? parseInt(fee) : undefined };
		const createService = await update(parseInt(id), input);
		res.json(createService);
	} catch (error) {
		res.json(error);
	}
};

export const deleteService = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const service = await remove(parseInt(id));
		res.json(service);
	} catch (error) {
		res.json(error);
	}
};
