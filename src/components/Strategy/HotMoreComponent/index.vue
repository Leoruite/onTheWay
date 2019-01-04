<template>
   <div>
      <div v-if='HotMoreData.length>0'>
         <ul>
            <li v-for='(item,index) in HotMoreData' :key='index' class="more">
               <router-link :to="'/hotdetail/'+item.id">
                  <img class="banner" :src="item.img" alt>
                  <p class="title">{{ item.title }}</p>
                  <p class='context'>{{ item.context }}</p>
                  <p class="hot">
                  <i>{{ item.good }}人说好</i>
                  </p>
               </router-link>
            </li>
         </ul>
      </div>
      <div v-else>数据正在加载</div>
   </div>
</template>

<script>

   export default {
      name: 'HotMoreComponent',
      props:{
         HotMoreData:{
            type: Array,
            default: function(){
               return[]
            }
         }
      },
      mounted(){
         console.log(this.HotMoreData)
      }
   }
</script>

<style lang="less" scoped>
.more {
  width: 100%;
//   height: 190px;
  background: #fff;
  padding: 3% 2% 0;
  margin-bottom: 2%;
  clear: both;
  .banner {
    width: 45%;
   //  height: 100%;
    border-radius: 5%;
    float: left;
  }
  .title {
    width: 50%;
    float: left;
    margin-left: 2%;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .context {
    margin-top: 2%;
    float: left;
    width: 50%;
    height: 80px;
    margin-left: 2%;
    font-size: 12px;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  .hot {
    width: 48%;
    height: 40px;
    float: right;
    line-height: 40px;
    padding-right: 6%;
   //  img {
   //    margin-top: 4%;
   //    margin-right: 2%;
   //    float: right;
   //    width: 20%;
   //  }
    i {
      margin-top: -4%;
      float: right;
      font-size: 15px;
      color: #c96f93;
    }
  }
}
</style>
