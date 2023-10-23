import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { checkSessionIdExists } from '../middleware/check-session-id-exists'

export async function usersRoutes(app: FastifyInstance) {
  app.get('/', async (request, reply) => {
    const users = await knex('users').select()

    return reply.status(200).send({ users })
  })

  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
    })

    const { name, email } = createUserBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('users').insert({
      id: randomUUID(),
      name,
      email,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })

  app.get(
    '/metrics',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const { sessionId } = request.cookies
      const user = await knex('users').where('session_id', sessionId).first()

      if (!user) {
        return reply.status(404).send({ message: "User doesn't exists" })
      }

      const mealsCount = knex('meals')
        .count('* as count')
        .where({ user_id: user?.id })

      const mealsData = knex('meals')
        .select('*')
        .where({ user_id: user?.id })

      const [[{ count }], meals] = await Promise.all([mealsCount, mealsData])

      const { onDietCount, offDietCount } = meals.reduce(
        (acc, meal) => {
          meal.on_diet ? acc.onDietCount++ : acc.offDietCount++
          return acc
        },
        { onDietCount: 0, offDietCount: 0 },
      )

      const onDietStreak = findLongestonDietStreak(meals)

      const metrics = {
        mealsCount: count,
        onDietCount,
        offDietCount,
        onDietStreak
      }

      return reply.status(200).send(metrics)
    },
  )
}

function findLongestonDietStreak(meals) {
  let longestSequence = 0
  let currentSequence = 0

  for (let i = 0; i < meals.length; i++) {
    if (meals[i].on_diet === 1) {
      currentSequence++
      if (currentSequence > longestSequence) {
        longestSequence = currentSequence
      }
    } else {
      currentSequence = 0
    }
  }

  return longestSequence
}
