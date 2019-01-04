<template>
   <div>
      <div class="box">
         <h2>
            <div class="long"></div>{{ title }}
            <router-link :to="'/' + path">
               <span>{{more}}</span>
            </router-link>
         </h2>
      </div>
      <hr/>
   </div>
</template>

<script>
   export default {
      name: 'ListTitle',
      props:{
         title:{
            type: String,
            defalut: ''
         },
         path:{
            type: String,
            defalut: ''
         },
         more:{
            type: String,
            default: ''
         }
      }
   }
</script>

<style lang="less" scoped>
.box {
   width: 100%;
   background: #fff;
   padding: 10/75rem 26/75rem 10/75rem 20/75rem;
   box-sizing: border-box;
   margin-top:10/75rem;
//   border-bottom: 1px solid #ccc;
  h2 {
    width: 100%;
    font-size: 16px;
    font-weight: 100;
    .long {
      width: 16/75rem;
      height: 38/75rem;
      display: inline-block;
      background: rgb(91, 189, 91);
      margin-right: 10/75rem;
      position: relative;
      top: 5/75rem;
    }
    span{
       float: right;
       margin-top: 8/75rem;
    }

  }
}
hr{
   border-color: #fff;
}
</style>
