import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { randomUUID } from "crypto"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"

describe('Check Ins History (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to get user check ins history', async () => {
        const { token } = await createAndAuthenticateUser(app)

        const { body: { gym: { gym } } } = await request(app.server)
            .post('/gyms')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'SmartFit',
                description: "Venha treinar na maior rede de academias da América Latina",
                phone: "(34) 3433-9402",
                latitude: -23.5975687,
                longitude: -46.6363024
            })

        const usersRepository = new PrismaUsersRepository()
        const { id: userId } = await usersRepository.findByEmail('johndoe@email.com')

        await request(app.server)
            .post(`/gyms/${gym.id}/check-ins`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                gymId: gym.id,
                userId,
                userLatitude: -23.5975680,
                userLongitude: -46.6363020
            })

        await request(app.server)
            .post(`/gyms/${gym.id}/check-ins`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                gymId: gym.id,
                userId,
                userLatitude: -23.5975670,
                userLongitude: -46.6363010
            })

        const history = await request(app.server)
            .get(`/check-ins/history`)
            .set('Authorization', `Bearer ${token}`)
            .send()

        expect(history.status).toBe(200)
        expect(history.body.checkIns).toHaveLength(2)
    })
})
