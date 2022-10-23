const User = require('../../models/signup.model')
console.log(User)
const app = require('express');
const signupRouter = app.Router();
signupRouter.post('/sign',async (req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    try{
            await user.save();
            res.status(200).json({
                done :"done scussefully",
                user,
            })
    }
    catch(error){
        console.log('error')
        res.status(500).send(error)
    }
})
module.exports = signupRouter;