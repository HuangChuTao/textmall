<template>
  <div class="recommend">
      <div v-for="item in recommends" :key="item.index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{ item.title }}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    text-align: center;
    justify-content: space-around;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend img {
      flex: 1;
      width: 68px;
      margin-bottom: 5px;
  }

</style>