import { Router } from "express";
import { UserController } from "./users.controller";

const usersRouter = Router();
const userController = new UserController();

usersRouter.post("/", userController.createUser);

export default usersRouter;
