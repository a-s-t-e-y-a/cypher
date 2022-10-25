const multer = require('multer')
const storage = multer.diskStorage({
    filename: function(req,file,cb){
       
        var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
        cb(null, file.fieldname+'-'+Date.now()+ ext)
    }
})
const store = multer({storage :storage})
module.exports = store