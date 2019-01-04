<template>
   <div> 
     <ul>
        <li v-for='(item,index) in nameData' :key='index'>
           <router-link :to="'/detail/'+item.name">
            {{item.name}}
           </router-link>
         </li>
     </ul>
   </div>
</template>

<script>
   export default {
      name: 'NameList',
      props:{
         nameData:{
            type: Array,
            default: function(){
               return []
            }
         }
      }
   }
</script>

<style scoped>
li{
   float: left;
   padding: 3px 10px;
   border: 1px solid #3F9CD6;
   border-radius: 20px;
   font-size: 14px;
   margin: 10px 15px;
}
</style>