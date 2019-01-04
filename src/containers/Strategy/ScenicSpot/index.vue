<template>
<!-- 景区页面 -->
   <div>
      <ThreeHeader ThreeTitle='景区' path='typetab'/>
      <ScenicSpotComponent :ScenicSpotData='ScenicSpotData' :cityName='this.$route.params.cityName'/>
      景区页面:{{this.$route.params.cityName}}
   </div>
</template>

<script>

   import ThreeHeader from '../../../components/ThreeHeader'
   import ScenicSpotComponent from '../../../components/Strategy/ScenicSpotComponent'
   export default {
      name: 'ScenicSpot',
      data(){
         return{
            ScenicSpotData:[]
         }
      },
      mounted(){
         this.$axios.get(this.HOST+'/scenicspot/'+this.$route.params.cityName)
         .then(res => {
            this.ScenicSpotData = res.data 
         })
         .catch(error => new Error)
      },
      components:{
         ThreeHeader,
         ScenicSpotComponent
      }
   }
</script>

<style scoped>

</style>