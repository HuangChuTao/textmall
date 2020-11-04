<template>
  <div class="cart-bottom-bar">
    <div class="all">
      <check-button 
      :ischecked="selectAll"
      @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:￥{{ totalPrice }}</span>
    </div>
    <div class="count" @click="countClick">
      <span>去结算: {{ checkLingth }}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
import {mapGetter, mapGetters} from 'vuex'
export default {
  name: 'CartBottomBar',
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLingth() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    selectAll() {
      if (this.cartList.length === 0) return false;
      //方法一：
      // return !(this.cartList.filter(item => !item.checked).length)
      //方法二：
      // return !(this.cartList.find(item => !item.checked))
      // 方法三：
      for (let item of this.cartList) {
        if (!item.checked) {
          return false
        }
      }
        return true
    }
  },
  methods: {
    checkClick() {
      if (this.selectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    countClick() {
      if (this.checkLingth === 0) {
          this.$toast.show('请添加商品', 1500)
      }
    }
  },
  components: {
    CheckButton
  }
}
</script>

<style>
  .cart-bottom-bar {
    position: relative;
    bottom: 0px;
    height: 40px;
    background-color: #ebebeb;
  }

  .all {
    display: inline-block;
    line-height: 40px;
  }

  .total {
    display: inline-block;
    padding-left: 30px;
  }

  .count {
    float: right;
    /* display: inline-block; */
    line-height: 40px;
    padding: 0 20px;

    /* width: 40px; */
    background-color: var(--color-high-text);
  }
</style>