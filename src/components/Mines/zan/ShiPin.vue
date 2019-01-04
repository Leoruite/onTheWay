<template>
    <div>
        <div v-for="(element,index) in zanData" :key="index">
            <video :src="element.video"  loop controls :poster="element.video_img"></video>
            <p class="pl">{{element.video_comment}}</p>
            <p>
                <img :src="element.img" alt="">
                <span class="author">{{element.author}}</span>
                <span class="right">
                    <span>
                        <i class="iconfont">&#xe614;</i>
                    </span>
                    <span>
                        <i class="iconfont">&#xe60b;</i>
                    </span>
                    <span>
                        <i class="iconfont">&#xe63a;</i>
                    </span>
                </span>
            </p>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"ShiPin",
    props:{
        zanData:{
             type:Array,
             require:true,
             default:function(){
                 return[]
             }
        }
       
    }

}
</script>
<style lang="less" scoped>
div{
    padding: 0 10px;
    div{
        video{
            width: 100%;
        }
        .pl{
            margin: 10px 0;
        }
        img{
            width: 35px;
        }
        .right{
            float: right;
            span{
                margin-left: 20px;
                i{
                    color: #9ED1A3;
                    font-weight: 700;
                    font-size: 15px;
                }
            }
        }
            

    }
}

</style>
