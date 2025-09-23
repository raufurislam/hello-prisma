import { Router } from "express";
import { VotesControllers } from "./votes.controller";

const votesRoute = Router();

votesRoute.post("/", VotesControllers.castVote);
votesRoute.get("/result/:pollId", VotesControllers.getPollResult);
votesRoute.get("/winner/:pollId", VotesControllers.getPollWinner);

export default votesRoute;
