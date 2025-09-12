import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Raufur2",
  //     email: "raufur2@gmail.com",
  //     profilePhoto: "abcdefghijklmnopqrstuvwxyz",
  //   },
  // });
  // console.log(result);

  // const usersData = await prisma.user.findMany({
  //   where: {
  //     id: 3,
  //     // name: "Raufur1",
  //   },
  // });
  // console.log(usersData);

  const findUserById = await prisma.user.findFirstOrThrow({
    where: {
      id: 5,
    },
  });
  console.log(findUserById);
}

main();
