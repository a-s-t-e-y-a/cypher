const mongoose = require("mongoose");
const mongodb = require("mongodb");
const Products = require("../../models/product.model");
const Photos = require("../../models/photos.model");
const { MongoClient } = require("mongodb");
let resultGirls;

// let resultBoys;
// async function new_one() {
//   const aggGirls = [
//     {
//       $match: {
//         category: "Female",
//       },
//     },
//     {
//       $lookup: {
//         from: "images",
//         localField: "convertedPrice",
//         foreignField: "related_product_id",
//         as: "result",
//       },
//     },
//     {
//       $limit: 10,
//     },
//   ];
//   // const aggBoys = [
//   //   {
//   //     $match: {
//   //       category: "Male",
//   //     },
//   //   },
//   //   {
//   //     $lookup: {
//   //       from: "images",
//   //       localField: "convertedPrice",
//   //       foreignField: "related_product_id",
//   //       as: "result",
//   //     },
//   //   },
//   //   {
//   //     $limit: 10,
//   //   },
//   // ];

//   const client = await MongoClient.connect("mongodb://localhost:27017/", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const coll = client.db("cypher").collection("products");
//   const cursorGirls = coll.aggregate(aggGirls);
//   resultGirls = await cursorGirls.toArray();
//   const cursorBoys =coll.aggregate(aggBoys);
//   resultBoys = await cursorBoys.toArray();
//   await client.close();
// }
// new_one();
async function aggregateController(req, res) {
  console.log(req.params.cat.toString());

  const aggGirls = [
    {
      $match: {
        category: req.params.cat.toString(),
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
      $limit: 300,
    },
  ];



  const client = await MongoClient.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const coll = client.db("cypher").collection("products");
  const cursorGirls = coll.aggregate(aggGirls);
  resultGirls = await cursorGirls.toArray();
 
  await client.close();
 
  console.log(resultGirls);
  await res.json({
    msg: resultGirls,
  });
}
module.exports = { aggregateController };
