const express = require('express');

const noteRouter = require('./notes')

const routes = express()

routes.use('/notes', noteRouter)

module.exports = routes;