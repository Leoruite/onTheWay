<template>
    <div class="login">
        <img src="../../assets/iconfont-img/logo.png" alt="">
         <p>路上</p>
         <div>
            <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="登录" name="first">
                <LoginBody  span="忘记密码?" state="1" />
            </el-tab-pane>
            <el-tab-pane label="注册" name="second">
                <LoginBody  span="发送验证码" state="2" @getData="getMsg"/>
            </el-tab-pane>
        </el-tabs>
         </div>
        
    </div>
</template>
<script>
// import Tab from "../../components/Mines/login/Tab"
import RegisteredBody from "../../components/Mines/login/RegisteredBody"
import LoginBody from "../../components/Mines/login/LoginBody"

export default {
    name:"Login",
     data(){
        return{
            activeName: 'first',
            flag:''
        }
    },
    components:{
        LoginBody,
        RegisteredBody
        
    },
    mounted(){
        
    },
    methods:{
         handleClick(tab, event) {
            console.log(tab, event);
         },
         getMsg(data){
        //      console.log('kkk')
        //   this.flag=data
        //   console.log(this.flag)
        console.log("哈哈哈")
        this.activeName='first'
      },
    }
    
   
}
</script>
<style lang="less" scoped>
.login{
    width: 100%;
    height: 17.8rem;
    text-align: center;
    background: -webkit-linear-gradient(#9AD09E, #79ABDE);
    img{
        width: 154/75rem;
        margin-top: 139/75rem;

    }
    p{
        color:#fff;
        font-size: 40/75rem;
        font-family: "楷体";
        margin-top: 10px;
    }
    div{
        width: 280px;
        margin: 0 auto;
        .el-tab-pane{
            text-align: center;
            display: flex;
            el-tab-pane{
                         flex: 1;
            }
        }
    }
}


</style>
