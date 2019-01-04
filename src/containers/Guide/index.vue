<template>
   <!-- 引导页 -->
   <div>
      <Banner :banners='guideArr' path="home" />
   </div>
</template>

<script>
import Banner from '../../components/Banner'
   export default {
      name: 'Guide',
      data() {
         return{
            // 引导页轮播图片
            guideArr: [
            require('../../assets/imgs/boot page01.png'),
            require('../../assets/imgs/boot page02.png'),
            require('../../assets/imgs/boot page03.png'),
            ]
         }
      },
      components:{
         Banner
      }
   }
</script>

<style scoped>

</style>