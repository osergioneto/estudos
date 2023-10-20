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

      if (!user) {
        return reply.status(404).send({ message: "User doesn't exists" })
      }

      const createMealBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        ateAt: z.coerce.date(),
        onDiet: z.coerce.boolean(),
      })

      const result = createMealBodySchema.safeParse(request.body)

      if (!result.success) {
        return reply.status(400).send(result.error.issues)
      }

      const {
        data: { name, description, ateAt, onDiet },
      } = result

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
