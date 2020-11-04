//导入常量
import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'


export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 3.使用数组方法find
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2.判断oldProduct有没有值
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit(ADD_COUNTER, oldProduct)
        resolve('购物车商品数量加1')
      } else {
        payload.count = 1;
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('商品成功添加到购物车')
      }
    })
  }
}