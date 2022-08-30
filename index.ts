import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import bodyParser from "body-parser";
import formData from "express-form-data";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse());

app.use("/", router);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
