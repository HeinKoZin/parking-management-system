import { Request, Response } from "express";
import { getMessage } from "../repositories/test.repository";

const getTest = (req: Request, res: Response) => {
	const message = getMessage();

	res.json(message);
};

export { getTest };
