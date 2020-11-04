//导入常量
import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'


export default {
  //mutations唯一目的是修改state中的状态
  //mutations中的每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [ADD_TO_CART](state, payload) {
    //往模型中添加一个属性可以监听选中与否
    payload.checked = true
    state.cartList.push(payload)
  }
}