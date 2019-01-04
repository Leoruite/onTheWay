<template>
    <div class="mine">
        {{ this.$store.state.usernmae}}
        <IndexHead />
        <IndexBody />
        <FooterNav />
    </div>
</template>
<script>
import FooterNav from "../../components/FooterNav/index"
import IndexHead from "../../components/Mines/index/IndexHead"
import IndexBody from "../../components/Mines/index/IndexBody"
export default {
    name:"Login2",
    data(){
        return{
             flag:'2'
        }
       
    },
    // props:{
    //     usernmae:{
    //         style:String,
    //         dafault:"徐家郑"
    //     }
    // },
    components: {
        FooterNav,
        IndexHead,
        IndexBody
    }
}
</script>
<style scoped>
.mine{
    background-color: #E6E6E6
}

</style>
