import { Router } from "express";
import { getTest } from "@controllers/test.controller";
import userRouter from "./users";
import authRouter from "./auth";
import serviceRouter from "./service";
import customerRouter from "./customer";
import bookingRouter from "./booking";

const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/services", serviceRouter);
router.use("/customers", customerRouter);
router.use("/bookings", bookingRouter);

export { router };
