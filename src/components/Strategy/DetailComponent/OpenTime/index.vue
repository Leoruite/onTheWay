<template>
   <div>
      <ListTitle title='开放时间'/>
      <div class='openTime'>
         <p v-if='detailData.openTime'>
            <span>旺季:</span>{{detailData.openTime.hotTime}}
         </p>
         <p v-if='detailData.openTime'>
             <span>淡季:</span>{{detailData.openTime.coldTime}}
         </p>
         <img :src="detailData.openTimePic" alt="">
      </div>
   </div>
</template>

<script>
import ListTitle from '../../../ListBanner/ListTitle'
   export default {
      name: 'OpenTime',
      props: {
         detailData:{
            type: Object,
            default:function(){
               return {}
            }
         }
      },
      components:{
         ListTitle
      }
   }
</script>

<style scoped>
.openTime{
   background-color: #fff;
   padding: 5px 10px;
}
</style>