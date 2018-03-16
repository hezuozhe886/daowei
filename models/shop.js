/**
 * Created by Administrator on 2018/3/16.
 */
/*创建模式对象*/
const  mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
  serviceIndex:{type:String},
  serviceType:{type:Array},
  shopList:{type:Array}

})
/*暴露*/
module.exports = mongoose.model('shops',shopSchema)