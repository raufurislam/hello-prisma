import type { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

export class UserService {
  async createUser(data: Prisma.UserCreateInput) {
    return await prisma.user.create({ data });
  }
}
