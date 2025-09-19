import type { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";

const createUser = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data });
};

export const UserServices = {
  createUser,
};
