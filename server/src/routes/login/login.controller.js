const  User= require("../../models/signup.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
console.log(User);
function getAllLogin(req, res) {
  const data = req.body;
  if((!data.username&&!data.email)||!data.password){
    res.status(400).json({
        message:"Error enter all the required fields"
    })
  }
  else{
    User.findOne({ $or: [{ email: data.email }, { username: data.username }] })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(200).json({
          message: "User is not found kindly signup",
        });
      } else {
        bcrypt.compare(data.password, user.password, (err, result) => {
          if (err) {
            res.status(400).json({
              error: err,
            });
          } else {
            if (result) {
                const token = jwt.sign({
                    email: user.email,
                    username: user.username
                },"secret",{
                    expiresIn :"1h"
                })
              res.status(200).json({
                message: "you are scussefully logged in",
                token: token
              });
            }
            else{
                res.status(400).json({
                    message: "Enter correct password",
                })
            }
          }
        });
      }
    });
  }
}

module.exports = { getAllLogin };
