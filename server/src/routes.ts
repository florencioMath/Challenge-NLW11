import { FastifyInstance } from "fastify";
import { prisma } from "./lib/Prisma";

export async function appRoutes(app: FastifyInstance) {
  app.get("/hello", async () => {
    const habit = await prisma.habit.findMany({
      where: {
        title: {
          startsWith: "Beber",
        },
      },
    });
    return habit;
  });
}
