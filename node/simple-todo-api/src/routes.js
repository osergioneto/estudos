import { randomUUID } from "node:crypto"
import { Database  } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"
import { checkExistingResource } from "./utils/check_existing_resource.js"

export const database = new Database()

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
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body

            const task = {
                id: randomUUID(),
                title,
                description,
                created_at: new Date,
                updated_at: null,
                completed_at: null
            }

            database.insert('tasks', task)
            
            return res.writeHead(201).end('Task created')
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const task = database.selectById('tasks', id)
            if (!task) { return res.writeHead(404).end() }

            const { title, description }= req.body


            database.update('tasks', id, { title, description })

            return res.writeHead(204).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const task = database.selectById('tasks', id)
            if (!task) { return res.writeHead(404).end() }

            
            database.delete('tasks', id)

            return res.writeHead(204).end()
        }
    }
]