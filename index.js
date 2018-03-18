/*数据库引入的入口文件*/
require('./tools/db')


let express = require('express')

let app = express()

app.use(express.static('public'))

const shopModel = require('./models/shop')
const shopServer = require('./shopServer/shopServer')
const shopSchemaII = require('./shopItem/shopItem')
const shopSchemaOne = require('./shopItem/shopItem')


app.get('/getShopList',function (req,res) {
  shopModel.find({},function (err,data) {
    res.send({data:data})
  })
})

app.get('/getShopServer',function (req,res) {
  shopServer.find({},function (err,data) {
    res.send({data:data})
  })
})
app.get('/getShophaha',function (req,res) {
  shopSchemaII.find({},function (err,data) {
    res.send({data:data})
  })
})
app.get('/getShophehe',function (req,res) {
  shopSchemaOne.find({},function (err,data) {
    res.send({data:data})
  })
})
/*分页区域*/
app.get('/getcomments',function (req,res) {
  const page = req.query.page
  //分页查询公式
  // find().limit(每页显示条数).skip((页数-1)*(每页显示条数)).exec
  shopSchemaOne.find({}).limit(10).skip((page-1)*10).exec(function (err,list) {
    if(!err){
      res.send({list:list})
    }
  })
})


app.listen(3000,function () {
  console.log('服务器连接成功');
})
