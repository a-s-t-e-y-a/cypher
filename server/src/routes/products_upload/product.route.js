const app = require('express')
const {postProducts} = require('./product.controller')
const productRouter = app.Router();
const Product =require('../../models/product.model')
productRouter.post('/products',postProducts)
module.exports=productRouter
