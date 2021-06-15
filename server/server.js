import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = process.env.PORT || 4500

app.get('/', function (req, res) {
    res.send('Express is working')
})

app.listen(port, _ => console.log(`Server running at http://localhost:${port}`))
