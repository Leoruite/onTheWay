<template>
   <div>
      <ul v-if='textData.length>0'>
         <li v-for='(item,index) in textData' :key='index'>
            {{item.text}}
            <i class='iconfont'>&#xe63e;</i>
         </li>
      </ul>
      <div v-else>数据正在加载中...</div>
   </div>
</template>

<script>
   export default {
      name: "TextList",
      props: {
         textData:{
            type: Array,
            default: function(){
               return []
            }
         }
      },
      mounted(){
         console.log(this.textData)
      }
   }
</script>

<style scoped>
ul{
   padding:10px;
   margin-top: 30px;
}
li{
   box-sizing: border-box;
   border-bottom: 1px solid #3F9CD6;
   padding: 5px 0;
   font-size: 14px;
}
i{
   float: right;
   font-size: 12px;
   position: relative;
   top: 5px;
}
</style>