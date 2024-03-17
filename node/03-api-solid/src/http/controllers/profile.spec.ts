import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"

describe('Profile (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to get profile', async () => {
        const register = await request(app.server).post('/users').send({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: '123456'
        })

        const authenticate = await request(app.server).post('/sessions').send({
            name: 'John Doe',
            email: 'johndoe@email.com',
            password: '123456'
        })

        const profile = await request(app.server).get('/me').set('Authorization', `Bearer ${authenticate.body.token}`)

        expect(profile.status).toBe(200)
        expect(profile.body).toEqual({
            user: {
                id: expect.any(String),
                name: 'John Doe',
                email: 'johndoe@email.com',
                password_hash: expect.any(String),
                created_at: expect.any(String),
                updated_at: expect.any(String)
            }
        })
    })
})
