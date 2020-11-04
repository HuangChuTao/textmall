module.exports = {
  plugins:{ //风月事  残雪  明月天涯
    autoprefixer: {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, //视图宽度，对应设计稿的宽度
      viewportHeight: 667,  //视图高度，对应设计稿的高度
      unitPrecision: 5, //指定'px'转化为视图单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', //指定需要转化成的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], //指定不需要转化的类
      minPixelValue: 1, //小于或等于“1px”不需要转化为视窗单位
      mediaQUery: false, //是否允许在媒体查询中转化“px”
      exclode: [/TabBar/], //包含TabBar的字符串不转化
    }
  }
}