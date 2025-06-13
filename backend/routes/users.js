import { Router } from "express";
import UserController from "../controllers/UserController.js";

const router = Router();

router.post("/sign-up", UserController.signUp);



export default router;
