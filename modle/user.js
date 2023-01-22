const mongoose = require("mongoose")

const ImageUser =new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String,
    },
    number:{
        type:String,
    },
    pic:{
        type:String,
    }

})

module.exports=mongoose.model("robin",ImageUser)



