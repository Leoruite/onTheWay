<template>
    <div>
        <div class="navTop">
            <router-link to="/found">
                <img src="@/assets/imgs/返回2.png" alt="">
            </router-link>
            <h2>选择</h2>
            <img class="slh" src="@/assets/imgs/省略号.png" alt="">
        </div>
        <div class="search">
            <div class="ss">
                <img src="@/assets/imgs/搜索.png" alt="">
                <input type="text" placeholder="搜索">
            </div>
            <div class="chat">
                创建新聊天
            </div>
        </div>
        <p class="zuijin">最近聊天</p>
        <ul class="list">
            <li>
                <img src="@/assets/imgs/picture_GL02.png" alt="">
                <span>珍惜</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg.png" alt="">
                <span>SunnyLI</span>
            </li>
            <li>
                <img src="@/assets/imgs/eee.jpg" alt="">
                <span>M蒙面超人</span>
            </li>
            <li>
                <img src="@/assets/imgs/hhh.jpg" alt="">
                <span>涟</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg (3).jpg" alt="">
                <span>风雪夜归人·</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg (2).jpg" alt="">
                <span>我的收藏</span>
            </li>
            <li>
                <img src="@/assets/imgs/wozanguode_03.png" alt="">
                <span>笑等&茶凉</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg(3).png" alt="">
                <span>啊瑞呀@786</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg(6).png" alt="">
                <span>陈先生</span>
            </li>
            <li>
                <img src="@/assets/imgs/timg(5).png" alt="">
                <span>素素的风~</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"weixin",
    data(){
        return{

        }
    }
}
</script>
<style lang="less">
div{
    background-color: #fff;
    .navTop{
    width: 100%;
    height: 50px;
    float: left;
    background-color: #000;
    img{
        margin-left: 10px;
        width: 30px;
        float: left;
        margin-top: 10px;
    }
    h2{
        float: left;
        margin-left: 15px;
        color: #fff;
        font-weight: normal;
        font-size: 18px;
        line-height: 50px;
    }
    .slh{
        float: right;
        width: 30px;
        margin-right: 10px;
        margin-top: 5px;
    }
}
.search{
    width: 100%;
    height: 100px;
    padding: 0 10px;
    box-sizing: border-box;
    background-color: #fff;
    .ss{
        border-bottom: 1px solid rgb(233, 231, 231);
        width: 100%;
        height: 50px;
        float: left;
        input{
            margin-top: 15px;
        }
        img{
        width: 20px;
        margin-top: 0px;
    }
    }
    
    .chat{
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
}
.zuijin{
    text-align: center;
    display: block;
    margin-top: 45px;
    font-size: 13px;
    color: gray;
    text-align: left;
    padding-left: 10px;
    background-color: rgb(241, 241, 241);
    height: 25px;
    line-height: 25px;
}
.list{
    li{
        width: 100%;
        height: 49px;
        border-bottom: 1px solid rgb(238, 238, 238);
    }
    img{
        width: 40px;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
    }
    span{
        line-height: 50px;
        margin-left: 10px;
        color: rgb(47, 48, 46);
        font-size: 18px;
    }
    
}
}
</style>


