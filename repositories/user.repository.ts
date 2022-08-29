import { CreateUserInput } from "@dtos/user/create_user.input";
import prismaService from "@services/prisma.service";

const allUsers = async () => {
	const users = await prismaService.user.findMany();
	return users;
};

const createUser = async (user: CreateUserInput) => {
	try {
		const createUser = await prismaService.user.create({
			data: user,
		});
		return {
			success: true,
			message: "User created successfully",
		};
	} catch (error) {
		return {
			success: false,
			message: error,
		};
	}
};

export { allUsers, createUser };
