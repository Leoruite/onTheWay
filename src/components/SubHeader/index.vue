<template>
   <div class='subHeader'>
      <router-link to='/strategy'>
         <img class='back' src="../../assets/iconfont-img/return.png" alt="">
      </router-link>
      <SearchInput />
   </div>
</template>

<script>
   import SearchInput from '../SearchInput'
   export default {
      name:'SubHeader',
      components:{
         SearchInput
      }
   }
</script>

<style lang="less" scoped>
.subHeader{
   width: 100%;
   background-color:#7CD39C;
   padding-left: 24/75rem ; 
   padding-right: 38/75rem;
   padding-top: 30/75rem;
   padding-bottom: 19/75rem;
   overflow: hidden;
   .back{
      float:left;
      width: 22/75rem;
      margin-top: 15/75rem;
      margin-right: 50/75rem;
   }
}
</style>
