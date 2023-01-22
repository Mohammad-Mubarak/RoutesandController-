
const express = require("express")
const router=express.Router()
const {homepage,about}=require("../controller/homepage")

router.route("/homepage").get(homepage)
router.route("/about").get(about)
module.exports =router