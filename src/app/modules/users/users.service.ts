import { Prisma } from "@prisma/client";
import { prisma } from "../../config/db";
import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";

const createUser = async (data: Prisma.UserCreateInput) => {
  const isUserExist = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (isUserExist) {
    throw new AppError(httpStatus.BAD_REQUEST, "User Already Exist");
  }
  const createUser = await prisma.user.create({
    data,
  });
  return createUser;
};

const getUsers = async () => {
  return await prisma.user.findMany({
    orderBy: { id: "desc" },
  });
};

const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

const updateUserById = async (id: number, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

const deleteUserById = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};

export const UserServices = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
