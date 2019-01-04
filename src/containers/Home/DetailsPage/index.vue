<template>
  <div>
    <SubPageHeader tag="详情页"/>
    <img v-if="moreData" :src="img" alt>
    <div class="head">
      <h1>{{title}}</h1>
      <p class="mach">
        ￥
        <i>{{money}}</i>
        <span class="people">/人起&nbsp; {{people}}人出游</span>
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
      <p class="max">共{{people}}人点评</p>
      <p>酒店住宿</p>
      <el-rate
        class="rate"
        v-model="hotel"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      ></el-rate>

      <p>旅行交通</p>
      <el-rate
        class="rate"
        v-model="travel"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      ></el-rate>

      <p>附加产品</p>
      <el-rate
        class="rate"
        v-model="add"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      ></el-rate>

      <p>推荐玩法</p>
      <el-rate
        class="rate"
        v-model="play"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      ></el-rate>
    </div>
    <div class="rateme" @click="jump('/detailspage')">
      给这次旅行评分:
      <el-rate class="userate" v-model="lvxing" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text></el-rate> 
    </div>

    <h2>景点介绍</h2>
    <div class="jieshao">
      {{context}}
    </div>
  </div>
</template>

<script>
import SubPageHeader from "@/components/Home/SubPageHeader/index";
export default {
  name: "DetailsPage",
  data() {
    return {
      tag: "",
      moreData: {},
      img: "",
      title: "",
      people: "",
      money: "",
      hotel: "",
      travel: "",
      play: "",
      add: "",
      lvxing: null,
      context:''
    };
  },
  mounted() {
    if (this.$route.params.Mimg) {
      this.$axios
        .get(this.HOST + "/homeMore", {
          params: {}
        })
        .then(res => {
          this.img = this.$route.params.Mimg;
          this.title = this.$route.params.Mtitle;
          this.people = this.$route.params.Mpeople;
          this.money = this.$route.params.Mmoney;
          this.hotel = this.$route.params.Mhotel;
          this.travel = this.$route.params.Mtravel;
          this.play = this.$route.params.Mplay;
          this.add = this.$route.params.Madd;
          this.context = this.$route.params.Mcontext;
          this.moreData = res.data;
          console.log(this.hotel);
        })
        .catch(error => new Error(error));
    }
  },
  components: {
    SubPageHeader
  },
  methods:{
    jump(Luyou){
      if(this.$store.state.username){
        this.$router.push(luyou)
      }else{
        this.$router.push('./login')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  width: 100%;
  height: 4rem;
  background: #fff;
  padding: 7.5/75rem;
  margin-bottom: 3%;
  box-sizing: border-box;
  h1 {
    width: 100%;
    height: 1.8rem;
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
    height: 60/75rem;
    padding: 0 2%;
    line-height: 30px;
    span:first-child,
    span:nth-child(2),
    span:nth-child(3) {
      border: 1px solid rgb(231, 110, 110);
      color: rgb(231, 110, 110);
      border-radius: 5px;
      font-size: 15px;
      padding: 2/75rem;
    }
    span {
      border: 1px solid #999;
      border-radius: 5px;
      font-size: 15px;
      padding: 2/75rem;
    }
  }
}
.review {
  width: 100%;
  height: 4rem;
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
    height: 50/75rem;
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
  height: 1.8rem;
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
  height: 900/75rem;
  background: #fff;
  padding: 2%;
  box-sizing: border-box;
  font-size: 20px;
  color: rgb(150, 148, 150);
}
h2 {
  font-weight: 100;
  height: 1rem;
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