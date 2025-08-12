import request from "supertest"
import { describe, it, expect, beforeAll, afterAll } from "vitest"
import { app } from "@/app"
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user"

describe('Profile (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to get profile', async () => {
        const { token } = await createAndAuthenticateUser(app)

        const profile = await request(app.server).get('/me').set('Authorization', `Bearer ${token}`)

        expect(profile.status).toBe(200)
        expect(profile.body).toEqual({
            user: {
                id: expect.any(String),
                name: 'John Doe',
                email: 'johndoe@email.com',
                role: 'MEMBER',
                password_hash: expect.any(String),
                created_at: expect.any(String),
                updated_at: expect.any(String)
            }
        })
    })
})
