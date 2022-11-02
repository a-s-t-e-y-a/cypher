const app = require('express')
const {aggregateControllerGirl,aggregateControllerBoy} = require('./aggregate.controller')
const aggregateRoute = app.Router()
aggregateRoute.get('/api/aggregate/girls',aggregateControllerGirl)
aggregateRoute.get('/api/aggregate/boys',aggregateControllerBoy)
module.exports = aggregateRoute