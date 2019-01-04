<template>
   <div class='more'>
      <ul>
         <li v-for='(item,index) in moreData' :key='index'>
           <img :src="item.pic" alt="">
           <p>
               <i class='iconfont'>&#xe606;</i>
               <span>{{item.cityName}}</span>
           </p>
          
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      name: 'MoreList',
      data() {
        return{
          
        }
      },
      props: {
         moreData: {
            type: Array,
            required: true
         }
      }
   }
</script>

<style lang="less">
.more{
   li{
      margin-bottom: 20/75rem;
      background-color: #fff;
      padding: 20/75rem;
      i{
         font-size: 25px;
         color: #7DD19D;
      }
      span{
         font-size: 12px;
      }
   }
   
}
</style>
