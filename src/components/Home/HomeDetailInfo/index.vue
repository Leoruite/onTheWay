<template>
  <div>
    <div class="userInfo">
      <p>
        <img :src="userInfo[0].userimg" alt>
        <span class="userName">{{ userInfo[0].username }}</span>
        <span class="userChat">{{ userInfo[0].userchat }}</span>
        <button
          class="lookingfor"
          v-if="!flag"
          v-bind:class="{active:isActive}"
          @click="change()"
        >{{msg}}</button>
        <button class="lookingfor" v-else @click="change">{{msg2}}</button>
      </p>
      <div class="command">
        {{ userInfo[0].context }}
        <img :src="img" class="banner" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  data() {
    return {
      msg: "+ 关注",
      msg2: "取消关注",
      flag: false,
      isActive: -1,
      img:''
    };
  },
  props: {
    userInfo: {
      type: Array,
      required: true
    }
  },
  methods: {
    change(index) {
      this.flag = !this.flag;
    }
  },
  mounted() {
    if (this.$route.params.Dimg) {
      this.$axios
        .get(this.HOST + "/homeBanner", {
          params: {}
        })
        .then(res => {
          this.img = this.$route.params.Dimg;
          console.log(this.img);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.userInfo {
  width: 100%;
  p {
    width: 100%;
    height: 60px;
    padding: 1% 2%;
    background: #fff;
    line-height: 60px;
    border-top: 1px solid #ccc;
    position: relative;
    clear: both;
    overflow: hidden;
    img {
      width: 55px;
      border-radius: 100%;
    }
    .userName {
      position: absolute;
      top: -4%;
      left: 16%;
    }
    .userChat {
      position: absolute;
      top: 26%;
      left: 16%;
      font-size: 12px;
    }
    .lookingfor {
      border: 2px solid #ccc;
      border-radius: 7px;
      font-size: 12px;
      width: 60px;
      height: 30px;
      float: right;
      line-height: 30px;
      text-align: center;
      margin-right: 5%;
      margin-top: 4%;
      color: rgb(244, 250, 248);
      background: #ccc;
      outline: none;
    }
    .active {
      border: 2px solid rgb(96, 202, 140);
      border-radius: 7px;
      font-size: 12px;
      width: 60px;
      height: 30px;
      float: right;
      line-height: 30px;
      text-align: center;
      margin-right: 5%;
      margin-top: 4%;
      color: rgb(244, 248, 246);
      background: rgb(58, 197, 144);
      outline: none;
    }
  }
  .command {
    box-sizing: border-box;
    width: 100%;
    height: 260px;
    background: #fff;
    padding: 0 14/74rem;
    font-size: 15px;
    img {
      width: 100%;
      height: 140px;
      margin-top: 2%;
    }
  }
}
</style>