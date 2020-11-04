<template>
  <div class="goods-list">
      <goods-list-item v-for="item in goods" :goods_item="item" :key="item.index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
  name: 'GoodsList',
  props: {
      goods: {
        type: Array,
        default() {
          return []
        } 
      }
  },
  components: {
      GoodsListItem
  },
}
</script>

<style>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
</style>