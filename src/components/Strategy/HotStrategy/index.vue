<template>
   <div class="HotBox">
      <ListTitle title='热门攻略' more='更多>>' path='hotmore'/>
         <div v-if='commentData.length>0'>
            <ul v-for='(item,index) in commentData' :key='index'>
               <li>
                     <HotList :commentItemData='item'/>
               </li>
            </ul>
         </div>
         <div v-else>数据正在加载...</div>
   </div>
</template>

<script>
import ListTitle from '../../ListBanner/ListTitle'
import HotList from './HotList/index'
   export default {
      name: 'HotStrategy',
      props:{
         commentData:{
            type:Array,
            default:function(){
               return []
            }
         }
      },
      components: {
         ListTitle,
         HotList
      },
      // methods:{
      //    panduan(event){
      //       console.log(event.target)
      //    }
      // }
   }
</script>

<style lang="less" scoped>
.HotBox{
   margin-top: 20/75rem;
   margin-bottom: 150/75rem;
}
</style>
