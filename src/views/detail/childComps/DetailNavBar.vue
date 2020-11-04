<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div class="title-item" 
             v-for="(item, index) in titles"
             :key="item.index"
             :class="{activ: index === currentIndex}" 
             @click="titleClick(index)">{{ item }}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    //1.监听标题点击
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick', index)
    },
    //2.监听返回箭头点击
    backClick() {
      this.$router.go(-1)
    }

  },
  components: {
    NavBar
  }
}
</script>

<style>
.title {
  display: flex;
}
.title-item {
  flex: 1;
}

.activ {
  color: red;
}

.back {
  margin: 6px 0 0 14px;
}
</style>