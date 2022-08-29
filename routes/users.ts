import { createUser, getAllUsers } from "@controllers/user.controller";
import bodyParser from "body-parser";
import { Router } from "express";

const userRouter = Router();

var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

userRouter.get("/", getAllUsers);
userRouter.post("/", urlencodedParser, createUser);

export default userRouter;
