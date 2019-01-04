<template>
  <div>
    <PublicHeader/>
    <Banner :bannerImg="bannerImg" path="homedetail"/>

    <ListBanner title="自然景观" :banners="Natural" class="natural" path="homemore"/>

    <ListBanner title="人文景观" :banners="Humanities" path="homemore"/>

    <ListBanner title="田园风景" :banners="Pastoral" class="pastoral" path="homemore"/>

    <FooterNav/>
  </div>
</template>
<script>
import PublicHeader from "../../components/PublicHeader/index";
import FooterNav from "../../components/FooterNav/index";
import Banner from "../../components/Home/HomeBanner/index";
import ListBanner from "../../components/ListBanner/index";
export default {
  name: "Home",
  components: {
    FooterNav,
    Banner,
    ListBanner,
    PublicHeader
  },
  data() {
    return {
      bannerImg: [],
      Humanities: [],
      Natural: [],
      Pastoral: []
    };
  },
  mounted() {
    this.$axios
      .get(this.HOST + "/homeBanner")
      .then(res => {
        this.bannerImg = res.data;
        console.log(this.bannerImg);
      })
      .catch(error => new Error(error));

    this.$axios
      .get(this.HOST + "/homeList")
      .then(res => {
        this.Natural = res.data.natural;
        this.Humanities = res.data.humanities;
        this.Pastoral = res.data.pastoral;
        console.log(res.data);
      })
      .catch(error => new Error(error));
  }
};
</script>
<style lang="less" scoped>
.pastoral {
  margin-bottom: 25%;
}
.natural {
  margin-top: 0.6rem;
}
</style>
