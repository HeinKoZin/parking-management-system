import { UserModel } from "@models/user";
import { create, users } from "@services/user.service";
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
	const allUsers = await users();

	res.json(allUsers);
};

const createUser = async (req: Request, res: Response) => {
	try {
		const input = UserModel.parse(req.body);

		const user = await create(input);
		res.json(user);
	} catch (error) {
		res.json(error);
	}
};

export { getAllUsers, createUser };
