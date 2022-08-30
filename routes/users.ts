import {
	createUser,
	deleteUser,
	getAllUsers,
	updateUser,
} from "@controllers/user.controller";
import { JWTAuthMiddleware } from "@middleware/jwt_auth.middleware";
import bodyParser from "body-parser";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", JWTAuthMiddleware, getAllUsers);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
