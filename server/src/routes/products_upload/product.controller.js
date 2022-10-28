const Products = require("../../models/product.model");
const Image = require("../../models/photos.model");
const uniqid = require("uniqid");
const fs = require("fs");
let result_store;
let file;
function postProducts(req, res) {
  const data = req.body;
  // console.log(req.body)
  // console.log(!data.price||!data.title||!data.property_value||!data.category||!data.brand||!data.color||!data.country_origin||!data.hasAdultConsideration||!data.size||!data.item_condition||!data.keywords||!data.manufacturer)
  const adult_value =
    data.hasAdultConsideration == false ? true : data.hasAdultConsideration;
  if (
    !data.price ||
    !data.title ||
    !data.property_value ||
    !data.category ||
    !data.brand ||
    !data.color ||
    !data.country_origin ||
    !adult_value ||
    !data.size ||
    !data.item_condition ||
    !data.keywords ||
    !data.manufacturer
  ) {
    res.status(400).json({
      message: "please enter full details",
    });
  } else {
    file = req.files;
    //    console.log(file)
    if (file.length == 0) {
      return res.status(200).json({
        message: "I think you forgot to upload image",
      });
    } else {
      // console.log(image_data)
      const prod = new Products({
        price: data.price,
        title: data.title,
        property_value: data.property_value,
        category: data.category,
        brand: data.brand,
        color: data.color,
        country_origin: data.country_origin,
        hasAdultConsideration: data.hasAdultConsideration,
        size: data.size,
        item_condition: data.item_condition,
        keywords: data.keywords,
        productid: uniqid(),
        manufacturer: data.manufacturer,
      });
      // console.log(prod)
      prod
        .save()
        .then((result) => {
          let image_data = file.map((data) => {
            let img = fs.readFileSync(data.path);
            let encode = img.toString("base64");
            return encode;
          });
          let store_img = image_data.map(async (src, index) => {
            const buff_data = new Image({
              original_name: file[index].originalname,
              generated_name:
                Date.now() +
                "--" +
                "--" +
                uniqid() +
                "--" +
                file[index].originalname,
              extension: file[index].mimetype,
              buff_data: src,
              related_product_id: result._id,
              image_type: data.type
            });
            // console.log(buff_data.generated_name)
            return buff_data
              .save()
              .then(() => {
                return {
                  msg: `${file[index].originalname} Uploaded Successfully...!`,
                };
              })
              .catch((error) => {
                if (error) {
                  return Promise.reject({
                    error:
                      error.message ||
                      `Cannot Upload ${files[index].originalname} Something Missing!`,
                  });
                }
              });
          });
          Promise.all(store_img)
            .then((msg) => {
              // res.json(msg);
              res.json({
                image: msg,
                body: result,
              });
            })
            .catch((err) => {
              res.json(err);
            });
        })
        .catch((err) => {
          res.status(400).json({
            message: "some new error occur",
            error: err,
          });
        });
    }
  }
  // console.log(result_store)
}
async function getAllProducts(req, res) {
  let result = [];
  result = await Products.find();
  res.json({
    result,
  });
}
function filter_by_id(req, res) {
  Products.findOne({ productid: req.params.productid })
    .exec()
    .then((result) => {
      res.json({
        result: result,
      });
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
}
module.exports = { postProducts, getAllProducts, filter_by_id };
