import UserService from './../services/user.service.js'

class PedidoService {
    getAll() {

    }

    getById() {

    }

    getByName() {

    }

    create(pedido) {
        const { produtosId, userId } = pedido
        
        const userExists = UserService.getById(userId)
        
        if(!userExists){
            throw Error('Usuário não existe!')
        }

    }
}

export default new PedidoService