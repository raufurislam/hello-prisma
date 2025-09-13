import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const result = await prisma.user.create({
  //   data: {
  //     name: "Raufur4",
  //     email: "raufur4@gmail.com",
  //   },
  // });
  // console.log(result);
  // const usersData = await prisma.user.findMany({
  //   where: {
  //     id: 3,
  //     // name: "Raufur1",
  //   },
  // });
  // const findUserById = await prisma.user.findFirstOrThrow({
  //   where: {
  //     id: 5,
  //   },
  // });
  // console.log(findUserById);
  // Update User data
  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 3,
  //   },
  //   data: {
  //     name: "Raufur Islam 3",
  //     email: "raufur3@gmail.com",
  //   },
  // });
  // console.log(updatedUser);
  // const usersData = await prisma.user.findMany();
  // console.log(usersData);
  const updatedProfilePhoto = await prisma.user.updateManyAndReturn({
    where: {
      profilePhoto: "abcdefghijklmnopqrstuvwxyz",
    },
    data: {
      profilePhoto: "https://ibb.co.com/x8JDbCbF",
    },
  });
  console.log(updatedProfilePhoto);
}

main();
