<template>
  <div class="homelist">
    <ListTitle :title='title' :path='path' more='更多>>'/>
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(banner,index) in banners" :key="index">
          <img :src="banner[0].pic" alt>
          <img class="center" :src="banner[1].pic" alt>
          <img class='last' :src="banner[2].pic" alt>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script>
import ListTitle from './ListTitle'

export default {
  name: "ListBanner",
  data() {
    return {
       swiperOption: {
        loop: true,
      }
    }
  },
  props:{
       title: {
         type:String,
         default: ''
       },
       path: {
         type:String,
         default: ''
       },
       banners: {
         type: Array,
         required: true
       }

      },
  components: {
    ListTitle
  }
};
</script>

<style lang="less" scoped>

.banner{
  background-color: #fff;
  padding: 10/75rem 20/75rem 15/75rem;
  img{
    width: 300/75rem;
    float:left;
    height: 230/75rem;
  }
  .center{
    margin: 0 10/75rem;
  }
  .last{
    width: 88/75rem;
    
  }
}


</style>