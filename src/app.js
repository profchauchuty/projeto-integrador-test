import express from 'express'
import taskRouter from './routes/tasks.route.js'

const app = express()

app.use('/tasks', taskRouter)

app.listen(80, () => {
    console.log('http://localhost/')
})