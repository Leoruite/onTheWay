<template>
    <div class="boxs">
        <div class="box" v-for="(element,index) in wenzhangData" :key="index">
             <h2>{{element.title}} </h2>
             <p>&emsp;{{element.article}}</p>
             <router-link :to="{ name:'WenZhangDetail',params:{id:element.id}}" >
                     <a>查看全文</a>
             </router-link>
             <Bottom :fenxiang="element.fenxiang" :pinglun="element.pinglun" :zan="element.zan"/>
        </div>
    </div>
</template>
<script>
import Personal from "../personal/personal"
import Bottom from "../../../components/Mines/bottom"
export default {
    name:"WenZhang",
    data(){
        return{
            wenzhangData:''
        }
    },
    components:{
        Personal,
        Bottom
    },
    mounted(){
         this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            // console.log(data.data)
            this.wenzhangData = data.data
            console.log(this.wenzhangData)
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
        background-color: #fff;
        margin-bottom: 20px;
        h2{
            font-size: 18px;
            color: #99CF9D;
        }
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 7;
            overflow: hidden;
            padding: .2rem .2rem 0 .2rem;
            box-sizing: border-box;
        }
        a{
            margin: 5px 0;
            display: block;
            float: right;
            font-size: 14px;
            // color: green;
        }
        .botton{
            width: 100%;
            display: flex;
            border-top: 1px solid #E5E5E5;
            span{
                flex: 1;
                text-align: center;
                i{
                    color: green;
                    font-weight: 700
                }
            }
        }
    }
}

</style>

