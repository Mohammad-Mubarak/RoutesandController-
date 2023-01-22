const cloudinary=require("cloudinary").v2
const user=require("../modle/user")



const homepage=(req,res)=>{
    res.send("<h2>this is home page</h2>")
}


const about=(req,res)=>{
    res.send("<h2>this is about</h2>")
}



const upload=async(req,res)=>{
      const {name,last,number}=req.body
      let file = req.files.samplefile;
      

      // uploading image to cloud
      result = await cloudinary.uploader.upload(file.tempFilePath,{ folder: "users", })


  // here after upload to cloud i put url to data base simply
   const done= await user.create({
        firstname:name,
        lastname:last,
        number,
        pic:result.url
    })

    res.send("file uploaded to server than you for this")
}


module.exports={ homepage, about,upload}