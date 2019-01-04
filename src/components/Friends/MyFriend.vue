<template>
    <div>
       <div class="top">
           <span> <i class="iconfont">&#xe631;</i>添加好友</span>
           <span> <i class="iconfont">&#xe659;</i>搜索</span>
           <span> <i class="iconfont">&#xe594;</i>扫一扫</span>
       </div>
       <div class="list" v-for="(element,index) in friendData" :key="index">
           <img :src="element.img" alt="">
           <span class="author">{{element.author}}</span>
       </div>
    </div>
</template>
<script>
export default {
    name:"MyFriend",
    props:{
        friendData:{
            type:Array,
            require:true
        }
    }
}
</script>
<style lang="less" scoped>
div{
    background-color: #F0F0F0;
    .top{
        display: flex;
        background-color: #fff;
        margin-bottom: 20px;
        height: 50px;
        line-height: 50px;
        span{
            flex: 1;
            padding: 0 10px;
            text-align: center;
            i{
                margin-right: 5px;
                color: #9AD09E;
                font-size: 20px;
            }
        }
    }
    .list{
        width: 100%;
        height: 70px;
        line-height: 50px;
        padding: 10px;
        margin-bottom: 2px;
        box-sizing: border-box;
        background-color: #fff;
        img{
            width: 50px;
            float: left;
        }
        .author{
            margin-left: 10px;
        }
    }
}
</style>

