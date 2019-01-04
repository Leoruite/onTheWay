<template>
   <div class='ThreeHeader'>
      <router-link :to='"/"+path'>
         <img class='back' src="../../assets/iconfont-img/return.png" alt="">
      </router-link>
      <p class="title">{{ThreeTitle}}</p>
   </div>
</template>

<script>
   export default {
      name: 'ThreeHeader',
      props:{
         ThreeTitle:{
            type: String,
            default: ''
         },
         path:{
            type:String,
            default:''
         }
      }
   }
</script>

<style lang="less" scoped>
.ThreeHeader{
   width: 100%;
   background-color:#7CD39C;
    padding-left: 24/75rem ; 
   padding-right: 38/75rem;
   padding-top: 30/75rem;
   padding-bottom: 19/75rem;
   .back{
      float:left;
      width: 22/75rem;
      margin-top: 15/75rem;
      margin-right: 50/75rem;
   }
   p{
      text-align: center;
      width: 100px;
      font-size: 36/75rem;
      position: relative;
      left:200/75rem;
      box-sizing: border-box;
      font-family: '苹方';
      margin-bottom: 10/75rem;
   }
}

</style>
