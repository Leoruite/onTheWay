<template>
   <div>
      <Tab :labels='labels'>
         <div slot='List1'>
           <MoreList :moreData='cityHotData'/>
         </div>
         <div slot='List2'>
            <MoreList :moreData='personHeightData'/>
         </div>
         <div slot='List3'>
            <MoreList :moreData='distanceNearData'/>
         </div>
      </Tab>
   </div>
</template>

<script>
import Tab from '../../Tab'
import MoreList from './MoreList'
   export default {
      name: 'MoreComponent',
      data() {
         return{
            labels: ['城市最火','人气最高','距离最近'],
            cityHotData: [],
            personHeightData: [],
            distanceNearData: []
         }
      },
      components: {
         Tab,
         MoreList
      },
      mounted() {
         this.$axios.get(this.HOST+'/more')
         .then(res => {
           this.cityHotData = res.data.cityHot
           this.personHeightData = res.data.personHeight
           this.distanceNearData = res.data.distanceNear
           console.log(res.data)
         })
         .catch(error => new Error(error))
      }
   }
</script>

<style scoped>

</style>