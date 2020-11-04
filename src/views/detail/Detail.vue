<template>
  <!-- 详情页 -->
  <div class="detail">
    <detail-nav-bar ref="nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll
      class="centents"
      ref="scroll"
      :pullUpLoad="true"
      :probeType="3"
      @scroll="scroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info class="box" :goods="goods"></detail-base-info>
      <detail-shop-info class="box" :shop="shop" />
      <detail-goods-info
        class="box"
        :detailInfo="detailInfo"
        @imgLoad="imgLoad"
        ref="dgi"
      />
      <detail-params-info class="box" ref="params" :ParamsInfo="ParamsInfo" />
      <detail-comment-info
        class="box"
        ref="comment"
        :commentInfo="commentInfo"
      />
      <goods-list ref="list" :goods="recommends" />
    </scroll>
    <detail-bottom-bar @addCart="addCart" />
    <back-top @click.native="backClick" v-show="isShowBackTope" />
    <!-- <toast :message="message" :show="show"/> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailBottomBar from "./childComps/DetailBottomBar";
import Toast from '@/components/common/toast/Toast'

import Scroll from "@/components/common/scroll/Scroll";

import { getDetail, Goods, Shop, Params, getRecommend } from "@/network/detail";
import { itemLisenerMixin, barTopMixin } from "@/common/mixin";
import { debounce } from "@/common/utlis";
import {mapActions} from "vuex"
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      ParamsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message: '',
      show: false
    };
  },
  mixins: [itemLisenerMixin, barTopMixin],
  methods: {
    ...mapActions(['addCart']),
    //1.监听图片加载完成
    imgLoad() {
      // 方法一：
      // this.$refs.scroll.refresh()
      // 方法二：
      // const refrefsh = debounce('this.$refs.scroll.refrefsh()', 100)
      this.refresh();
      this.getThemeTopY();
    },

    //2.点击跳转到相应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 600);
    },

    //3.滚动到某位置显示对应标题
    scroll(position) {
      // 1.保存Y值
      const positoinY = -position.y;
      // console.log(positoinY)
      this.isShowBackTope = -position.y > 1000;


      //2.拿y值与themeTopYs进行比较
      let length = this.themeTopYs.length;
      let themeTopYs = this.themeTopYs;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positoinY > themeTopYs[i] &&
          positoinY < themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
          // if (this.currentIndex !== i
          //  && ((i < length - 1 && positoinY > themeTopYs[i] && positoinY < themeTopYs[i+1])
          // || (i === length - 1 && positoinY >= themeTopYs[i]))) {
          //   this.currentIndex = i
          //   console.log(this.currentIndex);
          //   this.$refs.nav.currentIndex = this.currentIndex;
          // }
        }
      }
    },
    addCart() {
      // 1.获取购物车需要展示的信息
      const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

      //2.将商品添加到购物车
      // this.addCart(product).then(res => {
      //   console.log(res);
      // })
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.show(res, 1500)
      })
    }

    
  },
  created() {
    //1.保存详情页所有数据
    this.iid = this.$route.params.iid;
    //2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      const data = res.result;
      //2.1保存详情页轮播图数据到data中
      console.log(res);
      this.topImages = data.itemInfo.topImages;

      //2.2获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //2.3获取商家信息
      this.shop = new Shop(data.shopInfo);

      //2.4获取产品图片数据
      this.detailInfo = data.detailInfo;

      //2.5尺码数据
      this.ParamsInfo = new Params(data.itemParams.info, data.itemParams.rule);

      //2.6获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    // 3.请求详情页推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    //4.用防抖封装点击跳到相应位置
    this.getThemeTopY = debounce(() => {
      // if (this.$refs.params && this.$refs.comment && this.$refs.list) {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.list.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(Number.MAX_VALUE);
      // }
    }, 100);
  },

  destroyed() {
    //离开组件scroll不刷新
    this.$bus.$off("ItemImgLoad", this.ItemImgLisener);
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast
  },
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}
.centents {
  height: calc(100% - 93px);
  /* overflow: hidden;
  margin-top: 44px; */
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>