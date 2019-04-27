/**
 * 入口js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'



// 创建vue实例

new Vue({
    el:'#app',
    render: h => h(App),
    router
})