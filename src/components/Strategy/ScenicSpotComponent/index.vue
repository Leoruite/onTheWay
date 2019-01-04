<template>

<!-- 该组件为景区的整体组件,其中包括CityList和VideoList两部分 -->
   <div >
      <div v-if='ScenicSpotData.length > 0'>
         <CityList :ScenicSpotData="ScenicSpotData" :cityName='cityName'/>
         <VideoList :ScenicSpotData="ScenicSpotData"/>
      </div>
      <div v-else>数据正在加载...</div>
   </div>
</template>

<script>
import CityList from './CityList'
import VideoList from './VideoList'
   export default {
      name: 'ScenicSpotComponent',
      components: {
         CityList,
         VideoList
      },
      data(){
         return{
            // CityList: []
         }
      },
      props:{
         ScenicSpotData:{
            type: Array,
            required: true
         },
         cityName:{
            type: String,
            defalut: ''
         }
      },
      
   }
</script>

<style scoped>

</style>