<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <tab-control class="tab-control1" 
                   :titles="['流行', '古典', '民族']"  
                   @tabClick="tabClick"
                   ref="tabControl1"
                   v-show="isTabFixed">
          </tab-control>
    <scroll class="content"  
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="pullingUp">
      <home-shopcart class="home-shopcart" 
                     :banners='banners' 
                     @swiperImgLoad="swiperImgLoad">
      </home-shopcart>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '古典', '民族']"  
                   @tabClick="tabClick"
                   ref="tabControl">
      </tab-control>
      <goods-list :goods= "goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTope"></back-top>

  </div>
</template>

<script>
// 单独组件
import HomeShopcart from './childComps/HomeShopcart';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView'

//公共业务部分
import NavBar from '@/components/common/NavBar/NavBar';
import TabControl from '@/components/content/tabControl/TabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import BackTop from '@/components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from '@/network/home';
import {debounce} from '@/common/utlis'
import {itemLisenerMixin} from '@/common/mixin'

import Scroll from '@/components/common/scroll/Scroll';
export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },

      currentType: 'pop',
      isShowBackTope: false,
      topOffsetTop: false,
      isTabFixed: false,
      saveY: 0,
    }
  },
  mixins: [itemLisenerMixin],
  components: {
    HomeShopcart,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
  },
  //进入组件时创建
  activated() {
    //滚动到该位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  },
  //离开组件时调用该钩子函数
  deactivated() {
    //记录离开组件时滚动的位置
    this.saveY = this.$refs.scroll.scroll.y;
    //取消全局监听事件
    this.$bus.$off('itemImgLoad', this.itemImgLisener)
  },
  //当组件创建完执行
  created() {
    //1.请求多个数据
    this.getHomeMultidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {},
  methods: {
    //事件监听相关方法部分
    //1.监听点击了哪个，把对应的typw传过去
    tabClick(index) {
      // console.log(index);
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      };
      //1.1 两个相同的组件统一一下type
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl.currentIndex = index
    },
    //1.监听点击回到顶部
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    //2.监听点击回到顶部图标显示与隐藏和导航栏
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTope = -(position.y) > 1000
      this.isTabFixed = -(position.y) > this.topOffsetTop
    },
    //3.监听上拉加载更多
    pullingUp() {
      this.getHomeGoods(this. currentType)
    },
    //4.监听轮播图图片加载完成
    swiperImgLoad() {
      this.topOffsetTop = this.$refs.tabControl.$el.offsetTop
    },

    //网络请求配置部分
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      });
    },
    
    getHomeGoods(type) {
      const page = this.goods[type].page +1
      getHomeGoods(type, page).then(res => {
        // console.log(res);  //这是整个data
        // console.log(res.data.list);  //拿到data里面30条数据
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  }
}


</script>

<style scoped>
  #home {
    /* height: 100vh; */
    /* position: relative; */
  }
  .home-nav {
    background-color: #ff8e96;
  }

  #home .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    color: #fff;
  }

  /* 原生用来转换显示和隐藏的方法 */
  /* .tab-control {
    position: sticky;
    top: 40px;
  } */

  .tab-control1 {
    position: relative;
    top: 44px;
    z-index: 1;
  }

  .content {
    /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>