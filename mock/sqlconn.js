var mysql = require('mysql');
var mysqlOptions = {
  host:"localhost",
  user:"root",
  password:"",
  database:"space"
}

var Client = mysql.createConnection(mysqlOptions);

// sql：数据库语句
function data(sql,params,callback){
  // 之前只有两个参数，变成了3个参数
  Client.query(sql,params,function(error,result){
    if(error){
      callback({
        msg:"登录失败,用户名密码错误",
        code:"404"
      })
      return;
    }

    callback(result)
  })
}

module.exports = data;
