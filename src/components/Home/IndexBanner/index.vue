<template>
  <div class="HomeBanner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(element,index) in banners" :key="index" >
        <router-link :to="'/'+path">
          <img :src="element" alt>
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
    banners:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>