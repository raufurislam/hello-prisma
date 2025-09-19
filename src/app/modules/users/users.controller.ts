import type { Request, Response } from "express";
import { UserService } from "./users.service";

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const user = UserService.createUser(req.body);
    } catch (error) {
      console.log(error);
    }
  }
}
