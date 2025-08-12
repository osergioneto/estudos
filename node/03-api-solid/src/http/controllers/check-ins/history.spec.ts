import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { randomUUID } from "crypto"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"
import { prisma } from "@/lib/prisma"

describe('Check Ins History (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to get user check-ins history', async () => {
        const { token } = await createAndAuthenticateUser(app)

        const user = await prisma.user.findFirstOrThrow()

        const gym = await prisma.gym.create({
            data: {
                name: 'Elixir Gym',
                latitude: -23.5975687,
                longitude: -46.6363024
            }
        })

        const checkIns = await prisma.checkIn.createMany({
            data: [
                {
                    gym_id: gym.id,
                    user_id: user.id
                }, {
                    gym_id: gym.id,
                    user_id: user.id
                }
            ]
        })

        const history = await request(app.server)
            .get(`/check-ins/history`)
            .set('Authorization', `Bearer ${token}`)
            .send()

        expect(history.status).toBe(200)
        expect(history.body.checkIns).toHaveLength(2)
        expect(history.body.checkIns).toEqual([
            expect.objectContaining({
                gym_id: gym.id,
                user_id: user.id
            }),
            expect.objectContaining({
                gym_id: gym.id,
                user_id: user.id
            })
        ])
    })
})
