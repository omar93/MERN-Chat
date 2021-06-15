import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const port = process.env.PORT || 4500

app.use(cors())

app.get('/', function (req, res) {
    res.send('Express is working')
})

app.get('/api', function (req, res) {
    res.send({
        name: 'omar',
        age: '33'
    })
})

app.listen(port, _ => console.log(`Server running at http://localhost:${port}`))
