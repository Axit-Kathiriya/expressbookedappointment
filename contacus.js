
const express = require('express')

const path = require('path')

const rootdir = require('../util/path')

const router = express.Router()

router.get('/contacus',(req, res, next)=>{
    console.log("1111")
    res.sendFile(path.join(rootdir,"views","contactus.html"))
})

module.exports = router