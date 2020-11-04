<template>
      <Swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </swiper-item>
    </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper';

export default {
  name: "HomeShopcart",
  data() {
    return {
      isLoad: true
    }
  },
  props: {
      banners: {
          type: Array,
          default() {
              return []
          }
      }
  },
  methods: {
    imgLoad() {
      if(this.isLoad) {
        this.$emit('swiperImgLoad')
        this.isLoad = false
      }

    }
  },
  components: {
      Swiper,
      SwiperItem
  }
}
</script>

<style>

</style>