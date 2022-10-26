const app = require('express')
const {postProducts , getAllProducts, filter_by_id} = require('./product.controller')
const store = require('../../middleware/product_photo_upload')
const multer = require('multer')
const upload = multer();
const productRouter = app.Router();
const Product =require('../../models/product.model')
productRouter.post('/products',store.array('images',12),postProducts)
productRouter.get('/products',getAllProducts)
productRouter.get('/products/:productid' ,filter_by_id)
module.exports=productRouter
