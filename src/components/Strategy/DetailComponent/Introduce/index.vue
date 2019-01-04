<template>
   <div>
      <ListTitle title='景点介绍'/>
      <div class="introduce_text">
        <p>{{detailData.introduce}}</p>
        <ul>
            <li v-for='(item,index) in detailData.spotPic' :key='index'>
               <img :src="item" alt="">
            </li>
        </ul>
      </div> 
   </div>
</template>

<script>
import ListTitle from '../../../ListBanner/ListTitle'
   export default {
      name:'Introduce',
      props:{
         detailData:{
            type:Object,
            default: function(){
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
.introduce_text{
   background-color: #fff;
   font-size: 14px;
   padding: 5px 10px 10px;
}
li{
   width: 49%;
   float:left; 
}
li:first-child{
   margin-right:2%;
}
img{
   width: 100%;
}
</style>