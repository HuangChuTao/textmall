import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

//安装toast插件
import toast from './components/common/toast/index'
import Fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.use(toast)

Vue.config.productionTip = false

//调用attach函数解决移动端300mm延迟问题
Fastclick.attach(document.body)

//安装Vuelazyload插件实现图片懒加载
Vue.use(VueLazyLoad, {
  //使用占位图
  loading: require('./assets/img/common/placeholder.png')
})

Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
