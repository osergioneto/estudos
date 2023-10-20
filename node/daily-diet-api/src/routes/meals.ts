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

  app.put(
    '/:mealId',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const { sessionId } = request.cookies
      const user = await knex('users').where('session_id', sessionId).first()
      const { mealId } = request.params

      const meal = await knex('meals').where('id', mealId).first()

      if (!meal) {
        return reply.status(404).send()
      }

      const updateMealBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        ateAt: z.coerce.date(),
        onDiet: z.coerce.boolean(),
      })

      const result = updateMealBodySchema.safeParse(request.body)

      if (!result.success) {
        return reply.status(400).send(result.error.issues)
      }

      const {
        data: { name, description, ateAt, onDiet },
      } = result

      const mealToUpdate = {
        id: meal?.id,
        name: name ?? meal?.name,
        description: description ?? meal?.name,
        ate_at: ateAt ?? meal?.ate_at,
        on_diet: onDiet ?? meal?.on_diet,
      }

      await knex('meals').update(mealToUpdate)

      return reply.status(200).send()
    },
  )
}
