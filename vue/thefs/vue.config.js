const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // 开启代理服务器（1）
  // 只能配置一个代理，不能灵活配置走不走代理
// devServer: {
//   proxy:'http://localhost:5000'
// },
devServer: {
  proxy: {
    // 请求前缀api 走代理
    '/atguigu': {
      target: 'http://localhost:5000',
      pathRewrite:{'^/atguigu':''},
      ws: true,//用于支持websocket
      changeOrigin: true//默认为false
    },
    '/demo': {
      target: 'http://localhost:5001',
      pathRewrite:{'^/demo':''},
      ws: true,//用于支持websocket
      changeOrigin: true//默认为false
    }
  }
}
})
