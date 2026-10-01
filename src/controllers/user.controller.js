import userService from "../services/user.service.js"

class UserController {

    getAll(req, res) {
        const usuarios = userService.getAll()
        res.json({
            status: 200,
            message: 'Lista de Usuários',
            data: {
                usuarios
            }
        })
    }

    create(req, res) {
        const data = req.body

        const newId = userService.create(data)

        if (!newId) {
            return res.json({
                status: 400,
                message: 'Não foi possível criar o usuário, pois já existe um usuário com o mesmo username',
                data: null
            })
        }

        res.json({
            status: 201,
            message: 'Novo Usuário Criado com Sucesso!',
            data: {
                newId
            }
        })

    }

    // getById(req, res) {

    // }

    // getByUsername(req, res){

    // }
    // update(req, res) {

    // }

    // delete(req, res) {

    // }
}

const userController = new UserController()

export default userController