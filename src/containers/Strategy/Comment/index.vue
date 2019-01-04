<template>
   <div>
      <ThreeHeader ThreeTitle='评论详情' path='strategy'/>
      <div v-if='commentDetailData.id'>
         <CommentComponent :commentDetailData='commentDetailData'/>
      </div>
      <div v-else>数据正在加载</div>
   </div>
</template>

<script>
import ThreeHeader from "@/components/ThreeHeader/index"
import CommentComponent from '../../../components/Strategy/CommentComponent'
   export default {
      name:'Comment',
      data(){
        return{
            commentDetailData:{}
        }
      },
      components:{
         CommentComponent,
         ThreeHeader
      },
      mounted(){
         this.$axios.get(this.HOST+'/strategy')
        .then(res => {
           for(var i = 0; i < res.data.commentData.length; i++){
              if(this.$route.params.id == res.data.commentData[i].id){
                  this.commentDetailData = res.data.commentData[i]
               }
           }
        })
        .catch(error => new Error(error))
      }
   }
</script>

<style scoped>

</style>