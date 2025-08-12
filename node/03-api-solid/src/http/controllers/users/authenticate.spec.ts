import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"

describe('Authenticate (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to authenticate', async () => {
        const register = await request(app.server).post('/users').send({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: '123456'
        })

        const authenticate = await request(app.server).post('/sessions').send({
            email: 'johndoe@email.com',
            password: '123456'
        })

        expect(authenticate.status).toBe(200)
        expect(authenticate.body).toEqual({
            token: expect.any(String),
        })
    })
})
