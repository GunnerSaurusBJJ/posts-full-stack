const express = require('express')
const posts = require('./routes/api/posts')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/posts', posts)

if (process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static(__dirname + '/public'))
  //handle spa
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(3000)