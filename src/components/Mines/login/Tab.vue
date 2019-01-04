<template>
   
  <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="first">
        <LoginBody @getData="getMsg"/>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second">
        <RegisteredBody />
        
    </el-tab-pane>
     
  </el-tabs>
</template>
<script>
import LoginBody from "./LoginBody"
import RegisteredBody from "./RegisteredBody"
export default {
    name:"Tab",
    data(){
        return{
            activeName: 'first',
            loginData:''
        }
    },
    components:{
        LoginBody,
        RegisteredBody
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getMsg(data){
          this.loginData=data
          console.log(this.loginData)
      },
    },

  

}
</script>
<style lang="less" scoped>
.el-tab-pane{
       text-align: center;
       display: flex;
       el-tab-pane{
          flex: 1;
       }
 }


</style>
