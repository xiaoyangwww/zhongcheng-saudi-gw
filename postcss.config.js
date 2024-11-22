

module.exports = {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 16, // 基础的根元素字体大小 (1rem = 16px)
        propList: ['*'], // 转换哪些属性，['*'] 表示全部属性
        unitPrecision: 5, // 转换结果的小数位数精度
        selectorBlackList: [], // 忽略的选择器 (不会被转换)
        replace: true, // 是否直接替换 px 值
        mediaQuery: false, // 是否在媒体查询中转换 px
        minPixelValue: 0, // 小于或等于该值的 px 不会被转换
      }),
    ],
  };
  