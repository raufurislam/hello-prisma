import { prisma } from "../../config/db";

const castVote = async (userId: number, optionId: string) => {
  return await prisma.vote.create({
    data: {
      userId,
      optionId,
    },
  });
};

export const VotesServices = {
  castVote,
};
