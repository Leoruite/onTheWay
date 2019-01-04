<template>
    <div class="body">
        <div class="box">
            <i class="iconfont i1">&#xe67e;</i>
            <input class="inp1" ref="username" type="text"  placeholder="请输入已注册手机号或邮箱">
        </div>
        <div class='box'>
             <i class="iconfont i1">&#xe619;</i>
            <input class="inp2" v-if="state === '1'" type="password" ref='password' placeholder="请输入密码">
            <input class="inp22" v-if="state === '2'" type="password" ref='password' placeholder="请输入验证码">
            <span v-if="state === '1'" class="right-span">忘记密码</span>
            <button  v-if="state === '2'" class="right-bt">发送验证码</button>
        </div>
        <p>
            <!-- <router-link to="login2" > -->
                <button v-if="state === '1'"  @click="dlHandler">登录</button>
                <button v-if="state === '2'"  @click="zcHandler">注册</button>
            <!-- </router-link> -->
        </p>
        <div class="button">
            <p class="p1">说明:注册/登录代表你已经同意《路上用户协议》</p>
            <p class="p2">第三账号登录</p>
            <p class="p3">
                <i class="iconfont">&#xe506;</i>
                <i class="iconfont">&#xe6e8;</i> 
                <i class="iconfont">&#xe60d;</i>
            </p>
        </div>
    </div>
</template>
<script>
import { mapState,mapMutations,mapActions } from 'vuex'
import * as mutationTypes from "../../../store/mutations/mutation-types.js"
var qs = require('qs')
export default {
    name:"LoginBody",
     
    data(){
       return{
            flag:'',
            username:'',
            touxiang:'',
            jianjie:'',
            fensi:'',
            guanzhu:''
       }
    },
    props:{
        span:{
            type:String,
            require:true
        },
        state:{
            type:String,
            require:true
        }
    },
    methods:{
        ...mapMutations([mutationTypes.USERNAME]),
        ...mapMutations([mutationTypes.TOUXIANG]),
        ...mapMutations([mutationTypes.JIANJIE]),
        ...mapMutations([mutationTypes.FENSI]),
        ...mapMutations([mutationTypes.GUANZHU]),
        ...mapMutations([mutationTypes.CITY]),
        ...mapMutations([mutationTypes.GENDER]),
        dlHandler(event){
            // this.$emit("getData",this.flag)
            const username = this.$refs.username.value;
            const password = this.$refs.password.value;
            this.params = {username: username,password: password}
            this.handler2();
            // this.username = this.$refs.username.value;
            // console.log(username)
            this[mutationTypes.USERNAME](username);
           
            this.$axios.post(this.HOST+'/login',qs.stringify({
                params: this.params
            }))
            .then(res =>{
                if(res.data.flag){
                    console.log(res.data.resdata)
                    
                    this.touxiang = res.data.resdata[0].touxiang
                    this.jianjie = res.data.resdata[0].jianjie
                    this.fensi = res.data.resdata[0].fensi
                    this.guanzhu = res.data.resdata[0].guanzhu
                    this.city = res.data.resdata[0].city
                    this.gender = res.data.resdata[0].gender

                    this[mutationTypes.TOUXIANG](this.touxiang);
                    this[mutationTypes.JIANJIE](this.jianjie);
                    this[mutationTypes.FENSI](this.fensi);
                    this[mutationTypes.GUANZHU](this.guanzhu);
                    this[mutationTypes.CITY](this.city);
                    this[mutationTypes.GENDER](this.gender);
                    
                    this.$router.push("login2")
                }else{
                    alert('用户名或密码错误')
                }
            })
            .catch(error=>{
                console.log("对不起 出错了"+error)
            })
            console.log(this.$refs.username.value)
             // 清空文本框
            this.$refs.username.value = ''
            this.$refs.password.value = ''
            
        },
        zcHandler(event){
            const username = this.$refs.username.value;
            const password = this.$refs.password.value;
            this.params = {username: username,password: password}

            

            this.$axios.post(this.HOST+'/register',qs.stringify({
                params: this.params
            }))
            .then(res =>{
                if(res.data.flag){
                    console.log(res.data)
                    this.flag = res.data.flag;
                    console.log(this.flag)
                    alert('注册成功')
                    // this.$router.push("login")
                }else{
                    alert('注册失败')
                    
                }
                this.flag=res.data.flag
            })
            .catch(error=>{
                console.log("对不起 出错了"+error)
            })
            // 清空文本框
            this.$refs.username.value = ''
            this.$refs.password.value = ''
           

        },
        handler2(){
            this.$emit("getData")
        }
        

    }
    
}
</script>

<style lang="less" scoped>
.body{
    width: 100%;
    height: 9.76rem;
    padding: 0 10px;
    background-color: #fff;
    box-sizing: content-box;
    text-align: center;
    font-size: 24/75rem;
    .box{
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
        border-bottom: 1px solid #8FB5DE;
        position: relative;
        .i1{
            float: left;
            color: #C1D4EB;
            font-size: 20px;
        }
    }
    .d2{
        color: red
    }
    .inp1{
        float: left;
        margin: 10px 0 10px 10px;
        width: 70%;
        height: 30px;
        // font-size: 24/75rem;
    }
    .inp2{
        float: left;
        margin: 10px 0 10px 10px;
        width: 70%;
        height: 30px;
    }
    .inp22{
        float: left;
        margin: 10px 0 10px 10px;
        width: 50%;
        height: 30px;
    }
    input::-webkit-input-placeholder {
         color: #8FB5DE;
         font-size: 14px;
    }
    .right-span{
        position: absolute;
        right: 10px;
        top:0;
        color: #8FB5DE;
        font-size: 14px;
        font-weight: 200;

    }
    .right-bt{
        width: 70px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 15px;
        border: 1px solid #72A3D8;
        background-color: #DDEBF8;
        color: #8FB5DE;
        border-radius: 5px;
        
    }
    p{
        button{
            width: 200px;
            height: 30px;
            background-color: #6FA2D7;
            margin-top: 85/75rem;
            border-radius: 5px;
            color: #fff;
        }
    }
    .button{
        margin-top: 150/75rem;
        .p1{
            color: #6FA2D7;
            font-size: 12px;
            margin-top: 80px;
        }
        .p2{
            color: #6FA2D7;
            font-size: 12px;
            margin: 15px 0;
        }
        .p3{
            display: flex;
            i{
                font-size: 30px;
                color: #6FA2D7;
                flex: 1;
                }
        }
        

    }
    
}

</style>

