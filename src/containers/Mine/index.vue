<template>
    <div class="mine">
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
    name:"Mine",
    components: {
        FooterNav,
        IndexHead,
        IndexBody
    },
}
</script>
<style scoped>
.mine{
    background-color: #E5E5E5
}

</style>
