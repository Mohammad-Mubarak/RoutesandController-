const homepage=(req,res)=>{
    res.send("<h2>this is home page</h2>")
}


const about=(req,res)=>{
    res.send("<h2>this is about</h2>")
}

module.exports={ homepage, about}