<template>
    <div class="hidden">
        <!-- <TopNav /> -->
        <DtList/>
        <DtList/>
        <!-- <DtList />
        <DtList /> -->
        <FooterNav />
        <!-- <Share/> -->
        <!-- <div class="mask" >
            <div class="window" :class="{'active':isActive,'error':true}">
                <div v-if="hidden2">
                <div class="xinlangwb">
                    <div class="wrap">
                        <div class="title">分享到新浪微博</div>
                        <div class="tx">
                            <img src="../../assets/imgs/wozanguode_02.png" alt="">
                        </div>
                        <br>
                        <br>
                        <br>
                        <p>100</p>
                    </div>
                    <ul class="fx-ul">
                            <li @click="quxiaoclick">取消</li>
                        <li @click="fabiaoHandel">分享</li>
                    </ul>
                </div>

            </div>
            </div>

        </div> -->
    </div>
</template>
<script>
import FooterNav from "@/components/FooterNav/index"
// import TopNav from "../../components/TopNav/index"
import DtList from "@/components/Found/DtList"
export default {
    name:"Dating",
    data(){
        return{
            isActive:true,
            // hidden2:false
        }
    },
    components: {
        FooterNav,
        // TopNav,
        DtList
       
    },
    methods:{
        quxiaoclick(){
            this.hidden2 = !this.hidden2
        },
        fabiaoHandel(){
            alert("分享成功！")
        }
        // open(){
        //     this.hidden2 = !this.hidden2
            
        //     console.log("kjkkjkj")
        // }
    }
   
}
</script>
<style lang="less" scoped>
.active{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 10000;
}
// .xinlangwb{
//     width: 80%;
//     height: 200px;
//     background-color: #fff;
//     position: fixed;
//     z-index: 99999;
//     top:40%;
//     left: 35px;
//     border-radius: 20px;
// }
// .wrap{
//     padding: 20px 10px 0 10px;
//     box-sizing: border-box;
//     height: 150px;
// }
// .wrap>.title{
//     color: rgb(177, 177, 177);
//     font-size: 14px;
// }
// .wrap>p{
//     font-size: 12px;
//     margin-top: -5px;
// }
// .tx{
//     margin-top: 10px;
//     background-color: rgb(245, 245, 245);
// }
// .tx img{
//     width: 40px;
// }
// .fx-ul{
//     float: left;
//     width: 300px;
//     border-top: 1px solid rgb(231, 228, 228);
// }
// .fx-ul li{
//     float: left;
//     width: 149px;
//     height: 42px;
//     text-align: center;
//     line-height: 42px;
// }
// .fx-ul li:first-child{
//     border-right: 1px solid rgb(231, 228, 228);
//     float: left;
// }

</style>

