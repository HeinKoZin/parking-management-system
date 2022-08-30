import { Request, Response } from "express";
import { CustomerModel } from "@models/customer";
import { create, customers } from "@services/customer.service";

export const getAllCustomer = async (req: Request, res: Response) => {
	const { keyword, limit = 20, page = 1 } = req.query;
	const customerList = await customers(
		keyword?.toString(),
		parseInt(limit.toString()),
		parseInt(page.toString())
	);
	res.json(customerList);
};

export const createCustomer = async (req: Request, res: Response) => {
	try {
		const input = CustomerModel.parse(req.body);

		const customer = await create(input);

		res.json(customer);
	} catch (error) {
		res.json({
			success: false,
			message: error,
		});
	}
};
