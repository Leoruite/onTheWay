<template class="hidden">
    <div class="collection-block">
            <div class="block-padding" v-for="(element,index) in dtdata" :key="index">
                <div class="top-nav">
                    <img class="touxiang" @click="denglvClick" :src="element.img" alt="">
                    <div class="yh-name">
                        <h3>{{element.uesrname}}</h3>
                        <p>{{element.title}}</p>
                    </div>
                    <router-link to="/guanzhu" class="focus">+关注</router-link>
                </div>
                 <h3 class="block-text">{{element.content}}</h3>
                <ul class="tp_ul" v-if="element.tpImg">
                    <li v-if="element.tpImg.tpImg1"><img class="tpimg" :src="element.tpImg.tpImg1" alt=""></li>
                    <li v-if="element.tpImg.tpImg2"><img class="tpimg" :src="element.tpImg.tpImg2" alt=""></li>
                    <li v-if="element.tpImg.tpImg3"><img class="tpimg" :src="element.tpImg.tpImg3" alt=""></li>
                </ul>
                <div class="bottom-nav">
                    <div @click="clickHandler" class="share">
                        <img src="@/assets/imgs/share.png" alt="">
                        {{element.shares}}
                    </div>
                    <router-link to="/fawen" class="share">
                        <img src="@/assets/imgs/infromation.png" alt="">
                        {{element.talk}}
                    </router-link>
                    <div v-if="!flagz" class="share">
                        <img @click="dianzanHandle" src="@/assets/imgs/Fabulous.png" alt="">
                        {{element.dianzan}}
                    </div>
                    <div v-else class="share">
                        <img @click="dianzanHandle" src="@/assets/imgs/Fabulous.png" alt="">
                        {{element.dianzan+1}}
                    </div>
                </div>

            
                     
        </div>
        <div v-if="hidden" class="box">
                <ul class="fxBox">
                    <li>
                        <img src="@/assets/imgs/qun.png" alt="">
                        <p>大厅群聊</p>
                    </li>
                    <li>
                        <router-link to="/weixin">
                            <img src="@/assets/imgs/weixin.png" alt="">
                        </router-link>
                        <p>微信</p>
                    </li>
                    <li>
                        <router-link to="/qq">
                            <img src="@/assets/imgs/qq.png" alt="">
                        </router-link>
                        <p>QQ</p>
                    </li>
                    <li>
                        <el-button type="text" @click="open">
                            <img src="@/assets/imgs/weibo.png" alt="">
                        </el-button>
                        <p>微博</p>
                    </li>
                    <li>
                        
                            <img src="@/assets/imgs/lianjie.png" alt="">
                        
                        <p>复制链接</p>
                    </li>
                    <li>
                        <router-link to="/pengyouquan">
                            <img src="@/assets/imgs/朋友圈.png" alt="">
                        </router-link>
                        <p>朋友圈</p>
                    </li>
                    <li>
                        <router-link to="/qqkongjian">
                            <img src="@/assets/imgs/qqkongjian.png" alt="">
                        </router-link>
                        <p>QQ空间</p>
                    </li>
                    <li>
                        <img @click="zhaunfa" src="@/assets/imgs/转发.png" alt="">
                        <p>转发</p>
                    </li>
                </ul>
            </div> 
        <!-- <div >
                <div class="xinlangwb">
                    <div class="wrap">
                        <div class="title">分享到新浪微博</div>
                        <div class="tx">
                            <img src="../assets/imgs/wozanguode_02.png" alt="">
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

            </div> -->
    </div>
</template>
<script>
export default {
    name:"DtList",
    data(){
        return{
            lushang_list:[],
            dtdata:'',
            hidden:false,
            // hidden2:false
            flagz:false
        };
    },
    methods:{
        clickHandler(){
            this.hidden = !this.hidden
            
        },
        open(){
            // this.hidden2 = !this.hidden2
            // this.$emit("getData")
            this.$alert('分享成功！', '分享到新浪微博', {
            confirmButtonText: '确定'
            
        });
        },
        dianzanHandle(){
            this.flagz = !this.flagz;
        },
        denglvClick(){
            if(this.$router.username){
                this.$router.push("/login")
            }else{
                this.$router.push("/mine")
            }
        },
        quxiaoclick(){
            this.hidden2 = !this.hidden2
        },
        fabiaoHandel(){
            alert("分享成功！")
        },
        zhaunfa(){
            alert("转发成功！")
        },
        fuzhi(){
            alert("复制成功！")
        }
    },
    mounted(){
       this.$axios.get(this.HOST+'/dating')
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
<style>
.collection-block{
    background-color: #fff;
    padding: 0 10px;
    margin-top: 15px;
    height: 680px;
    
}
.block-padding{
    float: left;
    border-bottom: 1px solid rgb(240, 240, 240);
}
.block-padding:nth-child(3){
    width: 100%;
}
.bottom-nav{
    display: flex;
    height: 40px;
    line-height: 40px;
    float: left;
    width: 100%;
    font-size: 14px;
    margin-bottom: 5px;
    color: #6B6B6B;
}

.bottom-nav img{
    width: 20px;
}
.share{
    flex: 1;
    text-align: center;
}
.share img{
    width: 20px;
}
.block-text{
    font-weight: normal;
    font-size: 16px;
    padding: 5px 0;
    color: #424242;
}
.top-nav{
    position: relative;
    margin-bottom: 5px;
    width: 100%;
    height: 40px;
    margin-top: 10px;
}
.touxiang{
    width: 40px;
    height: 40px;
    float: left;
}
.yh-name{
    float: left;
    margin-left: 10px;
    padding-top: 3px;
}
.focus{
    width: 50px;
    height: 20px;
    border: 1px solid #6BC990;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #6BC990;
    position: absolute;
    right: 0;
    top: 5px;
}
.yh-name>h3{
    font-weight: normal;
    color: #3D3D3D;
}
.yh-name>p{
    font-size: 12px;
    color: #6B6B6B;
}
.fxBox{
        position: fixed;
        width: 100%;
        height: 250px;
        float: left;
        left: 0;
        bottom: 0;
        background-color:#fff;
        z-index: 1000;
}
.fxBox li{
    float: left;
    text-align: center;
}
.fxBox img{
    width: 50px;
    margin: 20px 20px;
}

/* .xinlangwb{
    width: 80%;
    height: 200px;
    background-color: #fff;
    position: fixed;
    z-index: 999;
    top:40%;
    left: 35px;
    border-radius: 20px;
}
.wrap{
    padding: 20px 10px 0 10px;
    box-sizing: border-box;
    height: 150px;
}
.wrap>.title{
    color: rgb(177, 177, 177);
    font-size: 14px;
}
.wrap>p{
    font-size: 12px;
    margin-top: -5px;
}
.tx{
    margin-top: 10px;
    background-color: rgb(245, 245, 245);
}
.tx img{
    width: 40px;
}
.fx-ul{
    float: left;
    width: 300px;
    border-top: 1px solid rgb(231, 228, 228);
}
.fx-ul li{
    float: left;
    width: 149px;
    height: 42px;
    text-align: center;
    line-height: 42px;
}
.fx-ul li:first-child{
    border-right: 1px solid rgb(231, 228, 228);
    float: left;
} */
.tpimg{
    width: 110px;
}
.tp_ul{
    width: 100%;
    height: 100px;
    float: left;
}
.tp_ul li{
    width: 110px;
    height: 100px;
    float: left;
    margin-right: 5px;
    margin-top: 5px;
}
.el-message-box{
    width: 300px;
    border-radius: 10px;
}
.fxBox li:nth-child(4){
    margin-top: -12px;
}
</style>

