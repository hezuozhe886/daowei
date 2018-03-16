require('./tools/db')


var express = require('express')

var app = express()

app.use(express.static('public'))

const shopModel = require('./models/shop')

app.get('/getShopList',function (req,res) {
  shopModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.listen(3000,function () {
  console.log('服务器连接成功');
})
