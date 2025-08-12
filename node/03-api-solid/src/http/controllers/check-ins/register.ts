import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeCheckInUseCase } from '@/use-cases/factories/make-check-in-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerCheckInParamsSchema = z.object({
        gymId: z.string().uuid(),
    })

    const registerCheckInsBodySchema = z.object({
        latitude: z.coerce.number().refine((value) => {
            return Math.abs(value) <= 90
        }),
        longitude: z.coerce.number().refine((value) => {
            return Math.abs(value) <= 180
        })
    })

    const { gymId } = registerCheckInParamsSchema.parse(request.params)
    const { latitude, longitude } = registerCheckInsBodySchema.parse(request.body)

    const registerUseCase = makeCheckInUseCase()
    const { checkIn } = await registerUseCase.execute({
        gymId,
        userId: request.user.sub,
        userLatitude: latitude,
        userLongitude: longitude
    })

    return reply.status(201).send({ checkIn })
}