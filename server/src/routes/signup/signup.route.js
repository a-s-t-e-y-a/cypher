const app = require('express');
const {getValidate} = require('./signup.controller')
const signupRouter = app.Router();
signupRouter.post('/signup',getValidate)
module.exports = signupRouter;