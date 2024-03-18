import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"
import { prisma } from "@/lib/prisma"

describe('Register Check-in (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register check-in', async () => {
        const { token } = await createAndAuthenticateUser(app)

        const gym = await prisma.gym.create({
            data: {
                name: 'Elixir Gym',
                latitude: -23.5975687,
                longitude: -46.6363024
            }
        })

        const response = await request(app.server)
            .post(`/gyms/${gym.id}/check-ins`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                latitude: -23.5975687,
                longitude: -46.6363024
            })

        expect(response.statusCode).toEqual(201)
    })
})
