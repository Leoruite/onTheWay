<template>
    <div>
        <p>
            <i @click="back" class="iconfont i1">&#xe606;</i>{{title}}
        </p>
    </div>
</template>
<script>
export default {
    name:"TopTitle",
    methods:{
        back(){
             window.history.go(-1)
        }
    },
    props:{
        title:{
            type:String,
            default:"在路上"
        }
    }
}
</script>
<style lang="less" scoped>
div{
    margin: 0;
    padding: 0;
    p{
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background-color: #9AD09E;
        .i1{
            position: absolute;
            left: 0;
            top: 0;
            font-size: 25px;
           
        }
    }
}

</style>

