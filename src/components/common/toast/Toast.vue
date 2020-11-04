<template>
  <div class="tost" v-if="isshow">{{ message }}</div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isshow: false
    }
  },
  // props: {
  //   message: String,
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  methods: {
    show(message='默认文字', duration=2000) {
      this.message = message
      this.isshow = true
      setTimeout(() => {
        this.isshow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style>
  .tost {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: rgba(0,0,0,0.8);
    color: #fff;
    padding: 12px;
    z-index: 99;
  }
</style>