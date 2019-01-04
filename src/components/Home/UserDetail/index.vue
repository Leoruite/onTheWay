<template>
  <div class="box">
    <div class="userDetail" @click="jump('/homedetail')">
      <i class="iconfont" v-if="!flag" @click="changeZF">
        &#xe61a;
        <span>{{zf}}</span>
      </i>
      <i class="iconfont" v-else @click="changeZF">
        &#xe61a;
        <span>{{zf2}}</span>
      </i>
      
      <i class="iconfont" v-if="!flag2" @click="changePL">
        &#xe6bb;
        <span>{{pl}}</span>
      </i>
      <i class="iconfont" v-else @click="changePL">
        &#xe6bb;
        <span>{{pl2}}</span>
      </i>
      <i class="iconfont" v-if="!flag3" @click="changeZan">
        &#xe648;
        <span>{{zan}}</span>
      </i>
      <i class="iconfont" v-else @click="changeZan">
        &#xe648;
        <span>{{zan2}}</span>
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDetail",
  data() {
    return {
      zf: "转发",
      zf2: "已转发",
      pl: "评论",
      pl2: "已评论",
      zan: "赞",
      zan2: "已赞",
      flag: false,
      flag2: false,
      flag3: false
    };
  },
  methods: {
    jump(luyou) {
      if (this.$store.state.username) {
        this.$router.push(luyou);
      } else {
        this.$router.push("./login");
      }
    },
    changeZF() {
      this.flag = !this.flag;
    },
    changePL() {
      this.flag2 = !this.flag2;
    },
    changeZan() {
      this.flag3 = !this.flag3;
    }
  }
};
</script>

<style lang="less" scoped>
.userDetail {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
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