<template>
  <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="消息" name="first">
          <Message :friendData="friendData"/>
        </el-tab-pane>
        <el-tab-pane label="好友" name="second">
          <MyFriend :friendData="friendData" />
        </el-tab-pane>
    </el-tabs>
    <FooterNav />
  </div>
   
</template>

<script>
import MyFriend from "../../components/Friends/MyFriend"
import Message from "../../components/Friends/Message"
import FooterNav from "../../components/FooterNav/index"
export default {
    name:"Friend",
    data() {
      return {
        activeName: 'first',
        friendData:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
        FooterNav,
        MyFriend,
        Message
    },
    mounted(){
         this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            // console.log(data.data)
            this.friendData = data.data
            console.log(this.friendData)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style scoped>

</style>
