<template>
   <div class="bottom">
        <span >
            <el-button type="text" @click="open">
                 <i class="iconfont">&#xe61a;</i>{{fenxiang}}
            </el-button>
        </span>
        
        <span>
            <router-link to="comment">
                 <i class="iconfont">&#xe62c;</i>{{pinglun}}
            </router-link>
        </span>
        <span>
            <i class="iconfont">&#xe648;</i>{{zan}}
        </span>
    </div>
</template>
<script>
import FenXiang from  "../../components/Mines/zan/fenxiang"
export default {
    name:"Bottom",
    props:{
        fenxiang:{
            type:String,
            require:true
        },
        pinglun:{
            type:String,
            require:true
        },
        zan:{
            type:String,
            require:true
        }
    },
    components:{
        FenXiang
    },
    methods: {
        fxHandler(){
            this.$emit("getData")
        },
        open() {
            this.$alert('分享成功', '分享', {
            confirmButtonText: '确定',
            // callback: action => {
            //     this.$message({
            //     type: 'info',
            //     message: `action: ${ action }`
            //     });
            // }
            });
        }
    },
}
</script>
<style lang="less" >
.bottom{
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: flex;
    border-top: 1px solid #E5E5E5;
    span{
        display: inline-block;
        height: 30px;
        // line-height: 30px;
        flex: 1;
        text-align: center;
        .el-message-box{
            margin-top: 20px;

        }
        button{
            width: 100%;
            height: 100%;
            span{
        
                width: 100%;
                height: 30px;
                float: left;
                margin-top: -10px;
                color: #333;
                font-size: 16px;
            }

        }
       
        i{
            color: green;
            font-weight: 700;
        }
    }
}
.el-message-box{
    margin-top: 200px;
}

</style>

