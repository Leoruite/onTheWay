<template>
   <div>
      <ul>
         <li v-for='(item,index) in ScenicSpotData[0].videoList' :key='index'>
            <video :src='item.video' controls :poster='item.pic'></video>
            <p class='name'>{{item.name}}</p>
            <p><i class="iconfont">&#xe50a;</i>{{item.address}}</p>
         </li>
      </ul>
   </div>
</template>

<script>
   export default {
      name: 'VideoList',
      props:{
         ScenicSpotData: {
            type: Array,
            required: true
         }
      }
   }
</script>

<style lang="less" scoped>
ul{
   margin-top: 20/75rem;
   li{
      padding: 20/75rem 20/75rem 14/75rem; 
      width: 100%;
      margin-bottom: 20/75rem;
      background-color: #fff;
      box-sizing: border-box;
      video{
      width: 100%;
      height: 100%;
      object-fit: fill;
      margin-bottom: 20/75rem;
      }
      p{
         color: #333;
         font-size: 26/75rem;
         i{
            font-size: 12px;
         }
      }
      .name{
         font-size: 18/75rem;
      }
   }

}
</style>
