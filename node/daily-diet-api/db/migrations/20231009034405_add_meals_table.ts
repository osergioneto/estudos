import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary(),
      table.text('name').notNullable(),
      table.text('description').notNullable(),
      table.timestamp('ate_at').notNullable(),
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable(),
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable(),
      table.boolean('on_diet').defaultTo(false),
      table.uuid('user_id').unsigned(),
      table.foreign('user_id').references('users.id')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
