import Vue from 'vue'
import Router from 'vue-router'
import Guide from '../containers/Guide/index.vue'
import Home from "../containers/Home/index.vue"
import Strategy from "../containers/Strategy/index.vue"
import Friend from "../containers/Friend/index.vue"
import Mine from "../containers/Mine/index.vue"
import Found from '../containers/Found/index.vue'

// -------------------------Strategy页面----------------------------------
import TypeTab from '../containers/Strategy/TypeTab'
import MoreTab from '../containers/Strategy/MoreTab'
import ScenicSpot from '../containers/Strategy/ScenicSpot'
import Search from '../containers/Strategy/Search'
import Detail from '../containers/Strategy/Detail'
import HotMore from '../containers/Strategy/HotMore'
import HotDetail from '../containers/Strategy/HotDetail'
import StrategyComment from '../containers/Strategy/Comment'
Vue.use(Router)

// -----------------------Home页面-----------------------------
import HomeDetail from "@/containers/Home/HomeDetail/index"
import HomeMore from "@/containers/Home/HomeMore/index"
import DetailsPage from "@/containers/Home/DetailsPage/index"


// -----------------------Mine页面-----------------------------
import Login from "../containers/Mine/login"
import Login2 from "../containers/Mine/Login2"
import PerHome from "../containers/Mine/PersonalHome"
import Information from "../containers/Mine/information"
import Zan from "../containers/Mine/zan"
import SetUp from "../containers/Mine/SetUp"
import Attention from "../containers/Mine/Attention"
import Collection from "../containers/Mine/Collection"
import WenZhangDetail from  "../components/Mines/zan/wenzhangDetail"
import Chitchat from "../components/Friends/Chitchat"
import MinesComment from "../components/Mines/zan/comment"


// -----------------------Found页面-----------------------------
import GuanZhu from "../containers/Found/GuanZhu"
import Fawen from "../containers/Found/Fawen/index.vue"
import pengyouquan from "../components/Found/Share/pengyouquan.vue"
import qqkongjian from "../components/Found/Share/qqkongjian.vue"
import qq from "../components/Found/Share/qq.vue"
import weixin from "../components/Found/Share/weixin.vue"



export default new Router({
  linkActiveClass:"active",
  routes: [
    // --------------------------公共--------------------------
    {
      path: '/',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    },
    // 这个是发现的路由
    {
      path: '/found',
      name: 'Found',
      component: Found
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },

    // -------------------------Strategy页面--------------------------
    {
      path: '/typetab',
      name: 'TypeTab',
      component: TypeTab
    },
    {
      path: '/moretab',
      name: 'MoreTab',
      component: MoreTab
    },
    {
      path: '/scenicspot/:cityName',
      name: 'ScenicSpot',
      component: ScenicSpot
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/detail/:key',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hotmore',
      name: 'HotMore',
      component: HotMore
    },
    {
      path: '/hotdetail/:id',
      name: 'HotDetail',
      component: HotDetail
    },
    {
      path: '/comment/:id',
      name: 'StrategyComment',
      component: StrategyComment
    },

    // ----------------------------Home页面----------------------------

    {
      path: '/homedetail',
      name: 'HomeDetail',
      component: HomeDetail
    },
    {
      path: '/homemore',
      name: 'HomeMore',
      component: HomeMore
    },
    {
      path: '/detailspage',
      name: 'DetailsPage',
      component: DetailsPage
    },  

    // ----------------------------Mine页面----------------------------
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login2',
      name: 'Login2',
      component: Login2
    },
    {
      path: '/personlhome',
      name: 'PerHome',
      component: PerHome
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/zan',
      name: 'Zan',
      component: Zan
    },
    {
      path: '/setup',
      name: 'SetUp',
      component: SetUp
    },
    {
      path: '/attention',
      name: 'Attention',
      component: Attention
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/wenzhangdetail',
      name: 'WenZhangDetail',
      component: WenZhangDetail
    },
    {
      path: '/chitchat',
      name: 'Chitchat',
      component: Chitchat
    },
    {
      path: '/comment',
      name: 'MinesComment',
      component: MinesComment
    },


    // ----------------------------Found页面----------------------------
    {
      path: '/guanzhu',
      name: 'GuanZhu',
      component: GuanZhu
    },
    {
      path:'/fawen',
      name:'Fawen',
      component:Fawen
    },
    {
      path:'/pengyouquan',
      name:'pengyouquan',
      component:pengyouquan
    },
    {
      path:'/qqkongjian',
      name:'qqkongjian',
      component:qqkongjian
    },
    {
      path:'/qq',
      name:'qq',
      component:qq
    },
    {
      path:'/weixin',
      name:'weixin',
      component:weixin
    }
  ]
})
