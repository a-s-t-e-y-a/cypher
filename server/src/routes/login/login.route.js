const express = require('express');
const {getAllLogin} = require('./login.controller')
const loginRouter =  express.Router();
loginRouter.post('/api/login',getAllLogin);
module.exports = loginRouter;