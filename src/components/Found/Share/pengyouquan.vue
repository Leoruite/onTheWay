<template>
<div>
    <div class="navTop">
        <router-link to="/found">
            <img src="@/assets/imgs/返回.png" alt="">
        </router-link>
        <h2>微信</h2>
        <span @click="fabiaoHandel">发表</span>
    </div>
    <textarea ref='tex' placeholder="这一刻的想法..."></textarea>
    <div class="box">
        <div class="tx"  v-for="(element,index) in dtdata" :key="index" v-if="element.tpImg">
            <img :src="element.tpImg.tpImg2" alt="">
            <div class="yh-name">
                    <h3>{{element.uesrname}}</h3>
                    <p>{{element.title}}</p>
            </div>
        </div>
        <div class="wz">
            <img src="@/assets/imgs/符号-位置.png" alt="">
            <span>所在位置</span>
        </div>
        <div class="look">
            <img src="@/assets/imgs/人.png" alt="">
            <span>谁可以看</span>
            <span class="gongkai">公开</span>
        </div>
    </div>
    
</div>
</template>
<script>
export default {
    name:"pengyouquan",
    data(){
        return{
            dtdata:''
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

       console.log(this.$route.params.id)
    }
}
</script>
<style lang="less" scoped>
div{
    background-color: #fff;
    .navTop{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    float: left;
    img{
        margin-left: 10px;
        width: 20px;
        float: left;
    }
    h2{
        float: left;
        margin-left: 15px;
        color: #000;
        font-weight: normal;
        font-size: 18px;
    }
    span{
        float: right;
        color: green;
        margin-right: 10px;
    }
}
textarea{
    height: 150px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.box{
    width: 100%;
    height: 350px;
    padding: 0 20px;
    box-sizing: border-box;
    .tx{
        padding-bottom: 10px;
        border-bottom: 0.2px solid rgb(233, 231, 231);
        img{
            width: 50px;
           float: left;
        }
        h3{
            float: left;
            margin-left: 7px;
            margin-top: 5px;
        }
        p{
            display: inline-block;
            margin-left: 7px;
        }
        // .yh-name{
        //     float: right;
        //     margin-left: 10px;
        // }
    }
    .wz{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 0.2px solid rgb(233, 231, 231);
        img{
            width: 30px;
            float: left;
            padding-top: 10px;
        }
        span{
            margin-left: 20px;
            color: #000;
            font-size: 16px;
            
        }
    }
    .look{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 0.2px solid rgb(233, 231, 231);
        img{
            width: 25px;
            float: left;
            padding-top: 10px;
            margin-left: 5px;
        }
        span{
            margin-left: 20px;
            color: #000;
            font-size: 16px;
        }
        .gongkai{
            color: gray;
            float: right;
        }
    }
}
}

</style>

