/**
 * Created by Administrator on 2018/3/16.
 */
/*连接数据库*/
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/daowei')
mongoose.connection.on('open',function () {
  console.log('ok');
})