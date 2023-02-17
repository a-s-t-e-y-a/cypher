const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:8000"
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/cypher", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const loginRouter = require("./routes/login/login.route");
const signupRouter = require("./routes/signup/signup.route");
const productRouter = require("./routes/products_upload/product.route");
const imageRoute = require("./routes/image_serve_route/image.route");
const aggregateRoute = require("./routes/aggregate_document/aggregate.route")
app.use(express.json());
console.log(path.join(__dirname, "..", "public"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/serve*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use(loginRouter);
app.use(signupRouter);
app.use(productRouter);
app.use(imageRoute);
app.use(aggregateRoute)
module.exports = app;
