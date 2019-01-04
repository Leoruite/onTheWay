<template>
    <div>
        <PublicHeader type='分类'/>
        <ListBanner title='猜你喜欢' path='moretab' :banners='LovePic'/>
        <HotStartegy :commentData='commentData'/>
        <FooterNav />
    </div>
</template>
<script>
import FooterNav from "../../components/FooterNav/index"
import PublicHeader from "../../components/PublicHeader/index"
import ListBanner from '../../components/ListBanner/index'
import HotStartegy from '../..//components/Strategy/HotStrategy'
export default {
    name:"Strategy",
    data(){
        return{
            LovePic: [],
            commentData:[]
        }
    },
    mounted(){
        this.$axios.get(this.HOST+'/strategy')
        .then(res => {
           this.LovePic = res.data.LovePic
           console.log(this.strategyData)
           this.commentData = res.data.commentData
        })
        .catch(error => new Error(error))
    },
    components: {
        FooterNav,
        PublicHeader,
        ListBanner,
        HotStartegy
    },
}
</script>
<style scoped>

</style>