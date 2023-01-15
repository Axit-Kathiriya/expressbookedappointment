const { Router } = require('express')

const path = require('path')

const rootdir = require('../util/path')

const express = require('express')

const router = express.Router()

router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootdir,"views","admin.html"))
})

router.post('/product',(req,res,next)=>{
console.log(req.body)
res.redirect('/shop')
})

module.exports = router;