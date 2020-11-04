<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="newP">
      <div class="start"></div>
      <div class="newP-desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div
      v-for="item in detailInfo.detailImage"
      :key="item.index">
      <span>{{ item.key }}</span>
      <div>
        <img
          class="newP-img"
          v-for="imgItem in item.list"
          :key="imgItem"
          :src="imgItem"
          alt=""
          @load="imgLoad"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      imgLength: 0,
      message: 0
    }
  },
  methods: {
    imgLoad() {
      //监听图片加载完发送事件
      // 方法一：
      // this.message++
      // if (this.message === this.imgLength) {
      //   this.$emit("imgLength")
      // }
    // 方法二：
    this.$emit('imgLoad')
    }
  },
  watch: {
    //监听图片数量并动态获取
    imgLength() {
      this.imgLength = this.detailInfo.detailImages[0].list.length
    }
  }
};

</script>

<style>
.detail-goods-info {
  margin-top: 80px;
  border-bottom: 5px solid #f2f5f8;
}
.detail-goods-info .newP {
  overflow: hidden;
}

.detail-goods-info .newP .start,
.detail-goods-info .newP .end {
  position: relative;
  width: 90px;
  height: 1px;
  margin-bottom: 10px;
  background-color: rgb(70, 67, 67);
}

.detail-goods-info .newP .start {
  display: inline-block;
}

.detail-goods-info .newP .end {
  float: right;
  margin-top: 10px;
  background-color: rgb(70, 67, 67);
}

.detail-goods-info .newP .start::before,
.end::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 5px;
  height: 5px;
  background-color: #333;
}

.detail-goods-info .newP .end::after {
  right: 0;
}

.newP-img {
  width: 100%;
}
</style>