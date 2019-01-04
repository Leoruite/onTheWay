<template>
   <div>
      <NameList :nameData='searchData.nameList'/>
      <TextList :textData='searchData.textList'/>
   </div>
</template>

<script>
import TextList from './TextList'
import NameList from './NameList'
   export default {
      name: 'SearchComponent',
      components: {
         NameList,
         TextList
      },
      props:{
         searchData:{
            type: Object,
            required: true
         }
      }
   }
</script>

<style scoped>

</style>