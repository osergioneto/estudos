import { FastifyInstance } from "fastify";
import { verifyJWT } from "../../middlewares/verify-jwt";

import { history } from "./history";
import { register } from "./register";
import { metrics } from "./metrics";
import { validate } from "./validate";
import { verifyUserRole } from "@/http/middlewares/veritfy-user-role";

export async function checkInRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.get('/check-ins/history', history)
    app.get('/check-ins/metrics', metrics)

    app.post('/gyms/:gymId/check-ins', register)
    app.patch('/check-ins/:checkInId/validate', { onRequest: [verifyUserRole('ADMIN')] }, validate)
}