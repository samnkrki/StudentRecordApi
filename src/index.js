import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import multer from 'multer'

import config from './config/config';
import routes from './app/index.route'

const app = express()
const port = config.port

mongoose.connect(config.dbPath)
const db = mongoose.connection
db.on('open', () => {
    console.log('connected to the database \'studentrecord\' successfully')
})
db.on('error', (e) => {
    console.log(e)
})

//middlewares
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('uploads'))
app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('Student Record Management.......')
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        msg: err.message,
        stack: err.stack,
    })
})

//listening to port
app.listen(port, () => {
    console.log(`'Project' server running on port ${port}`)
})