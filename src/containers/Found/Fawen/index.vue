<template>
<div class="box">
    <div class="nav-top">
        <router-link class="esc" to="/found">取消</router-link>
        发文
        <span>发送</span>
    </div>
    <textarea placeholder="分享新鲜事..."></textarea>
</div>
    
   
</template>
<script>
export default {
    name:"Fawen",
    data(){
        return{

        }
    },
    components:{
        
    }
}
</script>
<style>
.box{
    background-color: #fff;
}
.nav-top{
    background: #7DD19D;
    text-align: center;
    height: 50px;
    line-height: 50px;
    
}
.esc{
    font-size: 13px;
    float: left;
    margin-left: 5px;
}
.nav-top span{
    float: right;
    font-size: 13px;
    margin-right: 5px;
}
textarea{
    width: 100%;
    height: 800px;
    font-size: 13px;
    font-weight: bold;
    color: #000;
    padding: 10px 10px;
    box-sizing: border-box;
}

</style>

