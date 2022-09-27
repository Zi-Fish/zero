const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  productionSourceMap:false,
  devServer:{
    proxy:{
      '/api':{
        target:'http://127.0.0.1:8085',
        // 路径重写
        // pathRewrite:{'^/api':''},
      },
    },
  },
});
