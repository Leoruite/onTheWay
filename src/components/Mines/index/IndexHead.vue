<template>
    <div class="head">
        <!-- 登录后的页面 -->
        <div class="after" v-if="this.$store.state.username">
            <img :src="this.$store.state.touxiang" alt="">
            <p class="p1">游客:<span>{{this.$store.state.username}}</span></p>
            <p class="p2">简介 <span>{{this.$store.state.jianjie}}</span></p>
            <p class="gf"><span class="guanzhu">关注:{{this.$store.state.guanzhu}}</span><span class="fensi">粉丝:{{this.$store.state.fensi}}</span> </p>
        </div>

        <!-- 没有登录的页面 -->
        <div class="Front" v-else>
            <img src="../../../assets/iconfont-img/logo.png" alt="">
            <p class="p1">游客:<span>addfdf</span></p>
            <p class="p2">
                <router-link to="login">登录</router-link>
                <router-link to="login">注册</router-link>
            </p>
            <p class="p3">简介:欢迎使用"路上"app</p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"IndexHead",
    props:{
        flag:{
            type:String,
            default:"1"
        }
    },
    mounted() {
        console.log(this.flag)
    },
}
</script>
<style lang="less" scoped>
.head{
    height: 530/75rem;
    width: 100%;
    background-color: #fff;
    text-align: center;
    // padding: 6.5% 0 7.6% 0;
    box-sizing: border-box;
    position: relative;
    .after{
        img{
            width: 144/75rem;
            margin-top: 101/75rem
        }
        .p1{
            font-size: 24/75rem;
            margin: 40/75rem 0 20/75rem 0;
        }
        .p2{
            font-size: 20/75rem;
            margin: 20/75rem 0px;
        }
        .gf{
            font-size: 24/75rem;
            .guanzhu{
                float: left;
                margin-left: 230/75rem

            }
            .fensi{
                float: right;
                margin-right: 230/75rem
            }
        }

    }
    .Front{
        img{
            width: 144/75rem;
            margin-top: 85/75rem;
        }
        .p1{
            margin-top: 36/75rem;
            font-size: 24/75rem;

        }
        .p2{
            margin-top: 20/75rem;

        }
        .p3{
            margin-top: 48/75rem;
            margin-bottom: 100/75rem;
        }
    }

}

// .head{
//     height: (433/1300)px;
//     width: 100%;
//     background-color: #fff;
//     text-align: center;
//     padding: 6.5% 0 7.6% 0;
//     box-sizing: border-box;
//     img{
//         width: 55px
//     }
//     p{
//         margin-top: (36/1300)px;
//     }
//     p{
//         margin: 5px 0 10px 0;
//         a{
//             display: inline-block;
    
//         }
//     }
//     p{
//         margin-top: (48/1300)px;
//     }
//     .gf{
//         .guanzhu{
//             float: left;
//             margin-left: 90px;
//         }
//         .fensi{
//             float: right;
//             margin-right: 90px;
//         }
//     }
// }

</style>

