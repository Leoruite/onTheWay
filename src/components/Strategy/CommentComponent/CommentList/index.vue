<template>
  <div>
    <div class="isHot">按热度</div>
    <div class="chat">
      <div class="user" v-for="(element,index) in Othercomment" :key="index">
        <img :src="element.userImg" alt>
        <div class="userInfo">
          <span class="name">{{ element.userName }}</span>
          <span class="pinglun">{{ element.conText }}</span>
          <span class="time">{{ element.date }}</span>
        </div>
        <div class='share_comment'>
          <i class="iconfont">&#xe61a;</i>
          <i class="iconfont">&#xe6bb;</i>
          <i class="iconfont zan">&#xe612;</i>
        </div>
      </div>
      <LoadMore :loadData='loadData'/>
    </div>
    
  </div>
</template>

<script>
import LoadMore from '@/components/LoadMore'
export default {
  name: "DetailChat",
  data() {
    return {
      Othercomment:[]
    };
  },
  components: {
   LoadMore
  },
  methods:{
    loadData(){
      this.$axios.get(this.HOST+'/comment')
      .then(res => {
        this.Othercomment = res.data.concat(this.Othercomment)
      })
      .catch(error => new Error(error))
    }
  },
  mounted() {
   this.loadData()
  }
};
</script>

<style lang="less" scoped>
.isHot{
  height: 50/75rem;
  line-height: 50/75rem;
  color:#5dade2;
  font-size: 18/75rem;
  text-align: right;
  margin-right: 20/75rem;
}
.chat{
  .user{
    padding: 10/75rem 20/75rem;
    background-color: #fff;
    overflow: hidden;
    border-bottom: 1px solid #e5e5e5;
    img{
      width: 60/75rem;
      border-radius: 50%;
      margin-right: 20/75rem;
      float: left;
    }
    .userInfo{
      float: left;
      span{
        display:block;
        font-size: 12px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name{
        margin-top: 3/75rem;
        margin-bottom:3/75rem;
        font-size: 24/75rem;
      }
      .pinglun{
        margin-bottom: 5/75rem;
        font-size: 20/75rem;
      }
      .time{
        font-size:18/75rem;
      }
    }
    .share_comment{
      float:right;
      margin-top: 60/75rem;
      i{
        margin-left: 25/75rem;
      }
      .zan{
        font-size: 18px;
      }
    }
  }
}
</style>