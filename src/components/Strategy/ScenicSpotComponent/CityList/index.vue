<template>
   <div>
      <ul class='cityList_box'>
         <span>{{cityName}}</span>
         <li v-for='(item,index) in ScenicSpotData' :key='index'>{{item.name}}</li>
         <i class="iconfont">&#xe504;</i>
      </ul>
   </div>
</template>

<script>
   export default {
      name: 'CityList',
      data(){
         return{
            
         }
      },
      props:{
         ScenicSpotData:{
            type: Array,
            required: true
         },
         cityName: {
            type: String,
            default: ''
         }
      }
   }
</script>

<style lang="less" scoped>
.cityList_box{
   width: 100%;
   background-color: #fff;
   padding: 29/75rem 20/75rem;
   overflow: hidden;
   box-sizing: border-box;
   height: 84/75rem;
   span{
      font-size: 28/75rem;
      color:#7dd19c;
      float:left;
      font-weight: 700;
      font-family: '苹方';

   }
   li{
      float:left;
      text-align: center;
      font-size: 28/75rem;
      margin-left: 42/75rem;

   }
   i{
      font-size: 20px;
      color:#63B4D6;
      float: right;
      
   }
}
</style>
