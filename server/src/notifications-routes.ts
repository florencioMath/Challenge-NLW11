import { FastifyInstance } from "fastify";
import WebPush from "web-push";

console.log(WebPush.generateVAPIDKeys());

const publicKey =
  "BPowEV6sihsakZihpcHhfvdrDN9xUidDVVybRVGn9Hkkm-Er5hRWAYLMV-zN78FasMzg_7YOD1xht0STeC4xCu0";
const privateKey = "iwtzvwelGMztV-DjEjWvVHEFt-1XIeL2_nPzbVGaHmc";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/publick_key", () => {
    return publicKey;
  });

  app.get("/push/register", (request, reply) => {
    return reply.status(201).send();
  });

  app.get("/push/send", async (request, reply) => {
    return reply.status(201).send();
  });
}
