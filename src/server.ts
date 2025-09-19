// import http, { Server } from "http";
// import dotenv from "dotenv";
// import app from "./app";
// import { prisma } from "./app/config/db";

// dotenv.config();

// let server: Server | null = null;

// async function connectToDb() {
//   try {
//     await prisma.$connect();
//     console.log("*** DB Connection Successful");
//   } catch (error) {
//     console.log("***DB Connection Failed");
//     process.exit(1);
//   }
// }

// async function startServer() {
//   try {
//     await connectToDb();
//     server = http.createServer(app);
//     const port = process.env.PORT || 3000;
//     server.listen(port, () => {
//       console.log(`🚀 Server is running on port ${port}`);
//     });

//     handleProcessEvents();
//   } catch (error) {
//     console.error("❌ Error during server startup:", error);
//     process.exit(1);
//   }
// }

// /**
//  * Gracefully shutdown the server and close database connections.
//  * @param {string} signal - The termination signal received.
//  */
// async function gracefulShutdown(signal: string) {
//   console.warn(`🔄 Received ${signal}, shutting down gracefully...`);

//   if (server) {
//     server.close(async () => {
//       console.log("✅ HTTP server closed.");

//       try {
//         console.log("Server shutdown complete.");
//       } catch (error) {
//         console.error("❌ Error during shutdown:", error);
//       }

//       process.exit(0);
//     });
//   } else {
//     process.exit(0);
//   }
// }

// /**
//  * Handle system signals and unexpected errors.
//  */
// function handleProcessEvents() {
//   process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
//   process.on("SIGINT", () => gracefulShutdown("SIGINT"));

//   process.on("uncaughtException", (error) => {
//     console.error("💥 Uncaught Exception:", error);
//     gracefulShutdown("uncaughtException");
//   });

//   process.on("unhandledRejection", (reason) => {
//     console.error("💥 Unhandled Rejection:", reason);
//     gracefulShutdown("unhandledRejection");
//   });
// }

// // Start the application
// startServer();

/* eslint-disable no-console */
import { Server } from "http";
import dotenv from "dotenv";
import app from "./app";
import { prisma } from "./app/config/db";
// import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

dotenv.config();

let server: Server;

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to DB");

    server = app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
  // await seedSuperAdmin();
})();

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected. Server shutting down...", err);

  if (server) {
    server.close(() => {
      prisma.$disconnect().finally(() => process.exit(1));
    });
  } else {
    process.exit(1);
  }
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected. Server shutting down...", err);

  if (server) {
    server.close(() => {
      prisma.$disconnect().finally(() => process.exit(1));
    });
  } else {
    process.exit(1);
  }
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received. Server is shutting down");

  if (server) {
    server.close(() => {
      prisma.$disconnect().finally(() => process.exit(1));
    });
  } else {
    process.exit(1);
  }
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received. Server is shutting down");

  if (server) {
    server.close(() => {
      prisma.$disconnect().finally(() => process.exit(1));
    });
  } else {
    process.exit(1);
  }
});
