import Toast from './Toast'

const obj = {}

obj.install = function(Vue) {
  // console.log('toast插件执行了');
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  //2.创建组件对象，new一下组件构造器
  const toast = new toastContrustor()

  //3.将组件对象，手动挂载到某一元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj