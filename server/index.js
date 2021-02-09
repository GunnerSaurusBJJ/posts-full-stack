const express = require('express')
const posts = require('./routes/api/posts')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/posts', posts)

app.listen(3000)