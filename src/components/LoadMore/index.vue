<template>
   <div>
      <div ref='wrapper'>到底部了</div>
   </div>
</template>

<script>
   export default {
      name: 'LoadMore',
      props:{
         loadData:{
            type: Function,
            required: true

         }
      },
      mounted(){
         const loadData = this.loadData
         //获取视口的高度
         const screenHeight = window.screen.height
         //获取底部元素
         const wrapper = this.$refs.wrapper
         //声明延时器
         let timer;

         //定义collback
        function callback(){
           //获取底部元素距离上边的高度(放在这里,而不是放在滚动事件里是因为const是块级作用域,外部读取不到)
           const currentTop =wrapper.getBoundingClientRect().top
            if(currentTop <= screenHeight+40){
               loadData()
            }
        }

         //添加滚动事件
         window.addEventListener('scroll',function(){
           //解决反复加载的问题
           if(timer){
              clearTimeout(timer)
           }
           timer = setTimeout(function(){
              callback()
           },50)
        })

        
      }
   }
</script>

<style scoped>

</style>