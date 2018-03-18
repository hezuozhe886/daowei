/**
 * Created by Administrator on 2018/3/17.
 */
/*创建模式对象*/
const  mongoose = require('mongoose')
const shopSchemaSS = new mongoose.Schema({
  title:{type:String},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String}

})
/*暴露*/
module.exports = mongoose.model('servers',shopSchemaSS)