<template>
    <div>
    <div class="navTop">
        发送到
        <router-link to="/found">
            <h3>取消</h3>
        </router-link>
    </div> 
    
    <input type="text" placeholder="搜索">
        <ul class="choose">
            <li>
                <span>选择好友</span>
                <img src="@/assets/imgs/选择器下一个_o.png" alt="">
            </li>
            <li>
                <span>选择群聊</span>
                <img src="@/assets/imgs/选择器下一个_o.png" alt="">
            </li>
            <li>
                <span>发起群聊</span>
                <img src="@/assets/imgs/选择器下一个_o.png" alt="">
            </li>
        </ul>
        <h3 class="zj">最近</h3>
        <ul class="list">
            <li>
                <img src="@/assets/imgs/电脑.png" alt="">
                <span>我的电脑</span>
            </li>
            <li>
                <img src="@/assets/imgs/收藏.png" alt="">
                <span>我的收藏</span>
            </li>
            <li>
                <img src="@/assets/imgs/视频.png" alt="">
                <span>好友微视</span>
            </li>
            <li>
                <img src="@/assets/imgs/群蜂QQ空间.png" alt="">
                <span>QQ空间</span>
            </li>
            <li>
                <img src="@/assets/imgs/优惠券.png" alt="">
                <span>网购优惠券1595</span>
            </li>
            <li>
                <img src="@/assets/imgs/头像 女孩.png" alt="">
                <span>素素的风~</span>
            </li>
            <li>
                <img class="bq" src="@/assets/imgs/QQ图片.jpg" alt="">
                <span>17软件工程2班通知公告群</span>
            </li>
        </ul>
    
</div>
</template>
<script>
export default {
    name:"qq",
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
div{
    background-color: #fff;
    .navTop{
    width: 100%;
    height: 50px;
    float: left;
    background-color: rgb(82, 158, 230);
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 18px;
    img{
        margin-left: 10px;
        width: 20px;
        float: left;
    }
    h3{
        float: right;
        margin-right: 15px;
        color: #fff;
        font-weight: normal;
        font-size: 18px;
        line-height: 50px;
    }
}
input{
    width: 95%;
    padding: 0 20px;
    box-sizing: border-box;
    margin:10px 10px 20px 10px;
    background-color: rgb(233, 231, 231);
    border-radius: 3px;
}
.choose{
    width: 100%;
    height: 150px;
    li{
        height: 49px;
        border-bottom: 1px solid gainsboro;
    }
    span{
        font-size: 18px;
        font-weight: bold;
        float: left;
        margin-left: 10px;
        line-height: 50px;
        color: rgb(47, 48, 46);
    }
    img{
        width: 30px;
        float: right;
        margin-right: 5px;
        margin-top: 10px;
    }
}
.zj{
    margin-left: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 5px;
}
.list{
    li{
        width: 100%;
        height: 49px;
        border-bottom: 1px solid gainsboro;
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
        font-weight: bold;
    }
    .bq{
        border-radius: 50%;
    }
}
}

</style>

