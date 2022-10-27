const { response } = require("../../app");
const Image = require("../../models/photos.model");
const Product = require("../../models/product.model");
let img;
async function getAllImages(req, res) {
  let image = [];
  image = await Image.find();
  let data = image.map((data) => {
    return (img = data);
  });
  Promise.all(data)
    .then((img) => {
      // res.json(msg);
     res.render(img[1])
    })
    .catch((err) => {
      res.json(err);
    });
}
module.exports = { getAllImages };
