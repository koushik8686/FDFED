const express = require('express')
const router = express.Router()
const googlelogin = require('../../controllers/user/googleauth')
// const render_home= require("../../controllers/user/popularpage")
router.get('/google' , googlelogin )
      
module.exports= router