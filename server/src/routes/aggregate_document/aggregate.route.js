const app = require('express')
const {aggregateController} = require('./aggregate.controller')
const aggregateRoute = app.Router()
aggregateRoute.get('/api/aggregate/:cat',aggregateController)

module.exports = aggregateRoute