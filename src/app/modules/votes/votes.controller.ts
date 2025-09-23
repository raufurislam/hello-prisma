import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { VotesServices } from "./votes.service";

const castVote = catchAsync(async (req: Request, res: Response) => {
  const { userId, optionId } = req.body;
  const data = await VotesServices.castVote(userId, optionId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Poll Retrieve Successfully",
    data,
  });
});

const getPollResult = catchAsync(async (req: Request, res: Response) => {
  const data = await VotesServices.getPollResult(req.params.pollId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Poll Retrieve Successfully",
    data,
  });
});

const getPollWinner = catchAsync(async (req: Request, res: Response) => {
  const data = await VotesServices.getPollWinner(req.params.pollId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "All Poll Retrieve Successfully",
    data,
  });
});

export const VotesControllers = {
  castVote,
  getPollResult,
  getPollWinner,
};
