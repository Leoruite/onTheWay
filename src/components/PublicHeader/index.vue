<template>
   <div class="Com_header">
      <div class='header_con'>
         <img :src='logoSrc'/>
         <searchInput/>

         <router-link to='/typetab'>
         <span>{{type}}</span>
         </router-link>
         
      </div>
   </div>
</template>

<script>
import SearchInput from '../SearchInput'
   export default {
      name: 'CommentHeader',
      data() {
         return{
            logoSrc: require('../../assets/iconfont-img/logo_GL.png')
         }
      },
      components: {
         SearchInput
      },
      props:{
         type:{
            type: String,
            default: ''
         }
      }

   }
</script>

 <style lang="less" scoped>
.Com_header{
   width: 100%;
   background-color:#7CD39C;
   overflow: hidden;
   padding-left: 24/75rem ; 
   padding-right: 38/75rem;
   padding-top: 30/75rem;
   padding-bottom: 14/75rem;
   box-sizing: border-box;
   position: relative;
   .header_con{
      img{
         width: 72/75rem;
         float: left;
      }
      span{
         font-size: 16px;
         float: right;
         margin-top: 10/75rem;
      }
   }
   
}
</style>