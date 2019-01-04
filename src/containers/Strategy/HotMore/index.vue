<template>
  <div>
   <ThreeHeader ThreeTitle="更多热门" path='strategy'/> 
   <HotMoreComponent :HotMoreData='HotMoreData'/>
  </div>
</template>

<script>
import ThreeHeader from "@/components/ThreeHeader/index";
import HotMoreComponent from '@/components/Strategy/HotMoreComponent/index'
export default {
  name: "HotMore",
  data() {
    return {
      HotMoreData:[]
    };
  },
  components: {
    ThreeHeader,
    HotMoreComponent
  },
  mounted() {
      this.$axios.get(this.HOST + "/hotmore")
      .then(res => {
      //   console.log(res.data);
        this.HotMoreData = res.data
      })
      .catch(error => new Error(error));
  }
};
</script>

<style lang="less" scoped>

</style>