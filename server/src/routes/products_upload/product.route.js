const app = require('express')
const {postProducts , getAllProducts, filter_by_id} = require('./product.controller')
const productRouter = app.Router();
const Product =require('../../models/product.model')
productRouter.post('/products',postProducts)
productRouter.get('/products',getAllProducts)
productRouter.get('/products/:productid' ,filter_by_id)
module.exports=productRouter
