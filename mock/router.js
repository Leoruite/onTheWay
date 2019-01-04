var express = require('express');
var router = express.Router();

var StrategyData = require('./Strategy/index.js')
var TypeData = require('./Strategy/TypeData/index.js')
var MoreData = require('./Strategy/MoreData/index.js')
var JapanData = require('./Strategy/ScenicSpot/Japan.js')
var SearchData = require('./Strategy/SearchData/index.js')
var DetalData = require('./Strategy/DetailData/index.js')
var HotMoreData = require('./Strategy/HotMoreData/index.js')
var CommentData =require('./Strategy/CommentData/index.js')
// console.log(JapanData)
var url = require('url')

//获取攻略页面的数据
router.get('/Strategy',(req,res) => {
   res.send(StrategyData)
})

//获取type页面的数据
router.get('/type',(req,res) => {
   res.send(TypeData)
})

//获取更多页面的数据
router.get('/more',(req,res) => {
   res.send(MoreData)
})

//获取景区数据
router.get('/scenicspot/:cityName',(req,res) => {
   console.log({
      "cityName:":req.param('cityName')}
      )
   res.send(JapanData)
})

//获取搜索页面的数据
router.get('/search/:value',(req,res) => {
   console.log({
      'value':req.param('value')
   })
   res.send(SearchData)
})

//获取详情页面的数据
router.get('/detail/:key',(req,res) => {
   console.log({
      'key':req.param('key')
   })
   res.send(DetalData)
})

//获取热门推荐的更多页面数据
router.get('/hotmore',(req,res) => {
   res.send(HotMoreData)
})


//获取评论的数据
router.get('/comment',(req,res) => {
   res.send(CommentData)
})


//----------------------- Home页面---------------------------------


var HomeBanner = require("./Home/HomeBanner.js");
var HomeList = require("./Home/HomeList.js");
var HomeMore = require("./Home/HomeMore.js");
var DetailChat = require("./Home/Detail/DetailChat.js");
var DetailHot = require("./Home/Detail/DetailHot.js");

router.get("/homeBanner",function(req,res){
  res.send(HomeBanner)
})

router.get("/homeList",function(req,res){
  res.send(HomeList)
})

router.get("/homeMore",function(req,res){
  res.send(HomeMore)
})

router.get("/detailChat",function(req,res){
  res.send(DetailChat)
})

router.get("/detailHot",function(req,res){
  res.send(DetailHot)
})



//----------------------- Mine页面---------------------------------

var data = require("./sqlconn.js");
var PersonalData = require("./Mine/PersonalData/index.js")


// router.all("/login",function(req, res, next){
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// })

router.get('/',function(req,res){
    res.json({
      name:'dd'
    })
})


// 登录
router.post("/login",function(req,res){

  var username = req.body.params.username;
  var password = req.body.params.password;
 console.log({
   username: username,
   password: password
 })

  // var sql = "select * from user";
  var sql = "SELECT * FROM xsxx WHERE `username`=? AND `password`=?";
  var params = [username,password]
  data(sql,params,function(result){
    if(result.length > 0){
      res.send({
        msg: '登录成功',
        flag: true,
        resdata:result
      })
      
    }else{
      res.send({
        msg:"用户名密码不存在",
        code:"4004",
        flag: false
      })
    }
  })
})

// 注册
router.post("/register",function(req,res){

  var username = req.body.params.username;
  var password = req.body.params.password;
 console.log({
   username: username,
   password: password
 })

  // var sql = "select * from user";
  var sql = "INSERT INTO xsxx (username,password) values(?,?)";
  var params = [username,password]
  data(sql,params,function(result){
    if(result.affectedRows){
      res.send({
        msg:"注册成功",
        flag: true
      })
    }else{
      res.send({
        msg:'注册失败',
        flag: false
      })
    }
  })
})

// 个人主页数据
router.get("/personalData",function(req,res){
  res.send(PersonalData)
})



//-----------------------------------Found页面------------------------------

var Dating = require("./Dating/index")
router.get("/dating",function(req,res){
    res.send(Dating)
})



module.exports = router;
