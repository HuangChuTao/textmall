<template>
  <div class="detail-base-info" v-if="Object.keys(goods).length !== 0">
    <div class="base-title">{{ goods.title }}</div>
    <div class="base-price">
      <span class="newPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="discount" v-if="goods.discount">{{ goods.discount }}</span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.columns[2] }}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index].icon" alt="" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-title {
  font-weight: 600;
  font-size: 16px;
  padding: 0 5px 0 5px;
}
.base-price {
  margin-top: 10px;
  height: 15px;
}
.newPrice {
  font-size: 18px;
  color: pink;
  padding-right: 3px;
}
.oldPrice {
  font-size: 10px;
  color: #ccc;
  text-decoration: line-through;
  padding-right: 5px;
}
.discount {
  position: relative;
  top: -8px;
  background-color: pink;
  border-radius: 16px;
  padding: 5px;
  padding-bottom: 5px;
}
.columns {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #ccc;
  margin-top: 20px;
  padding: 0 5px;
}
.services {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin: 40px 0;
}
.services span {
  font-size: 12px;
}
.services img {
  width: 12px;
}
</style>