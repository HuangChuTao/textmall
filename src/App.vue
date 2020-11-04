<template>
<div>
  <main-tab-bar class="tab-bar"></main-tab-bar>
  <keep-alive exclude="Detail">
    <router-view></router-view>
  </keep-alive>
  

</div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'
// import MainTabBar from './components/content/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style scoped>
.tab-bar {
  z-index: 10;
}
@import 'assets/css/base.css'
</style>
