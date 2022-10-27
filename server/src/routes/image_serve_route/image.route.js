const app =require('express')
const {getAllImages} = require('./image.controller')
const imageRoute = app.Router()
imageRoute.get('/image',getAllImages);
module.exports= imageRoute;