<template>
   <div class='city'>
      <p>{{stateName}}</p>
      <ul class='cityBox'>
         <li v-for='(item,index) in listData' :key='index'>
            <router-link :to="'/scenicspot/'+item.cityName">
               <img :src="item.pic" alt="">
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      name: 'TabList',
      props: {
         listData: {
            type:Array,
            required: true
         },
         stateName: {
            type: String,
            default: ''
         }
      }
   }
</script>

<style lang="less" scoped>
.city{
   padding: 0 25/75rem;
   p{
      font-size: 20px;
      color: #000;
      text-align: center;
      margin-bottom: 20/75rem;
      font-family: '苹方';
      opacity: .8;
      font-weight: 700;
   }
   li{
      float: left;
      width: 340/75rem;
      margin-bottom: 20/75rem;
      img{
        width: 100%; 
      }
   }
   li:nth-child(2n){
      margin-left: 20/75rem;
   }
  
}
</style>
