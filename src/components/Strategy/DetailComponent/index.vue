<template>
   <div>
      <DetailHelp :detailData='detailData'/>
      <Tips :detailData='detailData'/>
      <Introduce :detailData='detailData'/>
      <OpenTime :detailData='detailData'/>
   </div>
</template>

<script>
import DetailHelp from './DetailHelp'
import Tips from './Tips'
import Introduce from './Introduce'
import OpenTime from './OpenTime'
   export default {
      name: 'DetailComponent',
      components:{
         DetailHelp,
         Introduce,
         Tips,
         OpenTime
      },
      props:{
         detailData:{
            type: Object,
            default: function(){
               return {}
            }
         }
      }
   }
</script>

<style scoped>

</style>