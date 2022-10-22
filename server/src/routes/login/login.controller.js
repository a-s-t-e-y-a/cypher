const {user} =require('../../models/login.model')
console.log(user)
function getAllLogin(req,res){
    const data = req.body
    console.log(data.username && data.password)
    if(user.find(info => info.username===data.username && info.password === data.password)){
       return res.status(200).json({
            message: "scussefully logged in"
        })
    }else{
        return res.status(400).json({
            message:"acesss denied kindly enter proper information"
        })
    }
    
}
module.exports = {getAllLogin}
