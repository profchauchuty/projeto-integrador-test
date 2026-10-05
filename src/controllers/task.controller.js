import TaskService from "../services/task.service.js"

export function getAll(req, res) {
    const tasks = TaskService.getAll()
    res.json(tasks)
}

export function create(req, res) {
    const data = req.body
    const id = TaskService.create(data)
    res.json({
        id: id,
        message: 'Tarefa criada com sucesso!'
    })
}