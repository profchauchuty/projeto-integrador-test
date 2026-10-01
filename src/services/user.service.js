import db from './../database/db.js'

class UserService {

    getAll() {
        const usuarios = db.usuarios.map(usuario => {
            return {
                id: usuario.id,
                fullName: usuario.fullName,
                username: usuario.username
            }
        })
        return usuarios
    }

    create(data) {
        const lastId = db.usuarios.at(-1)?.id;

        const userExists = db.usuarios.find(u => u.username == data.username)

        if (userExists) {
            return null
        }

        if(data.username.length > 8){
            return null
        }
        
        db.usuarios.push({
            id: lastId + 1,
            ...data
        })

        return lastId + 1
    }
}

const userService = new UserService()

export default userService