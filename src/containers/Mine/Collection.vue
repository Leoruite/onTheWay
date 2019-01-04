<template>
    <div class="boxs">
        <topTitle ThreeTitle="在路上"/>
        <!-- <div class="box" v-for="(element,index) in collectionData" :key="index">
            <div class="top">
                <img :src="element.img" alt="">
                <div class="right">
                    <p>{{element.author}}</p>
                    <p>{{element.time}}</p>
                </div>
            </div>
            <div class="content">
                <h3>{{element.title}}</h3>
                <p>{{element.article}}</p>
            </div>
            <div class="botton">
                <span>
                    <i class="iconfont">&#xe614;</i>{{element.fenxiang}}
                </span>
                <span>
                    <i class="iconfont">&#xe60b;</i>{{element.pinglun}}
                </span>
                <span>
                    <i class="iconfont">&#xe63a;</i>{{element.zan}}
                </span>
            </div>
        </div> -->
        <Personal/>

    </div>
</template>
<script>
import topTitle from "../../components/ThreeHeader/index"
import Personal from "../../components/Mines/personal/personal"

export default {
    name:"Collection",
    data(){
        return{
            collectionData:""
        }
    },
    mounted(){
        this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            this.collectionData=data.data;
            console.log(this.collectionData)
        })
        .catch(error =>{
            console.log(error)
        })
    },
    components:{
        topTitle,
        Personal
    }
}
</script>
<style lang="less" scoped>
// .boxs{
//     background-color: #E5E5E5;
//     .box{
//         margin-bottom: 10px;
//         background-color: #fff;
//         .top{
//             width: 100%;
//             height: 50px;
//             img{
//                 width: 40px;
//                 float: left;
//             }
//             .right{
//                 width: 200px;
//                 float: left;
//             }
//         }
//         .content{
//            p{
//                 display: -webkit-box;
//                 -webkit-box-orient: vertical;
//                 -webkit-line-clamp: 7;
//                 overflow: hidden;
//                 margin: 5px  0;
//             }

//         }
//         .botton{

//         }

//     }
// }


// .botton{
//             width: 100%;
//             height: 30px;
//             line-height: 30px;
//             display: flex;
//             border-top: 1px solid #E5E5E5;
//             span{
//                 flex: 1;
//                 text-align: center;
//                 i{
//                     color: green;
//                     font-weight: 700
//                 }
//             }
//         }

</style>

