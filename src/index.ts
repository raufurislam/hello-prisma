import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "Raufur2",
      email: "raufur2@gmail.com",
      profilePhoto: "abcdefghijklmnopqrstuvwxyz",
    },
  });
  console.log(result);

  const usersData = await prisma.user.findMany();
  console.log(usersData);
}

main();
