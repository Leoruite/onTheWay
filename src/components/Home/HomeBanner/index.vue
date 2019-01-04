<template>
  <div class="HomeBanner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(element,index) in  bannerImg" :key="index" class="homeslide">
        <router-link 
          :to="{name:'HomeDetail',
          params:{
            Dimg:element.img
          }
        }">
          <img :src="element.img" alt>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    bannerImg:{
      type: Array,
      default: []
    },
    guideArr:{
      type:String,
      default:""
    }
  }
};
</script>

<style lang="less" scoped>
.HomeBanner {
  width: 100%;
  height: 280/75rem;
  padding: 20/75rem;
  box-sizing: border-box;
  .homeslide {
    height: 280/75rem;
    img {
      width: 100%;
      height: 280/75rem;
    }
  }
}
</style>