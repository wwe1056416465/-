import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
 import Msite from '../psges/Msite/Msite.vue'
 import Order from '../psges/Order/Order.vue'
 import Profile from '../psges/Profile/Profile.vue'
 import Search from '../psges/Search/Search.vue'
 import Login from '../psges/Login/login'

// 全局注册Vue-router组件
Vue.use(VueRouter)

export default new VueRouter({
    //  去掉地址中的哈希#
  mode: 'history',
    routes:[
        {
            path:'/msite',
            component:Msite,
            meta: {
                showFooter: true
              }
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/',
            redirect:'/msite'
        }
    ]
})