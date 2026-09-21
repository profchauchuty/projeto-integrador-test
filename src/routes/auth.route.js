import { Router } from 'express'
import authController from './../controllers/auth.controller.js'

const authRouter = Router()

authRouter.get('/signIn', authController.signIn)
authRouter.get('/signUp', authController.signUp)

export default authRouter