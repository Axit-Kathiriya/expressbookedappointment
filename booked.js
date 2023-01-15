const express = require('express')

const path = require('path')

const rootdir = require('../util/path')

const router = express.Router()

router.post('/success',(req, res, next)=>{
    console.log("1111")
    res.sendFile(path.join(rootdir,"views","booked.html"))
})

module.exports = router