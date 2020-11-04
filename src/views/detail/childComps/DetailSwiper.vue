<template>
  <swiper class="swiper-h">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style>
.swiper-h {
  height: 300px;
}
</style>