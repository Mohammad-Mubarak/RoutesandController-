const express = require('express')
const app = express()
const fileupload = require("express-fileupload")
const port = 7000
const cloudinary=require("cloudinary").v2

require("./db/connect")
cloudinary.config({ 
    cloud_name: 'dromvfu7p', 
    api_key: '765263738728749', 
    api_secret: '2tcepo7Lqtj09JVhe51pMMm2DGo',

  });

const rout =require("./router/home")
app.use(fileupload({
      useTempFiles: true,
    })
  );







  

//file upload to current directory


// app.use(fileupload())
// app.use(express.json())
// app.get('/', (req, res) => res.send('Hello World!'))
// app.post("/upload", (req, res) => {
//     const file = req.files.photo

//     file.mv("./pics/" + file.name, (error, result) => {
//         if (error)
//             throw error;
//         res.send({
//             success: true,
//             message: "File uploaded"
//         })
//     })
// })







app.use("/api/",rout)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))