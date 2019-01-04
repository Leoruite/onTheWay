<template>
    
    <div>
        <TopTitle ThreeTitle="评论"/>
        <textarea ref="tex" name="" id="" cols="20" rows="10" placeholder="请输入评论内容....."></textarea>
        <el-button type="text" @click="open">
             <!-- <button @click="queren">确认评论</button> -->
             确认
        </el-button>
       
    </div>
</template>
<script>
import TopTitle from "@/components/ThreeHeader"
export default {
    name:"Comment",
    data(){
        return{
            tex:''
        }
    },
    methods:{
        queren(){
            this.tex = this.$refs.tex.value 
            console.log(this.tex)
        },
        open() {
        this.$alert('评论成功', '评论', {
          confirmButtonText: '确定',
        });
        this.queren()
      }
    },
    components:{
        TopTitle
    }

}
</script>
<style lang="less" >
textarea{
    background-color: #fff;
    margin-top: 20px;
    width: 100%;

}
.el-message-box{
    margin-top: 30px;
    width: 300px;
    margin: 0 auto;
}
button{
    background-color: orange;
    float: right;
    width: 80px;
    height: 24px;
    border-radius: 6px;
}
</style>
