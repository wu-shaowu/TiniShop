import Vue from 'vue'
import App from './App.vue'
//全局组件
//全局组件：第一个参数 组件名字  第二个参数：那个组件
import TypeNav from '../src/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
import Pagination from '/src/components/Pagination'
Vue.component(Pagination.name,Pagination)
// import Carousel from '../src/components/Carousel'
// Vue.component(Carousel.name,Carousel)

import router from './router'

import store from '../src/store'
import 'swiper/css/swiper.css'
//引入虚拟接口
import '/src/mock/mockServe'
//饿了吗全体引入和样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(router);
//图片懒加载
import VueLazyload from 'vue-lazyload'
import lazy from './assets/images/lazy.jpg'
 Vue.use(VueLazyload,{
   //懒加载默认图片
   loading:lazy,
 })
 //引入自定义插件
 import './plugings/validate.js';
Vue.config.productionTip = false
//统一接口的api文件夹里面的函数
import * as API from './api'

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
    //全局可用接口
    Vue.prototype.$API = API;
  },
  router,
  store
}).$mount('#app')
