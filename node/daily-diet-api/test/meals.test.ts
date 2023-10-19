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

describe('Meals routes', () => {
  it('should be able to create a new meal', async () => {
    const user = await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      })
      .expect(201)

    const cookies = user.get('Set-Cookie')

    await request(app.server)
      .post('/meals')
      .set('Cookie', cookies)
      .send({
        name: 'Sorvete de Pistache',
        description: 'melhor sorvete',
        ateAt: '2023-10-09 03:26:35',
        onDiet: 'false',
      })
      .expect(201)
  })

  it('should be return error onDiet is not boolean', async () => {
    const user = await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      })
      .expect(201)

    const cookies = user.get('Set-Cookie')

    await request(app.server)
      .post('/meals')
      .set('Cookie', cookies)
      .send({
        name: 'Sorvete de Pistache',
        description: 'melhor sorvete',
        ateAt: 'naruto',
        onDiet: 'false',
      })
      .expect(400)
  })
})
