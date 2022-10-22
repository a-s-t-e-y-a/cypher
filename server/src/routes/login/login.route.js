const express = require('express');
const {getAllLogin} = require('./login.controller')
const loginRouter =  express.Router();
loginRouter.post('/login',getAllLogin);
module.exports = loginRouter;