<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <scroll class="centers" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'


import {mapGetters} from 'vuex'
import Scroll from '@/components/common/scroll/Scroll'
export default {
  name: 'Shopcart',
  computed: {
    //用法一：
    // ...mapGetters(['cartLingth'])
    //用法二：
    ...mapGetters({
      length: 'cartLingth'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .centers {
    height: calc(100% - 135px);
    overflow: hidden;
  }
</style>