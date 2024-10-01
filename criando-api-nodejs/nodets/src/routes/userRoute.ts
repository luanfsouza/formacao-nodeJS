import { Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router()

const userController = new UserController

router.get("/", userController.getUsers)
router.post("/", userController.createUser)

export default router  