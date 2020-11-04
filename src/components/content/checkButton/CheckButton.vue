<template>
  <div class="btns">
    <img :class="{check: ischecked}" 
    src="@/assets/img/cart/tick.svg" 
    alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    ischecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btns {
  display: inline-block;
  padding: 0 4px;
}

img {
  border-radius: 50%;
  border: 1px solid #aaa;
  /* 让图片和文字垂直居中 */
  vertical-align: middle;
}

.check {
  border-color: var(--color-tint);
  background-color: var(--color-tint);
}
</style>