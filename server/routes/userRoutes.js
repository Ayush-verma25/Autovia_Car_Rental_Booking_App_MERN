import { Router } from "express";
import {
  getUserData,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";
import { protect } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/data", protect, getUserData);

export default userRouter;
