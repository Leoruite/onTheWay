<template>
    <div class="top"> 
        <TopTitle ThreeTitle="设置"/>
        <div class="box">
            <p>账号管理<i class="iconfont">&#xe698;</i></p>
            <p>账号与安全<i class="iconfont">&#xe698;</i></p>
        </div>
        <div class="box">
            <p>消息设置<i class="iconfont">&#xe698;</i></p>
            <p>屏蔽设置<i class="iconfont">&#xe698;</i></p>
            <p>通用设置<i class="iconfont">&#xe698;</i></p>
        </div>
        <div class="box">
            <p>客服中心<i class="iconfont">&#xe698;</i></p>
            <p>关于路上<i class="iconfont">&#xe698;</i></p>
        </div>
        <div class="box">
            <p>清除缓存<i class="iconfont">&#xe698;</i></p>
            <p>护眼模式<i class="iconfont">&#xe698;</i></p>
            <p>推荐我们<i class="iconfont">&#xe698;</i></p>
        </div>
        <router-link to="login">
            <p @click="clickHandler" class="bt">退出登录</p>
        </router-link>
        
    </div>
</template>
<script>
import TopTitle from "../../components/ThreeHeader/index"
export default {
    name:"SetUp",
    methods:{
        clickHandler(){
            alert('退出成功')
        }
    },
    components:{
        TopTitle
    }
}
</script>
<style lang="less" scoped>
 div{
        background-color: #E5E5E5;
        .box{
            margin-top: 10px;
            p{
                padding: 0 10px;
                box-sizing: border-box;
                width: 100%;
                height: 40px;
                line-height: 40px;
                background-color: #fff;
                border-bottom: 1px solid #E5E5E5;
                i{
                    float: right;
                    color:#BADFBE;
                    font-size: 25px;
                }
        
            }
        }
        .bt{
        margin-top:10px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        text-align: center;
        border-bottom: 1px solid #E5E5E5;
        color:#BADFBE;
        
        }
       
    }

</style>
