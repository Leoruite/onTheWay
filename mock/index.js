var express = require('express');
var app = express();
var router = require('./router.js')
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
	extended: true
}));
// var StrategyData = require('./Strategy/index.js')



app.use('/api',router);
// app.get('/strategy',(req,res) => {
//    res.send(StrategyData)
// })

app.listen(3001,function(){
    console.log("服务器运行在3001端口上")
})
