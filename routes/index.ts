import { Router } from "express";
import { getTest } from "@controllers/test.controller";

const router = Router();

router.get("/router-test", getTest);

export { router };
