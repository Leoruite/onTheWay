<template>
  <div>
    <div class="command">
      <p class="pinglun">评论: 190</p>
      <p class="zhuanfa">转发: 270</p>
      <p class="zan">赞: 300</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailCommand",
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
.command{
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  padding: 0 2%;
  margin: 3% 0 0 0;
  background: #fff;
  line-height: 35px;
  p{
    display: inline-block;
    font-size: 13px;
  }
  .zan{
    float: right;
  }
  .pinglun{
    margin-right: 8%;
  }
}
</style>