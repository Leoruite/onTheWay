<template>
    <div>
        <div>
            <IndexHead />
            <div class="all">
                <span class="sp1">全部游记</span><span>({{personalData.length}})</span><span class="right">筛选</span>
            </div>
            <Personal />
        </div>
    </div>
</template>
<script>
import IndexHead from "../../components/Mines/index/IndexHead"
import Personal from "../../components/Mines/personal/personal"
import login from "./login"
export default {
    name:"PersonalHome",
    data(){
        return{
            personalData:''
        }
    },
    components:{
        IndexHead,
        Personal
    },
    mounted(){
        this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            this.personalData=data.data;
            console.log(this.personalData)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style lang="less" scoped>
.all{
    font-size: 28/75rem;
    background-color: #fff;
    border-top: 1px solid #E6E6E6;
    height: 100/75rem;
    line-height: 100/75rem;
    .sp1{
        padding: 27/75rem 20/75rem 20/75rem 20/75rem;
    }
    .right{
        font-size: 28/75rem;
        display: inline-block;
        width: 2rem;
        height: 0.7rem;
        border: 2px solid #7CD39C;
        border-radius: 7px;
        float: right;
        text-align: center;
        line-height: 0.7rem;
        margin-top: 10px;
        margin-right: 15px;
        color: #ADE1BE;
    }
}
</style>
