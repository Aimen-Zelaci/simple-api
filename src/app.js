const express = require('express')
const app = express()
const usersRoute = require('./routes/users')
const bodyParser = require('body-parser')

// application/json
app.use(bodyParser.json());

app.use('/users', usersRoute)

module.exports = app;
