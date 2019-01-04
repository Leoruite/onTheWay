<template>
    <div>
        <ul class="foot_nav ">
            <li>
                <router-link to="/home" exact>
                    <i class="iconfont">&#xe668;</i>
                    <span>首页</span>
                </router-link>
            </li>
                <li>
                <router-link to="/strategy">
                    <i class="iconfont">&#xe60a;</i>
                    <span>攻略</span>
                </router-link>
            </li>
                <li>
                <router-link to="/found">
                    <i class="iconfont">&#xe600;</i>
                    <span>发现</span>
                </router-link>
            </li>
                <li>
                <router-link to="/friend">
                    <i class="iconfont friend">&#xe63c;</i>
                    <span class="friend-text">鹿友</span>
                </router-link>
            </li>
                <li>
                <router-link to="/mine">
                    <i class="iconfont">&#xe6c2;</i>
                    <span>我的</span>
                </router-link>
            </li>

         </ul>

    </div>
  
</template>
<script>

export default {
    name:"FooterNav",
    data(){
      return{
        
      }

    }
}
</script>

<style lang="less" scoped>
.foot_nav{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    padding: 9px 0 10px;
    background-color: #fff;
    box-sizing: border-box;
    z-index: 999;
    // margin-top: 30px;
    li{ 
        a{
            display: block;
            width: 100%;
            text-align: center;
            i{
                display: block;
                flex: 1;
                font-size: 30px;
                font-weight: 700;
            }
            .friend{
                font-size: 38px;
                margin-top: -5px;
            }
            span{
                display: block;
                margin-top: 10px;
            }
            .friend-text{
                margin-top: 5px;
            }
        }
        .active{
            i{
                color: #7DD19C;
            }
            span{
                color: #7DD19C;
            }
        }
       
    }
}
</style>
 