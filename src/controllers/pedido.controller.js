import PedidoService from './../services/pedido.service.js'

class PedidoController {

    getAll(req, res) {

    }

    getById(req, res) {
        const { id } = req.params
        res.send(`<pre>O ID enviado foi: ${id}</pre>`)
    }

    getByName(req, res) {
        const { name } = req.params
    }

    create(req, res) {
        const { produtosId, userId } = req.body

        // Validações...
        
        const result = PedidoService.create({produtosId, userId})

        res.json(result)
    }
}

export default new PedidoController()