<template>
   <div class='searchinput'>
      <input type='text' placeholder="搜索" @keyup.enter='onEnter' ref='searchInput'/>
      <i class="iconfont search">&#xe659;</i>
      <i class="iconfont close">&#xe63e;</i>
   </div>
</template>

<script>
   export default {
      methods:{
         onEnter(){
            console.log(this.$refs.searchInput.value)
            this.$router.push({
               path: '/search',
               query:{
                  value: this.$refs.searchInput.value
               }
            })
           
         }
      }
   }
</script>

<style lang="less" scoped>


.searchinput{
   float: left;
   width: 485/75rem;
   position: relative;
   margin-left:34/75rem;
   input{
      width: 100%;
      height: 66/75rem;
      background-color: rgba(255,255,255,.4);
      border-radius: 30/75rem;
      padding-left: 65/75rem;
      box-sizing: border-box;
     
   }
   input::-webkit-input-placeholder { 
   color: white;
   font-size: 16px;
   // margin-top: 22/75rem;
   position: relative;
   top: 3/75rem;
   }
   .search,.close{
      position: absolute;
      top: 16/75rem;
      color:#fff;
   }
   .search{
      left: 20/75rem;
      font-size: 15px;
   }
   .close{
      right: 20/75rem;

   }
}
</style>
