import { CreateUserInput } from "@dtos/user/create_user.input";
import { allUsers, createUser } from "@repositories/user.repository";

const users = async () => {
	return await allUsers();
};

const create = async (user: CreateUserInput) => {
	const create = await createUser(user);
	return create;
};

export { users, create };
