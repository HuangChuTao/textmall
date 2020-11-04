<template>
  <div class="cart-list-item">
    <div class="item-img">
    <check-button class="btn"
     :ischecked="product.checked"
      @click.native="checkClick" />
      <img :src="product.image" alt="" />
      <p class="item-title">{{ product.title }}</p>
      <p class="item-desc">{{ product.desc }}</p>
      <span class="item-price">￥{{ product.price }}</span>
      <span class="item-count">x{{ product.count }}</span>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style scoped>
  .cart-list-item {
    margin-top: 10px;
    border-bottom: 5px solid #f2f5f8;
    height: 126px;
  }

  .item-img {
    /* margin-left: 10px; */
  }

  .item-img img {
    float: left;
    width: 95px;
    height: 120px;
  }

  .item-title {
    font-weight: 700;
  }

  .item-title,.item-desc {
    /*1.先强制一行内显示文本*/
    white-space:nowrap;
    /*2.超出的部分隐藏*/
    overflow : hidden;
    /*3.文字用省略号替代超出的部分*/
    text-overflow: ellipsis;
    padding-left: 13px;
    padding-bottom: 15px;
  }
  .item-price {
    position: relative;
    bottom: -18px;
    left: 13px;
    font-size: 18px;
    color: var(--color-tint);
  }
  .item-count {
    position: relative;
    bottom: -18px;
    right: -160px;
    font-size: 18px;
    font-weight: 700;
  }

  .btn {
    /* position: relative;
    top: 48px;
    left: -114px; */
    float: left;
    line-height: 126px;
  }
</style>