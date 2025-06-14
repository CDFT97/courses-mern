import { Router } from "express";
import UserController from "../controllers/UserController.js";
import { userStoreRequest } from "../requests/index.js";

const router = Router();

router.post("/sign-up",[userStoreRequest],UserController.signUp);

export default router;
