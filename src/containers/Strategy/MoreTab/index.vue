<template>
   <div>
      <SubHeader/>
      <!-- tab部分组件 -->
      <MoreComponent/>
   </div>
</template>

<script>

import SubHeader from '../../../components/SubHeader'
import MoreComponent from '../../../components/Strategy/MoreComponent'
   export default {
      name: 'TypeTab',
      components:{
         SubHeader,
         MoreComponent
      },
      data(){
         return{

         }
      }
   }
</script>

<style scoped>

</style>