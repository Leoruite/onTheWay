<template>
  <div class="subheader">
      <img @click="$router.back(-1)"
        src="http://thyrsi.com/t6/643/1545907311x2728278632.png"
        alt
      >
    <span>{{ tag }}</span>
  </div>
</template>

<script>
export default {
  name: "SubPageHeader",
  data() {
    return {};
  },
  props:{
    tag:{
      type:String,
      default:""
    }
  }
};
</script>

<style lang="less" scoped>
.subheader {
  width: 100%;
  height: 86.8px;
  padding: 10px;
  background: #69B78E;
  line-height: 86.8px;
  text-align: center;
  font-size: 25px;
  box-sizing: border-box;
  img{
    transform: rotate(180deg);
    width: 30px;
    float: left;
    margin-top: 9%;
  }
  span {
    margin-top: 8px;
    display: inline-block;
  }
}
</style>