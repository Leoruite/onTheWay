<template>
   <div>
     <SubHeader/>
      <SearchComponent :searchData='searchData'/>
   </div>
</template>

<script>
import SubHeader from '../../../components/SubHeader'
import SearchComponent from '../../../components/Strategy/SearchComponent'
   export default {
      name: 'Search',
      data(){
         return{
            searchData: {}
         }
      },
      components: {
         SubHeader,
         SearchComponent
      },
      mounted(){
         this.$axios.get(this.HOST+'/search/'+this.$route.query.value)
         .then(res => {
            console.log(res.data)
            this.searchData = res.data
         })
         .catch(error => new Error(error))
      }
   }
</script>

<style scoped>

</style>