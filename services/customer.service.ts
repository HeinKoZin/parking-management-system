import { CreateCustomerInputInterface } from "@dtos/customer/create_customer.input";
import { SearchByKeywordInput } from "@dtos/search_by_keyword.input";
import { accountLogin } from "@repositories/auth.repository";
import {
	createCustomer,
	deleteCustomer,
	getAllCustomer,
} from "@repositories/customer.repository";

export const customers = async (
	keyword?: string,
	limit?: number,
	page?: number
) => {
	const customers = await getAllCustomer(keyword, limit, page);
	return customers;
};

export const create = async (data: CreateCustomerInputInterface) => {
	const customers = await createCustomer(data);
	return customers;
};

export const remove = async (customerId: number) => {
	const remove = await deleteCustomer(customerId);
	return remove;
};
