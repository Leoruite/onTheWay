<template>
    <div class="boxs">
        <div class="search">
            <i class="iconfont">&#xe659;</i>
            <input type="text" placeholder="搜索">
            <i class="iconfont">&#xe67f;</i>
        </div>
        <div class="box" v-for="(element,index) in friendData" :key="index">
            <img :src="element.img" alt="">
            <router-link to="chitchat">
                <div class="right">
                    <p class="author">{{element.author}}</p>
                    <p class="text">{{element.friendText}}</p>
                    <span class="time">{{element.friendTime}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"Message",
    props:{
        friendData:{
            type:Array,
            require:true
        }
    }
}
</script>
<style lang="less" scoped>
.boxs{
    .search{
        float: left;
        width: 90%;
        height: 30px;
        padding: 0 5px;
        line-height: 30px;
        margin-left: 10px;
        background-color: #fff;
        border-radius: 15px;
        i{
        float: left;
        }
        input{
            width: 280px;
            height: 20px;
            margin: 5px 0 5px 10px;
            float: left;
        }
    }
    .box{
        margin-top: 10px;
        width: 100%;
        height: 70px;
        float: left;
        border-bottom: #ECECEC;
        background-color: #fff;
        padding: 10px 5px;
        box-sizing: border-box;
        position: relative;
        img{
            width: 50px;
            float: left;
        }
        a{
            .right{
                width: 200px;
                height: 50px;
                float: left;
                margin-left: 10px;
                .author{
                    font-size: 18px;
                    margin-top: 5px;
                }
                .text{
                    font-size: 14px;
                }

            }
            .time{
                position: absolute;
                right: 5px;
                top: 10px;
            }

        }
        
    }

}





</style>

