import { Option, Poll } from "@prisma/client";
import { prisma } from "../../config/db";

const createPoll = async (data: Poll & { options: Option }) => {
  const { title, creatorId, options } = data;

  const optionsArray = Array.isArray(options) ? options : [];

  await prisma.poll.create({
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

export const PollServices = {
  createPoll,
};
