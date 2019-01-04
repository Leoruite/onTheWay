<template>
  <div id="app">
    <!-- 引导页 -->
  <router-view/>
   
  </div>
</template>

<script>
import './assets/font/iconfont.css'
import Guide from './containers/Guide'

export default {
  name: 'App',
  components:{
    Guide
  }
}
</script>

<style>
*{margin:0;padding:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-family: "苹方";}
img{border:none;max-width:100%;vertical-align:middle;}
body,p,form,input,button,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6{margin:0;padding:0;list-style:none;overflow-x:hidden}
h1,h2,h3,h4,h5,h6{font-size:100%;}
input,textarea{-webkit-user-select:text;-ms-user-select:text;user-select:text;-webkit-appearance:none;font-size:1em;line-height:1.5em;}
table{border-collapse:collapse;}
input,select,textarea{outline:none;border:none;background:none;}
a{outline:0;cursor:pointer;}
a:link,a:active{text-decoration:none;}
a:visited{text-decoration:none;}
a{text-decoration:none;-webkit-touch-callout:none;}
em,i{font-style:normal;}
li,ol{list-style:none;}
html{
  font-size: 75px;
}
hr{
  border:none;
  border-bottom: 1px solid #E6E6E6;
}
body{ margin:0 auto;max-width:1500px; min-width:320px;background-color: #E6E6E6;color:#000;height:100%;}
.clear{clear:both;height:0;font-size:0;line-height:0;visibility:hidden; overflow:hidden;}
.fl{float:left;}
.fr{float:right;}
a{color: #333;text-decoration: none}
.clearfix{overflow: hidden;clear: both;}
body{
  margin: 0;
  padding: 0;
  font-size: 16px;
}
</style>
