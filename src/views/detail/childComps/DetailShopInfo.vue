<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-logo">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="m-ms">
      <div class="m-message">
        <div class="m-left">
          <div class="c-fans">{{ shop.cFans | sellCountFilter}}</div>
          <div class="c-goods">{{ shop.cGoods }}</div>
        </div>
        <div class="m-right">
          <span>总销量</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="m-scroll">
        <table>
          <tr class="scroll" v-for="(item, index) in shop.score" :key="index">
          <th>{{ item.name }}</th>
          <td class="scroll-item ht" :class="{ scroll_item: item.isBetter }">
            {{ item.score }}
          </td>
          <td class="scroll-item" :class="{ scroll_item: item.isBetter }">
            {{ item.isBetter ? "高" : "低" }}
          </td>
        </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateilShopInfo",
  props: {
    shop: {
      type: Object,
      defualt() {
        return {};
      },
    }
  },
  filters: {
    sellCountFilter(value) {
      let result = value;
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + '万'
      }
      return result;
    }
  }
};
</script>

<style scoped>
.shop-logo {
  margin: 40px 0;
}
.shop-logo img {
  width: 47px;
  vertical-align: middle;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.m-ms {
  position: relative;
}
.m-message {
  position: relative;
  width: 43%;
  height: 40px;
  margin: 25px 0 0 15px;
  border-right: 1px solid #ccc;
}
.m-message .m-left .c-fans {
  position: absolute;
  top: 0;
  left: 0;
}
.m-message .m-left .c-goods {
  position: absolute;
  top: 0;
  right: 20%;
}
.m-message .m-right span:nth-child(1) {
  position: absolute;
  bottom: 0;
  left: 0;
}
.m-message .m-right span:nth-child(2) {
  position: absolute;
  bottom: 0;
  right: 5%;
}
.m-scroll {
  position: absolute;
  top: -22px;
  right: 0;
  width: 45%;
}
.m-scroll .scroll th {
  padding-right: 10px;
}
.m-scroll .scroll td {
  padding-right: 10px;
}
.m-scroll .scroll_item {
  color: red !important;
}
.m-scroll .scroll-item {
  color: green;
}
.ht {
  padding: 8px 0;
}
</style>