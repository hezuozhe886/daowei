/**
 * Created by Administrator on 2018/3/17.
 */
/*创建模式对象*/
const  mongoose = require('mongoose')
const shopSchemaII = new mongoose.Schema({
  title:{type:String},
  name:{type:String},
  desc:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  commentCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String},
  company:{type:String},
  profile:{type:String},

})
/*暴露*/
module.exports = mongoose.model('server_items',shopSchemaII)