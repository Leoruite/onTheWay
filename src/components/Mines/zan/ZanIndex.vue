<template>
    <div>
        <!-- <p>全部游记<span>筛选</span></p> -->
        <div class="box" v-for="(element,index) in personalData" :key="index" >
            <div class="top"> 
                <img :src="element.img" alt="">
                <p class="p1">{{element.author}}</p>
                <p class="p2"><span>{{element.time}}</span><span>来自</span><span>路上xujiazheng</span></p>
            </div>
            <p class="middle">
                {{element.content}}
            </p>
            <Bottom :fenxiang="element.fenxiang" :pinglun="element.pinglun" :zan="element.zan"/>
        </div>
    </div>
</template>
<script>
import Bottom from "../../../components/Mines//bottom"
export default {
    name:"ZanIndex",
    data(){
        return{
            personalData:'',
        }
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
    },
    components:{
        Bottom
    }
}
</script>
<style lang="less" scoped>
    .box{
        background-color: #fff;
        margin-bottom: 20px;
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
            padding: .2rem;
            box-sizing: border-box;
        }
        // .botton{
        //     width: 100%;
        //     height: 30px;
        //     line-height: 30px;
        //     display: flex;
        //     border-top: 1px solid #E5E5E5;
        //     span{
        //         flex: 1;
        //         i{
        //             color: green;
        //             font-weight: 700
        //         }
        //     }
        // }
    }
</style>

