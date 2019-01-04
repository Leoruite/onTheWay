<template>
    <div class="box">
        <i @click="back" class="iconfont i1">&#xe606;</i>
        <div>
            <i class="iconfont">&#xe6a8;</i>
            <input type="text" placeholder="搜索">
            <i class="iconfont">&#xe6be;</i>
        </div>
    </div>
</template>
<script>
export default {
    name:"TopSearch",
    methods:{
        back(){
             window.history.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
.box{
    width: 100%;
    height: 50px;
    background-color: #99CF9D;
    line-height: 30px;
    overflow: hidden;
    text-align: center;
    .i1{
        font-size: 25px;
        margin-top: 10px;
        float: left;
    }
    div{
        float: left;
        width: 200px;
        height: 30px;
        padding: 0 5px;
        line-height: 30px;
        margin: 10px 0 10px 60px;
        background-color: #C0E3C5;
        border-radius: 15px;
        i{
        float: left;
        }
        input{
            width: 150px;
            height: 20px;
            margin: 5px 0 5px 10px;
            float: left;
        }
    }
    
}

</style>
