import { Router } from 'express'
import userController from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.get('/', userController.getAll)
userRouter.post('/create', userController.create)

export default userRouter