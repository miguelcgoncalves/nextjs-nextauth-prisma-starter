import { PrismaClient } from "@prisma/client";

export default new PrismaClient({
  errorFormat: process.env.NODE_ENV === "development" ? "pretty" : "minimal",
});
