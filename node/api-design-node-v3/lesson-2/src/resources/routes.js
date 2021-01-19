import { Router } from "express"
import itemRoutes from "./item/item.router"
import listRoutes from "./list/list.router"
import userRoutes from "./user/user.router"

const router = Router()

router.use('/item', itemRoutes)
router.use('/list', listRoutes)
router.use('/user', userRoutes)

export default router