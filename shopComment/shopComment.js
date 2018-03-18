/*创建模式对象*/
const  mongoose = require('mongoose')
const shopSchemaOO = new mongoose.Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  nick:{type:String},
  star:{type:Number},


})
/*暴露*/
module.exports = mongoose.model('server_comment',shopSchemaOO)/**
 * Created by Administrator on 2018/3/17.
 */
