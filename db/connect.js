const mongo=require("mongoose")
const mongo_url="mongodb://localhost:27017/eromango"

// connecting to mongo db
    mongo.connect(mongo_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(
        console.log("succefully connected")
    ).catch(error=>{
        console.log("connection faild")
        process.exit(1)
    }
    )