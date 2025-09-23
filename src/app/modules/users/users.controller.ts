import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./users.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.createUser(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "User Created Successfully",
    data: user,
  });
});

const getUsers = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.getUsers();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All User Retrieve successfully",
    data: user,
  });
});

const getUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.getUserById(Number(req.params.id));

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Retrieve successfully",
    data: user,
  });
});

const updateUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.updateUserById(
    Number(req.params.id),
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated Successfully",
    data: user,
  });
});

const deleteUserById = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.deleteUserById(Number(req.params.id));

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted Successfully",
    data: user,
  });
});

export const userController = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
