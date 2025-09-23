import { Router } from "express";
import { VotesControllers } from "./votes.controller";

const votesRoute = Router();

votesRoute.post("/", VotesControllers.castVote);

export default votesRoute;
