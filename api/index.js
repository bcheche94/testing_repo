import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import test_model_1 from './models/user.model.js'
import path from 'path'



mongoose.connect
('mongodb+srv://bcheche94:dj3DwCkfoXhZAu3J@cluster0.xyxeyk8.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
console.log('connected to database!')
})
.catch((error) => {
console.log(error)
})

const __dirname = path.resolve()

const app = express()

app.use(express.json())

app.listen(3000, () => {
    console.log('server is running on port 3000')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.get('/api/getitems', async (req, res) => {
    const all_items = await test_model_1.find({})
        return res.json({
            count: all_items.length,
            data: all_items
        })
})

app.post('/api/makenewitem', async (req, res) => {
    

    const new_item_data = {
    xuiname: req.body.xuiname,
    email: req.body.email,
    password: req.body.password
    }

    const new_item = await test_model_1.create(new_item_data)
    return res.send(new_item)

    
})

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error!'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})