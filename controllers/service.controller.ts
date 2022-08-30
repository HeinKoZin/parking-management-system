import { Request, Response } from "express";
import { create, remove, services, update } from "@services/service.service";
import { z } from "zod";

export const getAllServices = async (req: Request, res: Response) => {
	const getAllServices = await services();

	res.json(getAllServices);
};

export const createService = async (req: Request, res: Response) => {
	const ServiceModel = z.object({
		name: z.string(),
	});
	const input = ServiceModel.parse(req.body);
	const createService = await create(input);
	res.json(createService);
};

export const updateService = async (req: Request, res: Response) => {
	const ServiceModel = z.object({
		name: z.string(),
	});
	const { id } = req.params;
	const input = ServiceModel.parse(req.body);
	const createService = await update(parseInt(id), input);
	res.json(createService);
};

export const deleteService = async (req: Request, res: Response) => {
	const { id } = req.params;
	const service = await remove(parseInt(id));
	res.json(service);
};
