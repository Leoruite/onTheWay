<template>
  <div>
    <div v-if='HotDetailData.id'>
         <img :src="HotDetailData.img" alt>
         <div class="head">
            <h1>{{HotDetailData.title}}</h1>
            <p class="mach">
            ￥
            <i>{{HotDetailData.money}}</i>
            <span class="people">/人起&nbsp; {{HotDetailData.people}}人出游</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价格说明</span>
            </p>
            <p class="tag">
            <span>特卖</span>
            <span>攻略</span>
            <span>完善服务</span>
            <span>酒店特卖</span>
            <span>亲子游</span>
            <span>预售</span>
            </p>
         </div>
         <h2>各项评分:</h2>
         <div class="review">
            <p class="max">共{{HotDetailData.people}}人点评</p>
            <p>酒店住宿</p>
            <el-rate
            class="rate"
            v-model="HotDetailData.hotel"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            ></el-rate>

            <p>旅行交通</p>
            <el-rate
            class="rate"
            v-model="HotDetailData.travel"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            ></el-rate>

            <p>附加产品</p>
            <el-rate
            class="rate"
            v-model="HotDetailData.add"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            ></el-rate>

            <p>推荐玩法</p>
            <el-rate
            class="rate"
            v-model="HotDetailData.play"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            ></el-rate>
         </div>
         <div class="rateme">
            给这次旅行评分:
            <el-rate class="userate" v-model="lvxing" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text></el-rate> 
         </div>

         <h2>景点介绍</h2>
         <div class="jieshao">
            {{HotDetailData.context}}
         </div>
         </div>
      <div v-else>数据正在加载...</div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
  name: "HotDetailComponent",
  data() {
    return {
      lvxing:null
    }
  },
  props:{
     HotDetailData:{
        type:Object,
        default:function(){
           return {}
        }
     }
  }
 
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 150px;
  background: #fff;
  padding: 2%;
  margin-bottom: 3%;
  box-sizing: border-box;
  h1 {
    width: 100%;
    height: 60px;
    font-size: 20px;
    font-weight: 100;
  }
  .mach {
    color: orangered;
    font-size: 12px;
    margin: 2% 0;
    i {
      font-size: 25px;
    }
    span {
      color: cornflowerblue;
    }
    .people {
      color: rgb(121, 121, 121);
    }
  }
  .tag {
    width: 100%;
    height: 30px;
    padding: 0 2%;
    line-height: 30px;
    span:first-child,
    span:nth-child(2),
    span:nth-child(3) {
      border: 1px solid rgb(231, 110, 110);
      color: rgb(231, 110, 110);
      border-radius: 5px;
      font-size: 15px;
      padding: 2px;
    }
    span {
      border: 1px solid #999;
      border-radius: 5px;
      font-size: 15px;
      padding: 2px;
    }
  }
}
.review {
  width: 100%;
  height: 160px;
  background: #fff;
  padding: 1% 2% 0 2%;
  box-sizing: border-box;
  .max {
    width: 100%;
    font-size: 14px;
    color: rgb(22, 184, 122);
  }
  p {
    width: 60%;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    color: rgb(132, 136, 135);
    float: left;
  }
  .rate {
    float: left;
    padding-top: 1.5%;
  }
}
.rateme {
  width: 100%;
  height: 60px;
  background: #fff;
  padding: 2%;
  border-top: 5px solid;
  border-image: -webkit-linear-gradient(rgb(152, 234, 241), rgb(236, 94, 141))
    60 60;
  color: rgb(53, 212, 173);
  font-size: 14px;
  margin-bottom: 2%;
  box-sizing: border-box;
  .userate {
    margin-top: 1%;
  }
}
.jieshao{
  width: 100%;
  height: 400px;
  background: #fff;
  padding: 2%;
  box-sizing: border-box;
  font-size: 20px;
  color: rgb(150, 148, 150);
}
h2 {
  font-weight: 100;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: rgb(73, 175, 128);
  background: #fff;
  border-bottom: 5px solid;
  border-image: -webkit-linear-gradient(rgb(100, 172, 253), rgb(167, 233, 184))
    20 20;
  padding: 0 2%;
}
</style>