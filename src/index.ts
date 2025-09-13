import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create/Insert data into DB
  const result = await prisma.user.create({
    data: {
      name: "Raufur4",
      email: "raufur4@gmail.com",
    },
  });
  console.log(result);

  // Retrive all data from DB
  const usersData = await prisma.user.findMany({
    where: {
      id: 3,
      // name: "Raufur1",
    },
  });

  // Find a unique user by ID
  const findUserById = await prisma.user.findFirstOrThrow({
    where: {
      id: 5,
    },
  });
  console.log(findUserById);

  // Update user data by ID (only one user)
  const updatedUser = await prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      name: "Raufur Islam 3",
      email: "raufur3@gmail.com",
    },
  });
  console.log(updatedUser);

  // Update multiple users by condition
  const updatedProfilePhoto = await prisma.user.updateManyAndReturn({
    where: {
      profilePhoto: "abcdefghijklmnopqrstuvwxyz",
    },
    data: {
      profilePhoto: "https://ibb.co.com/x8JDbCbF",
    },
  });
  console.log(updatedProfilePhoto);

  // Delete single users by condition
  const deleteUser = await prisma.user.delete({
    where: {
      id: 3,
    },
  });
  console.log(deleteUser);

  // Delete multiple users by condition
  const deleteUsers = await prisma.user.deleteMany({
    where: {
      id: {
        gt: 2,
      },
    },
  });
  console.log(deleteUsers);

  const AllUsersData = await prisma.user.findMany();
  console.log(AllUsersData);
}

main();
