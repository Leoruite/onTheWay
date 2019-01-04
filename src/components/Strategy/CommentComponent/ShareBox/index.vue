<template>
   <div class='shareBox'>
      <span class='share'><i class="iconfont">&#xe61a;</i>转发</span>
      <span class='comment'><i class="iconfont comment_icon">&#xe6bb;</i>2345</span>
      <span class='zan'><i class="iconfont zan_icon">&#xe612;</i>342343</span>
   </div>
</template>

<script>
   export default {
      name: 'ShareBox'
   }
</script>

<style lang="less" scoped>
.shareBox{
   background-color: #fff;
   display: flex;
   padding: 20/75rem 0;
   span{
      flex:1;
      text-align: center;
      i{
         font-size: 18px;
         color: #7dd19c;
         position: relative;
         top: 2px;
         margin-right: 2px;
      }
      .zan_icon{
         font-size: 20px;
      }
      .comment_icon{
         margin-right: 4px;
      }
   }
   .zan{
       position: relative;
       top: -2px;
   }
   
}
</style>
