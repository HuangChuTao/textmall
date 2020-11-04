<template>
  <div class="detail-bottom-bar">
    <div class="bar_item">
      <i class="icon service"></i>
      <span>客服</span>
    </div>
        <div class="">
      <i class="icon shop"></i>
      <span>店铺</span>
    </div>
        <div class="">
      <i class="icon collect"></i>
      <span>收藏</span>
    </div>
    <div class="trolley">
      <span class="text" @click="addCart">加入购物车</span>
    </div>
    <div class="buy">
      <span class="text">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style>
  .detail-bottom-bar {
    display: flex;
    position: relative;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    background-color: #fff;
  }

  .text {
    line-height: 49px;
    
  }

  .detail-bottom-bar div {
    flex: 1;
    font-size: 14px;
    text-align:center;
}

  .detail-bottom-bar div i {
    margin: 5px auto 0;

  }

  .icon {
    display: block;
    width: 22px;
    height: 22px;
    /* margin: 10px auto 3px; */
    background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
  }

  .service {
    background-position:0 -54px;
  }

  .shop {
    background-position:0 -98px;
  }

  .trolley {
    background-color: #ffe817;
  }

  .buy {
    background-color: #f69;
  }
</style>