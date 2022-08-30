import bcrypt from "bcrypt";
import { LoginInput } from "@dtos/auth/login.input";
import { LoginSuccessInterface } from "@dtos/auth/login_success.response";
import { getUser } from "./user.repository";
import jwt from "jsonwebtoken";

export const accountLogin = async (
	data: LoginInput
): Promise<LoginSuccessInterface> => {
	try {
		const user = await getUser(undefined, data.email);

		if (user) {
			if (await bcrypt.compare(data.password, user.password)) {
				let token;

				try {
					token = jwt.sign(
						{ userId: user.id },
						process.env.JWT_SECRET!.toString(),
						{
							expiresIn: "7d",
						}
					);
				} catch (error) {
					return {
						success: false,
						message: error,
					};
				}

				return {
					success: true,
					message: "Logged in successfully",
					data: {
						user,
						token,
					},
				};
			}
		}

		return {
			success: false,
			message: "Invalid data!",
			data: undefined,
		};
	} catch (error) {
		return {
			success: false,
			message: error,
		};
	}
};
