import { Router } from "express";
import { getTest } from "@controllers/test.controller";
import userRouter from "./users";

const router = Router();

router.use("/users", userRouter);

export { router };
