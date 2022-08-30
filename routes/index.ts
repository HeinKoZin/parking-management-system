import { Router } from "express";
import { getTest } from "@controllers/test.controller";
import userRouter from "./users";
import authRouter from "./auth";
import serviceRouter from "./service";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/services", serviceRouter);

export { router };
