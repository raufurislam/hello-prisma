import type { Request, Response } from "express";
import { UserService } from "./users.service";

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = userService.createUser(req.body);
    } catch (error) {
      console.log(error);
    }
  }
}
