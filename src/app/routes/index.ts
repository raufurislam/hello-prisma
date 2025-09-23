import { Router } from "express";
import usersRouter from "../modules/users/users.routes";
import pollsRouter from "../modules/polls/polls.routes";
import votesRoute from "../modules/votes/votes.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: usersRouter,
  },
  {
    path: "/polls",
    route: pollsRouter,
  },
  {
    path: "/votes",
    route: votesRoute,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
