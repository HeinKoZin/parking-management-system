import { Router } from "express";
import { getTest } from "@controllers/test.controller";
import userRouter from "./users";
import authRouter from "./auth";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export { router };
