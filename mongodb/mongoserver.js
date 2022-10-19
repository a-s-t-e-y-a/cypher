const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient


app.use(express.json())

var database
app.get('/',(req,resp)=>{
    resp.send('welcome to mongodb Api')
})


app.get('/api/womanitem',(req,resp)=>{
    database.collection('womanitem').find({}).toArray((err,result) => {
        if(err) throw err
        resp.send(result)
    })
})

app.listen( 8080,()=>{
 MongoClient.connect('MONGODB://localhost:27017',{useNewUrlParser: true},(error,result)=>{
    if(error) throw error
    database = result.db('mydatabase')
 })

})


