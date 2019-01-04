<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane :label="labels[0]" name="first">
      <slot name='List1'></slot>
    </el-tab-pane>
    <el-tab-pane :label="labels[1]" name="second">
      <slot name='List2'></slot>
    </el-tab-pane>
    <el-tab-pane :label="labels[2]" name="third">
      <slot name='List3'></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    props: {
       labels:{
          type: Array,
          default: []
       }
    },
    methods: {
      handleClick(tab, event) {
      //   console.log(tab, event);
      }
    }
  };
</script>


<style lang="less">
.el-tabs__nav{
  width: 100%;
  background-color: #fff;
  display:flex;
  padding-bottom: 10/75rem;
  
  .el-tabs__item{
    flex:1;
    text-align: center;
    font-size: 36/75rem;
    font-family: "苹方";
    line-height: 88/75rem;
    padding-bottom: 13/75rem;
    }
  .el-tabs__item:focus{
        outline: none;
  }
  .el-tabs__item:hover{
    color:#7dd19c;
  }
  #tab-first,#tab-second,#tab-third{
    border:none;
  }
  .is-active{
    color: #7dd19c;
    font-weight: 700;
    
  }
  
  .el-tabs__item:after{
    content:"";
    display: block;
    width: 100/75rem;
    height: 4/75rem;
    border-radius: 4/75rem;
    background-color:#5dade2;
    position: relative;
    top: -16/75rem;
    left: 34/75rem;
    opacity: 0;
  }
  .is-active:after{
    opacity: 1;
  }
}
</style>
