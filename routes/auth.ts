import { accountLogin } from "@controllers/auth.controller";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", accountLogin);

export default authRouter;
