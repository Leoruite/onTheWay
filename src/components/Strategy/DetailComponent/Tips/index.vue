<template>
   <div class="tips">
      <p><span>小贴士：</span>{{detailData.Tips}}</p>
   </div>
</template>

<script>
   export default {
      name:'Tips',
      props:{
         detailData:{
            type:Object,
            default:function(){
               return {}
            }
         }
      }
   }
</script>

<style lang="less" scoped>
.tips{
   margin-top: 10px;
   background-color: #fff;
   font-size: 14px;
   margin-bottom:10px;
   overflow: hidden;
   padding: 5px 10px;
   span{
      color:#7CD39C;
      float: left;
   }
   p{
      float: right;
   }
}
</style>
