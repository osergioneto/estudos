import { Router } from 'express'
import controllers from './item.controllers'
const controller = (req, res) => {
    res.send({ hello: 'world' })
}

const router = Router()

router.route('/')
    .get(controller)
    .post(controller)

router.route('/:id')
    .get(controller)
    .put(controller)
    .delete(controller)

export default router
