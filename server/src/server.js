const express = require('express');
const app = express();
const path = require('path');
const loginRouter = require('./routes/login/login.route');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.listen(PORT,(req,res) => {
    console.log('listening on port: '+ PORT);
});
console.log(path.join(__dirname, '..','public'))
app.use(express.static(path.join(__dirname,'..','public')))
app.use(loginRouter)