<template>
    <div>
        <TopTitle title="个人信息"/>
        <p class="top">头像
            <img :src="this.$store.state.touxiang" alt="">
        </p>
        <div class="box">
            <p>昵称 <span>{{this.$store.state.username}}</span></p>
            <p>性别 <span>{{this.$store.state.gender}}</span></p>
        </div>
        <div class="box">
            <p>城市 <span>{{this.$store.state.city}}</span></p>
            <p>个人签名 <span>{{this.$store.state.jianjie}}</span></p>
        </div>
    </div>
</template>
<script>
import TopTitle from "../../components/Mines/topTitle"
export default {
    name:"Information",
    components:{
        TopTitle
    }
    
}
</script>
<style lang="less" scoped>
    div{
        background-color: #E5E5E5;
        .top{
            width: 100%;
            height: 120/75rem;
            line-height: 120/75rem;
            background-color: #fff;
            margin: 20px 0 10px 0;
            img{
                width: 80/75rem;
                margin:20/75rem 80/75rem 20/75rem 0;
                float: right;
            }
        }
        .box{
            margin-top: 20/75rem;
            overflow: hidden;
            p{
                width: 100%;
                height: 80/75rem;
                line-height: 80/75rem;
                background-color: #fff;
                border-bottom: 1px solid #E5E5E5;
            }
        }
    }
</style>

<style lang="less" scoped>

</style>
