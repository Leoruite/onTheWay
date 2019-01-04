<template>
    <div class="boxs">
        <topTitle ThreeTitle="关注"/>
        <div class="box" v-for="(element,index) in attentionData" :key="index">
            <img :src="element.img" alt="">
            <div class="right">
                <p class="p1">{{element.author}}</p>
                <p class="p2">{{element.Signature}}</p>
                <p class="p3">粉丝数:{{element.fans}}</p>
            </div>
            <button v-if="flag" @click="clickHandler">已关注</button>
            <button v-else @click="clickHandler">关注</button>
        </div>
    </div>
</template>
<script>
import topTitle from "../../components/ThreeHeader/index"
export default {
    name:"Attention",
    data(){
        return{
            attentionData:'',
            flag:true
        }
    },
    mounted(){
        this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            this.attentionData=data.data;
            console.log(this.attentionData)
        })
        .catch(error =>{
            console.log(error)
        })
    },
    methods:{
        clickHandler(){
            this.flag = !this.flag;
        }
    },
    components:{
        topTitle
    }
}
</script>
<style lang="less" scoped>
.boxs{
    .box{
        width: 100%;
        height: 80px;
        padding: 10px 0;
        box-sizing: border-box;
        border-bottom: 1px solid #F4F4F4;
        background-color: #fff;
        position: relative;
        img{
            width: 60px;
            float: left;

        }
        .right{
            width: 230px;
            height: 60px;
            float: left;
            .p1{
                color: #333;
            }
            .p2,.p3{
                color: #999;
                font-size: 14px;
            }
           
            
        }
        button{
            position: absolute;
            right: 10px;
            top: 20px;

        }
    }
}

</style>

