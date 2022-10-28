const { response } = require("../../app");
const Image = require("../../models/photos.model");
const Product = require("../../models/product.model");
let img=[];
async function getAllImages(req, res) {
  let result = [];
  result = await Image.find();
  console.log(result);
  res.json({
    data: result,
  });
}
module.exports = { getAllImages };
