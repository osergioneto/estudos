import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchGymsUseCase } from '@/use-cases/factories/make-search-gyms-use-case'

export async function search(request: FastifyRequest, reply: FastifyReply) {
    const searchGymsQueryParams = z.object({
        q: z.string(),
        page: z.coerce.number().min(1).default(1)
    })

    const { q, page } = searchGymsQueryParams.parse(request.query)

    console.log("{ q, page }: ", q, page)

    const searchGymUseCase = makeSearchGymsUseCase()
    const { gyms } = await searchGymUseCase.execute({ title: q, page })

    console.log("gyms: ", gyms)

    return reply.status(200).send({ gyms })
}