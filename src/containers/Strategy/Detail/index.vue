<template>
   <div>
      <ThreeHeader :ThreeTitle='this.$route.params.key' path='search'/>
      <DetailComponent :detailData='detailData'/>
   </div>
</template>

<script>
import DetailComponent from '../../../components/Strategy/DetailComponent'
import ThreeHeader from '../../../components/ThreeHeader'
   export default {
      name:'Detail',
      data(){
         return{
            detailData:{}
         }
      },
      mounted(){
         this.$axios.get(this.HOST+'/detail/'+this.$route.params.key)
         .then(res => {
            console.log(res.data)
            this.detailData = res.data
         })
      },
      components:{
         ThreeHeader,
         DetailComponent
      }
   }
</script>

<style scoped>

</style>