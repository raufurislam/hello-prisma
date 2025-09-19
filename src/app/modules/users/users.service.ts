import type { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async ({ data }) => {
  return await prisma.user.create({ data });
};

export const UserService = {
  createUser,
};
