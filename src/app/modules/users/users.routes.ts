import { Router } from "express";
import { userController } from "./users.controller";

const usersRouter = Router();

usersRouter.post("/", userController.createUser);
usersRouter.get("/", userController.getUsers);
usersRouter.get("/:id", userController.getUserById);
usersRouter.put("/:id", userController.updateUserById);
usersRouter.delete("/:id", userController.deleteUserById);

export default usersRouter;
