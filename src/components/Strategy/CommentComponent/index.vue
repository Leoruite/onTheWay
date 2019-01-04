<template>
   <div>
      
      <HotList :commentItemData='commentDetailData'/>
      <ShareBox />
      <CommentList/>
         
   </div>
</template>

<script>
import CommentList from './CommentList'
import HotList from '../HotStrategy/HotList'
import ShareBox from './ShareBox'
   export default {
      name:'CommentComponent',
      props:{
         commentDetailData:{
            type:Object,
            default: function(){
               return{}
            }
         }
      },
      components:{
         HotList,
         CommentList,
         ShareBox
      }
   }
</script>

<style lang="less" scoped>
</style>