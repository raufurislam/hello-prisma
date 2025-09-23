import { Option, Poll } from "@prisma/client";
import { prisma } from "../../config/db";

const createPoll = async (data: Poll & { options: Option }) => {
  const { title, creatorId, options } = data;

  const optionsArray = Array.isArray(options) ? options : [];

  return await prisma.poll.create({
    data: {
      title,
      creatorId,
      options: {
        create: optionsArray.map((text) => ({ text })),
      },
    },
    include: { options: true },
  });
};

const getPolls = async () => {
  return await prisma.poll.findMany({
    orderBy: { createdAt: "desc" },
    include: { options: true, creator: true }, // adds consistency. but when needed lighter payload then don't show more meaningful
  });
};

export const PollServices = {
  createPoll,
  getPolls,
};
