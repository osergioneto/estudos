import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { checkSessionIdExists } from '../middleware/check-session-id-exists'

export async function mealsRoutes(app: FastifyInstance) {
  app.post(
    '/',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const { sessionId } = request.cookies
      const user = await knex('users').where('session_id', sessionId).first()

      const createMealBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        ateAt: z.coerce.date(),
        onDiet: z.coerce.boolean(),
      })

      const { name, description, ateAt, onDiet } = createMealBodySchema.parse(
        request.body,
      )

      await knex('meals').insert({
        id: randomUUID(),
        name,
        description,
        ate_at: ateAt,
        on_diet: onDiet,
        user_id: user?.id,
      })

      return reply.status(201).send()
    },
  )
}
