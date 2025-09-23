import { prisma } from "../../config/db";

const castVote = async (userId: number, optionId: string) => {
  return await prisma.vote.create({
    data: {
      userId,
      optionId,
    },
  });
};

const getPollResult = async (pollId: string) => {
  return await prisma.option.findMany({
    where: { pollId },
    select: {
      id: true,
      text: true,
      _count: { select: { votes: true } },
    },
    orderBy: {
      votes: { _count: "desc" },
    },
  });
};

const getPollWinner = async (pollId: string) => {
  return await prisma.option.findMany({
    where: { pollId },
    select: {
      id: true,
      text: true,
      _count: { select: { votes: true } },
    },
    orderBy: {
      votes: { _count: "desc" },
    },
    take: 1,
  });
};

export const VotesServices = {
  castVote,
  getPollResult,
  getPollWinner,
};
