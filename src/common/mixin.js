import {debounce} from './utlis'
import BackTop from "@/components/content/backTop/BackTop";


export const itemLisenerMixin = {
  data() {
    return {
    ItemImgLisener: null,
    refresh: null
    }
  },
  mounted() {
    //1..监听图片加载完成
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgLisener = () => {
      // this.$refs.scroll.refresh()
      this.refresh()
    }
    this.$bus.$on('ItemImgLoad', this.itemImgLisener);
  }
}

export const barTopMixin = {
  data() {
    return {
      isShowBackTope: false,
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
  components: {
    BackTop
  }
}