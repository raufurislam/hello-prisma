import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function others() {
  // create some user data
  //   const insertUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Raufur3",
  //         email: "raufur3@gmail.com",
  //       },
  //       {
  //         name: "Raufur4",
  //         email: "raufur4@gmail.com",
  //       },
  //       {
  //         name: "Raufur5",
  //         email: "raufur6@gmail.com",
  //       },
  //       {
  //         name: "Raufur6",
  //         email: "raufur6@gmail.com",
  //       },
  //       {
  //         name: "Raufur7",
  //         email: "raufur8@gmail.com",
  //       },
  //       {
  //         name: "Raufur8",
  //         email: "raufur8@gmail.com",
  //       },
  //       {
  //         name: "Raufur9",
  //         email: "raufur9@gmail.com",
  //       },
  //       {
  //         name: "Raufur10",
  //         email: "raufur10@gmail.com",
  //       },
  //       {
  //         name: "Raufur11",
  //         email: "raufur11@gmail.com",
  //       },
  //     ],
  //   });
  //   console.log(insertUsers);
  // Retrive all data
  const users = await prisma.user.findMany({
    where: {
      name: "Raufur2",
    },
    orderBy: {
      //   id: "asc",
      name: "asc",
    },
  });
  console.log(users);
}

others();
