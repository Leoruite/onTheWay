<template>
    <div>
        <h3>{{detailData.title}}</h3>
        <p>&emsp;&emsp;{{detailData.article}}</p>

        hahhah 
    </div>
</template>
<script>
export default {
    name:"WenZhangDetail",
    data(){
        return{
            detailData:''
        }
    },
     mounted(){
         this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            for(var i=0;i<data.data.length;i++){
                if(data.data[i].id==this.$route.params.id){
                    this.detailData = data.data[i]
                    console.log(detailData.title)
                }
            }
            console.log(this.detailData)
        })
        .catch(error =>{
            console.log(error)
        })
        console.log(this.$route.params.id)
    }
}
</script>
<style lang="less" scoped>
h3{
    text-align: center;
    margin: 20px;
    font-size: 20px;
    color: black;
}
p{
    color: black;
    line-height: 26px;
}

</style>

