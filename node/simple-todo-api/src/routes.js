import { randomUUID } from "node:crypto"
import { Database  } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database()

console.log(buildRoutePath('/tasks'))
export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query
            const tasks = database.select('tasks', search ? { title: search, description: search} : null)

            return res.end(JSON.stringify(tasks))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name,
                email
            }

            database.insert('users', user)
            
            return res.writeHead(201).end('Criação de usuário')
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/userd/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { name, email }= req.body

            database.update('users', id, { name, email })

            return res.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params

            database.delete('users', id)

            return res.writeHead(204).end()
        }
    }
]