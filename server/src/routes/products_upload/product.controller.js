const Products = require('../../models/product.model')
const uniqid = require('uniqid');
function postProducts(req,res){
    const data = req.body
    console.log(req.body)
    console.log(!data.price||!data.title||!data.property_value||!data.category||!data.brand||!data.color||!data.country_origin||!data.hasAdultConsideration||!data.size||!data.item_condition||!data.keywords||!data.manufacturer)
    const adult_value = data.hasAdultConsideration ==false ? true : data.hasAdultConsideration;
    if (!data.price || !data.title || !data.property_value || !data.category || !data.brand || !data.color || !data.country_origin || !adult_value || !data.size || !data.item_condition || !data.keywords || !data.manufacturer){
        res.status(400).json({
            message:"please enter full details"
        })
    }
    else{
        const prod = new Products({
            price :data.price,
            title :data.title,
            property_value :data.property_value,
            category:data.category,
            brand :data.brand,
            color:data.color,
            country_origin:data.country_origin,
            hasAdultConsideration :data.hasAdultConsideration,
            size :data.size,
            item_condition :data.item_condition,
            keywords:data.keywords,
            productid: uniqid(),
            manufacturer : data.manufacturer,
        })
        prod.save()
        .then((result)=>{
            res.status(200).json({
                message: "data enter scussefully",
                result : result
            })
        })
        .catch((err)=>{
            res.status(400).json({
                message: "some error occur",
                error: error
            })
        })
    }
}
async function getAllProducts(req,res){
    let result = [];
    result = await Products.find()
    res.json({
        data : result
    })
}
function filter_by_id(req, res){
    Products.findOne({productid:req.params.productid})
    .exec()
    .then((result) =>{
        res.json({
            result: result
        })
    })
    .catch((err)=>{
        res.json({
            error : err,
        })
    })
}
module.exports ={postProducts , getAllProducts , filter_by_id}