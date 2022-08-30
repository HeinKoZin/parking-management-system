import { CreateUserInput } from "@dtos/user/create_user.input";
import { UpdateUserInput } from "@dtos/user/update_user.input";
import {
	allUsers,
	createUser,
	deleteUser,
	searchUser,
	updateUser,
} from "@repositories/user.repository";

export const users = async (
	keyword?: string,
	limit?: number,
	page?: number
) => {
	return await allUsers(keyword, limit, page);
};

export const create = async (user: CreateUserInput) => {
	const create = await createUser(user);
	return create;
};

export const update = async (userId: number, user: UpdateUserInput) => {
	const update = await updateUser(userId, user);
	return update;
};

export const remove = async (userId: number) => {
	const remove = await deleteUser(userId);

	return remove;
};

export const search = async (keyword: string) => {
	const search = await searchUser(keyword);
	return search;
};
