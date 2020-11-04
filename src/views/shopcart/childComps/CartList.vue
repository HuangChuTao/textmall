<template>
  <div>
    <cart-list-item 
    v-for="(item, index) in cartList" 
    :key="index" 
    :product="item" />
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import {mapGetters} from 'vuex'
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    CartListItem
  }
}
</script>

<style>

</style>