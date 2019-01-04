<template>
   <div>
      <SubHeader/>
      <!-- tab部分组件 -->
      <TabComponent/>
   </div>
</template>

<script>

import SubHeader from '../../../components/SubHeader'
import TabComponent from '../../../components/Strategy/TabComponent'
   export default {
      name: 'TypeTab',
      components:{
         SubHeader,
         TabComponent
      },
      data(){
         return{

         }
      }
   }
</script>

<style scoped>

</style>