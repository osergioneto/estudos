import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"

describe('Refresh token (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to refresh a token', async () => {
        const register = await request(app.server).post('/users').send({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: '123456'
        })

        const authenticate = await request(app.server).post('/sessions').send({
            email: 'johndoe@email.com',
            password: '123456'
        })

        const cookies = authenticate.get('Set-Cookie')

        const response = await request(app.server)
            .patch('/token/refresh')
            .set('Cookie', cookies)
            .send()

        expect(response.status).toBe(200)
        expect(response.body).toEqual({
            token: expect.any(String),
        })
        expect(response.get('Set-Cookie')).toEqual([
            expect.stringContaining('refreshToken='),
        ])
    })
})
