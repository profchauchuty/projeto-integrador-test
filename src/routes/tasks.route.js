import { Router } from 'express'
import { getAll, create } from '../controllers/task.controller.js'

const taskRouter = Router()

taskRouter.get('/', getAll)
taskRouter.post('/create', create)

export default taskRouter