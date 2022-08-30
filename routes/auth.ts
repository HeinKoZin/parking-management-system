import { accountLogin } from "@controllers/auth.controller";
import bodyParser from "body-parser";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", accountLogin);

export default authRouter;
