
const express = require("express")
const router=express.Router()
const {homepage,about,upload}=require("../controller/homepage")

//post route
router.route("/upload").post(upload)


router.route("/about").get(about)

module.exports =router