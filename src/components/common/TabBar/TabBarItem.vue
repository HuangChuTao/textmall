<template>
    <div @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <!-- 不可使用这种方法，因为插槽最终会被替换掉，我们应该在外面包给div，把属性交给它 -->
        <!-- <slot name="item-text" :class="{active: isActive}"></slot> -->
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
        }
    },
    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>


#tab-bar div {
    flex: 1;
    text-align: center;
    /* height: 49px; */
    margin-top: 3px;
    font-size: 12px;
}

#tab-bar img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
</style>