import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { PollServices } from "./polls.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";

const createPoll = catchAsync(async (req: Request, res: Response) => {
  const poll = await PollServices.createPoll(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Poll Created Successfully",
    data: poll,
  });
});

const getPolls = catchAsync(async (req: Request, res: Response) => {
  const poll = await PollServices.getPolls();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Poll Retrieve Successfully",
    data: poll,
  });
});

export const PollsControllers = { createPoll, getPolls };
