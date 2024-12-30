import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/icon/iconfont.css'
import 'lib-flexible'
import Element  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//导入配置好的国际化语言包
import i18n from './i18n' // Internationalization
  
Vue.use(Element, {
  size: 'medium', // set element-ui default size设置元素默认大小
  i18n: (key, value) => i18n.t(key, value)// 在注册Element时设置i18n的处理方法
})

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  //完全显示的时候加载
  preLoad: 1,
  //失败时显示的图片
  error: require('./assets/img/error.png'),
  //加载时显示的GIF图
  loading: require('./assets/img/loading.gif'),
  //尝试加载几次
  attempt: 1
});

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')