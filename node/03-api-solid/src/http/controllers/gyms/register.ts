import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCreateGymUseCase } from '@/use-cases/factories/make-create-gym-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        description: z.string().nullable(),
        phone: z.string().nullable(),
        latitude: z.coerce.number().refine((value) => {
            return Math.abs(value) <= 90
        }),
        longitude: z.coerce.number().refine((value) => {
            return Math.abs(value) <= 180
        })
    })

    const { name, description, phone, latitude, longitude } = registerBodySchema.parse(request.body)

    const registerUseCase = makeCreateGymUseCase()
    const gym = await registerUseCase.execute({ name, description, phone, latitude, longitude })

    return reply.status(201).send({ gym })
}