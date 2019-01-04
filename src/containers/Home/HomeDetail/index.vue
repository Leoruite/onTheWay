<template>
  <div class="detail">
    <scroller
    :on-refresh="refresh" 
    ref="my_scroller" 
    refresh-layer-color="rgb(34, 211, 114)"
    >
      <SubPageHeader tag="首页推荐"/>
      <p class="hot">热门</p>
      <DetailInfo :userInfo="userInfo"/>
      <DetailCommand/>
      <DetailChat :chat="chat"/>
    </scroller>
    <UserDetail/>
  </div>
</template>

<script>
import SubPageHeader from "@/components/Home/SubPageHeader/index";
import DetailInfo from "@/components/Home/DetailInfo/index";
import DetailCommand from "@/components/Home/DetailCommand/index";
import DetailChat from "@/components/Home/DetailChat/index";
import UserDetail from "@/components/Home/UserDetail/index";
export default {
  name: "HomeDetail",
  data() {
    return {
      userInfo: [],
      chat: [],
      img: ""
    };
  },
  components: {
    SubPageHeader,
    DetailInfo,
    DetailCommand,
    DetailChat,
    UserDetail
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/detailHot")
      .then(res => {
        this.userInfo = res.data;
      })
      .catch(error => new Error(error));

    this.$axios.get(this.HOST + "/detailChat").then(res => {
      this.chat = res.data;
      console.log(res);
    });
  },
  methods: {
    refresh: function() {
      //下拉刷新
      console.log("refresh");
      this.timeout = setTimeout(() => {
        this.$refs.my_scroller.finishPullToRefresh();
      }, 1500);
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  box-sizing: border-box;
  .hot {
    width: 100%;
    height: 20px;
    background: #fff;
    text-align: left;
    padding: 2%;
  }
}
</style>