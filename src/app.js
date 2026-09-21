import express from 'express'
import authRouter from './routes/auth.route.js'
import pedidosRouter from './routes/pedidos.route.js'

const app = express()

app.use('/auth', authRouter)
app.use('/pedidos', pedidosRouter)

app.listen(80)