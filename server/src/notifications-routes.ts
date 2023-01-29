import { FastifyInstance } from "fastify";
import WebPush from "web-push";

const publicKey =
  "BPowEV6sihsakZihpcHhfvdrDN9xUidDVVybRVGn9Hkkm-Er5hRWAYLMV-zN78FasMzg_7YOD1xht0STeC4xCu0";
const privateKey = "iwtzvwelGMztV-DjEjWvVHEFt-1XIeL2_nPzbVGaHmc";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return publicKey;
  });

  app.post("/push/register", (request, reply) => {
    console.log(request.body);

    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    console.log(request.body);
    return reply.status(201).send();
  });
}
