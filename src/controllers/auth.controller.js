class AuthController {

    signIn(req, res) {
        res.status(200).json({ message: 'Criando controlador de Login' })
    }

    signUp(req, res) {
        res.status(200).json({ message: 'Criando controlador de REgistro' })
    }
}

const authController = new AuthController()

export default authController
