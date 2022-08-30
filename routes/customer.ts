import {
	createCustomer,
	getAllCustomer,
} from "@controllers/customer.controller";
import { Router } from "express";

const customerRouter = Router();

customerRouter.get("/", getAllCustomer);
customerRouter.post("/", createCustomer);

export default customerRouter;
