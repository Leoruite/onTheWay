<template>
    <div>
        <TopSearch />
        <el-tabs class="boxs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="box" label="赞" name="first">
            <ZanIndex />
            </el-tab-pane>
            <el-tab-pane class="box" label="文章" name="second">
                <WenZhang :zanData="zanData"/>

            </el-tab-pane>
            <el-tab-pane class="box" label="视频" name="third">
                <ShiPin :zanData="zanData"/>
            </el-tab-pane>
        </el-tabs>
    </div>
    
</template>
<script>
import ZanIndex from "../../components/Mines/zan/ZanIndex"
import WenZhang from "../../components/Mines/zan/WenZhang"
import ShiPin from "../../components/Mines/zan/ShiPin"
import Personal from "../../components/Mines/personal/personal"
import TopTitle from "../../components/Mines/topTitle"
import TopSearch from "../../components/Mines/TopSearch"
export default {
    name:"zan",
    data() {
      return {
        activeName: 'second',
        zanData:[]
      };
    },
    components:{
        ZanIndex,
        WenZhang,
        ShiPin,
        Personal,
        TopTitle,
        TopSearch
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    mounted(){
        this.$axios.get(this.HOST+'/personalData')
        .then(data =>{
            this.zanData=data.data;
            console.log(this.zanData)
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
</script>
<style lang="less" scoped>
template{
    .boxs{
        display: flex;
        .boxs{
            flex: 1;
        }
    }
    

}

</style>

