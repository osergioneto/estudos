import { Router } from 'express'
import { me, updateMe, createUser } from './user.controllers'

const router = Router()

router.get('/', me)
router.post('/', createUser)
router.put('/', updateMe)

export default router
