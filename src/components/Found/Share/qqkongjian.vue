<template>
<div>
    <div class="navTop">
        <router-link to="/found">
            <h3>取消</h3>
        </router-link>
        <span @click="fabiaoHandel">发表</span>
    </div>
    <textarea ref='tex' placeholder="转发的理由..."></textarea>
    <div class="box">
        <div class="tx">
            <img src="@/assets/imgs/wozanguode_02.png" alt="">
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    name:"pengyouquan",
    data(){
        return{

        }
    },
    methods:{
        fabiaoHandel(){
            if(this.$refs.tex.value){
                alert("发表成功")
            }
            else{
                alert("请输入内容")
            }
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
    img{
        margin-left: 10px;
        width: 20px;
        float: left;
    }
    h3{
        float: left;
        margin-left: 15px;
        color: #fff;
        font-weight: normal;
        font-size: 18px;
        line-height: 50px;
    }
    span{
        float: right;
        color: #fff;
        margin-right: 10px;
        line-height: 50px;
    }
}
textarea{
    height: 100px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 15px;
}
.box{
    width: 100%;
    height: 350px;
    padding: 0 20px;
    box-sizing: border-box;
    
    .tx{
        background-color: rgba(0,0,0,.01);
        img{
            width: 50px;
        }
    }
    
}
}

</style>

