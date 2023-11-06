import { FastifyRequest, FastifyReply } from 'fastify'
import { prisma } from '@/lib/prisma'
import { request } from 'http'
import { z } from 'zod'
import { hash } from 'bcryptjs'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    })

    const { email, name, password } = registerBodySchema.parse(request.body)

    const emailAlreadyExists = await prisma.user.findUnique({ where: { email } })

    if (emailAlreadyExists) {
        return reply.status(409).send()
    }

    const password_hash = await hash(password, 8)

    await prisma.user.create({
        data: {
            email,
            name,
            password_hash
        }
    })

    return reply.status(201).send()
}