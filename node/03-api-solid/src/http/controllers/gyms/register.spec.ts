import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"

describe('Register Gyms (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register a gym', async () => {
        const { token } = await createAndAuthenticateUser(app, true)

        const response = await request(app.server)
            .post('/gyms')
            .set('Authorization', `Bearer ${token}`)
            .send({
                name: 'SmartFit',
                description: "Venha treinar na maior rede de academias da América Latina",
                phone: "(34) 3433-9402",
                latitude: -23.5975687,
                longitude: -46.6363024
            })

        expect(response.statusCode).toEqual(201)
    })
})
