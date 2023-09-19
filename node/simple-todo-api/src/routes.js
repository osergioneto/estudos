import { randomUUID } from "node:crypto"
import { Database  } from "./database.js"
import { buildRoutePath } from "./utils/build-route-path.js"

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

            if (!title) {
                return res.writeHead(404).end(JSON.stringify({"mensagem": "Título não enviado"}))
            }

            if (!description) {
                return res.writeHead(404).end(JSON.stringify({"mensagem": "Descrição não enviada"}))
            }

            const task = {
                id: randomUUID(),
                title,
                description,
                created_at: new Date,
                updated_at: null,
                completed_at: null
            }

            database.insert('tasks', task)
            
            return res.writeHead(201).end(JSON.stringify({"mensagem": "Task criada"}))
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const task = database.selectById('tasks', id)
            if (!task) { return res.writeHead(404).end(JSON.stringify({"mensagem": "Task não existe"})) }

            const { title, description }= req.body


            database.update('tasks', id, { title, description })

            return res.writeHead(204).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { id } = req.params
            const task = database.selectById('tasks', id)
            if (!task) { return res.writeHead(404).end(JSON.stringify({"mensagem": "Task não existe"})) }

            let update_params;

            if (task.completed_at) {
                update_params = { completed_at: null }
            } else {
                update_params = { completed_at: new Date }
            }

            database.update('tasks', id, update_params)

            const updated_task = database.selectById('tasks', id)

            return res.writeHead(200).end(JSON.stringify(updated_task))
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const task = database.selectById('tasks', id)
            if (!task) { return res.writeHead(404).end(JSON.stringify({"mensagem": "Task não existe"})) }

            
            database.delete('tasks', id)

            return res.writeHead(204).end()
        }
    }
]