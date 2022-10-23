const express = require('express');
const app = express();
const path = require('path');
const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


const loginRouter = require('./routes/login/login.route');
const signupRouter  = require('./routes/signup/signup.route');
app.use(express.json());
console.log(path.join(__dirname, '..','public'))
app.use(express.static(path.join(__dirname,'..','public')))

app.use(loginRouter)
app.use(signupRouter)
module.exports = app;