<template>
   <div>
      <ThreeHeader ThreeTitle="热门详情" path='hotmore'/> 
      <HotDetailComponent :HotDetailData='HotDetailData'/>
   </div>
</template>

<script>
import ThreeHeader from "@/components/ThreeHeader/index";
import HotDetailComponent from '../../../components/Strategy/HotDetailComponent/index'
   export default {
      name:'HotDetail',
      data(){
         return{
            HotDetailData:{}
         }
      },
      components:{
         ThreeHeader,
         HotDetailComponent
      },
      mounted(){
         this.$axios.get(this.HOST + "/hotmore")
         .then(res => {
            for(var i = 0; i < res.data.length; i++){
               if(this.$route.params.id == res.data[i].id){
                  this.HotDetailData = res.data[i]
               }
            }
             console.log( this.HotDetailData)
         
        
         })
         .catch(error => new Error(error))
         }
   }
</script>

<style scoped>

</style>