<template>
   <div class='detailHelp'>
      <img :src="detailData.pic" alt="">
      <div class="helpBox">
         <p class="score">{{detailData.score}}</p>
         <span>{{detailData.commentCount}}条评价</span>
         <p>乘车线路：{{detailData.line}}</p>
         <ul>
            <li>景点类型：</li>
            <li v-for="(item,index) in detailData.spotType" :key='index'>{{item}}</li>
         </ul>
         <p>最佳季节：{{detailData.goodSeason}}</p>
         <p>建议游玩：{{detailData.suggest}}</p>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'DeatilHelp',
      props:{
         detailData:{
            type:Object,
            default: function(){
               return{}
            }
         }
      }
   }
</script>

<style lang="less" scoped>
.detailHelp{
   background-color: #fff;
   overflow: hidden;
   padding:15px 10px 10px 10px;
   height: 100%;
   img{
      width: 62%;
      float:left;
      height: 132px;
   }
   .helpBox{
      width: 36%;
      float:right;
      font-size: 12px;
      li{
        float:left; 
      }
      .score{
         text-align: center;
      }
      span{
         display: inline-block;
         background-color: #5CAEE0;
         padding: 1px 5px;
         border-radius: 8px;
      }
   }
}
</style>
