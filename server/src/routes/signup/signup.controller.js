const User = require("../../models/signup.model");
const bcrypt = require("bcrypt");
async function getValidate(req, res) {
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.status(403).json({
      error: "Enter all details",
    });
  } else {
    User.findOne({ email: req.body.email })
      .exec()
      .then((user) => {
        if (user) {
          return res.status(200).json({
            error: "Email already exist kindly re-enter details",
          });
        } else {
          User.findOne({ username: req.body.username })
            .exec()
            .then((user) => {
              if (user) {
                return res.status(200).json({
                  error: "Username already exist kindly re-enter details",
                });
              } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                  if (err) {
                    return res.status(500).send(err);
                  } else {
                    const data = new User({
                      username: req.body.username,
                      email: req.body.email,
                      password: hash,
                    });
                    data
                      .save()
                      .then((result) => {
                        console.log(result);
                        res.status(400).json({
                          Message: "New user created successfully",
                          result: result,
                        });
                      })
                      .catch((err) => {
                        return res.status(500).send(err);
                      });
                  }
                });
              }
            });
        }
      });
  }
}

module.exports = {
  getValidate,
};
