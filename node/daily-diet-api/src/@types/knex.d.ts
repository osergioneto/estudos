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
      ate_at: string
      created_at: string
      updated_at?: string
      user_id: string
    }
  }
}
