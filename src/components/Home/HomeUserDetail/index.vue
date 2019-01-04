<template>
  <div class="box">
    <div class="userDetail">
      <i class="iconfont">
        &#xe620;
        <span>转发</span>
      </i>
      <i class="iconfont">
        &#xe61a;
        <span>评论</span>
      </i>
      <i class="iconfont">
        &#xe611;
        <span>赞</span>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail"
};
</script>

<style lang="less" scoped>
.userDetail {
  position: fixed;
  bottom: 30px;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  background: #fff;
  .iconfont {
    display: inline-block;
    width: 30%;
    text-align: center;
    font-size: 22px;
    line-height: 60px;
    color: rgb(76, 209, 143);
    span {
      color: #000;
      font-size: 18px;
    }
  }
}
</style>