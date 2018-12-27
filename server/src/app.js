const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({
    message: 'hello express.js'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}, your user was registered. Have fun!`
  })
})

app.listen(process.env.PORT || 8081)
