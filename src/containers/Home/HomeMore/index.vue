<template>
  <div>
    <scroller
      :on-refresh="refresh"
      ref="my_scroller"
      refresh-layer-color="rgb(34, 211, 114)"
      
    >
      <SubPageHeader tag="更多"/>
      <router-link
        :to="{name:'DetailsPage',
        params:{
          Mimg:element.img,
          Mtitle:element.title,
          Mpeople:element.good,
          Mmoney:element.money,
          Mhotel:element.hotel,
          Mtravel:element.travel,
          Mplay:element.play,
          Madd:element.add,
          Mcontext:element.context,
          }}"
        v-for="(element,index) in homeMore"
        :key="index"
      >
        <div class="more">
          <img class="banner" :src="element.img" alt>
          <p class="title">{{ element.title }}</p>
          <p class="context">{{ element.context }}</p>
          <p class="hot">
            <i>{{ element.good }}人说好</i>
          </p>
        </div>
      </router-link>
    </scroller>
  </div>
</template>

<script>
import SubPageHeader from "@/components/Home/SubPageHeader/index";
export default {
  name: "HomeMore",
  data() {
    return {
      homeMore: [],
      tag: ""
    };
  },
  components: {
    SubPageHeader
  },
  props: {
    params: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/homeMore")
      .then(res => {
        this.homeMore = res.data;
        this.tag = res.data;
        console.log();
      })
      .catch(error => new Error(error));
  },
  methods: {
    refresh: function() {
      //下拉刷新
      console.log("refresh");
      this.timeout = setTimeout(() => {
        this.$refs.my_scroller.finishPullToRefresh();
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.more {
  width: 100%;
  height: 3.13rem;
  //   height: 190px;
  background: #fff;
  padding: 3% 2% 0;
  margin-bottom: 2%;
  clear: both;

  .banner {
    width: 45%;
     height: 90%;
    border-radius: 5%;
    float: left;
  }
  .title {
    width: 50%;
    float: left;
    margin-left: 2%;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .context {
    margin-top: 2%;
    float: left;
    width: 50%;
    height: 100/75rem;
    line-height: 36/75rem;
    margin-left: 2%;
    font-size: 12px;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .hot {
    width: 48%;
    height: 60/75rem;
    float: right;
    line-height: 40/75rem;
    padding-right: 6%;
    //  img {
    //    margin-top: 4%;
    //    margin-right: 2%;
    //    float: right;
    //    width: 20%;
    //  }
    i {
      margin-top: 5%;
      float: right;
      font-size: 15px;
      color: #c96f93;
    }
  }
}
</style>