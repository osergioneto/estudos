import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"
import { prisma } from "@/lib/prisma"

describe('Check-in Metrics (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to get count of check-ins', async () => {
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
            .get(`/check-ins/metrics`)
            .set('Authorization', `Bearer ${token}`)
            .send()

        expect(history.statusCode).toBe(200)
        expect(history.body.checkInsCount).toEqual(2)
    })
})
