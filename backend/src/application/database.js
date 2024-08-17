import { PrismaClient } from "@prisma/client";
import { logger } from "./logger.js";

export const prismaClient = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
    {
      emit: "event",
      level: "error",
    },
  ],
});

// Menangani log query
prismaClient.$on("query", (e) => {
  logger.info(
    `Query: ${e.query} | Params: ${e.params} | Duration: ${e.duration}ms`
  );
});

// Menangani log informasi
prismaClient.$on("info", (e) => {
  logger.info(`Info: ${e.message}`);
});

// Menangani log peringatan
prismaClient.$on("warn", (e) => {
  logger.warn(`Warning: ${e.message}`);
});

// Menangani log error
prismaClient.$on("error", (e) => {
  logger.error(`Error: ${e.message}`);
});
