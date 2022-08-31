import { Router } from "express";
import userRouter from "./users";
import authRouter from "./auth";
import serviceRouter from "./service";
import customerRouter from "./customer";
import bookingRouter from "./booking";
import { JWTAuthMiddleware } from "@middleware/jwt_auth.middleware";

const router = Router();

router.use("/users", JWTAuthMiddleware, userRouter);
router.use("/auth", authRouter);
router.use("/services", JWTAuthMiddleware, serviceRouter);
router.use("/customers", JWTAuthMiddleware, customerRouter);
router.use("/bookings", JWTAuthMiddleware, bookingRouter);

export { router };
