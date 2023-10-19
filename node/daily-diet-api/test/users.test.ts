import { expect, it, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { execSync } from 'child_process'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

beforeEach(() => {
  execSync('npm run knex migrate:rollback --all')
  execSync('npm run knex migrate:latest')
})

describe('Users routes', () => {
  it('should be able to create a new user', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      })
      .expect(201)
  })

  it('should be able to identify users', async () => {
    await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      })
      .expect(201)

    const user = await request(app.server).get('/users').expect(200)
    const userJson = JSON.parse(user.text).users.pop()

    expect(userJson).toBeTruthy()
  })
})
