<template>
  <swiper :options="swiperOption">
      <swiper-slide class="banner" v-for="(slide, index) in banners" :key="index">
         <router-link :to="'/'+path">
            <img :src='slide' alt/>
         </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
   export default {
      name: 'Banner',
      data() {
         return{
            swiperOption: {
               autoplay: true,
               pagination: {
                  el: '.swiper-pagination',
               },
               loop: true
            }
         }
      },
      props: {
         banners:{
            type: Array,
            required: true
         },
         path: {
             type: String,
             default: ''
         }
      }
   }
</script>

<style scoped>
</style>