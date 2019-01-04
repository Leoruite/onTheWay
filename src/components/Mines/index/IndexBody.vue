<template>
    <div class="body">
        <div>
                <p @click="jump('/personlhome')"><i class="iconfont">&#xe61e;</i> 个人主页</p>
                <p @click="jump('/information')"><i class="iconfont">&#xe60f;</i> 基本信息</p>
        </div>
        <div>
                <p @click="jump('/attention')"><i class="iconfont">&#xe630;</i> 我的关注</p>
                <p @click="jump('/collection')"><i class="iconfont sc">&#xe633;</i>我的收藏</p>
                <p @click="jump('/zan')"><i class="iconfont">&#xe648;</i> 赞过的</p>
                <p class="setup" @click="jump('/setup')"><i class="iconfont">&#xe607;</i> 设置 </p>
        </div>
    </div>
</template>
<script>
import PersonlHome from "../../../containers/Mine/PersonalHome"
export default {
    name:"M1_Body",
    methods:{
        jump(luyou){
            if(this.$store.state.username){
                this.$router.push(luyou)
            }
            else{
                this.$router.push("./login")
            }
        }
    }
}
</script>
<style lang="less" scoped>
.body{
    div{
        margin-top: 20/75rem;
        p{
            width: 100%;
            height: 80/75rem;
            line-height: 80/75rem;
            background-color: #fff;
            border-bottom: 1px solid #E5E5E5;
            i{
                color: #D0E9D3;
                font-size: 40/75rem;
                margin:0 10px;
            }
            .sc{
                margin-left: 6px;
            }
         }
         .setup{
              margin-top: 20/75rem;
         }
    }
    
    height: 400px;

    
   
}


</style>
