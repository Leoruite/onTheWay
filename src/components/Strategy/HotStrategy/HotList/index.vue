<template>
  <div>
    <div class="DetailItem">
      <div class="userBox">
        <router-link to='/login'>
          <img :src="commentItemData.userImg" alt=""/>
        </router-link>
      <div class="userInfo">
        <p class="userName">{{commentItemData.userName}}</p>
        <p class="userChat">{{commentItemData.date}}</p>
      </div>
      <div @click='followHandler' class='lookingfor'>
        <span class='no_follow' v-if='followState == 0'>
          <i class="iconfont follow">&#xe503;</i>关注
        </span>
        <span class='yes_follow' v-else>
          已关注
        </span>
      </div>
      
      </div>
      <router-link :to="'/comment/'+commentItemData.id">
        <div class="command">
          {{commentItemData.conText}}
          <img :src="commentItemData.pic" alt="">
        </div>
      </router-link>
    </div>
    <hr/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "DetailInfo",
  data() {
    return {
      followState: 0 //默认没有关注
    };
  },
  props:{
    commentItemData:{
      type:Object,
      default: function(){
        return {}
      }
    }
  },
  methods:{
    followHandler(event){ 
        if(this.$store.state.username){
          //已经登录，直接关注成功  
          if(this.followState == 0){
            this.followState = 1; //表示关注了
            console.log(this.followState);
          }else{
            this.followState = 0; //表示取消关注
          }
          console.log(this.followState);
        }else{
          //没有登录，跳转到登录页面
          this.$router.push('/login')
        }
      }
      
  }
};
</script>

<style lang="less" scoped>
  .DetailItem{
    width: 100%;
    padding: 20/75rem 20/75rem 0;
    box-sizing: border-box;
    background-color: #fff;
    .userBox{
      width: 100%;
      box-sizing: border-box;
      background: #fff;
      overflow: hidden;

      img{
        float: left;
        width: 80/75rem;
        border-radius: 100%;
      }
      .userInfo{
        float: left;
        margin-top: 12/75rem;
        margin-left: 10/75rem;
        font-size: 16px;
        .userChat{
          font-size: 12px;
        }
      }
      p{
        line-height: 40/75rem;
      }
      .lookingfor{
        float: right;
      }
      .no_follow,.yes_follow{
        border: 1px solid #7dd19c;
        border-radius: 7px;
        font-size: 12px;
        width: 50px;
        display: inline-block;
        padding: 3px 1px;
        text-align: center;
        margin-top: 4%;
        color: #7dd19c;
        .follow{
          font-size: 12px;
        }
      }
      .yes_follow{
          border: 1px solid #555;
          color: #555
      }
    }
    .command{
      box-sizing: border-box;
      width: 100%;
      background: #fff;
      padding: 20/75rem 0 14/75rem;
      font-size: 15px; 
      img{
        margin-top: 10px;
        width: 100%;
        height: 150px;
      }
    }
  }
</style>