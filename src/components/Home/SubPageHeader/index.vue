<template>
  <div class="subheader">
    <img @click="$router.back(-1)" src="http://thyrsi.com/t6/643/1545907311x2728278632.png" alt>
    <p class="title">{{ tag }}</p>
  </div>
</template>

<script>
export default {
  name: "SubPageHeader",
  data() {
    return {};
  },
  props: {
    tag: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.subheader {
  width: 100%;
  background-color: #7cd39c;
  padding: 20px 10px 0 40px;
  box-sizing: border-box;
  height: 58px;
  img {
    transform: rotate(180deg);
    width: 24px;
    position: relative;
    top: 1px;
    left: -25px;
  }
  p {
    text-align: center;
    position: relative;
    font-size: 20px;
    top: -26px;
    left: -10px;
  }
}
</style>