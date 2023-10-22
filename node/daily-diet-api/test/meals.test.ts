import { expect, it, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'
import { execSync } from 'child_process'
import { knex } from '../src/database'

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

  it('should be able to update meal', async () => {
    const user = await request(app.server)
      .post('/users')
      .send({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
      })
      .expect(201)

    const cookies = user.get('Set-Cookie')

    await request(app.server)
      .post('/meals/')
      .set('Cookie', cookies)
      .send({
        name: 'Sorvete de Pistache',
        description: 'melhor sorvete',
        ateAt: '2023-10-09 03:26:35',
        onDiet: 'false',
      })
      .expect(201)

    const createdMeal = await knex('meals').select().first()

    await request(app.server)
      .put(`/meals/${createdMeal?.id}`)
      .set('Cookie', cookies)
      .send({ name: 'Vatapá', description: 'melhor comida' })
      .expect(200)

    const updatedMeal = await knex('meals').select().first()

    expect(createdMeal?.id).toEqual(updatedMeal?.id)
    expect(updatedMeal).toHaveProperty('name', 'Vatapá')
    expect(updatedMeal).toHaveProperty('description', 'melhor comida')
  })

  it('should list meals from user', async () => {
    const gaia = await request(app.server)
      .post('/users')
      .send({
        name: 'Gaia Regina',
        email: 'gaia.regina@gmail.com',
      })
      .expect(201)

    const cookiesGaia = gaia.get('Set-Cookie')

    await request(app.server)
      .post('/meals/')
      .set('Cookie', cookiesGaia)
      .send({
        name: 'Sorvete de Pistache',
        description: 'Melhor sorvete',
        ateAt: '2023-10-09 03:26:35',
        onDiet: 'false',
      })
      .expect(201)

    await request(app.server)
      .post('/meals/')
      .set('Cookie', cookiesGaia)
      .send({
        name: 'Sorvete de Giandujotto',
        description: 'Bom demais também',
        ateAt: '2023-10-22 05:00:22',
        onDiet: 'false',
      })
      .expect(201)

    const diana = await request(app.server)
      .post('/users')
      .send({
        name: 'Diana Carla',
        email: 'diana.carla@gmail.com',
      })
      .expect(201)

    const cookiesDiana = diana.get('Set-Cookie')

    await request(app.server)
      .post('/meals/')
      .set('Cookie', cookiesDiana)
      .send({
        name: 'Cenoura',
        description: 'Amo o croc croc',
        ateAt: '2023-10-19 07:00:40',
        onDiet: 'true',
      })
      .expect(201)

    const mealsGaia = await request(app.server)
      .get('/meals')
      .set('Cookie', cookiesGaia)
      .expect(200)

    const mealsDiana = await request(app.server)
      .get('/meals')
      .set('Cookie', cookiesDiana)
      .expect(200)

    expect(mealsGaia.body).toHaveLength(2)
    expect(mealsDiana.body).toHaveLength(1)
  })

  it('should get existing meal', async () => {
    const gaia = await request(app.server)
      .post('/users')
      .send({
        name: 'Gaia Regina',
        email: 'gaia.regina@gmail.com',
      })
      .expect(201)

    const cookiesGaia = gaia.get('Set-Cookie')

    await request(app.server)
      .post('/meals/')
      .set('Cookie', cookiesGaia)
      .send({
        name: 'Sorvete de Pistache',
        description: 'Melhor sorvete',
        ateAt: '2023-10-09 03:26:35',
        onDiet: 'false',
      })
      .expect(201)

    const mealGaia = await request(app.server)
      .get('/meals')
      .set('Cookie', cookiesGaia)
      .expect(200)

    const [mealListed] = mealGaia.body

    console.log('mealListed: ', mealListed)

    const meal = await request(app.server)
      .get(`/meals/${mealListed.id}`)
      .set('Cookie', cookiesGaia)
      .expect(200)


    expect(meal.body).toHaveProperty('id', mealListed.id)
  })
})
