import { Router } from 'express' 
import pedidoController from './../controllers/pedido.controller.js'

const pedidosRouter = Router()

pedidosRouter.get('/', pedidoController.getAll)
pedidosRouter.post('/', pedidoController.create)
pedidosRouter.get('/:id', pedidoController.getById)
pedidosRouter.get('/:name', pedidoController.getByName)

export default pedidosRouter