<template>
  <div class="homelist">
    <div class="box">
      <h2>
        <div class="long"></div>
        {{ title }}
        <router-link :to="'/' + path">
          <span>更多>></span>
        </router-link>
      </h2>
    </div>
    <div class="scenery">
      <div class="banner">
        <swiper :options="swiperOption">
          <swiper-slide class="homelist_slide" v-for="(element,index) in imgs1" :key="index">
              <img :src="element" alt>
              <img class="center" :src="element" alt>
              <img :src="element" alt>
          </swiper-slide>

          <swiper-slide class="homelist_slide" v-for="(element,index) in imgs2" :key="index">
              <img :src="element" alt>
              <img class="center" :src="element" alt>
              <img :src="element" alt>
          </swiper-slide>

          <swiper-slide class="homelist_slide" v-for="(element,index) in imgs3" :key="index">
              <img :src="element" alt>
              <img class="center" :src="element" alt>
              <img :src="element" alt>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Culture",
  data() {
    return {
      swiperOption: {
        loop: true
      }
    };
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    list: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    imgs1: {
      type: String,
      default: ""
    },
    imgs2: {
      type: String,
      default: ""
    },
    imgs3: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  background: #fff;
  padding: 2% 5%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  margin: 20px 0 0 0;
  h2 {
    width: 100%;
    height: 28px;
    font-size: 16px;
    font-weight: 100;
    line-height: 28px;
    clear: both;
    .long {
      width: 9px;
      height: 20px;
      display: inline-block;
      background: rgb(91, 189, 91);
      position: relative;
      top: 4px;
    }
    span {
      float: right;
    }
  }
}
.scenery {
  width: 100%;
  height: 152px;
  background: #fff;
  padding: 10px 20px 12px 20px;
  box-sizing: border-box;
  overflow: hidden;
  clear: both;
  .banner {
    width: 100%;
  }
}
.homelist_slide {
  width: 120%;
  height: 130px;
  display: flex;
  img {
    flex: 1;
    width: 30%;
    height: 100%;
  }
  .center {
    margin: 0 2%;
  }
}
</style>