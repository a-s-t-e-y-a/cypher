const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.listen(PORT,(req,res) => {
    console.log('listening on port: '+ PORT);
});
console.log(path.join(__dirname, '..','public'))
app.use(express.static(path.join(__dirname,'..','public')))