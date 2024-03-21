import { FastifyReply, FastifyRequest } from "fastify";

export function verifyUserRole(role: 'ADMIN' | 'MEMBER') {
    return async (request: FastifyRequest, reply: FastifyReply) => {
        if (role !== request.user.role) {
            return reply.status(401).send({ message: 'Unauthorized' })
        }
    }
}