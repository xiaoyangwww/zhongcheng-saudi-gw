module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 9090,
        open: true, // 自动打开浏览器
    },
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 190
              })
            ]
          }
        }
      },
      
}
