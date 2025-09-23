import { Router } from "express";
import { PollsControllers } from "./polls.controller";

const pollsRouter = Router();

pollsRouter.post("/", PollsControllers.createPoll);
pollsRouter.get("/", PollsControllers.getPolls);

export default pollsRouter;
