<template>
  <div>
    <div class="isHot">按热度</div>
    <div class="chat">
      <div class="user" v-for="(element,index) in chat" :key="index">
        <img :src="element.userImg" alt>
        <i class="name">{{ element.userName }}</i>
        <i class="pinglun">{{ element.conText }}</i>
        <i class="time">{{ element.date }}</i>
        <!-- 点赞 -->
        <i class="iconfont" v-if="!flagz" @click="changeZan">
          &#xe648;
          <span>{{ element.zan }}</span>
        </i>
        <i class="iconfont" v-else @click="changeZan">
          &#xe648;
          <span>{{ element.zan+1 }}</span>
        </i>
        <!-- 转发 -->
        <i class="iconfont" v-if="!flagzf" @click="changeZF">
          &#xe61a;
          <span>{{ element.zhuanfa }}</span>
        </i>
        <i class="iconfont" v-else @click="changeZF">
          &#xe61a;
          <span>{{ element.zhuanfa+1 }}</span>
        </i>
        <!-- 评论 -->
        <i class="iconfont" v-if="!flagpl" @click="changePL">
          &#xe6bb;
          <span>{{ element.pinglun }}</span>
        </i>
        <i class="iconfont" v-else @click="changePL">
          &#xe6bb;
          <span>{{ element.pinglun+1 }}</span>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailChat",
  data() {
    return {
      flagz: false,
      flagzf: false,
      flagpl: false
    };
  },
  props: {
    chat: {
      type: Array,
      require: true
    }
  },
  methods: {
    changeZan() {
      this.flagz = !this.flagz;
    },
    changeZF() {
      this.flagzf = !this.flagzf;
    },
    changePL() {
      this.flagpl = !this.flagpl;
    }
  }
};
</script>

<style lang="less" scoped>
.isHot {
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  color: rgb(45, 138, 192);
  text-align: right;
  padding-right: 2%;
}
.chat {
  width: 100%;
  box-sizing: border-box;

  background: #fff;
  .user {
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ccc;
    img {
      width: 50px;
      border-radius: 100%;
      margin: 2% 0 0 3%;
      float: left;
    }
    .name,
    .pinglun,
    .time {
      display: block;
      width: 41%;
      float: left;
      margin-left: 2%;
    }
    .name {
      font-size: 16px;
      margin-top: 2%;
    }
    .pinglun {
      font-size: 14px;
      margin-bottom: 2/75%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #555;
    }
    .time {
      font-size: 12px;
      color: #999;
    }
    .iconfont {
      width: 30px;
      float: right;
      margin-right: 5%;
      font-size: 20px;
      margin-top: -2%;
      color: rgb(96, 223, 164);
      position: relative;
      span {
        font-size: 10px;
        position: absolute;
        top: 38%;
        right: -44%;
      }
    }
  }
  .last {
    margin-bottom: 60px;
  }
}
</style>