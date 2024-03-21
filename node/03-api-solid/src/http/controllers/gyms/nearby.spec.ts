import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"

describe('Nearby Gyms (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to list nearby gym', async () => {
        const { token } = await createAndAuthenticateUser(app, true)

        await request(app.server)
            .post('/gyms')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'SmartFit',
                description: "Venha treinar na maior rede de academias da América Latina",
                phone: "(34) 3433-9402",
                latitude: -27.2092052,
                longitude: -49.6401092,
            })

        await request(app.server)
            .post('/gyms')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'gym',
                description: "Venha treinar na maior rede de academias da América Latina",
                phone: "(34) 3433-9402",
                latitude: -23.5916201,
                longitude: -46.6222736,
            })

        const response = await request(app.server)
            .get('/gyms/nearby')
            .query({
                latitude: -27.2092052,
                longitude: -49.6401092
            })
            .set('Authorization', `Bearer ${token}`)
            .send()

        expect(response.statusCode).toBe(200)
        expect(response.body.gyms).toHaveLength(1)
        expect(response.body.gyms).toEqual([
            expect.objectContaining({
                name: 'SmartFit'
            })
        ])
    })
})
