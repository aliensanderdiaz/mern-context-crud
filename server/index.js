import express from 'express'
import { PORT } from './config.js'
import { connectDB } from './db.js'
import postsRoutes from './routes/posts.routes.js'

const app = express()
connectDB()

app.use(postsRoutes)

app.listen(PORT)
console.log('Server in running port', PORT)