<template>
   <div>
      <Tab :labels='labels'>
         <div slot='List1'>
            <TabList :listData='cityData' stateName='亚洲' />
         </div>
         <div slot='List2'>
            <TabList :listData='typeData'/>
         </div>
         <div slot='List3'>
            <TabList :listData='seasonData'/>
         </div>
      </Tab>
   </div>
</template>

<script>
import Tab from '../../Tab'
import TabList from './TabList'
   export default {
      name: 'TabComponent',
      components:{
         Tab,
         TabList
      },
      data(){
         return{
            labels:['城市','分类','季节'],
            cityData:[],
            typeData:[],
            seasonData:[]

         }
      },
      mounted() {
         this.$axios.get(this.HOST+'/type')
         .then(res => {
           this.cityData = res.data.cityData
           this.typeData = res.data.typeData
           this.seasonData = res.data.seasonData
           console.log(res.data)
         })
         .catch(error => new Error(error))
      }
   }
</script>

<style scoped>

</style>