<template>
  <div class="goods-list-item">
    <div class="ch">
      <img v-lazy="showImage" @load='imgLoad' @click="itemClick">
    <p class="title">{{ goods_item.title }}</p>
    <span class="price">{{ goods_item.price }}</span>
    <span class="collect">{{ goods_item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
      goods_item: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  methods: {
    //监听并发射图片加载完成事件
    imgLoad() {
      this.$bus.$emit('ItemImgLoad')
      
      // if (this.$route.path.indexOf('/home') !=-1) {
      //   this.$bus.$emit('ItemImgLoad');
      // } else if (this.$route.path.indexOf('/detail') !=-1) {
      //   this.$bus.$emit('detailItemImgLoad')
      // }
    },
    //2.监听点击跳转详情页
    itemClick() {
      // console.log('点击详情');
      this.$router.push('/detail/' + this.goods_item.iid)
    }
  },
  computed: {
    showImage() {
      return this.goods_item.image || this.goods_item.show.img
    }
  }
}
</script>

<style>
  .goods-list-item {
    width: 48%;
    font-size: 12px;
    text-align: center;
  }
  .goods-list-item img {
    width: 100%;
  }
  .goods-list-item .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .goods-list-item .price {
    color: var(--color-high-text);
    padding-right: 3px;
  }

   .goods-list-item .collect::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: bottom;
    background: url("~@/assets/img/common/collect.svg");
    background-size: 14px;
  }
</style>