import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      name: string
      email: string
      created_at: string
      updated_at?: string
      session_id?: string
    }
    meals: {
      id: string
      name: string
      description: string
      ate_at: Date
      on_diet: boolean
      created_at: Date
      updated_at?: Date
      user_id: string
    }
  }
}
