import express, { json } from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import url from 'url'

import usersRouter from './routers/usersRouter.js'
import searchRouter from './routers/searchRouter.js'

const app = express()
 
dotenv.config()
// app.disable('x-powered-by')

try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log('connect mongodb successfully!')
} catch (e) {
    console.log('connect mongodb failed ' + e.message)
}

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(cors())
app.use(morgan('dev'))
app.use(json())

app.use('/images', express.static(path.join(__dirname, 'assets/images')));

app.use('/users', usersRouter);
app.use('/search', searchRouter);

app.all('*', (req, res, next) => {
    next(new Error('Router not found'))
})

app.use(function (err, req, res, next) {
    res.status(500).json({ success: false, message: err.message });
})

app.listen(3000, () => console.log('Server started at port 3000!'))
