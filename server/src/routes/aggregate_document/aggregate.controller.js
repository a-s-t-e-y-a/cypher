const mongoose = require("mongoose");
const mongodb = require("mongodb");
const Products = require("../../models/product.model");
const Photos = require("../../models/photos.model");
const { MongoClient } = require("mongodb");
let resultGirl;
let resultBoys;
async function new_one() {
  const aggGirls = [
    {
      $match: {
        category: "Female",
      },
    },
    {
      $lookup: {
        from: "images",
        localField: "convertedPrice",
        foreignField: "related_product_id",
        as: "result",
      },
    },
    {
      $limit: 10,
    },
  ];
  const aggBoys = [
    {
      $match: {
        category: "Male",
      },
    },
    {
      $lookup: {
        from: "images",
        localField: "convertedPrice",
        foreignField: "related_product_id",
        as: "result",
      },
    },
    {
      $limit: 10,
    },
  ];

  const client = await MongoClient.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const coll = client.db("cypher").collection("products");
  const cursorGirls = coll.aggregate(aggGirls);
  resultGirls = await cursorGirls.toArray();
  const cursorBoys =coll.aggregate(aggBoys);
  resultBoys = await cursorBoys.toArray();
  await client.close();
}
new_one();
function aggregateControllerGirl(req, res) {

  res.json({
    msg: resultGirls,
  });
}
function aggregateControllerBoy(req, res) {

  res.json({
    msg: resultBoys,
  });
}
module.exports = { aggregateControllerGirl,aggregateControllerBoy };
