<template>
    <div>
        <div class="big">
            <div class="box" v-for="(element,index) in personalData" :key="index" >
                <div class="top"> 
                    <img :src="element.img" alt="">
                    <p class="p1">{{element.author}}</p>
                    <p class="p2"><span>{{element.time}}</span><span>来自</span><span>路上xujiazheng</span></p>
                </div>
                <p class="middle">
                    {{element.content}}
                </p>
                <Bottom :fenxiang="element.fenxiang" :pinglun="element.pinglun" :zan="element.zan"  @getData="getMsg"/>
            </div>
        </div>
        <!-- <p>全部游记<span>筛选</span></p> -->
    </div>
</template>
<script>
import Bottom from "../../../components/Mines//bottom"
import FenXiang from  "../../../components/Mines/zan/fenxiang"
export default {
    name:"Personal",
    data(){
        return{
            personalData:'',
            fx:true
        }
    },
    // props:{
    //     personalData:{
    //         type:Array,
    //         required:true
    //     }
    // },
    mounted(){
        this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            this.personalData=data.data;
            console.log(this.personalData)
        })
        .catch(error =>{
            console.log(error)
        })
    },
    components:{
        Bottom,
        FenXiang
    },
    methods:{
        getMsg(){
            this.fx=!this.fx
            console.log("那都搜了")
        }
    }
}
</script>
<style lang="less" scoped>
.big{
    position: relative;
     .box{
        background-color: #fff;
        margin-top: 20px;
        .top{
            width: 100%;
            height: 50px;
            // line-height: 50px;
            img{
                width: 45px;
                float: left;
                margin-right: 10px;
            }
            .p1{
                width: 200px;
                height: 25px;
                float: left;
                font-size: 14px;
            }
            .p2{
                width: 200px;
                height: 25px;
                float: left;
                font-size: 12px;
                span{
                    margin-right: 10px;
                }
            }
        }
        .middle{
            width: 100%;
            padding: 10px;
            box-sizing: border-box;
        }
    }
    .fenxiang{
            position: fixed;
            left: 0;
            top:100px;
            width: 400px;
            height: 200px;
            background-color: red;
            z-index: 999;
        }

}
   
</style>

