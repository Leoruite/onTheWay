<template>
    <div class="boxs">
        <topTitle title="关注"/>
        <div class="box" v-for="(element,index) in dtdata" :key="index">
            <img :src="element.img" alt="">
            <div class="right">
                <p class="p1">{{element.uesrname}}</p>
                <p class="p2">{{element.title}}</p>
                <p class="p3">粉丝数:{{element.shares}}</p>
            </div>
            <button>已关注</button>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"FoundAttention",
    data(){
        return{
            dtdata:''
        }
    },
    mounted(){
       this.$axios.get(this.dtHOST)
       .then(res =>{
           this.dtdata=res.data.news
           console.log(this.dtdata)
       })
       .catch(error =>{
           console.log(error)
       })
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
            margin-right: 5px;
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

