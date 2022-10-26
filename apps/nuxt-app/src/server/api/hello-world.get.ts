import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export default defineEventHandler((event) => {
  return {
    message: "hello world",
  };
});
