import { makeGetUserProfileUseCase } from '@/use-cases/factories/make-get-user-profile-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
    const { sub } = request.user
    const getUserProfile = makeGetUserProfileUseCase()
    const user = await getUserProfile.execute({ userId: sub })

    return reply.status(200).send({
        ...user,
        password_hash: undefined
    })
}